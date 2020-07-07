local ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) 
      ESX = obj 
    end)

    Citizen.Wait(0)
  end
end)

local isLoggedIn = false

CharData = nil
Callbacks = nil
isPhoneOpen = false

Death = nil
Callbacks = nil
Inventory = nil

AddEventHandler('mythic_base:shared:ComponentsReady', function()
  Callbacks = Callbacks or exports['mythic_base']:FetchComponent('Callbacks')
  Inventory = Inventory or exports['mythic_base']:FetchComponent('Inventory')
  Death = exports['mythic_base']:FetchComponent('Death')
ESX.TriggerServerCallback('8bit_phone:getOtherPlayerData', function(data)
  Citizen.CreateThread(function()
		while CharData == nil do
      chardatathing = data.firstname .. ' ' .. data.lastname
			CharData = chardatathing
      print(charData)
			Citizen.Wait(250)
    end
  end)
	end)
end)

AddEventHandler('playerSpawned', function()
  SendNUIMessage({
    action = 'SetServerID',
    id = GetPlayerServerId(PlayerId())
  })
end)

RegisterNetEvent('mythic_base:client:Logout')
AddEventHandler('mythic_base:client:Logout', function()
  SendNUIMessage({
      action = 'Logout'
  })
end)

RegisterNetEvent('mythic_base:client:CharacterDataChanged')
AddEventHandler('mythic_base:client:CharacterDataChanged', function(charData)
    CharData = charData
end)

RegisterNetEvent('8bit_phone:client:TogglePhone')
AddEventHandler('8bit_phone:client:TogglePhone', function(identifier, data)
  TogglePhone()
  newPhoneProp()
  TriggerEvent("8bit_phone:client:UpdateAll")
end)

RegisterNetEvent('8bit_phone:client:UpdateAll')
AddEventHandler('8bit_phone:client:UpdateAll', function()
    TriggerServerEvent("mythic_base:server:CharacterSpawned")
    TriggerServerEvent("mythic_base:server:UpdateTwotter")
    TriggerServerEvent("8bit_phone:server:GetTexts")
    TriggerServerEvent("8bit_phone:server:SetupApps")
    TriggerServerEvent("8bit_phone:server:GetAds")
    TriggerServerEvent("8bit_phone:server:GetCalls")
    TriggerServerEvent("8bit_phone:server:UpdateContact")
    TriggerServerEvent("mythic_base:server:irc")
    TriggerEvent("8bit_phone:client:GetGarage")
    TriggerServerEvent("mythic_base:server:Reds")
end)

RegisterNetEvent('8bit_phone:client:SetupData')
AddEventHandler('8bit_phone:client:SetupData', function(data)
  SendNUIMessage({
    action = 'setup',
    data = data
  })
end)

function DrawUIText(text, font, centre, x, y, scale, r, g, b, a)
    SetTextFont(font)
    SetTextProportional(0)
    SetTextScale(scale, scale)
    SetTextColour(r, g, b, a)
    SetTextDropShadow(0, 0, 0, 0,255)
    SetTextEdge(1, 0, 0, 0, 255)
    SetTextDropShadow()
    SetTextOutline()
    SetTextCentre(centre)
    SetTextEntry("STRING")
    AddTextComponentString(text)
    DrawText(x , y) 
end

function CalculateTimeToDisplay()
  hour = GetClockHours()
  minute = GetClockMinutes()
  
  local obj = {}
  
  if hour <= 9 then
    hour = "0" .. hour
  end
  
  if minute <= 9 then
    minute = "0" .. minute
  end
  
  obj.hour = hour
  obj.minute = minute

  return obj
end

function hasPhone(cb)
  Inventory.Checks:HasItem({ { item = 'phone', count = 1 } }, function(status)
    cb(status)
  end)
end

function hasDecrypt(cb)
  Inventory.Checks:HasItem({ { item = 'decryptor', count = 1 } }, cb)
end

RegisterNetEvent('mythic_base:client:Logout')
AddEventHandler('mythic_base:client:Logout', function()
  isLoggedIn = false
end)

