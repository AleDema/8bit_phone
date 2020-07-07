ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterServerEvent('mythic_base:server:UpdateTwotter')
AddEventHandler('mythic_base:server:UpdateTwotter', function()
    local src = source
    Citizen.CreateThread(function()
        exports['ghmattimysql']:execute('SELECT * FROM phone_tweets ORDER BY time DESC', {}, function(tweets) 
            TriggerClientEvent('8bit_phone:client:SetupData', src, { { name = 'tweets', data = tweets } })
        end)
    end)
end)

function getIdentityTweet(source)
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
            phone_number = identity['phone_number']
            
        }
    else
        return nil
    end
end

ESX.RegisterServerCallback('8bit_phone:server:NewTweet', function(source, cb, data)
local src = source
local thingy = getIdentityTweet(src)
local char = ESX.GetPlayerFromId(src)

local author = thingy.firstname .. '_' .. thingy.lastname

    Citizen.CreateThread(function()
        local tweet = {}

        local users = ESX.GetPlayers()

        if data.mentions ~= nil then
          for k, v in pairs(data.mentions) do
              for k2, v2 in pairs(users) do
                  local mPlayer = getIdentityTweet(v2)
                  --local c2 = mPlayer:GetData('character')
                  if ('@' .. mPlayer.firstname .. '_' .. mPlayer.lastname) == v then
                      TriggerClientEvent('8bit_phone:client:MentionedInTweet', v2, author)
                  end
              end
          end
      end

        exports['ghmattimysql']:execute('INSERT INTO phone_tweets (`identifier`, `author`, `message`) VALUES(@identifier, @author, @message)', { ['identifier'] = char.identifier, ['author'] = author, ['message'] = data.message }, function(status)
            if status.affectedRows > 0 then
                tweet.author = author
                tweet.message = data.message
                tweet.time = data.time
            cb(tweet)
        else
            cb(false)
            end
        end)

        TriggerClientEvent('8bit_phone:client:ReceiveNewTweet', -1, {author, data.message, data.time})
        --TriggerEvent("8bit_phone:twitter_newTweets", author, data.message, char.name, char.identifier)
        TriggerClientEvent('notify', -1, '@' .. author, data.message, 'tweet', 9000)
    end)
end)

AddEventHandler('8bit_phone:twitter_newTweets', function (author, message, sname, shex)
  -- print(json.encode(tweet))
  local discord_webhook = GetConvar('discord_webhook', 'https://discordapp.com/api/webhooks/657340246668607541/ZH06BBcQFvKeHTO6XM9NjKbb2w2MkPqlbCGZYNIeVlRAzknAah334bQmSJLfni5UnUhw')
  if discord_webhook == '' then
    return
  end
  local headers = {
    ['Content-Type'] = 'application/json'
  }
  local data = {
    ["username"] = '@' .. author .. '',
    ["embeds"] = {{
      ["thumbnail"] = {
        ["url"] = SystemAvatar
      },
      ["fields"] = {
        {
            ["name"] = 'Steam Name',
            ["value"] = sname,
        },
        {
            ["name"] = 'Steam HEX',
            ["value"] = shex,
        },
    },
      ["color"] = 1942002,
      --["timestamp"] = 'time'
    }},
  }
  local isHttp = string.sub(message, 0, 7) == 'http://' or string.sub(message, 0, 8) == 'https://'
  local ext = string.sub(message, -4)
  local isImg = ext == '.png' or ext == '.pjg' or ext == '.gif' or string.sub(message, -5) == '.jpeg'
  if (isHttp and isImg) and true then
    data['embeds'][1]['image'] = { ['url'] = message }
  else
    data['embeds'][1]['title'] = author
    data['embeds'][1]['description'] = message
  end
  PerformHttpRequest(discord_webhook, function(err, text, headers) end, 'POST', json.encode(data), headers)
end)

-- cron

function CronTask(d, h, m)
  if d == 2 then
    print('Task done')
  end
end

TriggerEvent('cron:runAt', 11, 30, CronTask)