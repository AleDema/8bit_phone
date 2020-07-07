import App from '../../app';
import Config from '../../config';
import Notif from '../../utils/notification';

var appData = null;

window.addEventListener('dumper-details-open-app', (data) => {
    $('#dumper-transfer').on('click', (event) => {
        if ($(event.currentTarget).hasClass('disabled')) return;

        $.post(Config.ROOT_ADDRESS + '/DumpApp', JSON.stringify({
            type: 1,
            app: appData.container
        }), (status) => {
            if (status) {
                appData = null;
                $('.sdcard').fadeOut('fast').promise().then(() => {
                    $('.sdcard').removeClass('advanced');
                });
                Notif.Alert('App Packaged Transferred To SD Card');
                App.GoHome();
            } else {
                Notif.Alert('Error Transferring App Package');
            }
        });
    });

    $('#dumper-clone').on('click', (event) => {
        if ($(event.currentTarget).hasClass('disabled')) return;

        $.post(Config.ROOT_ADDRESS + '/DumpApp', JSON.stringify({
            type: 2,
            app: appData.container
        }), (status) => {
            if (status) {
                appData = null;
                $('.sdcard').fadeOut('fast').promise().then(() => {
                    $('.sdcard').removeClass('advanced');
                });
                Notif.Alert('App Package Cloned To SD Card');
                App.GoHome();
            } else {
                Notif.Alert('Error Cloning App Package');
            }
        });
    });
});

window.addEventListener('dumper-details-open-app', (data) => {
    appData = data.detail;
    
    $('.dumper-top-bar').css('background', appData.color);
    $('.section-header').css('color', appData.color);

    $('.dumper-top-text span').html(appData.name);
    $('#name .section-data').html(appData.name);
    $('#package .section-data').html(appData.container);

    switch(+appData.dumpable) {
        case 1:
            $('#dumper-clone, #APP_CLONE, #APP_NONE').remove();
            $('#permissions .section-data').html('APP_TRANSFER');

            break;
        case 2:
            $('#APP_NONE').remove();

            if (!$('.sdcard').hasClass('advanced')) {
                $('#dumper-clone').addClass('disabled');
            }

            $('#permissions .section-data').html('APP_TRANSFER, APP_CLONE');
            break;
        default:
            $('#dumper-clone, #dumper-transfer, #APP_CLONE, #APP_TRANSFER').remove();
            $('#permissions .section-data').html('APP_NONE');
            break;
    }

    $('.dumper-top-actions i').tooltip({
        enterDelay: 0,
        exitDelay: 0,
        inDuration: 0
    });
});

window.addEventListener('dumper-details-close-app', () => {
    $('#dumper-transfer').unbind();
    $('#dumper-clone').unbind();
});

export default {}