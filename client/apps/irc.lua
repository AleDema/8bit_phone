local ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) 
      ESX = obj 
    end)

    Citizen.Wait(0)
  end
end)

RegisterNetEvent('8bit_phone:client:ReceiveNewIRCMessage')
AddEventHandler('8bit_phone:client:ReceiveNewIRCMessage', function(data)
    TriggerServerEvent('mythic_sounds:server:PlayWithinDistance', 10.0, 'text_message', 0.05 * (Config.Settings.volume / 100))
    TriggerEvent('notification', 'You Received An IRC Message On Channel: '.. data.channel)
    SendNUIMessage({
        action = 'receiveIRCChat',
        channel = data.channel,
        message = data.message
    })
end)

RegisterNUICallback('IRCJoinChannel', function(data, cb)
  ESX.TriggerServerCallback('8bit_phone:server:IRCJoinChannel', function(callback)
    cb(callback)
  end, data)
end)

RegisterNUICallback('IRCLeaveChannel', function(data, cb)
  ESX.TriggerServerCallback('8bit_phone:server:IRCLeaveChannel', function(callback)
    cb(callback)
  end, data)
end)

RegisterNUICallback('IRCGetMessages', function(data, cb)
  ESX.TriggerServerCallback('8bit_phone:server:IRCGetMessages', function(callback)
  cb(callback)
  end, data)
end)

RegisterNUICallback('IRCNewMessage', function(data, cb)
  ESX.TriggerServerCallback('8bit_phone:server:IRCNewMessage', function(callback)
    cb(callback)
  end, data)
end)