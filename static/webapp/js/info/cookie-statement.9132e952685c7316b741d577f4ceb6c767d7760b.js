let CookieStatement = (function(self) {
  let r = {
      customizeBtn: document.getElementById('customize-cookie-settings'),
      initListeners() {
        if (r.customizeBtn) {
          r.customizeBtn.addEventListener('click', function() {
            if (window.WidgetsEventBus) {
              window.WidgetsEventBus.$emit('cookie-consent:open');
            }
          });
        }
      }
    }, u = {
      initialize() {
        r.initListeners();
      }
    };
  return u;
}(document.currentScript));

document.addEventListener('DOMContentLoaded', CookieStatement.initialize);
