import App from '../../app';
import Config from '../../config';
import Data from '../../utils/data';
import Notif from '../../utils/notification';
import Unread from '../../utils/unread';

import Convo from './convo';

$('#screen-content').on('submit', '#irc-join-channel', (event) => {
    event.preventDefault();
    let data = $(event.currentTarget).serializeArray();
    let channel = {
        channel: data[0].value,
        joined: Date.now()
    }

    $.post(Config.ROOT_ADDRESS + '/IRCJoinChannel', JSON.stringify({
        channel: channel.channel
    }), (status) => {
        if (status) {
            Data.AddData('irc-channels', channel);

            BringChannelToTop(channel)
            M.Modal.getInstance($('#irc-join-modal')).close();

            $('.channel-list').prepend(`<div class="irc-channel"><span>${channel.channel}</span></div>`);
            $('.channel-list .irc-channel:first-child').data('channel', channel);

            Notif.Alert('Joined Channel');
        } else {
            Notif.Alert('Unable To Join Channel');
        }
    })
});

function BringChannelToTop(channel) {
    // Some real dumb fuckery to get channel to top
    let channels = Data.GetData('irc-channels');
    let ch = channels.filter(c => c.channel === channel)[0];
    channels = channels.filter(c => c.channel !== channel);
    channels.unshift(ch);
    Data.StoreData('irc-channels', channels);
}

$('#screen-content').on('click', '.irc-channel', (event) => {
    App.OpenApp('irc-convo', { channel: $(event.currentTarget).data('channel') }, false, true, false);
});

function AddChannelToApp(channel) {
    $('.channel-list').append(`<div class="irc-channel"><span>${channel.channel}</span></div>`);
    $('.channel-list .irc-channel:last-child').data('channel', channel);
}

window.addEventListener('irc-open-app', () => {
    let channels = Data.GetData('irc-channels');

    $('.channel-list').html('');
    $.each(channels, (index, channel) => {
        AddChannelToApp(channel);
    });

    Unread.ClearUnread();
});

window.addEventListener('irc-close-app', () => {
    
});

export default { BringChannelToTop }