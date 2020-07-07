local ESX = nil

local GarageData = {}

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) 
      ESX = obj 
    end)

    Citizen.Wait(0)
  end
end)

RegisterNetEvent('8bit_phone:client:GetGarage')
AddEventHandler('8bit_phone:client:GetGarage', function()
    Citizen.CreateThread(function()
    TriggerEvent('8bit_phone:client:SetupData', { { name = 'garage', data = GarageData } })
    end)
end)

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
                    id = math.random(1,10000),
                    author = vehicleData["plate"],
                    number = "GARAGE: "..vehicleData["garage"],
                    title = "",
                    message = GetLabelText(GetDisplayNameFromVehicleModel(vehicleProps["model"]))
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