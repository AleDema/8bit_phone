import Config from './config';
import Data from './utils/data';
import Utils from './utils/utils';
import Notif from './utils/notification';
import Unread from './utils/unread';
import Apps from './apps/apps';

import '../../css/src/materialize.scss';
import '../../css/src/style.scss';

import Test from './test';

var appTrail = [
    {
        app: null,
        data: null,
        fade: null
    }
];

moment.fn.fromNowOrNow = function(a) {
    if (Math.abs(moment().diff(this)) < 60000) {
        return 'just now';
    }
    return this.fromNow(a);
};

// $(function() {
//     $('.wrapper').fadeIn();
//     Data.ClearData();
//     Data.SetupData([
//         { name: 'myData', data: Test.PlayerDetails },
//         { name: 'settings', data: Test.Settings },
//         { name: 'contacts', data: Test.Contacts },
//         { name: 'messages', data: Test.Messages },
//         { name: 'history', data: Test.Calls },
//         { name: 'apps', data: Config.Apps },
//         { name: 'tweets', data: Test.Tweets },
//         { name: 'adverts', data: Test.Adverts },
//         { name: 'factory-tunes', data: Test.FactoryTunes },
//         { name: 'custom-tunes', data: Test.Tunes },
//         { name: 'bank-accounts', data: Test.Accounts },
//         { name: 'irc-messages', data: Test.IRCMessages }
//     ]);

//     OpenApp('home', null, true);
//     $('.sdcard').addClass('advanced');
//     $('.sdcard').fadeIn('fast');
// });

window.addEventListener('message', (event) => {
    switch (event.data.action) {
        case 'show':
            $('.wrapper').show('slide', { direction: 'down' }, 500);

            if (!Apps.Phone.Call.IsCallPending()) {
                OpenApp('home', null, true);
            } else {
                appTrail = [
                    {
                        app: 'home',
                        data: null,
                        fade: false
                    }
                ];
                OpenApp(
                    'phone-call',
                    {
                        number: event.data.number,
                        receiver: !event.data.initiator
                    },
                    false
                );
            }
            break;
        case 'hide':
            ClosePhone();
            break;
        case 'SetServerID':
            $('.player-id span').html(event.data.id);
            break;
    }
});

function InitShit() {
    $('.modal').modal();
    $('.dropdown-trigger').dropdown({
        constrainWidth: false
    });
    $('.tabs').tabs();
    //$('select').formSelect();
    $('.char-count-input').characterCounter();
    $('.phone-number').mask('000-000-0000', { placeholder: '###-###-####' });
}

$(function() {
    let settings = Data.GetData('settings');

    Utils.UpdateWallpaper(`url(./imgs/back00${settings.wallpaper}.png)`);
    Utils.SetMute(settings.volume === 0);

    document.onkeyup = function(data) {
        if (data.which == 114 || data.which == 27) {
            ClosePhone();
        }
    };
});

$('.phone-header').on('click', '.in-call', (e) => {
    if (appTrail[appTrail.length - 1].app != 'phone-call') {
        OpenApp('phone-call', null, false);
    }
});

$('.phone').on('click', '.back-button', (event) => {
    if (!$(event.currentTarget).hasClass('disabled')) {
        $('.footer-button').addClass('disabled');
        GoBack();
    }
});

$('.phone').on('click', '.home-button', (event) => {
    if (!$(event.currentTarget).hasClass('disabled')) {
        $('.footer-button').addClass('disabled');
        GoHome();
    }
});

$('.phone').on('click', '.close-button', (e) => {
    ClosePhone();
});

$('#remove-sim-card').on('click', (e) => {
    let modal = M.Modal.getInstance($('#remove-sim-conf'));
    modal.close();
    Utils.NotifyAltSim(false);
    Notif.Alert('Sim Removed');
});

$('.mute').on('click', (e) => {
    let volume = Data.GetData('settings').volume;
    
    $.post(Config.ROOT_ADDRESS + '/ToggleMute', JSON.stringify({
        muted: volume === 0 ? false : true
    }), (status) => {
        if (status) {
            Data.UpdateData('settings', 'volume', volume === 0 ? 100 : 0);
            Utils.SetMute(volume !== 0);
        }
    });
});

