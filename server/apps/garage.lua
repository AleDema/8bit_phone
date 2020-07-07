

ESX.RegisterServerCallback("fuckingphone:fetchPlayerVehicles", function(source, callback, garage)
	local player = ESX.GetPlayerFromId(source)

	if player then
		local sqlQuery = [[
			SELECT
				plate, vehicle, garage
			FROM
				owned_vehicles
			WHERE
				owner = @cid
		]]

		if garage then
			sqlQuery = [[
				SELECT
					plate, vehicle, garage
				FROM
					owned_vehicles
				WHERE
					owner = @cid and garage = @garage
			]]
		end

		MySQL.Async.fetchAll(sqlQuery, {
			["@cid"] = player["identifier"],
			["@garage"] = garage
		}, function(responses)
			local playerVehicles = {}

			for key, vehicleData in ipairs(responses) do
				table.insert(playerVehicles, {
          ["plate"] = vehicleData["plate"],
          ["garage"] = vehicleData["garage"],
					["props"] = json.decode(vehicleData["vehicle"])
				})
			end

			callback(playerVehicles)
		end)
	else
		callback(false)
	end
end)


AddEventHandler('8bit_phone:newad', function (author, title, msg, sname, shex)
  -- print(json.encode(tweet))
  local discord_webhook = GetConvar('discord_webhook', 'https://discordapp.com/api/webhooks/661385091708223539/Kx29wT_IVkow28ywHJerwtcO0YF-dV1IoIl40nQARjunqn_GxmSt5-KhXBthMJ68Sq18')
  if discord_webhook == '' then
    return
  end
  local headers = {
    ['Content-Type'] = 'application/json'
  }
  local data = {
    ["username"] = '@' .. author .. '',
    ["embeds"] = {{
      ["thumbnail"] = {
        ["url"] = SystemAvatar
      },
      ["fields"] = {
        {
            ["name"] = 'Ad Message',
            ["value"] = msg,
        },
        {
            ["name"] = 'Steam Name',
            ["value"] = sname,
        },
        {
            ["name"] = 'Steam HEX',
            ["value"] = shex,
        },
    },
      ["color"] = 1942002,
      --["timestamp"] = 'time'
    }},
  }
  local isHttp = string.sub(title, 0, 7) == 'http://' or string.sub(title, 0, 8) == 'https://'
  local ext = string.sub(title, -4)
  local isImg = ext == '.png' or ext == '.pjg' or ext == '.gif' or string.sub(title, -5) == '.jpeg'
  if (isHttp and isImg) and true then
    data['embeds'][1]['image'] = { ['url'] = title }
  else
    data['embeds'][1]['title'] = author
    data['embeds'][1]['description'] = title
  end
  PerformHttpRequest(discord_webhook, function(err, text, headers) end, 'POST', json.encode(data), headers)
end)

RegisterServerEvent('8bit_phone:server:DeleteAd')
AddEventHandler('8bit_phone:server:DeleteAd', function(stat)
    stat = DeleteAd(source)
end)

-- soon

ESX.RegisterServerCallback("fuckingphone:fetchkeys", function(source, callback, garage)
	local player = ESX.GetPlayerFromId(source)

	if player then
		local sqlQuery = [[
			SELECT
				*
			FROM
        disc_property_owners
			WHERE
        identifier = @identifier
		]]

		if garage then
			sqlQuery = [[
				SELECT
          *
				FROM
          disc_property_owners
				WHERE
					identifier = @identifier
			]]
		end

		MySQL.Async.fetchAll(sqlQuery, {
			["@identifier"] = player["identifier"]
		}, function(responses)
			local playerVehicles = {}

			for key, vehicleData in ipairs(responses) do
				table.insert(playerVehicles, {
          ["active"] = vehicleData["active"],
          ["owner"] = vehicleData["owner"],
					["name"] = vehicleData["name"]
				})
			end

			callback(playerVehicles)
		end)
	else
		callback(false)
	end
end)