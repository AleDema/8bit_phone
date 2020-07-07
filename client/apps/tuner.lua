local TunedVehs = {}
local currentVehicle = nil

-- TODO : Need to figure out calculations for all this shit
function ModifyBoost(plate, value)
    if value == 0 then
      SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fInitialDriveForce', TunedVehs[plate].default.fInitialDriveForce)
      SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fLowSpeedTractionLossMult', TunedVehs[plate].default.fLowSpeedTractionLossMult)
    else
      SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fInitialDriveForce', TunedVehs[plate].default.fInitialDriveForce + (TunedVehs[plate].default.fInitialDriveForce * (value / 100)))
      SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fLowSpeedTractionLossMult', TunedVehs[plate].default.fLowSpeedTractionLossMult + (TunedVehs[plate].default.fLowSpeedTractionLossMult * (value / 10)))
    end
end

function ModifySuspension(plate, value)
    if value == 5 then
        SetVehicleHandlingFloat(veh, 'CHandlingData', 'fCamberStiffnesss', TunedVehs[plate].default.fCamberStiffnesss)
        SetVehicleHandlingFloat(veh, 'CHandlingData', 'fSuspensionCompDamp', TunedVehs[plate].default.fSuspensionCompDamp)
    else
        -- This is just totally and uttery broken, lmfao
        -- SetVehicleHandlingFloat(veh, 'CHandlingData', 'fCamberStiffnesss', value)
        -- SetVehicleHandlingFloat(veh, 'CHandlingData', 'fSuspensionCompDamp', value)
    end
end

