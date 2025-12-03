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






console.log('How I Met My Human - Application loaded! 🐾');

/**
 * Central application initialization
 * Called when DOM is fully loaded
 * Each feature is conditionally initialized based on DOM element presence
 */
document.addEventListener('DOMContentLoaded', function () {
  console.log('🚀 Initializing application features...');

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
    console.log('  ✓ Initializing hero carousel...');
    (0,_js_carousel_js__WEBPACK_IMPORTED_MODULE_1__.initCarousel)();
  }

  // Animals carousel - 10 oldest animals with navigation
  if (document.querySelector('.animals-carousel')) {
    console.log('  ✓ Initializing animals carousel...');
    (0,_js_animals_carousel_js__WEBPACK_IMPORTED_MODULE_2__.initAnimalsCarousel)();
  }

  // News carousel - infinite scroll news section
  if (document.querySelector('.news-carousel')) {
    console.log('  ✓ Initializing news carousel...');
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
  if (document.querySelector('.animals-grid') || document.querySelector('.animals-carousel')) {
    console.log('  ✓ Initializing animal cards...');
    (0,_js_animals_js__WEBPACK_IMPORTED_MODULE_5__.initializeAnimals)();
  }

  // Contact modal (for animal/association contact)
  var contactButtons = document.querySelectorAll('.contact-btn');
  if (contactButtons.length > 0) {
    console.log('  ✓ Initializing contact modal...');
    (0,_js_contact_modal_js__WEBPACK_IMPORTED_MODULE_6__.initializeContactModal)();
  }

  // ==================== ANIMAL DETAIL PAGE ====================
  // Comment reply forms
  var replyButtons = document.querySelectorAll('[data-toggle-reply]');
  if (replyButtons.length > 0) {
    console.log('  ✓ Initializing comment reply...');
    (0,_js_comment_reply_js__WEBPACK_IMPORTED_MODULE_10__.initializeCommentReply)();
  }

  // ==================== AUTHENTICATION PAGES ====================
  // Auth panel switching (sign up / sign in)
  if (document.getElementById('authWrapper')) {
    console.log('  ✓ Initializing authentication UI...');
    (0,_js_auth_js__WEBPACK_IMPORTED_MODULE_7__.initAuth)();
  }

  // ==================== SEARCH PAGE ====================
  // Search form with filters
  if (document.querySelector('.search-form')) {
    console.log('  ✓ Initializing search form...');
    (0,_js_searchForm_js__WEBPACK_IMPORTED_MODULE_4__.initSearchForm)();
  }

  // ==================== ASSOCIATION PAGES ====================
  // Join association form
  var associationRadios = document.querySelectorAll('input[name="association_id"]');
  if (associationRadios.length > 0) {
    console.log('  ✓ Initializing join form...');
    (0,_js_join_form_js__WEBPACK_IMPORTED_MODULE_11__.initializeJoinForm)();
  }
  console.log('✅ Application initialization complete!');
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






/**
 * Animals Carousel Module
 * Manages the 10 oldest animals carousel with navigation, swipe, and keyboard controls
 */

/**
 * Initialize the animals carousel
 * Sets up navigation arrows, swipe detection, keyboard controls, and indicators
 * Supports multiple navigation methods:
 * - Click on navigation arrows (prev/next buttons)
 * - Click on indicator dots
 * - Keyboard arrow keys (left/right)
 * - Touch swipe gestures (mobile)
 */
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
/* harmony export */   handleShare: () => (/* reexport safe */ _modules_share_js__WEBPACK_IMPORTED_MODULE_2__.handleShare),
/* harmony export */   initializeAnimals: () => (/* binding */ initializeAnimals),
/* harmony export */   initializeTooltips: () => (/* reexport safe */ _modules_tooltips_js__WEBPACK_IMPORTED_MODULE_3__.initializeTooltips),
/* harmony export */   removeFavorite: () => (/* reexport safe */ _modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__.removeFavorite),
/* harmony export */   showNotification: () => (/* reexport safe */ _modules_notifications_js__WEBPACK_IMPORTED_MODULE_1__.showNotification)
/* harmony export */ });
/* harmony import */ var _modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/favorites.js */ "./assets/js/modules/favorites.js");
/* harmony import */ var _modules_notifications_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/notifications.js */ "./assets/js/modules/notifications.js");
/* harmony import */ var _modules_share_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/share.js */ "./assets/js/modules/share.js");
/* harmony import */ var _modules_tooltips_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tooltips.js */ "./assets/js/modules/tooltips.js");
/* harmony import */ var _modules_animalCards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/animalCards.js */ "./assets/js/modules/animalCards.js");
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
  (0,_modules_animalCards_js__WEBPACK_IMPORTED_MODULE_4__.initializeAnimalCards)();

  // Initialize see more buttons
  (0,_modules_animalCards_js__WEBPACK_IMPORTED_MODULE_4__.initializeSeeMoreButtons)();

  // Initialize action buttons (share)
  (0,_modules_share_js__WEBPACK_IMPORTED_MODULE_2__.initializeActionButtons)();

  // Initialize tooltips
  (0,_modules_tooltips_js__WEBPACK_IMPORTED_MODULE_3__.initializeTooltips)();
}

/**
 * Export functions for external use
 */


// Also make available globally for backward compatibility
window.AnimalCards = {
  addFavorite: _modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__.addFavorite,
  removeFavorite: _modules_favorites_js__WEBPACK_IMPORTED_MODULE_0__.removeFavorite,
  showNotification: _modules_notifications_js__WEBPACK_IMPORTED_MODULE_1__.showNotification,
  handleShare: _modules_share_js__WEBPACK_IMPORTED_MODULE_2__.handleShare,
  initializeTooltips: _modules_tooltips_js__WEBPACK_IMPORTED_MODULE_3__.initializeTooltips
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






// Carrousel functionality
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





/**
 * Comment Reply Module
 * Handles comment reply form toggle functionality
 */

/**
 * Initialize comment reply functionality
 * Sets up reply form toggle buttons on comments
 */
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







/**
 * Contact Modal Module
 * Manages contact form modal loading and submission via AJAX
 */

// Import notification function from notifications module


/**
 * Initialize contact modal functionality
 * Attaches event listeners to all contact buttons
 */
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
  // Créer la modal
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
    console.error('Error:', error);
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
  console.log('Initializing contact form...', form);
  if (!form) {
    console.error('Contact form not found in modal!');
    return;
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submitted!', form.action);
    var submitBtn = form.querySelector('.btn-submit-contact');
    var originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    var formData = new FormData(form);
    console.log('Sending form data to:', form.action);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
      console.log('Response status:', response.status);
      return response.json();
    }).then(function (data) {
      console.log('Response data:', data);
      if (data.success) {
        (0,_modules_notifications_js__WEBPACK_IMPORTED_MODULE_7__.showNotification)(data.message, 'success');
        closeContactModal(modal);
      } else {
        (0,_modules_notifications_js__WEBPACK_IMPORTED_MODULE_7__.showNotification)(data.message, 'error');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    })["catch"](function (error) {
      console.error('Error:', error);
      (0,_modules_notifications_js__WEBPACK_IMPORTED_MODULE_7__.showNotification)('Erreur lors de l\'envoi du message', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    });
  });
}

// Also make available globally for backward compatibility
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





/**
 * Join Form Module
 * Handles association join form interactions
 */

/**
 * Initialize join form functionality
 * Enables/disables the join button based on radio selection
 */
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





/**
 * Mobile Action Menu Module
 * Handles the dropdown toggle for "Accès rapide" in mobile menu
 */

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






/**
 * Mobile Menu Module
 * Handles mobile hamburger menu and action menu dropdown functionality
 */

/**
 * Initialize mobile menu functionality
 * Sets up burger toggle, mobile menu, and action menu (user dropdown)
 */
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

  /**
   * Toggle mobile menu open/closed
   */
  function toggleMenu() {
    burgerToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  /**
   * Close mobile menu
   */
  function closeMenuHandler() {
    burgerToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
    closeActionMenu();
  }

  /**
   * Toggle action menu (user dropdown)
   */
  function toggleActionMenu() {
    if (actionMenu) {
      actionMenu.classList.toggle('active');
      actionMenuToggle.classList.toggle('active');
    }
  }

  /**
   * Close action menu
   */
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
 * Animal Cards Module
 * Handles animal card interactions and navigation
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









/**
 * Favorites Module
 * Handles adding and removing favorites
 */


function addFavorite(animalId) {
  console.log("Adding animal ".concat(animalId, " to favorites"));
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
    console.error('Error:', error);
    (0,_notifications_js__WEBPACK_IMPORTED_MODULE_9__.showNotification)('Vous devez être connecté pour ajouter un animal à vos favoris', 'error');
  });
}
function removeFavorite(animalId) {
  console.log("Removing animal ".concat(animalId, " from favorites"));
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
    console.error('Error:', error);
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






/**
 * Notifications Module
 * Handles display of toast notifications
 */

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

/***/ "./assets/js/modules/share.js":
/*!************************************!*\
  !*** ./assets/js/modules/share.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fallbackShare: () => (/* binding */ fallbackShare),
/* harmony export */   handleShare: () => (/* binding */ handleShare),
/* harmony export */   initializeActionButtons: () => (/* binding */ initializeActionButtons)
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
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.js */ "./assets/js/modules/notifications.js");





/**
 * Share Module
 * Handles sharing functionality
 */


function handleShare(animalId) {
  console.log("Sharing animal ".concat(animalId));

  // Use Web Share API if available
  if (navigator.share) {
    navigator.share({
      title: 'Adoptez cet adorable animal !',
      text: 'Découvrez cet animal qui cherche une famille',
      url: window.location.origin + "/animals/".concat(animalId)
    }).then(function () {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_5__.showNotification)('Partagé avec succès !', 'success');
    })["catch"](function (error) {
      console.log('Error sharing:', error);
      fallbackShare(animalId);
    });
  } else {
    fallbackShare(animalId);
  }
}
function fallbackShare(animalId) {
  // Copy link to clipboard as fallback
  var url = window.location.origin + "/animals/".concat(animalId);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(function () {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_5__.showNotification)('Lien copié dans le presse-papiers !', 'success');
    })["catch"](function () {
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_5__.showNotification)('Impossible de copier le lien', 'error');
    });
  } else {
    // Very old browsers fallback
    (0,_notifications_js__WEBPACK_IMPORTED_MODULE_5__.showNotification)('Copiez ce lien: ' + url, 'info');
  }
}
function initializeActionButtons() {
  // Share buttons
  var shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var animalId = this.dataset.animalId;
      handleShare(animalId);
    });
  });
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







/**
 * Tooltips Module
 * Handles tooltip display and mobile modal
 */

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
 * News Carousel Module
 * Infinite scroll carousel for adopter news
 * Creates a seamless infinite loop without visible jumps
 */

/**
 * Initialize news carousels
 * Automatically starts infinite scroll animation for all carousels on the page
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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);







/**
 * File Input Display Utility
 * Manages display of selected file names in file input fields
 * Used in: security/auth.html.twig, adopter_news/new.html.twig
 */

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
    console.warn("File input display: Could not find elements for \"".concat(inputSelector, "\" or \"").concat(displaySelector, "\""));
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
/**
 * Modal Utility Functions
 * Shared functions for modal management across the application
 */

/**
 * Close the flash message modal
 * Used in various templates (mot_de_passe/reset.html.twig, post_registration_association.html.twig, auth.html.twig)
 */
