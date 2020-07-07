local Advertisements = {}

function CreateAd(adData)
    Advertisements[adData.id] = adData
    TriggerClientEvent('8bit_phone:client:ReceiveAd', -1, Advertisements[adData.id])
    return Advertisements[adData.id] ~= nil
end

function DeleteAd(source)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(source)

    if xPlayer ~= nil then
        local char = xPlayer.identifier
        
        if char ~= nil then
            local id = char
            Advertisements[id] = nil
            TriggerClientEvent('8bit_phone:client:DeleteAd', -1, id)
        else
            return false
        end

        return true
    else
        return false
    end    
end

RegisterServerEvent('mythic_base:server:Logout')
AddEventHandler('mythic_base:server:Logout', function()
    DeleteAd(source)
end)

RegisterServerEvent('8bit_phone:server:GetAds')
AddEventHandler('8bit_phone:server:GetAds', function()
    local src = source
    Citizen.CreateThread(function()
        TriggerClientEvent('8bit_phone:client:SetupData', src, { { name = 'adverts', data = Advertisements } })
    end)
end)

AddEventHandler('playerDropped', function()
    DeleteAd(source)
end)

ESX.RegisterServerCallback('8bit_phone:server:NewAd', function(source, cb, data)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(source)
    local cData = getIdentity(src)

    cb(CreateAd({
        id = xPlayer.identifier,
        author = cData.firstname .. ' ' .. cData.lastname,
        number = cData.phone_number,
        date = data.date,
        title = data.title,
        message = data.message .. " - " .. cData.phone_number
    }))
    TriggerEvent("8bit_phone:newad", cData.firstname .. ' ' .. cData.lastname, data.title, " - " .. cData.phone_number, xPlayer.name, xPlayer.identifier)
end)

RegisterServerEvent('8bit_phone:server:NewAdOnDuty')
AddEventHandler('8bit_phone:server:NewAdOnDuty', function(title, message)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(source)
    local cData = getIdentity(src)

    CreateAd({
        id = xPlayer.identifier,
        author = cData.firstname .. ' ' .. cData.lastname,
        number = cData.phone_number,
        date = os.time(),
        title = title,
        message = message .. " - " .. cData.phone_number
    })
end)

AddEventHandler('8bit_phone:newad', function (author, title, msg, sname, shex)
  -- print(json.encode(tweet))
  local discord_webhook = GetConvar('discord_webhook', 'https://discordapp.com/api/webhooks/661385091708223539/Kx29wT_IVkow28ywHJerwtcO0YF-dV1IoIl40nQARjunqn_GxmSt5-KhXBthMJ68Sq18')
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
            ["name"] = 'Ad Message',
            ["value"] = msg,
        },
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
  local isHttp = string.sub(title, 0, 7) == 'http://' or string.sub(title, 0, 8) == 'https://'
  local ext = string.sub(title, -4)
  local isImg = ext == '.png' or ext == '.pjg' or ext == '.gif' or string.sub(title, -5) == '.jpeg'
  if (isHttp and isImg) and true then
    data['embeds'][1]['image'] = { ['url'] = title }
  else
    data['embeds'][1]['title'] = author
    data['embeds'][1]['description'] = title
  end
  PerformHttpRequest(discord_webhook, function(err, text, headers) end, 'POST', json.encode(data), headers)
end)

ESX.RegisterServerCallback('8bit_phone:server:DeleteAd', function(source, cb, data)
    cb(DeleteAd(source))
end)