TriggerEvent('mythic_base:server:RegisterUsableItem', 'sdcard', function(source, item)
    -- TriggerEvent('8bit_phone:server:StartInstallApp', source, item)
    local char = exports['mythic_base']:FetchComponent('Fetch'):Source(source):GetData('character')

    if item.metadata ~= nil and item.metadata ~= 'null' then
        local metadata = json.decode(item.metadata)
        if metadata.app ~= nil then
            TriggerEvent('8bit_phone:server:StartInstallApp', source, metadata.app, item)
        end
    else
        char.Inventory.Temporary:Check('advsdcard', 1, function(status)
            if status ~= nil then
                TriggerClientEvent('notification', source, { type = 'error', text = 'Advanced SD Card Already Installed' })
            else
                char.Inventory.Temporary:Check('sdcard', 1, function(status)
                    if status ~= nil then
                        TriggerClientEvent('notification', source, { type = 'error', text = 'SD Card Already Installed' })
                    else
                        char.Inventory.Temporary:Add(item, function(status)
                            if not status ~= nil then
                                TriggerClientEvent('notification', source, { type = 'inform', text = 'SD Card Inserted' })
                                TriggerClientEvent('8bit_phone:client:UseSDCard', source, false)
                            else
                                TriggerClientEvent('notification', source, { type = 'error', text = 'Unable To Use SD Card' })
                            end
                        end)
                    end
                end)
            end
        end)
    end
end)

TriggerEvent('mythic_base:server:RegisterUsableItem', 'advsdcard', function(source, item)
    -- TriggerEvent('8bit_phone:server:StartInstallApp', source, item)
    local char = exports['mythic_base']:FetchComponent('Fetch'):Source(source):GetData('character')

    if item.metadata ~= nil and item.metadata ~= 'null' then
        local metadata = json.decode(item.metadata)
        if metadata.app ~= nil then
            TriggerEvent('8bit_phone:server:StartInstallApp', source, metadata.app, item)
        end
    else
        char.Inventory.Temporary:Check('advsdcard', 1, function(status)
            if status ~= nil then
                TriggerClientEvent('notification', source, { type = 'error', text = 'Advanced SD Card Already Installed' })
            else
                char.Inventory.Temporary:Check('sdcard', 1, function(status)
                    if status ~= nil then
                        TriggerClientEvent('notification', source, { type = 'error', text = 'SD Card Already Installed' })
                    else
                        char.Inventory.Temporary:Add(item, function(status)
                            if not status ~= nil then
                                TriggerClientEvent('notification', source, { type = 'inform', text = 'Advanced SD Card Inserted' })
                                TriggerClientEvent('8bit_phone:client:UseSDCard', source, true)
                            else
                                TriggerClientEvent('notification', source, { type = 'error', text = 'Unable To Use SD Card' })
                            end
                        end)
                    end
                end)
            end
        end)
    end
end)
--[[
RegisterServerEvent('mythic_base:server:CharacterSpawned')
AddEventHandler('mythic_base:server:CharacterSpawned', function()
    local src = source
    Citizen.Wait(100) -- Try to ensure we're waiting until thd base action happens
    local char = exports['mythic_base']:FetchComponent('Fetch'):Source(src):GetData('character')
    local cData = char:GetData()

    Citizen.CreateThread(function()
        exports['ghmattimysql']:execute('SELECT app, state FROM phone_apps WHERE charid = @charid', { ['charid'] = char:GetData('id') }, function(apps)
            local states = {}

            for k, v in ipairs(apps) do
                states[v.app] = v.state
            end
            TriggerClientEvent('8bit_phone:client:SetAppState', src, states)
        end)
    end)

    Citizen.CreateThread(function()
        char.Inventory.Temporary:Check('advsdcard', 1, function(status)
            if status ~= nil then
                TriggerClientEvent('8bit_phone:client:UseSDCard', src, true)
            else
                char.Inventory.Temporary:Check('sdcard', 1, function(status)
                    if status ~= nil then
                        TriggerClientEvent('8bit_phone:client:UseSDCard', src, false)
                    end
                end)
            end
        end)
    end)
end)
]]
AddEventHandler('mythic_base:shared:ComponentsReady', function()
    Callbacks = Callbacks or exports['mythic_base']:FetchComponent('Callbacks')

    Callbacks:RegisterServerCallback('8bit_phone:server:DumpApp', function(source, data, cb)
        local char = exports['mythic_base']:FetchComponent('Fetch'):Source(source):GetData('character')

        if data.type == 1 then
            char.Inventory.Temporary:Check('sdcard', 1, function(item)
                if item ~= nil then
                    local meta = {
                        app = data.app
                    }
                    char.Inventory.Temporary.Update:Metadata(item.id, json.encode(meta), function(status)
                        if status then
                            exports['ghmattimysql']:execute('INSERT INTO phone_apps (`charid`, `app`, `state`) VALUES(@charid, @app, @state) ON DUPLICATE KEY UPDATE `state` = VALUES(`state`)', {
                                ['charid'] = char:GetData('id'),
                                ['app'] = data.app,
                                ['state'] = 0
                            }, function(status2)
                                if status2 then
                                    TriggerClientEvent('8bit_phone:client:EditAppState', source, data.app, false)
                                    char.Inventory.Temporary:Remove(item, function(status)
                                        cb(status ~= nil)
                                    end)
                                else
                                    cb(false)
                                end
                            end)
                        else
                            cb(false)
                        end
                    end)
                else
                    char.Inventory.Temporary:Check('advsdcard', 1, function(item)
                        if item ~= nil then
                            local meta = {
                                app = data.app
                            }
                            char.Inventory.Temporary.Update:Metadata(item.id, json.encode(meta), function(status)
                                if status then
                                    exports['ghmattimysql']:execute('INSERT INTO phone_apps (`charid`, `app`, `state`) VALUES(@charid, @app, @state) ON DUPLICATE KEY UPDATE `state` = VALUES(`state`)', {
                                        ['charid'] = char:GetData('id'),
                                        ['app'] = data.app,
                                        ['state'] = 0
                                    }, function(status2)
                                        if status2.affectedRows > 0 then
                                            TriggerClientEvent('8bit_phone:client:EditAppState', source, data.app, false)
                                            char.Inventory.Temporary:Remove(item, function(status3)
                                                cb(status3 ~= nil)
                                            end)
                                        else
                                            cb(false)
                                        end
                                    end)
                                else
                                    cb(false)
                                end
                            end)
                        else
                            cb(false)
                        end
                    end)
                end
            end)
        elseif data.type == 2 then
            char.Inventory.Temporary:Check('advsdcard', 1, function(item)
                if item ~= nil then
                    local meta = {
                        app = data.app
                    }
                    char.Inventory.Temporary.Update:Metadata(item.id, json.encode(meta), function(status)
                        if status then
                            char.Inventory.Temporary:Remove(item, function(status)
                                cb(status ~= nil)
                            end)
                        else
                            cb(false)
                        end
                    end)
                else
                    cb(false)
                end
            end)
        else
            cb(false)
        end
    end)

    Callbacks:RegisterServerCallback('8bit_phone:server:EjectSDCard', function(source, data, cb)
        local char = exports['mythic_base']:FetchComponent('Fetch'):Source(source):GetData('character')

        if data.advanced then
            char.Inventory.Temporary:Check('advsdcard', 1, function(item)
                if item ~= nil then
                    char.Inventory.Temporary:Remove(item, function(status)
                        cb(status ~= nil)
                    end)
                else
                    cb(false)
                end
            end)
        else
            char.Inventory.Temporary:Check('sdcard', 1, function(item)
                if item ~= nil then
                    char.Inventory.Temporary:Remove(item, function(status)
                        cb(status ~= nil)
                    end)
                else
                    cb(false)
                end
            end)
        end
    end)
end)


