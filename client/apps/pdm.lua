local ESX = nil

local PDMData = {}

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) 
      ESX = obj 
    end)

    Citizen.Wait(0)
  end
end)

RegisterNetEvent('8bit_phone:client:GetPDM')
AddEventHandler('8bit_phone:client:GetPDM', function()
    Citizen.CreateThread(function()
    TriggerEvent('8bit_phone:client:SetupData', { { name = 'pdm', data = PDMData } })
    end)
end)

local lol = 6000
local ipressed = false

local Towables = {}

RegisterNetEvent('LOLXD:MarkForRepo')
AddEventHandler('LOLXD:MarkForRepo', function(vehicles)
	while not ESX do Citizen.Wait(0); end
	while not ESX.IsPlayerLoaded() do Citizen.Wait(0); end
	local plyData = ESX.GetPlayerData()
	if ESX.GetPlayerData().job.name ~= 'mechanic' and ESX.GetPlayerData().job.name ~= 'cardealer' then return; end
	Towables = Towables or {}
	for k,v in pairs(vehicles) do table.insert(Towables, v); end
end)

RegisterNUICallback('RefreshPDM', function(data, cb)
    TriggerEvent("8bit_phone:client:GetPDM")
    if ESX.GetPlayerData().job.name == 'cardealer' or ESX.GetPlayerData().job.name == 'mechanic' then
    print("refreshing")
    if ipressed == true then
        TriggerEvent("notification", "Please wait "..lol.." Miliseconds.")
    end
    if ipressed == false then
        ipressed = true
        table.remove(Towables)
        Towables = {}
        TriggerEvent("notification", "Please wait a couple 15 seconds to get Repo Data...")
        ESX.TriggerServerCallback('JAM_VehicleFinance:PhoneLOL', function(pdmshit)
            TriggerEvent("LOLXD:MarkForRepo", pdmshit)
        end)
            Wait(12000)
        PDMData = {}
        Wait(0)
        for k,v in pairs(Towables) do
            print(v.firstname)
            Citizen.Wait(1)
            if v.firstname == "Probably Dead" then
            else
                print(v.firstname)
                table.insert(PDMData,
                {
                    id = math.random(1,100000),
                    author = "VEHICLE OWNER : "..v.firstname.." "..v.lastname,
                    number = 'PLATE : '..v.plate,
                    title = v.phone_number,
                    message = 'OWED : '..v.finance
                })
            end
                
        end
    end
    
    print("Done")
    Citizen.Wait(1)
    while ipressed == true do
        Citizen.Wait(1)
        lol = lol - 1
        --TriggerEvent("notification", lol)
        if lol == 0 then
            ipressed = false
            lol = 6000
        end
    end
else
    TriggerEvent("notification", "Your not a car dealer or mechanic")
    PDMData = {}
    TriggerEvent("8bit_phone:client:GetPDM")
end
end)

--[[
    
local lol = 6000
local ipressed = false

RegisterNUICallback('RefreshGarage', function(data, cb)
    print("refreshing")
    if ipressed == true then
        TriggerEvent("notification", "Please wait "..lol.." Seconds.")
    end
    if ipressed == false then
        ipressed = true
        GarageData = {}
        Wait(0)
        ESX.TriggerServerCallback("fuckingphone:fetchPlayerVehicles", function(fetchedVehicles)

            for key, vehicleData in ipairs(fetchedVehicles) do
                local vehicleProps = vehicleData["props"]

                table.insert(GarageData,           {
                    id = math.random(1,1000),
                    author = vehicleData["name"],
                    number = vehicleData["owner"],
                    title = "",
                    message = vehicleData["active"]
                })
                TriggerEvent("8bit_phone:client:GetGarage")
            end
        end)
    end
    Citizen.Wait(1)
    while ipressed == true do
        Citizen.Wait(1)
        lol = lol - 1
        --TriggerEvent("notification", lol)
        if lol == 0 then
            ipressed = false
            lol = 6000
        end
    end
end)


]]