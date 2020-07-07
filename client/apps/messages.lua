local ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) 
      ESX = obj 
    end)

    Citizen.Wait(0)
  end
end)

RegisterNetEvent('8bit_phone:client:ReceiveText')
AddEventHandler('8bit_phone:client:ReceiveText', function(sender, text)
  --local app = GetAppData('message')
  --UpdateAppUnread('message', app.unread + 1)

    TriggerEvent("notification", 'You Received A Text From ' .. sender)
    PlaySound(-1, "Event_Start_Text", "GTAO_FM_Events_Soundset", 0, 0, 1)
    SendNUIMessage({
        action = 'receiveText',
        data = {
            sender = sender,
            text = text
        }
    })
end)

RegisterNUICallback('SendText', function(data, cb)
  cb(true)
  ESX.TriggerServerCallback('8bit_phone:server:SendText', function(callback)
    --cb(callback)
  end, data)
end)

RegisterNUICallback('DeleteConversation', function(data, cb)
    ESX.TriggerServerCallback('8bit_phone:server:DeleteConversation', function(callback)
      cb(callback)
    end, data)
end)