local PendingInstalls = {}
RegisterServerEvent('mythic_base:server:Logout')
AddEventHandler('mythic_base:server:Logout', function()
    local src = source
    if PendingInstalls[src] ~= nil then
        PendingInstalls[src] = nil
    end
end)

AddEventHandler('playerDropped', function()
    local src = source
    if PendingInstalls[src] ~= nil then
        PendingInstalls[src] = nil
    end
end)

RegisterCommand("sdcardtest", function(source, args)
    TriggerClientEvent('8bit_phone:client:UseSDCard', source, true)
    TriggerEvent('8bit_phone:server:StartInstallApp', source, "irc")
end)

RegisterServerEvent('8bit_phone:server:StartInstallApp')
AddEventHandler('8bit_phone:server:StartInstallApp', function(source, app)
    local src = source
    local char = ESX.GetPlayerFromId(source)
    if app ~= nil then
        exports['ghmattimysql']:scalar('SELECT app FROM phone_apps WHERE identifier = @identifier AND app = @app AND state = 1', { ['identifier'] = char.identifier, ['app'] = app }, function(installed)
            if installed == nil then
                PendingInstalls[source] = {
                    app = app,
                    item = "sdcard"
                }
        
                TriggerClientEvent('8bit_phone:client:InstallApp', source, app)
            else
                TriggerClientEvent('notification', source, 'App Is Already Installed', 2, 5000)
                TriggerClientEvent('8bit_phone:client:EditAppState', src, app, true)
            end
        end)
    end
end)

RegisterServerEvent('8bit_phone:server:FinishInstallApp')
AddEventHandler('8bit_phone:server:FinishInstallApp', function()
    local src = source
    local char = ESX.GetPlayerFromId(source)
    local app = PendingInstalls[src]
    
    if app ~= nil then
        --char.Inventory.Update:Metadata(app.item.id, 'null', function(status)
            --if status then
                exports['ghmattimysql']:execute('INSERT INTO phone_apps (`identifier`, `app`, `state`) VALUES(@identifier, @app, @state) ON DUPLICATE KEY UPDATE state = VALUES(`state`)', { ['identifier'] = char.identifier, ['app'] = app.app, ['state'] = 1 }, function(res)
                    TriggerClientEvent('8bit_phone:client:EditAppState', src, app.app, true)
                    TriggerClientEvent('notification', src, 'App Package: ' .. app.app .. ' Installed', 1, 5000)
                end)
            --end
        --end)
    end
end)

RegisterServerEvent('8bit_phone:server:CancelInstallApp')
AddEventHandler('8bit_phone:server:CancelInstallApp', function()
    local src = source
    if PendingInstalls[src] ~= nil then
        PendingInstalls[src] = nil
    end
end)