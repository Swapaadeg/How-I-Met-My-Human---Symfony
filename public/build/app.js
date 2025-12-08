"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/carousel.js */ "./assets/js/carousel.js");
/* harmony import */ var _js_animals_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/animals-carousel.js */ "./assets/js/animals-carousel.js");
/* harmony import */ var _js_news_carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/news-carousel.js */ "./assets/js/news-carousel.js");
/* harmony import */ var _js_searchForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/searchForm.js */ "./assets/js/searchForm.js");
/* harmony import */ var _js_animals_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/animals.js */ "./assets/js/animals.js");
/* harmony import */ var _js_contact_modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/contact-modal.js */ "./assets/js/contact-modal.js");
/* harmony import */ var _js_auth_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/auth.js */ "./assets/js/auth.js");
/* harmony import */ var _js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/mobile-menu.js */ "./assets/js/mobile-menu.js");
/* harmony import */ var _js_mobile_action_menu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/mobile-action-menu.js */ "./assets/js/mobile-action-menu.js");
/* harmony import */ var _js_comment_reply_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/comment-reply.js */ "./assets/js/comment-reply.js");
/* harmony import */ var _js_join_form_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/join-form.js */ "./assets/js/join-form.js");
/* harmony import */ var _js_utils_modal_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/utils/modal-utils.js */ "./assets/js/utils/modal-utils.js");
/* harmony import */ var _js_utils_file_input_display_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/utils/file-input-display.js */ "./assets/js/utils/file-input-display.js");
/*
 * Main Application File
 * Central initialization point for all JavaScript modules
 * Each module is imported and initialized when its corresponding DOM elements exist
 */



// Import homepage carousels




// Import search and form functionality


// Import animals page modules



// Import authentication module


// Import utility modules







/**
 * Central application initialization
 * Called when DOM is fully loaded
 * Each feature is conditionally initialized based on DOM element presence
 */
document.addEventListener('DOMContentLoaded', function () {
  // ==================== GLOBAL UTILITIES ====================
  // Initialize utilities that may be used across multiple pages
  (0,_js_utils_modal_utils_js__WEBPACK_IMPORTED_MODULE_12__.initializeModalUtils)();
  (0,_js_utils_file_input_display_js__WEBPACK_IMPORTED_MODULE_13__.initializeAllFileInputDisplays)();

  // ==================== LAYOUT & NAVIGATION ====================
  // Mobile menu (used on all pages)
  (0,_js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_8__.initializeMobileMenu)();
  (0,_js_mobile_action_menu_js__WEBPACK_IMPORTED_MODULE_9__.initializeMobileActionMenu)();

  // ==================== HOMEPAGE FEATURES ====================
  // Hero carousel - auto-rotating slideshow
  if (document.querySelector('.hero-carousel')) {
    (0,_js_carousel_js__WEBPACK_IMPORTED_MODULE_1__.initCarousel)();
  }

  // Animals carousel - 10 oldest animals with navigation
  if (document.querySelector('.animals-carousel')) {
    (0,_js_animals_carousel_js__WEBPACK_IMPORTED_MODULE_2__.initAnimalsCarousel)();
  }

  // News carousel - infinite scroll news section
  if (document.querySelector('.news-carousel')) {
    (0,_js_news_carousel_js__WEBPACK_IMPORTED_MODULE_3__.initializeNewsCarousel)();
  }

  // Scroll indicator - clickable paw to scroll to animals section
  var scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function () {
      var targetSection = document.querySelector('.oldest-animals-section');
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
    scrollIndicator.style.cursor = 'pointer';
  }

  // ==================== ANIMALS PAGE & HOMEPAGE ====================
  // Animal cards grid with favorites, sharing, etc.
  // Works on both /animals page (animals-grid) and homepage (animals-carousel)
  if (document.querySelector('.animals-grid') || document.querySelector('.animals-carousel') || document.querySelector('.favorite-btn')) {
    (0,_js_animals_js__WEBPACK_IMPORTED_MODULE_5__.initializeAnimals)();
  }

  // Contact modal (for animal/association contact)
  var contactButtons = document.querySelectorAll('.contact-btn');
  if (contactButtons.length > 0) {
    (0,_js_contact_modal_js__WEBPACK_IMPORTED_MODULE_6__.initializeContactModal)();
  }

  // ==================== ANIMAL DETAIL PAGE ====================
  // Comment reply forms
  var replyButtons = document.querySelectorAll('[data-toggle-reply]');
  if (replyButtons.length > 0) {
    (0,_js_comment_reply_js__WEBPACK_IMPORTED_MODULE_10__.initializeCommentReply)();
  }

  // ==================== AUTHENTICATION PAGES ====================
  // Auth panel switching (sign up / sign in)
  if (document.getElementById('authWrapper')) {
    (0,_js_auth_js__WEBPACK_IMPORTED_MODULE_7__.initAuth)();
  }

  // ==================== SEARCH PAGE ====================
  // Search form with filters
  if (document.querySelector('.search-form')) {
    (0,_js_searchForm_js__WEBPACK_IMPORTED_MODULE_4__.initSearchForm)();
  }

  // ==================== ASSOCIATION PAGES ====================
  // Join association form
  var associationRadios = document.querySelectorAll('input[name="association_id"]');
  if (associationRadios.length > 0) {
    (0,_js_join_form_js__WEBPACK_IMPORTED_MODULE_11__.initializeJoinForm)();
  }
});

/***/ }),

/***/ "./assets/js/animals-carousel.js":
/*!***************************************!*\
  !*** ./assets/js/animals-carousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAnimalsCarousel: () => (/* binding */ initAnimalsCarousel)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);






/** Le carousel des 10 animaux les plus anciens avec navigation*/

function initAnimalsCarousel() {
  var carousel = document.querySelector('.animals-carousel');
  var cards = document.querySelectorAll('.carousel-card');
  var indicators = document.querySelectorAll('.indicator-dot');
  var prevBtn = document.querySelector('.carousel-prev');
  var nextBtn = document.querySelector('.carousel-next');
  if (!carousel || cards.length === 0) return;
  var currentIndex = 0;
  var isNavigating = false; // Flag to prevent accidental clicks during navigation

  /**
   * Update carousel display based on current index
   * Applies CSS classes to position cards appropriately
   */
  function updateCarousel() {
    cards.forEach(function (card, index) {
      // Reset all position classes
      card.classList.remove('center', 'left', 'right', 'back-left', 'back-right', 'far-back-left', 'far-back-right', 'hidden', 'hidden-right');

      // Calculate relative position
      var relativePos = index - currentIndex;

      // Handle circular wraparound
      if (relativePos > cards.length / 2) {
        relativePos -= cards.length;
      } else if (relativePos < -cards.length / 2) {
        relativePos += cards.length;
      }

      // Assign position classes
      switch (relativePos) {
        case 0:
          card.classList.add('center');
          break;
        case -1:
          card.classList.add('left');
          break;
        case 1:
          card.classList.add('right');
          break;
        case -2:
          card.classList.add('back-left');
          break;
        case 2:
          card.classList.add('back-right');
          break;
        case -3:
          card.classList.add('far-back-left');
          break;
        case 3:
          card.classList.add('far-back-right');
          break;
        default:
          if (relativePos < 0) {
            card.classList.add('hidden');
          } else {
            card.classList.add('hidden-right');
          }
          break;
      }
    });

    // Update indicator dots
    indicators.forEach(function (indicator, index) {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  /**
   * Navigate to a specific slide
   * @param {number} index - The index of the slide to navigate to
   */
  function goToSlide(index) {
    if (index >= 0 && index < cards.length && index !== currentIndex) {
      currentIndex = index;
      updateCarousel();

      // Prevent clicks during animation
      isNavigating = true;
      setTimeout(function () {
        isNavigating = false;
      }, 300);
    }
  }

  // Event listeners for indicator dots
  indicators.forEach(function (indicator, index) {
    indicator.addEventListener('click', function () {
      goToSlide(index);
    });
  });

  // Event listeners for navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      var prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
      goToSlide(prevIndex);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      var nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
      goToSlide(nextIndex);
    });
  }

  // Block links on non-center cards
  cards.forEach(function (card) {
    var links = card.querySelectorAll('a[href]');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        // Prevent navigation on non-center cards
        if (!card.classList.contains('center')) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      });
    });
  });

  // Card click handling
  cards.forEach(function (card, index) {
    card.addEventListener('click', function (e) {
      // Allow view button to work
      var clickedElement = e.target;
      var isViewBtn = clickedElement.closest('.view-btn');
      if (isViewBtn) {
        return;
      }

      // Prevent other interactions
      e.preventDefault();
      e.stopPropagation();

      // Ignore clicks during navigation
      if (isNavigating) {
        return;
      }

      // Navigate to card if not center
      if (!card.classList.contains('center')) {
        goToSlide(index);
      }
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      var prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
      goToSlide(prevIndex);
    } else if (e.key === 'ArrowRight') {
      var nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
      goToSlide(nextIndex);
    }
  });

  // Touch swipe handling for mobile
  var touchStartX = 0;
  var touchEndX = 0;
  carousel.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  carousel.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  /**
   * Handle swipe gestures
   * Left swipe: next animal
   * Right swipe: previous animal
   */
  function handleSwipe() {
    var swipeThreshold = 50; // Minimum distance to register as swipe
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left = next animal
        var nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
        goToSlide(nextIndex);
      } else {
        // Swipe right = previous animal
        var prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
        goToSlide(prevIndex);
      }
    }
  }

  // Initialize carousel
  updateCarousel();
}

/***/ }),

/***/ "./assets/js/animals.js":
/*!******************************!*\
  !*** ./assets/js/animals.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFavorite: () => (/* reexport safe */ _modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__.addFavorite),
/* harmony export */   initializeAnimals: () => (/* binding */ initializeAnimals),
/* harmony export */   initializeTooltips: () => (/* reexport safe */ _modules_tooltips_js__WEBPACK_IMPORTED_MODULE_2__.initializeTooltips),
/* harmony export */   removeFavorite: () => (/* reexport safe */ _modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__.removeFavorite),
/* harmony export */   showNotification: () => (/* reexport safe */ _modules_notifications_js__WEBPACK_IMPORTED_MODULE_1__.showNotification)
/* harmony export */ });
/* harmony import */ var _modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/favorites.js */ "./assets/js/modules/favorites.js");
/* harmony import */ var _modules_notifications_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/notifications.js */ "./assets/js/modules/notifications.js");
/* harmony import */ var _modules_tooltips_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tooltips.js */ "./assets/js/modules/tooltips.js");
/* harmony import */ var _modules_animalCards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animalCards.js */ "./assets/js/modules/animalCards.js");
/**
 * Animals Module
 * Main entry point for animal-related functionality
 */






/**
 * Initialize all animals page functionality
 */
function initializeAnimals() {
  // Initialize favorite buttons
  (0,_modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__.initializeFavoriteButtons)();

  // Initialize animal cards interactions
  (0,_modules_animalCards_js__WEBPACK_IMPORTED_MODULE_3__.initializeAnimalCards)();

  // Initialize see more buttons
  (0,_modules_animalCards_js__WEBPACK_IMPORTED_MODULE_3__.initializeSeeMoreButtons)();

  // Initialize tooltips
  (0,_modules_tooltips_js__WEBPACK_IMPORTED_MODULE_2__.initializeTooltips)();
}

/**
 * Export functions for external use
 */


// Also make available globally for backward compatibility
window.AnimalCards = {
  addFavorite: _modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__.addFavorite,
  removeFavorite: _modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__.removeFavorite,
  showNotification: _modules_notifications_js__WEBPACK_IMPORTED_MODULE_1__.showNotification,
  initializeTooltips: _modules_tooltips_js__WEBPACK_IMPORTED_MODULE_2__.initializeTooltips
};

/***/ }),

/***/ "./assets/js/auth.js":
/*!***************************!*\
  !*** ./assets/js/auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAuth: () => (/* binding */ initAuth)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_file_input_display_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/file-input-display.js */ "./assets/js/utils/file-input-display.js");






/**
 * Authentication Module
 * Handles auth panel switching, animations, and form interactions
 */

// Import shared utilities


/**
 * Initialize authentication UI
 * Sets up sign up/sign in panel switching, animations, and floating label effects
 */
