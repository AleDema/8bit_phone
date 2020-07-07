import App from '../../app';
import Config from '../../config';
import Data from '../../utils/data';
import Utils from '../../utils/utils';
import Notif from '../../utils/notification';

$('#screen-content').on('submit', '#send-quick-pay', (event) => {
    event.preventDefault();
    let data = $(event.currentTarget).serializeArray();

    $.post(Config.ROOT_ADDRESS + '/Transfer', JSON.stringify({
        account: data[0].value,
        destination: data[1].value,
        amount: data[2].value,
    }), (status) => {
        if (status) {
            Notif.Alert('Transfer Submitted, Will Be Processed Within 3 Days (3 hours)');
            App.GoBack();
        } else {
            Notif.Alert('Unable To Process Transfer');
        }
    });
});

window.addEventListener('bank-transfer-open-app', (data) => {
    let accounts = Data.GetData('bank-accounts');
    let stuff = new Array();
    
    stuff.push({ label: 'Personal Accounts', data: accounts.filter(function(account) {
        return account.type === 1;
    })});

    stuff.push({ label: 'Business Accounts', data: accounts.filter(function(account) {
        return account.type === 2;
    })});

    stuff.push({ label: 'Government Accounts', data: accounts.filter(function(account) {
        return account.type === 3;
    })});

    $.each(stuff, (index, type) => {
        $('#bank-transfer-accounts').append(`<optgroup label="${type.label}"></optgroup>`);

        $.each(type.data, (index2, account) => {
            $('#bank-transfer-accounts').append(`<option value="${account.id}">Account #${account.id} ${Utils.FormatCurrency(account.balance)}</option>`);
        });
    });

    $('#bank-transfer-accounts').formSelect();

    let history = Data.GetData('bank-transfers');

    $.each(history, (index, transfers) => {
        $.each(transfers, (index2, transfer) => {
            switch(transfer.status) {
                case 1:
                    $('#bank-transfer-history table tbody').append(`
                        <tr data-tooltip="Transfered on ${moment(transfer.date).format('l')} at ${moment(transfer.date).format('h:mm a')}">
                            <td class="transfer-status completed">Completed</td>
                            <td>${moment(transfer.date).format('l')}</td>
                            <td>${Utils.FormatCurrency(transfer.amount)}</td>
                            <td>${transfer.origin}</td>
                            <td>${transfer.destination}</td>
                        </tr>
                    `)
                    break;
                case 2:
                    $('#bank-transfer-history table tbody').append(`
                        <tr data-tooltip="Cancelled on ${moment(transfer.date).format('l')} at ${moment(transfer.date).format('h:mm a')}">
                            <td class="transfer-status cancelled">Cancelled</td>
                            <td>${moment(transfer.date).format('l')}</td>
                            <td>${Utils.FormatCurrency(transfer.amount)}</td>
                            <td>${transfer.origin}</td>
                            <td>${transfer.destination}</td>
                        </tr>
                    `)
                    break;
                default:
                        $('#bank-transfer-history table tbody').append(`
                            <tr data-tooltip="Transfers on ${moment(transfer.date).format('l')} at ${moment(transfer.date).format('h:mm a')}">
                                <td class="transfer-status pending">Pending</td>
                                <td>${moment(transfer.date).format('l')}</td>
                                <td>${Utils.FormatCurrency(transfer.amount)}</td>
                                <td>${transfer.origin}</td>
                                <td>${transfer.destination}</td>
                            </tr>
                        `)
                    break;
            }

            let $entry = $('#bank-transfer-history table tbody tr:last-child');
            $entry.tooltip({
                enterDelay: 0,
                exitDelay: 0,
                inDuration: 0
            });
        });
    });

    $('#bank-app-page').animate({
        height: '100%'
    }, { duration: 1000 });
});

window.addEventListener('bank-transfer-custom-close-app', (data) => {
    $('#bank-app-page').animate({
        height: '0%'
    }, { duration: 1000 }).promise().then(() => {
        window.dispatchEvent(new CustomEvent('custom-close-finish', { detail: data.detail }));
    });
});

window.addEventListener('bank-transfer-close-app', () => {

});

export default {}