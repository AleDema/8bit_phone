import App from '../../app';
import Config from '../../config';
import Data from '../../utils/data';
import Utils from '../../utils/utils';
import Test from '../../test';

$("#screen-content").on('change', '#bank-transaction-accounts', (event) => {
    let id = $(event.currentTarget).val();
    let account = Data.GetData('bank-accounts').filter(function(item) {
        return item.id == id;
    })[0];

    App.OpenApp('bank-transaction', account, true, true, true);
});

window.addEventListener('bank-transaction-open-app', (data) => {
    let account = data.detail;
    
    $.post(Config.ROOT_ADDRESS + '/GetBankTransactions', JSON.stringify({
        account: account.id
    }), (transactions) => {
        $('#bank-app-page').addClass(`type-${account.type}`);

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
            $('#bank-transaction-accounts').append(`<optgroup label="${type.label}"></optgroup>`);
    
            $.each(type.data, (index2, act) => {
                $('#bank-transaction-accounts').append(`<option value="${act.id}">Account #${act.id} ${Utils.FormatCurrency(act.balance)}</option>`);
                
                if (act.id == account.id) {
                    $('#bank-transaction-accounts option:last-child').attr('selected', 'selected');
                }
            });
        });
    
        $('#bank-transaction-accounts').formSelect();
    
        if (transactions != null && transactions.length > 0) {
            $.each(transactions, (index, trans) => {
                switch(trans.type) {
                    case 1:
                        $('.transaction-body table').append(`<tr><td>${moment(trans.date).format('l')} at ${moment(trans.date).format('h:mm a')}</td><td class="trans-negative">${Utils.FormatCurrency(trans.amount)}</td><td>${trans.note}</td></tr>`)
                        break;
                    case 2:
                        $('.transaction-body table').append(`<tr><td>${moment(trans.date).format('l')} at ${moment(trans.date).format('h:mm a')}</td><td class="trans-negative">${Utils.FormatCurrency(trans.amount)}</td><td>${trans.note}</td></tr>`)
                        break;
                    case 3:
                        $('.transaction-body table').append(`<tr><td>${moment(trans.date).format('l')} at ${moment(trans.date).format('h:mm a')}</td><td class="trans-positive">${Utils.FormatCurrency(trans.amount)}</td><td>${trans.note}</td></tr>`)
                        break;
                    default:
                        $('.transaction-body table').append(`<tr><td>${moment(trans.date).format('l')} at ${moment(trans.date).format('h:mm a')}</td><td class="trans-positive">${Utils.FormatCurrency(trans.amount)}</td><td>${trans.note}</td></tr>`)
                        break;
                }

            });
        } else {
            $('.transaction-body').html('<div class="no-transactions">No Recent Transactions</div>')
        }
    
        $('#bank-app-page').animate({
            height: '100%'
        }, { duration: 1000 }).promise().then(() => {
            $('.select-wrapper, .no-transactions').fadeIn('fast');
        });
    });
});

window.addEventListener('bank-transaction-custom-close-app', (data) => {
    $('.select-wrapper, .no-transactions').fadeOut('fast');
    $('#bank-app-page').animate({
        height: '0%'
    }, { duration: 1000 }).promise().then(() => {
        window.dispatchEvent(new CustomEvent('custom-close-finish', { detail: data.detail }));
    });
});

window.addEventListener('bank-transaction-close-app', () => {
    
});

export default {}