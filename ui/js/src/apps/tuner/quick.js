import App from '../../app';
import Config from '../../config';
import Data from '../../utils/data';
import Custom from './custom';

var factoryTunes = null;
var customTunes = null;

$('#screen-content').on('click', '.quick-tune-button', (event) => {
    let tune = $(event.currentTarget).data('tune');
    Custom.ApplyTune(tune);
});

$('#screen-content').on('click', '#quick-custom-open', () => {
    App.OpenApp('tuner-custom', null, false, true);
});

window.addEventListener('tuner-quick-open-app', () => {
    factoryTunes = Data.GetData('factory-tunes');
    customTunes = Data.GetData('custom-tunes').filter(function(tune) {
        return !tune.carOnly || (tune.carOnly && tune.carModel == Data.GetData('currentVeh').model);
    });

    $.each(factoryTunes, (index, tune) => {
        $('.tuner-quick-section#factory').find('.tuner-quick-buttons').append(`<button type="button" class="btn waves-effect waves-light teal darken-4 quick-tune-button">${tune.label}</button>`);
        $('.tuner-quick-section#factory').find('.tuner-quick-buttons .quick-tune-button:last-child').data('tune', tune);
    });

    $.each(customTunes, (index, tune) => {
        $('.tuner-quick-section#custom').find('.tuner-quick-buttons').append(`<button type="button" class="btn waves-effect waves-light teal darken-4 quick-tune-button">${tune.label}</button>`);
        $('.tuner-quick-section#custom').find('.tuner-quick-buttons .quick-tune-button:last-child').data('tune', tune);
    });

    $('#tuner-quick').fadeIn();
});

window.addEventListener('tuner-quick-close-app', () => {
    $('#tuner-quick').fadeOut('normal', () => {
        $('.tuner-quick-section#factory').find('.tuner-quick-buttons').html('');
        $('.tuner-quick-section#custom').find('.tuner-quick-buttons').html('');
    });
});

export default {}