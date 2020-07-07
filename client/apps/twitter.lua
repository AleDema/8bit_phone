local ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) 
      ESX = obj 
    end)
    Citizen.Wait(0)
  end
end)

RegisterNetEvent('8bit_phone:client:ReceiveNewTweet')
AddEventHandler('8bit_phone:client:ReceiveNewTweet', function(tweet)
  SendNUIMessage({
    action = 'ReceiveNewTweet',
    tweet = tweet
  })
end)

RegisterNetEvent('8bit_phone:client:MentionedInTweet')
AddEventHandler('8bit_phone:client:MentionedInTweet', function(author)
    --local app = GetAppData('twitter')
    --UpdateAppUnread('twitter', app.unread + 1)

    PlaySound(-1, "Event_Start_Text", "GTAO_FM_Events_Soundset", 0, 0, 1)
    TriggerEvent('notification', '@' .. author .. ' Mentioned You In A Tweet', 1, 2500)
end)

RegisterNUICallback('NewTweet', function(data, cb)
  cb(true)
    ESX.TriggerServerCallback('8bit_phone:server:NewTweet', function(callback)
      --cb(callback)
    end, { message = data.message, mentions = data.mentions, hashtags = data.hashtags })
end)