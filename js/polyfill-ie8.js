/**
 * @file
 * polyfills for IE8
 * Require https://github.com/keithclark/JQuery-Extended-Selectors
 */

 jQuery(document).ready(function() {

  jQuery(".lf-2 article:nth-of-type(2n)").addClass("ie8-child-2n");
  jQuery(".lf-3 article:nth-of-type(3n)").addClass("ie8-child-3n");
  jQuery(".lf-4 article:nth-of-type(4n)").addClass("ie8-child-4n");
  jQuery(".lf-5 article:nth-of-type(5n)").addClass("ie8-child-5n");
  jQuery(".lf-6 article:nth-of-type(6n)").addClass("ie8-child-6n");



});
