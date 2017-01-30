//  GLOBAL
//  🌎 Scripts used on all pages on the site
//  Examples:
//  🛣 Functionality in nagivation used accross all pages on the site
//  🏗 Utility functions, global variables, or browser events used on all pages of the site

import jq from 'jquery';
import emergence from 'emergence';

// export var windowWidth = 0, windowHeight = 0;

// UTILITY FUNCTIONS
// export function gaTrack(category, action, label) {
//   if (!jsDevMode) {
//     ga("send", "event", category, action, label);
//   } else {
//     console.log('GA Tracking Preview: ', category, action, label);
//   }
// }
// export function hasClass(el, className) {
//   if (el.classList) {
//     el.classList.contains(className);
//   } else {
//     new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
//   }
// }
// export function addClass(el, className) {
//   if (el.classList) {
//     el.classList.add(className);
//   } else {
//     el.className += ' ' + className;
//   }
// }
// export function removeClass(el, className) {
//   if (el.classList) {
//     el.classList.remove(className);
//   } else {
//     el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
//   }
// }


// CUSTOM FUNCTIONS
// export function createImagePlaceholders() {
//   var images = document.querySelectorAll('img[data-emergence="hidden"]');
//   Array.prototype.forEach.call(images, function(el, i){
//     if (el.getAttribute('data-width') && el.getAttribute('data-height')) {
//       const width = el.getAttribute('data-width'),
//             height = el.getAttribute('data-height');
//       el.style.paddingTop = (height / width * 100) + '%';
//       el.style.maxWidth = el.getAttribute('data-width') + 'px';
//     }
//   });
// }
// export function removeImagePlaceholder(el) {
//   el.style.paddingTop = '';
//   el.style.maxWidth = '';
// }
// export function setupEnhancments() {
//   createImagePlaceholders();
//   
//   emergence.init({
//   reset: false,
//   callback: function(element, state) {
//       if (state === 'visible' && g.hasClass(element, 'animate')) {
//         g.addClass(element, 'animated');
//         g.removeClass(element, 'animate');
//         element.removeAttribute('data-emergence');
//       }
// 
//       // lazy load images
//       if (state === 'visible' && element.hasAttribute('data-srcset')) {
//         const srcset = element.getAttribute('data-srcset');
//         element.setAttribute('srcset', srcset);
//         element.removeAttribute('data-srcset');
//         element.removeAttribute('data-emergence');
//         g.addClass(element, 'animated');
//
//         element.addEventListener('load', function () {
//            removeImagePlaceholder(element);
//         });
//       }
// 
//       // lazy load videos and audio files
//       if (state === 'visible' && element.hasAttribute('data-src')) {
//         const src = element.getAttribute('data-src');
//         element.setAttribute('src', src);
//         element.removeAttribute('data-src');
//         element.removeAttribute('data-emergence');
//         g.addClass(element, 'animated');
//       }
// 
//       // lazy load Marketo Forms
//       if (state === 'visible' && g.hasClass(element, 'marketoform')) {
//         const formId = element.getAttribute('data-form-id');
//         const formElementId = parseFloat(element.getAttribute('id').substr(9));
// 
//         MktoForms2.loadForm("//app-sj19.marketo.com", formId, formElementId);
//         element.removeAttribute('data-emergence');
//       }
//     }
//   });
// }


// BROWSER EVENTS
// jq(window).resize(function() {
//   windowWidth = jq(window).width();
//   windowHeight = jq(window).height();
// }).resize();
// // track click-to-call links
// jq('a[href^="tel:"]').click(function() {
//   gaTrack('Call', 'clicked', jq(this).attr('href').substr(4));
// });
// // track form submissions
// jq('form').submit(function() {
//   gaTrack('Forms', 'submitted', jq(this).attr('name')); // change from name attribute to some unique id
// });


// INIT FUNCTIONS
if (jsDevMode) {
  console.log('Global');
}