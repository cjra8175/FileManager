/* !v1-1.0.0.js 2018-01-10 */

!function(a){"use strict";function b(a){a.touches||(a.touches=a.originalEvent.touches)}function c(a,b){b._startY=a.touches[0].pageY,b.touchScrollTop=b.$scrollArea.scrollTop()}function d(b,c){c._curY=b.touches[0].pageY,c._moveY=c._curY-c._startY,c._moveY>0?c.direction="down":c._moveY<0&&(c.direction="up");var d=Math.abs(c._moveY);""!=c.opts.matchInloadUpFn&&c.touchScrollTop<=0&&"down"==c.direction&&!c.isLockUp&&(b.preventDefault(),"match-list"==c.$element.attr("id")||"myFollowContent"==c.$element.attr("id")?c.upInsertDOM||(a("#main").prepend('<div class="'+c.opts.domUp.domClass+'"></div>'),c.upInsertDOM=!0):c.upInsertDOM||(c.$element.prepend('<div class="'+c.opts.domUp.domClass+'"></div>'),c.upInsertDOM=!0),c.$domUp=a("."+c.opts.domUp.domClass),i(c.$domUp,0),d<=c.opts.distance?(c._offsetY=d,c.$domUp.html(c.opts.domUp.domRefresh)):d>c.opts.distance&&d<=2*c.opts.distance?(c._offsetY=c.opts.distance+.5*(d-c.opts.distance),c.$domUp.html(c.opts.domUp.domUpdate)):c._offsetY=c.opts.distance+.5*c.opts.distance+.2*(d-2*c.opts.distance),c.$domUp.css({height:c._offsetY}))}function e(b){var c=Math.abs(b._moveY);""!=b.opts.matchInloadUpFn&&b.touchScrollTop<=0&&"down"==b.direction&&!b.isLockUp&&(i(b.$domUp,300),c>b.opts.distance?(b.$domUp.css({height:b.$domUp.children().height()}),b.$domUp.html(b.opts.domUp.domLoad),b.loading=!0,b.opts.matchInloadUpFn(b)):b.$domUp.css({height:"0"}).on("webkitTransitionEnd mozTransitionEnd transitionend",function(){b.upInsertDOM=!1,a(this).remove()}),b._moveY=0)}function f(a){""!=a.opts.matchInloadDownFn&&a.opts.autoLoad&&a.isData&&a._scrollContentHeight-a._threshold<=a._scrollWindowHeight&&h(a)}function g(a){a.opts.scrollArea==j?a._scrollContentHeight=m.height():a._scrollContentHeight=a.$element[0].scrollHeight}function h(a){a.direction="up",a.$domDown.html(a.opts.domDown.domLoad),a.loading=!0,a.opts.matchInloadDownFn(a)}function i(a,b){a.css({"-webkit-transition":"all "+b+"ms",transition:"all "+b+"ms"})}var j=window,k=document,l=a(j),m=a(k);a.fn.matchInfoDropload=function(a){return new n(this,a)};var n=function(a,b){var c=this;c.$element=a,c.upInsertDOM=!1,c.loading=!1,c.isLockUp=!1,c.isLockDown=!1,c.isData=!0,c._scrollTop=0,c._threshold=0,c.init(b)};n.prototype.init=function(g){var i=this;i.opts=a.extend(!0,{},{scrollArea:i.$element,domUp:{domClass:"dropload-up",domRefresh:'<div class="dropload-refresh">下拉加载</div>',domUpdate:'<div class="dropload-update">释放加载</div>',domLoad:'<div class="dropload-load"><span class="loading"></span>正在加载</div>'},domDown:{domClass:"dropload-down",domRefresh:'<div class="dropload-refresh">上拉加载</div>',domLoad:'<div class="dropload-load"><span class="loading"></span>正在加载</div>',domNoData:'<div class="dropload-noData">已加载全部</div>'},autoLoad:!0,distance:50,threshold:"",matchInloadUpFn:"",matchInloadDownFn:""},g),""!=i.opts.matchInloadDownFn&&(i.$element.append('<div class="'+i.opts.domDown.domClass+'">'+i.opts.domDown.domRefresh+"</div>"),i.$domDown=a("."+i.opts.domDown.domClass)),i.$domDown&&""===i.opts.threshold?i._threshold=Math.floor(1*i.$domDown.height()/3):i._threshold=i.opts.threshold,i.opts.scrollArea==j?(i.$scrollArea=l,i._scrollContentHeight=m.height(),i._scrollWindowHeight=k.documentElement.clientHeight):(i.$scrollArea=i.opts.scrollArea,i._scrollContentHeight=i.$element[0].scrollHeight,i._scrollWindowHeight=i.$element.height()),f(i),l.on("resize",function(){clearTimeout(i.timer),i.timer=setTimeout(function(){i.opts.scrollArea==j?i._scrollWindowHeight=j.innerHeight:i._scrollWindowHeight=i.$element.height(),f(i)},150)}),i.$element.on("touchstart",function(a){i.loading||(b(a),c(a,i))}),i.$element.on("touchmove",function(a){i.loading||(b(a),d(a,i))}),i.$element.on("touchend",function(){i.loading||e(i)}),i.$scrollArea.on("scroll",function(){i._scrollTop=i.$scrollArea.scrollTop(),""!=i.opts.matchInloadDownFn&&!i.loading&&!i.isLockDown&&i._scrollContentHeight-i._threshold<=i._scrollWindowHeight+i._scrollTop&&h(i)})},n.prototype.lock=function(a){var b=this;void 0===a?"up"==b.direction?b.isLockDown=!0:"down"==b.direction?b.isLockUp=!0:(b.isLockUp=!0,b.isLockDown=!0):"up"==a?b.isLockUp=!0:"down"==a&&(b.isLockDown=!0,b.direction="up")},n.prototype.unlock=function(){var a=this;a.isLockUp=!1,a.isLockDown=!1,a.direction="up"},n.prototype.noData=function(a){var b=this;void 0===a||1==a?b.isData=!1:0==a&&(b.isData=!0)},n.prototype.resetload=function(){var b=this;"down"==b.direction&&b.upInsertDOM?b.$domUp.css({height:"0"}).on("webkitTransitionEnd mozTransitionEnd transitionend",function(){b.loading=!1,b.upInsertDOM=!1,a(this).remove(),g(b)}):"up"==b.direction&&(b.loading=!1,b.isData?(b.$domDown&&b.$domDown.html(b.opts.domDown.domRefresh),g(b),f(b)):b.$domDown&&b.$domDown.html(b.opts.domDown.domNoData))}}(window.Zepto||window.jQuery);