function fermerModale() {
  var modale = document.getElementById('modale-flash');
  if (modale) {
    modale.style.display = 'none';
  }
}

/**
 * Initialize fermerModale on DOMContentLoaded
 * Automatically closes any flash modals when the page loads
 */
function initializeModalUtils() {
  // Make fermerModale available globally for inline onclick handlers in HTML
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDSixDQUFDLENBQUM7QUFDTixDOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTUyxZQUFZQSxDQUFBLEVBQUc7RUFDM0IsSUFBTUMsTUFBTSxHQUFHelEsUUFBUSxDQUFDYSxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQ3RELElBQUk0UCxNQUFNLEVBQUU7SUFDUkEsTUFBTSxDQUFDbFEsS0FBSyxDQUFDbUYsT0FBTyxHQUFHLE1BQU07RUFDakM7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVM5RixvQkFBb0JBLENBQUEsRUFBRztFQUNuQztFQUNBcUUsTUFBTSxDQUFDdU0sWUFBWSxHQUFHQSxZQUFZO0FBQ3RDLEM7Ozs7Ozs7Ozs7O0FDdkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbWFscy1jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbWFscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbW1lbnQtcmVwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnRhY3QtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2pvaW4tZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9iaWxlLWFjdGlvbi1tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2JpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9hbmltYWxDYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9mYXZvcml0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9zaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy90b29sdGlwcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmV3cy1jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbHMvZmlsZS1pbnB1dC1kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9tb2RhbC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIE1haW4gQXBwbGljYXRpb24gRmlsZVxyXG4gKiBDZW50cmFsIGluaXRpYWxpemF0aW9uIHBvaW50IGZvciBhbGwgSmF2YVNjcmlwdCBtb2R1bGVzXHJcbiAqIEVhY2ggbW9kdWxlIGlzIGltcG9ydGVkIGFuZCBpbml0aWFsaXplZCB3aGVuIGl0cyBjb3JyZXNwb25kaW5nIERPTSBlbGVtZW50cyBleGlzdFxyXG4gKi9cclxuXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gSW1wb3J0IGhvbWVwYWdlIGNhcm91c2Vsc1xyXG5pbXBvcnQgeyBpbml0Q2Fyb3VzZWwgfSBmcm9tICcuL2pzL2Nhcm91c2VsLmpzJztcclxuaW1wb3J0IHsgaW5pdEFuaW1hbHNDYXJvdXNlbCB9IGZyb20gJy4vanMvYW5pbWFscy1jYXJvdXNlbC5qcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVOZXdzQ2Fyb3VzZWwgfSBmcm9tICcuL2pzL25ld3MtY2Fyb3VzZWwuanMnO1xyXG5cclxuLy8gSW1wb3J0IHNlYXJjaCBhbmQgZm9ybSBmdW5jdGlvbmFsaXR5XHJcbmltcG9ydCB7IGluaXRTZWFyY2hGb3JtIH0gZnJvbSAnLi9qcy9zZWFyY2hGb3JtLmpzJztcclxuXHJcbi8vIEltcG9ydCBhbmltYWxzIHBhZ2UgbW9kdWxlc1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQW5pbWFscyB9IGZyb20gJy4vanMvYW5pbWFscy5qcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVDb250YWN0TW9kYWwgfSBmcm9tICcuL2pzL2NvbnRhY3QtbW9kYWwuanMnO1xyXG5cclxuLy8gSW1wb3J0IGF1dGhlbnRpY2F0aW9uIG1vZHVsZVxyXG5pbXBvcnQgeyBpbml0QXV0aCB9IGZyb20gJy4vanMvYXV0aC5qcyc7XHJcblxyXG4vLyBJbXBvcnQgdXRpbGl0eSBtb2R1bGVzXHJcbmltcG9ydCB7IGluaXRpYWxpemVNb2JpbGVNZW51IH0gZnJvbSAnLi9qcy9tb2JpbGUtbWVudS5qcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVNb2JpbGVBY3Rpb25NZW51IH0gZnJvbSAnLi9qcy9tb2JpbGUtYWN0aW9uLW1lbnUuanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQ29tbWVudFJlcGx5IH0gZnJvbSAnLi9qcy9jb21tZW50LXJlcGx5LmpzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUpvaW5Gb3JtIH0gZnJvbSAnLi9qcy9qb2luLWZvcm0uanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplTW9kYWxVdGlscyB9IGZyb20gJy4vanMvdXRpbHMvbW9kYWwtdXRpbHMuanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQWxsRmlsZUlucHV0RGlzcGxheXMgfSBmcm9tICcuL2pzL3V0aWxzL2ZpbGUtaW5wdXQtZGlzcGxheS5qcyc7XHJcblxyXG5jb25zb2xlLmxvZygnSG93IEkgTWV0IE15IEh1bWFuIC0gQXBwbGljYXRpb24gbG9hZGVkISDwn5C+Jyk7XHJcblxyXG4vKipcclxuICogQ2VudHJhbCBhcHBsaWNhdGlvbiBpbml0aWFsaXphdGlvblxyXG4gKiBDYWxsZWQgd2hlbiBET00gaXMgZnVsbHkgbG9hZGVkXHJcbiAqIEVhY2ggZmVhdHVyZSBpcyBjb25kaXRpb25hbGx5IGluaXRpYWxpemVkIGJhc2VkIG9uIERPTSBlbGVtZW50IHByZXNlbmNlXHJcbiAqL1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygn8J+agCBJbml0aWFsaXppbmcgYXBwbGljYXRpb24gZmVhdHVyZXMuLi4nKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBHTE9CQUwgVVRJTElUSUVTID09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBJbml0aWFsaXplIHV0aWxpdGllcyB0aGF0IG1heSBiZSB1c2VkIGFjcm9zcyBtdWx0aXBsZSBwYWdlc1xyXG4gICAgaW5pdGlhbGl6ZU1vZGFsVXRpbHMoKTtcclxuICAgIGluaXRpYWxpemVBbGxGaWxlSW5wdXREaXNwbGF5cygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IExBWU9VVCAmIE5BVklHQVRJT04gPT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE1vYmlsZSBtZW51ICh1c2VkIG9uIGFsbCBwYWdlcylcclxuICAgIGluaXRpYWxpemVNb2JpbGVNZW51KCk7XHJcbiAgICBpbml0aWFsaXplTW9iaWxlQWN0aW9uTWVudSgpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IEhPTUVQQUdFIEZFQVRVUkVTID09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBIZXJvIGNhcm91c2VsIC0gYXV0by1yb3RhdGluZyBzbGlkZXNob3dcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1jYXJvdXNlbCcpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAg4pyTIEluaXRpYWxpemluZyBoZXJvIGNhcm91c2VsLi4uJyk7XHJcbiAgICAgICAgaW5pdENhcm91c2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQW5pbWFscyBjYXJvdXNlbCAtIDEwIG9sZGVzdCBhbmltYWxzIHdpdGggbmF2aWdhdGlvblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYWxzLWNhcm91c2VsJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnICDinJMgSW5pdGlhbGl6aW5nIGFuaW1hbHMgY2Fyb3VzZWwuLi4nKTtcclxuICAgICAgICBpbml0QW5pbWFsc0Nhcm91c2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTmV3cyBjYXJvdXNlbCAtIGluZmluaXRlIHNjcm9sbCBuZXdzIHNlY3Rpb25cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1jYXJvdXNlbCcpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAg4pyTIEluaXRpYWxpemluZyBuZXdzIGNhcm91c2VsLi4uJyk7XHJcbiAgICAgICAgaW5pdGlhbGl6ZU5ld3NDYXJvdXNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNjcm9sbCBpbmRpY2F0b3IgLSBjbGlja2FibGUgcGF3IHRvIHNjcm9sbCB0byBhbmltYWxzIHNlY3Rpb25cclxuICAgIGNvbnN0IHNjcm9sbEluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtaW5kaWNhdG9yJyk7XHJcbiAgICBpZiAoc2Nyb2xsSW5kaWNhdG9yKSB7XHJcbiAgICAgICAgc2Nyb2xsSW5kaWNhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2xkZXN0LWFuaW1hbHMtc2VjdGlvbicpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0U2VjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0U2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjcm9sbEluZGljYXRvci5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gQU5JTUFMUyBQQUdFICYgSE9NRVBBR0UgPT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEFuaW1hbCBjYXJkcyBncmlkIHdpdGggZmF2b3JpdGVzLCBzaGFyaW5nLCBldGMuXHJcbiAgICAvLyBXb3JrcyBvbiBib3RoIC9hbmltYWxzIHBhZ2UgKGFuaW1hbHMtZ3JpZCkgYW5kIGhvbWVwYWdlIChhbmltYWxzLWNhcm91c2VsKVxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYWxzLWdyaWQnKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWFscy1jYXJvdXNlbCcpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAg4pyTIEluaXRpYWxpemluZyBhbmltYWwgY2FyZHMuLi4nKTtcclxuICAgICAgICBpbml0aWFsaXplQW5pbWFscygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnRhY3QgbW9kYWwgKGZvciBhbmltYWwvYXNzb2NpYXRpb24gY29udGFjdClcclxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QtYnRuJyk7XHJcbiAgICBpZiAoY29udGFjdEJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgIOKckyBJbml0aWFsaXppbmcgY29udGFjdCBtb2RhbC4uLicpO1xyXG4gICAgICAgIGluaXRpYWxpemVDb250YWN0TW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBBTklNQUwgREVUQUlMIFBBR0UgPT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENvbW1lbnQgcmVwbHkgZm9ybXNcclxuICAgIGNvbnN0IHJlcGx5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS1yZXBseV0nKTtcclxuICAgIGlmIChyZXBseUJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgIOKckyBJbml0aWFsaXppbmcgY29tbWVudCByZXBseS4uLicpO1xyXG4gICAgICAgIGluaXRpYWxpemVDb21tZW50UmVwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBBVVRIRU5USUNBVElPTiBQQUdFUyA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQXV0aCBwYW5lbCBzd2l0Y2hpbmcgKHNpZ24gdXAgLyBzaWduIGluKVxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRoV3JhcHBlcicpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAg4pyTIEluaXRpYWxpemluZyBhdXRoZW50aWNhdGlvbiBVSS4uLicpO1xyXG4gICAgICAgIGluaXRBdXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gU0VBUkNIIFBBR0UgPT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNlYXJjaCBmb3JtIHdpdGggZmlsdGVyc1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAg4pyTIEluaXRpYWxpemluZyBzZWFyY2ggZm9ybS4uLicpO1xyXG4gICAgICAgIGluaXRTZWFyY2hGb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gQVNTT0NJQVRJT04gUEFHRVMgPT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEpvaW4gYXNzb2NpYXRpb24gZm9ybVxyXG4gICAgY29uc3QgYXNzb2NpYXRpb25SYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwiYXNzb2NpYXRpb25faWRcIl0nKTtcclxuICAgIGlmIChhc3NvY2lhdGlvblJhZGlvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAg4pyTIEluaXRpYWxpemluZyBqb2luIGZvcm0uLi4nKTtcclxuICAgICAgICBpbml0aWFsaXplSm9pbkZvcm0oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygn4pyFIEFwcGxpY2F0aW9uIGluaXRpYWxpemF0aW9uIGNvbXBsZXRlIScpO1xyXG59KTsiLCIvKipcclxuICogQW5pbWFscyBDYXJvdXNlbCBNb2R1bGVcclxuICogTWFuYWdlcyB0aGUgMTAgb2xkZXN0IGFuaW1hbHMgY2Fyb3VzZWwgd2l0aCBuYXZpZ2F0aW9uLCBzd2lwZSwgYW5kIGtleWJvYXJkIGNvbnRyb2xzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgdGhlIGFuaW1hbHMgY2Fyb3VzZWxcclxuICogU2V0cyB1cCBuYXZpZ2F0aW9uIGFycm93cywgc3dpcGUgZGV0ZWN0aW9uLCBrZXlib2FyZCBjb250cm9scywgYW5kIGluZGljYXRvcnNcclxuICogU3VwcG9ydHMgbXVsdGlwbGUgbmF2aWdhdGlvbiBtZXRob2RzOlxyXG4gKiAtIENsaWNrIG9uIG5hdmlnYXRpb24gYXJyb3dzIChwcmV2L25leHQgYnV0dG9ucylcclxuICogLSBDbGljayBvbiBpbmRpY2F0b3IgZG90c1xyXG4gKiAtIEtleWJvYXJkIGFycm93IGtleXMgKGxlZnQvcmlnaHQpXHJcbiAqIC0gVG91Y2ggc3dpcGUgZ2VzdHVyZXMgKG1vYmlsZSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QW5pbWFsc0Nhcm91c2VsKCkge1xyXG4gICAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWFscy1jYXJvdXNlbCcpO1xyXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtY2FyZCcpO1xyXG4gICAgY29uc3QgaW5kaWNhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmRpY2F0b3ItZG90Jyk7XHJcbiAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLXByZXYnKTtcclxuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtbmV4dCcpO1xyXG5cclxuICAgIGlmICghY2Fyb3VzZWwgfHwgY2FyZHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICBsZXQgaXNOYXZpZ2F0aW5nID0gZmFsc2U7IC8vIEZsYWcgdG8gcHJldmVudCBhY2NpZGVudGFsIGNsaWNrcyBkdXJpbmcgbmF2aWdhdGlvblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGNhcm91c2VsIGRpc3BsYXkgYmFzZWQgb24gY3VycmVudCBpbmRleFxyXG4gICAgICogQXBwbGllcyBDU1MgY2xhc3NlcyB0byBwb3NpdGlvbiBjYXJkcyBhcHByb3ByaWF0ZWx5XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcm91c2VsKCkge1xyXG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJlc2V0IGFsbCBwb3NpdGlvbiBjbGFzc2VzXHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY2VudGVyJywgJ2xlZnQnLCAncmlnaHQnLCAnYmFjay1sZWZ0JywgJ2JhY2stcmlnaHQnLCAnZmFyLWJhY2stbGVmdCcsICdmYXItYmFjay1yaWdodCcsICdoaWRkZW4nLCAnaGlkZGVuLXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcmVsYXRpdmUgcG9zaXRpb25cclxuICAgICAgICAgICAgbGV0IHJlbGF0aXZlUG9zID0gaW5kZXggLSBjdXJyZW50SW5kZXg7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgY2lyY3VsYXIgd3JhcGFyb3VuZFxyXG4gICAgICAgICAgICBpZiAocmVsYXRpdmVQb3MgPiBjYXJkcy5sZW5ndGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVBvcyAtPSBjYXJkcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVsYXRpdmVQb3MgPCAtY2FyZHMubGVuZ3RoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVQb3MgKz0gY2FyZHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gcG9zaXRpb24gY2xhc3Nlc1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlbGF0aXZlUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgLTE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAtMjpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2JhY2stbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnYmFjay1yaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAtMzpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2Zhci1iYWNrLWxlZnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2Zhci1iYWNrLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZVBvcyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1yaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yIGRvdHNcclxuICAgICAgICBpbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGUgdG8gYSBzcGVjaWZpYyBzbGlkZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBzbGlkZSB0byBuYXZpZ2F0ZSB0b1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnb1RvU2xpZGUoaW5kZXgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGNhcmRzLmxlbmd0aCAmJiBpbmRleCAhPT0gY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB1cGRhdGVDYXJvdXNlbCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJldmVudCBjbGlja3MgZHVyaW5nIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBpc05hdmlnYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlzTmF2aWdhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIGluZGljYXRvciBkb3RzXHJcbiAgICBpbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvciwgaW5kZXgpID0+IHtcclxuICAgICAgICBpbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGdvVG9TbGlkZShpbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIG5hdmlnYXRpb24gYnV0dG9uc1xyXG4gICAgaWYgKHByZXZCdG4pIHtcclxuICAgICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggPT09IDAgPyBjYXJkcy5sZW5ndGggLSAxIDogY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgICAgZ29Ub1NsaWRlKHByZXZJbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5leHRCdG4pIHtcclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggPT09IGNhcmRzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgZ29Ub1NsaWRlKG5leHRJbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmxvY2sgbGlua3Mgb24gbm9uLWNlbnRlciBjYXJkc1xyXG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdJyk7XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IG5hdmlnYXRpb24gb24gbm9uLWNlbnRlciBjYXJkc1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYXJkLmNsYXNzTGlzdC5jb250YWlucygnY2VudGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2FyZCBjbGljayBoYW5kbGluZ1xyXG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gQWxsb3cgdmlldyBidXR0b24gdG8gd29ya1xyXG4gICAgICAgICAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZpZXdCdG4gPSBjbGlja2VkRWxlbWVudC5jbG9zZXN0KCcudmlldy1idG4nKTtcclxuICAgICAgICAgICAgaWYgKGlzVmlld0J0bikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBQcmV2ZW50IG90aGVyIGludGVyYWN0aW9uc1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZ25vcmUgY2xpY2tzIGR1cmluZyBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmIChpc05hdmlnYXRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTmF2aWdhdGUgdG8gY2FyZCBpZiBub3QgY2VudGVyXHJcbiAgICAgICAgICAgIGlmICghY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbnRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBnb1RvU2xpZGUoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBLZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gMCA/IGNhcmRzLmxlbmd0aCAtIDEgOiBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBnb1RvU2xpZGUocHJldkluZGV4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ID09PSBjYXJkcy5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICAgIGdvVG9TbGlkZShuZXh0SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRvdWNoIHN3aXBlIGhhbmRsaW5nIGZvciBtb2JpbGVcclxuICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XHJcbiAgICBsZXQgdG91Y2hFbmRYID0gMDtcclxuXHJcbiAgICBjYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcclxuICAgICAgICB0b3VjaFN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBjYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChlKSA9PiB7XHJcbiAgICAgICAgdG91Y2hFbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgICAgIGhhbmRsZVN3aXBlKCk7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgc3dpcGUgZ2VzdHVyZXNcclxuICAgICAqIExlZnQgc3dpcGU6IG5leHQgYW5pbWFsXHJcbiAgICAgKiBSaWdodCBzd2lwZTogcHJldmlvdXMgYW5pbWFsXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN3aXBlKCkge1xyXG4gICAgICAgIGNvbnN0IHN3aXBlVGhyZXNob2xkID0gNTA7IC8vIE1pbmltdW0gZGlzdGFuY2UgdG8gcmVnaXN0ZXIgYXMgc3dpcGVcclxuICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hTdGFydFggLSB0b3VjaEVuZFg7XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHN3aXBlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIGlmIChkaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3dpcGUgbGVmdCA9IG5leHQgYW5pbWFsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggPT09IGNhcmRzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIGdvVG9TbGlkZShuZXh0SW5kZXgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU3dpcGUgcmlnaHQgPSBwcmV2aW91cyBhbmltYWxcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gMCA/IGNhcmRzLmxlbmd0aCAtIDEgOiBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgZ29Ub1NsaWRlKHByZXZJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBjYXJvdXNlbFxyXG4gICAgdXBkYXRlQ2Fyb3VzZWwoKTtcclxufSIsIi8qKlxyXG4gKiBBbmltYWxzIE1vZHVsZVxyXG4gKiBNYWluIGVudHJ5IHBvaW50IGZvciBhbmltYWwtcmVsYXRlZCBmdW5jdGlvbmFsaXR5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUZhdm9yaXRlQnV0dG9ucywgYWRkRmF2b3JpdGUsIHJlbW92ZUZhdm9yaXRlIH0gZnJvbSAnLi9tb2R1bGVzL2Zhdm9yaXRlcy5qcyc7XHJcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuL21vZHVsZXMvbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGhhbmRsZVNoYXJlLCBpbml0aWFsaXplQWN0aW9uQnV0dG9ucyB9IGZyb20gJy4vbW9kdWxlcy9zaGFyZS5qcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVUb29sdGlwcyB9IGZyb20gJy4vbW9kdWxlcy90b29sdGlwcy5qcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBbmltYWxDYXJkcywgaW5pdGlhbGl6ZVNlZU1vcmVCdXR0b25zIH0gZnJvbSAnLi9tb2R1bGVzL2FuaW1hbENhcmRzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGFsbCBhbmltYWxzIHBhZ2UgZnVuY3Rpb25hbGl0eVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBbmltYWxzKCkge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBmYXZvcml0ZSBidXR0b25zXHJcbiAgICBpbml0aWFsaXplRmF2b3JpdGVCdXR0b25zKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBhbmltYWwgY2FyZHMgaW50ZXJhY3Rpb25zXHJcbiAgICBpbml0aWFsaXplQW5pbWFsQ2FyZHMoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHNlZSBtb3JlIGJ1dHRvbnNcclxuICAgIGluaXRpYWxpemVTZWVNb3JlQnV0dG9ucygpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgYWN0aW9uIGJ1dHRvbnMgKHNoYXJlKVxyXG4gICAgaW5pdGlhbGl6ZUFjdGlvbkJ1dHRvbnMoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHRvb2x0aXBzXHJcbiAgICBpbml0aWFsaXplVG9vbHRpcHMoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4cG9ydCBmdW5jdGlvbnMgZm9yIGV4dGVybmFsIHVzZVxyXG4gKi9cclxuZXhwb3J0IHtcclxuICAgIHNob3dOb3RpZmljYXRpb24sXHJcbiAgICBhZGRGYXZvcml0ZSxcclxuICAgIHJlbW92ZUZhdm9yaXRlLFxyXG4gICAgaGFuZGxlU2hhcmUsXHJcbiAgICBpbml0aWFsaXplVG9vbHRpcHNcclxufTtcclxuXHJcbi8vIEFsc28gbWFrZSBhdmFpbGFibGUgZ2xvYmFsbHkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxud2luZG93LkFuaW1hbENhcmRzID0ge1xyXG4gICAgYWRkRmF2b3JpdGUsXHJcbiAgICByZW1vdmVGYXZvcml0ZSxcclxuICAgIHNob3dOb3RpZmljYXRpb24sXHJcbiAgICBoYW5kbGVTaGFyZSxcclxuICAgIGluaXRpYWxpemVUb29sdGlwc1xyXG59O1xyXG4iLCIvKipcclxuICogQXV0aGVudGljYXRpb24gTW9kdWxlXHJcbiAqIEhhbmRsZXMgYXV0aCBwYW5lbCBzd2l0Y2hpbmcsIGFuaW1hdGlvbnMsIGFuZCBmb3JtIGludGVyYWN0aW9uc1xyXG4gKi9cclxuXHJcbi8vIEltcG9ydCBzaGFyZWQgdXRpbGl0aWVzXHJcbmltcG9ydCB7IGluaXRpYWxpemVGaWxlSW5wdXREaXNwbGF5IH0gZnJvbSAnLi91dGlscy9maWxlLWlucHV0LWRpc3BsYXkuanMnO1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYXV0aGVudGljYXRpb24gVUlcclxuICogU2V0cyB1cCBzaWduIHVwL3NpZ24gaW4gcGFuZWwgc3dpdGNoaW5nLCBhbmltYXRpb25zLCBhbmQgZmxvYXRpbmcgbGFiZWwgZWZmZWN0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBdXRoKCkge1xyXG4gICAgY29uc3QgYXV0aFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aFdyYXBwZXInKTtcclxuXHJcbiAgICAvLyBJZiBub3Qgb24gYXV0aCBwYWdlLCBza2lwIGluaXRpYWxpemF0aW9uXHJcbiAgICBpZiAoIWF1dGhXcmFwcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZ25VcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xyXG4gICAgY29uc3Qgc2lnbkluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tYnRuJyk7XHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5Gb3JtJyk7XHJcbiAgICBjb25zdCByZWdpc3RlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJGb3JtJyk7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gc3dpdGNoIHRvIHNpZ24gdXAgbW9kZVxyXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9TaWduVXAoKSB7XHJcbiAgICAgICAgYXV0aFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2lnbi11cC1tb2RlJyk7XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGUgbG9naW4gcGFuZWwgZWxlbWVudHMgZmFkaW5nIG91dFxyXG4gICAgICAgIGNvbnN0IGxvZ2luQW5pbWF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2dpbi1wYW5lbCAuYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgbG9naW5BbmltYXRpb25zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5hbmltYXRpb24gPSBgZmFkZU91dCAwLjZzIGVhc2UtaW4tb3V0ICR7aW5kZXggKiAwLjF9cyBmb3J3YXJkc2A7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGUgcmVnaXN0ZXIgcGFuZWwgZWxlbWVudHMgZmFkaW5nIGluXHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJBbmltYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLXBhbmVsIC5hbmltYXRpb24nKTtcclxuICAgICAgICByZWdpc3RlckFuaW1hdGlvbnMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uID0gYGFuaW1hdGUyIDAuNnMgZWFzZS1pbi1vdXQgJHtpbmRleCAqIDAuMX1zIGZvcndhcmRzYDtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBzd2l0Y2ggdG8gc2lnbiBpbiBtb2RlXHJcbiAgICBmdW5jdGlvbiBzd2l0Y2hUb1NpZ25JbigpIHtcclxuICAgICAgICBhdXRoV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzaWduLXVwLW1vZGUnKTtcclxuXHJcbiAgICAgICAgLy8gQW5pbWF0ZSByZWdpc3RlciBwYW5lbCBlbGVtZW50cyBmYWRpbmcgb3V0XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJBbmltYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLXBhbmVsIC5hbmltYXRpb24nKTtcclxuICAgICAgICByZWdpc3RlckFuaW1hdGlvbnMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9IGBmYWRlT3V0IDAuNnMgZWFzZS1pbi1vdXQgJHtpbmRleCAqIDAuMX1zIGZvcndhcmRzYDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQW5pbWF0ZSBsb2dpbiBwYW5lbCBlbGVtZW50cyBmYWRpbmcgaW5cclxuICAgICAgICBjb25zdCBsb2dpbkFuaW1hdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubG9naW4tcGFuZWwgLmFuaW1hdGlvbicpO1xyXG4gICAgICAgIGxvZ2luQW5pbWF0aW9ucy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5hbmltYXRpb24gPSBgYW5pbWF0ZSAwLjZzIGVhc2UtaW4tb3V0ICR7aW5kZXggKiAwLjF9cyBmb3J3YXJkc2A7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0YWNoIGJ1dHRvbiBjbGljayBoYW5kbGVyc1xyXG4gICAgaWYgKHNpZ25VcEJ0bikge1xyXG4gICAgICAgIHNpZ25VcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvU2lnblVwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2lnbkluQnRuKSB7XHJcbiAgICAgICAgc2lnbkluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVG9TaWduSW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuaW1hdGlvbiBvbiBpbml0aWFsIHBhZ2UgbG9hZFxyXG4gICAgZnVuY3Rpb24gaW5pdEFuaW1hdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgbG9naW5BbmltYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxvZ2luLXBhbmVsIC5hbmltYXRpb24nKTtcclxuICAgICAgICBjb25zdCBpbmZvQW5pbWF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvLXBhbmVsIC5hbmltYXRpb24nKTtcclxuXHJcbiAgICAgICAgbG9naW5BbmltYXRpb25zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9IGBhbmltYXRlIDAuNnMgZWFzZS1pbi1vdXQgZm9yd2FyZHNgO1xyXG4gICAgICAgICAgICB9LCBpbmRleCAqIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGluZm9BbmltYXRpb25zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9IGBhbmltYXRlIDAuNnMgZWFzZS1pbi1vdXQgZm9yd2FyZHNgO1xyXG4gICAgICAgICAgICB9LCBpbmRleCAqIDEwMCArIDIwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBhbmltYXRpb25zXHJcbiAgICBpbml0QW5pbWF0aW9ucygpO1xyXG5cclxuICAgIC8vIEZsb2F0aW5nIGxhYmVsIGVmZmVjdCBmb3IgZm9ybSBpbnB1dHNcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ib3ggaW5wdXQnKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiBmaWVsZCBoYXMgdmFsdWUgb24gbG9hZFxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdoYXMtdmFsdWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdmFsdWUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy12YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDb25kaXRpb25hbCBkaXNwbGF5IG9mIGFzc29jaWF0aW9uIGZpZWxkc1xyXG4gICAgY29uc3QgYXNzb2NpYXRpb25SYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicmVnaXN0ZXJfZm9ybVthc3NvY2lhdGlvbl9jaG9pY2VdXCJdJyk7XHJcbiAgICBjb25zdCBleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzc29jaWF0aW9uLXNlbGVjdCcpO1xyXG4gICAgY29uc3QgbmV3QXNzb2NpYXRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctYXNzb2NpYXRpb24tZmllbGQnKTtcclxuXHJcbiAgICBpZiAoYXNzb2NpYXRpb25SYWRpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGFzc29jaWF0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYWxsIGZpZWxkcyBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdBc3NvY2lhdGlvblNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuZXdBc3NvY2lhdGlvbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXNzb2NpYXRpb25GaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0Fzc29jaWF0aW9uRmllbGQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNob3cgYXBwcm9wcmlhdGUgZmllbGQgYmFzZWQgb24gc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ2pvaW4nICYmIGV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0Fzc29jaWF0aW9uU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQXNzb2NpYXRpb25TZWxlY3Quc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFZhbHVlID09PSAnY3JlYXRlJyAmJiBuZXdBc3NvY2lhdGlvbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXNzb2NpYXRpb25GaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBuZXdBc3NvY2lhdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBmaWxlIGlucHV0IGRpc3BsYXkgZm9yIHByb2ZpbGUgaW1hZ2VcclxuICAgIGluaXRpYWxpemVGaWxlSW5wdXREaXNwbGF5KCcjcmVnaXN0ZXJfaW1hZ2VGaWxlX2ZpbGUnLCAnI2ZpbGUtbmFtZS1kaXNwbGF5Jyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmplY3QgQ1NTIGFuaW1hdGlvbnMgZm9yIGF1dGggbW9kdWxlXHJcbiAqIFNob3VsZCBiZSBjYWxsZWQgb25jZSB0byBhZGQgZmFkZSBvdXQgYW5pbWF0aW9uIHRvIGRvY3VtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBpbmplY3RBdXRoU3R5bGVzKCkge1xyXG4gICAgY29uc3Qgc3R5bGVJZCA9ICdhdXRoLWZhZGVvdXQtc3R5bGVzJztcclxuXHJcbiAgICAvLyBPbmx5IGluamVjdCBvbmNlXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgc3R5bGUuaWQgPSBzdHlsZUlkO1xyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXHJcbiAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBgO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxuXHJcbi8vIEluamVjdCBzdHlsZXMgd2hlbiBtb2R1bGUgbG9hZHNcclxuaW5qZWN0QXV0aFN0eWxlcygpOyIsIi8vIENhcnJvdXNlbCBmdW5jdGlvbmFsaXR5XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtc2xpZGUnKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGxldCBhdXRvU2xpZGVJbnRlcnZhbCA9IG51bGw7XHJcblxyXG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2xpZGUoaW5kZXgpIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHNsaWRlc1xyXG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IHNsaWRlXHJcbiAgICAgICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gKGN1cnJlbnRTbGlkZSArIDEpICUgc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICBzaG93U2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydEF1dG9TbGlkZSgpIHtcclxuICAgICAgICAvLyBGb3JjZSBzdG9wIGFueSBleGlzdGluZyBpbnRlcnZhbFxyXG4gICAgICAgIGlmIChhdXRvU2xpZGVJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGF1dG9TbGlkZUludGVydmFsKTtcclxuICAgICAgICAgICAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgZmlyc3Qgc2xpZGUgYW5kIHN0YXJ0IGF1dG8tc2xpZGVcclxuICAgIHNob3dTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgc3RhcnRBdXRvU2xpZGUoKTtcclxufSIsIi8qKlxyXG4gKiBDb21tZW50IFJlcGx5IE1vZHVsZVxyXG4gKiBIYW5kbGVzIGNvbW1lbnQgcmVwbHkgZm9ybSB0b2dnbGUgZnVuY3Rpb25hbGl0eVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGNvbW1lbnQgcmVwbHkgZnVuY3Rpb25hbGl0eVxyXG4gKiBTZXRzIHVwIHJlcGx5IGZvcm0gdG9nZ2xlIGJ1dHRvbnMgb24gY29tbWVudHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQ29tbWVudFJlcGx5KCkge1xyXG4gICAgY29uc3QgcmVwbHlUb2dnbGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlLXJlcGx5XScpO1xyXG5cclxuICAgIHJlcGx5VG9nZ2xlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRJZCA9IHRoaXMuZGF0YXNldC50b2dnbGVSZXBseTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBseS1mb3JtLScgKyBjb21tZW50SWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0pIHtcclxuICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBmb3JtIHZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IGZvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENvbnRhY3QgTW9kYWwgTW9kdWxlXHJcbiAqIE1hbmFnZXMgY29udGFjdCBmb3JtIG1vZGFsIGxvYWRpbmcgYW5kIHN1Ym1pc3Npb24gdmlhIEFKQVhcclxuICovXHJcblxyXG4vLyBJbXBvcnQgbm90aWZpY2F0aW9uIGZ1bmN0aW9uIGZyb20gbm90aWZpY2F0aW9ucyBtb2R1bGVcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9ub3RpZmljYXRpb25zLmpzJztcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGNvbnRhY3QgbW9kYWwgZnVuY3Rpb25hbGl0eVxyXG4gKiBBdHRhY2hlcyBldmVudCBsaXN0ZW5lcnMgdG8gYWxsIGNvbnRhY3QgYnV0dG9uc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb250YWN0TW9kYWwoKSB7XHJcbiAgICAvLyBJbml0aWFsaXplIGNvbnRhY3QgYnV0dG9uIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdC1idG4nKTtcclxuXHJcbiAgICBjb250YWN0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbmltYWxJZCA9IHRoaXMuZGF0YXNldC5hbmltYWxJZDtcclxuICAgICAgICAgICAgY29uc3QgYXNzb2NpYXRpb25JZCA9IHRoaXMuZGF0YXNldC5hc3NvY2lhdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFuaW1hbElkKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGFjdE1vZGFsKGAvY29udGFjdC9hbmltYWwvJHthbmltYWxJZH1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhc3NvY2lhdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGFjdE1vZGFsKGAvY29udGFjdC9hc3NvY2lhdGlvbi8ke2Fzc29jaWF0aW9uSWR9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZW5lcmFsIGNvbnRhY3QgZm9ybVxyXG4gICAgICAgICAgICAgICAgb3BlbkNvbnRhY3RNb2RhbCgnL2NvbnRhY3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Db250YWN0TW9kYWwodXJsKSB7XHJcbiAgICAvLyBDcsOpZXIgbGEgbW9kYWxcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc05hbWUgPSAnY29udGFjdC1tb2RhbC1vdmVybGF5JztcclxuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1tb2RhbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29udGFjdC1tb2RhbC1jbG9zZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtbW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4gQ2hhcmdlbWVudC4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAvLyBDaGFyZ2VyIGxlIGZvcm11bGFpcmVcclxuICAgIGZldGNoKHVybClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsQm9keSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LW1vZGFsLWJvZHknKTtcclxuICAgICAgICAgICAgbW9kYWxCb2R5LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlciBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgICAgIGluaXRpYWxpemVDb250YWN0Rm9ybShtb2RhbCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZHUgZm9ybXVsYWlyZScsICdlcnJvcicpO1xyXG4gICAgICAgICAgICBjbG9zZUNvbnRhY3RNb2RhbChtb2RhbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gw4l2w6luZW1lbnRzIGRlIGZlcm1ldHVyZVxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1tb2RhbC1jbG9zZScpO1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZUNvbnRhY3RNb2RhbChtb2RhbCkpO1xyXG5cclxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQ29udGFjdE1vZGFsKG1vZGFsKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGZXJtZXR1cmUgYXZlYyBFc2NhcGVcclxuICAgIGNvbnN0IGVzY2FwZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgY2xvc2VDb250YWN0TW9kYWwobW9kYWwpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VDb250YWN0TW9kYWwobW9kYWwpIHtcclxuICAgIG1vZGFsLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICB9LCAzMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udGFjdEZvcm0obW9kYWwpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1mb3JtLWFqYXgnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIGNvbnRhY3QgZm9ybS4uLicsIGZvcm0pO1xyXG5cclxuICAgIGlmICghZm9ybSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbnRhY3QgZm9ybSBub3QgZm91bmQgaW4gbW9kYWwhJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRm9ybSBzdWJtaXR0ZWQhJywgZm9ybS5hY3Rpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5idG4tc3VibWl0LWNvbnRhY3QnKTtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFRleHQgPSBzdWJtaXRCdG4uaW5uZXJIVE1MO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+IEVudm9pIGVuIGNvdXJzLi4uJztcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIGZvcm0gZGF0YSB0bzonLCBmb3JtLmFjdGlvbik7XHJcblxyXG4gICAgICAgIGZldGNoKGZvcm0uYWN0aW9uLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBkYXRhOicsIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKGRhdGEubWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlQ29udGFjdE1vZGFsKG1vZGFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oZGF0YS5tZXNzYWdlLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9IG9yaWdpbmFsVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKCdFcnJldXIgbG9ycyBkZSBsXFwnZW52b2kgZHUgbWVzc2FnZScsICdlcnJvcicpO1xyXG4gICAgICAgICAgICBzdWJtaXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9IG9yaWdpbmFsVGV4dDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBBbHNvIG1ha2UgYXZhaWxhYmxlIGdsb2JhbGx5IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbndpbmRvdy5Db250YWN0TW9kYWwgPSB7XHJcbiAgICBvcGVuOiBvcGVuQ29udGFjdE1vZGFsLFxyXG4gICAgY2xvc2U6IGNsb3NlQ29udGFjdE1vZGFsLFxyXG4gICAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZUNvbnRhY3RNb2RhbFxyXG59O1xyXG4iLCIvKipcclxuICogSm9pbiBGb3JtIE1vZHVsZVxyXG4gKiBIYW5kbGVzIGFzc29jaWF0aW9uIGpvaW4gZm9ybSBpbnRlcmFjdGlvbnNcclxuICovXHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBqb2luIGZvcm0gZnVuY3Rpb25hbGl0eVxyXG4gKiBFbmFibGVzL2Rpc2FibGVzIHRoZSBqb2luIGJ1dHRvbiBiYXNlZCBvbiByYWRpbyBzZWxlY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplSm9pbkZvcm0oKSB7XHJcbiAgICBjb25zdCBhc3NvY2lhdGlvblJhZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJhc3NvY2lhdGlvbl9pZFwiXScpO1xyXG4gICAgY29uc3Qgam9pbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2luQnRuJyk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgZXhpc3RcclxuICAgIGlmIChhc3NvY2lhdGlvblJhZGlvcy5sZW5ndGggPT09IDAgfHwgIWpvaW5CdG4pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5hYmxlIGJ1dHRvbiB3aGVuIGEgcmFkaW8gaXMgc2VsZWN0ZWRcclxuICAgIGFzc29jaWF0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBqb2luQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKipcclxuICogTW9iaWxlIEFjdGlvbiBNZW51IE1vZHVsZVxyXG4gKiBIYW5kbGVzIHRoZSBkcm9wZG93biB0b2dnbGUgZm9yIFwiQWNjw6hzIHJhcGlkZVwiIGluIG1vYmlsZSBtZW51XHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNb2JpbGVBY3Rpb25NZW51KCkge1xyXG4gICAgY29uc3QgbW9iaWxlQWN0aW9uVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZUFjdGlvblRvZ2dsZScpO1xyXG4gICAgY29uc3QgbW9iaWxlQWN0aW9uTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVBY3Rpb25NZW51Jyk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgbW9iaWxlIGFjdGlvbiBtZW51IGV4aXN0c1xyXG4gICAgaWYgKCFtb2JpbGVBY3Rpb25Ub2dnbGUgfHwgIW1vYmlsZUFjdGlvbk1lbnUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgbW9iaWxlIGFjdGlvbiBtZW51IG9wZW4vY2xvc2VkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZUFjdGlvbk1lbnUoKSB7XHJcbiAgICAgICAgbW9iaWxlQWN0aW9uVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1vYmlsZUFjdGlvbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSBtb2JpbGUgYWN0aW9uIG1lbnVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2JpbGVBY3Rpb25NZW51KCkge1xyXG4gICAgICAgIG1vYmlsZUFjdGlvblRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBtb2JpbGVBY3Rpb25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRvZ2dsZSBtZW51IG9uIGJ1dHRvbiBjbGlja1xyXG4gICAgbW9iaWxlQWN0aW9uVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9iaWxlQWN0aW9uTWVudSk7XHJcblxyXG4gICAgLy8gQ2xvc2UgbWVudSB3aGVuIGNsaWNraW5nIG9uIGEgbGluayBpbnNpZGVcclxuICAgIGNvbnN0IG1vYmlsZUFjdGlvbkxpbmtzID0gbW9iaWxlQWN0aW9uTWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubW9iaWxlLWFjdGlvbi1saW5rJyk7XHJcbiAgICBtb2JpbGVBY3Rpb25MaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vYmlsZUFjdGlvbk1lbnUpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE1vYmlsZSBNZW51IE1vZHVsZVxyXG4gKiBIYW5kbGVzIG1vYmlsZSBoYW1idXJnZXIgbWVudSBhbmQgYWN0aW9uIG1lbnUgZHJvcGRvd24gZnVuY3Rpb25hbGl0eVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIG1vYmlsZSBtZW51IGZ1bmN0aW9uYWxpdHlcclxuICogU2V0cyB1cCBidXJnZXIgdG9nZ2xlLCBtb2JpbGUgbWVudSwgYW5kIGFjdGlvbiBtZW51ICh1c2VyIGRyb3Bkb3duKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNb2JpbGVNZW51KCkge1xyXG4gICAgY29uc3QgYnVyZ2VyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlclRvZ2dsZScpO1xyXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVNZW51Jyk7XHJcbiAgICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNZW51Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1vdmVybGF5Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2JpbGUtbmF2LWxpbmtzIGEsIC5tb2JpbGUtYXV0aC1saW5rJyk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgZXhpc3RcclxuICAgIGlmICghYnVyZ2VyVG9nZ2xlIHx8ICFtb2JpbGVNZW51KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbk1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uTWVudVRvZ2dsZScpO1xyXG4gICAgY29uc3QgYWN0aW9uTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb25NZW51Jyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgbW9iaWxlIG1lbnUgb3Blbi9jbG9zZWRcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICBidXJnZXJUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID8gJ2hpZGRlbicgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb3NlIG1vYmlsZSBtZW51XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudUhhbmRsZXIoKSB7XHJcbiAgICAgICAgYnVyZ2VyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIGNsb3NlQWN0aW9uTWVudSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIGFjdGlvbiBtZW51ICh1c2VyIGRyb3Bkb3duKVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVBY3Rpb25NZW51KCkge1xyXG4gICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnVUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgYWN0aW9uIG1lbnVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY2xvc2VBY3Rpb25NZW51KCkge1xyXG4gICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnVUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgZm9yIGJ1cmdlciBtZW51XHJcbiAgICBidXJnZXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51KTtcclxuXHJcbiAgICBpZiAoY2xvc2VNZW51KSB7XHJcbiAgICAgICAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vYmlsZU1lbnVPdmVybGF5KSB7XHJcbiAgICAgICAgbW9iaWxlTWVudU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnVIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDbG9zZSBtZW51IHdoZW4gY2xpY2tpbmcgb24gYSBsaW5rXHJcbiAgICBtb2JpbGVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnVIYW5kbGVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFjdGlvbiBtZW51IC0gaG92ZXIgYmVoYXZpb3Igd2l0aCBkZWxheVxyXG4gICAgY29uc3QgYWN0aW9uTWVudVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLW1lbnUtd3JhcHBlcicpO1xyXG4gICAgbGV0IGNsb3NlTWVudVRpbWVvdXQ7XHJcblxyXG4gICAgaWYgKGFjdGlvbk1lbnVXcmFwcGVyKSB7XHJcbiAgICAgICAgYWN0aW9uTWVudVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY2xvc2VNZW51VGltZW91dCk7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25NZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTWVudVRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhY3Rpb25NZW51V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VBY3Rpb25NZW51KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGFjdGlvbiBtZW51IHdoZW4gY2xpY2tpbmcgb24gYSBsaW5rIGluc2lkZVxyXG4gICAgICAgIGlmIChhY3Rpb25NZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1lbnUucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VBY3Rpb25NZW51KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxuICogQW5pbWFsIENhcmRzIE1vZHVsZVxuICogSGFuZGxlcyBhbmltYWwgY2FyZCBpbnRlcmFjdGlvbnMgYW5kIG5hdmlnYXRpb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFuaW1hbENhcmRzKCkge1xuICAgIGNvbnN0IGFuaW1hbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hbC1jYXJkJyk7XG5cbiAgICBhbmltYWxDYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAvLyBEb24ndCBhZGQgY2xpY2sgbmF2aWdhdGlvbiBmb3IgY2Fyb3VzZWwgY2FyZHMgLSBjYXJvdXNlbCBoYW5kbGVzIHRoZWlyIGludGVyYWN0aW9uXG4gICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWwtY2FyZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgY2xpY2sgaGFuZGxlciBmb3IgZ3JpZCBjYXJkcyAoZXhjbHVkaW5nIGJ1dHRvbnMpXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAvLyBEb24ndCB0cmlnZ2VyIGlmIGNsaWNraW5nIG9uIGJ1dHRvbnNcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuYWN0aW9uLWJ0bicpIHx8IGUudGFyZ2V0LmNsb3Nlc3QoJy5zZWUtbW9yZS1idG4nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0IGFuaW1hbCBJRCBhbmQgcmVkaXJlY3QgdG8gZGV0YWlsIHBhZ2VcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hbElkID0gdGhpcy5kYXRhc2V0LmFuaW1hbElkO1xuICAgICAgICAgICAgaWYgKGFuaW1hbElkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2FuaW1hbHMvJHthbmltYWxJZH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgaG92ZXIgZWZmZWN0c1xuICAgICAgICBjb25zdCBpbWFnZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtaW1hZ2UgaW1nJyk7XG4gICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMDUpJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVTZWVNb3JlQnV0dG9ucygpIHtcbiAgICBjb25zdCBzZWVNb3JlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWUtbW9yZS1idG4nKTtcblxuICAgIHNlZU1vcmVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgY29uc3QgYW5pbWFsSWQgPSB0aGlzLmRhdGFzZXQuYW5pbWFsSWQ7XG5cbiAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIGFuaW1hbCBkZXRhaWwgcGFnZVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2FuaW1hbHMvJHthbmltYWxJZH1gO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8qKlxuICogRmF2b3JpdGVzIE1vZHVsZVxuICogSGFuZGxlcyBhZGRpbmcgYW5kIHJlbW92aW5nIGZhdm9yaXRlc1xuICovXG5cbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRmF2b3JpdGUoYW5pbWFsSWQpIHtcbiAgICBjb25zb2xlLmxvZyhgQWRkaW5nIGFuaW1hbCAke2FuaW1hbElkfSB0byBmYXZvcml0ZXNgKTtcblxuICAgIGZldGNoKCcvYXBpL2Zhdm9yaXRlcycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbmltYWxJZDogYW5pbWFsSWQgfSlcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignQWpvdXTDqSBhdXggZmF2b3JpcyAhJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oZGF0YS5tZXNzYWdlIHx8ICdFcnJldXIgbG9ycyBkZSBsXFwnYWpvdXQgYXV4IGZhdm9yaXMnLCAnZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKCdWb3VzIGRldmV6IMOqdHJlIGNvbm5lY3TDqSBwb3VyIGFqb3V0ZXIgdW4gYW5pbWFsIMOgIHZvcyBmYXZvcmlzJywgJ2Vycm9yJyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYXZvcml0ZShhbmltYWxJZCkge1xuICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyBhbmltYWwgJHthbmltYWxJZH0gZnJvbSBmYXZvcml0ZXNgKTtcblxuICAgIGZldGNoKGAvYXBpL2Zhdm9yaXRlcy8ke2FuaW1hbElkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignUmV0aXLDqSBkZXMgZmF2b3JpcycsICdpbmZvJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKGRhdGEubWVzc2FnZSB8fCAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24nLCAnZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKCdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbicsICdlcnJvcicpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUZhdm9yaXRlQnV0dG9ucygpIHtcbiAgICBjb25zdCBmYXZvcml0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdGUtYnRuJyk7XG5cbiAgICBmYXZvcml0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBjb25zdCBhbmltYWxJZCA9IHRoaXMuZGF0YXNldC5hbmltYWxJZDtcbiAgICAgICAgICAgIGNvbnN0IGhlYXJ0SWNvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignaScpO1xuXG4gICAgICAgICAgICAvLyBUb2dnbGUgZmF2b3JpdGUgc3RhdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2Zhdm9yaXRlZCcpO1xuICAgICAgICAgICAgICAgIGhlYXJ0SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXMnKTtcbiAgICAgICAgICAgICAgICBoZWFydEljb24uY2xhc3NMaXN0LmFkZCgnZmFyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZnJvbSBmYXZvcml0ZXNcbiAgICAgICAgICAgICAgICByZW1vdmVGYXZvcml0ZShhbmltYWxJZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGVkJyk7XG4gICAgICAgICAgICAgICAgaGVhcnRJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcicpO1xuICAgICAgICAgICAgICAgIGhlYXJ0SWNvbi5jbGFzc0xpc3QuYWRkKCdmYXMnKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byBmYXZvcml0ZXNcbiAgICAgICAgICAgICAgICBhZGRGYXZvcml0ZShhbmltYWxJZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBhbmltYXRpb25cbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMiknO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiLyoqXG4gKiBOb3RpZmljYXRpb25zIE1vZHVsZVxuICogSGFuZGxlcyBkaXNwbGF5IG9mIHRvYXN0IG5vdGlmaWNhdGlvbnNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlLCB0eXBlID0gJ2luZm8nKSB7XG4gICAgLy8gUmVtb3ZlIGV4aXN0aW5nIG5vdGlmaWNhdGlvbnNcbiAgICBjb25zdCBleGlzdGluZ05vdGlmaWNhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90aWZpY2F0aW9uJyk7XG4gICAgZXhpc3RpbmdOb3RpZmljYXRpb25zLmZvckVhY2gobm90aWYgPT4gbm90aWYucmVtb3ZlKCkpO1xuXG4gICAgLy8gQ3JlYXRlIG5vdGlmaWNhdGlvbiBlbGVtZW50XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IGBub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLSR7dHlwZX1gO1xuICAgIG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cbiAgICAvLyBEZWZpbmUgY29sb3JzIGJhc2VkIG9uIHR5cGVcbiAgICBjb25zdCBjb2xvcnMgPSB7XG4gICAgICAgIHN1Y2Nlc3M6ICcjMTBCOTgxJyxcbiAgICAgICAgZXJyb3I6ICcjRUY0NDQ0JyxcbiAgICAgICAgaW5mbzogJyMzQjgyRjYnLFxuICAgICAgICB3YXJuaW5nOiAnI0Y1OUUwQidcbiAgICB9O1xuXG4gICAgLy8gU3R5bGUgdGhlIG5vdGlmaWNhdGlvblxuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzW3R5cGVdIHx8IGNvbG9ycy5pbmZvfTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBhbmltYXRpb246IHNsaWRlSW5SaWdodCAwLjNzIGVhc2U7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBgO1xuXG4gICAgLy8gQWRkIGFuaW1hdGlvbiBzdHlsZXMgaWYgbm90IGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmaWNhdGlvbi1zdHlsZXMnKSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlkID0gJ25vdGlmaWNhdGlvbi1zdHlsZXMnO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgdG8gcGFnZVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcblxuICAgIC8vIFJlbW92ZSBhZnRlciA0IHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uLnN0eWxlLmFuaW1hdGlvbiA9ICdzbGlkZU91dFJpZ2h0IDAuM3MgZWFzZSc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICB9LCA0MDAwKTtcbn1cbiIsIi8qKlxuICogU2hhcmUgTW9kdWxlXG4gKiBIYW5kbGVzIHNoYXJpbmcgZnVuY3Rpb25hbGl0eVxuICovXG5cbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU2hhcmUoYW5pbWFsSWQpIHtcbiAgICBjb25zb2xlLmxvZyhgU2hhcmluZyBhbmltYWwgJHthbmltYWxJZH1gKTtcblxuICAgIC8vIFVzZSBXZWIgU2hhcmUgQVBJIGlmIGF2YWlsYWJsZVxuICAgIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQWRvcHRleiBjZXQgYWRvcmFibGUgYW5pbWFsICEnLFxuICAgICAgICAgICAgdGV4dDogJ0TDqWNvdXZyZXogY2V0IGFuaW1hbCBxdWkgY2hlcmNoZSB1bmUgZmFtaWxsZScsXG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBgL2FuaW1hbHMvJHthbmltYWxJZH1gXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ1BhcnRhZ8OpIGF2ZWMgc3VjY8OocyAhJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHNoYXJpbmc6JywgZXJyb3IpO1xuICAgICAgICAgICAgZmFsbGJhY2tTaGFyZShhbmltYWxJZCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhbGxiYWNrU2hhcmUoYW5pbWFsSWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhbGxiYWNrU2hhcmUoYW5pbWFsSWQpIHtcbiAgICAvLyBDb3B5IGxpbmsgdG8gY2xpcGJvYXJkIGFzIGZhbGxiYWNrXG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIGAvYW5pbWFscy8ke2FuaW1hbElkfWA7XG5cbiAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1cmwpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignTGllbiBjb3Bpw6kgZGFucyBsZSBwcmVzc2UtcGFwaWVycyAhJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ0ltcG9zc2libGUgZGUgY29waWVyIGxlIGxpZW4nLCAnZXJyb3InKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFZlcnkgb2xkIGJyb3dzZXJzIGZhbGxiYWNrXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oJ0NvcGlleiBjZSBsaWVuOiAnICsgdXJsLCAnaW5mbycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBY3Rpb25CdXR0b25zKCkge1xuICAgIC8vIFNoYXJlIGJ1dHRvbnNcbiAgICBjb25zdCBzaGFyZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hhcmUtYnRuJyk7XG4gICAgc2hhcmVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgY29uc3QgYW5pbWFsSWQgPSB0aGlzLmRhdGFzZXQuYW5pbWFsSWQ7XG4gICAgICAgICAgICBoYW5kbGVTaGFyZShhbmltYWxJZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiLyoqXG4gKiBUb29sdGlwcyBNb2R1bGVcbiAqIEhhbmRsZXMgdG9vbHRpcCBkaXNwbGF5IGFuZCBtb2JpbGUgbW9kYWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRvb2x0aXBzKCkge1xuICAgIGNvbnN0IHRhZ3NXaXRoVG9vbHRpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFnW2RhdGEtdG9vbHRpcF0sIC50YWctbWluaVtkYXRhLXRvb2x0aXBdJyk7XG5cbiAgICB0YWdzV2l0aFRvb2x0aXBzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgLy8gQWRkIGhvdmVyIGV2ZW50cyBmb3IgYmV0dGVyIHRvb2x0aXAgcG9zaXRpb25pbmdcbiAgICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcpO1xuICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAvLyBQb3NpdGlvbiB0b29sdGlwIHRvIGF2b2lkIHZpZXdwb3J0IG92ZXJmbG93XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcEVsZW1lbnQgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IHRvb2x0aXAgcG9zaXRpb24gaWYgbmVhciB2aWV3cG9ydCBlZGdlc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwc2V1ZG9FbGVtZW50ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodG9vbHRpcEVsZW1lbnQsICc6OmJlZm9yZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVjdC5sZWZ0IDwgMTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b29sdGlwLWFsaWduJywgJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN0LnJpZ2h0ID4gd2luZG93LmlubmVyV2lkdGggLSAxNTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRvb2x0aXAtYWxpZ24nLCAncmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHRvb2x0aXAgcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tdG9vbHRpcC1hbGlnbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgY2xpY2sgZXZlbnQgZm9yIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnLW5hbWUnKTtcblxuICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dUYWdNb2RhbCh0YWdOYW1lLCB0b29sdGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RhZ01vZGFsKHRhZ05hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgLy8gUmVtb3ZlIGV4aXN0aW5nIG1vZGFsIGlmIGFueVxuICAgIGNvbnN0IGV4aXN0aW5nTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFnLW1vZGFsJyk7XG4gICAgaWYgKGV4aXN0aW5nTW9kYWwpIHtcbiAgICAgICAgZXhpc3RpbmdNb2RhbC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbW9kYWxcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9ICd0YWctbW9kYWwnO1xuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhZy1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLW1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMz4ke3RhZ05hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFnLW1vZGFsLWNsb3NlXCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLW1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhZy1tb2RhbC1iYWNrZHJvcFwiPjwvZGl2PlxuICAgIGA7XG5cbiAgICAvLyBBZGQgdG8gcGFnZVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgLy8gQ2xvc2UgbW9kYWwgZXZlbnRzXG4gICAgY29uc3QgY2xvc2VCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcudGFnLW1vZGFsLWNsb3NlJyk7XG4gICAgY29uc3QgYmFja2Ryb3AgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcudGFnLW1vZGFsLWJhY2tkcm9wJyk7XG5cbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5hbmltYXRpb24gPSAnZmFkZU91dCAwLjNzIGVhc2UnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcblxuICAgIC8vIENsb3NlIG9uIGVzY2FwZSBrZXlcbiAgICBjb25zdCBlc2NhcGVIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XG59XG4iLCIvKipcclxuICogTmV3cyBDYXJvdXNlbCBNb2R1bGVcclxuICogSW5maW5pdGUgc2Nyb2xsIGNhcm91c2VsIGZvciBhZG9wdGVyIG5ld3NcclxuICogQ3JlYXRlcyBhIHNlYW1sZXNzIGluZmluaXRlIGxvb3Agd2l0aG91dCB2aXNpYmxlIGp1bXBzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgbmV3cyBjYXJvdXNlbHNcclxuICogQXV0b21hdGljYWxseSBzdGFydHMgaW5maW5pdGUgc2Nyb2xsIGFuaW1hdGlvbiBmb3IgYWxsIGNhcm91c2VscyBvbiB0aGUgcGFnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVOZXdzQ2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3cy1jYXJvdXNlbCcpO1xyXG5cclxuICAgIGNhcm91c2Vscy5mb3JFYWNoKGNhcm91c2VsID0+IHtcclxuICAgICAgICBjb25zdCB0cmFjayA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLXRyYWNrJyk7XHJcbiAgICAgICAgaWYgKCF0cmFjaykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjYXJkcyA9IHRyYWNrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdzLWNhcmQnKTtcclxuICAgICAgICBpZiAoY2FyZHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0b3RhbCB3aWR0aCBvZiBvbmUgc2V0IG9mIGNhcmRzXHJcbiAgICAgICAgbGV0IHRyYWNrV2lkdGggPSAwO1xyXG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIHRyYWNrV2lkdGggKz0gY2FyZC5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0cmFjaykuZ2FwIHx8IDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBIYWxmIHRoZSB0cmFjayB3aWR0aCAoc2luY2UgY2FyZHMgYXJlIGR1cGxpY2F0ZWQpXHJcbiAgICAgICAgY29uc3QgaGFsZldpZHRoID0gdHJhY2tXaWR0aCAvIDI7XHJcblxyXG4gICAgICAgIC8vIERldGVybWluZSBkaXJlY3Rpb25cclxuICAgICAgICBjb25zdCBpc1JpZ2h0ID0gY2Fyb3VzZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXdzLWNhcm91c2VsLXJpZ2h0Jyk7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gaXNSaWdodCA/IDAgOiAtaGFsZldpZHRoO1xyXG5cclxuICAgICAgICAvLyBBbmltYXRpb24gc3BlZWQgKHBpeGVscyBwZXIgc2Vjb25kKVxyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gaGFsZldpZHRoIC8gMzU7IC8vIDM1IHNlY29uZHMgZm9yIGZ1bGwgY3ljbGVcclxuXHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbkZyYW1lSWQ7XHJcbiAgICAgICAgbGV0IGxhc3RUaW1lc3RhbXA7XHJcbiAgICAgICAgbGV0IGlzUGF1c2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuaW1hdGlvbiBsb29wIHVzaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXAgLSBIaWdoIHJlc29sdXRpb24gdGltZXN0YW1wIGZyb20gUkFGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSh0aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgaWYgKCFsYXN0VGltZXN0YW1wKSBsYXN0VGltZXN0YW1wID0gdGltZXN0YW1wO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lc3RhbXA7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIC09IChzcGVlZCAqIGRlbHRhKSAvIDEwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHdoZW4gaGFsZndheSB0aHJvdWdoXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IC1oYWxmV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSByaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IChzcGVlZCAqIGRlbHRhKSAvIDEwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHdoZW4gYXQgc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IC1oYWxmV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRyYWNrLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9ufXB4LCAwLCAwKWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdGFydCBhbmltYXRpb25cclxuICAgICAgICBhbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICAgICAgICAvLyBQYXVzZSBvbiBob3ZlclxyXG4gICAgICAgIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzUGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGFzdFRpbWVzdGFtcCA9IG51bGw7IC8vIFJlc2V0IHRpbWVzdGFtcCB0byBhdm9pZCBqdW1wXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENsZWFudXAgb24gcGFnZSB1bmxvYWRcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uRnJhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIFNlYXJjaCBmb3JtIGZ1bmN0aW9uYWxpdHlcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTZWFyY2hGb3JtKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idG4nKTtcclxuXHJcbiAgICBpZiAoc2VhcmNoQnRuKSB7XHJcbiAgICAgICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGVjaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtc2VsZWN0JykudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNleGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V4ZS1zZWxlY3QnKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXBhcnRtZW50LXNlbGVjdCcpLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgcXVlcnkgcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWVzKSBwYXJhbXMuc2V0KCdzcGVjaWVzJywgc3BlY2llcyk7XHJcbiAgICAgICAgICAgIGlmIChzZXhlKSBwYXJhbXMuc2V0KCdzZXhlJywgc2V4ZSk7XHJcbiAgICAgICAgICAgIGlmIChkZXBhcnRtZW50KSBwYXJhbXMuc2V0KCdkZXBhcnRtZW50JywgZGVwYXJ0bWVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWRpcmVjdCB0byBhbmltYWxzIHBhZ2Ugd2l0aCBmaWx0ZXJzXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHF1ZXJ5U3RyaW5nID8gYC9hbmltYWxzPyR7cXVlcnlTdHJpbmd9YCA6ICcvYW5pbWFscyc7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEZpbGUgSW5wdXQgRGlzcGxheSBVdGlsaXR5XHJcbiAqIE1hbmFnZXMgZGlzcGxheSBvZiBzZWxlY3RlZCBmaWxlIG5hbWVzIGluIGZpbGUgaW5wdXQgZmllbGRzXHJcbiAqIFVzZWQgaW46IHNlY3VyaXR5L2F1dGguaHRtbC50d2lnLCBhZG9wdGVyX25ld3MvbmV3Lmh0bWwudHdpZ1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGZpbGUgaW5wdXQgZGlzcGxheSBmb3IgYSBzcGVjaWZpYyBmaWxlIGlucHV0IGFuZCBkaXNwbGF5IGVsZW1lbnRcclxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgLSBDU1Mgc2VsZWN0b3IgZm9yIHRoZSBmaWxlIGlucHV0IGVsZW1lbnRcclxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlTZWxlY3RvciAtIENTUyBzZWxlY3RvciBmb3IgdGhlIGVsZW1lbnQgdG8gZGlzcGxheSB0aGUgZmlsZW5hbWUgaW5cclxuICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRUZXh0IC0gRGVmYXVsdCB0ZXh0IHRvIHNob3cgd2hlbiBubyBmaWxlIGlzIHNlbGVjdGVkIChkZWZhdWx0OiBcIkF1Y3VuIGZpY2hpZXJcIilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplRmlsZUlucHV0RGlzcGxheShpbnB1dFNlbGVjdG9yLCBkaXNwbGF5U2VsZWN0b3IsIGRlZmF1bHRUZXh0ID0gJ0F1Y3VuIGZpY2hpZXInKSB7XHJcbiAgICBjb25zdCBmaWxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlucHV0U2VsZWN0b3IpO1xyXG4gICAgY29uc3QgZmlsZU5hbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkaXNwbGF5U2VsZWN0b3IpO1xyXG5cclxuICAgIGlmICghZmlsZUlucHV0IHx8ICFmaWxlTmFtZURpc3BsYXkpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYEZpbGUgaW5wdXQgZGlzcGxheTogQ291bGQgbm90IGZpbmQgZWxlbWVudHMgZm9yIFwiJHtpbnB1dFNlbGVjdG9yfVwiIG9yIFwiJHtkaXNwbGF5U2VsZWN0b3J9XCJgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IGluaXRpYWwgZGlzcGxheSB0ZXh0XHJcbiAgICBmaWxlTmFtZURpc3BsYXkudGV4dENvbnRlbnQgPSBkZWZhdWx0VGV4dDtcclxuXHJcbiAgICAvLyBVcGRhdGUgZGlzcGxheSBvbiBmaWxlIHNlbGVjdGlvbiBjaGFuZ2VcclxuICAgIGZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZmlsZU5hbWVEaXNwbGF5LnRleHRDb250ZW50ID0gdGhpcy5maWxlc1swXS5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbGVOYW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGRlZmF1bHRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhbGwgZmlsZSBpbnB1dCBkaXNwbGF5cyBvbiB0aGUgcGFnZVxyXG4gKiBMb29rcyBmb3IgZWxlbWVudHMgd2l0aCBkYXRhLWZpbGUtaW5wdXQtZGlzcGxheSBhdHRyaWJ1dGVcclxuICpcclxuICogVXNhZ2UgaW4gSFRNTDpcclxuICogPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJyZWdpc3Rlcl9pbWFnZUZpbGVfZmlsZVwiIGRhdGEtZmlsZS1pbnB1dC1kaXNwbGF5PVwiZmlsZS1uYW1lLWRpc3BsYXlcIj5cclxuICogPHNwYW4gaWQ9XCJmaWxlLW5hbWUtZGlzcGxheVwiPkF1Y3VuIGZpY2hpZXI8L3NwYW4+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFsbEZpbGVJbnB1dERpc3BsYXlzKCkge1xyXG4gICAgY29uc3QgZmlsZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpbGUtaW5wdXQtZGlzcGxheV0nKTtcclxuXHJcbiAgICBmaWxlSW5wdXRzLmZvckVhY2goZmlsZUlucHV0ID0+IHtcclxuICAgICAgICBjb25zdCBkaXNwbGF5RWxlbWVudElkID0gZmlsZUlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1maWxlLWlucHV0LWRpc3BsYXknKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpc3BsYXlFbGVtZW50SWQpO1xyXG5cclxuICAgICAgICBpZiAoZGlzcGxheUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFRleHQgPSBkaXNwbGF5RWxlbWVudC50ZXh0Q29udGVudCB8fCAnQXVjdW4gZmljaGllcic7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVGaWxlSW5wdXREaXNwbGF5KFxyXG4gICAgICAgICAgICAgICAgYCMke2ZpbGVJbnB1dC5pZH1gLFxyXG4gICAgICAgICAgICAgICAgYCMke2Rpc3BsYXlFbGVtZW50SWR9YCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRUZXh0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE1vZGFsIFV0aWxpdHkgRnVuY3Rpb25zXHJcbiAqIFNoYXJlZCBmdW5jdGlvbnMgZm9yIG1vZGFsIG1hbmFnZW1lbnQgYWNyb3NzIHRoZSBhcHBsaWNhdGlvblxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDbG9zZSB0aGUgZmxhc2ggbWVzc2FnZSBtb2RhbFxyXG4gKiBVc2VkIGluIHZhcmlvdXMgdGVtcGxhdGVzIChtb3RfZGVfcGFzc2UvcmVzZXQuaHRtbC50d2lnLCBwb3N0X3JlZ2lzdHJhdGlvbl9hc3NvY2lhdGlvbi5odG1sLnR3aWcsIGF1dGguaHRtbC50d2lnKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZlcm1lck1vZGFsZSgpIHtcclxuICAgIGNvbnN0IG1vZGFsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbGUtZmxhc2gnKTtcclxuICAgIGlmIChtb2RhbGUpIHtcclxuICAgICAgICBtb2RhbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgZmVybWVyTW9kYWxlIG9uIERPTUNvbnRlbnRMb2FkZWRcclxuICogQXV0b21hdGljYWxseSBjbG9zZXMgYW55IGZsYXNoIG1vZGFscyB3aGVuIHRoZSBwYWdlIGxvYWRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZU1vZGFsVXRpbHMoKSB7XHJcbiAgICAvLyBNYWtlIGZlcm1lck1vZGFsZSBhdmFpbGFibGUgZ2xvYmFsbHkgZm9yIGlubGluZSBvbmNsaWNrIGhhbmRsZXJzIGluIEhUTUxcclxuICAgIHdpbmRvdy5mZXJtZXJNb2RhbGUgPSBmZXJtZXJNb2RhbGU7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImluaXRDYXJvdXNlbCIsImluaXRBbmltYWxzQ2Fyb3VzZWwiLCJpbml0aWFsaXplTmV3c0Nhcm91c2VsIiwiaW5pdFNlYXJjaEZvcm0iLCJpbml0aWFsaXplQW5pbWFscyIsImluaXRpYWxpemVDb250YWN0TW9kYWwiLCJpbml0QXV0aCIsImluaXRpYWxpemVNb2JpbGVNZW51IiwiaW5pdGlhbGl6ZU1vYmlsZUFjdGlvbk1lbnUiLCJpbml0aWFsaXplQ29tbWVudFJlcGx5IiwiaW5pdGlhbGl6ZUpvaW5Gb3JtIiwiaW5pdGlhbGl6ZU1vZGFsVXRpbHMiLCJpbml0aWFsaXplQWxsRmlsZUlucHV0RGlzcGxheXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEluZGljYXRvciIsInRhcmdldFNlY3Rpb24iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic3R5bGUiLCJjdXJzb3IiLCJjb250YWN0QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJyZXBseUJ1dHRvbnMiLCJnZXRFbGVtZW50QnlJZCIsImFzc29jaWF0aW9uUmFkaW9zIiwiY2Fyb3VzZWwiLCJjYXJkcyIsImluZGljYXRvcnMiLCJwcmV2QnRuIiwibmV4dEJ0biIsImN1cnJlbnRJbmRleCIsImlzTmF2aWdhdGluZyIsInVwZGF0ZUNhcm91c2VsIiwiZm9yRWFjaCIsImNhcmQiLCJpbmRleCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlbGF0aXZlUG9zIiwiYWRkIiwiaW5kaWNhdG9yIiwidG9nZ2xlIiwiZ29Ub1NsaWRlIiwic2V0VGltZW91dCIsInByZXZJbmRleCIsIm5leHRJbmRleCIsImxpbmtzIiwibGluayIsImUiLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xpY2tlZEVsZW1lbnQiLCJ0YXJnZXQiLCJpc1ZpZXdCdG4iLCJjbG9zZXN0Iiwia2V5IiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblgiLCJoYW5kbGVTd2lwZSIsInN3aXBlVGhyZXNob2xkIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJpbml0aWFsaXplRmF2b3JpdGVCdXR0b25zIiwiYWRkRmF2b3JpdGUiLCJyZW1vdmVGYXZvcml0ZSIsInNob3dOb3RpZmljYXRpb24iLCJoYW5kbGVTaGFyZSIsImluaXRpYWxpemVBY3Rpb25CdXR0b25zIiwiaW5pdGlhbGl6ZVRvb2x0aXBzIiwiaW5pdGlhbGl6ZUFuaW1hbENhcmRzIiwiaW5pdGlhbGl6ZVNlZU1vcmVCdXR0b25zIiwid2luZG93IiwiQW5pbWFsQ2FyZHMiLCJpbml0aWFsaXplRmlsZUlucHV0RGlzcGxheSIsImF1dGhXcmFwcGVyIiwic2lnblVwQnRuIiwic2lnbkluQnRuIiwibG9naW5Gb3JtIiwicmVnaXN0ZXJGb3JtIiwic3dpdGNoVG9TaWduVXAiLCJsb2dpbkFuaW1hdGlvbnMiLCJlbCIsImFuaW1hdGlvbiIsImNvbmNhdCIsInJlZ2lzdGVyQW5pbWF0aW9ucyIsInN3aXRjaFRvU2lnbkluIiwiaW5pdEFuaW1hdGlvbnMiLCJpbmZvQW5pbWF0aW9ucyIsImlucHV0cyIsImlucHV0IiwidmFsdWUiLCJwYXJlbnRFbGVtZW50IiwiZXhpc3RpbmdBc3NvY2lhdGlvblNlbGVjdCIsIm5ld0Fzc29jaWF0aW9uRmllbGQiLCJyYWRpbyIsInNlbGVjdGVkVmFsdWUiLCJkaXNwbGF5IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaW5qZWN0QXV0aFN0eWxlcyIsInN0eWxlSWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ0ZXh0Q29udGVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInNsaWRlcyIsImN1cnJlbnRTbGlkZSIsImF1dG9TbGlkZUludGVydmFsIiwic2hvd1NsaWRlIiwic2xpZGUiLCJuZXh0U2xpZGUiLCJzdGFydEF1dG9TbGlkZSIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlcGx5VG9nZ2xlQnV0dG9ucyIsImJ1dHRvbiIsImNvbW1lbnRJZCIsImRhdGFzZXQiLCJ0b2dnbGVSZXBseSIsImZvcm0iLCJhbmltYWxJZCIsImFzc29jaWF0aW9uSWQiLCJvcGVuQ29udGFjdE1vZGFsIiwidXJsIiwibW9kYWwiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJib2R5Iiwib3ZlcmZsb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJodG1sIiwibW9kYWxCb2R5IiwiaW5pdGlhbGl6ZUNvbnRhY3RGb3JtIiwiZXJyb3IiLCJjbG9zZUNvbnRhY3RNb2RhbCIsImNsb3NlQnRuIiwiZXNjYXBlSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvcGFjaXR5IiwiYWN0aW9uIiwic3VibWl0QnRuIiwib3JpZ2luYWxUZXh0IiwiZGlzYWJsZWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJDb250YWN0TW9kYWwiLCJvcGVuIiwiY2xvc2UiLCJpbml0aWFsaXplIiwiam9pbkJ0biIsIm1vYmlsZUFjdGlvblRvZ2dsZSIsIm1vYmlsZUFjdGlvbk1lbnUiLCJ0b2dnbGVNb2JpbGVBY3Rpb25NZW51IiwiY2xvc2VNb2JpbGVBY3Rpb25NZW51IiwibW9iaWxlQWN0aW9uTGlua3MiLCJidXJnZXJUb2dnbGUiLCJtb2JpbGVNZW51IiwiY2xvc2VNZW51IiwibW9iaWxlTWVudUNvbnRlbnQiLCJtb2JpbGVNZW51T3ZlcmxheSIsIm1vYmlsZUxpbmtzIiwiYWN0aW9uTWVudVRvZ2dsZSIsImFjdGlvbk1lbnUiLCJ0b2dnbGVNZW51IiwiY2xvc2VNZW51SGFuZGxlciIsImNsb3NlQWN0aW9uTWVudSIsInRvZ2dsZUFjdGlvbk1lbnUiLCJhY3Rpb25NZW51V3JhcHBlciIsImNsb3NlTWVudVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhbmltYWxDYXJkcyIsImxvY2F0aW9uIiwiaHJlZiIsImltYWdlIiwidHJhbnNmb3JtIiwic2VlTW9yZUJ1dHRvbnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZmF2b3JpdGVCdXR0b25zIiwiX3RoaXMiLCJoZWFydEljb24iLCJ0eXBlIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZXhpc3RpbmdOb3RpZmljYXRpb25zIiwibm90aWYiLCJub3RpZmljYXRpb24iLCJjb2xvcnMiLCJpbmZvIiwid2FybmluZyIsImNzc1RleHQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJuYXZpZ2F0b3IiLCJzaGFyZSIsInRpdGxlIiwib3JpZ2luIiwiZmFsbGJhY2tTaGFyZSIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNoYXJlQnV0dG9ucyIsInRhZ3NXaXRoVG9vbHRpcHMiLCJ0YWciLCJ0b29sdGlwIiwiZ2V0QXR0cmlidXRlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvb2x0aXBFbGVtZW50IiwicHNldWRvRWxlbWVudCIsImdldENvbXB1dGVkU3R5bGUiLCJsZWZ0Iiwic2V0UHJvcGVydHkiLCJyaWdodCIsImlubmVyV2lkdGgiLCJyZW1vdmVQcm9wZXJ0eSIsInRhZ05hbWUiLCJzaG93VGFnTW9kYWwiLCJkZXNjcmlwdGlvbiIsImV4aXN0aW5nTW9kYWwiLCJiYWNrZHJvcCIsImNsb3NlTW9kYWwiLCJjYXJvdXNlbHMiLCJ0cmFjayIsInRyYWNrV2lkdGgiLCJvZmZzZXRXaWR0aCIsInBhcnNlRmxvYXQiLCJnYXAiLCJoYWxmV2lkdGgiLCJpc1JpZ2h0IiwicG9zaXRpb24iLCJzcGVlZCIsImFuaW1hdGlvbkZyYW1lSWQiLCJsYXN0VGltZXN0YW1wIiwiaXNQYXVzZWQiLCJhbmltYXRlIiwidGltZXN0YW1wIiwiZGVsdGEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNlYXJjaEJ0biIsInNwZWNpZXMiLCJzZXhlIiwiZGVwYXJ0bWVudCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNldCIsInF1ZXJ5U3RyaW5nIiwidG9TdHJpbmciLCJpbnB1dFNlbGVjdG9yIiwiZGlzcGxheVNlbGVjdG9yIiwiZGVmYXVsdFRleHQiLCJmaWxlSW5wdXQiLCJmaWxlTmFtZURpc3BsYXkiLCJ3YXJuIiwiZmlsZXMiLCJuYW1lIiwiZmlsZUlucHV0cyIsImRpc3BsYXlFbGVtZW50SWQiLCJkaXNwbGF5RWxlbWVudCIsImZlcm1lck1vZGFsZSIsIm1vZGFsZSJdLCJzb3VyY2VSb290IjoiIn0=