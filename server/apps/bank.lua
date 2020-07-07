ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterServerEvent('mythic_base:server:CharacterSpawned')
AddEventHandler('mythic_base:server:CharacterSpawned', function()
    local src = source
    local xPlayer  = ESX.GetPlayerFromId(source)
    local money = getIdentityMoney(source)

    TriggerEvent('esx_license:getLicenses', src, function(licenses)
		TriggerClientEvent('esx_dmvschool:loadLicenses', src, licenses)
    end)

    TriggerClientEvent("garage:getlicense",src, "drive")
    TriggerClientEvent("garage:getlicense",src, "bike")
    local driving = nil
    local drivingbike = nil
    if driving == 1 then
        driving = "You have a license"
    elseif driving == 0 then
        driving = "You dont have a license"
    elseif driving == nil then
        driving = "Loading..."
    end
    if drivingbike == 1 then
        drivingbike = "You have a license"
    elseif drivingbike == 0 then
        drivingbike = "You dont have a license"
    elseif drivingbike == nil then
        drivingbike = "Loading..."
    end
end)

RegisterServerEvent('garage:changevalue1')
AddEventHandler('garage:changevalue1', function(value)
    local src = source
    driving = value
end)

RegisterServerEvent('garage:changevalue2')
AddEventHandler('garage:changevalue2', function(value)
    local src = source
    drivingbike = value
end)

function getIdentityMoney(source)
    local identifier = GetPlayerIdentifiers(source)[1]
    local result = MySQL.Sync.fetchAll("SELECT * FROM users WHERE identifier = @identifier", {['@identifier'] = identifier})
    if result[1] ~= nil then
        local identity = result[1]

        return {
            identifier = identity['identifier'],
            firstname = identity['firstname'],
            lastname = identity['lastname'],
            dateofbirth = identity['dateofbirth'],
            sex = identity['sex'],
            height = identity['height'],
            property = identity['last_property'],

            bank = identity['bank']
            
        }
    else
        return nil
    end
end

AddEventHandler('mythic_base:shared:ComponentsReady', function()
    Callbacks = Callbacks or exports['mythic_base']:FetchComponent('Callbacks')

    --[[ Probably should just convert most of this shit to the banking resource and call it through export ]]
    Callbacks:RegisterServerCallback('8bit_phone:server:GetBankTransactions', function(source, data, cb)
        local char = exports['mythic_base']:FetchComponent('Fetch'):Source(source):GetData('character')

        local history = {}
        exports['ghmattimysql']:execute('SELECT * FROM bank_account_transactions WHERE origin_account = @account OR destination_account = @account ORDER BY date DESC LIMIT 50', { ['account'] = data.account }, function(transactions)
            for k, v in ipairs(transactions) do
                local type = 0 -- Default to cash deposit

                if v.origin_account ~= nil and v.destination_account ~= nil then
                    if v.account == data.account then -- Transfer From
                        type = 2
                    else -- Transfer To
                        type = 3
                    end
                else
                    if v.destination_account == nil then -- Cash Withdrawal
                        type = 1
                    end
                end
                
                table.insert(history, {
                    account = data.account,
                    amount = v.amount,
                    date = v.date,
                    note = v.note,
                    type = type
                })
            end

            cb(history)
        end)
    end)

    Callbacks:RegisterServerCallback('8bit_phone:server:Transfer', function(source, data, cb)
        if tonumber(data.amount) >= 500 and tonumber(data.amount) <= 100000 then
            local char = exports['mythic_base']:FetchComponent('Fetch'):Source(source):GetData('character')
            char.Bank.Transfer:Create(tonumber(data.account), tonumber(data.destination), tonumber(data.amount), cb)
        else
            cb(false)
        end
    end)

    Callbacks:RegisterServerCallback('8bit_phone:server:MazePay', function(source, data, cb)
        if tonumber(data.amount) >= 100 and tonumber(data.amount) <= 10000 then
            if source ~= tonumber(data.destination) then
                local char = exports['mythic_base']:FetchComponent('Fetch'):Source(source):GetData('character')
                char.MazePay:Transfer(tonumber(data.destination), tonumber(data.amount), cb)
            else
                cb(false)
            end
        else
            cb(false)
        end
    end)
end)