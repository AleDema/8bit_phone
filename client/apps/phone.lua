local ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) 
      ESX = obj 
    end)

    Citizen.Wait(0)
  end
end)

Call = {}
local isLoggedIn = false

local Ringtones = {
    { name = 'Default', duration = 2000, file = 'ringtone1' },
    { name = 'Memes', duration = 20000, file = 'ringtone2' },
}

function IsInCall()
    return (Call.number ~= nil and Call.status == 1) or (Call.number ~= nil and Call.status == 0 and Call.initiator)
end

RegisterNetEvent('8bit_phone:client:CreateCall')
AddEventHandler('8bit_phone:client:CreateCall', function(number)
    Call.number = number
    Call.status = 0
    Call.initiator = true

    PhonePlayCall(false)

    Citizen.CreateThread(function()
        while Call.status == 0 do
            --TriggerServerEvent('InteractSound_SV:PlayOnSource', 'ringtone3', 0.1)
            Citizen.Wait(100)
        end
    end)

    local count = 0
    Citizen.CreateThread(function()
        while Call.status == 0 do
            if count >= 30 then
                TriggerServerEvent('8bit_phone:server:EndCall')
            --    TriggerEvent('mythic_sounds:client:StopOnOne', 'dialtone')

                if isPhoneOpen then
                    PhoneCallToText()
                else
                    PhonePlayOut()
                end

                Call = {}
            else
                count = count + 1
            end
            Citizen.Wait(1000)
        end
    end)
end)

RegisterNetEvent('8bit_phone:client:AcceptCall')
AddEventHandler('8bit_phone:client:AcceptCall', function(channel, initiator)
    if Call.number ~= nil and Call.status == 0 then
        Call.status = 1
        Call.channel = channel
        Call.initiator = initiator

        exports['tokovoip_script']:addPlayerToRadio(Call.channel, false)

        if initiator then
            SendNUIMessage({
                action = 'acceptCallSender',
                number = Call.number
            })
            exports['mythic_notify']:PersistentAlert('start', 'active-call', 'inform', 'You\'re In A Call', { ['background-color'] = '#ff8555', ['color'] = '#ffffff' })
        else
            exports['mythic_notify']:PersistentAlert('end', Config.IncomingNotifId)
            exports['mythic_notify']:PersistentAlert('start', 'active-call', 'inform', 'You\'re In A Call', { ['background-color'] = '#ff8555', ['color'] = '#ffffff' })
            PhonePlayCall(false)
            SendNUIMessage({
                action = 'acceptCallReceiver',
                number = Call.number
            })
        end

      --  TriggerEvent('mythic_sounds:client:StopOnOne', 'dialtone')
       -- TriggerServerEvent('mythic_sounds:server:StopWithinDistance', 'ringtone2')
    end
end)

RegisterNetEvent('8bit_phone:client:EndCall')
AddEventHandler('8bit_phone:client:EndCall', function()
    SendNUIMessage({
        action = 'endCall'
    })

    TriggerEvent('mythic_sounds:client:StopOnOne', 'dialtone')
   -- TriggerServerEvent('mythic_sounds:server:StopWithinDistance', 'ringtone2')
    exports['mythic_notify']:SendAlert('Call Ended', 'Call Ended', 2500, { ['background-color'] = '#ff8555', ['color'] = '#ffffff' })
    exports['mythic_notify']:PersistentAlert('end', Config.IncomingNotifId)
    exports['mythic_notify']:PersistentAlert('end', 'active-call')
    exports['tokovoip_script']:removePlayerFromRadio(Call.channel)

    Call = {}

    if isPhoneOpen then
        PhoneCallToText()
    else
        PhonePlayOut()
    end
end)

RegisterNetEvent('8bit_phone:client:ReceiveCall')
AddEventHandler('8bit_phone:client:ReceiveCall', function(number)
    Call.number = number
    Call.status = 0
    Call.initiator = false

    SendNUIMessage({
        action = 'acceptCallReceiver',
        number = number
    })

    Citizen.CreateThread(function()
        while Call.status == 0 do
            if Config.Settings.ringtone == 1 then
            --    TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 10.0, 'ringtone1', 0.1 * (Config.Settings.volume / 100))
                TriggerServerEvent('notification', source, 'Your being called', 1, 4000)
                Citizen.Wait(3500)
            elseif Config.Settings.ringtone == 2 then
            --    TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 10.0, 'ringtone1', 0.1 * (Config.Settings.volume / 100))
                TriggerServerEvent('notification', source, 'Your being called', 1, 4000)
            elseif Config.Settings.ringtone == 3 then
             --   TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 10.0, 'ringtone3', 0.1 * (Config.Settings.volume / 100))
                TriggerServerEvent('notification', source, 'Your being called', 1, 4000)
                Citizen.Wait(1500)
            end

            
        end
    end)


    local count = 0
    Citizen.CreateThread(function()
        while Call.status == 0 do
            if count >= 30 then
                TriggerServerEvent('8bit_phone:server:EndCall')
                Call = {}
            else
                count = count + 1
            end
            Citizen.Wait(1000)
        end
    end)
end)

RegisterNetEvent('8bit_phone:client:OtherToggleHold')
AddEventHandler('8bit_phone:client:OtherToggleHold', function(number)
    if Call.number ~= nil and Call.status ~= 0 then
        Call.OtherHold = not Call.OtherHold
    end
end)
--[[
RegisterNUICallback('CreateCall', function(data, cb)
    ESX.TriggerServerCallback('8bit_phone:server:CreateCall', function(callback)
        cb(callback)
    end, { number = data.number, nonStandard = data.nonStandard } )
end)
]]
RegisterNUICallback('AcceptCall', function(data, cb)
    TriggerServerEvent('8bit_phone:server:AcceptCall')
end)