function initAuth() {
  var authWrapper = document.getElementById('authWrapper');

  // If not on auth page, skip initialization
  if (!authWrapper) {
    return;
  }
  var signUpBtn = document.getElementById('sign-up-btn');
  var signInBtn = document.getElementById('sign-in-btn');
  var loginForm = document.getElementById('loginForm');
  var registerForm = document.getElementById('registerForm');

  // Function to switch to sign up mode
  function switchToSignUp() {
    authWrapper.classList.add('sign-up-mode');

    // Animate login panel elements fading out
    var loginAnimations = document.querySelectorAll('.login-panel .animation');
    loginAnimations.forEach(function (el, index) {
      el.style.animation = "fadeOut 0.6s ease-in-out ".concat(index * 0.1, "s forwards");
    });

    // Animate register panel elements fading in
    var registerAnimations = document.querySelectorAll('.register-panel .animation');
    registerAnimations.forEach(function (el, index) {
      setTimeout(function () {
        el.style.animation = "animate2 0.6s ease-in-out ".concat(index * 0.1, "s forwards");
      }, 300);
    });
  }

  // Function to switch to sign in mode
  function switchToSignIn() {
    authWrapper.classList.remove('sign-up-mode');

    // Animate register panel elements fading out
    var registerAnimations = document.querySelectorAll('.register-panel .animation');
    registerAnimations.forEach(function (el, index) {
      el.style.animation = "fadeOut 0.6s ease-in-out ".concat(index * 0.1, "s forwards");
    });

    // Animate login panel elements fading in
    var loginAnimations = document.querySelectorAll('.login-panel .animation');
    loginAnimations.forEach(function (el, index) {
      setTimeout(function () {
        el.style.animation = "animate 0.6s ease-in-out ".concat(index * 0.1, "s forwards");
      }, 300);
    });
  }

  // Attach button click handlers
  if (signUpBtn) {
    signUpBtn.addEventListener('click', switchToSignUp);
  }
  if (signInBtn) {
    signInBtn.addEventListener('click', switchToSignIn);
  }

  // Animation on initial page load
  function initAnimations() {
    var loginAnimations = document.querySelectorAll('.login-panel .animation');
    var infoAnimations = document.querySelectorAll('.info-panel .animation');
    loginAnimations.forEach(function (el, index) {
      setTimeout(function () {
        el.style.animation = "animate 0.6s ease-in-out forwards";
      }, index * 100);
    });
    infoAnimations.forEach(function (el, index) {
      setTimeout(function () {
        el.style.animation = "animate 0.6s ease-in-out forwards";
      }, index * 100 + 200);
    });
  }

  // Initialize animations
  initAnimations();

  // Floating label effect for form inputs
  var inputs = document.querySelectorAll('.input-box input');
  inputs.forEach(function (input) {
    // Check if field has value on load
    if (input.value) {
      input.classList.add('has-value');
    }
    input.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function () {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
        this.classList.remove('has-value');
      } else {
        this.classList.add('has-value');
      }
    });
    input.addEventListener('input', function () {
      if (this.value) {
        this.classList.add('has-value');
      } else {
        this.classList.remove('has-value');
      }
    });
  });

  // Conditional display of association fields
  var associationRadios = document.querySelectorAll('input[name="register_form[association_choice]"]');
  var existingAssociationSelect = document.querySelector('.association-select');
  var newAssociationField = document.querySelector('.new-association-field');
  if (associationRadios.length > 0) {
    associationRadios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        var selectedValue = this.value;

        // Hide all fields by default
        if (existingAssociationSelect) {
          existingAssociationSelect.style.display = 'none';
          existingAssociationSelect.removeAttribute('required');
        }
        if (newAssociationField) {
          newAssociationField.style.display = 'none';
          newAssociationField.removeAttribute('required');
        }

        // Show appropriate field based on selection
        if (selectedValue === 'join' && existingAssociationSelect) {
          existingAssociationSelect.style.display = 'block';
          existingAssociationSelect.setAttribute('required', 'required');
        } else if (selectedValue === 'create' && newAssociationField) {
          newAssociationField.style.display = 'block';
          newAssociationField.setAttribute('required', 'required');
        }
      });
    });
  }

  // Initialize file input display for profile image
  (0,_utils_file_input_display_js__WEBPACK_IMPORTED_MODULE_6__.initializeFileInputDisplay)('#register_imageFile_file', '#file-name-display');
}

/**
 * Inject CSS animations for auth module
 * Should be called once to add fade out animation to document
 */
function injectAuthStyles() {
  var styleId = 'auth-fadeout-styles';

  // Only inject once
  if (document.getElementById(styleId)) {
    return;
  }
  var style = document.createElement('style');
  style.id = styleId;
  style.textContent = "\n        @keyframes fadeOut {\n            0% {\n                opacity: 1;\n                filter: blur(0);\n                transform: translateX(0);\n            }\n            100% {\n                opacity: 0;\n                filter: blur(5px);\n                transform: translateX(-40px);\n            }\n        }\n    ";
  document.head.appendChild(style);
}

// Inject styles when module loads
injectAuthStyles();

/***/ }),

/***/ "./assets/js/carousel.js":
/*!*******************************!*\
  !*** ./assets/js/carousel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCarousel: () => (/* binding */ initCarousel)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);






// Carrousel bannière automatique toutes les 5 secondes
function initCarousel() {
  var slides = document.querySelectorAll('.carousel-slide');
  var currentSlide = 0;
  var autoSlideInterval = null;
  if (slides.length === 0) return;
  function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(function (slide) {
      return slide.classList.remove('active');
    });

    // Add active class to current slide
    slides[index].classList.add('active');
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  function startAutoSlide() {
    // Force stop any existing interval
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
    autoSlideInterval = setInterval(function () {
      nextSlide();
    }, 5000);
  }

  // Initialize first slide and start auto-slide
  showSlide(currentSlide);
  startAutoSlide();
}

/***/ }),

/***/ "./assets/js/comment-reply.js":
/*!************************************!*\
  !*** ./assets/js/comment-reply.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeCommentReply: () => (/* binding */ initializeCommentReply)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);





/*Repondre aux commentaires*/
function initializeCommentReply() {
  var replyToggleButtons = document.querySelectorAll('[data-toggle-reply]');
  replyToggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var commentId = this.dataset.toggleReply;
      var form = document.getElementById('reply-form-' + commentId);
      if (form) {
        // Toggle form visibility
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/contact-modal.js":
/*!************************************!*\
  !*** ./assets/js/contact-modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeContactModal: () => (/* binding */ initializeContactModal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_notifications_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/notifications.js */ "./assets/js/modules/notifications.js");







/* Contact module */

// Import notification function from notifications module

function initializeContactModal() {
  // Initialize contact button event listeners
  var contactButtons = document.querySelectorAll('.contact-btn');
  contactButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var animalId = this.dataset.animalId;
      var associationId = this.dataset.associationId;
      if (animalId) {
        openContactModal("/contact/animal/".concat(animalId));
      } else if (associationId) {
        openContactModal("/contact/association/".concat(associationId));
      } else {
        // General contact form
        openContactModal('/contact');
      }
    });
  });
}
function openContactModal(url) {
  // Créer la modale
  var modal = document.createElement('div');
  modal.className = 'contact-modal-overlay';
  modal.innerHTML = "\n        <div class=\"contact-modal\">\n            <button class=\"contact-modal-close\">&times;</button>\n            <div class=\"contact-modal-body\">\n                <div class=\"loader\">\n                    <i class=\"fas fa-spinner fa-spin\"></i> Chargement...\n                </div>\n            </div>\n        </div>\n    ";
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Charger le formulaire
  fetch(url).then(function (response) {
    return response.text();
  }).then(function (html) {
    var modalBody = modal.querySelector('.contact-modal-body');
    modalBody.innerHTML = html;

    // Initialiser le formulaire
    initializeContactForm(modal);
  })["catch"](function (error) {
    (0,_modules_notifications_js__WEBPACK_IMPORTED_MODULE_7__.showNotification)('Erreur lors du chargement du formulaire', 'error');
    closeContactModal(modal);
  });

  // Événements de fermeture
  var closeBtn = modal.querySelector('.contact-modal-close');
  closeBtn.addEventListener('click', function () {
    return closeContactModal(modal);
  });
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeContactModal(modal);
    }
  });

  // Fermeture avec Escape
  var _escapeHandler = function escapeHandler(e) {
    if (e.key === 'Escape') {
      closeContactModal(modal);
      document.removeEventListener('keydown', _escapeHandler);
    }
  };
  document.addEventListener('keydown', _escapeHandler);
}
function closeContactModal(modal) {
  modal.style.opacity = '0';
  setTimeout(function () {
    modal.remove();
    document.body.style.overflow = '';
  }, 300);
}
function initializeContactForm(modal) {
  var form = modal.querySelector('.contact-form-ajax');
  if (!form) {
    return;
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var submitBtn = form.querySelector('.btn-submit-contact');
    var originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    var formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.success) {
        (0,_modules_notifications_js__WEBPACK_IMPORTED_MODULE_7__.showNotification)(data.message, 'success');
        closeContactModal(modal);
      } else {
        (0,_modules_notifications_js__WEBPACK_IMPORTED_MODULE_7__.showNotification)(data.message, 'error');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    })["catch"](function (error) {
      (0,_modules_notifications_js__WEBPACK_IMPORTED_MODULE_7__.showNotification)('Erreur lors de l\'envoi du message', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    });
  });
}
window.ContactModal = {
  open: openContactModal,
  close: closeContactModal,
  initialize: initializeContactModal
};

/***/ }),

/***/ "./assets/js/join-form.js":
/*!********************************!*\
  !*** ./assets/js/join-form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeJoinForm: () => (/* binding */ initializeJoinForm)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);





/* Formulaire d'adhésion*/
function initializeJoinForm() {
  var associationRadios = document.querySelectorAll('input[name="association_id"]');
  var joinBtn = document.getElementById('joinBtn');

  // Check if required elements exist
  if (associationRadios.length === 0 || !joinBtn) {
    return;
  }

  // Enable button when a radio is selected
  associationRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      joinBtn.disabled = false;
    });
  });
}

/***/ }),

/***/ "./assets/js/mobile-action-menu.js":
/*!*****************************************!*\
  !*** ./assets/js/mobile-action-menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeMobileActionMenu: () => (/* binding */ initializeMobileActionMenu)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);





/* Mobile Action Menu Module */

function initializeMobileActionMenu() {
  var mobileActionToggle = document.getElementById('mobileActionToggle');
  var mobileActionMenu = document.getElementById('mobileActionMenu');

  // Check if mobile action menu exists
  if (!mobileActionToggle || !mobileActionMenu) {
    return;
  }

  /**
   * Toggle mobile action menu open/closed
   */
  function toggleMobileActionMenu() {
    mobileActionToggle.classList.toggle('active');
    mobileActionMenu.classList.toggle('active');
  }

  /**
   * Close mobile action menu
   */
  function closeMobileActionMenu() {
    mobileActionToggle.classList.remove('active');
    mobileActionMenu.classList.remove('active');
  }

  // Toggle menu on button click
  mobileActionToggle.addEventListener('click', toggleMobileActionMenu);

  // Close menu when clicking on a link inside
  var mobileActionLinks = mobileActionMenu.querySelectorAll('.mobile-action-link');
  mobileActionLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileActionMenu);
  });
}

/***/ }),

/***/ "./assets/js/mobile-menu.js":
/*!**********************************!*\
  !*** ./assets/js/mobile-menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeMobileMenu: () => (/* binding */ initializeMobileMenu)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);






/* Mobile Menu Module */

function initializeMobileMenu() {
  var burgerToggle = document.getElementById('burgerToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var closeMenu = document.getElementById('closeMenu');
  var mobileMenuContent = document.querySelector('.mobile-menu-content');
  var mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  var mobileLinks = document.querySelectorAll('.mobile-nav-links a, .mobile-auth-link');

  // Check if required elements exist
  if (!burgerToggle || !mobileMenu) {
    return;
  }
  var actionMenuToggle = document.getElementById('actionMenuToggle');
  var actionMenu = document.getElementById('actionMenu');

  //Toggle mobile menu open/closed

  function toggleMenu() {
    burgerToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  //Close mobile menu
  function closeMenuHandler() {
    burgerToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
    closeActionMenu();
  }

  //Toggle action menu (user dropdown)

  function toggleActionMenu() {
    if (actionMenu) {
      actionMenu.classList.toggle('active');
      actionMenuToggle.classList.toggle('active');
    }
  }

  //Close action menu

  function closeActionMenu() {
    if (actionMenu) {
      actionMenu.classList.remove('active');
      actionMenuToggle.classList.remove('active');
    }
  }

  // Attach event listeners for burger menu
  burgerToggle.addEventListener('click', toggleMenu);
  if (closeMenu) {
    closeMenu.addEventListener('click', closeMenuHandler);
  }
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMenuHandler);
  }

  // Close menu when clicking on a link
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenuHandler);
  });

  // Action menu - hover behavior with delay
  var actionMenuWrapper = document.querySelector('.action-menu-wrapper');
  var closeMenuTimeout;
  if (actionMenuWrapper) {
    actionMenuWrapper.addEventListener('mouseenter', function () {
      clearTimeout(closeMenuTimeout);
      if (actionMenu) {
        actionMenu.classList.add('active');
        actionMenuToggle.classList.add('active');
      }
    });
    actionMenuWrapper.addEventListener('mouseleave', function () {
      closeMenuTimeout = setTimeout(function () {
        closeActionMenu();
      }, 100);
    });

    // Close action menu when clicking on a link inside
    if (actionMenu) {
      actionMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeActionMenu);
      });
    }
  }
}

/***/ }),

/***/ "./assets/js/modules/animalCards.js":
/*!******************************************!*\
  !*** ./assets/js/modules/animalCards.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeAnimalCards: () => (/* binding */ initializeAnimalCards),
/* harmony export */   initializeSeeMoreButtons: () => (/* binding */ initializeSeeMoreButtons)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);





