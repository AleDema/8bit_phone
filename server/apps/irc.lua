RegisterServerEvent('mythic_base:server:irc')
AddEventHandler('mythic_base:server:irc', function()
local src = source
local player = ESX.GetPlayerFromId(source)

    Citizen.CreateThread(function()
        local myChannels = {}
         exports['ghmattimysql']:execute('SELECT channel FROM phone_irc_channels WHERE identifier = @identifier', { ['identifier'] = player.identifier }, function(channels) 
            TriggerClientEvent('8bit_phone:client:SetupData', src, { { name = 'irc-channels', data = channels } })
        end)
    end)
end)

ESX.RegisterServerCallback('8bit_phone:server:IRCJoinChannel', function(source, cb, data)
    local src = source
    local player = ESX.GetPlayerFromId(source)

    exports['ghmattimysql']:execute('INSERT INTO phone_irc_channels (identifier, channel) VALUES(@identifier, @channel)', { ['identifier'] = player.identifier, ['channel'] = data.channel }, function(status)
        cb(status.affectedRows > 0)
    end)
    Citizen.Wait(1000)
    exports['ghmattimysql']:execute('SELECT channel FROM phone_irc_channels WHERE identifier = @identifier', { ['identifier'] = player.identifier }, function(channels) 
        TriggerClientEvent('8bit_phone:client:SetupData', src, { { name = 'irc-channels', data = channels } })
    end)
end)

ESX.RegisterServerCallback('8bit_phone:server:IRCLeaveChannel', function(source, cb, data)
    local src = source
    local player = ESX.GetPlayerFromId(source)

    exports['ghmattimysql']:execute('DELETE FROM phone_irc_channels WHERE identifier = @identifier AND channel = @channel', { ['identifier'] = player.identifier, ['channel'] = data.channel }, function(status)
        cb(status.affectedRows > 0)
    end)
end)

ESX.RegisterServerCallback('8bit_phone:server:IRCGetMessages', function(source, cb, data)
    local src = source
    local player = ESX.GetPlayerFromId(source)

    exports['ghmattimysql']:scalar('SELECT joined FROM phone_irc_channels WHERE identifier = @identifier AND channel = @channel', { ['identifier'] = player.identifier, ['channel'] = data.channel }, function(joined)
        if joined ~= nil then
            exports['ghmattimysql']:execute('SELECT * FROM phone_irc_messages WHERE channel = @channel', { ['channel'] = data.channel }, function(msgs)
                cb(msgs)
            end)
        else
            cb(nil)

            print("lolk")
        end
    end)
end)

ESX.RegisterServerCallback('8bit_phone:server:IRCNewMessage', function(source, cb, data)
    local src = source
    local player = ESX.GetPlayerFromId(source)

    exports['ghmattimysql']:scalar('SELECT channel FROM phone_irc_channels WHERE identifier = @identifier AND channel = @channel', { ['identifier'] = player.identifier, ['channel'] = data.channel }, function(channel)
        if channel ~= nil then
            exports['ghmattimysql']:execute('INSERT INTO phone_irc_messages (channel, message) VALUES(@channel, @message)', { ['channel'] = data.channel, ['message'] = data.message }, function(res)
                if res.affectedRows > 0 then
                    Citizen.CreateThread(function()
                        exports['ghmattimysql']:execute('SELECT * FROM phone_irc_channels WHERE channel = @channel', { ['channel'] = data.channel }, function(data2)
                            for k, v in ipairs(data2) do
                                    local otherplayer = ESX.GetPlayerFromIdentifier(v.identifier).source
                                    local tPlayer = v.identifier
                                        TriggerClientEvent('8bit_phone:client:ReceiveNewIRCMessage', otherplayer, { channel = data.channel, message = data.message })
                            end
                        end)
                    end)
                end
                    
                cb(res.affectedRows > 0)
            end)
        else
            cb(nil)
        end
    end)
end)