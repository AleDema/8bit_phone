import App from '../../app';
import Config from '../../config';
import Data from '../../utils/data';
import Notif from '../../utils/notification';

window.addEventListener('tuner-info-open-app', () => {
    let veh = Data.GetData('currentVeh');

    $.post(Config.ROOT_ADDRESS + '/GetVehHealth', JSON.stringify({}), (data) => {
        $('#model-value').html(veh.name);
        $('#plate-value').html(veh.plate);

        if (data) {
            $('#body-value').html(data.body);
            $('#brakes-value').html(data.brakes);
            $('#electronics-value').html(data.electronics);
            $('#engine-value').html(data.engine);
            $('#suspension-value').html(data.suspension);
            $('#transmission-value').html(data.transmission);
        } else {
            $('#veh-health').html('<div class="info-error">Unable To Detect Health Status of Vehicle</div>');
        }

        ($('#tuner-info-container .tuner-section').fadeIn('fast'))
    })
});

window.addEventListener('tuner-info-close-app', () => {
    
});

export default {}