/**
Animal Cards Module
Handles animal card interactions and navigation
 */

function initializeAnimalCards() {
  var animalCards = document.querySelectorAll('.animal-card');
  animalCards.forEach(function (card) {
    // Don't add click navigation for carousel cards - carousel handles their interaction
    if (card.classList.contains('carousel-card')) {
      return;
    }

    // Add click handler for grid cards (excluding buttons)
    card.addEventListener('click', function (e) {
      // Don't trigger if clicking on buttons
      if (e.target.closest('.action-btn') || e.target.closest('.see-more-btn')) {
        return;
      }

      // Get animal ID and redirect to detail page
      var animalId = this.dataset.animalId;
      if (animalId) {
        window.location.href = "/animals/".concat(animalId);
      }
    });

    // Add hover effects
    var image = card.querySelector('.card-image img');
    if (image) {
      card.addEventListener('mouseenter', function () {
        image.style.transform = 'scale(1.05)';
      });
      card.addEventListener('mouseleave', function () {
        image.style.transform = 'scale(1)';
      });
    }
  });
}
function initializeSeeMoreButtons() {
  var seeMoreButtons = document.querySelectorAll('.see-more-btn');
  seeMoreButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var animalId = this.dataset.animalId;

      // Redirect to animal detail page
      window.location.href = "/animals/".concat(animalId);
    });
  });
}

/***/ }),

/***/ "./assets/js/modules/favorites.js":
/*!****************************************!*\
  !*** ./assets/js/modules/favorites.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFavorite: () => (/* binding */ addFavorite),
/* harmony export */   initializeFavoriteButtons: () => (/* binding */ initializeFavoriteButtons),
/* harmony export */   removeFavorite: () => (/* binding */ removeFavorite)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications.js */ "./assets/js/modules/notifications.js");









/*Ajout dans les favoris*/


function addFavorite(animalId) {
  fetch('/api/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({
      animalId: animalId
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success) {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_9__.showNotification)('Ajouté aux favoris !', 'success');
    } else {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_9__.showNotification)(data.message || 'Erreur lors de l\'ajout aux favoris', 'error');
    }
  })["catch"](function (error) {
    (0,_notifications_js__WEBPACK_IMPORTED_MODULE_9__.showNotification)('Vous devez être connecté pour ajouter un animal à vos favoris', 'error');
  });
}

/*Retrait des favoris */
function removeFavorite(animalId) {
  fetch("/api/favorites/".concat(animalId), {
    method: 'DELETE',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success) {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_9__.showNotification)('Retiré des favoris', 'info');
    } else {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_9__.showNotification)(data.message || 'Erreur lors de la suppression', 'error');
    }
  })["catch"](function (error) {
    (0,_notifications_js__WEBPACK_IMPORTED_MODULE_9__.showNotification)('Erreur lors de la suppression', 'error');
  });
}
function initializeFavoriteButtons() {
  var favoriteButtons = document.querySelectorAll('.favorite-btn');
  favoriteButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      var _this = this;
      e.preventDefault();
      e.stopPropagation();
      var animalId = this.dataset.animalId;
      var heartIcon = this.querySelector('i');

      // Toggle favorite state
      if (this.classList.contains('favorited')) {
        this.classList.remove('favorited');
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far');

        // Remove from favorites
        removeFavorite(animalId);
      } else {
        this.classList.add('favorited');
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');

        // Add to favorites
        addFavorite(animalId);
      }

      // Add animation
      this.style.transform = 'scale(1.2)';
      setTimeout(function () {
        _this.style.transform = '';
      }, 200);
    });
  });
}

/***/ }),

/***/ "./assets/js/modules/notifications.js":
/*!********************************************!*\
  !*** ./assets/js/modules/notifications.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showNotification: () => (/* binding */ showNotification)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);






/* Module de notifications */

function showNotification(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
  // Remove existing notifications
  var existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(function (notif) {
    return notif.remove();
  });

  // Create notification element
  var notification = document.createElement('div');
  notification.className = "notification notification-".concat(type);
  notification.textContent = message;

  // Define colors based on type
  var colors = {
    success: '#10B981',
    error: '#EF4444',
    info: '#3B82F6',
    warning: '#F59E0B'
  };

  // Style the notification
  notification.style.cssText = "\n        position: fixed;\n        top: 20px;\n        right: 20px;\n        background: ".concat(colors[type] || colors.info, ";\n        color: white;\n        padding: 12px 20px;\n        border-radius: 8px;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n        z-index: 1000;\n        font-weight: 500;\n        animation: slideInRight 0.3s ease;\n        max-width: 300px;\n        font-size: 14px;\n    ");

  // Add animation styles if not already present
  if (!document.querySelector('#notification-styles')) {
    var style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = "\n            @keyframes slideInRight {\n                from {\n                    transform: translateX(100%);\n                    opacity: 0;\n                }\n                to {\n                    transform: translateX(0);\n                    opacity: 1;\n                }\n            }\n\n            @keyframes slideOutRight {\n                from {\n                    transform: translateX(0);\n                    opacity: 1;\n                }\n                to {\n                    transform: translateX(100%);\n                    opacity: 0;\n                }\n            }\n        ";
    document.head.appendChild(style);
  }

  // Add to page
  document.body.appendChild(notification);

  // Remove after 4 seconds
  setTimeout(function () {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(function () {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

/***/ }),

/***/ "./assets/js/modules/tooltips.js":
/*!***************************************!*\
  !*** ./assets/js/modules/tooltips.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeTooltips: () => (/* binding */ initializeTooltips),
/* harmony export */   showTagModal: () => (/* binding */ showTagModal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);







/*Tooltips Module*/

function initializeTooltips() {
  var tagsWithTooltips = document.querySelectorAll('.tag[data-tooltip], .tag-mini[data-tooltip]');
  tagsWithTooltips.forEach(function (tag) {
    // Add hover events for better tooltip positioning
    tag.addEventListener('mouseenter', function (e) {
      var tooltip = this.getAttribute('data-tooltip');
      if (tooltip) {
        // Position tooltip to avoid viewport overflow
        var rect = this.getBoundingClientRect();
        var tooltipElement = this;

        // Adjust tooltip position if near viewport edges
        setTimeout(function () {
          var pseudoElement = window.getComputedStyle(tooltipElement, '::before');
          if (rect.left < 150) {
            tooltipElement.style.setProperty('--tooltip-align', 'left');
          } else if (rect.right > window.innerWidth - 150) {
            tooltipElement.style.setProperty('--tooltip-align', 'right');
          }
        }, 10);
      }
    });
    tag.addEventListener('mouseleave', function () {
      // Reset tooltip position
      this.style.removeProperty('--tooltip-align');
    });

    // Add click event for mobile devices
    tag.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        var tooltip = this.getAttribute('data-tooltip');
        var tagName = this.getAttribute('data-tag-name');
        if (tooltip) {
          showTagModal(tagName, tooltip);
        }
      }
    });
  });
}
function showTagModal(tagName, description) {
  // Remove existing modal if any
  var existingModal = document.querySelector('.tag-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal
  var modal = document.createElement('div');
  modal.className = 'tag-modal';
  modal.innerHTML = "\n        <div class=\"tag-modal-content\">\n            <div class=\"tag-modal-header\">\n                <h3>".concat(tagName, "</h3>\n                <button class=\"tag-modal-close\">&times;</button>\n            </div>\n            <div class=\"tag-modal-body\">\n                <p>").concat(description, "</p>\n            </div>\n        </div>\n        <div class=\"tag-modal-backdrop\"></div>\n    ");

  // Add to page
  document.body.appendChild(modal);

  // Close modal events
  var closeBtn = modal.querySelector('.tag-modal-close');
  var backdrop = modal.querySelector('.tag-modal-backdrop');
  var closeModal = function closeModal() {
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(function () {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    }, 300);
  };
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Close on escape key
  var _escapeHandler = function escapeHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', _escapeHandler);
    }
  };
  document.addEventListener('keydown', _escapeHandler);
}

/***/ }),

/***/ "./assets/js/news-carousel.js":
/*!************************************!*\
  !*** ./assets/js/news-carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeNewsCarousel: () => (/* binding */ initializeNewsCarousel)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);






/**
News Carousel Module
Scroll infini des nouvelles
 */

function initializeNewsCarousel() {
  var carousels = document.querySelectorAll('.news-carousel');
  carousels.forEach(function (carousel) {
    var track = carousel.querySelector('.news-track');
    if (!track) return;
    var cards = track.querySelectorAll('.news-card');
    if (cards.length === 0) return;

    // Calculate total width of one set of cards
    var trackWidth = 0;
    cards.forEach(function (card) {
      trackWidth += card.offsetWidth + parseFloat(getComputedStyle(track).gap || 0);
    });

    // Half the track width (since cards are duplicated)
    var halfWidth = trackWidth / 2;

    // Determine direction
    var isRight = carousel.classList.contains('news-carousel-right');
    var position = isRight ? 0 : -halfWidth;

    // Animation speed (pixels per second)
    var speed = halfWidth / 35; // 35 seconds for full cycle

    var animationFrameId;
    var lastTimestamp;
    var isPaused = false;

    /**
     * Animation loop using requestAnimationFrame
     * @param {number} timestamp - High resolution timestamp from RAF
     */
    function animate(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      var delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      if (!isPaused) {
        if (isRight) {
          // Move left
          position -= speed * delta / 1000;

          // Reset when halfway through
          if (position <= -halfWidth) {
            position = 0;
          }
        } else {
          // Move right
          position += speed * delta / 1000;

          // Reset when at start
          if (position >= 0) {
            position = -halfWidth;
          }
        }
        track.style.transform = "translate3d(".concat(position, "px, 0, 0)");
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Pause on hover
    carousel.addEventListener('mouseenter', function () {
      isPaused = true;
    });
    carousel.addEventListener('mouseleave', function () {
      isPaused = false;
      lastTimestamp = null; // Reset timestamp to avoid jump
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', function () {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/searchForm.js":
/*!*********************************!*\
  !*** ./assets/js/searchForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSearchForm: () => (/* binding */ initSearchForm)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_10__);











// Search form functionality
function initSearchForm() {
  var searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var species = document.getElementById('type-select').value;
      var sexe = document.getElementById('sexe-select').value;
      var department = document.getElementById('department-select').value;

      // Build query parameters
      var params = new URLSearchParams();
      if (species) params.set('species', species);
      if (sexe) params.set('sexe', sexe);
      if (department) params.set('department', department);

      // Redirect to animals page with filters
      var queryString = params.toString();
      var url = queryString ? "/animals?".concat(queryString) : '/animals';
      window.location.href = url;
    });
  }
}

/***/ }),

/***/ "./assets/js/utils/file-input-display.js":
/*!***********************************************!*\
  !*** ./assets/js/utils/file-input-display.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeAllFileInputDisplays: () => (/* binding */ initializeAllFileInputDisplays),
/* harmony export */   initializeFileInputDisplay: () => (/* binding */ initializeFileInputDisplay)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);






//Affiche le nom du fichier sélectionné dans un input de type file

/**
 * Initialize file input display for a specific file input and display element
 * @param {string} inputSelector - CSS selector for the file input element
 * @param {string} displaySelector - CSS selector for the element to display the filename in
 * @param {string} defaultText - Default text to show when no file is selected (default: "Aucun fichier")
 */
function initializeFileInputDisplay(inputSelector, displaySelector) {
  var defaultText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Aucun fichier';
  var fileInput = document.querySelector(inputSelector);
  var fileNameDisplay = document.querySelector(displaySelector);
  if (!fileInput || !fileNameDisplay) {
    return;
  }

  // Set initial display text
  fileNameDisplay.textContent = defaultText;

  // Update display on file selection change
  fileInput.addEventListener('change', function () {
    if (this.files && this.files.length > 0) {
      fileNameDisplay.textContent = this.files[0].name;
    } else {
      fileNameDisplay.textContent = defaultText;
    }
  });
}

/**
 * Initialize all file input displays on the page
 * Looks for elements with data-file-input-display attribute
 *
 * Usage in HTML:
 * <input type="file" id="register_imageFile_file" data-file-input-display="file-name-display">
 * <span id="file-name-display">Aucun fichier</span>
 */
function initializeAllFileInputDisplays() {
  var fileInputs = document.querySelectorAll('[data-file-input-display]');
  fileInputs.forEach(function (fileInput) {
    var displayElementId = fileInput.getAttribute('data-file-input-display');
    var displayElement = document.getElementById(displayElementId);
    if (displayElement) {
      var defaultText = displayElement.textContent || 'Aucun fichier';
      initializeFileInputDisplay("#".concat(fileInput.id), "#".concat(displayElementId), defaultText);
    }
  });
}

/***/ }),

/***/ "./assets/js/utils/modal-utils.js":
/*!****************************************!*\
  !*** ./assets/js/utils/modal-utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fermerModale: () => (/* binding */ fermerModale),