RegisterNetEvent('mythic_base:client:CharacterSpawned')
AddEventHandler('mythic_base:client:CharacterSpawned', function()
  isLoggedIn = true
end)


Citizen.CreateThread(function()
  while true do
    Citizen.Wait(0)
    if IsControlPressed(0, 322) then

    else
       SetPauseMenuActive(false)
     end
  end

end)

local counter = 0
Citizen.CreateThread(function()
  while true do
    if IsDisabledControlJustReleased(1, 199) or IsControlJustReleased(1, 199) then
      exports['cl-inventory']:hasEnoughOfItem('phone',1, function(enough)
        if enough then
          TogglePhone()
          TriggerEvent("8bit_phone:client:UpdateAll")
        end
        end)
    end

    if counter <= 0 then
      local time = CalculateTimeToDisplay()
      SendNUIMessage({
        action = 'updateTime',
        time = time.hour .. ':' .. time.minute
      })
      counter = 50
    else
      counter = counter - 1
    end

    Citizen.Wait(1)
  end
end)

function TogglePhone()
  if isPhoneOpen == false then
  SendNUIMessage({
    action = 'SetServerID',
    id = GetPlayerServerId(PlayerId())
  })
      PhonePlayIn()
      SetNuiFocus(true, true)
      if Call ~= nil then
        SendNUIMessage( { action = 'show', number = Call.number, initiator = Call.initiator } )
      else
        SendNUIMessage( { action = 'show' } )
      end
      isPhoneOpen = true
    elseif isPhoneOpen == true then
      SetNuiFocus(false, false)
      isPhoneOpen = false
      if not IsInCall() then
        PhonePlayOut()
      end
      SendNUIMessage( { action = 'hide' } )
    end

    if not IsPedInAnyVehicle(PlayerPedId(), true) then
      DisplayRadar(isPhoneOpen)
    end
  openingCd = true
end

  Citizen.CreateThread(function()
    Citizen.Wait(2000)
    openingCd = false
  end)

function ForceClosePhone()
  isPhoneOpen = false
  SetNuiFocus(isPhoneOpen, isPhoneOpen)
  if not IsInCall() then
    PhonePlayOut()
  end
  SendNUIMessage( { action = 'hide' } )
end

RegisterNetEvent('8bit_phone:client:SetAppState')
AddEventHandler('8bit_phone:client:SetAppState', function(apps)
  for k, v in pairs(Config.Apps) do
    if apps[v.container] ~= nil then
      v.enabled = apps[v.container]
      SendNUIMessage({
        action = 'EditAppState',
        app = v.container,
        state = v.enabled
      })
    end
  end
end)

RegisterNetEvent('8bit_phone:client:EditAppState')
AddEventHandler('8bit_phone:client:EditAppState', function(app, state)
  for k, v in pairs(Config.Apps) do
    if v.container == app then
      v.enabled = state
      SendNUIMessage({
        action = 'EditAppState',
        app = app,
        state = state
      })
    end
  end
end)

RegisterNUICallback('RegisterData', function(data, cb)
  ESX.TriggerServerCallback('8bit_phone:server:RegisterData', function(callback)
  cb(callback)
  end,{ key = data.key, data = data.data })
end)

RegisterNUICallback('GetData', function(data, cb)
  ESX.TriggerServerCallback('8bit_phone:server:RegisterData', function(data)
    cb(data)
  end, { key = data.key })
end)

RegisterNUICallback('ClosePhone', function(data, cb)
  --TogglePhone()
  PhonePlayOut()
  isPhoneOpen = false
  SetNuiFocus(false, false)
end)

RegisterNUICallback('opentablet', function()
  Wait(500)
  --[[ Open your table here ]]
  print('This will hapenn on clinet/main.lua on line 275 add function there to make this function')
end)

RegisterNUICallback('opencamera', function()
  Wait(500)
  TriggerEvent("camera:open")
  print("open camera")
end)

AddEventHandler('onResourceStop', function(resource)
    if resource == GetCurrentResourceName() then
        ForceClosePhone()
        PhonePlayOut()
        isPhoneOpen = false
        SetNuiFocus(false, false)
    end
end)