function ModifyTransmission(plate, value)
    print(GetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleUpShift'))
    print(GetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleDownShift'))
    if tonumber(value) == 5 then
      SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleUpShift', TunedVehs[plate].default.fClutchChangeRateScaleUpShift)
      SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleDownShift', TunedVehs[plate].default.fClutchChangeRateScaleDownShift)
      SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fInitialDragCoeff', TunedVehs[plate].default.fInitialDragCoeff)
    elseif tonumber(value) < 5 then
        if TunedVehs[plate].default.fClutchChangeRateScaleUpShift > 5 and TunedVehs[plate].default.fClutchChangeRateScaleUpShift - (tonumber(value) + 5) > 1.0 then
            SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleUpShift', TunedVehs[plate].default.fClutchChangeRateScaleUpShift - (tonumber(value) + 5))
        else
            SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleUpShift', 1.0)
        end

        if TunedVehs[plate].default.fClutchChangeRateScaleDownShift > 5 and TunedVehs[plate].default.fClutchChangeRateScaleDownShift - (tonumber(value) + 5) > 1.0 then
            SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleDownShift', TunedVehs[plate].default.fClutchChangeRateScaleDownShift - (tonumber(value) + 5))
        else
            SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleDownShift', 1.0)
        end

        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fInitialDragCoeff', TunedVehs[plate].default.fInitialDragCoeff + (tonumber(value) / 10))
        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fDriveInertia', TunedVehs[plate].default.fDriveInertia + (tonumber(value) / 10))
    else
        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleUpShift', TunedVehs[plate].default.fClutchChangeRateScaleUpShift + tonumber(value))
        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleDownShift', TunedVehs[plate].default.fClutchChangeRateScaleDownShift + tonumber(value))
        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fInitialDragCoeff', TunedVehs[plate].default.fInitialDragCoeff + (tonumber(value) / 10))
        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fDriveInertia', TunedVehs[plate].default.fDriveInertia + (tonumber(value) / 10))
    end

    print(GetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleUpShift'))
    print(GetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fClutchChangeRateScaleDownShift'))
end

function ModifyBrakes(plate, value)
    if value == 5 then
        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fBrakeBiasFront', TunedVehs[plate].default.fBrakeBiasFront)
      else
        if value == 0 then value = 1 end
        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fBrakeBiasFront', (value / 10))
      end
end

function ModifyDriveTrain(plate, value)
    if value == 5 then
        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fDriveBiasFront', TunedVehs[plate].default.fDriveBiasFront)
    else
        if value == 0 then value = 1 end
        SetVehicleHandlingFloat(currentVehicle, 'CHandlingData', 'fDriveBiasFront', (value / 10))
    end
end

function ApplyTune(boost, suspension, tranny, brakes, dt)
    if currentVehicle ~= 0 and currentVehicle ~= nil then
        local plate = GetVehicleNumberPlateText(currentVehicle)

        ModifyBoost(plate, boost)
        ModifySuspension(plate, suspension)
        ModifyTransmission(plate, tranny)
        ModifyBrakes(plate, brakes)
        ModifyDriveTrain(plate, dt)

        TunedVehs[plate].active = {
            boost = boost,
            suspension = suspension,
            tranny = tranny,
            brakes = brakes,
            dt = dt
        }

        return true
    else
        return false
    end

end

function SetupVeh(veh)
    local plate = GetVehicleNumberPlateText(veh)

    if TunedVehs[plate] == nil then
        TunedVehs[plate] = {
            default = {
                fDriveInertia = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fDriveInertia'), 
                fInitialDriveForce = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fInitialDriveForce'), 
                fLowSpeedTractionLossMult = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fLowSpeedTractionLossMult'),
                fClutchChangeRateScaleUpShift = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fClutchChangeRateScaleUpShift'),
                fClutchChangeRateScaleDownShift = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fClutchChangeRateScaleDownShift'),
                fInitialDragCoeff = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fInitialDragCoeff'),
                fTractionSpringDeltaMax = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fTractionSpringDeltaMax'),
                fCamberStiffnesss = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fCamberStiffnesss'),
                fBrakeBiasFront = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fBrakeBiasFront'),
                fDriveBiasFront = GetVehicleHandlingFloat(veh, 'CHandlingData', 'fDriveBiasFront')
            }
        }

        TunedVehs[plate].active = {
            boost = 0,
            suspension = 5,
            tranny = 5,
            brakes = 5,
            dt = 5
        }
    end

    return {
        id = veh,
        model = GetEntityModel(veh),
        name = GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(veh))),
        plate = plate,
        tune = TunedVehs[plate]
    }
end

RegisterNetEvent('mythic_veh:client:EnteredVehicle')
AddEventHandler('mythic_veh:client:EnteredVehicle', function(currVeh, currSeat, name)
    if currentVehicle ~= currVeh then  
        SendNUIMessage({
            action = 'ResetVehicle'
        })

        currentVehicle = currVeh
    end
end)

DecorRegister('MYTH_TUNER_CHIP', 2)
RegisterNetEvent('8bit_phone:client:TestChip')
AddEventHandler('8bit_phone:client:TestChip', function()
    local veh = GetVehiclePedIsUsing(PlayerPedId())
    if veh ~= 0 then
        DecorSetBool(veh, 'MYTH_TUNER_CHIP', true)
    end
end)

RegisterNUICallback('SetupTuner', function(data, cb)
    local veh = GetVehiclePedIsUsing(PlayerPedId())
    if veh ~= 0 then
        exports['mythic_base']:FetchComponent('Progress'):Progress({
            name = "tuner_search_action",
            duration = 5000,
            label = 'Scanning For Chip',
            useWhileDead = false,
            canCancel = true,
            controlDisables = {
                disableMovement = true,
                disableCarMovement = true,
                disableMouse = false,
                disableCombat = true,
            },
        }, function(status)
            if not status then
                if GetPedInVehicleSeat(veh, -1) == PlayerPedId() and DecorExistOn(veh, 'MYTH_TUNER_CHIP') then
                    currentVehicle = veh
                    cb(SetupVeh(veh))
                else
                    cb(false)
                end
            else
                cb(false)
            end
        end)
    else
        local myPos = GetEntityCoords(PlayerPedId())
        local itr = exports['mythic_base']:FetchComponent('EnumEnts')
        local matchVeh = {}

        for veh2 in itr:EnumerateVehicles() do
            local pos = GetEntityCoords(veh2)
            local dist = #(vector3(pos.x, pos.y, pos.z) - myPos)

            if dist < 5.0 then
                if DecorExistOn(veh2, 'MYTH_TUNER_CHIP') then
                    currentVehicle = veh2
                    matchVeh = SetupVeh(veh)
                    break
                end
            end
        end

        if matchVeh.id == nil or currentVehicle ~= matchVeh.id then
            exports['mythic_base']:FetchComponent('Progress'):Progress({
                name = "tuner_search_action",
                duration = 5000,
                label = 'Scanning For Chip',
                useWhileDead = false,
                canCancel = true,
                controlDisables = {
                    disableMovement = true,
                    disableCarMovement = true,
                    disableMouse = false,
                    disableCombat = true,
                },
            }, function(status)
                if not status then
                    cb(matchVeh)
                else
                    cb(false)
                end
            end)
        else
            cb(matchVeh)
        end
    end
end)

RegisterNUICallback('CheckInVeh', function(data, cb)
    local veh = GetVehiclePedIsUsing(PlayerPedId()) 
    if veh ~= 0 then
        if GetPedInVehicleSeat(veh, -1) == PlayerPedId() and DecorExistOn(veh, 'MYTH_TUNER_CHIP') then
            if currentVehicle ~= veh then
                cb(SetupVeh(veh))
            else
                cb({ sameVeh = true })
            end
        else
            cb(nil)
        end
    else
        local myPos = GetEntityCoords(PlayerPedId())
        local itr = exports['mythic_base']:FetchComponent('EnumEnts')
        local matchVeh = -1

        for veh2 in itr:EnumerateVehicles() do
            local pos = GetEntityCoords(veh2)
            local dist = #(vector3(pos.x, pos.y, pos.z) - myPos)

            if dist < 5.0 then
                if DecorExistOn(veh2, 'MYTH_TUNER_CHIP') then
                    currentVehicle = veh2
                    matchVeh = SetupVeh(veh2)
                    break
                end
            end
        end

        if matchVeh ~= -1 then
            if matchVeh.id == nil or currentVehicle ~= matchVeh.id then
                exports['mythic_base']:FetchComponent('Progress'):Progress({
                    name = "tuner_search_action",
                    duration = 5000,
                    label = 'Scanning For Chip',
                    useWhileDead = false,
                    canCancel = true,
                    controlDisables = {
                        disableMovement = true,
                        disableCarMovement = true,
                        disableMouse = false,
                        disableCombat = true,
                    },
                }, function(status)
                    if not status then
                        cb(matchVeh)
                    else
                        cb(false)
                    end
                end)
            else
                cb({ sameVeh = true })
            end
        else
            cb(false)
        end
    end
end)

RegisterNUICallback('ApplyTune', function(data, cb)
    cb(ApplyTune(data.boost, data.suspension, data.tranny, data.brakes, data.dt))
end)

RegisterNUICallback('SaveTune', function(data, cb)
    if currentVehicle ~= nil and currentVehicle ~= 0 then
        if data.carOnly then
            data.carModel = GetEntityModel(currentVehicle)
        else
            data.carModel = nil
        end
    else
        data.carOnly = false
        data.carModel = nil
    end

    Callbacks:ServerCallback('8bit_phone:server:SaveTune', { tune = data }, function(status)
        cb(status)
    end)
end)

RegisterNUICallback('DeleteTune', function(data, cb)
    Callbacks:ServerCallback('8bit_phone:server:DeleteTune', { id = data.id }, function(status)
        cb(status)
    end)
end)

RegisterNUICallback('GetVehHealth', function(data, cb)
    if currentVehicle ~= nil and currentVehicle ~= 0 then
        Callbacks:ServerCallback('mythic_veh:server:GetVehicleHealth', { plate = GetVehicleNumberPlateText(currentVehicle), model = GetEntityModel(currentVehicle) }, function(data)
            print(json.encode(data))
            cb(data)
        end)
    else
        cb(nil)
    end
end)

RegisterNUICallback('CancelTunerSearch', function(data, cb)
    if exports['mythic_base']:FetchComponent('Progress'):CurrentAction() == 'tuner_search_action' then
        exports['mythic_base']:FetchComponent('Progress'):Cancel()
    end
end)