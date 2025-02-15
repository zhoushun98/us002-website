/* eslint-disable object-shorthand */
let ImpactQueryParameters = (function() {
  const localStorageKey = 'bitstamp.affiliateClickId';
  const clickIdKey = '~click_id';
  const utmSourceKey = 'utm_source';

  let r = {
    readQueryParamValue: function(key) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
      });

      return params[key];
    }
  };
  return {
    initialize: function() {
      try {
        if (r.readQueryParamValue(utmSourceKey) === 'impact' && r.readQueryParamValue(clickIdKey)) {
          window.localStorage.setItem(localStorageKey, r.readQueryParamValue(clickIdKey));
        }
      } catch (e) {
        console.error(e);
      }
    }
  };
}());
ImpactQueryParameters.initialize();
