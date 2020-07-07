-- Including This Stuff Here To Ensure No Other Resources Are Needed. But Would Suggest At least
-- Changing So Locations Are Pulled From Your Bank Resource So You Dont Have Shit Defined In Many Places

local atmModels = {
    [-1126237515] = true,
    [506770882] = true,
    [-1364697528] = true,
    [-870868698] = true,
}

local banks = {
    { x = 150.266, y = -1040.203, z = 29.374 },
    { x = -1212.980, y = -330.841, z = 37.787 },
    { x = -2962.582, y = 482.627, z = 15.703 },
    { x = -112.202, y = 6469.295, z = 31.626},
    { x = 314.187, y = -278.621, z = 54.170 },
    { x = -351.534, y = -49.529, z = 49.042 },
    { x = 241.727, y = 220.706, z = 106.286 },
    { x = 1176.82, y = 2705.26, z = 38.088 },
}

function FindNearestATM()
	local coords = GetEntityCoords(PlayerPedId())
	local atms = {}
	local handle, object = FindFirstObject()
	local success

	repeat
		if atmModels[GetEntityModel(object)] then
			table.insert(atms, object)
		end

        success, object = FindNextObject(handle, object)
	until not success

	EndFindObject(handle)

	local atmObject = 0
	local atmDistance = 1000

    for k,v in pairs(atms) do
        
        local dstcheck = #(vector3(coords.x, coords.y, coords.z) - GetEntityCoords(v))

		if dstcheck < atmDistance then
			atmDistance = dstcheck
			atmObject = v
		end
	end

	return atmObject, atmDistance
end

function FindNearestBranch()
    local plyPos = GetEntityCoords(PlayerPedId())

    local shortest = 100000
    local bank = nil
    for k, v in ipairs(banks) do
        local dist = #(vector3(v.x, v.y, v.z) - plyPos)
        if dist < shortest then
            shortest = dist
            bank = v
        end
    end

    return bank
end

RegisterNetEvent('mythic_base:client:BankBalanceChanged')
AddEventHandler('mythic_base:client:BankBalanceChanged', function(account, balance)
    SendNUIMessage({
        action = 'BankBalanceUpdate',
        account = account,
        balance = balance
    })
end)

RegisterNUICallback('FindNearestAtm', function(data, cb)
    local o, d = FindNearestATM()
    local pos = GetEntityCoords(o)
    SetNewWaypoint(pos.x, pos.y)
end)

RegisterNUICallback('FindNearestBranch', function(data, cb)
    local bank = FindNearestBranch()
    SetNewWaypoint(bank.x, bank.y)
end)

RegisterNUICallback('GetBankTransactions', function(data, cb)
    Callbacks:ServerCallback('8bit_phone:server:GetBankTransactions', data, cb)
end)

RegisterNUICallback('Transfer', function(data, cb)
    Callbacks:ServerCallback('8bit_phone:server:Transfer', data, cb)
end)

RegisterNUICallback('MazePay', function(data, cb)
    Callbacks:ServerCallback('8bit_phone:server:MazePay', data, cb)
end)