function ClosePhone() {
    $.post(Config.ROOT_ADDRESS + '/ClosePhone', JSON.stringify({}));
    $('.wrapper').hide('slide', { direction: 'down' }, 500, () => {  
        $('#screen-content').trigger(`${appTrail[appTrail.length - 1].app}-close-app`);
        $('#toast-container').remove();
        $('.material-tooltip').remove();
        $('.app-container').hide();
        appTrail = [
            {
                app: null,
                data: null,
                fade: null
            }
        ];
    });
}

function SetupApp(app, data, pop, disableFade, exit) {
    $.ajax({
        url: `./html/apps/${app}.html`,
        cache: false,
        dataType: "html",
        statusCode: {
            404: function() {
                appTrail.push({ app: app, data: null, fade: false, close: exit });
                Notif.Alert('App Doesn\'t Exist', 1000);
                GoHome();
                $('.footer-button').removeClass('disabled');
            }
        },
        success: function(response) {
            $('#screen-content').html(response);
            InitShit();
        
            window.dispatchEvent(new CustomEvent(`${appTrail[appTrail.length - 1].app}-close-app`));
            if (pop) {
                appTrail.pop();
                disableFade = null;
                appTrail.pop();
            }
        
            appTrail.push({
                app: app,
                data: data,
                fade: disableFade,
                close: exit
            });
        
            $('.material-tooltip').remove();
            window.dispatchEvent(new CustomEvent(`remove-closed-notif`, { detail: { app: app }}));
            window.dispatchEvent(new CustomEvent(`${app}-open-app`, { detail: data }));
            
            $('#screen-content').show();
            $('.footer-button').removeClass('disabled');
        }
    });
}

window.addEventListener('custom-close-finish', (data) => {
    if (data.detail.disableFade) {
        SetupApp(data.detail.app, data.detail.data, data.detail.pop, data.detail.disableFade, data.detail.customExit);
    } else {
        $('#screen-content').fadeOut('fast', () => {
            SetupApp(data.detail.app, data.detail.data, data.detail.pop, data.detail.disableFade, data.detail.customExit);
        });
    }
});

function OpenApp(app, data = null, pop = false, disableFade = false, customExit = false) {
    if ($('#screen-content .app-container').length <= 0 || disableFade) {
        if (appTrail[appTrail.length - 1].close) {
            window.dispatchEvent(new CustomEvent(`${appTrail[appTrail.length - 1].app}-custom-close-app`, { detail: { app: app, data: data, pop: pop, disableFade: disableFade, customExit: customExit } }));
        } else {
            SetupApp(app, data, pop, disableFade, customExit);
        }
        
    } else {
        if (appTrail[appTrail.length - 1].close) {
            window.dispatchEvent(new CustomEvent(`${appTrail[appTrail.length - 1].app}-custom-close-app`, { detail: { app: app, data: data, pop: pop, disableFade: disableFade, customExit: customExit } }));
        } else {
            $('#screen-content').fadeOut('fast', () => {
                SetupApp(app, data, pop, disableFade, customExit);
            });
        }
    }
}

function RefreshApp() {
    $('.material-tooltip').remove();
    $('#screen-content').trigger(`${appTrail[appTrail.length - 1].app}-open-app`, [ appTrail[appTrail.length - 1].data ]);
}

function GoHome() {
    if (appTrail[appTrail.length - 1].app !== 'home') {
        OpenApp('home');
    }
}

function GoBack() {
    if (appTrail[appTrail.length - 1].app !== 'home') {
        if (appTrail.length > 1) {
            OpenApp(
                appTrail[appTrail.length - 2].app,
                appTrail[appTrail.length - 2].data,
                true,
                appTrail[appTrail.length - 1].fade,
                appTrail[appTrail.length - 2].close
            );
        } else {
            GoHome();
        }
    }
}

function GetCurrentApp() {
    return appTrail[appTrail.length - 1].app;
}

export default { GoHome, GoBack, OpenApp, RefreshApp, GetCurrentApp };
