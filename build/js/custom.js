const KINDLING = {
  methods: {
    getElementHeight: function(element) {
      return element.clientHeight;
    },
    getScrollPosition: function() {
      // Reference: http://www.dyn-web.com/javascript/scroll-distance/
      var doc = document,
          w = window;
      var x, y, docEl;

      if (typeof w.pageYOffset === 'number') {
        // x = w.pageXOffset;
        y = w.pageYOffset;
      } else {
        docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat') ? doc.documentElement : doc.body;
        // x = docEl.scrollLeft;
        y = docEl.scrollTop;
      }

      return y;
    },
    setScrollClasses: function() {
      const scrollPosition = APP.getScrollPosition();
      if (scrollPosition == 0) {
        body.classList.add('top-o-the-page');
        body.classList.remove('page-scrolled');
      } else
      if (scrollPosition > 0) {
        body.classList.add('page-scrolled', 'added-once');
        body.classList.remove('top-o-the-page');
      }
    },
    delegatedClickHandler: function(event, selector, action) {
      event.stopPropagation();

      const allElements = document.querySelectorAll(selector);
      allElements.forEach(function(element){
        if(element === event.target) {
          action(event);
        }
      });
    },
    escapeAll: function(event) {
      // closeMenu();
      APP.closeModalAction(event);
    },
    openModalAction: function(event) {
      event.preventDefault();
      targetModalSelector = event.target.getAttribute('data-modal');
      const modal = document.querySelector('#' + targetModalSelector),
            modalDialog = document.querySelector('#' + targetModalSelector + ' .Modal-dialog');
      if(!modal || !modalDialog) { return; }
      modal.classList.add('Modal--isActive');
      modalDialog.classList.add('Modal-dialog--isActive');
    },
    closeModalAction: function(event) {
      event.preventDefault();
      event.stopPropagation();
      const activeModal = document.querySelector('.Modal--isActive'),
            activeModalDialog = document.querySelector('.Modal-dialog--isActive');
      if(!activeModal || !activeModalDialog) { return; }
      activeModal.classList.remove('Modal--isActive');
      activeModalDialog.classList.remove('Modal-dialog--isActive');
    },
    exampleButtonClickAction: function(event) {
      let buttonID = event.target.dataset.id;
      alert(`You clicked button ${buttonID}`);
      APP.toggleMenu();
    },
    toggleMenu: function() {
      var bodyClasses = String(body.classList);

      if(bodyClasses.indexOf(mobileMenuClass) != -1){
        APP.closeMenu();
      }else{
        APP.openMenu();
      }
    },
    openMenu: function() {
      body.classList.add(mobileMenuClass);
    },
    closeMenu: function() {
      body.classList.remove(mobileMenuClass);
    },
    double: function(num) {
      return num * 2;
    },
  },
  // END METHODS ==============================================

  init: function() {
    APP.setScrollClasses();

    // Evented Elements Selectors >>>
    const exampleButtonSelector = ".js-exampleButton",
          openModalSelector = ".js-openModal",
          closeModalSelector = ".js-closeModal";


    // Non-Delegated Click Events
    const exampleButtonElement = document.querySelector(exampleButtonSelector);
    exampleButtonElement.addEventListener('click', function(e) {
      e.stopPropagation();
      APP.exampleButtonClickAction(e);
    });

    // Delegated Click Events
    body.addEventListener('click', function(event) {
      // ex: APP.delegatedClickHandler(event, selector, APP.action);
      APP.delegatedClickHandler(event, openModalSelector, APP.openModalAction);
      APP.delegatedClickHandler(event, closeModalSelector, APP.closeModalAction);
      APP.delegatedClickHandler(event, exampleButtonSelector, APP.exampleButtonClickAction);
    }, false);

    // Window Scroll Event
    window.onscroll = function(event) {
      APP.setScrollClasses();
    }

    // Keydown Event
    body.addEventListener('keydown', function(event) {
      if(debug) { log(`KEYDOWN, keycode: ${event.keyCode}`); }

      // 'esc' Key
      if(event.keyCode === 27) {
        APP.escapeAll(event);
      }
    }, false);
  }
  // END INIT ==============================================
};


// const APP = KINDLING.methods, // Make method calls less verbose
//       body = document.querySelector('body'),
//       debug = document.querySelector('.js-debug') ? true: false,
//       log = o => console.log(o); // Shortened Console Log Function
//
//
// const mobileMenuClass = 'MobileMenu--active';
//
// window.onload = function(event) {
//   KINDLING.init();
// }


module.exports = { KINDLING };
