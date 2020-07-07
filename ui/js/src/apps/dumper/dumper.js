import App from '../../app';
import Config from '../../config';
import Data from '../../utils/data';
import Notif from '../../utils/notification';
import Utils from '../../utils/utils';

import DumperDetails from './details';

window.addEventListener('message', (event) => {
    switch (event.data.action) {
        case 'Logout':
            $('.sdcard').fadeOut('fast').promise().then(() => {
                $('.sdcard').removeClass('advanced');
            });
            break;
        case 'InsertSDCard':
            if (event.data.advanced) {
                $('.sdcard').addClass('advanced');
            }
            $('.sdcard').fadeIn('fast');
            break;
    }
});

$('#remove-sdcard-card').on('click', () => {
    let modal = M.Modal.getInstance($('#remove-sdcard-conf'));
    modal.close();

    $.post(Config.ROOT_ADDRESS + '/EjectSDCard', JSON.stringify({
        advanced: $('.sdcard').hasClass('advanced')
    }), (status) => {
        if (status) {
            $('.sdcard').fadeOut('fast').promise().then(() => {
                $('.sdcard').removeClass('advanced');
            });
            Notif.Alert('SD Card Ejected');

            if (App.GetCurrentApp() === 'dumper') {
                App.GoHome();
            }
        } else {
            Notif.Alert('Issue Ejectiong SD Card');
        }
    });
});

function FilterApps(level, status) {
    $.each($('.dumper-app'), (index, app) => {
        let data = $(app).data('app');

        if (data.dumpable === level) {
            if (status) {
                $(app).fadeIn();
            } else {
                $(app).fadeOut();
            }
        }
    })
}

window.addEventListener('dumper-open-app', (data) => {
    $('.dumper-filter').on('click', (event) => {
        if ($(event.currentTarget).hasClass('active')) {
            $(event.currentTarget).removeClass('active');
            FilterApps(+$(event.currentTarget).data('filter'), false);
        } else {
            $(event.currentTarget).addClass('active');
            FilterApps(+$(event.currentTarget).data('filter'), true);
        }
    })
    
    $('#dumper-container').on('click', '.dumper-app', (event) => {
        if ($('.sdcard').is(':visible')) {
            let app = $(event.currentTarget).data('app');
            App.OpenApp('dumper-details', app, false, true, false);
        }
    });
});

window.addEventListener('dumper-open-app', (data) => {
    if ($('.sdcard').is(':visible')) {
        let apps = Data.GetData('apps');
        $.each(apps, (index, app) => {
            if (app.enabled) {
                switch(app.dumpable) {
                    case 1:
                        $('.dumper-app-list').append(`<div class="dumper-app"><div class="dumper-icon transfer"><i class="fas fa-download"></i></div><div class="dumper-app-label">${app.name}</div></div>`);
                        break;
                    case 2:
                        $('.dumper-app-list').append(`<div class="dumper-app"><div class="dumper-icon copy"><i class="fas fa-copy"></i></div><div class="dumper-app-label">${app.name}</div></div>`);
                        break;
                    default:
                        $('.dumper-app-list').append(`<div class="dumper-app"><div class="dumper-icon"><i class="fas fa-times-circle"></i></div><div class="dumper-app-label">${app.name}</div></div>`);
                        break;
                }

                $('.dumper-app:last-child').data('app', app);
            }
        });
    } else {
        $('#dumper-container').find('.inner-app').html('No SD Card Found').addClass('error');
    }
});

window.addEventListener('dumper-close-app', () => {
    
});

export default {}