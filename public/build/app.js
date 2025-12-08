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

  // Check if there are errors in the register form and switch to sign-up mode
  var registerFormErrors = document.querySelectorAll('.register-panel .form-error');
  if (registerFormErrors.length > 0) {
    // Switch to sign-up panel if there are registration errors
    switchToSignUp();
  } else {
    // Initialize animations normally (login panel by default)
    initAnimations();
  }

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
      // Don't trigger if clicking on buttons or their children
      if (e.target.closest('.action-btn') || e.target.closest('.see-more-btn') || e.target.closest('.card-actions')) {
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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notifications.js */ "./assets/js/modules/notifications.js");












/*Ajout dans les favoris*/



// Flag to prevent multiple initializations
var favoritesInitialized = false;
function addFavorite(animalId) {
  console.log("[FAVORITE-API] POST /api/favorites with animalId: ".concat(animalId));
  return fetch('/api/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({
      animalId: animalId
    })
  }).then(function (response) {
    console.log("[FAVORITE-API] Response status: ".concat(response.status));
    return response.json().then(function (data) {
      console.log("[FAVORITE-API] Response data:", data);
      return {
        status: response.status,
        data: data
      };
    });
  }).then(function (_ref) {
    var status = _ref.status,
      data = _ref.data;
    if (data.success) {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_12__.showNotification)('Ajouté aux favoris !', 'success');
      return true;
    } else {
      console.warn("[FAVORITE-API] API returned success=false: ".concat(data.message));
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_12__.showNotification)(data.message || 'Erreur lors de l\'ajout aux favoris', 'error');
      return false;
    }
  })["catch"](function (error) {
    console.error("[FAVORITE-API] Fetch error:", error);
    (0,_notifications_js__WEBPACK_IMPORTED_MODULE_12__.showNotification)('Vous devez être connecté pour ajouter un animal à vos favoris', 'error');
    return false;
  });
}

/*Retrait des favoris */
function removeFavorite(animalId) {
  return fetch("/api/favorites/".concat(animalId), {
    method: 'DELETE',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success) {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_12__.showNotification)('Retiré des favoris', 'info');
      return true;
    } else {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_12__.showNotification)(data.message || 'Erreur lors de la suppression', 'error');
      return false;
    }
  })["catch"](function (error) {
    (0,_notifications_js__WEBPACK_IMPORTED_MODULE_12__.showNotification)('Erreur lors de la suppression', 'error');
    return false;
  });
}

