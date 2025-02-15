/* eslint-disable object-shorthand */
let UtmParameters = (function() {
  const UTM_KEY = 'bitstamp.utmParams';
  const UTM_TYPE_FIRST = 'first';
  const UTM_TYPE_LAST = 'last';
  let r = {
    readUrlQueryParams: function() {
      const urlParamsChunk = window.location.search.substr(1);
      return urlParamsChunk.split('&').reduce((qs, query) => {
        const chunks = query.split('=');
        qs[chunks[0]] = decodeURIComponent(chunks[1] || '');
        return qs;
      }, {});
    },
    parseUtm: function(urlParams) {
      let utm_obj = {
        'utmType': UTM_TYPE_FIRST,
      };
      utm_obj['source'] = urlParams['utm_source'];
      utm_obj['medium'] = urlParams['utm_medium'];
      utm_obj['campaign'] = urlParams['utm_campaign'];
      if ('utm_term' in urlParams) {
        utm_obj['term'] = urlParams['utm_term'];
      }
      if ('utm_content' in urlParams) {
        utm_obj['content'] = urlParams['utm_content'];
      }
      return utm_obj;
    },
    storeUtm: function(utmObj) {
      try {
        const storageItem = window.localStorage.getItem(UTM_KEY);
        if (storageItem) {
          let parsedUtmList = JSON.parse(storageItem);
          if (Array.isArray(parsedUtmList)) {
            const firstUtm = parsedUtmList.find(param => param.utmType === UTM_TYPE_FIRST);
            if (JSON.stringify(firstUtm) !== JSON.stringify(utmObj)) {
              utmObj.utmType = UTM_TYPE_LAST;
              window.localStorage.setItem(UTM_KEY,JSON.stringify([firstUtm, utmObj]));
            }
          }
        } else {
          window.localStorage.setItem(UTM_KEY, JSON.stringify([utmObj]));
        }
      } catch (e) {
        console.error(e);
      }
    },
    readAndStoreUtm: function() {
      const mandatory_params = ['utm_source', 'utm_medium', 'utm_campaign'];
      const urlParams = r.readUrlQueryParams();
      if (urlParams && mandatory_params.every(param => param in urlParams)) {
        let utmObj = r.parseUtm(urlParams);
        r.storeUtm(utmObj);
      }
    },
  };
  return {
    initialize: function() {
      r.readAndStoreUtm();
    },
  };
}());
UtmParameters.initialize();
