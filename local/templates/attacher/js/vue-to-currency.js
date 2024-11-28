Vue.filter('toCurrency', function (value) {
    var formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB'
    })
    return formatter.format(value).replace(',', '.')
    
})