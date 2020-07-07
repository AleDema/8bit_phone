RegisterNetEvent('8bit_phone:client:InstallApp')
AddEventHandler('8bit_phone:client:InstallApp', function(app)
    exports['cl-prog']:Progress({
        name = "install_app_action",
        duration = 10000,
        label = 'Installing ' .. app .. ' App',
        useWhileDead = false,
        canCancel = false,
        controlDisables = {
            disableMovement = true,
            disableCarMovement = true,
            disableMouse = true,
            disableCombat = true,
        },
        animation = {
            animDict = "cellphone@",
            anim = "cellphone_text_in",
            flags = 50,
        },
        prop = {
            model = "prop_phone_ing_03",
            bone = 28422,
        },
    }, function(status)
        if not status then
            TriggerServerEvent('8bit_phone:server:FinishInstallApp')
        else
            TriggerServerEvent('8bit_phone:server:CancelInstallApp')
        end
    end)
end)

RegisterNetEvent('8bit_phone:client:UseSDCard')
AddEventHandler('8bit_phone:client:UseSDCard', function(isAdvanced)
    SendNUIMessage({
        action = 'InsertSDCard',
        advanced = isAdvanced
    })
end)

RegisterNUICallback('DumpApp', function(data, cb)
    Callbacks:ServerCallback('8bit_phone:server:DumpApp', data, cb)
end)

RegisterNUICallback('EjectSDCard', function(data, cb)
    Callbacks:ServerCallback('8bit_phone:server:EjectSDCard', data, cb)
end)