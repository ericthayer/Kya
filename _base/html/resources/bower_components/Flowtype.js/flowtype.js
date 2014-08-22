/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

(function(a){a.fn.flowtype=function(b){var d=a.extend({maximum:9999,minimum:1,maxFont:9999,minFont:1,fontRatio:35},b),c=function(h){var f=a(h),e=f.width(),g=e>d.maximum?d.maximum:e<d.minimum?d.minimum:e,j=g/d.fontRatio,i=j>d.maxFont?d.maxFont:j<d.minFont?d.minFont:j;f.css("font-size",i+"px")};return this.each(function(){var e=this;a(window).resize(function(){c(e)});c(this)})}}(jQuery));