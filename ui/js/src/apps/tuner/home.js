import App from '../../app';
import Config from '../../config';
import Data from '../../utils/data';
import anime from 'animejs/lib/anime.es.js';

import Custom from './custom';
import Quick from './quick';
import Legal from './legal';
import Info from './info';

var timer = null;
var hasScanned = false;

window.addEventListener('message', (event) => {
    switch (event.data.action) {
        case 'ResetVehicle':
            ResetScan();
            break;
    }
});

$('#screen-content').on('click', '.tuner-nav', (event) => {
    if ($(event.currentTarget).data('disabled')) return;
    let app = $(event.currentTarget).data('section');
    App.OpenApp(`tuner-${app}`, null, false, true);
});

$('#screen-content').on('click', '#no-chip-quit', () => {
    App.GoBack();
});

function ShowError() {
    $('.no-chip-error').fadeIn('fast', () => {
        $('.error-details').show('scale', () => {
            $('.tuner-nav').data('disabled', true);
        });
    });
}

function SetupTuner(tunerActive) {
    $('.splash').hide();
    if (tunerActive.sameVeh) {
        tunerActive = Data.GetData('currentVeh');
    }

    if (tunerActive.id != null) {
        hasScanned = true;
        if (Data.GetData('currentVeh') == null || Data.GetData('currentVeh').id != tunerActive.id) {
            Data.StoreData('currentVeh', tunerActive);
        }
    
        $('.connected-car').html(tunerActive.name);
    
        $('#tuner-home-screen').fadeIn('normal');
    } else {
        ShowError()
    }
}

function ResetScan() {
    hasScanned = false;
}

var dots = null;
window.addEventListener('tuner-open-app', () => {
    $('.splash').show();
    dots = setInterval( function() {
        if ( $('.dots').html().length >= 3 )
            $('.dots').html('');
        else 
            $('.dots').html($('.dots').html() + '.');
    }, 500);

    if (!hasScanned) {
        $.post(Config.ROOT_ADDRESS + '/SetupTuner', JSON.stringify({}), (status) => {
            clearInterval(dots);
            $('.splash').fadeOut('fast', () => {

                if (status) {
                    SetupTuner(status);
                } else {
                    ShowError();
                }
            });
        });
    } else {
        $.post(Config.ROOT_ADDRESS + '/CheckInVeh', JSON.stringify({
            veh: Data.GetData('currentVeh')
        }), (status) => {
            clearInterval(dots);
            if (status != null) {
                if (status.sameVeh) {
                    SetupTuner(status);
                } else if(status) {
                    $.post(Config.ROOT_ADDRESS + '/SetupTuner', JSON.stringify({}), 
                    function(status) {
                        $('.splash').fadeOut('fast').promise().then(() => {
                            if (status) {
                                SetupTuner(status);
                            } else {
                                ShowError();
                            }
                        });
                    });
                } else {
                    ShowError();
                }
            } else {

            }
        });
    }
});

window.addEventListener('tuner-close-app', () => {
    clearInterval(dots);
    clearTimeout(timer);
    $('.no-chip-error').hide();
    $('#tuner-home-screen').hide();
    $('.tuner-nav').removeData('disabled');

    $.post(Config.ROOT_ADDRESS + '/CancelTunerSearch', JSON.stringify({}));
});

export default {}