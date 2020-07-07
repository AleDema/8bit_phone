RegisterNetEvent('8bit_phone:client:SetSettings')
AddEventHandler('8bit_phone:client:SetSettings', function(data)
    Config.Settings = data
    SendNUIMessage({
        action = 'setup',
        data = { name = 'settings', data = data }
    })
end)

RegisterNUICallback('ToggleMute', function(data, cb)
    if data.muted then
        Config.Settings.volume = 0
    else
        Config.Settings.volume = 100
        TriggerServerEvent('mythic_sounds:server:PlayWithinDistance', 10.0, 'unmute', 0.025)
    end
    TriggerServerEvent('mythic_base:server:SaveData', Config.Settings)
    cb(true)
end)

RegisterNUICallback('SaveSettings', function(data, cb)
    Config.Settings = data
    TriggerServerEvent('mythic_base:server:SaveData', Config.Settings)
    cb(true)
end)