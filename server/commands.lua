ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)


--[[
AddEventHandler('mythic_base:shared:ComponentsReady', function()
    exports['mythic_base']:FetchComponent('Chat'):RegisterCommand('phone', function(source)
        TriggerClientEvent('8bit_phone:client:TogglePhone', source)
    end, {
        help = "Toggle Phone Display"
    }, 0)

    exports['mythic_base']:FetchComponent('Chat'):RegisterCommand('testchip', function(source)
        TriggerClientEvent('8bit_phone:client:TestChip', source)
    end, {
        help = "Test Tuner Chip Function"
    }, 0)
end)
]]
RegisterCommand('testchip', function(source, args, rawCommand)
TriggerClientEvent('8bit_phone:client:TestChip', source)
end)
--
