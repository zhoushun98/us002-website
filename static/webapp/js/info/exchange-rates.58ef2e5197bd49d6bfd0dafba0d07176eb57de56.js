let ExchangeRates = (function(self) {
  let r = {
      exchangeRates: document.getElementById('exchange-rates-section'),
      initListeners() {
        if (r.exchangeRates) {
          const selectors = r.exchangeRates.querySelectorAll('.exchange-group__filter-item');
          for (let i = 0; i < selectors.length; i++) {
            selectors[i].addEventListener('click', function() {
              const selectedCurrency = this.dataset.currency;
              const activeSelector = r.exchangeRates.querySelector('.exchange-group__filter-item--active');
              if (activeSelector) {
                activeSelector.classList.remove('exchange-group__filter-item--active');
              }
              this.classList.add('exchange-group__filter-item--active');

              // eslint-disable-next-line prefer-template
              const selectedTable = r.exchangeRates.querySelector('.exchange-group[data-currency=' + selectedCurrency + ']');
              const activeTable = r.exchangeRates.querySelector('.exchange-group.active');
              if (activeTable) {
                activeTable.classList.add('hidden');
                activeTable.classList.remove('active');
              }
              selectedTable.classList.add('active');
              selectedTable.classList.remove('hidden');
            });
          }
        }
      }
    }, u = {
      initialize() {
        r.initListeners();
      }
    };
  return u;
}(document.currentScript));

document.addEventListener('DOMContentLoaded', ExchangeRates.initialize);
