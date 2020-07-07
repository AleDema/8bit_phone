import App from '../../app';
import Config from '../../config';
import Data from '../../utils/data';
import Notif from '../../utils/notification';

var sliders = {
    boost: document.getElementById('slider-boost'),
    suspension: document.getElementById('slider-suspension'),
    tranny: document.getElementById('slider-tranny'),
    brakes: document.getElementById('slider-brakes'),
    dt: document.getElementById('slider-dt')
}

function InitSliders() {
    for (let key in sliders) {
        let slider = sliders[key];
        noUiSlider.create(slider, {
            start: [5],
            connect: [true, false],
            step: 1,
            orientation: 'horizontal',
            range: {
                'min': 0,
                'max': 10
            },
            pips: {
                mode: 'steps',
                stepped: true,
                density: 10
            }
        });
    }
}

function SetSliders(boost, tranny, suspension, brakes, dt) {
    if (sliders.boost != null) {
        sliders.boost.noUiSlider.set(boost);
        sliders.tranny.noUiSlider.set(tranny);
        sliders.suspension.noUiSlider.set(suspension);
        sliders.brakes.noUiSlider.set(brakes);
        sliders.dt.noUiSlider.set(dt);
    }
}

$('#screen-content').on('click', '#tuner-custom-reset', (e) => {
    SetSliders(0, 5, 5, 5, 5);
    Notif.Alert('Tune Reset');
})

$('#screen-content').on('submit', '#new-tune', (event) => {
    event.preventDefault();
    let data = $(event.currentTarget).serializeArray();

    $.post(Config.ROOT_ADDRESS + '/SaveTune', JSON.stringify({
        label: data[0].value,
        carOnly: data[1] != null ? true : false,
        carModel: null,
        boost: sliders.boost.noUiSlider.get(),
        suspension: sliders.suspension.noUiSlider.get(),
        tranny: sliders.tranny.noUiSlider.get(),
        brakes: sliders.brakes.noUiSlider.get(),
        dt: sliders.dt.noUiSlider.get()
    }), (tune) => {
        if (tune != null) {
            $('#new-tune')[0].reset();
            Data.AddData('custom-tunes', tune);
            Notif.Alert('Tune Saved');
            M.Modal.getInstance($('#save-tune-popup')).close();
        } else {
            Notif.Alert('Error Saving Tune');
        }
    });
})

$('#screen-content').on('click', '#tuner-custom-saved', () => {
    let tunes = Data.GetData('custom-tunes');
    let factory = Data.GetData('factory-tunes');
    $('#custom-tunes-popup').find('#car-only').html('');
    $('#custom-tunes-popup').find('#generic').html('');

    let carOnly = tunes.filter(function(tune) {
        return tune.carOnly && tune.carModel === Data.GetData('currentVeh').model;
    });

    let generic = tunes.filter(function(tune) {
        return !tune.carOnly;
    });

    if (carOnly.length > 0) {
        CreateSavedTuneList($('#custom-tunes-popup').find('#car-only'), carOnly);
    } else {
        $('#tab-car-only').removeClass('active');
        $('#tab-generic').addClass('active');
        let tabs = M.Tabs.getInstance($('#custom-tunes-tabs'));
        tabs.updateTabIndicator();
    }

    CreateSavedTuneList($('#custom-tunes-popup').find('#generic'), factory, true);
    CreateSavedTuneList($('#custom-tunes-popup').find('#generic'), generic);

    M.Modal.getInstance($('#custom-tunes-popup')).open();
});

$('#screen-content').on('click', '#custom-tunes-popup .quick-tune-button', (event) => {
    let tune = $(event.currentTarget).data('tune');
    SetSliders(tune.boost, tune.tranny, tune.suspension, tune.brakes, tune.dt);
    Notif.Alert('Tune Loaded, Press Apply To Apply It');
    M.Modal.getInstance($('#custom-tunes-popup')).close();
});