/* harmony export */   initializeModalUtils: () => (/* binding */ initializeModalUtils)
/* harmony export */ });
//Les fonctions utilitaires pour les modales
function fermerModale() {
  var modale = document.getElementById('modale-flash');
  if (modale) {
    modale.style.display = 'none';
  }
}
function initializeModalUtils() {
  window.fermerModale = fermerModale;
}

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ab823f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9hbmltYWxzLWNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hbmltYWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hdXRoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tbWVudC1yZXBseS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29udGFjdC1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvam9pbi1mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2JpbGUtYWN0aW9uLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vYmlsZS1tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2FuaW1hbENhcmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2Zhdm9yaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL3Rvb2x0aXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9uZXdzLWNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZWFyY2hGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9maWxlLWlucHV0LWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL21vZGFsLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBNYWluIEFwcGxpY2F0aW9uIEZpbGVcclxuICogQ2VudHJhbCBpbml0aWFsaXphdGlvbiBwb2ludCBmb3IgYWxsIEphdmFTY3JpcHQgbW9kdWxlc1xyXG4gKiBFYWNoIG1vZHVsZSBpcyBpbXBvcnRlZCBhbmQgaW5pdGlhbGl6ZWQgd2hlbiBpdHMgY29ycmVzcG9uZGluZyBET00gZWxlbWVudHMgZXhpc3RcclxuICovXHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIEltcG9ydCBob21lcGFnZSBjYXJvdXNlbHNcclxuaW1wb3J0IHsgaW5pdENhcm91c2VsIH0gZnJvbSAnLi9qcy9jYXJvdXNlbC5qcyc7XHJcbmltcG9ydCB7IGluaXRBbmltYWxzQ2Fyb3VzZWwgfSBmcm9tICcuL2pzL2FuaW1hbHMtY2Fyb3VzZWwuanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplTmV3c0Nhcm91c2VsIH0gZnJvbSAnLi9qcy9uZXdzLWNhcm91c2VsLmpzJztcclxuXHJcbi8vIEltcG9ydCBzZWFyY2ggYW5kIGZvcm0gZnVuY3Rpb25hbGl0eVxyXG5pbXBvcnQgeyBpbml0U2VhcmNoRm9ybSB9IGZyb20gJy4vanMvc2VhcmNoRm9ybS5qcyc7XHJcblxyXG4vLyBJbXBvcnQgYW5pbWFscyBwYWdlIG1vZHVsZXNcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFuaW1hbHMgfSBmcm9tICcuL2pzL2FuaW1hbHMuanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQ29udGFjdE1vZGFsIH0gZnJvbSAnLi9qcy9jb250YWN0LW1vZGFsLmpzJztcclxuXHJcbi8vIEltcG9ydCBhdXRoZW50aWNhdGlvbiBtb2R1bGVcclxuaW1wb3J0IHsgaW5pdEF1dGggfSBmcm9tICcuL2pzL2F1dGguanMnO1xyXG5cclxuLy8gSW1wb3J0IHV0aWxpdHkgbW9kdWxlc1xyXG5pbXBvcnQgeyBpbml0aWFsaXplTW9iaWxlTWVudSB9IGZyb20gJy4vanMvbW9iaWxlLW1lbnUuanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplTW9iaWxlQWN0aW9uTWVudSB9IGZyb20gJy4vanMvbW9iaWxlLWFjdGlvbi1tZW51LmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbW1lbnRSZXBseSB9IGZyb20gJy4vanMvY29tbWVudC1yZXBseS5qcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVKb2luRm9ybSB9IGZyb20gJy4vanMvam9pbi1mb3JtLmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZU1vZGFsVXRpbHMgfSBmcm9tICcuL2pzL3V0aWxzL21vZGFsLXV0aWxzLmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFsbEZpbGVJbnB1dERpc3BsYXlzIH0gZnJvbSAnLi9qcy91dGlscy9maWxlLWlucHV0LWRpc3BsYXkuanMnO1xyXG5cclxuLyoqXHJcbiAqIENlbnRyYWwgYXBwbGljYXRpb24gaW5pdGlhbGl6YXRpb25cclxuICogQ2FsbGVkIHdoZW4gRE9NIGlzIGZ1bGx5IGxvYWRlZFxyXG4gKiBFYWNoIGZlYXR1cmUgaXMgY29uZGl0aW9uYWxseSBpbml0aWFsaXplZCBiYXNlZCBvbiBET00gZWxlbWVudCBwcmVzZW5jZVxyXG4gKi9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gR0xPQkFMIFVUSUxJVElFUyA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gSW5pdGlhbGl6ZSB1dGlsaXRpZXMgdGhhdCBtYXkgYmUgdXNlZCBhY3Jvc3MgbXVsdGlwbGUgcGFnZXNcclxuICAgIGluaXRpYWxpemVNb2RhbFV0aWxzKCk7XHJcbiAgICBpbml0aWFsaXplQWxsRmlsZUlucHV0RGlzcGxheXMoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBMQVlPVVQgJiBOQVZJR0FUSU9OID09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBNb2JpbGUgbWVudSAodXNlZCBvbiBhbGwgcGFnZXMpXHJcbiAgICBpbml0aWFsaXplTW9iaWxlTWVudSgpO1xyXG4gICAgaW5pdGlhbGl6ZU1vYmlsZUFjdGlvbk1lbnUoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBIT01FUEFHRSBGRUFUVVJFUyA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gSGVybyBjYXJvdXNlbCAtIGF1dG8tcm90YXRpbmcgc2xpZGVzaG93XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tY2Fyb3VzZWwnKSkge1xyXG4gICAgICAgIGluaXRDYXJvdXNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuaW1hbHMgY2Fyb3VzZWwgLSAxMCBvbGRlc3QgYW5pbWFscyB3aXRoIG5hdmlnYXRpb25cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWFscy1jYXJvdXNlbCcpKSB7XHJcbiAgICAgICAgaW5pdEFuaW1hbHNDYXJvdXNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5ld3MgY2Fyb3VzZWwgLSBpbmZpbml0ZSBzY3JvbGwgbmV3cyBzZWN0aW9uXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MtY2Fyb3VzZWwnKSkge1xyXG4gICAgICAgIGluaXRpYWxpemVOZXdzQ2Fyb3VzZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTY3JvbGwgaW5kaWNhdG9yIC0gY2xpY2thYmxlIHBhdyB0byBzY3JvbGwgdG8gYW5pbWFscyBzZWN0aW9uXHJcbiAgICBjb25zdCBzY3JvbGxJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWluZGljYXRvcicpO1xyXG4gICAgaWYgKHNjcm9sbEluZGljYXRvcikge1xyXG4gICAgICAgIHNjcm9sbEluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9sZGVzdC1hbmltYWxzLXNlY3Rpb24nKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldFNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzY3JvbGxJbmRpY2F0b3Iuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IEFOSU1BTFMgUEFHRSAmIEhPTUVQQUdFID09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBBbmltYWwgY2FyZHMgZ3JpZCB3aXRoIGZhdm9yaXRlcywgc2hhcmluZywgZXRjLlxyXG4gICAgLy8gV29ya3Mgb24gYm90aCAvYW5pbWFscyBwYWdlIChhbmltYWxzLWdyaWQpIGFuZCBob21lcGFnZSAoYW5pbWFscy1jYXJvdXNlbClcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWFscy1ncmlkJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuaW1hbHMtY2Fyb3VzZWwnKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtYnRuJykpIHtcclxuICAgICAgICBpbml0aWFsaXplQW5pbWFscygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnRhY3QgbW9kYWwgKGZvciBhbmltYWwvYXNzb2NpYXRpb24gY29udGFjdClcclxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QtYnRuJyk7XHJcbiAgICBpZiAoY29udGFjdEJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGluaXRpYWxpemVDb250YWN0TW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBBTklNQUwgREVUQUlMIFBBR0UgPT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENvbW1lbnQgcmVwbHkgZm9ybXNcclxuICAgIGNvbnN0IHJlcGx5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS1yZXBseV0nKTtcclxuICAgIGlmIChyZXBseUJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGluaXRpYWxpemVDb21tZW50UmVwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBBVVRIRU5USUNBVElPTiBQQUdFUyA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQXV0aCBwYW5lbCBzd2l0Y2hpbmcgKHNpZ24gdXAgLyBzaWduIGluKVxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRoV3JhcHBlcicpKSB7XHJcbiAgICAgICAgaW5pdEF1dGgoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBTRUFSQ0ggUEFHRSA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU2VhcmNoIGZvcm0gd2l0aCBmaWx0ZXJzXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJykpIHtcclxuICAgICAgICBpbml0U2VhcmNoRm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IEFTU09DSUFUSU9OIFBBR0VTID09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBKb2luIGFzc29jaWF0aW9uIGZvcm1cclxuICAgIGNvbnN0IGFzc29jaWF0aW9uUmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImFzc29jaWF0aW9uX2lkXCJdJyk7XHJcbiAgICBpZiAoYXNzb2NpYXRpb25SYWRpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGluaXRpYWxpemVKb2luRm9ybSgpO1xyXG4gICAgfVxyXG59KTsiLCIvKiogTGUgY2Fyb3VzZWwgZGVzIDEwIGFuaW1hdXggbGVzIHBsdXMgYW5jaWVucyBhdmVjIG5hdmlnYXRpb24qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbmltYWxzQ2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYWxzLWNhcm91c2VsJyk7XHJcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1jYXJkJyk7XHJcbiAgICBjb25zdCBpbmRpY2F0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZGljYXRvci1kb3QnKTtcclxuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtcHJldicpO1xyXG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1uZXh0Jyk7XHJcblxyXG4gICAgaWYgKCFjYXJvdXNlbCB8fCBjYXJkcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcclxuICAgIGxldCBpc05hdmlnYXRpbmcgPSBmYWxzZTsgLy8gRmxhZyB0byBwcmV2ZW50IGFjY2lkZW50YWwgY2xpY2tzIGR1cmluZyBuYXZpZ2F0aW9uXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgY2Fyb3VzZWwgZGlzcGxheSBiYXNlZCBvbiBjdXJyZW50IGluZGV4XHJcbiAgICAgKiBBcHBsaWVzIENTUyBjbGFzc2VzIHRvIHBvc2l0aW9uIGNhcmRzIGFwcHJvcHJpYXRlbHlcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgLy8gUmVzZXQgYWxsIHBvc2l0aW9uIGNsYXNzZXNcclxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjZW50ZXInLCAnbGVmdCcsICdyaWdodCcsICdiYWNrLWxlZnQnLCAnYmFjay1yaWdodCcsICdmYXItYmFjay1sZWZ0JywgJ2Zhci1iYWNrLXJpZ2h0JywgJ2hpZGRlbicsICdoaWRkZW4tcmlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgcmVsYXRpdmVQb3MgPSBpbmRleCAtIGN1cnJlbnRJbmRleDtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBjaXJjdWxhciB3cmFwYXJvdW5kXHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVBvcyA+IGNhcmRzLmxlbmd0aCAvIDIpIHtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlUG9zIC09IGNhcmRzLmxlbmd0aDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGl2ZVBvcyA8IC1jYXJkcy5sZW5ndGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVBvcyArPSBjYXJkcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiBwb3NpdGlvbiBjbGFzc2VzXHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVsYXRpdmVQb3MpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIC0yOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnYmFjay1sZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdiYWNrLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIC0zOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZmFyLWJhY2stbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZmFyLWJhY2stcmlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlUG9zIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3IgZG90c1xyXG4gICAgICAgIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYXZpZ2F0ZSB0byBhIHNwZWNpZmljIHNsaWRlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHNsaWRlIHRvIG5hdmlnYXRlIHRvXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdvVG9TbGlkZShpbmRleCkge1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgY2FyZHMubGVuZ3RoICYmIGluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNhcm91c2VsKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmV2ZW50IGNsaWNrcyBkdXJpbmcgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIGlzTmF2aWdhdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXNOYXZpZ2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgaW5kaWNhdG9yIGRvdHNcclxuICAgIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZ29Ub1NsaWRlKGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgbmF2aWdhdGlvbiBidXR0b25zXHJcbiAgICBpZiAocHJldkJ0bikge1xyXG4gICAgICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gMCA/IGNhcmRzLmxlbmd0aCAtIDEgOiBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBnb1RvU2xpZGUocHJldkluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV4dEJ0bikge1xyXG4gICAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gY2FyZHMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBnb1RvU2xpZGUobmV4dEluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCbG9jayBsaW5rcyBvbiBub24tY2VudGVyIGNhcmRzXHJcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBjYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl0nKTtcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgbmF2aWdhdGlvbiBvbiBub24tY2VudGVyIGNhcmRzXHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZW50ZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYXJkIGNsaWNrIGhhbmRsaW5nXHJcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBBbGxvdyB2aWV3IGJ1dHRvbiB0byB3b3JrXHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmlld0J0biA9IGNsaWNrZWRFbGVtZW50LmNsb3Nlc3QoJy52aWV3LWJ0bicpO1xyXG4gICAgICAgICAgICBpZiAoaXNWaWV3QnRuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFByZXZlbnQgb3RoZXIgaW50ZXJhY3Rpb25zXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElnbm9yZSBjbGlja3MgZHVyaW5nIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKGlzTmF2aWdhdGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBOYXZpZ2F0ZSB0byBjYXJkIGlmIG5vdCBjZW50ZXJcclxuICAgICAgICAgICAgaWYgKCFjYXJkLmNsYXNzTGlzdC5jb250YWlucygnY2VudGVyJykpIHtcclxuICAgICAgICAgICAgICAgIGdvVG9TbGlkZShpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJldkluZGV4ID0gY3VycmVudEluZGV4ID09PSAwID8gY2FyZHMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIGdvVG9TbGlkZShwcmV2SW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggPT09IGNhcmRzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgZ29Ub1NsaWRlKG5leHRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVG91Y2ggc3dpcGUgaGFuZGxpbmcgZm9yIG1vYmlsZVxyXG4gICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcclxuICAgIGxldCB0b3VjaEVuZFggPSAwO1xyXG5cclxuICAgIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHRvdWNoU3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcclxuICAgICAgICB0b3VjaEVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XHJcbiAgICAgICAgaGFuZGxlU3dpcGUoKTtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBzd2lwZSBnZXN0dXJlc1xyXG4gICAgICogTGVmdCBzd2lwZTogbmV4dCBhbmltYWxcclxuICAgICAqIFJpZ2h0IHN3aXBlOiBwcmV2aW91cyBhbmltYWxcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3dpcGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc3dpcGVUaHJlc2hvbGQgPSA1MDsgLy8gTWluaW11bSBkaXN0YW5jZSB0byByZWdpc3RlciBhcyBzd2lwZVxyXG4gICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWDtcclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gc3dpcGVUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTd2lwZSBsZWZ0ID0gbmV4dCBhbmltYWxcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gY2FyZHMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgZ29Ub1NsaWRlKG5leHRJbmRleCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTd2lwZSByaWdodCA9IHByZXZpb3VzIGFuaW1hbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkluZGV4ID0gY3VycmVudEluZGV4ID09PSAwID8gY2FyZHMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICBnb1RvU2xpZGUocHJldkluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXplIGNhcm91c2VsXHJcbiAgICB1cGRhdGVDYXJvdXNlbCgpO1xyXG59IiwiLyoqXHJcbiAqIEFuaW1hbHMgTW9kdWxlXHJcbiAqIE1haW4gZW50cnkgcG9pbnQgZm9yIGFuaW1hbC1yZWxhdGVkIGZ1bmN0aW9uYWxpdHlcclxuICovXHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplRmF2b3JpdGVCdXR0b25zLCBhZGRGYXZvcml0ZSwgcmVtb3ZlRmF2b3JpdGUgfSBmcm9tICcuL21vZHVsZXMvZmF2b3JpdGVzLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9ub3RpZmljYXRpb25zLmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZVRvb2x0aXBzIH0gZnJvbSAnLi9tb2R1bGVzL3Rvb2x0aXBzLmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFuaW1hbENhcmRzLCBpbml0aWFsaXplU2VlTW9yZUJ1dHRvbnMgfSBmcm9tICcuL21vZHVsZXMvYW5pbWFsQ2FyZHMuanMnO1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYWxsIGFuaW1hbHMgcGFnZSBmdW5jdGlvbmFsaXR5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFuaW1hbHMoKSB7XHJcbiAgICAvLyBJbml0aWFsaXplIGZhdm9yaXRlIGJ1dHRvbnNcclxuICAgIGluaXRpYWxpemVGYXZvcml0ZUJ1dHRvbnMoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIGFuaW1hbCBjYXJkcyBpbnRlcmFjdGlvbnNcclxuICAgIGluaXRpYWxpemVBbmltYWxDYXJkcygpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgc2VlIG1vcmUgYnV0dG9uc1xyXG4gICAgaW5pdGlhbGl6ZVNlZU1vcmVCdXR0b25zKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0b29sdGlwc1xyXG4gICAgaW5pdGlhbGl6ZVRvb2x0aXBzKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHBvcnQgZnVuY3Rpb25zIGZvciBleHRlcm5hbCB1c2VcclxuICovXHJcbmV4cG9ydCB7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uLFxyXG4gICAgYWRkRmF2b3JpdGUsXHJcbiAgICByZW1vdmVGYXZvcml0ZSxcclxuICAgIGluaXRpYWxpemVUb29sdGlwc1xyXG59O1xyXG5cclxuLy8gQWxzbyBtYWtlIGF2YWlsYWJsZSBnbG9iYWxseSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG53aW5kb3cuQW5pbWFsQ2FyZHMgPSB7XHJcbiAgICBhZGRGYXZvcml0ZSxcclxuICAgIHJlbW92ZUZhdm9yaXRlLFxyXG4gICAgc2hvd05vdGlmaWNhdGlvbixcclxuICAgIGluaXRpYWxpemVUb29sdGlwc1xyXG59O1xyXG4iLCIvKipcclxuICogQXV0aGVudGljYXRpb24gTW9kdWxlXHJcbiAqIEhhbmRsZXMgYXV0aCBwYW5lbCBzd2l0Y2hpbmcsIGFuaW1hdGlvbnMsIGFuZCBmb3JtIGludGVyYWN0aW9uc1xyXG4gKi9cclxuXHJcbi8vIEltcG9ydCBzaGFyZWQgdXRpbGl0aWVzXHJcbmltcG9ydCB7IGluaXRpYWxpemVGaWxlSW5wdXREaXNwbGF5IH0gZnJvbSAnLi91dGlscy9maWxlLWlucHV0LWRpc3BsYXkuanMnO1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYXV0aGVudGljYXRpb24gVUlcclxuICogU2V0cyB1cCBzaWduIHVwL3NpZ24gaW4gcGFuZWwgc3dpdGNoaW5nLCBhbmltYXRpb25zLCBhbmQgZmxvYXRpbmcgbGFiZWwgZWZmZWN0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBdXRoKCkge1xyXG4gICAgY29uc3QgYXV0aFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aFdyYXBwZXInKTtcclxuXHJcbiAgICAvLyBJZiBub3Qgb24gYXV0aCBwYWdlLCBza2lwIGluaXRpYWxpemF0aW9uXHJcbiAgICBpZiAoIWF1dGhXcmFwcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZ25VcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xyXG4gICAgY29uc3Qgc2lnbkluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tYnRuJyk7XHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5Gb3JtJyk7XHJcbiAgICBjb25zdCByZWdpc3RlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJGb3JtJyk7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gc3dpdGNoIHRvIHNpZ24gdXAgbW9kZVxyXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9TaWduVXAoKSB7XHJcbiAgICAgICAgYXV0aFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2lnbi11cC1tb2RlJyk7XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGUgbG9naW4gcGFuZWwgZWxlbWVudHMgZmFkaW5nIG91dFxyXG4gICAgICAgIGNvbnN0IGxvZ2luQW5pbWF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2dpbi1wYW5lbCAuYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgbG9naW5BbmltYXRpb25zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5hbmltYXRpb24gPSBgZmFkZU91dCAwLjZzIGVhc2UtaW4tb3V0ICR7aW5kZXggKiAwLjF9cyBmb3J3YXJkc2A7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGUgcmVnaXN0ZXIgcGFuZWwgZWxlbWVudHMgZmFkaW5nIGluXHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJBbmltYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLXBhbmVsIC5hbmltYXRpb24nKTtcclxuICAgICAgICByZWdpc3RlckFuaW1hdGlvbnMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uID0gYGFuaW1hdGUyIDAuNnMgZWFzZS1pbi1vdXQgJHtpbmRleCAqIDAuMX1zIGZvcndhcmRzYDtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBzd2l0Y2ggdG8gc2lnbiBpbiBtb2RlXHJcbiAgICBmdW5jdGlvbiBzd2l0Y2hUb1NpZ25JbigpIHtcclxuICAgICAgICBhdXRoV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzaWduLXVwLW1vZGUnKTtcclxuXHJcbiAgICAgICAgLy8gQW5pbWF0ZSByZWdpc3RlciBwYW5lbCBlbGVtZW50cyBmYWRpbmcgb3V0XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJBbmltYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLXBhbmVsIC5hbmltYXRpb24nKTtcclxuICAgICAgICByZWdpc3RlckFuaW1hdGlvbnMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9IGBmYWRlT3V0IDAuNnMgZWFzZS1pbi1vdXQgJHtpbmRleCAqIDAuMX1zIGZvcndhcmRzYDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQW5pbWF0ZSBsb2dpbiBwYW5lbCBlbGVtZW50cyBmYWRpbmcgaW5cclxuICAgICAgICBjb25zdCBsb2dpbkFuaW1hdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubG9naW4tcGFuZWwgLmFuaW1hdGlvbicpO1xyXG4gICAgICAgIGxvZ2luQW5pbWF0aW9ucy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5hbmltYXRpb24gPSBgYW5pbWF0ZSAwLjZzIGVhc2UtaW4tb3V0ICR7aW5kZXggKiAwLjF9cyBmb3J3YXJkc2A7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0YWNoIGJ1dHRvbiBjbGljayBoYW5kbGVyc1xyXG4gICAgaWYgKHNpZ25VcEJ0bikge1xyXG4gICAgICAgIHNpZ25VcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvU2lnblVwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2lnbkluQnRuKSB7XHJcbiAgICAgICAgc2lnbkluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVG9TaWduSW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuaW1hdGlvbiBvbiBpbml0aWFsIHBhZ2UgbG9hZFxyXG4gICAgZnVuY3Rpb24gaW5pdEFuaW1hdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgbG9naW5BbmltYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxvZ2luLXBhbmVsIC5hbmltYXRpb24nKTtcclxuICAgICAgICBjb25zdCBpbmZvQW5pbWF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvLXBhbmVsIC5hbmltYXRpb24nKTtcclxuXHJcbiAgICAgICAgbG9naW5BbmltYXRpb25zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9IGBhbmltYXRlIDAuNnMgZWFzZS1pbi1vdXQgZm9yd2FyZHNgO1xyXG4gICAgICAgICAgICB9LCBpbmRleCAqIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGluZm9BbmltYXRpb25zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9IGBhbmltYXRlIDAuNnMgZWFzZS1pbi1vdXQgZm9yd2FyZHNgO1xyXG4gICAgICAgICAgICB9LCBpbmRleCAqIDEwMCArIDIwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBhbmltYXRpb25zXHJcbiAgICBpbml0QW5pbWF0aW9ucygpO1xyXG5cclxuICAgIC8vIEZsb2F0aW5nIGxhYmVsIGVmZmVjdCBmb3IgZm9ybSBpbnB1dHNcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ib3ggaW5wdXQnKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiBmaWVsZCBoYXMgdmFsdWUgb24gbG9hZFxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdoYXMtdmFsdWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdmFsdWUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy12YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDb25kaXRpb25hbCBkaXNwbGF5IG9mIGFzc29jaWF0aW9uIGZpZWxkc1xyXG4gICAgY29uc3QgYXNzb2NpYXRpb25SYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicmVnaXN0ZXJfZm9ybVthc3NvY2lhdGlvbl9jaG9pY2VdXCJdJyk7XHJcbiAgICBjb25zdCBleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzc29jaWF0aW9uLXNlbGVjdCcpO1xyXG4gICAgY29uc3QgbmV3QXNzb2NpYXRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctYXNzb2NpYXRpb24tZmllbGQnKTtcclxuXHJcbiAgICBpZiAoYXNzb2NpYXRpb25SYWRpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGFzc29jaWF0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYWxsIGZpZWxkcyBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdBc3NvY2lhdGlvblNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuZXdBc3NvY2lhdGlvbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXNzb2NpYXRpb25GaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0Fzc29jaWF0aW9uRmllbGQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNob3cgYXBwcm9wcmlhdGUgZmllbGQgYmFzZWQgb24gc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ2pvaW4nICYmIGV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3Quc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFZhbHVlID09PSAnY3JlYXRlJyAmJiBuZXdBc3NvY2lhdGlvbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXNzb2NpYXRpb25GaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBuZXdBc3NvY2lhdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBmaWxlIGlucHV0IGRpc3BsYXkgZm9yIHByb2ZpbGUgaW1hZ2VcclxuICAgIGluaXRpYWxpemVGaWxlSW5wdXREaXNwbGF5KCcjcmVnaXN0ZXJfaW1hZ2VGaWxlX2ZpbGUnLCAnI2ZpbGUtbmFtZS1kaXNwbGF5Jyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmplY3QgQ1NTIGFuaW1hdGlvbnMgZm9yIGF1dGggbW9kdWxlXHJcbiAqIFNob3VsZCBiZSBjYWxsZWQgb25jZSB0byBhZGQgZmFkZSBvdXQgYW5pbWF0aW9uIHRvIGRvY3VtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBpbmplY3RBdXRoU3R5bGVzKCkge1xyXG4gICAgY29uc3Qgc3R5bGVJZCA9ICdhdXRoLWZhZGVvdXQtc3R5bGVzJztcclxuXHJcbiAgICAvLyBPbmx5IGluamVjdCBvbmNlXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgc3R5bGUuaWQgPSBzdHlsZUlkO1xyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXHJcbiAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBgO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxuXHJcbi8vIEluamVjdCBzdHlsZXMgd2hlbiBtb2R1bGUgbG9hZHNcclxuaW5qZWN0QXV0aFN0eWxlcygpOyIsIi8vIENhcnJvdXNlbCBiYW5uacOocmUgYXV0b21hdGlxdWUgdG91dGVzIGxlcyA1IHNlY29uZGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtc2xpZGUnKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGxldCBhdXRvU2xpZGVJbnRlcnZhbCA9IG51bGw7XHJcblxyXG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2xpZGUoaW5kZXgpIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHNsaWRlc1xyXG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IHNsaWRlXHJcbiAgICAgICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gKGN1cnJlbnRTbGlkZSArIDEpICUgc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICBzaG93U2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydEF1dG9TbGlkZSgpIHtcclxuICAgICAgICAvLyBGb3JjZSBzdG9wIGFueSBleGlzdGluZyBpbnRlcnZhbFxyXG4gICAgICAgIGlmIChhdXRvU2xpZGVJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGF1dG9TbGlkZUludGVydmFsKTtcclxuICAgICAgICAgICAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgZmlyc3Qgc2xpZGUgYW5kIHN0YXJ0IGF1dG8tc2xpZGVcclxuICAgIHNob3dTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgc3RhcnRBdXRvU2xpZGUoKTtcclxufSIsIi8qUmVwb25kcmUgYXV4IGNvbW1lbnRhaXJlcyovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQ29tbWVudFJlcGx5KCkge1xyXG4gICAgY29uc3QgcmVwbHlUb2dnbGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlLXJlcGx5XScpO1xyXG5cclxuICAgIHJlcGx5VG9nZ2xlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRJZCA9IHRoaXMuZGF0YXNldC50b2dnbGVSZXBseTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBseS1mb3JtLScgKyBjb21tZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0pIHtcclxuICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBmb3JtIHZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IGZvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyogQ29udGFjdCBtb2R1bGUgKi9cclxuXHJcbi8vIEltcG9ydCBub3RpZmljYXRpb24gZnVuY3Rpb24gZnJvbSBub3RpZmljYXRpb25zIG1vZHVsZVxyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb250YWN0TW9kYWwoKSB7XHJcbiAgICAvLyBJbml0aWFsaXplIGNvbnRhY3QgYnV0dG9uIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdC1idG4nKTtcclxuXHJcbiAgICBjb250YWN0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbmltYWxJZCA9IHRoaXMuZGF0YXNldC5hbmltYWxJZDtcclxuICAgICAgICAgICAgY29uc3QgYXNzb2NpYXRpb25JZCA9IHRoaXMuZGF0YXNldC5hc3NvY2lhdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFuaW1hbElkKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGFjdE1vZGFsKGAvY29udGFjdC9hbmltYWwvJHthbmltYWxJZH1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhc3NvY2lhdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGFjdE1vZGFsKGAvY29udGFjdC9hc3NvY2lhdGlvbi8ke2Fzc29jaWF0aW9uSWR9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZW5lcmFsIGNvbnRhY3QgZm9ybVxyXG4gICAgICAgICAgICAgICAgb3BlbkNvbnRhY3RNb2RhbCgnL2NvbnRhY3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Db250YWN0TW9kYWwodXJsKSB7XHJcbiAgICAvLyBDcsOpZXIgbGEgbW9kYWxlXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWwuY2xhc3NOYW1lID0gJ2NvbnRhY3QtbW9kYWwtb3ZlcmxheSc7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtbW9kYWxcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRhY3QtbW9kYWwtY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LW1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+IENoYXJnZW1lbnQuLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgLy8gQ2hhcmdlciBsZSBmb3JtdWxhaXJlXHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgIC50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1tb2RhbC1ib2R5Jyk7XHJcbiAgICAgICAgICAgIG1vZGFsQm9keS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZXIgbGUgZm9ybXVsYWlyZVxyXG4gICAgICAgICAgICBpbml0aWFsaXplQ29udGFjdEZvcm0obW9kYWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBmb3JtdWxhaXJlJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGNsb3NlQ29udGFjdE1vZGFsKG1vZGFsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvLyDDiXbDqW5lbWVudHMgZGUgZmVybWV0dXJlXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LW1vZGFsLWNsb3NlJyk7XHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlQ29udGFjdE1vZGFsKG1vZGFsKSk7XHJcblxyXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgY2xvc2VDb250YWN0TW9kYWwobW9kYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZlcm1ldHVyZSBhdmVjIEVzY2FwZVxyXG4gICAgY29uc3QgZXNjYXBlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICBjbG9zZUNvbnRhY3RNb2RhbChtb2RhbCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUNvbnRhY3RNb2RhbChtb2RhbCkge1xyXG4gICAgbW9kYWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgIH0sIDMwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVDb250YWN0Rm9ybShtb2RhbCkge1xyXG4gICAgY29uc3QgZm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWZvcm0tYWpheCcpO1xyXG5cclxuICAgIGlmICghZm9ybSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmJ0bi1zdWJtaXQtY29udGFjdCcpO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IHN1Ym1pdEJ0bi5pbm5lckhUTUw7XHJcbiAgICAgICAgc3VibWl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4gRW52b2kgZW4gY291cnMuLi4nO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgICAgICAgZmV0Y2goZm9ybS5hY3Rpb24sIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKGRhdGEubWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlQ29udGFjdE1vZGFsKG1vZGFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oZGF0YS5tZXNzYWdlLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9IG9yaWdpbmFsVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZGUgbFxcJ2Vudm9pIGR1IG1lc3NhZ2UnLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgc3VibWl0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSBvcmlnaW5hbFRleHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbndpbmRvdy5Db250YWN0TW9kYWwgPSB7XHJcbiAgICBvcGVuOiBvcGVuQ29udGFjdE1vZGFsLFxyXG4gICAgY2xvc2U6IGNsb3NlQ29udGFjdE1vZGFsLFxyXG4gICAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZUNvbnRhY3RNb2RhbFxyXG59O1xyXG4iLCIvKiBGb3JtdWxhaXJlIGQnYWRow6lzaW9uKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVKb2luRm9ybSgpIHtcclxuICAgIGNvbnN0IGFzc29jaWF0aW9uUmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImFzc29jaWF0aW9uX2lkXCJdJyk7XHJcbiAgICBjb25zdCBqb2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvaW5CdG4nKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBleGlzdFxyXG4gICAgaWYgKGFzc29jaWF0aW9uUmFkaW9zLmxlbmd0aCA9PT0gMCB8fCAham9pbkJ0bikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbmFibGUgYnV0dG9uIHdoZW4gYSByYWRpbyBpcyBzZWxlY3RlZFxyXG4gICAgYXNzb2NpYXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGpvaW5CdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qIE1vYmlsZSBBY3Rpb24gTWVudSBNb2R1bGUgKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTW9iaWxlQWN0aW9uTWVudSgpIHtcclxuICAgIGNvbnN0IG1vYmlsZUFjdGlvblRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVBY3Rpb25Ub2dnbGUnKTtcclxuICAgIGNvbnN0IG1vYmlsZUFjdGlvbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlQWN0aW9uTWVudScpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIG1vYmlsZSBhY3Rpb24gbWVudSBleGlzdHNcclxuICAgIGlmICghbW9iaWxlQWN0aW9uVG9nZ2xlIHx8ICFtb2JpbGVBY3Rpb25NZW51KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIG1vYmlsZSBhY3Rpb24gbWVudSBvcGVuL2Nsb3NlZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNb2JpbGVBY3Rpb25NZW51KCkge1xyXG4gICAgICAgIG1vYmlsZUFjdGlvblRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBtb2JpbGVBY3Rpb25NZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgbW9iaWxlIGFjdGlvbiBtZW51XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9iaWxlQWN0aW9uTWVudSgpIHtcclxuICAgICAgICBtb2JpbGVBY3Rpb25Ub2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgbW9iaWxlQWN0aW9uTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2dnbGUgbWVudSBvbiBidXR0b24gY2xpY2tcclxuICAgIG1vYmlsZUFjdGlvblRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vYmlsZUFjdGlvbk1lbnUpO1xyXG5cclxuICAgIC8vIENsb3NlIG1lbnUgd2hlbiBjbGlja2luZyBvbiBhIGxpbmsgaW5zaWRlXHJcbiAgICBjb25zdCBtb2JpbGVBY3Rpb25MaW5rcyA9IG1vYmlsZUFjdGlvbk1lbnUucXVlcnlTZWxlY3RvckFsbCgnLm1vYmlsZS1hY3Rpb24tbGluaycpO1xyXG4gICAgbW9iaWxlQWN0aW9uTGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2JpbGVBY3Rpb25NZW51KTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qIE1vYmlsZSBNZW51IE1vZHVsZSAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNb2JpbGVNZW51KCkge1xyXG4gICAgY29uc3QgYnVyZ2VyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlclRvZ2dsZScpO1xyXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVNZW51Jyk7XHJcbiAgICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNZW51Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1vdmVybGF5Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2JpbGUtbmF2LWxpbmtzIGEsIC5tb2JpbGUtYXV0aC1saW5rJyk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgZXhpc3RcclxuICAgIGlmICghYnVyZ2VyVG9nZ2xlIHx8ICFtb2JpbGVNZW51KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbk1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uTWVudVRvZ2dsZScpO1xyXG4gICAgY29uc3QgYWN0aW9uTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb25NZW51Jyk7XHJcblxyXG4gICAgLy9Ub2dnbGUgbW9iaWxlIG1lbnUgb3Blbi9jbG9zZWRcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gICAgICAgIGJ1cmdlclRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyAnaGlkZGVuJyA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ2xvc2UgbW9iaWxlIG1lbnVcclxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudUhhbmRsZXIoKSB7XHJcbiAgICAgICAgYnVyZ2VyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIGNsb3NlQWN0aW9uTWVudSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL1RvZ2dsZSBhY3Rpb24gbWVudSAodXNlciBkcm9wZG93bilcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVBY3Rpb25NZW51KCkge1xyXG4gICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnVUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0Nsb3NlIGFjdGlvbiBtZW51XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VBY3Rpb25NZW51KCkge1xyXG4gICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnVUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgZm9yIGJ1cmdlciBtZW51XHJcbiAgICBidXJnZXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51KTtcclxuXHJcbiAgICBpZiAoY2xvc2VNZW51KSB7XHJcbiAgICAgICAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vYmlsZU1lbnVPdmVybGF5KSB7XHJcbiAgICAgICAgbW9iaWxlTWVudU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnVIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDbG9zZSBtZW51IHdoZW4gY2xpY2tpbmcgb24gYSBsaW5rXHJcbiAgICBtb2JpbGVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnVIYW5kbGVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFjdGlvbiBtZW51IC0gaG92ZXIgYmVoYXZpb3Igd2l0aCBkZWxheVxyXG4gICAgY29uc3QgYWN0aW9uTWVudVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLW1lbnUtd3JhcHBlcicpO1xyXG4gICAgbGV0IGNsb3NlTWVudVRpbWVvdXQ7XHJcblxyXG4gICAgaWYgKGFjdGlvbk1lbnVXcmFwcGVyKSB7XHJcbiAgICAgICAgYWN0aW9uTWVudVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY2xvc2VNZW51VGltZW91dCk7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25NZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTWVudVRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhY3Rpb25NZW51V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VBY3Rpb25NZW51KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGFjdGlvbiBtZW51IHdoZW4gY2xpY2tpbmcgb24gYSBsaW5rIGluc2lkZVxyXG4gICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnUucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VBY3Rpb25NZW51KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG5BbmltYWwgQ2FyZHMgTW9kdWxlXHJcbkhhbmRsZXMgYW5pbWFsIGNhcmQgaW50ZXJhY3Rpb25zIGFuZCBuYXZpZ2F0aW9uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBbmltYWxDYXJkcygpIHtcclxuICAgIGNvbnN0IGFuaW1hbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hbC1jYXJkJyk7XHJcblxyXG4gICAgYW5pbWFsQ2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAvLyBEb24ndCBhZGQgY2xpY2sgbmF2aWdhdGlvbiBmb3IgY2Fyb3VzZWwgY2FyZHMgLSBjYXJvdXNlbCBoYW5kbGVzIHRoZWlyIGludGVyYWN0aW9uXHJcbiAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbC1jYXJkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGNsaWNrIGhhbmRsZXIgZm9yIGdyaWQgY2FyZHMgKGV4Y2x1ZGluZyBidXR0b25zKVxyXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IHRyaWdnZXIgaWYgY2xpY2tpbmcgb24gYnV0dG9uc1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmFjdGlvbi1idG4nKSB8fCBlLnRhcmdldC5jbG9zZXN0KCcuc2VlLW1vcmUtYnRuJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gR2V0IGFuaW1hbCBJRCBhbmQgcmVkaXJlY3QgdG8gZGV0YWlsIHBhZ2VcclxuICAgICAgICAgICAgY29uc3QgYW5pbWFsSWQgPSB0aGlzLmRhdGFzZXQuYW5pbWFsSWQ7XHJcbiAgICAgICAgICAgIGlmIChhbmltYWxJZCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2FuaW1hbHMvJHthbmltYWxJZH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBob3ZlciBlZmZlY3RzXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWltYWdlIGltZycpO1xyXG4gICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjA1KSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVTZWVNb3JlQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IHNlZU1vcmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlZS1tb3JlLWJ0bicpO1xyXG5cclxuICAgIHNlZU1vcmVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hbElkID0gdGhpcy5kYXRhc2V0LmFuaW1hbElkO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gYW5pbWFsIGRldGFpbCBwYWdlXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9hbmltYWxzLyR7YW5pbWFsSWR9YDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qQWpvdXQgZGFucyBsZXMgZmF2b3JpcyovXHJcblxyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRGYXZvcml0ZShhbmltYWxJZCkge1xyXG4gICAgZmV0Y2goJy9hcGkvZmF2b3JpdGVzJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFuaW1hbElkOiBhbmltYWxJZCB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignQWpvdXTDqSBhdXggZmF2b3JpcyAhJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKGRhdGEubWVzc2FnZSB8fCAnRXJyZXVyIGxvcnMgZGUgbFxcJ2Fqb3V0IGF1eCBmYXZvcmlzJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbignVm91cyBkZXZleiDDqnRyZSBjb25uZWN0w6kgcG91ciBham91dGVyIHVuIGFuaW1hbCDDoCB2b3MgZmF2b3JpcycsICdlcnJvcicpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qUmV0cmFpdCBkZXMgZmF2b3JpcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmF2b3JpdGUoYW5pbWFsSWQpIHtcclxuICAgIGZldGNoKGAvYXBpL2Zhdm9yaXRlcy8ke2FuaW1hbElkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignUmV0aXLDqSBkZXMgZmF2b3JpcycsICdpbmZvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihkYXRhLm1lc3NhZ2UgfHwgJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24nLCAnZXJyb3InKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUZhdm9yaXRlQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IGZhdm9yaXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZS1idG4nKTtcclxuXHJcbiAgICBmYXZvcml0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYW5pbWFsSWQgPSB0aGlzLmRhdGFzZXQuYW5pbWFsSWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYXJ0SWNvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignaScpO1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIGZhdm9yaXRlIHN0YXRlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGVkJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZmF2b3JpdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBoZWFydEljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmFzJyk7XHJcbiAgICAgICAgICAgICAgICBoZWFydEljb24uY2xhc3NMaXN0LmFkZCgnZmFyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gZmF2b3JpdGVzXHJcbiAgICAgICAgICAgICAgICByZW1vdmVGYXZvcml0ZShhbmltYWxJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgaGVhcnRJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcicpO1xyXG4gICAgICAgICAgICAgICAgaGVhcnRJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byBmYXZvcml0ZXNcclxuICAgICAgICAgICAgICAgIGFkZEZhdm9yaXRlKGFuaW1hbElkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGFuaW1hdGlvblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjIpJztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyogTW9kdWxlIGRlIG5vdGlmaWNhdGlvbnMgKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSAnaW5mbycpIHtcclxuICAgIC8vIFJlbW92ZSBleGlzdGluZyBub3RpZmljYXRpb25zXHJcbiAgICBjb25zdCBleGlzdGluZ05vdGlmaWNhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90aWZpY2F0aW9uJyk7XHJcbiAgICBleGlzdGluZ05vdGlmaWNhdGlvbnMuZm9yRWFjaChub3RpZiA9PiBub3RpZi5yZW1vdmUoKSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIG5vdGlmaWNhdGlvbiBlbGVtZW50XHJcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBgbm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0ke3R5cGV9YDtcclxuICAgIG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcblxyXG4gICAgLy8gRGVmaW5lIGNvbG9ycyBiYXNlZCBvbiB0eXBlXHJcbiAgICBjb25zdCBjb2xvcnMgPSB7XHJcbiAgICAgICAgc3VjY2VzczogJyMxMEI5ODEnLFxyXG4gICAgICAgIGVycm9yOiAnI0VGNDQ0NCcsXHJcbiAgICAgICAgaW5mbzogJyMzQjgyRjYnLFxyXG4gICAgICAgIHdhcm5pbmc6ICcjRjU5RTBCJ1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTdHlsZSB0aGUgbm90aWZpY2F0aW9uXHJcbiAgICBub3RpZmljYXRpb24uc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzW3R5cGVdIHx8IGNvbG9ycy5pbmZvfTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IDAuM3MgZWFzZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGA7XHJcblxyXG4gICAgLy8gQWRkIGFuaW1hdGlvbiBzdHlsZXMgaWYgbm90IGFscmVhZHkgcHJlc2VudFxyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpY2F0aW9uLXN0eWxlcycpKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIHN0eWxlLmlkID0gJ25vdGlmaWNhdGlvbi1zdHlsZXMnO1xyXG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XHJcbiAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgdG8gcGFnZVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG5cclxuICAgIC8vIFJlbW92ZSBhZnRlciA0IHNlY29uZHNcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5hbmltYXRpb24gPSAnc2xpZGVPdXRSaWdodCAwLjNzIGVhc2UnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm90aWZpY2F0aW9uLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfSwgNDAwMCk7XHJcbn1cclxuIiwiLypUb29sdGlwcyBNb2R1bGUqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVUb29sdGlwcygpIHtcclxuICAgIGNvbnN0IHRhZ3NXaXRoVG9vbHRpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFnW2RhdGEtdG9vbHRpcF0sIC50YWctbWluaVtkYXRhLXRvb2x0aXBdJyk7XHJcblxyXG4gICAgdGFnc1dpdGhUb29sdGlwcy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgLy8gQWRkIGhvdmVyIGV2ZW50cyBmb3IgYmV0dGVyIHRvb2x0aXAgcG9zaXRpb25pbmdcclxuICAgICAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnKTtcclxuICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIC8vIFBvc2l0aW9uIHRvb2x0aXAgdG8gYXZvaWQgdmlld3BvcnQgb3ZlcmZsb3dcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcEVsZW1lbnQgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkanVzdCB0b29sdGlwIHBvc2l0aW9uIGlmIG5lYXIgdmlld3BvcnQgZWRnZXNcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBzZXVkb0VsZW1lbnQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0b29sdGlwRWxlbWVudCwgJzo6YmVmb3JlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY3QubGVmdCA8IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b29sdGlwLWFsaWduJywgJ2xlZnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3QucmlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCAtIDE1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b29sdGlwLWFsaWduJywgJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIFJlc2V0IHRvb2x0aXAgcG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS10b29sdGlwLWFsaWduJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBjbGljayBldmVudCBmb3IgbW9iaWxlIGRldmljZXNcclxuICAgICAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnLW5hbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dUYWdNb2RhbCh0YWdOYW1lLCB0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFnTW9kYWwodGFnTmFtZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIC8vIFJlbW92ZSBleGlzdGluZyBtb2RhbCBpZiBhbnlcclxuICAgIGNvbnN0IGV4aXN0aW5nTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFnLW1vZGFsJyk7XHJcbiAgICBpZiAoZXhpc3RpbmdNb2RhbCkge1xyXG4gICAgICAgIGV4aXN0aW5nTW9kYWwucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIG1vZGFsXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWwuY2xhc3NOYW1lID0gJ3RhZy1tb2RhbCc7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhZy1tb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWctbW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+JHt0YWdOYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFnLW1vZGFsLWNsb3NlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZy1tb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhZy1tb2RhbC1iYWNrZHJvcFwiPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICAvLyBBZGQgdG8gcGFnZVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcblxyXG4gICAgLy8gQ2xvc2UgbW9kYWwgZXZlbnRzXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50YWctbW9kYWwtY2xvc2UnKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnRhZy1tb2RhbC1iYWNrZHJvcCcpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuYW5pbWF0aW9uID0gJ2ZhZGVPdXQgMC4zcyBlYXNlJztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1vZGFsLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XHJcblxyXG4gICAgLy8gQ2xvc2Ugb24gZXNjYXBlIGtleVxyXG4gICAgY29uc3QgZXNjYXBlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG59XHJcbiIsIi8qKlxyXG5OZXdzIENhcm91c2VsIE1vZHVsZVxyXG5TY3JvbGwgaW5maW5pIGRlcyBub3V2ZWxsZXNcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZU5ld3NDYXJvdXNlbCgpIHtcclxuICAgIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdzLWNhcm91c2VsJyk7XHJcblxyXG4gICAgY2Fyb3VzZWxzLmZvckVhY2goY2Fyb3VzZWwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRyYWNrID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLm5ld3MtdHJhY2snKTtcclxuICAgICAgICBpZiAoIXRyYWNrKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRzID0gdHJhY2sucXVlcnlTZWxlY3RvckFsbCgnLm5ld3MtY2FyZCcpO1xyXG4gICAgICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRvdGFsIHdpZHRoIG9mIG9uZSBzZXQgb2YgY2FyZHNcclxuICAgICAgICBsZXQgdHJhY2tXaWR0aCA9IDA7XHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgdHJhY2tXaWR0aCArPSBjYXJkLm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRyYWNrKS5nYXAgfHwgMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEhhbGYgdGhlIHRyYWNrIHdpZHRoIChzaW5jZSBjYXJkcyBhcmUgZHVwbGljYXRlZClcclxuICAgICAgICBjb25zdCBoYWxmV2lkdGggPSB0cmFja1dpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGRpcmVjdGlvblxyXG4gICAgICAgIGNvbnN0IGlzUmlnaHQgPSBjYXJvdXNlbC5jbGFzc0xpc3QuY29udGFpbnMoJ25ld3MtY2Fyb3VzZWwtcmlnaHQnKTtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSBpc1JpZ2h0ID8gMCA6IC1oYWxmV2lkdGg7XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBzcGVlZCAocGl4ZWxzIHBlciBzZWNvbmQpXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBoYWxmV2lkdGggLyAzNTsgLy8gMzUgc2Vjb25kcyBmb3IgZnVsbCBjeWNsZVxyXG5cclxuICAgICAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZDtcclxuICAgICAgICBsZXQgbGFzdFRpbWVzdGFtcDtcclxuICAgICAgICBsZXQgaXNQYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW5pbWF0aW9uIGxvb3AgdXNpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcCAtIEhpZ2ggcmVzb2x1dGlvbiB0aW1lc3RhbXAgZnJvbSBSQUZcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKHRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICBpZiAoIWxhc3RUaW1lc3RhbXApIGxhc3RUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gdGltZXN0YW1wIC0gbGFzdFRpbWVzdGFtcDtcclxuICAgICAgICAgICAgbGFzdFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gLT0gKHNwZWVkICogZGVsdGEpIC8gMTAwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgd2hlbiBoYWxmd2F5IHRocm91Z2hcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gLWhhbGZXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gKHNwZWVkICogZGVsdGEpIC8gMTAwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgd2hlbiBhdCBzdGFydFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gLWhhbGZXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhY2suc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7cG9zaXRpb259cHgsIDAsIDApYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN0YXJ0IGFuaW1hdGlvblxyXG4gICAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICAgIC8vIFBhdXNlIG9uIGhvdmVyXHJcbiAgICAgICAgY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgaXNQYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYXN0VGltZXN0YW1wID0gbnVsbDsgLy8gUmVzZXQgdGltZXN0YW1wIHRvIGF2b2lkIGp1bXBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYW51cCBvbiBwYWdlIHVubG9hZFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25GcmFtZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gU2VhcmNoIGZvcm0gZnVuY3Rpb25hbGl0eVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNlYXJjaEZvcm0oKSB7XHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xyXG5cclxuICAgIGlmIChzZWFyY2hCdG4pIHtcclxuICAgICAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS1zZWxlY3QnKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2V4ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXhlLXNlbGVjdCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBkZXBhcnRtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlcGFydG1lbnQtc2VsZWN0JykudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBxdWVyeSBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICAgICAgaWYgKHNwZWNpZXMpIHBhcmFtcy5zZXQoJ3NwZWNpZXMnLCBzcGVjaWVzKTtcclxuICAgICAgICAgICAgaWYgKHNleGUpIHBhcmFtcy5zZXQoJ3NleGUnLCBzZXhlKTtcclxuICAgICAgICAgICAgaWYgKGRlcGFydG1lbnQpIHBhcmFtcy5zZXQoJ2RlcGFydG1lbnQnLCBkZXBhcnRtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIGFuaW1hbHMgcGFnZSB3aXRoIGZpbHRlcnNcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gcXVlcnlTdHJpbmcgPyBgL2FuaW1hbHM/JHtxdWVyeVN0cmluZ31gIDogJy9hbmltYWxzJztcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCIvL0FmZmljaGUgbGUgbm9tIGR1IGZpY2hpZXIgc8OpbGVjdGlvbm7DqSBkYW5zIHVuIGlucHV0IGRlIHR5cGUgZmlsZVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgZmlsZSBpbnB1dCBkaXNwbGF5IGZvciBhIHNwZWNpZmljIGZpbGUgaW5wdXQgYW5kIGRpc3BsYXkgZWxlbWVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciAtIENTUyBzZWxlY3RvciBmb3IgdGhlIGZpbGUgaW5wdXQgZWxlbWVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheVNlbGVjdG9yIC0gQ1NTIHNlbGVjdG9yIGZvciB0aGUgZWxlbWVudCB0byBkaXNwbGF5IHRoZSBmaWxlbmFtZSBpblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdFRleHQgLSBEZWZhdWx0IHRleHQgdG8gc2hvdyB3aGVuIG5vIGZpbGUgaXMgc2VsZWN0ZWQgKGRlZmF1bHQ6IFwiQXVjdW4gZmljaGllclwiKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVGaWxlSW5wdXREaXNwbGF5KGlucHV0U2VsZWN0b3IsIGRpc3BsYXlTZWxlY3RvciwgZGVmYXVsdFRleHQgPSAnQXVjdW4gZmljaGllcicpIHtcclxuICAgIGNvbnN0IGZpbGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5wdXRTZWxlY3Rvcik7XHJcbiAgICBjb25zdCBmaWxlTmFtZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRpc3BsYXlTZWxlY3Rvcik7XHJcblxyXG4gICAgaWYgKCFmaWxlSW5wdXQgfHwgIWZpbGVOYW1lRGlzcGxheSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgaW5pdGlhbCBkaXNwbGF5IHRleHRcclxuICAgIGZpbGVOYW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGRlZmF1bHRUZXh0O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBkaXNwbGF5IG9uIGZpbGUgc2VsZWN0aW9uIGNoYW5nZVxyXG4gICAgZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmaWxlTmFtZURpc3BsYXkudGV4dENvbnRlbnQgPSB0aGlzLmZpbGVzWzBdLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlsZU5hbWVEaXNwbGF5LnRleHRDb250ZW50ID0gZGVmYXVsdFRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGFsbCBmaWxlIGlucHV0IGRpc3BsYXlzIG9uIHRoZSBwYWdlXHJcbiAqIExvb2tzIGZvciBlbGVtZW50cyB3aXRoIGRhdGEtZmlsZS1pbnB1dC1kaXNwbGF5IGF0dHJpYnV0ZVxyXG4gKlxyXG4gKiBVc2FnZSBpbiBIVE1MOlxyXG4gKiA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cInJlZ2lzdGVyX2ltYWdlRmlsZV9maWxlXCIgZGF0YS1maWxlLWlucHV0LWRpc3BsYXk9XCJmaWxlLW5hbWUtZGlzcGxheVwiPlxyXG4gKiA8c3BhbiBpZD1cImZpbGUtbmFtZS1kaXNwbGF5XCI+QXVjdW4gZmljaGllcjwvc3Bhbj5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQWxsRmlsZUlucHV0RGlzcGxheXMoKSB7XHJcbiAgICBjb25zdCBmaWxlSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsZS1pbnB1dC1kaXNwbGF5XScpO1xyXG5cclxuICAgIGZpbGVJbnB1dHMuZm9yRWFjaChmaWxlSW5wdXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlFbGVtZW50SWQgPSBmaWxlSW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbGUtaW5wdXQtZGlzcGxheScpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlzcGxheUVsZW1lbnRJZCk7XHJcblxyXG4gICAgICAgIGlmIChkaXNwbGF5RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VGV4dCA9IGRpc3BsYXlFbGVtZW50LnRleHRDb250ZW50IHx8ICdBdWN1biBmaWNoaWVyJztcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZUZpbGVJbnB1dERpc3BsYXkoXHJcbiAgICAgICAgICAgICAgICBgIyR7ZmlsZUlucHV0LmlkfWAsXHJcbiAgICAgICAgICAgICAgICBgIyR7ZGlzcGxheUVsZW1lbnRJZH1gLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRleHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCIvL0xlcyBmb25jdGlvbnMgdXRpbGl0YWlyZXMgcG91ciBsZXMgbW9kYWxlc1xyXG5leHBvcnQgZnVuY3Rpb24gZmVybWVyTW9kYWxlKCkge1xyXG4gICAgY29uc3QgbW9kYWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsZS1mbGFzaCcpO1xyXG4gICAgaWYgKG1vZGFsZSkge1xyXG4gICAgICAgIG1vZGFsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZU1vZGFsVXRpbHMoKSB7XHJcbiAgICB3aW5kb3cuZmVybWVyTW9kYWxlID0gZmVybWVyTW9kYWxlO1xyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJpbml0Q2Fyb3VzZWwiLCJpbml0QW5pbWFsc0Nhcm91c2VsIiwiaW5pdGlhbGl6ZU5ld3NDYXJvdXNlbCIsImluaXRTZWFyY2hGb3JtIiwiaW5pdGlhbGl6ZUFuaW1hbHMiLCJpbml0aWFsaXplQ29udGFjdE1vZGFsIiwiaW5pdEF1dGgiLCJpbml0aWFsaXplTW9iaWxlTWVudSIsImluaXRpYWxpemVNb2JpbGVBY3Rpb25NZW51IiwiaW5pdGlhbGl6ZUNvbW1lbnRSZXBseSIsImluaXRpYWxpemVKb2luRm9ybSIsImluaXRpYWxpemVNb2RhbFV0aWxzIiwiaW5pdGlhbGl6ZUFsbEZpbGVJbnB1dERpc3BsYXlzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEluZGljYXRvciIsInRhcmdldFNlY3Rpb24iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic3R5bGUiLCJjdXJzb3IiLCJjb250YWN0QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJyZXBseUJ1dHRvbnMiLCJnZXRFbGVtZW50QnlJZCIsImFzc29jaWF0aW9uUmFkaW9zIiwiY2Fyb3VzZWwiLCJjYXJkcyIsImluZGljYXRvcnMiLCJwcmV2QnRuIiwibmV4dEJ0biIsImN1cnJlbnRJbmRleCIsImlzTmF2aWdhdGluZyIsInVwZGF0ZUNhcm91c2VsIiwiZm9yRWFjaCIsImNhcmQiLCJpbmRleCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlbGF0aXZlUG9zIiwiYWRkIiwiaW5kaWNhdG9yIiwidG9nZ2xlIiwiZ29Ub1NsaWRlIiwic2V0VGltZW91dCIsInByZXZJbmRleCIsIm5leHRJbmRleCIsImxpbmtzIiwibGluayIsImUiLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xpY2tlZEVsZW1lbnQiLCJ0YXJnZXQiLCJpc1ZpZXdCdG4iLCJjbG9zZXN0Iiwia2V5IiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblgiLCJoYW5kbGVTd2lwZSIsInN3aXBlVGhyZXNob2xkIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJpbml0aWFsaXplRmF2b3JpdGVCdXR0b25zIiwiYWRkRmF2b3JpdGUiLCJyZW1vdmVGYXZvcml0ZSIsInNob3dOb3RpZmljYXRpb24iLCJpbml0aWFsaXplVG9vbHRpcHMiLCJpbml0aWFsaXplQW5pbWFsQ2FyZHMiLCJpbml0aWFsaXplU2VlTW9yZUJ1dHRvbnMiLCJ3aW5kb3ciLCJBbmltYWxDYXJkcyIsImluaXRpYWxpemVGaWxlSW5wdXREaXNwbGF5IiwiYXV0aFdyYXBwZXIiLCJzaWduVXBCdG4iLCJzaWduSW5CdG4iLCJsb2dpbkZvcm0iLCJyZWdpc3RlckZvcm0iLCJzd2l0Y2hUb1NpZ25VcCIsImxvZ2luQW5pbWF0aW9ucyIsImVsIiwiYW5pbWF0aW9uIiwiY29uY2F0IiwicmVnaXN0ZXJBbmltYXRpb25zIiwic3dpdGNoVG9TaWduSW4iLCJpbml0QW5pbWF0aW9ucyIsImluZm9BbmltYXRpb25zIiwiaW5wdXRzIiwiaW5wdXQiLCJ2YWx1ZSIsInBhcmVudEVsZW1lbnQiLCJleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0IiwibmV3QXNzb2NpYXRpb25GaWVsZCIsInJhZGlvIiwic2VsZWN0ZWRWYWx1ZSIsImRpc3BsYXkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJpbmplY3RBdXRoU3R5bGVzIiwic3R5bGVJZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInRleHRDb250ZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwic2xpZGVzIiwiY3VycmVudFNsaWRlIiwiYXV0b1NsaWRlSW50ZXJ2YWwiLCJzaG93U2xpZGUiLCJzbGlkZSIsIm5leHRTbGlkZSIsInN0YXJ0QXV0b1NsaWRlIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicmVwbHlUb2dnbGVCdXR0b25zIiwiYnV0dG9uIiwiY29tbWVudElkIiwiZGF0YXNldCIsInRvZ2dsZVJlcGx5IiwiZm9ybSIsImFuaW1hbElkIiwiYXNzb2NpYXRpb25JZCIsIm9wZW5Db250YWN0TW9kYWwiLCJ1cmwiLCJtb2RhbCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImJvZHkiLCJvdmVyZmxvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImh0bWwiLCJtb2RhbEJvZHkiLCJpbml0aWFsaXplQ29udGFjdEZvcm0iLCJlcnJvciIsImNsb3NlQ29udGFjdE1vZGFsIiwiY2xvc2VCdG4iLCJlc2NhcGVIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wYWNpdHkiLCJzdWJtaXRCdG4iLCJvcmlnaW5hbFRleHQiLCJkaXNhYmxlZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhY3Rpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsIkNvbnRhY3RNb2RhbCIsIm9wZW4iLCJjbG9zZSIsImluaXRpYWxpemUiLCJqb2luQnRuIiwibW9iaWxlQWN0aW9uVG9nZ2xlIiwibW9iaWxlQWN0aW9uTWVudSIsInRvZ2dsZU1vYmlsZUFjdGlvbk1lbnUiLCJjbG9zZU1vYmlsZUFjdGlvbk1lbnUiLCJtb2JpbGVBY3Rpb25MaW5rcyIsImJ1cmdlclRvZ2dsZSIsIm1vYmlsZU1lbnUiLCJjbG9zZU1lbnUiLCJtb2JpbGVNZW51Q29udGVudCIsIm1vYmlsZU1lbnVPdmVybGF5IiwibW9iaWxlTGlua3MiLCJhY3Rpb25NZW51VG9nZ2xlIiwiYWN0aW9uTWVudSIsInRvZ2dsZU1lbnUiLCJjbG9zZU1lbnVIYW5kbGVyIiwiY2xvc2VBY3Rpb25NZW51IiwidG9nZ2xlQWN0aW9uTWVudSIsImFjdGlvbk1lbnVXcmFwcGVyIiwiY2xvc2VNZW51VGltZW91dCIsImNsZWFyVGltZW91dCIsImFuaW1hbENhcmRzIiwibG9jYXRpb24iLCJocmVmIiwiaW1hZ2UiLCJ0cmFuc2Zvcm0iLCJzZWVNb3JlQnV0dG9ucyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmYXZvcml0ZUJ1dHRvbnMiLCJfdGhpcyIsImhlYXJ0SWNvbiIsInR5cGUiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJleGlzdGluZ05vdGlmaWNhdGlvbnMiLCJub3RpZiIsIm5vdGlmaWNhdGlvbiIsImNvbG9ycyIsImluZm8iLCJ3YXJuaW5nIiwiY3NzVGV4dCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInRhZ3NXaXRoVG9vbHRpcHMiLCJ0YWciLCJ0b29sdGlwIiwiZ2V0QXR0cmlidXRlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvb2x0aXBFbGVtZW50IiwicHNldWRvRWxlbWVudCIsImdldENvbXB1dGVkU3R5bGUiLCJsZWZ0Iiwic2V0UHJvcGVydHkiLCJyaWdodCIsImlubmVyV2lkdGgiLCJyZW1vdmVQcm9wZXJ0eSIsInRhZ05hbWUiLCJzaG93VGFnTW9kYWwiLCJkZXNjcmlwdGlvbiIsImV4aXN0aW5nTW9kYWwiLCJiYWNrZHJvcCIsImNsb3NlTW9kYWwiLCJjYXJvdXNlbHMiLCJ0cmFjayIsInRyYWNrV2lkdGgiLCJvZmZzZXRXaWR0aCIsInBhcnNlRmxvYXQiLCJnYXAiLCJoYWxmV2lkdGgiLCJpc1JpZ2h0IiwicG9zaXRpb24iLCJzcGVlZCIsImFuaW1hdGlvbkZyYW1lSWQiLCJsYXN0VGltZXN0YW1wIiwiaXNQYXVzZWQiLCJhbmltYXRlIiwidGltZXN0YW1wIiwiZGVsdGEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNlYXJjaEJ0biIsInNwZWNpZXMiLCJzZXhlIiwiZGVwYXJ0bWVudCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNldCIsInF1ZXJ5U3RyaW5nIiwidG9TdHJpbmciLCJpbnB1dFNlbGVjdG9yIiwiZGlzcGxheVNlbGVjdG9yIiwiZGVmYXVsdFRleHQiLCJmaWxlSW5wdXQiLCJmaWxlTmFtZURpc3BsYXkiLCJmaWxlcyIsIm5hbWUiLCJmaWxlSW5wdXRzIiwiZGlzcGxheUVsZW1lbnRJZCIsImRpc3BsYXlFbGVtZW50IiwiZmVybWVyTW9kYWxlIiwibW9kYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==