// Map to track last click time per button
var lastClickTimes = new Map();
function initializeFavoriteButtons() {
  // Prevent multiple initializations
  if (favoritesInitialized) {
    console.log('[FAVORITE] Already initialized, skipping');
    return;
  }
  favoritesInitialized = true;

  // Use event delegation on document to avoid multiple listeners
  document.addEventListener('click', function (e) {
    var button = e.target.closest('.favorite-btn');
    if (!button) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    // Debounce: Ignore clicks within 500ms of the last click on this button
    var now = Date.now();
    var lastClick = lastClickTimes.get(button) || 0;
    if (now - lastClick < 500) {
      console.log("[FAVORITE] Debounced click - too fast");
      return;
    }
    lastClickTimes.set(button, now);
    var animalId = button.dataset.animalId;
    var heartIcon = button.querySelector('i');
    var wasFavorited = button.classList.contains('favorited');
    console.log("[FAVORITE] Click on animal ".concat(animalId, ", wasFavorited: ").concat(wasFavorited));

    // Disable button during API call
    if (button.disabled || button.dataset.processing === 'true') {
      console.log("[FAVORITE] Button already processing, ignoring click");
      return;
    }
    button.disabled = true;
    button.dataset.processing = 'true';

    // Toggle favorite state
    if (wasFavorited) {
      // Remove from favorites
      console.log("[FAVORITE] Removing animal ".concat(animalId, " from favorites"));
      removeFavorite(animalId).then(function (success) {
        if (success) {
          button.classList.remove('favorited');
          heartIcon.classList.remove('fas');
          heartIcon.classList.add('far');
          button.title = 'Ajouter aux favoris';
        }
      })["finally"](function () {
        button.disabled = false;
        button.dataset.processing = 'false';
      });
    } else {
      // Add to favorites
      console.log("[FAVORITE] Adding animal ".concat(animalId, " to favorites"));
      addFavorite(animalId).then(function (success) {
        if (success) {
          button.classList.add('favorited');
          heartIcon.classList.remove('far');
          heartIcon.classList.add('fas');
          button.title = 'Retirer des favoris';
        }
      })["finally"](function () {
        button.dataset.processing = 'false';
      });
    }

    // Add animation
    button.style.transform = 'scale(1.2)';
    setTimeout(function () {
      button.style.transform = '';
    }, 200);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-2024e0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0osQ0FBQyxDQUFDO0FBQ04sQzs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ08sU0FBU1EsWUFBWUEsQ0FBQSxFQUFHO0VBQzNCLElBQU1DLE1BQU0sR0FBRzVRLFFBQVEsQ0FBQ2EsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUN0RCxJQUFJK1AsTUFBTSxFQUFFO0lBQ1JBLE1BQU0sQ0FBQ3JRLEtBQUssQ0FBQ2tGLE9BQU8sR0FBRyxNQUFNO0VBQ2pDO0FBQ0o7QUFFTyxTQUFTM0Ysb0JBQW9CQSxDQUFBLEVBQUc7RUFDbkNpRSxNQUFNLENBQUM0TSxZQUFZLEdBQUdBLFlBQVk7QUFDdEMsQzs7Ozs7Ozs7Ozs7QUNWQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FuaW1hbHMtY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FuaW1hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21tZW50LXJlcGx5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb250YWN0LW1vZGFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9qb2luLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vYmlsZS1hY3Rpb24tbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9iaWxlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvYW5pbWFsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvZmF2b3JpdGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvdG9vbHRpcHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25ld3MtY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWxzL2ZpbGUtaW5wdXQtZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvbW9kYWwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBNYWluIEFwcGxpY2F0aW9uIEZpbGVcclxuICogQ2VudHJhbCBpbml0aWFsaXphdGlvbiBwb2ludCBmb3IgYWxsIEphdmFTY3JpcHQgbW9kdWxlc1xyXG4gKiBFYWNoIG1vZHVsZSBpcyBpbXBvcnRlZCBhbmQgaW5pdGlhbGl6ZWQgd2hlbiBpdHMgY29ycmVzcG9uZGluZyBET00gZWxlbWVudHMgZXhpc3RcclxuICovXHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIEltcG9ydCBob21lcGFnZSBjYXJvdXNlbHNcclxuaW1wb3J0IHsgaW5pdENhcm91c2VsIH0gZnJvbSAnLi9qcy9jYXJvdXNlbC5qcyc7XHJcbmltcG9ydCB7IGluaXRBbmltYWxzQ2Fyb3VzZWwgfSBmcm9tICcuL2pzL2FuaW1hbHMtY2Fyb3VzZWwuanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplTmV3c0Nhcm91c2VsIH0gZnJvbSAnLi9qcy9uZXdzLWNhcm91c2VsLmpzJztcclxuXHJcbi8vIEltcG9ydCBzZWFyY2ggYW5kIGZvcm0gZnVuY3Rpb25hbGl0eVxyXG5pbXBvcnQgeyBpbml0U2VhcmNoRm9ybSB9IGZyb20gJy4vanMvc2VhcmNoRm9ybS5qcyc7XHJcblxyXG4vLyBJbXBvcnQgYW5pbWFscyBwYWdlIG1vZHVsZXNcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFuaW1hbHMgfSBmcm9tICcuL2pzL2FuaW1hbHMuanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQ29udGFjdE1vZGFsIH0gZnJvbSAnLi9qcy9jb250YWN0LW1vZGFsLmpzJztcclxuXHJcbi8vIEltcG9ydCBhdXRoZW50aWNhdGlvbiBtb2R1bGVcclxuaW1wb3J0IHsgaW5pdEF1dGggfSBmcm9tICcuL2pzL2F1dGguanMnO1xyXG5cclxuLy8gSW1wb3J0IHV0aWxpdHkgbW9kdWxlc1xyXG5pbXBvcnQgeyBpbml0aWFsaXplTW9iaWxlTWVudSB9IGZyb20gJy4vanMvbW9iaWxlLW1lbnUuanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplTW9iaWxlQWN0aW9uTWVudSB9IGZyb20gJy4vanMvbW9iaWxlLWFjdGlvbi1tZW51LmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbW1lbnRSZXBseSB9IGZyb20gJy4vanMvY29tbWVudC1yZXBseS5qcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVKb2luRm9ybSB9IGZyb20gJy4vanMvam9pbi1mb3JtLmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZU1vZGFsVXRpbHMgfSBmcm9tICcuL2pzL3V0aWxzL21vZGFsLXV0aWxzLmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFsbEZpbGVJbnB1dERpc3BsYXlzIH0gZnJvbSAnLi9qcy91dGlscy9maWxlLWlucHV0LWRpc3BsYXkuanMnO1xyXG5cclxuLyoqXHJcbiAqIENlbnRyYWwgYXBwbGljYXRpb24gaW5pdGlhbGl6YXRpb25cclxuICogQ2FsbGVkIHdoZW4gRE9NIGlzIGZ1bGx5IGxvYWRlZFxyXG4gKiBFYWNoIGZlYXR1cmUgaXMgY29uZGl0aW9uYWxseSBpbml0aWFsaXplZCBiYXNlZCBvbiBET00gZWxlbWVudCBwcmVzZW5jZVxyXG4gKi9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gR0xPQkFMIFVUSUxJVElFUyA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gSW5pdGlhbGl6ZSB1dGlsaXRpZXMgdGhhdCBtYXkgYmUgdXNlZCBhY3Jvc3MgbXVsdGlwbGUgcGFnZXNcclxuICAgIGluaXRpYWxpemVNb2RhbFV0aWxzKCk7XHJcbiAgICBpbml0aWFsaXplQWxsRmlsZUlucHV0RGlzcGxheXMoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBMQVlPVVQgJiBOQVZJR0FUSU9OID09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBNb2JpbGUgbWVudSAodXNlZCBvbiBhbGwgcGFnZXMpXHJcbiAgICBpbml0aWFsaXplTW9iaWxlTWVudSgpO1xyXG4gICAgaW5pdGlhbGl6ZU1vYmlsZUFjdGlvbk1lbnUoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBIT01FUEFHRSBGRUFUVVJFUyA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gSGVybyBjYXJvdXNlbCAtIGF1dG8tcm90YXRpbmcgc2xpZGVzaG93XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tY2Fyb3VzZWwnKSkge1xyXG4gICAgICAgIGluaXRDYXJvdXNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuaW1hbHMgY2Fyb3VzZWwgLSAxMCBvbGRlc3QgYW5pbWFscyB3aXRoIG5hdmlnYXRpb25cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWFscy1jYXJvdXNlbCcpKSB7XHJcbiAgICAgICAgaW5pdEFuaW1hbHNDYXJvdXNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5ld3MgY2Fyb3VzZWwgLSBpbmZpbml0ZSBzY3JvbGwgbmV3cyBzZWN0aW9uXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MtY2Fyb3VzZWwnKSkge1xyXG4gICAgICAgIGluaXRpYWxpemVOZXdzQ2Fyb3VzZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTY3JvbGwgaW5kaWNhdG9yIC0gY2xpY2thYmxlIHBhdyB0byBzY3JvbGwgdG8gYW5pbWFscyBzZWN0aW9uXHJcbiAgICBjb25zdCBzY3JvbGxJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWluZGljYXRvcicpO1xyXG4gICAgaWYgKHNjcm9sbEluZGljYXRvcikge1xyXG4gICAgICAgIHNjcm9sbEluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9sZGVzdC1hbmltYWxzLXNlY3Rpb24nKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldFNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzY3JvbGxJbmRpY2F0b3Iuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IEFOSU1BTFMgUEFHRSAmIEhPTUVQQUdFID09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBBbmltYWwgY2FyZHMgZ3JpZCB3aXRoIGZhdm9yaXRlcywgc2hhcmluZywgZXRjLlxyXG4gICAgLy8gV29ya3Mgb24gYm90aCAvYW5pbWFscyBwYWdlIChhbmltYWxzLWdyaWQpIGFuZCBob21lcGFnZSAoYW5pbWFscy1jYXJvdXNlbClcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWFscy1ncmlkJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuaW1hbHMtY2Fyb3VzZWwnKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtYnRuJykpIHtcclxuICAgICAgICBpbml0aWFsaXplQW5pbWFscygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnRhY3QgbW9kYWwgKGZvciBhbmltYWwvYXNzb2NpYXRpb24gY29udGFjdClcclxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QtYnRuJyk7XHJcbiAgICBpZiAoY29udGFjdEJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGluaXRpYWxpemVDb250YWN0TW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBBTklNQUwgREVUQUlMIFBBR0UgPT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENvbW1lbnQgcmVwbHkgZm9ybXNcclxuICAgIGNvbnN0IHJlcGx5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS1yZXBseV0nKTtcclxuICAgIGlmIChyZXBseUJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGluaXRpYWxpemVDb21tZW50UmVwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBBVVRIRU5USUNBVElPTiBQQUdFUyA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQXV0aCBwYW5lbCBzd2l0Y2hpbmcgKHNpZ24gdXAgLyBzaWduIGluKVxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRoV3JhcHBlcicpKSB7XHJcbiAgICAgICAgaW5pdEF1dGgoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBTRUFSQ0ggUEFHRSA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU2VhcmNoIGZvcm0gd2l0aCBmaWx0ZXJzXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJykpIHtcclxuICAgICAgICBpbml0U2VhcmNoRm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IEFTU09DSUFUSU9OIFBBR0VTID09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBKb2luIGFzc29jaWF0aW9uIGZvcm1cclxuICAgIGNvbnN0IGFzc29jaWF0aW9uUmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImFzc29jaWF0aW9uX2lkXCJdJyk7XHJcbiAgICBpZiAoYXNzb2NpYXRpb25SYWRpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGluaXRpYWxpemVKb2luRm9ybSgpO1xyXG4gICAgfVxyXG59KTsiLCIvKiogTGUgY2Fyb3VzZWwgZGVzIDEwIGFuaW1hdXggbGVzIHBsdXMgYW5jaWVucyBhdmVjIG5hdmlnYXRpb24qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbmltYWxzQ2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYWxzLWNhcm91c2VsJyk7XHJcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1jYXJkJyk7XHJcbiAgICBjb25zdCBpbmRpY2F0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZGljYXRvci1kb3QnKTtcclxuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtcHJldicpO1xyXG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1uZXh0Jyk7XHJcblxyXG4gICAgaWYgKCFjYXJvdXNlbCB8fCBjYXJkcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcclxuICAgIGxldCBpc05hdmlnYXRpbmcgPSBmYWxzZTsgLy8gRmxhZyB0byBwcmV2ZW50IGFjY2lkZW50YWwgY2xpY2tzIGR1cmluZyBuYXZpZ2F0aW9uXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgY2Fyb3VzZWwgZGlzcGxheSBiYXNlZCBvbiBjdXJyZW50IGluZGV4XHJcbiAgICAgKiBBcHBsaWVzIENTUyBjbGFzc2VzIHRvIHBvc2l0aW9uIGNhcmRzIGFwcHJvcHJpYXRlbHlcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgLy8gUmVzZXQgYWxsIHBvc2l0aW9uIGNsYXNzZXNcclxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjZW50ZXInLCAnbGVmdCcsICdyaWdodCcsICdiYWNrLWxlZnQnLCAnYmFjay1yaWdodCcsICdmYXItYmFjay1sZWZ0JywgJ2Zhci1iYWNrLXJpZ2h0JywgJ2hpZGRlbicsICdoaWRkZW4tcmlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgcmVsYXRpdmVQb3MgPSBpbmRleCAtIGN1cnJlbnRJbmRleDtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBjaXJjdWxhciB3cmFwYXJvdW5kXHJcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZVBvcyA+IGNhcmRzLmxlbmd0aCAvIDIpIHtcclxuICAgICAgICAgICAgICAgIHJlbGF0aXZlUG9zIC09IGNhcmRzLmxlbmd0aDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWxhdGl2ZVBvcyA8IC1jYXJkcy5sZW5ndGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVBvcyArPSBjYXJkcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiBwb3NpdGlvbiBjbGFzc2VzXHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVsYXRpdmVQb3MpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIC0yOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnYmFjay1sZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdiYWNrLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIC0zOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZmFyLWJhY2stbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZmFyLWJhY2stcmlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlUG9zIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3IgZG90c1xyXG4gICAgICAgIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYXZpZ2F0ZSB0byBhIHNwZWNpZmljIHNsaWRlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHNsaWRlIHRvIG5hdmlnYXRlIHRvXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdvVG9TbGlkZShpbmRleCkge1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgY2FyZHMubGVuZ3RoICYmIGluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNhcm91c2VsKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmV2ZW50IGNsaWNrcyBkdXJpbmcgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIGlzTmF2aWdhdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXNOYXZpZ2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgaW5kaWNhdG9yIGRvdHNcclxuICAgIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZ29Ub1NsaWRlKGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgbmF2aWdhdGlvbiBidXR0b25zXHJcbiAgICBpZiAocHJldkJ0bikge1xyXG4gICAgICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gMCA/IGNhcmRzLmxlbmd0aCAtIDEgOiBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBnb1RvU2xpZGUocHJldkluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV4dEJ0bikge1xyXG4gICAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gY2FyZHMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBnb1RvU2xpZGUobmV4dEluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCbG9jayBsaW5rcyBvbiBub24tY2VudGVyIGNhcmRzXHJcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBjYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl0nKTtcclxuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgbmF2aWdhdGlvbiBvbiBub24tY2VudGVyIGNhcmRzXHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZW50ZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYXJkIGNsaWNrIGhhbmRsaW5nXHJcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBBbGxvdyB2aWV3IGJ1dHRvbiB0byB3b3JrXHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmlld0J0biA9IGNsaWNrZWRFbGVtZW50LmNsb3Nlc3QoJy52aWV3LWJ0bicpO1xyXG4gICAgICAgICAgICBpZiAoaXNWaWV3QnRuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFByZXZlbnQgb3RoZXIgaW50ZXJhY3Rpb25zXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElnbm9yZSBjbGlja3MgZHVyaW5nIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKGlzTmF2aWdhdGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBOYXZpZ2F0ZSB0byBjYXJkIGlmIG5vdCBjZW50ZXJcclxuICAgICAgICAgICAgaWYgKCFjYXJkLmNsYXNzTGlzdC5jb250YWlucygnY2VudGVyJykpIHtcclxuICAgICAgICAgICAgICAgIGdvVG9TbGlkZShpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJldkluZGV4ID0gY3VycmVudEluZGV4ID09PSAwID8gY2FyZHMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIGdvVG9TbGlkZShwcmV2SW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggPT09IGNhcmRzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgZ29Ub1NsaWRlKG5leHRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVG91Y2ggc3dpcGUgaGFuZGxpbmcgZm9yIG1vYmlsZVxyXG4gICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcclxuICAgIGxldCB0b3VjaEVuZFggPSAwO1xyXG5cclxuICAgIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHRvdWNoU3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcclxuICAgICAgICB0b3VjaEVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XHJcbiAgICAgICAgaGFuZGxlU3dpcGUoKTtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBzd2lwZSBnZXN0dXJlc1xyXG4gICAgICogTGVmdCBzd2lwZTogbmV4dCBhbmltYWxcclxuICAgICAqIFJpZ2h0IHN3aXBlOiBwcmV2aW91cyBhbmltYWxcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3dpcGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc3dpcGVUaHJlc2hvbGQgPSA1MDsgLy8gTWluaW11bSBkaXN0YW5jZSB0byByZWdpc3RlciBhcyBzd2lwZVxyXG4gICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWDtcclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gc3dpcGVUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTd2lwZSBsZWZ0ID0gbmV4dCBhbmltYWxcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gY2FyZHMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgZ29Ub1NsaWRlKG5leHRJbmRleCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTd2lwZSByaWdodCA9IHByZXZpb3VzIGFuaW1hbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkluZGV4ID0gY3VycmVudEluZGV4ID09PSAwID8gY2FyZHMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICBnb1RvU2xpZGUocHJldkluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXplIGNhcm91c2VsXHJcbiAgICB1cGRhdGVDYXJvdXNlbCgpO1xyXG59IiwiLyoqXHJcbiAqIEFuaW1hbHMgTW9kdWxlXHJcbiAqIE1haW4gZW50cnkgcG9pbnQgZm9yIGFuaW1hbC1yZWxhdGVkIGZ1bmN0aW9uYWxpdHlcclxuICovXHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplRmF2b3JpdGVCdXR0b25zLCBhZGRGYXZvcml0ZSwgcmVtb3ZlRmF2b3JpdGUgfSBmcm9tICcuL21vZHVsZXMvZmF2b3JpdGVzLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9ub3RpZmljYXRpb25zLmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZVRvb2x0aXBzIH0gZnJvbSAnLi9tb2R1bGVzL3Rvb2x0aXBzLmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFuaW1hbENhcmRzLCBpbml0aWFsaXplU2VlTW9yZUJ1dHRvbnMgfSBmcm9tICcuL21vZHVsZXMvYW5pbWFsQ2FyZHMuanMnO1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYWxsIGFuaW1hbHMgcGFnZSBmdW5jdGlvbmFsaXR5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFuaW1hbHMoKSB7XHJcbiAgICAvLyBJbml0aWFsaXplIGZhdm9yaXRlIGJ1dHRvbnNcclxuICAgIGluaXRpYWxpemVGYXZvcml0ZUJ1dHRvbnMoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIGFuaW1hbCBjYXJkcyBpbnRlcmFjdGlvbnNcclxuICAgIGluaXRpYWxpemVBbmltYWxDYXJkcygpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgc2VlIG1vcmUgYnV0dG9uc1xyXG4gICAgaW5pdGlhbGl6ZVNlZU1vcmVCdXR0b25zKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0b29sdGlwc1xyXG4gICAgaW5pdGlhbGl6ZVRvb2x0aXBzKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHBvcnQgZnVuY3Rpb25zIGZvciBleHRlcm5hbCB1c2VcclxuICovXHJcbmV4cG9ydCB7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uLFxyXG4gICAgYWRkRmF2b3JpdGUsXHJcbiAgICByZW1vdmVGYXZvcml0ZSxcclxuICAgIGluaXRpYWxpemVUb29sdGlwc1xyXG59O1xyXG5cclxuLy8gQWxzbyBtYWtlIGF2YWlsYWJsZSBnbG9iYWxseSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG53aW5kb3cuQW5pbWFsQ2FyZHMgPSB7XHJcbiAgICBhZGRGYXZvcml0ZSxcclxuICAgIHJlbW92ZUZhdm9yaXRlLFxyXG4gICAgc2hvd05vdGlmaWNhdGlvbixcclxuICAgIGluaXRpYWxpemVUb29sdGlwc1xyXG59O1xyXG4iLCIvKipcclxuICogQXV0aGVudGljYXRpb24gTW9kdWxlXHJcbiAqIEhhbmRsZXMgYXV0aCBwYW5lbCBzd2l0Y2hpbmcsIGFuaW1hdGlvbnMsIGFuZCBmb3JtIGludGVyYWN0aW9uc1xyXG4gKi9cclxuXHJcbi8vIEltcG9ydCBzaGFyZWQgdXRpbGl0aWVzXHJcbmltcG9ydCB7IGluaXRpYWxpemVGaWxlSW5wdXREaXNwbGF5IH0gZnJvbSAnLi91dGlscy9maWxlLWlucHV0LWRpc3BsYXkuanMnO1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYXV0aGVudGljYXRpb24gVUlcclxuICogU2V0cyB1cCBzaWduIHVwL3NpZ24gaW4gcGFuZWwgc3dpdGNoaW5nLCBhbmltYXRpb25zLCBhbmQgZmxvYXRpbmcgbGFiZWwgZWZmZWN0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBdXRoKCkge1xyXG4gICAgY29uc3QgYXV0aFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aFdyYXBwZXInKTtcclxuXHJcbiAgICAvLyBJZiBub3Qgb24gYXV0aCBwYWdlLCBza2lwIGluaXRpYWxpemF0aW9uXHJcbiAgICBpZiAoIWF1dGhXcmFwcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZ25VcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xyXG4gICAgY29uc3Qgc2lnbkluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tYnRuJyk7XHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5Gb3JtJyk7XHJcbiAgICBjb25zdCByZWdpc3RlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJGb3JtJyk7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gc3dpdGNoIHRvIHNpZ24gdXAgbW9kZVxyXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9TaWduVXAoKSB7XHJcbiAgICAgICAgYXV0aFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2lnbi11cC1tb2RlJyk7XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGUgbG9naW4gcGFuZWwgZWxlbWVudHMgZmFkaW5nIG91dFxyXG4gICAgICAgIGNvbnN0IGxvZ2luQW5pbWF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2dpbi1wYW5lbCAuYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgbG9naW5BbmltYXRpb25zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5hbmltYXRpb24gPSBgZmFkZU91dCAwLjZzIGVhc2UtaW4tb3V0ICR7aW5kZXggKiAwLjF9cyBmb3J3YXJkc2A7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGUgcmVnaXN0ZXIgcGFuZWwgZWxlbWVudHMgZmFkaW5nIGluXHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJBbmltYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLXBhbmVsIC5hbmltYXRpb24nKTtcclxuICAgICAgICByZWdpc3RlckFuaW1hdGlvbnMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uID0gYGFuaW1hdGUyIDAuNnMgZWFzZS1pbi1vdXQgJHtpbmRleCAqIDAuMX1zIGZvcndhcmRzYDtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBzd2l0Y2ggdG8gc2lnbiBpbiBtb2RlXHJcbiAgICBmdW5jdGlvbiBzd2l0Y2hUb1NpZ25JbigpIHtcclxuICAgICAgICBhdXRoV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzaWduLXVwLW1vZGUnKTtcclxuXHJcbiAgICAgICAgLy8gQW5pbWF0ZSByZWdpc3RlciBwYW5lbCBlbGVtZW50cyBmYWRpbmcgb3V0XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJBbmltYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLXBhbmVsIC5hbmltYXRpb24nKTtcclxuICAgICAgICByZWdpc3RlckFuaW1hdGlvbnMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9IGBmYWRlT3V0IDAuNnMgZWFzZS1pbi1vdXQgJHtpbmRleCAqIDAuMX1zIGZvcndhcmRzYDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQW5pbWF0ZSBsb2dpbiBwYW5lbCBlbGVtZW50cyBmYWRpbmcgaW5cclxuICAgICAgICBjb25zdCBsb2dpbkFuaW1hdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubG9naW4tcGFuZWwgLmFuaW1hdGlvbicpO1xyXG4gICAgICAgIGxvZ2luQW5pbWF0aW9ucy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5hbmltYXRpb24gPSBgYW5pbWF0ZSAwLjZzIGVhc2UtaW4tb3V0ICR7aW5kZXggKiAwLjF9cyBmb3J3YXJkc2A7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0YWNoIGJ1dHRvbiBjbGljayBoYW5kbGVyc1xyXG4gICAgaWYgKHNpZ25VcEJ0bikge1xyXG4gICAgICAgIHNpZ25VcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvU2lnblVwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2lnbkluQnRuKSB7XHJcbiAgICAgICAgc2lnbkluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVG9TaWduSW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuaW1hdGlvbiBvbiBpbml0aWFsIHBhZ2UgbG9hZFxyXG4gICAgZnVuY3Rpb24gaW5pdEFuaW1hdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgbG9naW5BbmltYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxvZ2luLXBhbmVsIC5hbmltYXRpb24nKTtcclxuICAgICAgICBjb25zdCBpbmZvQW5pbWF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvLXBhbmVsIC5hbmltYXRpb24nKTtcclxuXHJcbiAgICAgICAgbG9naW5BbmltYXRpb25zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9IGBhbmltYXRlIDAuNnMgZWFzZS1pbi1vdXQgZm9yd2FyZHNgO1xyXG4gICAgICAgICAgICB9LCBpbmRleCAqIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGluZm9BbmltYXRpb25zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9IGBhbmltYXRlIDAuNnMgZWFzZS1pbi1vdXQgZm9yd2FyZHNgO1xyXG4gICAgICAgICAgICB9LCBpbmRleCAqIDEwMCArIDIwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGVycm9ycyBpbiB0aGUgcmVnaXN0ZXIgZm9ybSBhbmQgc3dpdGNoIHRvIHNpZ24tdXAgbW9kZVxyXG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtRXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLXBhbmVsIC5mb3JtLWVycm9yJyk7XHJcbiAgICBpZiAocmVnaXN0ZXJGb3JtRXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBTd2l0Y2ggdG8gc2lnbi11cCBwYW5lbCBpZiB0aGVyZSBhcmUgcmVnaXN0cmF0aW9uIGVycm9yc1xyXG4gICAgICAgIHN3aXRjaFRvU2lnblVwKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgYW5pbWF0aW9ucyBub3JtYWxseSAobG9naW4gcGFuZWwgYnkgZGVmYXVsdClcclxuICAgICAgICBpbml0QW5pbWF0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZsb2F0aW5nIGxhYmVsIGVmZmVjdCBmb3IgZm9ybSBpbnB1dHNcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ib3ggaW5wdXQnKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiBmaWVsZCBoYXMgdmFsdWUgb24gbG9hZFxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdoYXMtdmFsdWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdmFsdWUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy12YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDb25kaXRpb25hbCBkaXNwbGF5IG9mIGFzc29jaWF0aW9uIGZpZWxkc1xyXG4gICAgY29uc3QgYXNzb2NpYXRpb25SYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicmVnaXN0ZXJfZm9ybVthc3NvY2lhdGlvbl9jaG9pY2VdXCJdJyk7XHJcbiAgICBjb25zdCBleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzc29jaWF0aW9uLXNlbGVjdCcpO1xyXG4gICAgY29uc3QgbmV3QXNzb2NpYXRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctYXNzb2NpYXRpb24tZmllbGQnKTtcclxuXHJcbiAgICBpZiAoYXNzb2NpYXRpb25SYWRpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGFzc29jaWF0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYWxsIGZpZWxkcyBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdBc3NvY2lhdGlvblNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuZXdBc3NvY2lhdGlvbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXNzb2NpYXRpb25GaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0Fzc29jaWF0aW9uRmllbGQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNob3cgYXBwcm9wcmlhdGUgZmllbGQgYmFzZWQgb24gc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ2pvaW4nICYmIGV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3Quc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFZhbHVlID09PSAnY3JlYXRlJyAmJiBuZXdBc3NvY2lhdGlvbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXNzb2NpYXRpb25GaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBuZXdBc3NvY2lhdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBmaWxlIGlucHV0IGRpc3BsYXkgZm9yIHByb2ZpbGUgaW1hZ2VcclxuICAgIGluaXRpYWxpemVGaWxlSW5wdXREaXNwbGF5KCcjcmVnaXN0ZXJfaW1hZ2VGaWxlX2ZpbGUnLCAnI2ZpbGUtbmFtZS1kaXNwbGF5Jyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmplY3QgQ1NTIGFuaW1hdGlvbnMgZm9yIGF1dGggbW9kdWxlXHJcbiAqIFNob3VsZCBiZSBjYWxsZWQgb25jZSB0byBhZGQgZmFkZSBvdXQgYW5pbWF0aW9uIHRvIGRvY3VtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBpbmplY3RBdXRoU3R5bGVzKCkge1xyXG4gICAgY29uc3Qgc3R5bGVJZCA9ICdhdXRoLWZhZGVvdXQtc3R5bGVzJztcclxuXHJcbiAgICAvLyBPbmx5IGluamVjdCBvbmNlXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgc3R5bGUuaWQgPSBzdHlsZUlkO1xyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXHJcbiAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBgO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxuXHJcbi8vIEluamVjdCBzdHlsZXMgd2hlbiBtb2R1bGUgbG9hZHNcclxuaW5qZWN0QXV0aFN0eWxlcygpOyIsIi8vIENhcnJvdXNlbCBiYW5uacOocmUgYXV0b21hdGlxdWUgdG91dGVzIGxlcyA1IHNlY29uZGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtc2xpZGUnKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGxldCBhdXRvU2xpZGVJbnRlcnZhbCA9IG51bGw7XHJcblxyXG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2xpZGUoaW5kZXgpIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHNsaWRlc1xyXG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IHNsaWRlXHJcbiAgICAgICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gKGN1cnJlbnRTbGlkZSArIDEpICUgc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICBzaG93U2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydEF1dG9TbGlkZSgpIHtcclxuICAgICAgICAvLyBGb3JjZSBzdG9wIGFueSBleGlzdGluZyBpbnRlcnZhbFxyXG4gICAgICAgIGlmIChhdXRvU2xpZGVJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGF1dG9TbGlkZUludGVydmFsKTtcclxuICAgICAgICAgICAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgZmlyc3Qgc2xpZGUgYW5kIHN0YXJ0IGF1dG8tc2xpZGVcclxuICAgIHNob3dTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgc3RhcnRBdXRvU2xpZGUoKTtcclxufSIsIi8qUmVwb25kcmUgYXV4IGNvbW1lbnRhaXJlcyovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQ29tbWVudFJlcGx5KCkge1xyXG4gICAgY29uc3QgcmVwbHlUb2dnbGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlLXJlcGx5XScpO1xyXG5cclxuICAgIHJlcGx5VG9nZ2xlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRJZCA9IHRoaXMuZGF0YXNldC50b2dnbGVSZXBseTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBseS1mb3JtLScgKyBjb21tZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0pIHtcclxuICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBmb3JtIHZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IGZvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyogQ29udGFjdCBtb2R1bGUgKi9cclxuXHJcbi8vIEltcG9ydCBub3RpZmljYXRpb24gZnVuY3Rpb24gZnJvbSBub3RpZmljYXRpb25zIG1vZHVsZVxyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb250YWN0TW9kYWwoKSB7XHJcbiAgICAvLyBJbml0aWFsaXplIGNvbnRhY3QgYnV0dG9uIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdC1idG4nKTtcclxuXHJcbiAgICBjb250YWN0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbmltYWxJZCA9IHRoaXMuZGF0YXNldC5hbmltYWxJZDtcclxuICAgICAgICAgICAgY29uc3QgYXNzb2NpYXRpb25JZCA9IHRoaXMuZGF0YXNldC5hc3NvY2lhdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFuaW1hbElkKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGFjdE1vZGFsKGAvY29udGFjdC9hbmltYWwvJHthbmltYWxJZH1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhc3NvY2lhdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGFjdE1vZGFsKGAvY29udGFjdC9hc3NvY2lhdGlvbi8ke2Fzc29jaWF0aW9uSWR9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZW5lcmFsIGNvbnRhY3QgZm9ybVxyXG4gICAgICAgICAgICAgICAgb3BlbkNvbnRhY3RNb2RhbCgnL2NvbnRhY3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Db250YWN0TW9kYWwodXJsKSB7XHJcbiAgICAvLyBDcsOpZXIgbGEgbW9kYWxlXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWwuY2xhc3NOYW1lID0gJ2NvbnRhY3QtbW9kYWwtb3ZlcmxheSc7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtbW9kYWxcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRhY3QtbW9kYWwtY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LW1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+IENoYXJnZW1lbnQuLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgLy8gQ2hhcmdlciBsZSBmb3JtdWxhaXJlXHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgIC50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1tb2RhbC1ib2R5Jyk7XHJcbiAgICAgICAgICAgIG1vZGFsQm9keS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZXIgbGUgZm9ybXVsYWlyZVxyXG4gICAgICAgICAgICBpbml0aWFsaXplQ29udGFjdEZvcm0obW9kYWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBmb3JtdWxhaXJlJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGNsb3NlQ29udGFjdE1vZGFsKG1vZGFsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvLyDDiXbDqW5lbWVudHMgZGUgZmVybWV0dXJlXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LW1vZGFsLWNsb3NlJyk7XHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlQ29udGFjdE1vZGFsKG1vZGFsKSk7XHJcblxyXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgY2xvc2VDb250YWN0TW9kYWwobW9kYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZlcm1ldHVyZSBhdmVjIEVzY2FwZVxyXG4gICAgY29uc3QgZXNjYXBlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICBjbG9zZUNvbnRhY3RNb2RhbChtb2RhbCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUNvbnRhY3RNb2RhbChtb2RhbCkge1xyXG4gICAgbW9kYWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgIH0sIDMwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVDb250YWN0Rm9ybShtb2RhbCkge1xyXG4gICAgY29uc3QgZm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWZvcm0tYWpheCcpO1xyXG5cclxuICAgIGlmICghZm9ybSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmJ0bi1zdWJtaXQtY29udGFjdCcpO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IHN1Ym1pdEJ0bi5pbm5lckhUTUw7XHJcbiAgICAgICAgc3VibWl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4gRW52b2kgZW4gY291cnMuLi4nO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgICAgICAgZmV0Y2goZm9ybS5hY3Rpb24sIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKGRhdGEubWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlQ29udGFjdE1vZGFsKG1vZGFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oZGF0YS5tZXNzYWdlLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9IG9yaWdpbmFsVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZGUgbFxcJ2Vudm9pIGR1IG1lc3NhZ2UnLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgc3VibWl0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSBvcmlnaW5hbFRleHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbndpbmRvdy5Db250YWN0TW9kYWwgPSB7XHJcbiAgICBvcGVuOiBvcGVuQ29udGFjdE1vZGFsLFxyXG4gICAgY2xvc2U6IGNsb3NlQ29udGFjdE1vZGFsLFxyXG4gICAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZUNvbnRhY3RNb2RhbFxyXG59O1xyXG4iLCIvKiBGb3JtdWxhaXJlIGQnYWRow6lzaW9uKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVKb2luRm9ybSgpIHtcclxuICAgIGNvbnN0IGFzc29jaWF0aW9uUmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImFzc29jaWF0aW9uX2lkXCJdJyk7XHJcbiAgICBjb25zdCBqb2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvaW5CdG4nKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBleGlzdFxyXG4gICAgaWYgKGFzc29jaWF0aW9uUmFkaW9zLmxlbmd0aCA9PT0gMCB8fCAham9pbkJ0bikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbmFibGUgYnV0dG9uIHdoZW4gYSByYWRpbyBpcyBzZWxlY3RlZFxyXG4gICAgYXNzb2NpYXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGpvaW5CdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qIE1vYmlsZSBBY3Rpb24gTWVudSBNb2R1bGUgKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTW9iaWxlQWN0aW9uTWVudSgpIHtcclxuICAgIGNvbnN0IG1vYmlsZUFjdGlvblRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVBY3Rpb25Ub2dnbGUnKTtcclxuICAgIGNvbnN0IG1vYmlsZUFjdGlvbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlQWN0aW9uTWVudScpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIG1vYmlsZSBhY3Rpb24gbWVudSBleGlzdHNcclxuICAgIGlmICghbW9iaWxlQWN0aW9uVG9nZ2xlIHx8ICFtb2JpbGVBY3Rpb25NZW51KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIG1vYmlsZSBhY3Rpb24gbWVudSBvcGVuL2Nsb3NlZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNb2JpbGVBY3Rpb25NZW51KCkge1xyXG4gICAgICAgIG1vYmlsZUFjdGlvblRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBtb2JpbGVBY3Rpb25NZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgbW9iaWxlIGFjdGlvbiBtZW51XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9iaWxlQWN0aW9uTWVudSgpIHtcclxuICAgICAgICBtb2JpbGVBY3Rpb25Ub2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgbW9iaWxlQWN0aW9uTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2dnbGUgbWVudSBvbiBidXR0b24gY2xpY2tcclxuICAgIG1vYmlsZUFjdGlvblRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vYmlsZUFjdGlvbk1lbnUpO1xyXG5cclxuICAgIC8vIENsb3NlIG1lbnUgd2hlbiBjbGlja2luZyBvbiBhIGxpbmsgaW5zaWRlXHJcbiAgICBjb25zdCBtb2JpbGVBY3Rpb25MaW5rcyA9IG1vYmlsZUFjdGlvbk1lbnUucXVlcnlTZWxlY3RvckFsbCgnLm1vYmlsZS1hY3Rpb24tbGluaycpO1xyXG4gICAgbW9iaWxlQWN0aW9uTGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2JpbGVBY3Rpb25NZW51KTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qIE1vYmlsZSBNZW51IE1vZHVsZSAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNb2JpbGVNZW51KCkge1xyXG4gICAgY29uc3QgYnVyZ2VyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlclRvZ2dsZScpO1xyXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVNZW51Jyk7XHJcbiAgICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNZW51Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1vdmVybGF5Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2JpbGUtbmF2LWxpbmtzIGEsIC5tb2JpbGUtYXV0aC1saW5rJyk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgZXhpc3RcclxuICAgIGlmICghYnVyZ2VyVG9nZ2xlIHx8ICFtb2JpbGVNZW51KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbk1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uTWVudVRvZ2dsZScpO1xyXG4gICAgY29uc3QgYWN0aW9uTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb25NZW51Jyk7XHJcblxyXG4gICAgLy9Ub2dnbGUgbW9iaWxlIG1lbnUgb3Blbi9jbG9zZWRcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gICAgICAgIGJ1cmdlclRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyAnaGlkZGVuJyA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ2xvc2UgbW9iaWxlIG1lbnVcclxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudUhhbmRsZXIoKSB7XHJcbiAgICAgICAgYnVyZ2VyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIGNsb3NlQWN0aW9uTWVudSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL1RvZ2dsZSBhY3Rpb24gbWVudSAodXNlciBkcm9wZG93bilcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVBY3Rpb25NZW51KCkge1xyXG4gICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnVUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0Nsb3NlIGFjdGlvbiBtZW51XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VBY3Rpb25NZW51KCkge1xyXG4gICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnVUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgZm9yIGJ1cmdlciBtZW51XHJcbiAgICBidXJnZXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51KTtcclxuXHJcbiAgICBpZiAoY2xvc2VNZW51KSB7XHJcbiAgICAgICAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vYmlsZU1lbnVPdmVybGF5KSB7XHJcbiAgICAgICAgbW9iaWxlTWVudU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnVIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDbG9zZSBtZW51IHdoZW4gY2xpY2tpbmcgb24gYSBsaW5rXHJcbiAgICBtb2JpbGVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnVIYW5kbGVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFjdGlvbiBtZW51IC0gaG92ZXIgYmVoYXZpb3Igd2l0aCBkZWxheVxyXG4gICAgY29uc3QgYWN0aW9uTWVudVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLW1lbnUtd3JhcHBlcicpO1xyXG4gICAgbGV0IGNsb3NlTWVudVRpbWVvdXQ7XHJcblxyXG4gICAgaWYgKGFjdGlvbk1lbnVXcmFwcGVyKSB7XHJcbiAgICAgICAgYWN0aW9uTWVudVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY2xvc2VNZW51VGltZW91dCk7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25NZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTWVudVRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhY3Rpb25NZW51V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VBY3Rpb25NZW51KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGFjdGlvbiBtZW51IHdoZW4gY2xpY2tpbmcgb24gYSBsaW5rIGluc2lkZVxyXG4gICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnUucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VBY3Rpb25NZW51KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG5BbmltYWwgQ2FyZHMgTW9kdWxlXHJcbkhhbmRsZXMgYW5pbWFsIGNhcmQgaW50ZXJhY3Rpb25zIGFuZCBuYXZpZ2F0aW9uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBbmltYWxDYXJkcygpIHtcclxuICAgIGNvbnN0IGFuaW1hbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hbC1jYXJkJyk7XHJcblxyXG4gICAgYW5pbWFsQ2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAvLyBEb24ndCBhZGQgY2xpY2sgbmF2aWdhdGlvbiBmb3IgY2Fyb3VzZWwgY2FyZHMgLSBjYXJvdXNlbCBoYW5kbGVzIHRoZWlyIGludGVyYWN0aW9uXHJcbiAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbC1jYXJkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGNsaWNrIGhhbmRsZXIgZm9yIGdyaWQgY2FyZHMgKGV4Y2x1ZGluZyBidXR0b25zKVxyXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IHRyaWdnZXIgaWYgY2xpY2tpbmcgb24gYnV0dG9ucyBvciB0aGVpciBjaGlsZHJlblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmFjdGlvbi1idG4nKSB8fFxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnNlZS1tb3JlLWJ0bicpIHx8XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcuY2FyZC1hY3Rpb25zJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gR2V0IGFuaW1hbCBJRCBhbmQgcmVkaXJlY3QgdG8gZGV0YWlsIHBhZ2VcclxuICAgICAgICAgICAgY29uc3QgYW5pbWFsSWQgPSB0aGlzLmRhdGFzZXQuYW5pbWFsSWQ7XHJcbiAgICAgICAgICAgIGlmIChhbmltYWxJZCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2FuaW1hbHMvJHthbmltYWxJZH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBob3ZlciBlZmZlY3RzXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWltYWdlIGltZycpO1xyXG4gICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjA1KSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVTZWVNb3JlQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IHNlZU1vcmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlZS1tb3JlLWJ0bicpO1xyXG5cclxuICAgIHNlZU1vcmVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hbElkID0gdGhpcy5kYXRhc2V0LmFuaW1hbElkO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gYW5pbWFsIGRldGFpbCBwYWdlXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9hbmltYWxzLyR7YW5pbWFsSWR9YDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qQWpvdXQgZGFucyBsZXMgZmF2b3JpcyovXHJcblxyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLmpzJztcclxuXHJcbi8vIEZsYWcgdG8gcHJldmVudCBtdWx0aXBsZSBpbml0aWFsaXphdGlvbnNcclxubGV0IGZhdm9yaXRlc0luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRmF2b3JpdGUoYW5pbWFsSWQpIHtcclxuICAgIGNvbnNvbGUubG9nKGBbRkFWT1JJVEUtQVBJXSBQT1NUIC9hcGkvZmF2b3JpdGVzIHdpdGggYW5pbWFsSWQ6ICR7YW5pbWFsSWR9YCk7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvZmF2b3JpdGVzJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFuaW1hbElkOiBhbmltYWxJZCB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW0ZBVk9SSVRFLUFQSV0gUmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbRkFWT1JJVEUtQVBJXSBSZXNwb25zZSBkYXRhOmAsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cywgZGF0YSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh7IHN0YXR1cywgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKCdBam91dMOpIGF1eCBmYXZvcmlzICEnLCAnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtGQVZPUklURS1BUEldIEFQSSByZXR1cm5lZCBzdWNjZXNzPWZhbHNlOiAke2RhdGEubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihkYXRhLm1lc3NhZ2UgfHwgJ0VycmV1ciBsb3JzIGRlIGxcXCdham91dCBhdXggZmF2b3JpcycsICdlcnJvcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgW0ZBVk9SSVRFLUFQSV0gRmV0Y2ggZXJyb3I6YCwgZXJyb3IpO1xyXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oJ1ZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpIHBvdXIgYWpvdXRlciB1biBhbmltYWwgw6Agdm9zIGZhdm9yaXMnLCAnZXJyb3InKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLypSZXRyYWl0IGRlcyBmYXZvcmlzICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYXZvcml0ZShhbmltYWxJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAvYXBpL2Zhdm9yaXRlcy8ke2FuaW1hbElkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignUmV0aXLDqSBkZXMgZmF2b3JpcycsICdpbmZvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oZGF0YS5tZXNzYWdlIHx8ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbicsICdlcnJvcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24nLCAnZXJyb3InKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gTWFwIHRvIHRyYWNrIGxhc3QgY2xpY2sgdGltZSBwZXIgYnV0dG9uXHJcbmNvbnN0IGxhc3RDbGlja1RpbWVzID0gbmV3IE1hcCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVGYXZvcml0ZUJ1dHRvbnMoKSB7XHJcbiAgICAvLyBQcmV2ZW50IG11bHRpcGxlIGluaXRpYWxpemF0aW9uc1xyXG4gICAgaWYgKGZhdm9yaXRlc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tGQVZPUklURV0gQWxyZWFkeSBpbml0aWFsaXplZCwgc2tpcHBpbmcnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmYXZvcml0ZXNJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgLy8gVXNlIGV2ZW50IGRlbGVnYXRpb24gb24gZG9jdW1lbnQgdG8gYXZvaWQgbXVsdGlwbGUgbGlzdGVuZXJzXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcuZmF2b3JpdGUtYnRuJyk7XHJcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gRGVib3VuY2U6IElnbm9yZSBjbGlja3Mgd2l0aGluIDUwMG1zIG9mIHRoZSBsYXN0IGNsaWNrIG9uIHRoaXMgYnV0dG9uXHJcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjb25zdCBsYXN0Q2xpY2sgPSBsYXN0Q2xpY2tUaW1lcy5nZXQoYnV0dG9uKSB8fCAwO1xyXG4gICAgICAgIGlmIChub3cgLSBsYXN0Q2xpY2sgPCA1MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtGQVZPUklURV0gRGVib3VuY2VkIGNsaWNrIC0gdG9vIGZhc3RgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0Q2xpY2tUaW1lcy5zZXQoYnV0dG9uLCBub3cpO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYWxJZCA9IGJ1dHRvbi5kYXRhc2V0LmFuaW1hbElkO1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0SWNvbiA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpJyk7XHJcbiAgICAgICAgY29uc3Qgd2FzRmF2b3JpdGVkID0gYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGVkJyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbRkFWT1JJVEVdIENsaWNrIG9uIGFuaW1hbCAke2FuaW1hbElkfSwgd2FzRmF2b3JpdGVkOiAke3dhc0Zhdm9yaXRlZH1gKTtcclxuXHJcbiAgICAgICAgLy8gRGlzYWJsZSBidXR0b24gZHVyaW5nIEFQSSBjYWxsXHJcbiAgICAgICAgaWYgKGJ1dHRvbi5kaXNhYmxlZCB8fCBidXR0b24uZGF0YXNldC5wcm9jZXNzaW5nID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtGQVZPUklURV0gQnV0dG9uIGFscmVhZHkgcHJvY2Vzc2luZywgaWdub3JpbmcgY2xpY2tgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGJ1dHRvbi5kYXRhc2V0LnByb2Nlc3NpbmcgPSAndHJ1ZSc7XHJcblxyXG4gICAgICAgIC8vIFRvZ2dsZSBmYXZvcml0ZSBzdGF0ZVxyXG4gICAgICAgIGlmICh3YXNGYXZvcml0ZWQpIHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gZmF2b3JpdGVzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbRkFWT1JJVEVdIFJlbW92aW5nIGFuaW1hbCAke2FuaW1hbElkfSBmcm9tIGZhdm9yaXRlc2ApO1xyXG4gICAgICAgICAgICByZW1vdmVGYXZvcml0ZShhbmltYWxJZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXZvcml0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhcnRJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFydEljb24uY2xhc3NMaXN0LmFkZCgnZmFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi50aXRsZSA9ICdBam91dGVyIGF1eCBmYXZvcmlzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kYXRhc2V0LnByb2Nlc3NpbmcgPSAnZmFsc2UnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQWRkIHRvIGZhdm9yaXRlc1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW0ZBVk9SSVRFXSBBZGRpbmcgYW5pbWFsICR7YW5pbWFsSWR9IHRvIGZhdm9yaXRlc2ApO1xyXG4gICAgICAgICAgICBhZGRGYXZvcml0ZShhbmltYWxJZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhcnRJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFydEljb24uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi50aXRsZSA9ICdSZXRpcmVyIGRlcyBmYXZvcmlzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kYXRhc2V0LnByb2Nlc3NpbmcgPSAnZmFsc2UnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgYW5pbWF0aW9uXHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjIpJztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKiBNb2R1bGUgZGUgbm90aWZpY2F0aW9ucyAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykge1xyXG4gICAgLy8gUmVtb3ZlIGV4aXN0aW5nIG5vdGlmaWNhdGlvbnNcclxuICAgIGNvbnN0IGV4aXN0aW5nTm90aWZpY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RpZmljYXRpb24nKTtcclxuICAgIGV4aXN0aW5nTm90aWZpY2F0aW9ucy5mb3JFYWNoKG5vdGlmID0+IG5vdGlmLnJlbW92ZSgpKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgbm90aWZpY2F0aW9uIGVsZW1lbnRcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IGBub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLSR7dHlwZX1gO1xyXG4gICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuXHJcbiAgICAvLyBEZWZpbmUgY29sb3JzIGJhc2VkIG9uIHR5cGVcclxuICAgIGNvbnN0IGNvbG9ycyA9IHtcclxuICAgICAgICBzdWNjZXNzOiAnIzEwQjk4MScsXHJcbiAgICAgICAgZXJyb3I6ICcjRUY0NDQ0JyxcclxuICAgICAgICBpbmZvOiAnIzNCODJGNicsXHJcbiAgICAgICAgd2FybmluZzogJyNGNTlFMEInXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFN0eWxlIHRoZSBub3RpZmljYXRpb25cclxuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnNbdHlwZV0gfHwgY29sb3JzLmluZm99O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgMC4zcyBlYXNlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYDtcclxuXHJcbiAgICAvLyBBZGQgYW5pbWF0aW9uIHN0eWxlcyBpZiBub3QgYWxyZWFkeSBwcmVzZW50XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmljYXRpb24tc3R5bGVzJykpIHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgc3R5bGUuaWQgPSAnbm90aWZpY2F0aW9uLXN0eWxlcyc7XHJcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlT3V0UmlnaHQge1xyXG4gICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCB0byBwYWdlXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGFmdGVyIDQgc2Vjb25kc1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLnN0eWxlLmFuaW1hdGlvbiA9ICdzbGlkZU91dFJpZ2h0IDAuM3MgZWFzZSc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24ucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm90aWZpY2F0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9LCA0MDAwKTtcclxufVxyXG4iLCIvKlRvb2x0aXBzIE1vZHVsZSovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRvb2x0aXBzKCkge1xyXG4gICAgY29uc3QgdGFnc1dpdGhUb29sdGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWdbZGF0YS10b29sdGlwXSwgLnRhZy1taW5pW2RhdGEtdG9vbHRpcF0nKTtcclxuXHJcbiAgICB0YWdzV2l0aFRvb2x0aXBzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAvLyBBZGQgaG92ZXIgZXZlbnRzIGZvciBiZXR0ZXIgdG9vbHRpcCBwb3NpdGlvbmluZ1xyXG4gICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcpO1xyXG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUG9zaXRpb24gdG9vbHRpcCB0byBhdm9pZCB2aWV3cG9ydCBvdmVyZmxvd1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b29sdGlwRWxlbWVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IHRvb2x0aXAgcG9zaXRpb24gaWYgbmVhciB2aWV3cG9ydCBlZGdlc1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHNldWRvRWxlbWVudCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRvb2x0aXBFbGVtZW50LCAnOjpiZWZvcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjdC5sZWZ0IDwgMTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRvb2x0aXAtYWxpZ24nLCAnbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdC5yaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gMTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRvb2x0aXAtYWxpZ24nLCAncmlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gUmVzZXQgdG9vbHRpcCBwb3NpdGlvblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KCctLXRvb2x0aXAtYWxpZ24nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGNsaWNrIGV2ZW50IGZvciBtb2JpbGUgZGV2aWNlc1xyXG4gICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YWctbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RhZ01vZGFsKHRhZ05hbWUsIHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYWdNb2RhbCh0YWdOYW1lLCBkZXNjcmlwdGlvbikge1xyXG4gICAgLy8gUmVtb3ZlIGV4aXN0aW5nIG1vZGFsIGlmIGFueVxyXG4gICAgY29uc3QgZXhpc3RpbmdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWctbW9kYWwnKTtcclxuICAgIGlmIChleGlzdGluZ01vZGFsKSB7XHJcbiAgICAgICAgZXhpc3RpbmdNb2RhbC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgbW9kYWxcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc05hbWUgPSAndGFnLW1vZGFsJztcclxuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLW1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZy1tb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz4ke3RhZ05hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YWctbW9kYWwtY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLW1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLW1vZGFsLWJhY2tkcm9wXCI+PC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIC8vIEFkZCB0byBwYWdlXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuXHJcbiAgICAvLyBDbG9zZSBtb2RhbCBldmVudHNcclxuICAgIGNvbnN0IGNsb3NlQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnRhZy1tb2RhbC1jbG9zZScpO1xyXG4gICAgY29uc3QgYmFja2Ryb3AgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcudGFnLW1vZGFsLWJhY2tkcm9wJyk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5hbmltYXRpb24gPSAnZmFkZU91dCAwLjNzIGVhc2UnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobW9kYWwucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuXHJcbiAgICAvLyBDbG9zZSBvbiBlc2NhcGUga2V5XHJcbiAgICBjb25zdCBlc2NhcGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XHJcbn1cclxuIiwiLyoqXHJcbk5ld3MgQ2Fyb3VzZWwgTW9kdWxlXHJcblNjcm9sbCBpbmZpbmkgZGVzIG5vdXZlbGxlc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTmV3c0Nhcm91c2VsKCkge1xyXG4gICAgY29uc3QgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld3MtY2Fyb3VzZWwnKTtcclxuXHJcbiAgICBjYXJvdXNlbHMuZm9yRWFjaChjYXJvdXNlbCA9PiB7XHJcbiAgICAgICAgY29uc3QgdHJhY2sgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcubmV3cy10cmFjaycpO1xyXG4gICAgICAgIGlmICghdHJhY2spIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZHMgPSB0cmFjay5xdWVyeVNlbGVjdG9yQWxsKCcubmV3cy1jYXJkJyk7XHJcbiAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdG90YWwgd2lkdGggb2Ygb25lIHNldCBvZiBjYXJkc1xyXG4gICAgICAgIGxldCB0cmFja1dpZHRoID0gMDtcclxuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICB0cmFja1dpZHRoICs9IGNhcmQub2Zmc2V0V2lkdGggKyBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodHJhY2spLmdhcCB8fCAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSGFsZiB0aGUgdHJhY2sgd2lkdGggKHNpbmNlIGNhcmRzIGFyZSBkdXBsaWNhdGVkKVxyXG4gICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRyYWNrV2lkdGggLyAyO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgZGlyZWN0aW9uXHJcbiAgICAgICAgY29uc3QgaXNSaWdodCA9IGNhcm91c2VsLmNsYXNzTGlzdC5jb250YWlucygnbmV3cy1jYXJvdXNlbC1yaWdodCcpO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IGlzUmlnaHQgPyAwIDogLWhhbGZXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gQW5pbWF0aW9uIHNwZWVkIChwaXhlbHMgcGVyIHNlY29uZClcclxuICAgICAgICBjb25zdCBzcGVlZCA9IGhhbGZXaWR0aCAvIDM1OyAvLyAzNSBzZWNvbmRzIGZvciBmdWxsIGN5Y2xlXHJcblxyXG4gICAgICAgIGxldCBhbmltYXRpb25GcmFtZUlkO1xyXG4gICAgICAgIGxldCBsYXN0VGltZXN0YW1wO1xyXG4gICAgICAgIGxldCBpc1BhdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbmltYXRpb24gbG9vcCB1c2luZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wIC0gSGlnaCByZXNvbHV0aW9uIHRpbWVzdGFtcCBmcm9tIFJBRlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUodGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgIGlmICghbGFzdFRpbWVzdGFtcCkgbGFzdFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSB0aW1lc3RhbXAgLSBsYXN0VGltZXN0YW1wO1xyXG4gICAgICAgICAgICBsYXN0VGltZXN0YW1wID0gdGltZXN0YW1wO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc1BhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiAtPSAoc3BlZWQgKiBkZWx0YSkgLyAxMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB3aGVuIGhhbGZ3YXkgdGhyb3VnaFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSAtaGFsZldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSAoc3BlZWQgKiBkZWx0YSkgLyAxMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB3aGVuIGF0IHN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAtaGFsZldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0cmFjay5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbn1weCwgMCwgMClgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3RhcnQgYW5pbWF0aW9uXHJcbiAgICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgICAgICAgLy8gUGF1c2Ugb24gaG92ZXJcclxuICAgICAgICBjYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc1BhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lc3RhbXAgPSBudWxsOyAvLyBSZXNldCB0aW1lc3RhbXAgdG8gYXZvaWQganVtcFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDbGVhbnVwIG9uIHBhZ2UgdW5sb2FkXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkZyYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyBTZWFyY2ggZm9ybSBmdW5jdGlvbmFsaXR5XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0U2VhcmNoRm9ybSgpIHtcclxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnRuJyk7XHJcblxyXG4gICAgaWYgKHNlYXJjaEJ0bikge1xyXG4gICAgICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3BlY2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlLXNlbGVjdCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBzZXhlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NleGUtc2VsZWN0JykudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlcGFydG1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVwYXJ0bWVudC1zZWxlY3QnKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIHF1ZXJ5IHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgICAgICBpZiAoc3BlY2llcykgcGFyYW1zLnNldCgnc3BlY2llcycsIHNwZWNpZXMpO1xyXG4gICAgICAgICAgICBpZiAoc2V4ZSkgcGFyYW1zLnNldCgnc2V4ZScsIHNleGUpO1xyXG4gICAgICAgICAgICBpZiAoZGVwYXJ0bWVudCkgcGFyYW1zLnNldCgnZGVwYXJ0bWVudCcsIGRlcGFydG1lbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gYW5pbWFscyBwYWdlIHdpdGggZmlsdGVyc1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHBhcmFtcy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBxdWVyeVN0cmluZyA/IGAvYW5pbWFscz8ke3F1ZXJ5U3RyaW5nfWAgOiAnL2FuaW1hbHMnO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIi8vQWZmaWNoZSBsZSBub20gZHUgZmljaGllciBzw6lsZWN0aW9ubsOpIGRhbnMgdW4gaW5wdXQgZGUgdHlwZSBmaWxlXHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBmaWxlIGlucHV0IGRpc3BsYXkgZm9yIGEgc3BlY2lmaWMgZmlsZSBpbnB1dCBhbmQgZGlzcGxheSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIC0gQ1NTIHNlbGVjdG9yIGZvciB0aGUgZmlsZSBpbnB1dCBlbGVtZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5U2VsZWN0b3IgLSBDU1Mgc2VsZWN0b3IgZm9yIHRoZSBlbGVtZW50IHRvIGRpc3BsYXkgdGhlIGZpbGVuYW1lIGluXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0VGV4dCAtIERlZmF1bHQgdGV4dCB0byBzaG93IHdoZW4gbm8gZmlsZSBpcyBzZWxlY3RlZCAoZGVmYXVsdDogXCJBdWN1biBmaWNoaWVyXCIpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUZpbGVJbnB1dERpc3BsYXkoaW5wdXRTZWxlY3RvciwgZGlzcGxheVNlbGVjdG9yLCBkZWZhdWx0VGV4dCA9ICdBdWN1biBmaWNoaWVyJykge1xyXG4gICAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dFNlbGVjdG9yKTtcclxuICAgIGNvbnN0IGZpbGVOYW1lRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGlzcGxheVNlbGVjdG9yKTtcclxuXHJcbiAgICBpZiAoIWZpbGVJbnB1dCB8fCAhZmlsZU5hbWVEaXNwbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBpbml0aWFsIGRpc3BsYXkgdGV4dFxyXG4gICAgZmlsZU5hbWVEaXNwbGF5LnRleHRDb250ZW50ID0gZGVmYXVsdFRleHQ7XHJcblxyXG4gICAgLy8gVXBkYXRlIGRpc3BsYXkgb24gZmlsZSBzZWxlY3Rpb24gY2hhbmdlXHJcbiAgICBmaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbGVOYW1lRGlzcGxheS50ZXh0Q29udGVudCA9IHRoaXMuZmlsZXNbMF0ubmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWxlTmFtZURpc3BsYXkudGV4dENvbnRlbnQgPSBkZWZhdWx0VGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYWxsIGZpbGUgaW5wdXQgZGlzcGxheXMgb24gdGhlIHBhZ2VcclxuICogTG9va3MgZm9yIGVsZW1lbnRzIHdpdGggZGF0YS1maWxlLWlucHV0LWRpc3BsYXkgYXR0cmlidXRlXHJcbiAqXHJcbiAqIFVzYWdlIGluIEhUTUw6XHJcbiAqIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwicmVnaXN0ZXJfaW1hZ2VGaWxlX2ZpbGVcIiBkYXRhLWZpbGUtaW5wdXQtZGlzcGxheT1cImZpbGUtbmFtZS1kaXNwbGF5XCI+XHJcbiAqIDxzcGFuIGlkPVwiZmlsZS1uYW1lLWRpc3BsYXlcIj5BdWN1biBmaWNoaWVyPC9zcGFuPlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBbGxGaWxlSW5wdXREaXNwbGF5cygpIHtcclxuICAgIGNvbnN0IGZpbGVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWxlLWlucHV0LWRpc3BsYXldJyk7XHJcblxyXG4gICAgZmlsZUlucHV0cy5mb3JFYWNoKGZpbGVJbnB1dCA9PiB7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUVsZW1lbnRJZCA9IGZpbGVJbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsZS1pbnB1dC1kaXNwbGF5Jyk7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXNwbGF5RWxlbWVudElkKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc3BsYXlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRUZXh0ID0gZGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgfHwgJ0F1Y3VuIGZpY2hpZXInO1xyXG4gICAgICAgICAgICBpbml0aWFsaXplRmlsZUlucHV0RGlzcGxheShcclxuICAgICAgICAgICAgICAgIGAjJHtmaWxlSW5wdXQuaWR9YCxcclxuICAgICAgICAgICAgICAgIGAjJHtkaXNwbGF5RWxlbWVudElkfWAsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsIi8vTGVzIGZvbmN0aW9ucyB1dGlsaXRhaXJlcyBwb3VyIGxlcyBtb2RhbGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXJtZXJNb2RhbGUoKSB7XHJcbiAgICBjb25zdCBtb2RhbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxlLWZsYXNoJyk7XHJcbiAgICBpZiAobW9kYWxlKSB7XHJcbiAgICAgICAgbW9kYWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTW9kYWxVdGlscygpIHtcclxuICAgIHdpbmRvdy5mZXJtZXJNb2RhbGUgPSBmZXJtZXJNb2RhbGU7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImluaXRDYXJvdXNlbCIsImluaXRBbmltYWxzQ2Fyb3VzZWwiLCJpbml0aWFsaXplTmV3c0Nhcm91c2VsIiwiaW5pdFNlYXJjaEZvcm0iLCJpbml0aWFsaXplQW5pbWFscyIsImluaXRpYWxpemVDb250YWN0TW9kYWwiLCJpbml0QXV0aCIsImluaXRpYWxpemVNb2JpbGVNZW51IiwiaW5pdGlhbGl6ZU1vYmlsZUFjdGlvbk1lbnUiLCJpbml0aWFsaXplQ29tbWVudFJlcGx5IiwiaW5pdGlhbGl6ZUpvaW5Gb3JtIiwiaW5pdGlhbGl6ZU1vZGFsVXRpbHMiLCJpbml0aWFsaXplQWxsRmlsZUlucHV0RGlzcGxheXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW5kaWNhdG9yIiwidGFyZ2V0U2VjdGlvbiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJzdHlsZSIsImN1cnNvciIsImNvbnRhY3RCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInJlcGx5QnV0dG9ucyIsImdldEVsZW1lbnRCeUlkIiwiYXNzb2NpYXRpb25SYWRpb3MiLCJjYXJvdXNlbCIsImNhcmRzIiwiaW5kaWNhdG9ycyIsInByZXZCdG4iLCJuZXh0QnRuIiwiY3VycmVudEluZGV4IiwiaXNOYXZpZ2F0aW5nIiwidXBkYXRlQ2Fyb3VzZWwiLCJmb3JFYWNoIiwiY2FyZCIsImluZGV4IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicmVsYXRpdmVQb3MiLCJhZGQiLCJpbmRpY2F0b3IiLCJ0b2dnbGUiLCJnb1RvU2xpZGUiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibmV4dEluZGV4IiwibGlua3MiLCJsaW5rIiwiZSIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGlja2VkRWxlbWVudCIsInRhcmdldCIsImlzVmlld0J0biIsImNsb3Nlc3QiLCJrZXkiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWCIsImhhbmRsZVN3aXBlIiwic3dpcGVUaHJlc2hvbGQiLCJkaWZmIiwiTWF0aCIsImFicyIsImluaXRpYWxpemVGYXZvcml0ZUJ1dHRvbnMiLCJhZGRGYXZvcml0ZSIsInJlbW92ZUZhdm9yaXRlIiwic2hvd05vdGlmaWNhdGlvbiIsImluaXRpYWxpemVUb29sdGlwcyIsImluaXRpYWxpemVBbmltYWxDYXJkcyIsImluaXRpYWxpemVTZWVNb3JlQnV0dG9ucyIsIndpbmRvdyIsIkFuaW1hbENhcmRzIiwiaW5pdGlhbGl6ZUZpbGVJbnB1dERpc3BsYXkiLCJhdXRoV3JhcHBlciIsInNpZ25VcEJ0biIsInNpZ25JbkJ0biIsImxvZ2luRm9ybSIsInJlZ2lzdGVyRm9ybSIsInN3aXRjaFRvU2lnblVwIiwibG9naW5BbmltYXRpb25zIiwiZWwiLCJhbmltYXRpb24iLCJjb25jYXQiLCJyZWdpc3RlckFuaW1hdGlvbnMiLCJzd2l0Y2hUb1NpZ25JbiIsImluaXRBbmltYXRpb25zIiwiaW5mb0FuaW1hdGlvbnMiLCJyZWdpc3RlckZvcm1FcnJvcnMiLCJpbnB1dHMiLCJpbnB1dCIsInZhbHVlIiwicGFyZW50RWxlbWVudCIsImV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3QiLCJuZXdBc3NvY2lhdGlvbkZpZWxkIiwicmFkaW8iLCJzZWxlY3RlZFZhbHVlIiwiZGlzcGxheSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImluamVjdEF1dGhTdHlsZXMiLCJzdHlsZUlkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwidGV4dENvbnRlbnQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzbGlkZXMiLCJjdXJyZW50U2xpZGUiLCJhdXRvU2xpZGVJbnRlcnZhbCIsInNob3dTbGlkZSIsInNsaWRlIiwibmV4dFNsaWRlIiwic3RhcnRBdXRvU2xpZGUiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZXBseVRvZ2dsZUJ1dHRvbnMiLCJidXR0b24iLCJjb21tZW50SWQiLCJkYXRhc2V0IiwidG9nZ2xlUmVwbHkiLCJmb3JtIiwiYW5pbWFsSWQiLCJhc3NvY2lhdGlvbklkIiwib3BlbkNvbnRhY3RNb2RhbCIsInVybCIsIm1vZGFsIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYm9keSIsIm92ZXJmbG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiaHRtbCIsIm1vZGFsQm9keSIsImluaXRpYWxpemVDb250YWN0Rm9ybSIsImVycm9yIiwiY2xvc2VDb250YWN0TW9kYWwiLCJjbG9zZUJ0biIsImVzY2FwZUhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib3BhY2l0eSIsInN1Ym1pdEJ0biIsIm9yaWdpbmFsVGV4dCIsImRpc2FibGVkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFjdGlvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiQ29udGFjdE1vZGFsIiwib3BlbiIsImNsb3NlIiwiaW5pdGlhbGl6ZSIsImpvaW5CdG4iLCJtb2JpbGVBY3Rpb25Ub2dnbGUiLCJtb2JpbGVBY3Rpb25NZW51IiwidG9nZ2xlTW9iaWxlQWN0aW9uTWVudSIsImNsb3NlTW9iaWxlQWN0aW9uTWVudSIsIm1vYmlsZUFjdGlvbkxpbmtzIiwiYnVyZ2VyVG9nZ2xlIiwibW9iaWxlTWVudSIsImNsb3NlTWVudSIsIm1vYmlsZU1lbnVDb250ZW50IiwibW9iaWxlTWVudU92ZXJsYXkiLCJtb2JpbGVMaW5rcyIsImFjdGlvbk1lbnVUb2dnbGUiLCJhY3Rpb25NZW51IiwidG9nZ2xlTWVudSIsImNsb3NlTWVudUhhbmRsZXIiLCJjbG9zZUFjdGlvbk1lbnUiLCJ0b2dnbGVBY3Rpb25NZW51IiwiYWN0aW9uTWVudVdyYXBwZXIiLCJjbG9zZU1lbnVUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYW5pbWFsQ2FyZHMiLCJsb2NhdGlvbiIsImhyZWYiLCJpbWFnZSIsInRyYW5zZm9ybSIsInNlZU1vcmVCdXR0b25zIiwiZmF2b3JpdGVzSW5pdGlhbGl6ZWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsIl9yZWYiLCJ3YXJuIiwibGFzdENsaWNrVGltZXMiLCJNYXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJub3ciLCJEYXRlIiwibGFzdENsaWNrIiwiZ2V0Iiwic2V0IiwiaGVhcnRJY29uIiwid2FzRmF2b3JpdGVkIiwicHJvY2Vzc2luZyIsInRpdGxlIiwidHlwZSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImV4aXN0aW5nTm90aWZpY2F0aW9ucyIsIm5vdGlmIiwibm90aWZpY2F0aW9uIiwiY29sb3JzIiwiaW5mbyIsIndhcm5pbmciLCJjc3NUZXh0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidGFnc1dpdGhUb29sdGlwcyIsInRhZyIsInRvb2x0aXAiLCJnZXRBdHRyaWJ1dGUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9vbHRpcEVsZW1lbnQiLCJwc2V1ZG9FbGVtZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImxlZnQiLCJzZXRQcm9wZXJ0eSIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsInJlbW92ZVByb3BlcnR5IiwidGFnTmFtZSIsInNob3dUYWdNb2RhbCIsImRlc2NyaXB0aW9uIiwiZXhpc3RpbmdNb2RhbCIsImJhY2tkcm9wIiwiY2xvc2VNb2RhbCIsImNhcm91c2VscyIsInRyYWNrIiwidHJhY2tXaWR0aCIsIm9mZnNldFdpZHRoIiwicGFyc2VGbG9hdCIsImdhcCIsImhhbGZXaWR0aCIsImlzUmlnaHQiLCJwb3NpdGlvbiIsInNwZWVkIiwiYW5pbWF0aW9uRnJhbWVJZCIsImxhc3RUaW1lc3RhbXAiLCJpc1BhdXNlZCIsImFuaW1hdGUiLCJ0aW1lc3RhbXAiLCJkZWx0YSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2VhcmNoQnRuIiwic3BlY2llcyIsInNleGUiLCJkZXBhcnRtZW50IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwicXVlcnlTdHJpbmciLCJ0b1N0cmluZyIsImlucHV0U2VsZWN0b3IiLCJkaXNwbGF5U2VsZWN0b3IiLCJkZWZhdWx0VGV4dCIsImZpbGVJbnB1dCIsImZpbGVOYW1lRGlzcGxheSIsImZpbGVzIiwibmFtZSIsImZpbGVJbnB1dHMiLCJkaXNwbGF5RWxlbWVudElkIiwiZGlzcGxheUVsZW1lbnQiLCJmZXJtZXJNb2RhbGUiLCJtb2RhbGUiXSwic291cmNlUm9vdCI6IiJ9