Calls = {}

function CreateCallRecord(sender, receiver, state)

end

AddEventHandler('playerDropped', function()
local src = source
local player = ESX.GetPlayerFromId(source)
local myData = getIdentityTweet(src)

    local mPlayer = player.identifier
    if mPlayer ~= nil then
        if Calls[myData.phone_number] ~= nil then
            local tPlayer = (Calls[myData.phone_number].number)
            if tPlayer ~= nil then
                TriggerClientEvent('8bit_phone:client:EndCall', src)
            else
                Calls[Calls[myData.phone_number].number]= nil
            end
            Calls[myData.phone_number] = nil
        end
    end
end)

RegisterServerEvent('mythic_base:server:CharacterSpawned')
AddEventHandler('mythic_base:server:CharacterSpawned', function()
local src = source
local player = ESX.GetPlayerFromId(source)
local MyNumber = getNumberPhone(player.identifier)

    Citizen.CreateThread(function()
        exports['ghmattimysql']:execute('SELECT * FROM phone_calls WHERE (sender = @number AND sender_deleted = 0) OR (receiver = @number AND receiver_deleted = 0) LIMIT 50', { ['number'] = MyNumber }, function(history) 
            TriggerClientEvent('8bit_phone:client:SetupData', src, { { name = 'history', data = history } })
        end)
    end)
end)


ESX.RegisterServerCallback('8bit_phone:server:CreateCall', function(source, cb, data)
    local src = source
    local player = ESX.GetPlayerFromId(source)
    local myData = getIdentityTweet(src)

    local numbersid = getIdentifierByPhoneNumber(data.number)
    local otherplayer = ESX.GetPlayerFromIdentifier(numbersid).source

    Citizen.Wait(500)
    exports['ghmattimysql']:execute('SELECT * FROM phone_contacts WHERE number = @number AND identifier = @identifier', { ['number'] = myData.phone_number, ['identifier'] = numbersid }, function(contact)

        Citizen.Wait(500)
            local tPlayer = numbersid
            if tPlayer ~= nil then
                if numbersid ~= myData.phone_number then
                    if Calls[data.number] ~= nil then
                        cb(-3)
                        exports['ghmattimysql']:execute('SELECT * FROM phone_contacts WHERE number = @number AND identifier = @identifier', { ['number'] = myData.phone_number, ['identifier'] = numbersid }, function(contact)
                            if contact[1] ~= nil then
                                TriggerClientEvent("notification", otherplayer, contact[1].name .. ' Tried Calling You, Sending Busy Response', 1)
                            elseif not contact[1] ~= nil then
                                TriggerClientEvent("notification", otherplayer, myData.phone_number .. ' Tried Calling You, Sending Busy Response', 1)
                            end
                        end)
                    else
                        exports['ghmattimysql']:execute('INSERT INTO phone_calls (sender, receiver, status, anon) VALUES(@sender, @receiver, @status, @anon)', {
                            ['sender'] = myData.phone_number,
                            ['receiver'] = data.number,
                            ['status'] = 0,
                            ['anon'] = data.nonStandard
                        }, function(status)
                            if status.affectedRows > 0 then
                                cb(1)

                                TriggerClientEvent('8bit_phone:client:CreateCall', src, myData.phone_number)
                                if data.nonStandard and not contact[1] ~= nil then
                                    TriggerClientEvent('8bit_phone:client:ReceiveCall', otherplayer, 'Anonymous Caller')
                                    TriggerClientEvent('mythic_notify:client:PersistentAlert', otherplayer, { id = Config.IncomingNotifId, action = 'start', type = 'inform', text = 'Recieve A Call From A Hidden Number', style = { ['background-color'] = '#ff8555', ['color'] = '#ffffff' } })
                                elseif data.nonStandard and contact[1] ~= nil then
                                    TriggerClientEvent('8bit_phone:client:ReceiveCall', otherplayer, 'Anonymous Caller')
                                    TriggerClientEvent('mythic_notify:client:PersistentAlert', otherplayer, { id = Config.IncomingNotifId, action = 'start', type = 'inform', text = 'Recieve A Call From A Hidden Number', style = { ['background-color'] = '#ff8555', ['color'] = '#ffffff' } })
                                elseif not data.nonStandard and contact[1] ~= nil then
                                    TriggerClientEvent('8bit_phone:client:ReceiveCall', otherplayer, myData.phone_number)
                                    TriggerClientEvent('mythic_notify:client:PersistentAlert', otherplayer, { id = Config.IncomingNotifId, action = 'start', type = 'inform', text = contact[1].name.. ' Is Calling You', style = { ['background-color'] = '#ff8555', ['color'] = '#ffffff' } })
                                elseif not data.nonStandard and not contact[1] ~= nil then
                                    TriggerClientEvent('8bit_phone:client:ReceiveCall', otherplayer, myData.phone_number)
                                    TriggerClientEvent('mythic_notify:client:PersistentAlert', otherplayer, { id = Config.IncomingNotifId, action = 'start', type = 'inform', text = myData.phone_number.. ' Is Calling You', style = { ['background-color'] = '#ff8555', ['color'] = '#ffffff' } })
                                end

                                Calls[myData.phone_number] = {
                                    number = data.number,
                                    status = 0,
                                    record = status.insertId
                                }
                                Calls[data.number] = {
                                    number = myData.phone_number,
                                    status = 0,
                                    record = status.insertId
                                }
                            else
                                cb(-1)
                            end
                        end)
                    end
                elseif numbersid == myData.phone_number then
                    cb(-2)
                end
            else
                cb(-1)
            end
    end)
end)

