local ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) 
      ESX = obj 
    end)

    Citizen.Wait(0)
  end
end)

RegisterNetEvent('8bit_phone:client:ReceiveAd')
AddEventHandler('8bit_phone:client:ReceiveAd', function(advert)
    --if advert.phone ~= CharData.phone then
        SendNUIMessage({
            action = 'ReceiveAd',
            advert = advert
        })
        print(advert.id)
    --end
end)

RegisterNetEvent('8bit_phone:client:DeleteAd')
AddEventHandler('8bit_phone:client:DeleteAd', function(id)
    --if id ~= CharData.id then
        SendNUIMessage({
            action = 'DeleteAd',
            id = id
        })
    --end
end)

RegisterNUICallback('NewAd', function(data, cb)
    ESX.TriggerServerCallback('8bit_phone:server:NewAd', function(callback)
        cb(callback)
    end, data)
end)

RegisterNUICallback('DeleteAd', function(data, cb)
    ESX.TriggerServerCallback('8bit_phone:server:DeleteAd', function(callback)
        cb(callback)
    end, data)
end)