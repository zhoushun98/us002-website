let API = (function() {
  let r = {
      toggle(el) {
        if (el.style.display === 'none') {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      },
      initAccordion() {
        let collapsableEls = document.querySelectorAll('.api__collapsable');
        collapsableEls.forEach(el => {
          el.addEventListener('click', function() {
            let heading = this;
            heading.classList.toggle('api__collapsable--open');
            r.toggle(document.querySelector(`#${heading.dataset.target}`));
          });
          setTimeout(function() {
            let accordionEl = document.querySelector(`#${el.dataset.target}`);
            if (accordionEl) {
              accordionEl.style.display = 'none';
            }
          }, 1);
        });
      }
    }, u = {
      initialize() {
        r.initAccordion();
      }
    };

  return u;
}());

document.addEventListener('DOMContentLoaded', API.initialize);