$('#screen-content').on('click', '#custom-tunes-popup .quick-tune-delete', (event) => {
    let tune = $(event.currentTarget).parent().find('.quick-tune-button').data('tune');

    $.post(Config.ROOT_ADDRESS + '/DeleteTune', JSON.stringify({
        id: tune.id
    }), (status) => {
        if (status) {
            Data.RemoveObjectData('custom-tunes', 'id', tune.id);
            $(event.currentTarget).remove();
            M.Modal.getInstance($('#custom-tunes-popup')).close();
            Notif.Alert('Tune Deleted');
        } else {
            Notif.Alert('Unable To Delete Tune');
        }
    })
});

$('#screen-content').on('click', '#tuner-custom-quick', () => {
    App.OpenApp('tuner-quick', null, false, true);
});

$('#screen-content').on('click', '#tuner-custom-apply', () => {
    ApplyTune();
});

function CreateSavedTuneList(element, tunes, removeDelete = false) {
    $.each(tunes, (index, tune) => {
        element.append(`
            <div class="tuner-options">
                <button type="button" class="btn waves-effect waves-light teal darken-4 quick-tune-button">${tune.label}</button>
                <button type="button" class="btn waves-effect waves-light materialize-red darken-4 quick-tune-delete${removeDelete ? ' disabled' : ''}"><i class="fas fa-trash-alt"></i></button>
            </div>
        `);

        element.find('.tuner-options:last-child .quick-tune-button').data('tune', tune);
    });
}

function ApplyTune(tune = null) {
    let boost = 0.0;
    let suspension = 0.0;
    let tranny = 0.0;
    let brakes = 0.0;
    let dt = 0.0;

    if (tune != null) {
        boost = tune.boost;
        suspension = tune.suspension;
        tranny = tune.tranny;
        brakes = tune.brakes;
        dt = tune.dt;
    } else {
        boost = sliders.boost.noUiSlider.get();
        suspension = sliders.suspension.noUiSlider.get();
        tranny = sliders.tranny.noUiSlider.get();
        brakes = sliders.brakes.noUiSlider.get();
        dt = sliders.dt.noUiSlider.get();
    }

    $.post(Config.ROOT_ADDRESS + '/ApplyTune', JSON.stringify({
        boost: boost,
        suspension: suspension,
        tranny: tranny,
        brakes: brakes,
        dt: dt
    }), (status) => {
        if (status) {
            let veh = Data.GetData('currentVeh');
            veh.tune.active = {
                boost: boost,
                suspension: suspension,
                tranny: tranny,
                brakes: brakes,
                dt: dt
            }
            Data.StoreData('currentVeh', veh);
            Notif.Alert('Tune Applied');
        } else {
            Notif.Alert('Unable To Apply Tune');
        }
    });
}

window.addEventListener('tuner-custom-open-app', (data) => {
    sliders = {
        boost: document.getElementById('slider-boost'),
        suspension: document.getElementById('slider-suspension'),
        tranny: document.getElementById('slider-tranny'),
        brakes: document.getElementById('slider-brakes'),
        dt: document.getElementById('slider-dt')
    }

    InitSliders();

    if (data.detail != null && data.detail.tune != null) {
        SetSliders(data.detail.tune.boost, data.detail.tune.tranny, data.detail.tune.suspension, data.detail.tune.brakes, data.detail.tune.dt);
        ApplyTune(data.detail.tune);
        Notif.Alert('Tune Applied', 1000);
    } else {
        let veh = Data.GetData('currentVeh');
        SetSliders(veh.tune.active.boost, veh.tune.active.tranny, veh.tune.active.suspension, veh.tune.active.brakes, veh.tune.active.dt);
    }

    $('#tuner-custom-container .inner-app').fadeIn();
});

window.addEventListener('tuner-custom-close-app', () => {
    $('#tuner-custom-container .inner-app').fadeOut();
});

export default { ApplyTune }