RegisterCommand('answer', function(source, args, rawCommand)
    TriggerServerEvent('8bit_phone:server:AcceptCall')
end)

RegisterCommand('hangup', function(source, args, rawCommand)
    TriggerServerEvent('8bit_phone:server:EndCall', Call)
end)

RegisterCommand('a', function(source, args, rawCommand)
    TriggerServerEvent('8bit_phone:server:AcceptCall')
end)

RegisterCommand('h', function(source, args, rawCommand)
    TriggerServerEvent('8bit_phone:server:EndCall', Call)
end)

RegisterNUICallback('EndCall', function(data, cb)
    TriggerServerEvent('8bit_phone:server:EndCall', Call)
end)

RegisterNUICallback('ToggleHold', function( data, cb )
    if Call.number ~= nil and Call.number ~= 0 then
        Call.Hold = not Call.Hold
        TriggerServerEvent('8bit_phone:server:ToggleHold', Call)
        if Call.Hold then
            exports['tokovoip_script']:removePlayerFromRadio(Call.channel)
            if isPhoneOpen then
                PhoneCallToText()
            else
                PhonePlayOut()
            end
        else
            exports['tokovoip_script']:addPlayerToRadio(Call.channel, false)
            PhonePlayCall(false)
        end

        cb(Call.Hold)
    end
end)

RegisterNUICallback('DeleteCallRecord', function(data, cb)
    ESX.TriggerServerCallback('8bit_phone:server:DeleteCallRecord', function(callback)
        cb(callback)
    end, { id = data.id } )
end)

RegisterNetEvent('mythic_base:client:Logout')
AddEventHandler('mythic_base:client:Logout', function()
    isLoggedIn = false
end)

    Citizen.CreateThread(function()
        while true do
            if IsInCall() and Call ~= nil and Call.status ~= 0 then
                if IsControlJustReleased(1, 51) then
                    Call.Hold = not Call.Hold
                    TriggerServerEvent('8bit_phone:server:ToggleHold', Call)
                    if Call.Hold then
                        exports['tokovoip_script']:removePlayerFromRadio(Call.channel)
                        if isPhoneOpen then
                            PhoneCallToText()
                        else
                            PhonePlayOut()
                        end
                    else
                        exports['tokovoip_script']:addPlayerToRadio(Call.channel, false)
                        PhonePlayCall(false)
                    end
                elseif IsControlJustReleased(1, 74) and not Call.Hold then
                    TriggerServerEvent('8bit_phone:server:EndCall', Call)
                end
    
                if IsEntityPlayingAnim(GetPlayerPed(PlayerId()), "combat@damage@rb_writhe", "rb_writhe_loop", 1) then
                    TriggerServerEvent('8bit_phone:server:EndCall', Call)
                end
    
                Citizen.Wait(1)
            else
                Citizen.Wait(1000)
            end
        end
    end)
    
    Citizen.CreateThread(function()
        while true do
            if IsInCall() and Call ~= nil and Call.status ~= 0 then
                if not Call.OtherHold then
                    if not Call.Hold then
                        DrawUIText("~b~E ~s~Hold | ~b~H ~s~Hangup", 4, 1, 0.5, 0.96, 0.4, 255, 255, 255, 255)
                    else
                        DrawUIText("~b~E ~s~Resume | ~b~H ~s~Hangup", 4, 1, 0.5, 0.96, 0.4, 255, 255, 255, 255)
                    end
                else
                    if not Call.Hold then
                        DrawUIText("~b~E ~s~Hold | ~b~H ~s~Hangup | ~s~On Hold", 4, 1, 0.5, 0.96, 0.4, 255, 255, 255, 255)
                    else
                        DrawUIText("~b~E ~s~Resume | ~b~H ~s~Hangup | ~s~On Hold", 4, 1, 0.5, 0.96, 0.4, 255, 255, 255, 255)
                    end
                end
                Citizen.Wait(1)
            else
                Citizen.Wait(1000)
            end
        end
    end)

--- Payphone

local PayPhoneHex = {
  [1] = 1158960338,
  [2] = -78626473,
  [3] = 1281992692,
  [4] = -1058868155,
  [5] = -429560270,
  [6] = -2103798695,
  [7] = 295857659,
}

function checkForPayPhone()
  for i = 1, #PayPhoneHex do
    local objFound = GetClosestObjectOfType( GetEntityCoords(GetPlayerPed(-1)), 5.0, PayPhoneHex[i], 0, 0, 0)
    if DoesEntityExist(objFound) then
      return true
    end
  end
  return false
end


RegisterCommand('payphone', function(source, args, rawCommand)
    if args[1] then
        TriggerEvent('phone:makepayphonecall', args[1])
        print("'"..args[1].."'")
    else
        TriggerEvent("notification","/payphone [number].",2)
    end
end)

RegisterNetEvent('phone:makepayphonecall')
AddEventHandler('phone:makepayphonecall', function(pnumber)

    if not checkForPayPhone() then
      TriggerEvent("notification","You are not near a payphone.",2)
      return
    end

    PhoneBooth = GetEntityCoords( GetPlayerPed(-1) )
    AnonCall = true

    if not IsInCall() then
      -- TriggerEvent("InteractSound_CL:PlayOnOne","payphonestart",0.5)
      --here 
    ESX.TriggerServerCallback('8bit_phone:server:CreateCall', function(callback)
        cb(callback)
    end, { number = pnumber, nonStandard = 1 } )
    -- here
    else
      TriggerEvent("notification","It appears you are already in a call, injured or with out a phone, please type /hangup to reset your calls.",2)
    end

end)