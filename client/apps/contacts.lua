local ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) 
      ESX = obj 
    end)

    Citizen.Wait(0)
  end
end)

RegisterNUICallback('CreateContact', function(data, cb)
    ESX.TriggerServerCallback('8bit_phone:server:CreateContact', function(callback)
      cb(callback)
    end, { name = data.name, number = data.number } )
end)

RegisterNUICallback('EditContact', function(data, cb)
    ESX.TriggerServerCallback('8bit_phone:server:EditContact', function(callback)
      cb(callback)
    end, { name = data.name, number = data.number, originName = data.originName, originNumber = data.originNumber } )
end)

RegisterNUICallback('DeleteContact', function(data, cb)
  ESX.TriggerServerCallback('8bit_phone:server:DeleteContact', function(callback)
    cb(callback)
  end, { name = data.name, number = data.number } )
end)