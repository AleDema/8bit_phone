function ResetUnreads()
    local table = {}
    for k, v in ipairs(Config.Apps) do
        table[v.container] = 0
    end
    return table
end

-- RegisterServerEvent('mythic_base:server:Logout')
-- AddEventHandler('mythic_base:server:Logout', function()
--     local src = source
--     local mPlayer = exports['mythic_base']:FetchComponent('Fetch'):Source(src)
--     if mPlayer ~= nil then
--         local char = mPlayer:GetData('character')
--         local cid = char:GetData('id')
--         if char ~= nil then
--             if Cache:Get('phone-unread')[cid] ~= nil then
--                 exports['ghmattimysql']:execute('UPDATE phone_unread SET data = @data WHERE charid = @charid', {
--                     ['data'] = json.encode(Cache:Get('phone-unread')[cid].unread),
--                     ['charid'] = cid
--                 }, function(res)
--                     if res.affectedRows > 0 then
--                         Cache.Remove:Index('phone-unreads', cid)
--                     end
--                 end)
--             end
--         end
--     end
-- end)


-- AddEventHandler('playerDropped', function()
--     local src = source
--     local mPlayer = exports['mythic_base']:FetchComponent('Fetch'):Source(src)
--     if mPlayer ~= nil then
--         local char = mPlayer:GetData('character')
--         local cid = char:GetData('id')
--         if char ~= nil then
--             if Cache:Get('phone-unread')[cid] ~= nil then
--                 exports['ghmattimysql']:execute('UPDATE phone_unread SET data = @data WHERE charid = @charid', {
--                     ['data'] = json.encode(Cache:Get('phone-unread')[cid].unread),
--                     ['charid'] = cid
--                 }, function(res)
--                     if res.affectedRows > 0 then
--                         Cache.Remove:Index('phone-unreads', cid)
--                     end
--                 end)
--             end
--         end
--     end
-- end)
--[[
RegisterServerEvent('mythic_base:server:Reds')
AddEventHandler('mythic_base:server:Reds', function()
    local src = source
    local thingy = getIdentityTweet(src)
    if unreads == nil then
        print("my shit")
        exports['ghmattimysql']:scalar('SELECT data FROM phone_unread WHERE identifier = @identifier', { ['identifier'] = thingy.identifier }, function(unread)
            if unread ~= nil then
                if json.decode(unread) ~= nil then
                    Unreadeds = {
                        identifier = thingy.identifier,
                        unread = json.decode(unread)
                    }
                    print(unread)
                    TriggerClientEvent('8bit_phone:client:SyncUnread', src, json.decode(unread))
                else
                    unreads = ResetUnreads()
                    Unreadeds = {
                        identifier = thingy.identifier,
                        unread = unreads
                    }
                    print(Unreadeds)
                    TriggerClientEvent('8bit_phone:client:SyncUnread', src, unreads)
                end
            else
                unreads = ResetUnreads()
                Unreadeds = {
                    identifier = thingy.identifier,
                    unread = unreads
                }
                print(Unreadeds)
                TriggerClientEvent('8bit_phone:client:SyncUnread', src, unreads)
            end
        end)
    else
        TriggerClientEvent('8bit_phone:client:SyncUnread', src, unreads)
    end
end)

function getDataUnRead(source)
    local identifier = GetPlayerIdentifiers(source)[1]
    local result = MySQL.Sync.fetchAll("SELECT * FROM phone_unread WHERE identifier = @identifier", {['@identifier'] = identifier})
    if result[1] ~= nil then
        local identity = result[1]

        return {
            identifier = identity['identifier'],
            data = identity['data']
        }
    else
        return nil
    end
end

RegisterServerEvent('mythic_base:server:phone-unread')
AddEventHandler('mythic_base:server:phone-unread', function(identifier, data)
    local src = source
    local thingy = getIdentityTweet(src)
    local char = ESX.GetPlayerFromId(source)

    if getDataUnRead(source) == nil then
    exports['ghmattimysql']:execute('INSERT INTO `phone_unread` (`identifier`, `data`) VALUES (@identifier, @data) ON DUPLICATE KEY UPDATE `data` = VALUES(`data`)', {
        ['identifier'] = identifier,
        ['data'] = json.encode(data)
    })
    print(json.encode(data))
    else
        MySQL.Async.execute('UPDATE `phone_unread` SET data = @data WHERE identifier = @identifier', {
            ['@data'] = json.encode(data),
            ['@identifier'] = identifier
        })
        print(json.encode(data))
    end
end)

ESX.RegisterServerCallback('8bit_phone:server:SetUnread', function(source, cb, data)
    local src = source
    local thingy = getIdentityTweet(src)

        if unreads == nil then
            exports['ghmattimysql']:scalar('SELECT data FROM phone_unread WHERE identifier = @identifier', { ['identifier'] = thingy.identifier }, function(unread)
                if unread ~= nil then
                    unreads = json.decode(unread)
                else
                    unread = ResetUnreads()
                end
            end)

            while unread == nil do
                Citizen.Wait(5)
            end
        end

        if unreads[data.app] ~= data.unread then
            unreads[data.app] = data.unread
            TriggerEvent('mythic_base:server:phone-unread', thingy.identifier, unreads)
        end

        cb(unreads[data.app])
end)]]