ESX.RegisterServerCallback('8bit_phone:server:DeleteCallRecord', function(source, cb, data)
local src = source
local player = ESX.GetPlayerFromId(source)
local myData = getIdentityTweet(src)
    
        exports['ghmattimysql']:execute('SELECT * FROM phone_calls WHERE id = @id', { ['id'] = data.id }, function(record)
            if record[1] ~= nil then
                if record[1].sender == myData.phone_number then
                    exports['ghmattimysql']:execute('UPDATE phone_calls SET sender_deleted = 1 WHERE id = @id AND sender = @phone', { ['id'] = id, ['phone'] = myData.phone_number }, function(status)
                        if status.affectedRows > 0 then
                            cb(true)
                        else
                            cb(false)
                        end
                    end)
                else
                    exports['ghmattimysql']:execute('UPDATE phone_calls SET receiver_deleted = 1 WHERE id = @id AND receiver = @phone', { ['id'] = id, ['phone'] = myData.phone_number }, function(status)
                        if status.affectedRows > 0 then
                            cb(true)
                        else
                            cb(false)
                        end
                    end)
                end
            else
                cb(false)
            end
        end)
    end)

RegisterServerEvent('8bit_phone:server:ToggleHold')
AddEventHandler('8bit_phone:server:ToggleHold', function(call)
    local src = source
    local tPlayer = (Calls[call.number].number)
    local numbersid = getIdentifierByPhoneNumber(tPlayer)
    local numbersid2 = getIdentifierByPhoneNumber(mPlayer)
    local otherplayer = ESX.GetPlayerFromIdentifier(numbersid).source
    TriggerClientEvent('8bit_phone:client:OtherToggleHold', otherplayer)
    TriggerEvent("8bit_phone:server:ToggleHold2", call)
end)

RegisterServerEvent('8bit_phone:server:ToggleHold2')
AddEventHandler('8bit_phone:server:ToggleHold2', function(call)
    local src = source
    local mPlayer = (Calls[Calls[call.number].number].number)
    local numbersid2 = getIdentifierByPhoneNumber(mPlayer)
    local otherplayer2 = ESX.GetPlayerFromIdentifier(numbersid2).source
    TriggerClientEvent('8bit_phone:client:OtherToggleHold', otherplayer2)
end)

RegisterServerEvent('8bit_phone:server:AcceptCall')
AddEventHandler('8bit_phone:server:AcceptCall', function()
local src = source
local player = ESX.GetPlayerFromId(source)
local myData = getIdentityTweet(src)

local numbersid = getIdentifierByPhoneNumber(Calls[myData.phone_number].number)
    local otherplayer = ESX.GetPlayerFromIdentifier(numbersid).source
    if Calls[myData.phone_number] ~= nil then
        local tPlayer = (Calls[myData.phone_number].number)
        if tPlayer ~= nil then
            if (Calls[myData.phone_number].number ~= nil) and (Calls[Calls[myData.phone_number].number].number ~= nil) then
                Calls[Calls[myData.phone_number].number].status = 1
                Calls[myData.phone_number].status = 1

                TriggerClientEvent('8bit_phone:client:AcceptCall', src, (tonumber(otherplayer) + 1000), false)
                TriggerClientEvent('8bit_phone:client:AcceptCall', tonumber(otherplayer), (tonumber(otherplayer) + 1000), true)
            else
                Calls[Calls[myData.phone_number].number] = nil
                Calls[myData.phone_number] = nil
                TriggerClientEvent('8bit_phone:client:EndCall', src)
                TriggerClientEvent('8bit_phone:client:EndCall', tonumber(otherplayer))
            end
        else
            TriggerClientEvent('8bit_phone:client:EndCall', src)
        end
    end
end)

RegisterServerEvent('8bit_phone:server:EndCall')
AddEventHandler('8bit_phone:server:EndCall', function()
local src = source
local player = ESX.GetPlayerFromId(source)
local myData = getIdentityTweet(src)

    if Calls[myData.phone_number] ~= nil then
        local tPlayer = (Calls[myData.phone_number].number)
        local numbersid = getIdentifierByPhoneNumber(tPlayer)
            local otherplayer = ESX.GetPlayerFromIdentifier(numbersid).source
        if tPlayer ~= nil then
            Calls[Calls[myData.phone_number].number] = nil
            Calls[myData.phone_number] = nil

            TriggerClientEvent('8bit_phone:client:EndCall', src)
            TriggerClientEvent('8bit_phone:client:EndCall', tonumber(otherplayer))
        end
    end
end)