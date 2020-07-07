ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterServerEvent('8bit_phone:server:GetTexts')
AddEventHandler('8bit_phone:server:GetTexts', function()
local src = source
local player = ESX.GetPlayerFromId(source)
local thingy = getNumberPhone(player.identifier)
    Citizen.CreateThread(function()
        exports['ghmattimysql']:execute('SELECT * FROM phone_texts WHERE (sender = @number AND sender_deleted = 0) OR (receiver = @number AND receiver_deleted = 0)', { ['number'] = thingy }, function(messages) 
            TriggerClientEvent('8bit_phone:client:SetupData', src, { { name = 'messages', data = messages } })
        end)
    end)
end)

function getMessages(identifier)
    local result = MySQL.Sync.fetchAll("SELECT phone_texts.* FROM phone_texts LEFT JOIN users ON users.identifier = @identifier WHERE phone_texts.receiver = users.phone_number OR phone_texts.sender = users.phone_number", {
         ['@identifier'] = identifier
    })
    return result
end

function getIdentityMsgs(source)
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

ESX.RegisterServerCallback('8bit_phone:server:SendText', function(source, cb, data)
local src = source
local thingy = getIdentityTweet(src)
    
    Citizen.CreateThread(function()
        exports['ghmattimysql']:execute('INSERT INTO phone_texts (`sender`, `receiver`, `message`) VALUES(@sender, @receiver, @message)', { ['sender'] = thingy.phone_number, ['receiver'] = data.receiver, ['message'] = data.message }, function(status)
            if status.affectedRows > 0 then
                exports['ghmattimysql']:execute('SELECT * FROM phone_texts WHERE id = @id', { ['id'] = status.insertId }, function(text)
                    if text[1] ~= nil then
                        cb(text[1])

                    local hi = getIdentifierByPhoneNumber(data.receiver)
                    local otherplayer = ESX.GetPlayerFromIdentifier(hi).source
                        if otherplayer ~= nil then
                            exports['ghmattimysql']:execute('SELECT * FROM phone_contacts WHERE number = @number AND identifier = @identifier', { ['number'] = thingy.phone_number, ['identifier'] = hi }, function(contact)
                                if contact[1] ~= nil then
                                    TriggerClientEvent('8bit_phone:client:ReceiveText', tonumber(otherplayer), contact[1].name, text[1])
                                else
                                    TriggerClientEvent('8bit_phone:client:ReceiveText', tonumber(otherplayer), thingy.phone_number, text[1])
                                end
                            end)
                        end
                    else
                        cb(false)
                    end
                end)
            else
                cb(false)
            end
        end)
    end)
end)


RegisterServerEvent('8bit_phone:server:SendTextbot')
AddEventHandler('8bit_phone:server:SendTextbot', function(textmsg)
local src = source
local thingy = getIdentityTweet(src)
    
    Citizen.CreateThread(function()
        exports['ghmattimysql']:execute('INSERT INTO phone_texts (`sender`, `receiver`, `message`) VALUES(@sender, @receiver, @message)', { ['sender'] = "000-000-0000", ['receiver'] = thingy.phone_number, ['message'] = textmsg }, function(status)
            if status.affectedRows > 0 then
                exports['ghmattimysql']:execute('SELECT * FROM phone_texts WHERE id = @id', { ['id'] = status.insertId }, function(text)
                    if text[1] ~= nil then
                        stat = (text[1])

                        TriggerClientEvent('8bit_phone:client:ReceiveText', src, "000-000-0000", text[1])
                    else
                        stat = (false)
                    end
                end)
            else
                stat = (false)
            end
        end)
    end)
end)

ESX.RegisterServerCallback('8bit_phone:server:DeleteConversation', function(source, cb, data)
local src = source
local thingy = getIdentityTweet(src)

        exports['ghmattimysql']:execute('UPDATE phone_texts SET sender_deleted = 1 WHERE sender = @me AND receiver = @other', { ['me'] = thingy.phone_number, ['other'] = data.number }, function(status1)
            exports['ghmattimysql']:execute('UPDATE phone_texts SET receiver_deleted = 1 WHERE receiver = @me AND sender = @other', { ['me'] = thingy.phone_number, ['other'] = data.number }, function(status2)
                cb(status1 ~= nil and status2 ~= nil)
            end)
        end)
end)