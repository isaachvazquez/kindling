// global variables
var body = document.querySelector('body'),
    debug = document.querySelector('.js-debug') ? true: false,
    mobileMenuClass = 'mobile-menu-active',
    articleContent = document.querySelectorAll('.article__content').length > 0;

// Example Debugging Log
// if(debug) { console.log('debug content'); }

// ========================================
// ========================================
// WINDOW ONLOAD EVENT
// ========================================
window.onload = function(event) {
  if(debug) { console.log('Page Loaded'); }

  // Onload variables >>>
  setScrollClasses();
}


// ========================================
// ========================================
// WINDOW SCROLL EVENT
// ========================================
window.onscroll = function(event) {
  setScrollClasses();
}

function setScrollClasses() {
  if (getScrollPosition() == 0) {
    body.classList.add('top-o-the-page');
    body.classList.remove('page-scrolled');
  } else
  if (getScrollPosition() > 0) {
    body.classList.add('page-scrolled', 'second-class');
    body.classList.remove('top-o-the-page');
  }
}




// ========================================
// ========================================
// CLICK EVENT HANDLER
// ========================================
body.addEventListener('click', function(e) {
  // Click event target >>>
  var target = e.target.className;

  // Clickable Elements >>>
  var menuButton = "menu-button",
      siteWrapper = "site-wrapper",
      openModalHook = "js-openModal",
      closeModalHook = "js-closeModal";

  // Log out the target
  if(debug) { console.log("CLICK EVENT: ", target); }

  // Click Handlers >>>

  // Menu Button Click Event
  clickHandler(e, target, menuButton, menuButtonClickAction);

  // openModalHook Event
  clickHandler(e, target, openModalHook, openModalAction);

  // closeModalHook Event
  clickHandler(e, target, closeModalHook, closeModalAction);

}, false);


/**
* @method clickHandler
* Description: Click handler for the search click event
*
* @param {object} event - The event object
* @param {string} target - e.target.classname
* @param {string} classname - the element to watch for and delegate to
* @param {function} action - event handler
*/
function clickHandler(event, target, classname, action) {
  if(target.indexOf(classname) != -1) { action(event); }
}



// Click Event Actions
// ===================

function openModalAction(event) {
  event.preventDefault();

  targetModalSelector = event.target.getAttribute('data-modal');

  var modal = document.querySelector('#' + targetModalSelector),
      modalDialog = document.querySelector('#' + targetModalSelector + ' .Modal-dialog');

  if(!modal || !modalDialog) {
    return;
  }

  modal.classList.add('Modal--isActive');
  modalDialog.classList.add('Modal-dialog--isActive');
}


function closeModalAction(event) {
  event.preventDefault();
  event.stopPropagation();

  var activeModal = document.querySelector('.Modal--isActive'),
      activeModalDialog = document.querySelector('.Modal-dialog--isActive');

  if(!activeModal || !activeModalDialog) {
    return;
  }

  activeModal.classList.remove('Modal--isActive');
  activeModalDialog.classList.remove('Modal-dialog--isActive');

}


function menuButtonClickAction(event) {
  event.preventDefault();
  if(debug) { console.log('ACTION: menuButtonClickAction()'); }

  // Toggle the Mobile Menu
  toggleMenu();
}

// ========================================
// ========================================
// Keypress EVENT HANDLER
// ========================================
body.addEventListener('keydown', function(event) {
  if(debug) { console.log('KEYDOWN, keycode: ', event.keyCode); }

  // Esc Key
  if(event.keyCode === 27) {
    escapeAll(event);
  }

}, false);


/* ====================================
Mobile Menu JS

Notes:

==================================== */
/**
* @method toggleMenu
* Description:
*
* @sideEffects - Add/Remove mobileMenuClass to/from body classList
*/
function toggleMenu() {
  var bodyClasses = String(body.classList);

  if(bodyClasses.indexOf(mobileMenuClass) != -1){
    closeMenu();
  }else{
    openMenu();
  }
}

function openMenu() {
  body.classList.add(mobileMenuClass);
}

function closeMenu() {
  body.classList.remove(mobileMenuClass);
}

function escapeAll(e) {
  closeMenu();
  closeModalAction(e);
}


/**
* @method toggleDropdown
* Description:
*
* @param {object} event - event object
* @sideEffects - Add/Remove 'active' to/from Dropdown classList
* and set the height equal to the data-active- or data-inactive-
* value respectively
*/
function toggleDropdown(event) {
  var dropdownButton = event.target,
      dropdown = dropdownButton.nextSibling.nextSibling,
      dropdownParent = dropdownButton.parentElement,
      dropdownClasses = String(dropdownParent.classList);

  // if active, remove active class, and set height = data-dropdown-inactive-height
  // if inactive, add active class, and set height = data-dropdown-active-height
  if(dropdownClasses.indexOf('active') != -1){
    deactivateDropdown(dropdownParent);
  }else{
    activateDropdown(dropdownParent);
  }
}


function getHeight(element) {
  return element.clientHeight;
}

function toggleFilters() {
  var filtersButton = document.querySelector('.js-filters-button'),
      filtersContainer = document.querySelector('.filters'),
      filtersContainerClasses = String(filtersContainer.classList);

  if(filtersContainerClasses.indexOf('active') != -1){
    filtersContainer.classList.remove('active');
  }else{
    filtersContainer.classList.add('active');
  }
}


/* ====================================
Scrolling functions

Notes:

==================================== */

/**
* @method getScrollPosition
* Description: Return current scroll position
* Reference: http://www.dyn-web.com/javascript/scroll-distance/
*
* @return {Number} y - current scroll position
*/
function getScrollPosition() {
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
}
