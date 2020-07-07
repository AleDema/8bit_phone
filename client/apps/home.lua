function GetAppData(app)
    for k, v in pairs(Config.Apps) do
        if v.container == app then
            return v
        end
    end
end

function SetAppData(app)
    for k, v in pairs(Config.Apps) do
        if v.container == app.container then
            v = app
        end
    end
end

RegisterNUICallback('ClearUnread', function(data, cb)
  --  UpdateAppUnread(data.app, 0)
end)