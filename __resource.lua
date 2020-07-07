resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'

name '8Bit Phone'
description 'Custom Phone Written For 8Bit RP'
author 'KrizFrost - https://github.com/KrizFrost | Alzar - https://github.com/Alzar'
version 'v1.0.0'
url 'https://github.com/krizfrost/8bit_phone'

ui_page 'ui/index.html'

files {
    'ui/index.html',
    'ui/html/apps/*.html',
    
    'ui/js/build.js',

    'ui/libs/*.min.css',
    'ui/libs/*.min.js',

    'ui/webfonts/*.eot',
    'ui/webfonts/*.svg',
    'ui/webfonts/*.ttf',
    'ui/webfonts/*.woff',
    'ui/webfonts/*.woff2',

    'ui/imgs/*.png',
}

client_script {
    'config/*.lua',
    'client/main.lua',
    'client/items.lua',
    'client/animation.lua',
	'client/apps/*.lua',
}

server_script {
    '@mysql-async/lib/MySQL.lua',
    'config/*.lua',
    'server/main.lua',
    'server/items.lua',
    'server/commands.lua',
	'server/apps/*.lua',
}

--dependencies {
    --'mythic_base',
    --'mythic_inventory',
    --'mythic_sounds'
--}