/* !v1-1.0.0.js 2018-01-10 */

window.Global || (Global = {
	fullHost: window.location.origin,
	authHost: window.location.origin,
	apiHost: window.location.origin,
//	domain: 'http://hm01.bjl888.site',
//	wsdomain: 'ws://hm01.bjl888.site:20185'
	domain: 'http://fb01.ma3z.com/',
	wsdomain: 'ws://13.124.46.251:20185'
}), Global.isAndroid = window.navigator.userAgent.indexOf("Android") > -1 || window.navigator.userAgent.indexOf("Linux") > -1, Global.isiOS = /iPhone|iPad|iPod|ios|IOS/.test(window.navigator.userAgent);
var T = {};
if (Global.isClub = "", Global.isPK = "", T.isNative = /QAPP/.test(window.navigator.userAgent), Global.iosBtn = !1, Global.versionStr = "web.0.0", Global.isFirst = !0, Global.iosAudit = Global.isiOS && Global.iosBtn, Global.trenchType = "", Global.is_majia = "", Global.app = "", Global.is_game = "", Global.show_wxpay = "", Global.hideValue = "", Global.OS = "web", T.isNative && (Global.OS = Global.isAndroid ? "Android" : "IOS"), void 0 === sType) var sType = 0;
var api = "";
Global.webRoot = "game-byzq", (window.location.origin.indexOf("localhost") > -1 || window.location.origin.indexOf("192.168.92") > -1) && (Global.webRoot = "game-byzq-v1"), Global.h_version = "1.0.0", Global.caseTime = -1, Global.hasHeiping = !1;
var hasAwardFlag = !1,
	tempAwardFlag = "",
	extraMinOdd = [],
	min_odd = "",
	selectCountCg = [],
	pageFrom = "",
	extendFlag = !1;
Date.prototype.format = function(a) {
	var b = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	};
	/([Yy]+)/.test(a) && (a = a.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
	for (var c in b) new RegExp("(" + c + ")").test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? b[c] : ("00" + b[c]).substr(("" + b[c]).length)));
	return a
};
var Collection = function() {
		var a = ["collect/req.json", "match/state.json", "game/getInvitationStatus", "game/getRandomMatchStatus", "game/getGameRecord"];
		return {
			collectFlag: !1,
			maxResTime: 3,
			ignoreList: a,
			filterUrl: function(b) {
				for (var c = 0; c < a.length; c++) if (-1 != b.indexOf(a[c])) return !1;
				return !0
			},
			sendSize: 10
		}
	}();
T.Storage = {
	is: function() {
		return !!window.localStorage
	},
	set: function(a, b, c) {
		switch (typeof b) {
		case "object":
			b = "object:" + JSON.stringify(b);
			break;
		case "string":
			b = "string:" + b
		}
		if (T.Storage.is()) {
			var d = c ? "sessionStorage" : "localStorage";
			try {
				window[d].setItem(a, b)
			} catch (a) {
				(navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("iPad") > -1) && confirm("为了正常运行网站，请关闭Safari浏览器-秘密（无痕）浏览")
			}
		}
	},
	get: function(a, b) {
		var c;
		if (T.Storage.is()) {
			var d = b ? "sessionStorage" : "localStorage";
			return c = window[d].getItem(a), /^object:/.test(c) ? c = JSON.parse(c.replace(/^object\:/, "")) : /^string:/.test(c) && (c = c.replace(/^string\:/, "")), c
		}
	},
	remove: function(a, b) {
		if (T.Storage.is()) {
			var c = b ? "sessionStorage" : "localStorage";
			window[c].removeItem(a)
		}
	}
}, window.alert = function(a, b, c) {
	if (0 == $("#alertBox").height || a != $("#alertBox p").html()) {
		var d = $('<div id="alertBox" class="popBox">                        <div class="confirmcontent"></div>                         <div class="confirmbutton"><div>好 的</div></div></div>');
		0 == $("#alertBox").length && $("body").append(d), 0 == $("#mask").length && $("body").append('<div id="mask" class="mask hide"></div>'), $(".confirmcontent").html(a), c && $("#alertBox .confirmbutton div").html(c) || $("#alertBox .confirmbutton div").html("好 的"), $("#mask, #alertBox").show(), document.documentElement.style.overflow = "hidden", $("#alertBox .confirmbutton div").one("click", function() {
			$(this).addClass("tapped");
			var a;
			clearTimeout(a), a = setTimeout(function() {
				$(".tapped").removeClass("tapped")
			}, 250), "function" == typeof b && b(), $("#alertBox,#mask").hide(), document.documentElement.style.overflow = ""
		})
	}
}, window.confirm = function(a, b, c, d, e) {
	var f = $('<div id="confirmBox" class="popBox">                        <div class="confirmcontent"></div>                         <div class="confirmbutton"      ><div class="zfqx">取 消</div><div>好 的</div></div></div>');
	0 == $("#confirmBox").length && $("body").append(f), 0 == $("#mask").length && $("body").append('<div id="mask" class="mask hide"></div>'), $("#confirmBox div.confirmcontent").html(a), c && $("#confirmBox .confirmbutton div").eq(0).html(c) || $("#confirmBox  .confirmbutton div").eq(0).html("取 消"), d && $("#confirmBox .confirmbutton div").eq(1).html(d) || $("#confirmBox  .confirmbutton div").eq(1).html("好 的"), $("#mask, #confirmBox").removeClass("hide").show(), document.documentElement.style.overflow = "hidden", $("#confirmBox .confirmbutton div").eq(0).off().on(end_ev, function(a) {
		e && "1" == e ? $("#confirmBox").hide() : $("#confirmBox,#mask").hide(), $(this).addClass("tapped");
		var b;
		clearTimeout(b), b = setTimeout(function() {
			$(".tapped").removeClass("tapped")
		}, 250), document.documentElement.style.overflow = "", a.stopPropagation(), a.preventDefault()
	}), $("#confirmBox  .confirmbutton div").eq(1).off().on(end_ev, function(a) {
		e && "1" == e ? $("#confirmBox").hide() : $("#confirmBox,#mask").hide(), $(this).addClass("tapped");
		var c;
		clearTimeout(c), c = setTimeout(function() {
			$(".tapped").removeClass("tapped")
		}, 250), "function" == typeof b && b(), document.documentElement.style.overflow = "", a.stopPropagation(), a.preventDefault()
	})
}, window.tip = function(a, b) {
	if (!$("#tipBox").length && (!b && (b = "error"), !$("#masktip").length || "loading" != b)) if ($(".alertBox").add($("#masktip")).remove(), clearTimeout(window.alert.time), $("input").blur(), "ok" == b || "error" == b || "loading" == b || "warn" == b) {
		if ("warn" != b) var c = $('<div id="tipBox" class="tipBox ' + b + '"><b></b>' + (a || "加载中") + "</div>");
		else var c = $('<div id="tipBox" class="tipBox tipBox1"><span class="tip-icon1"></span>' + (a || "加载中") + "</div>");
		setTimeout(function() {
			$("#tipBox").length || ($("body").append(c), c.css("margin-left", -$("#tipBox").width() / 2), "loading" != b ? c.animate({
				opacity: 1
			}, 400, "swing", function() {
				setTimeout(function() {
					c.animate({
						opacity: 0
					}, 400, "swing", function() {
						c.remove()
					})
				}, 1e3)
			}) : c.animate({
				opacity: 1
			}, 400))
		}, 1)
	} else pageLoading.show(1)
}, window.tipSB = function(a, b) {
	if (!$("#tipBox").length && (!b && (b = "error"), !$("#masktip").length || "loading" != b)) if ($(".alertBox").add($("#masktip")).remove(), clearTimeout(window.alert.time), $("input").blur(), "ok" == b || "error" == b || "loading" == b || "warn" == b) {
		if ("warn" != b) var c = $('<div id="tipBox" class="tipBox ' + b + '"><b></b>' + (a || "加载中") + "</div>");
		else var c = $('<div id="tipBox" class="tipBox tipBox1"><span class="tip-icon1"></span>' + (a || "加载中") + "</div>");
		setTimeout(function() {
			$("#tipBox").length || ($("body").append(c), c.css("margin-left", -$("#tipBox").width() / 2), "loading" != b ? c.animate({
				opacity: .001
			}, 400, "swing", function() {
				setTimeout(function() {
					c.animate({
						opacity: 0
					}, 400, "swing", function() {
						c.remove()
					})
				}, 1e3)
			}) : c.animate({
				opacity: .001
			}, 400))
		}, 1)
	} else pageLoading.show(1)
};
var pageLoading = {
	show: function(a, b) {
		0 == $("#tipBox").length && (tip(b || "", "loading"), a && (0 == $("#mask").length && $(document.body).append($('<div id="mask" class="mask"></div>')), $("#mask").height(window.innerHeight + "px").show()))
	},
	hide: function(a) {
		$("#tipBox").is(".loading") && (1 == a ? $(".tipBox").add($("#mask")).remove() : $("#tipBox").add($("#mask")).animate({
			opacity: 0
		}, 400, "easing", function() {
			$(this).remove()
		}))
	}
},
	connectSuccessFlag = !1;
T.Util = {
	smartScroll: function(a, b) {
		if (b && !a.data("isBindScroll")) {
			var c = {
				posY: 0,
				maxscroll: 0
			};
			a.on({
				touchstart: function(a) {
					var d = a.touches[0] || a,
						e = $(a.target);
					if (e.length) {
						var f;
						e.is(b) ? f = e : 0 == (f = e.parents(b)).length && (f = null), f && (c.elScroll = f, c.posY = d.pageY, c.scrollY = f.scrollTop(), c.maxscroll = f[0].scrollHeight - f[0].clientHeight)
					}
				},
				touchmove: function() {
					c.maxscroll <= 0 && event.preventDefault();
					var a = c.elScroll,
						b = a.scrollTop(),
						d = event.touches[0] || event,
						e = d.pageY - c.posY;
					return e > 0 && 0 == b ? void event.preventDefault() : e < 0 && b + 1 >= c.maxscroll ? void event.preventDefault() : void 0
				},
				touchend: function() {
					c.maxscroll = 0
				}
			}), a.data("isBindScroll", !0)
		}
	},
	preventBottomLayerScroll: function(a, b, c) {
		a.on("touchmove", function(a) {
			a.preventDefault(), a.stopPropagation()
		}), T.Util.smartScroll(b, c)
	},
	notNullValue: function(a, b) {
		return T.Util.isEmpty(a) ? T.Util.isEmpty(b) ? "" : b : a
	},
	isEmpty: function(a) {
		if ("[object Object]" == Object.prototype.toString.call(a)) {
			var b;
			for (b in a) return !1;
			return !0
		}
		return null == a || void 0 === a || void 0 == a || "undefined" == a || "NULL" == ("" + a).toUpperCase() || "" + a == ""
	},
	mqtt: function(a, b, c, d) {
		var e = function(b) {
				if (c) for (e in a) client.subscribe(a[e], c);
				else {
					if (a.length <= 100) client.subscribe(a);
					else for (var d = a.length / 100, e = 0; e < d; e++) {
						var f = 100 * e,
							g = 100 * (e + 1),
							h = a.slice(f, g);
						client.subscribe(h)
					}
				}
				console.log(a.length), console.log("订阅建立链接成功！！"), pageLoading.hide(), connectSuccessFlag = !0
			},
			f = function(a) {
				0 == $("#tipBox").length && (confirm("订阅建立链接失败！！"), console.log("onFailure:" + a))
			},
			g = "P/123",
			h = "1111",
			i = "";
		T.Storage.get("userClientId") ? i = T.Storage.get("userClientId") + "" + (d || "") : (i = "TMP/" + parseInt(1e6 * Math.random(1e4)) % 102400, T.Storage.set("userClientId", i)), T.Storage.get("access_token") && (i = "P/" + T.Storage.get("userinfo").user_no + (d || ""), g = T.Storage.get("userinfo").user_no, h = T.Storage.get("access_token")), g = i;
//		var j = function(e) {
//				"1001" == e.errorCode ? T.Util.isEmpty(T.Storage.get("access_token")) ? (i = "TMP/" + parseInt(1e6 * Math.random(1e4)) % 102400, g = i, T.Storage.set("userClientId", i)) : T.User.getUInfo(T.Storage.get("access_token"), function() {
//					T.Util.isEmpty(T.Storage.get("access_token")) ? (T.Storage.remove("access_token"), T.Storage.remove("userinfo"), alert("登录信息已失效！请重新登录！", function() {
//						T.Util.login()
//					})) : T.Util.mqtt(a, b, c, d)
//				}, "1") : console.log("订阅丢失关闭")
//			},
//			k = "",
//			l = 80;
//		if ("" != window.location.port && (l = parseInt(window.location.port)), k = window.location.host.split(":")[0], window.location.origin.indexOf("buyinball") > -1 && (k = window.location.host, l = 0 == window.location.origin.indexOf("https") ? 443 : 80), 0 == window.location.origin.indexOf("file") && (k = Global.apiHost.split(":")[1], l = 0 == Global.apiHost.indexOf("https") ? 443 : 80), "undefined" == typeof client || null == client) {
//			console.log(k,l,i);
//			client = new Messaging.Client(k, l, i), client.onMessageArrived = b, client.onConnectionLost = j;
//			var m = 0 == Global.apiHost.indexOf("https");
//			client.connect({
//				userName: g,
//				password: h,
//				deviceCode: T.Util.getDeviceCode("buyInRid"),
//				onSuccess: e,
//				cleanSession: !0,
//				useSSL: m,
//				onFailure: f,
//				keepAliveInterval: 60
//			})
//		} else var n = setInterval(function() {
//			if (client.onMessageArrived = b, connectSuccessFlag) {
//				if (console.log("订阅建立链接成功之后的增加订阅！！"), c) for (e in a) client.subscribe(a[e], c);
//				else {
//					if (a.length <= 100) client.subscribe(a);
//					else for (var d = a.length / 100, e = 0; e < d; e++) {
//						var f = 100 * e,
//							g = 100 * (e + 1),
//							h = a.slice(f, g);
//						client.subscribe(h)
//					}
//				}
//				clearInterval(n)
//			}
//		}, 500)
	},
	getCurrentTime: function() {
		return -1 == Global.caseTime && (Global.caseTime = Date.parse(new Date) / 1e3 - 1451624399), Global.caseTime++
	},
	bin2hex: function(a) {
		for (var b = "", c = 0; c < a.length; c++) {
			var d = a.charCodeAt(c);
			b += T.Util.byte2Hex(d >> 8 & 255), b += T.Util.byte2Hex(255 & d)
		}
		return b
	},
	byte2Hex: function(a) {
		return a < 16 ? "0" + a.toString(16) : a.toString(16)
	},
	builder: function(a) {
		try {
			var b = document.createElement("canvas"),
				c = b.getContext("2d"),
				a = a || window.location.origin;
			c.textBaseline = "top", c.font = "14px 'Arial'", c.textBaseline = "buyin", c.fillStyle = "#f60", c.fillRect(125, 1, 62, 20), c.fillStyle = "#069", c.fillText(a, 2, 15), c.fillStyle = "rgba(102, 204, 0, 0.7)", c.fillText(a, 4, 17);
			var d = b.toDataURL().replace("data:image/png;base64,", ""),
				e = atob(d);
			return T.Util.bin2hex(e.slice(-16, -12))
		} catch (a) {
			return console.error(a), null
		}
	},
	getDeviceCode: function(a) {
		var b;
		return window.localStorage && (b = window.localStorage.getItem(a)) ? b : (b = T.Util.builder(a), b && window.localStorage && window.localStorage.setItem(a, b), b)
	},
	xmlHttpRequest: function(a) {
		var b = !T.Util.isEmpty(device) && device.get() || "TMP",
			c = b + "_" + T.Util.getCurrentTime();
		T.Util.isEmpty(T.Storage.get("userinfo")) || (c = T.Storage.get("userinfo").uid + "-" + T.Util.getCurrentTime());
		var d = {},
			e = (new Date).getTime(),
//			f = a.reqUrl.indexOf('http://')==0 ? a.reqUrl :  Global.fullHost + a.reqUrl;
			f = a.reqUrl.indexOf('http://')==0 ? a.reqUrl :  Global.domain + a.reqUrl;
		"auth" == a.hostFlag ? f = Global.authHost + a.reqUrl : "own" == a.hostFlag ? f = a.reqUrl : "appweb" == a.hostFlag && (f = Global.apiHost + a.reqUrl), a.type && "get" == a.type.toLowerCase() ? (-1 != f.indexOf("?") ? f += "&time=" + e : f += "?time=" + e, d.req_method = "GET") : (a.reqData && (a.reqData.time = e), d.req_method = "POST"), d.req_url = encodeURIComponent(f), T.Util.isEmpty(T.Storage.get("userinfo")) || (d.user_code = T.Storage.get("userinfo").user_no), $.ajax({
			type: a.type ? a.type : "POST",
			url: f,
			async: !a.async || a.async,
			data: JSON.stringify(a.reqData),
			dataType: a.dataType ? a.dataType : "json",
			timeout: a.timeout ? a.timeout : 15e3,
			contentType: "application/json;charset=utf-8",
			headers: {
				"d-version": a.version ? a.version : Global.h_version,
				tId: c,
				"client-os": Global.OS,
				rId: b
			},
			success: function(b, c, f) {
				d.req_status = "200";
				var g = (new Date).getTime();
				if (d.expend_time = g - e, d.submit_model = "AJAX", b.msg_code && 0 == b.msg_code) a.callback(b, c, f);
				else {
					var h = b.msg || b.result_msg || "no-data";
					if (d.res_error = h.substring(0, 20), "undefined" != typeof Buy && ($("#submit").removeClass("noChoose").html("提交"), Buy.addOddsSubmitListener(), Buy.submitCommitSuccess = !0), "1005" == b.msg_code) tip("网络不给力，请稍后再试"), a.errorCallback && a.errorCallback(b);
					else if ("1104" == b.msg_code || "1003" == b.msg_code) {
//						if ($("#submitButton").html("立即发布"), T.Storage.remove("access_token"), T.Storage.remove("userinfo"), a.authError && a.errorCallback) return void a.errorCallback(b);
//						T.Util.login()
					} else "1110" == b.msg_code || "1119" == b.msg_code ? (T.Storage.remove("access_token"), T.Storage.remove("userinfo"), tip("账户已被冻结,请联系客服！")) : "1106" == b.msg_code ? tip("登录密码错误！") : (a.errorType || tip(b.msg || b.result_msg), a.errorCallback && a.errorCallback(b))
				}
				if (1e3 * Collection.maxResTime < d.expend_time && Collection.filterUrl(a.reqUrl)) if (T.Util.isEmpty(T.Storage.get("collectInfo"))) {
					var i = [];
					i.push(d), T.Storage.set("collectInfo", JSON.stringify(i))
				} else {
					var i = JSON.parse(T.Storage.get("collectInfo"));
					i.push(d), T.Storage.set("collectInfo", JSON.stringify(i)), i.length >= Collection.sendSize && Collection.collectFlag && T.Util.sendCollectInfos()
				}
			},
			error: function(b, c) {
				console.log("main.js xmlHttpRequest 请求返回错误"), console.log("url:" + f + "data:" + JSON.stringify(a.reqData) + "status:" + c), d.req_status = b.status;
				var g = (new Date).getTime();
				if (d.expend_time = g - e, d.res_error = b.statusText, d.submit_model = "AJAX", Collection.filterUrl(a.reqUrl)) if (T.Util.isEmpty(T.Storage.get("collectInfo"))) {
					var h = [];
					h.push(d), T.Storage.set("collectInfo", JSON.stringify(h))
				} else {
					var h = JSON.parse(T.Storage.get("collectInfo"));
					h.push(d), T.Storage.set("collectInfo", JSON.stringify(h)), h.length >= Collection.sendSize && Collection.collectFlag && T.Util.sendCollectInfos()
				}
				a.errorType || tip(httpErrorMsg(parseInt(b.readyState))), a.interfaceError && a.interfaceError()
			}
		})
	},
	sendCollectInfos: function() {
		if (!T.Util.isEmpty(T.Storage.get("collectInfo"))) {
			var a = "Web",
				b = "";
			if (T.isNative) {
				var c = window.navigator.userAgent;
				b = c.match(/QAPP[\/\s](\d+[._]\d+[._]\d+)/), b && b.length && (b = (b[1] || "0.0.0").replace(/\_/g, ".")), a = /iPhone|iPad|iPod/i.test(c) ? "IOS" : "Android"
			}
			var d = T.Storage.get("collectInfo");
			T.Storage.remove("collectInfo"), $.ajax({
				url: Global.fullHost + "/collect-web/services/collect/req.json",
				dataType: "string",
				type: "POST",
				data: JSON.stringify({
					s_model: a,
					d_code: "",
					h_version: Global.h_version,
					s_version: b,
					item: d
				}),
				success: function(a) {},
				error: function() {}
			})
		}
	},
	openWindow: function(a, b) {
		if (T.isNative) {
			var c = {
				url: a,
				pop: "1"
			},
				d = $.extend({}, c, b || {});
			api.openWindow(d, function(a) {})
		} else window.location.href = a
	},
	addStyleLink: function(a) {
		var b = document.getElementsByTagName("head")[0],
			c = document.createElement("link");
		c.setAttribute("rel", "stylesheet"), c.setAttribute("href", a), b.appendChild(c)
	},
	login: function() {
		console.trace(T.isNative);
		T.isNative ? api.openLogin() : window.location.href = T.Util.getRootPath() + "/" + Global.webRoot + "/user/login.html"
	},
	back: function() {
		"undefined" != typeof closeBeforeBack && "function" == typeof closeBeforeBack && closeBeforeBack(), T.isNative ? lib.API.closeWindow() : window.history.back()
	},
	filterScript: function(a) {
		return a = a || "", a = decodeURIComponent(a), a = a.replace(/<.*>/g, ""), a = a.replace(/(java|vb|action)script/gi, ""), a = a.replace(/[\"\'][\s ]*([^=\"\'\s ]+[\s ]*=[\s ]*[\"\']?[^\"\']+[\"\']?)+/gi, ""), a = a.replace(/[\s ]/g, "&nbsp;")
	},
	getPara: function(a, b, c) {
		var d = void 0 === b ? window.location.href : b;
		para = d.split("?"), para.length < 2 && (para = d.split("#")), para = c ? para[c] ? para[c] : para[para.length - 1] : void 0 === para[1] ? para[0] : para[1], para = para.split("&");
		for (var e = para.length - 1; para[e]; e--) if (para[e] = para[e].split("="), para[e][0] == a) try {
			return this.filterScript(para[e][1])
		} catch (a) {}
		return ""
	},
	getParaHash: function(a, b) {
		var c = void 0 === b ? window.location.href : b;
		c = c.split("#"), c = void 0 === c[1] ? c[0] : c[1], c = c.split("&");
		for (var d = 0; c[d]; d++) if (c[d] = c[d].split("="), c[d][0] == a) try {
			return this.filterScript(c[d][1])
		} catch (a) {}
		return ""
	},
	getHandicapInfo: function(a) {
		if (isNaN(a)) return a;
		var b = parseFloat(a),
			c = b < 0 ? "-" : "",
			d = Math.abs(a),
			e = d % .5;
		return e > 0 ? c + (d - e) + "/" + (d + e) : a
	},
	getLetBall: function(a) {
		if (!isNaN(a)) return a;
		if (a.indexOf("/") < 0) return a;
		var b = a.indexOf("-") > -1;
		b && (a = a.substr(b, a.length));
		var c = a.split("/")[1];
		return b ? -(parseFloat(c) - .25) : parseFloat(c) - .25
	},
	getOppositeHandicap: function(a) {
		return a && isNaN(a) ? a.indexOf("-") > -1 ? a = a.replace("-", "") : "-" + a : 0 == parseFloat(a) ? a : parseFloat(a) < 0 ? Math.abs(parseFloat(a)) : "-" + a
	},
	randomColor: function() {
		return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
	},
	getRootPath: function() {
		var a = window.document.location.href,
			b = window.document.location.pathname,
			c = a.indexOf(b),
			d = a.substring(0, c),
			e = b.substring(0, b.substr(1).indexOf("/") + 1);
		if (0 == window.location.href.indexOf("file")) {
			var f = window.location.href.split("game-byzq")[0];
			return f.length && "/" == f.substr(f.length - 1, f.length) && (f = f.substr(0, f.length - 1)), f
		}
		return -1 != e.indexOf("ios") || -1 == e.indexOf("ny3G") ? d + e + "/ny3G" : d + e
	},
	getHostInfo: function() {
		var a = window.document.location.href,
			b = window.document.location.pathname,
			c = a.indexOf(b);
		return a.substring(0, c)
	},
	doTimeParse: function(a, b) {
		var c = new Date,
			d = (a - c.getTime()) / 6e4,
			e = 60 * (24 - c.getHours()) - c.getMinutes();
		return new Date(a).toDateString() === (new Date).toDateString() ? "day" == b ? "今日" : "今日 " + new Date(a).format("hh:mm") : e < d && d < e + 1440 ? "day" == b ? "明天" : "明天 " + new Date(a).format("hh:mm") : "day" == b ? new Date(a).format("YYYY/MM/dd") : new Date(a).format("MM/dd hh:mm")
	},
	arrayUnique: function(a) {
		for (var b = [], c = {}, d = 0; d < a.length; d++) c[a[d]] || (b.push(a[d]), c[a[d]] = 1);
		return b
	},
	parseNumber: function(a) {
		return (a + "").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,")
	},
	goGame: function(a) {
		T.isNative && (Global.isiOS && lib.nativeApi.compareVersion("2.7.0") || Global.isAndroid && lib.nativeApi.compareVersion("2.8.0")) ? a && 1 == sType ? lib.API.goGame({
			sType: "BB"
		}) : lib.API.goGame({
			sType: ""
		}) : T.isNative ? lib.API.closeWindow() : T.Util.openWindow(T.Util.getRootPath() + "/" + Global.webRoot + "/game/index.html")
	},
	goExpert: function(a, b, c) {
		if ("1" == b) {
			if (1 == sType) var d = T.Util.getRootPath() + "/" + Global.webRoot + "/recommend/expert.html?user_no=" + a + "&sType=BB";
			else var d = T.Util.getRootPath() + "/" + Global.webRoot + "/recommend/expert.html?user_no=" + a;
			T.Util.openWindow(d)
		} else if (1 == c) {
			if (1 == sType) var d = T.Util.getRootPath() + "/" + Global.webRoot + "/recommend/expert.html?user_no=" + a + "&page=sz&sType=BB";
			else var d = T.Util.getRootPath() + "/" + Global.webRoot + "/recommend/expert.html?user_no=" + a + "&page=sz";
			T.Util.openWindow(d)
		} else T.isNative && api.openBetInfoPage({
			user_no: a
		}, function() {})
	},
	stringToDate: function(a, b, c) {
		try {
			if (19 != a.length) throw "日期格式不合法";
			b = b || "-", c = c || ":";
			var d = a.split(" "),
				e = d[0].split(b),
				f = parseInt(e[0], 10),
				g = parseInt(e[1], 10) - 1,
				h = parseInt(e[2], 10),
				i = d[1].split(c),
				j = parseInt(i[0], 10),
				k = parseInt(i[1], 10),
				l = parseInt(i[2], 10);
			return new Date(f, g, h, j, k, l)
		} catch (a) {
			return new Date
		}
	}
}, T.getType = function(a) {
	var b;
	return ("object" == (b = typeof a) ? null == a && "null" || Object.prototype.toString.call(a).slice(8, -1) : b).toLowerCase()
};
var NumberUtil = function() {
		var fmoney = function(a) {
				if (null == a || void 0 === a || void 0 == a || "" == a) return "0.00";
				var b = "" + a;
				return -1 != b.indexOf(".") && 2 == b.split(".").length ? 2 == b.split(".").length ? fmtMoneyLeft(b.split(".")[0]) + "." + fmtMoneyRight(b.split(".")[1]) : (tip("传入的数值有问题"), "0.00") : fmtMoneyLeft(b.replace(/[^\d\.-]/g, "")) + ".00"
			},
			fmtMoneyLeft = function(a) {
				var b = a.split("").reverse(),
					c = "";
				for (i = 0; i < b.length; i++) c += b[i] + ((i + 1) % 3 == 0 && i + 1 != b.length ? "," : "");
				return c.split("").reverse().join("")
			},
			fmtMoneyRight = function(a) {
				return a.length >= 2 ? a.substring(0, 2) : a + "0"
			},
			floatAdd = function(a, b) {
				var c, d, e;
				try {
					c = a.toString().split(".")[1].length
				} catch (a) {
					c = 0
				}
				try {
					d = b.toString().split(".")[1].length
				} catch (a) {
					d = 0
				}
				return e = Math.pow(10, Math.max(c, d)), (a * e + b * e) / e
			},
			accMul = function(a, b) {
				var c = 0,
					d = a.toString(),
					e = b.toString();
				try {
					c += d.split(".")[1].length
				} catch (a) {}
				try {
					c += e.split(".")[1].length
				} catch (a) {}
				return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c)
			},
			accDiv = function(number, number2) {
				var t1 = 0,
					t2 = 0,
					r1, r2;
				try {
					t1 = number.toString().split(".")[1].length
				} catch (a) {}
				try {
					t2 = number2.toString().split(".")[1].length
				} catch (a) {}
				with(Math) return r1 = Number(number.toString().replace(".", "")), r2 = Number(number2.toString().replace(".", "")), r1 / r2 * pow(10, t2 - t1)
			};
		return {
			fmoney: fmoney,
			floatAdd: floatAdd,
			floatMul: accMul,
			floatDiv: accDiv
		}
	}(),
	playtypeObj = {
		70101: {
			name: "全场赛果",
			desc: "猜两队90分钟内(含补时)的比赛结果",
			iconCls: "bet-icon1"
		},
		70102: {
			name: "全场让球",
			desc: "猜两队90分钟内(含补时)的让球结果",
			iconCls: "bet-icon2"
		},
		70103: {
			name: "全场比分",
			desc: "猜两队90分钟内(含补时)的最终比分",
			iconCls: "bf-icon1"
		},
		70113: {
			name: "半场比分",
			desc: "猜两队上半场的比分",
			iconCls: "bf-icon1"
		},
		70104: {
			name: "全场大小",
			desc: "猜90分钟内(含补时)比赛总进球数的大小",
			iconCls: "bet-icon3"
		},
		70105: {
			name: "进球数区间",
			desc: "猜90分钟内(含补时)比赛总进球数区间",
			iconCls: "bf-icon2"
		},
		70115: {
			name: "半场进球区间",
			desc: "猜两队上半场的总进球区间",
			iconCls: "bf-icon2"
		},
		70111: {
			name: "半场赛果",
			desc: "猜两队上半场的比赛结果",
			iconCls: "bet-icon4"
		},
		70112: {
			name: "半场让球",
			desc: "猜两队上半场的让球结果",
			iconCls: "bet-icon5"
		},
		70114: {
			name: "半场大小",
			desc: "猜上半场比赛总进球数的大小",
			iconCls: "bet-icon6"
		},
		70130: {
			name: "全场角球",
			desc: "猜两队90分钟内(含补时)的角球总数",
			iconCls: "jq-icon1"
		},
		70131: {
			name: "全场罚牌",
			desc: "猜两队90分钟内(含补时)的红黄牌总数"
		},
		70132: {
			name: "全场下一进球",
			desc: "猜下一个进球得分的球队"
		},
		70133: {
			name: "全场单双",
			desc: "猜90分钟内(含补时)比赛总进球数的单双",
			iconCls: "bf-icon4"
		},
		70140: {
			name: "半场角球",
			desc: "猜上半场两队的角球总数",
			iconCls: "jq-icon4"
		},
		70141: {
			name: "半场罚牌",
			desc: "猜上半场两队的红黄牌总数"
		},
		70142: {
			name: "半场下一进球",
			desc: "--------------"
		},
		70143: {
			name: "半场单双",
			desc: "猜上半场比赛总进球数的单双",
			iconCls: "bf-icon5"
		},
		70150: {
			name: "半全场赛果",
			desc: "猜两队上半场和全场的赛果",
			iconCls: "bf-icon3"
		},
		3102: {
			name: "第一节让分",
			desc: "猜两队第一节比赛让分胜负",
			iconCls: "bet-icon5",
			pType: "31"
		},
		3104: {
			name: "第一节大小",
			desc: "猜两队第一节比赛得分之和",
			iconCls: "bet-icon6",
			pType: "31"
		},
		3133: {
			name: "第一节单双",
			desc: "猜两队第一节比赛得分之和的单双",
			iconCls: "bf-icon4",
			pType: "31"
		},
		3202: {
			name: "第二节让分",
			desc: "猜两队第二节比赛让分胜负",
			iconCls: "bet-icon5",
			pType: "32"
		},
		3204: {
			name: "第二节大小",
			desc: "猜两队第二节比赛得分之和",
			iconCls: "bet-icon6",
			pType: "32"
		},
		3233: {
			name: "第二节单双",
			desc: "猜两队第二节比赛得分之和的单双",
			iconCls: "bf-icon4",
			pType: "32"
		},
		3302: {
			name: "第三节让分",
			desc: "猜两队第三节比赛让分胜负",
			iconCls: "bet-icon5",
			pType: "33"
		},
		3304: {
			name: "第三节大小",
			desc: "猜两队第三节比赛得分之和",
			iconCls: "bet-icon6",
			pType: "33"
		},
		3333: {
			name: "第三节单双",
			desc: "猜两队第三节比赛得分之和的单双",
			iconCls: "bf-icon4",
			pType: "33"
		},
		3402: {
			name: "第四节让分",
			desc: "猜两队第四节比赛让分胜负",
			iconCls: "bet-icon5",
			pType: "34"
		},
		3404: {
			name: "第四节大小",
			desc: "猜两队第四节比赛得分之和",
			iconCls: "bet-icon6",
			pType: "34"
		},
		3433: {
			name: "第四节单双",
			desc: "猜两队第四节比赛得分之和的单双",
			iconCls: "bf-icon4",
			pType: "34"
		}
	},
	BBplaytypeObj = {
		70102: {
			name: "全场(含加时)",
			desc: "让分胜负",
			iconCls: "bet-icon2"
		},
		70112: {
			name: "半场",
			desc: "让分胜负",
			iconCls: "bet-icon5"
		},
		70104: {
			name: "全场(含加时)",
			desc: "总分大小",
			iconCls: "bet-icon3"
		},
		70114: {
			name: "半场",
			desc: "总分大小",
			iconCls: "bet-icon6"
		},
		70133: {
			name: "全场(含加时)",
			desc: "单双",
			iconCls: "bf-icon4"
		},
		70143: {
			name: "半场",
			desc: "单双",
			iconCls: "bf-icon5"
		},
		3102: {
			name: "第一节让分",
			desc: "猜两队第一节比赛让分胜负",
			iconCls: "bet-icon5",
			pType: "31"
		},
		3104: {
			name: "第一节大小",
			desc: "猜两队第一节比赛得分之和",
			iconCls: "bet-icon6",
			pType: "31"
		},
		3133: {
			name: "第一节单双",
			desc: "猜两队第一节比赛得分之和的单双",
			iconCls: "bf-icon4",
			pType: "31"
		},
		3202: {
			name: "第二节让分",
			desc: "猜两队第二节比赛让分胜负",
			iconCls: "bet-icon5",
			pType: "32"
		},
		3204: {
			name: "第二节大小",
			desc: "猜两队第二节比赛得分之和",
			iconCls: "bet-icon6",
			pType: "32"
		},
		3233: {
			name: "第二节单双",
			desc: "猜两队第二节比赛得分之和的单双",
			iconCls: "bf-icon4",
			pType: "32"
		},
		3302: {
			name: "第三节让分",
			desc: "猜两队第三节比赛让分胜负",
			iconCls: "bet-icon5",
			pType: "33"
		},
		3304: {
			name: "第三节大小",
			desc: "猜两队第三节比赛得分之和",
			iconCls: "bet-icon6",
			pType: "33"
		},
		3333: {
			name: "第三节单双",
			desc: "猜两队第三节比赛得分之和的单双",
			iconCls: "bf-icon4",
			pType: "33"
		},
		3402: {
			name: "第四节让分",
			desc: "猜两队第四节比赛让分胜负",
			iconCls: "bet-icon5",
			pType: "34"
		},
		3404: {
			name: "第四节大小",
			desc: "猜两队第四节比赛得分之和",
			iconCls: "bet-icon6",
			pType: "34"
		},
		3433: {
			name: "第四节单双",
			desc: "猜两队第四节比赛得分之和的单双",
			iconCls: "bf-icon4",
			pType: "34"
		}
	},
	isHalf = {
		70111: {
			name: "半场比分",
			desc: "猜两队上半场的比赛结果",
			iconCls: "bet-icon4"
		},
		70112: {
			name: "半场比分",
			desc: "猜两队上半场的让球结果",
			iconCls: "bet-icon5"
		},
		70113: {
			name: "半场比分",
			desc: "猜两队上半场的比分"
		},
		70114: {
			name: "半场比分",
			desc: "猜上半场比赛总进球数的大小",
			iconCls: "bet-icon6"
		},
		70115: {
			name: "半场比分",
			desc: "猜两队上半场的总进球区间"
		},
		70140: {
			name: "半场比分",
			desc: "猜上半场两队的角球总数",
			iconCls: "jq-icon4"
		},
		70141: {
			name: "半场比分",
			desc: "猜上半场两队的红黄牌总数"
		},
		70142: {
			name: "半场比分",
			desc: "--------------"
		},
		70143: {
			name: "半场单双",
			desc: "猜上半场比赛总进球数的单双",
			iconCls: "bf-icon5"
		},
		70150: {
			name: "半场比分",
			desc: "猜两队上半场和全场的赛果",
			iconCls: "bf-icon3"
		}
	},
	MessageDir = {
		1300: "金币活动不存在,请联系客服人员",
		1301: "账户余额不足",
		1302: "该活动已过期",
		1303: "您的账户有充足的余额，不能参加该活动",
		1304: "价格已调整，刷新后重新下单",
		1305: "该服务已下线，请换其他服务购买",
		1306: "当前服务您购买的次数已超限，请先用完再继续购买"
	},
	PlayStatus = {
		1: "未开始",
		2: "上半场",
		3: "半场结束",
		4: "下半场",
		5: "结束",
		6: "取消",
		7: "待定",
		8: "加时",
		9: "点球",
		10: "暂停",
		11: "腰斩",
		12: "推迟"
	},
	playToPlayId = {
		"ASIAN-0": "70102",
		"ASIAN-1": "70112",
		"BIGSMALL-0": "70104",
		"BIGSMALL-1": "70114",
		"EUROPE-0": "70101",
		"EUROPE-1": "70111",
		"RNG-0": "70105",
		"RNG-1": "70115",
		"HAF-0": "70150",
		"CS-0": "70103",
		"CS-1": "70113",
		"OE-0": "70133",
		"OE-1": "70143",
		"C_OU-0": "70130",
		"C_OU-1": "70140"
	},
	playIdToPlay = {
		'70101' : 'EUROPE',
		'70111' : 'EUROPE',
		'70102' : 'ASIAN',
		'70112' : 'ASIAN',
		'70103' : 'CS',
		'70113' : 'CS',
		'70133' : 'OE',
		'70143' : 'OE',
		'70105' : 'RNG',
		'70115' : 'RNG',
		'70150' : 'HAF',
		'70104' : 'BIGSMALL',
		'70114' : 'BIGSMALL'
	},
	
	
	httpErrorMsg = function(a) {
		var b = "请求发生错误";
		switch (a) {
		case 0:
			b = "网络异常.";
			break;
		case 1:
			b = "网络异常..";
			break;
		case 2:
			b = "服务器响应异常";
			break;
		case 3:
			b = "接受服务器响应内容异常";
			break;
		case 4:
			b = "网络异常..."
		}
		return b
	};
"function" == typeof $.fn.Touch && $("#back").Touch(function() {
	T.Util.back()
}), T.User = {
	getUInfo: function(a, b, c) {
		if (!T.Util.isEmpty(a)) {
			var d = {
				type: "get",
				reqUrl: "/web/services/user/getUser.json?token=" + a,
				callback: function(c) {
					"8670594674060207515" == c.res_data.user_no && (Global.iosBtn = !0, Global.iosAudit = Global.isiOS && Global.iosBtn), T.Storage.set("access_token", a), T.Storage.set("userinfo", c.res_data), b && b(c)
				},
				errorCallback: function(a) {
					b && b(a)
				}
			};
			T.Util.isEmpty(c) || "1" != c || (d.authError = 1), T.Util.xmlHttpRequest(d)
		}
	},
	refreshUMoney: function(a) {
		var b = "",
			c = "";
		if (T.Util.isEmpty(a) || "string" != typeof a && "number" != typeof a) {
			var d = T.Storage.get("userinfo");
			T.Util.isEmpty(d) || (b = 1 == Global.isPK ? d.coin + d.pcoin + "" : d.coin + "")
		} else b = a + "";
		$(".balance").html(T.Util.parseNumber(b)).attr("data-val", b), $(".ye-count").html(T.Util.parseNumber(b)).attr("data-val", b), c = b.length > 12 ? b.substring(0, b.length - 12) + "万亿+" : b.length > 11 ? b.substring(0, b.length - 11) + "千亿+" : b.length > 10 ? b.substring(0, b.length - 10) + "百亿+" : b.length > 8 ? b.substring(0, b.length - 8) + "亿+" : b, $("#userGold").html(T.Util.parseNumber(c)), $("#myInfo").show()
	}
}, T.appToH5 = {
	init: function(a, b) {
		function c(b) {
			if (0 == window.location.origin.indexOf("file") && (Global.fullHost = b.result.apiHost, Global.apiHost = b.result.apiHost, Global.authHost = b.result.authHost, Global.payHost = b.result.payHost), console.log("initEvent---result:" + JSON.stringify(b.result)), b.result.trenchType && (Global.trenchType = b.result.trenchType), b.result.is_majia && (Global.is_majia = b.result.is_majia), b.result.app && (Global.app = b.result.app, T.Util.isEmpty(Global.app) || "bylq" != Global.app || T.Util.addStyleLink("../css/basketballAudit.css")), b.result.is_byty && (Global.is_byty = b.result.is_byty), b.result.deviceType && (Global.deviceType = b.result.deviceType), b.result.app_name && (Global.appName = b.result.app_name), b.result.is_game && (Global.is_game = b.result.is_game), b.result.show_wxpay && (Global.show_wxpay = b.result.show_wxpay), T.Util.isEmpty(b.result.isAudit) || "1" != b.result.isAudit || (Global.iosBtn = !0, Global.iosAudit = Global.isiOS && Global.iosBtn, Global.andAudit = Global.isAndroid && Global.iosBtn), "false" == b.result.isLogin) return T.Storage.remove("access_token"), T.Storage.remove("userinfo"), a && "function" == typeof a && a(), void("undefined" != typeof nativeEventInit && "function" == typeof nativeEventInit && nativeEventInit());
			b.result.accessToken && (T.Storage.set("access_token", b.result.accessToken), T.User.getUInfo(b.result.accessToken, function() {
				a && "function" == typeof a && a(), "undefined" != typeof nativeEventInit && "function" == typeof nativeEventInit && nativeEventInit()
			}, "1"))
		}

		function d(b) {
			if (console.log("loginEvent---result:" + JSON.stringify(b.result)), 0 == window.location.origin.indexOf("file") && (Global.fullHost = b.result.apiHost, Global.apiHost = b.result.apiHost, Global.authHost = b.result.authHost, Global.payHost = b.result.payHost), "false" == b.result.isLogin) return T.Storage.remove("access_token"), T.Storage.remove("userinfo"), a && "function" == typeof a && a(), void("undefined" != typeof nativeEventInit && "function" == typeof nativeEventInit && nativeEventInit());
			b.result.accessToken && (T.Storage.set("access_token", b.result.accessToken), T.User.getUInfo(b.result.accessToken, function() {
				a && "function" == typeof a && a(), "undefined" != typeof nativeEventInit && "function" == typeof nativeEventInit && nativeEventInit()
			}))
		}

		function e(c) {
			if (console.log("refreshEvent---result:" + JSON.stringify(c.result)), 0 == window.location.origin.indexOf("file") && (Global.fullHost = c.result.apiHost, Global.apiHost = c.result.apiHost, Global.authHost = c.result.authHost, Global.payHost = c.result.payHost), "false" == c.result.isLogin) return T.Storage.remove("access_token"), T.Storage.remove("userinfo"), b && "function" == typeof b ? b() : a && "function" == typeof a && a(), void("undefined" != typeof nativeEventInit && "function" == typeof nativeEventInit && nativeEventInit());
			c.result.accessToken && (T.Storage.set("access_token", c.result.accessToken), b && "function" == typeof b ? T.User.getUInfo(c.result.accessToken, b) : T.User.getUInfo(c.result.accessToken, a), "undefined" != typeof nativeEventInit && "function" == typeof nativeEventInit && nativeEventInit())
		}
		api = lib.API, document.addEventListener("EVENT_INIT", c, !1), document.addEventListener("EVENT_REFRESH", e, !1), api.eventListener({}, function(a) {
			console.log("app到H5事件初始化" + JSON.stringify(a))
		}), document.addEventListener("EVENT_LOGIN", d, !1)
	}
}, T.betInfoHtml = {
	getBetResultByStatus: function(a, b) {
		var c, d = "",
			e = "win";
		return 110 == a ? (d = b ? "返还 " + b.prizeMoney : "", c = "赢", e = "win") : -100 == a ? (d = "未中奖", c = "输", e = "lose") : a > 199 ? (d = b ? "返还" + b.returnMoney : "", c = "金币返还", e = "zou") : -5 == a ? (d = "金币返还中", c = "订单取消", e = "zou") : -10 == a ? (d = b ? "金币返还  " + b.returnMoney : "", c = "订单取消", e = "zou") : 0 == a ? (T.Util.isEmpty(b) || (d = T.Util.isEmpty(b.prePrize) ? b ? "预计返还  " + b.contentList[0].codeTeamName.split("|")[2] : "" : "预计返还" + b.prePrize), c = "订单确认中", e = "zou") : 120 == a ? (d = b ? "返还  " + b.prizeMoney : "", c = "走盘", e = "zou") : 130 == a ? (d = b ? "返还  " + b.prizeMoney : "", c = "输半", e = "lose") : 140 == a ? (d = b ? "返还 " + b.prizeMoney : "", c = "赢半", e = "win") : 100 == a ? (T.Util.isEmpty(b) || (d = T.Util.isEmpty(b.prePrize) ? b ? "预计返还  " + b.contentList[0].codeTeamName.split("|")[2] : "" : "预计返还" + b.prePrize), c = "结算中", e = "zou") : (T.Util.isEmpty(b) || (d = T.Util.isEmpty(b.prePrize) ? b ? "预计返还  " + b.contentList[0].codeTeamName.split("|")[2] : "" : "预计返还" + b.prePrize), c = "待开奖", e = "zou"), [c, T.Util.parseNumber(d), e]
	},
	fillSignBetInfo: function(a) {
		var b = {
			BB: "篮球",
			S: "足球",
			E: ""
		},
			c = a.contentList[0],
			d = "金币";
		"1" == Global.isClub && (d = "积分");
		var e, f, g, h, i, j, k, l, m = "",
			n = "",
			o = [],
			p = [],
			q = [],
			r = "S";
		(c.sportType && "BB" == c.sportType || "BB" == a.sportType) && (r = "BB"), "S" == r && 4 == c.codeTeamName.split("|").length && (m = "<span>( 当前比分 " + c.codeTeamName.split("|")[3] + " )</span>"), e = c.codeTeamName.split("|")[0], f = c.odds, hName = c.htName ? c.htName.substr(0, 4) : "待添加", gName = c.gtName ? c.gtName.substr(0, 4) : "待添加", isGoald = "20" == c.playType, g = new Date(c.matchTime).format(" hh:mm"), i = "BB" == r ? BBplaytypeObj[c.playId].name : playtypeObj[c.playId].name, j = T.Util.parseNumber(a.buyMoney), k = a.itemId, l = c.matchId, h = new Date(a.payTime).format("YYYY-MM-dd hh:mm:ss"), n = 1 == a.isInplay ? " <span>&nbsp;&nbsp;赛前</span>" : ' <span class="TZ_green">&nbsp;&nbsp;滚球</span>';
		var s = "",
			t = T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[0];
		"待开奖" == t || "订单确认中" == t ? (s = "TZ_white", o.push('<span class="TZ_white">' + t + "</span>"), o.push("</p></div><div>回报 : <span>" + f + '</span>倍</div><div class="TZ_beting Color" style="color:#333;font-weight:bold;">投注' + d + " : <span>" + j + "</span>"), o.push('<p class="floatR"><span>' + T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[1] + "</span></p>")) : t.indexOf("赢") > -1 ? (o.push('<span style="color:#ff5000;font-size:14px;font-weight:bold;">' + t + "</span>"), o.push("</p></div><div>回报 : <span>" + f + '</span>倍</div><div class="TZ_beting Color" style="color:#333;font-weight:bold;">投注' + d + " : <span>" + j + "</span>"), o.push('<p class="floatR TZ_yellow"><span>' + T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[1] + "</span></p>")) : t.indexOf("输") > -1 ? (o.push('<span style="color:#309f0e;font-size:14px;font-weight:bold;">' + t + "</span>"), o.push("</p></div><div>回报 : <span>" + f + '</span>倍</div><div class="TZ_beting Color" style="color:#333;font-weight:bold;">投注' + d + " : <span>" + j + "</span>"), o.push('<p class="floatR"><span>' + T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[1] + "</span></p>")) : (o.push('<span style="color:#333;font-size:14px;font-weight:bold;">' + t + "</span>"), o.push("</p></div><div>回报 : <span>" + f + '</span>倍</div><div class="TZ_beting Color" style="color:#333;font-weight:bold;">投注' + d + " : <span>" + j + "</span>"), o.push('<p class="floatR"><span>' + T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[1] + "</span></p>")), T.Util.isEmpty(a.itemName) || o.push('</div><div style="margin-top: -4px;">来自 : ' + a.itemName);
		var u = "",
			v = "vs",
			w = 110 == a.itemStatus || 120 == a.itemStatus || 130 == a.itemStatus || 140 == a.itemStatus || -100 == a.itemStatus;
		isGoald && "5" == c.matchStatus || isGoald && "-1" == c.matchStatus ? (w && (v = c.homeScore + " : " + c.guestScore), u = c.htName + " " + v + " " + c.gtName) : (isGoald || "3" != c.matchStatus && "4" != c.matchStatus && "5" != c.matchStatus) && (isGoald || "50" != c.matchStatus && "-1" != c.matchStatus) || (w && (v = "BB" == c.sportType && "34" == c.playType ? c.homeScoreFour + " : " + c.guestScoreFour : "BB" == c.sportType && "33" == c.playType ? c.homeScoreThree + " : " + c.guestScoreThree : "BB" == c.sportType && "32" == c.playType ? c.homeScoreTwo + " : " + c.guestScoreTwo : "BB" == c.sportType && "31" == c.playType ? c.homeScoreOne + " : " + c.guestScoreOne : c.fhHomeScore + " : " + c.fhGuestScore), u = c.htName + " " + v + " " + c.gtName);
		var x = {
			htName: c.htName,
			gtName: c.gtName,
			itemMoney: j,
			playName: i,
			betDate: h,
			statusStr: t,
			prizeMoney: a.prizeMoney,
			shareScore: u,
			retInfo: T.betInfoHtml.getBetResultByStatus(a.itemStatus, a),
			orderId: k
		},
			y = {
				htName: c.htName,
				gtName: c.gtName,
				score: v
			},
			z = "",
			A = "";
		a.roomId && (z = a.roomId), a.roomCode && (A = a.roomCode);
		var B = "";
		return "1" == a.isCombat && (B = '<span style="background: #ff5722;color: #fff;font-weight: normal;font-size: 12px;padding: 0 2px;">实战</span>'), q.push("<span>" + hName + '</span><span class="Color"> ' + v + " </span><span>" + gName + "</span>"), p.push('<div class="TZ_list" data-obj="' + JSON.stringify(y).replace(/"/g, "'") + '" data-stype ="' + r + '" style="position: relative" data-mid="' + l + '" data-status = "' + c.matchStatus + '" data-rid="' + z + '" data-code="' + A + '"><b class="seleBox hide" data-itemid = "' + k + '" data-stype ="' + r + '" data-matchid = "' + l + '" data-share = "' + JSON.stringify(x).replace(/"/g, "'") + '"><i class="selectNo"></i></b>'), T.Util.isEmpty(a.itemName) ? p.push('<div class="TZ_box1">') : p.push("<div class='TZ_box1 itemHeight'>"), p.push('<div class="TZ_sty Color"><span class="' + s + '" style="color:#333;font-size:14px;font-weight:bold;"><span class="betContent">' + e + "</span>&nbsp;" + B + m + '<p class="floatR Color" style="font-size:12px;font-weight:normal;"><span>' + i + " </span>" + n + '</p></div><div class="TZ_tim Color"><span>' + q.join("") + "&nbsp;" + g + '</span><p class="floatR" style="margin-top:12px;">' + o.join("") + '</div></div><div class="TZ_box2"><div class="Color">' + b[c.sportType ? c.sportType : "E"] + "订单号: <span>" + k.substring(0, 15) + '</span><p class="floatR"><span>' + h + "</span></p></div></div></div>"), p.join("")
	},
	fillGroupBetInfo: function(a) {
		var b = "金币";
		"1" == Global.isClub && (b = "积分");
		var c, d, e, f, g, h, i = [],
			j = [],
			k = "",
			l = "",
			m = 0,
			n = 0;
		T.Util.isEmpty(a.contentList[0].passType) ? (m = a.contentList.length, n = 1) : parseInt(a.contentList[0].passType) / 1e3 < 10 ? (m = (parseInt(a.contentList[0].passType) / 1e3).toFixed(0), n = (parseInt(a.contentList[0].passType) % 1e3).toFixed(0)) : (m = (parseInt(a.contentList[0].passType) / 1e5).toFixed(0), n = (parseInt(a.contentList[0].passType) % 1e5).toFixed(0));
		var o = m + "串" + n;
		g = new Date(a.payTime).format("YYYY-MM-dd hh:mm:ss"), f = a.itemId;
		var p = [],
			q = [],
			r = "S",
			s = [],
			t = [],
			u = [],
			v = [],
			w = [];
		$.each(a.contentList, function(b, f) {
			i[b] = f.matchId, c = f.codeTeamName.split("|")[0], e = playtypeObj[f.playId].name, d = f.odds, k = f.htName.substr(0, 4), l = f.gtName.substr(0, 4), h = "20" == f.playType, (f.sportType && "BB" == f.sportType || "BB" == a.sportType) && (r = "BB");
			var g = "",
				m = "",
				n = T.betInfoHtml.getBetResultByStatus(f.contentStatus)[0];
			"待开奖" == n || "订单确认中" == n ? (g = '<span class="TZ_white">' + n + "</span>", m = "TZ_white") : g = n.indexOf("赢") > -1 ? '<span style="color:#ff5000;font-size: 14px;font-weight: bold">' + n + "</span>" : n.indexOf("输") > -1 ? '<span style="color:#309f0e;font-size: 14px;font-weight: bold">' + n + "</span>" : '<span style="font-size: 14px;font-weight: bold">' + n + "</span>", j.length = 0;
			var o = "";
			o = h && "5" == f.matchStatus || h && "-1" == f.matchStatus ? void 0 === f.homeScore || "" == f.homeScore ? "vs" : f.homeScore + " : " + f.guestScore : (h || "3" != f.matchStatus && "4" != f.matchStatus && "5" != f.matchStatus) && (h || "50" != f.matchStatus && "-1" != f.matchStatus) ? "vs" : f.fhHomeScore + " : " + f.fhGuestScore;
			var q = {
				htName: f.htName,
				gtName: f.gtName,
				score: o
			};
			s.push(k + "|" + l), t.push(d), u.push(e), v.push(g), w.push(c), j.push("<span>" + k + '</span><span class="Color"> ' + o + " </span><span>" + l + "</span>"), p.push('<div class="TZ_listBeam" data-obj = "' + JSON.stringify(q).replace(/"/g, "'") + '" data-stype ="' + r + '" data-mid="' + f.matchId + '" data-status = "' + f.matchStatus + '"><div class="TZ_box1Beam"><div class="TZ_sty Color"><span class="' + m + '" style="color:#333;font-size:14px;font-weight:bold;"><span class="betContent">' + c + '</span>&nbsp;&nbsp;</span><p class="floatR" style="font-size:12px;font-weight:normal;"><span>' + e + ' </span><span class="Color">' + (1 == a.isInplay ? "&nbsp;&nbsp;赛前" : "&nbsp;&nbsp;滚球") + '</span></p></div><div class="TZ_tim Color"><span>' + j.join("") + "</span><span></span>&nbsp;&nbsp;<span>" + new Date(f.matchTime).format("hh:mm") + '</span><p class="floatR">' + g + "</p></div><div>回报 : <span>" + d + "</span>倍</div></div></div>")
		});
		var x = "";
		x = T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[0].indexOf("赢") > -1 ? '<span style="color:#ff5000;">' + T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[1] + "</span>" : T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[0].indexOf("输") > -1 ? '<span style="color:#309f0e;">' + T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[1] + "</span>" : "<span>" + T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[1] + "</span>";
		var y = {
			matchName: s,
			shareOdd: t,
			sharePlay: u,
			shareStatus: v,
			shareContent: w,
			buyMoney: a.buyMoney,
			shareCG: 1,
			prizeMoneyAndStatus: T.betInfoHtml.getBetResultByStatus(a.itemStatus, a)[1],
			shareAllM: x,
			number: a.contentList.length
		};
		return q.push('<div class="time_listContent"><div class="TZ_manyBeam" style="position: relative"><b class="seleBox hide" data-stype ="' + r + '" data-itemid = "' + f + '" data-matchid = "' + i + '" data-share = "' + JSON.stringify(y).replace(/"/g, "'") + '"><i class="selectNo" style="top:50%;margin-top:-13px;"></i></b><div class="TZ_style">' + p.join("") + '</div><div class="TZ_listBeamEnd"><div class="TZ_box1Beam betDel"><div class="TZ_sty Color"><span>' + o + '</span></div><div class="TZ_tim Color" style="color: #333;font-weight: bold"><span>投注' + b + " : " + T.Util.parseNumber(a.buyMoney) + '</span><p class="floatR">' + x + '</p></div></div><div class="TZ_box2"><div class="Color">订单号: <span>' + f.substring(0, 15) + '</span><p class="floatR"><span>' + g + "</span></p></div></div></div></div></div>"), q.join("")
	}
};
var payFunc = function(a, b) {
		var a = a;
		a.channel_no = Global.trenchType || "byzq", a.os = Global.OS, a.access_token = T.Storage.get("access_token");
		var c = !1;
		if (Global.is_majia && "4" == a.pay_type && (c = !0, a.os = "web"), "web" == Global.OS || c) {
			var d = window.location.origin + window.location.pathname;
			T.isNative && Global.isiOS && (d = Global.fullHost + "/v1/ny3G/" + Global.webRoot + "/shangcheng/shoppingMall.html"), a.callback_url = d + "?callbak=success&webpay=true", a.merchant_url = d + "?merchant=failed&webpay=true"
		}
		T.Util.xmlHttpRequest({
			reqUrl: "/forum/api/acct/shop_pay",
			type: "post",
			reqData: a,
			version: "3.0.5",
			callback: function(d) {
				function e(a) {
					var b = JSON.parse(a.shop_pay.pay_info);
					T.isNative && lib.nativeApi.compareJSSDKVersion("1.0.1") ? (T.Storage.set("aliPayInfo", b), T.Util.openWindow(T.Util.getRootPath() + "/" + Global.webRoot + "/shangcheng/doAlipay.html", {
						statusBar: 1,
						statusBarColor: "#1d222d"
					})) : function(a, b, c) {
						var d = document.getElementsByTagName("body")[0],
							e = document.createElement("form");
						e.setAttribute("id", "aliFrom"), e.setAttribute("class", "hide"), e.setAttribute("action", a), d.appendChild(e);
						var f = $("#aliFrom");
						f.attr({
							action: b + "?_input_charset=utf-8"
						});
						for (arg in c) {
							var g = $("<input type='hidden'>");
							g.attr({
								name: arg
							}), g.val(c[arg]), f.append(g)
						}
						f.submit()
					}(b.method, b.url, b.param)
				}
				T.isNative ? c ? e(d) : b && b(d.shop_pay.pay_info, a) : e(d)
			},
			errorCallback: function() {}
		})
	};
if (navigator.userAgent.match(/MicroMessenger/i)) {
	var weixinShareLogo = "http://www.buyinball.com/app/web/shareLogo.jpg";
	$("body").prepend('<div style=" overflow:hidden; width:0px; height:0; margin:0 auto; position:absolute; top:-800px;"><img src="' + weixinShareLogo + '"></div>')
}


var hCMD = {
	CLI_DEFAULT : 0x1001,
	SVR_DEFAULT : 0x1001,
	
	CLI_ORDER : 0x1002,
	SVR_ORDER : 0x1002,
	
	CLI_REGPUSH : 0x1003,
	SVR_REGPUSH : 0x1003
};

var Reader = function() {
    this.PACKET_HEADER_SIZE = 11;
    this._ver = 1;
    this._subver = 1;
    this._msgtype = 1;
	this._connid = 0;

    this._body = '';
    this._all = '';
    this._pos = 0;
};
Reader.prototype = {
    init: function(data){

        this._pos = 0;
        this._all = data;

        // read head
		this._body = this._all.substr(0,this.PACKET_HEADER_SIZE);
        this._length = this.readShort();
        this.cmd = this.readShort();
        this._ver = this.readByte();
        this._subver = this.readByte();
        this._msgtype = this.readByte();
        this._connid = this.readInt();
        if(this._length != (this._all.length -2)){
            console.error('packet length error', this);
            this.showHex();
        }
        if(this._ver != 1 || this._subver != 1){
            console.error('packet version error', this);
            this.showHex();
        }
		
        this._body = this._all.substr(this.PACKET_HEADER_SIZE);
		
        this._pos = 0;

    },

    _readUint8: function(length){
        var t = this._body.substr(this._pos, length);
        this._pos += length;
        var num = 0;
        // The operands of all bitwise operators are converted to signed 32-bit integers in big-endian order and in two's complement format.
        for(var i=0; i<length; i++){
            num += t.charCodeAt(i) << ((length - i -1) * 8);
        }
        return num;
    },


    readInt: function(){
        return this._readUint8(4);
    },

    readShort: function(){
        return this._readUint8(2);
    },

    readByte: function(){
        return this._readUint8(1);
    },

    readString: function() {
        var str_len = this.readInt() - 1;

        var str = this._body.substr(this._pos, str_len);
        this._pos += str_len + 1;
		
        try{
            str = decodeURIComponent(escape(str));
        }catch(e){
            console.error('decode string error', str);
            str = "677575";
        }
        return str;
    },

    isEnd: function(){
        if(this._pos >= this._body.length){
            return true;
        }else{
            return false;
        }
    },

    showHex: function(){
        var tmp = [];

        for(var n = 0; n<this._all.length; n++){
            var m = this._all.charCodeAt(n);
            tmp.push(m.toString(16));
        }

        var str = tmp.toString();
        console.log(str);
        return str;
    }
};
function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI);

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    // write the ArrayBuffer to a blob, and you're done
    return new Blob([ab]);
}

var Writer = function() {
    this.PACKET_HEADER_SIZE = 11;
    this._ver = 1;
    this._subver = 1;
    this._msgtype = 0;
    this._connid = 0;

    this._head = new Array(this.PACKET_HEADER_SIZE);
    this._body = '';
    this._all = '';
};
Writer.prototype = {

    makeChar: function(b){
        return String.fromCharCode(b);
    },

    writeBegin: function(cmd) {
        this.reset();

        this._head[2] = this.makeChar(cmd >> 8 & 0xff);
        this._head[3] = this.makeChar(cmd & 0xff);
        this._head[4] = this.makeChar(this._ver);
        this._head[5] = this.makeChar(this._subver);
        this._head[6] = this.makeChar(this._msgtype);
        this._head[7] = this.makeChar(this._connid);
        this._head[8] = this.makeChar(this._connid);
        this._head[9] = this.makeChar(this._connid);
        this._head[10] = this.makeChar(this._connid);

        return this;
    },

    writeEnd: function() {
        var len = this._body.length + this.PACKET_HEADER_SIZE - 2;
        this._head[0] = this.makeChar(len >> 8 & 0xff);
        this._head[1] = this.makeChar(len & 0xff);
        this._all = this._head.join('') + this._body;
        return this;
    },

    writeString: function(str) {
        str = unescape(encodeURIComponent(str));

        this.setUint32(str.length + 1);
        this._body += str;
        this._body += String.fromCharCode(0);

        return this;
    },

    toBase64: function() {
		return btoa(this._all);
    },
	
	toblob: function() {
		var t = btoa(this._all);
		return dataURItoBlob(t);
    },

    reset: function() {
        this._head = [];
        this._body = '';
        this._all = '';
        return this;
    },

    _setInt: function(v, bits, offset, bigEndian) {
        var max = Math.pow(2, bits - 1);
        if(typeof v != 'number'){
            console.error('TypeError: v of _setInt should be a number', v);
        }

        if(v > max - 1 || v < -max){
            console.warn('setInt::overflow', v, bits); //溢出
        }

        var val = [];
        switch (bits) {
			case 8:
				val.push(v & 0xff);
				break;
			case 16:
				val.push(v >> 8 & 0xff, v & 0xff);
				break;
			case 32:
				val.push(v >> 24 & 0xff, v >> 16 & 0xff, v >> 8 & 0xff, v & 0xff  );
				break;
			default:
				throw new Error('bits length is wrong!!');
        }

        if (bigEndian) {
            val.reverse();
        }

        for (var i = 0; i < val.length; i++) {
            this._body += String.fromCharCode(val[i]);
        }
        return this;
    },

    setUint8: function(v) {
        return this._setInt(v, 8);
    },

    setUint16: function(v) {
        return this._setInt(v, 16);
    },

    setUint32: function(v) {
        return this._setInt(v, 32);
    },

    writeByte: function(v) {
        return this._setInt(v, 8);
    },

    writeInt16: function(v) {
        return this._setInt(v, 16);
    },

    writeShort: function(v) {
        return this._setInt(v, 16);
    },

    writeInt: function(v) {
        return this._setInt(v, 32);
    },

    writeChar: function(_char) {
        this._body += _char;
        return this;
    },

    showHex: function(s){
        var tmp = [];
        var str = "";
        for(var i = 0; i<this._head.length; i++){
            if(typeof this._head[i] == 'undefined'){
                this._head[i] = String.fromCharCode(0);
            }
            var code = this._head[i].charCodeAt(0);
            tmp.push(code.toString(16));
        }

        str += tmp.toString();

        tmp = [];
        for(var n = 0; n<this._body.length; n++){
            var m = this._body.charCodeAt(n);
            tmp.push(m.toString(16));
        }

        str += ' --- ';
        str += tmp.toString();
        console.log(this, str);
        return str;
    }
};

var hSocket = {

    connect: function() {

        var me = this;

        this.w = new Writer();
        this.r = new Reader();

//        this.socket = new WebSocket("ws://g.baijl528.com:20185");
//        this.socket = new WebSocket("ws://hm01.bjl888.site:20185");
//        this.socket = new WebSocket("ws://13.124.46.251:20185");
        this.socket = new WebSocket(Global.wsdomain);
		this.socket.binaryType = "arraybuffer";
		
		// server返回数据
        var _buff = '';
        var getLength = function(data){
            if(data.length < 2){return 0;}
            return data.charCodeAt(0) * 256 + data.charCodeAt(1);
        };
		
		//关注状态
		this.socket.onopen = function() {
			me.login();
		};
		this.socket.onclose = function() {
			console.log('>> socket disconnected', this);
			me.connect();
	//		me.trigger('HallDisconnected');
		};
		this.socket.onerror = function(){
			console.log('>>> socket on err');
		};
		this.socket.onmessage = function(msg) {
			var u8 = new Uint8Array(msg.data);
			var _tAll = new Array();
			for (var i = 0; i < u8.length; i++) {
				_tAll.push(me.w.makeChar(u8[i]));
			}
			_buff +=  _tAll.join('');
				
			var len = 0;
			var buff = [];

			len = getLength(_buff);

			while(len && len + 2 <= _buff.length){
				buff.push(_buff.substring(0, len + 2));
				_buff = _buff.substring(len + 2);
				len = getLength(_buff);
			}

			for(var i = 0; i < buff.length; i++){
				me.r.init(buff[i]);
				console.log(me.r.cmd);
//				console.log(me.r.readString());
//				console.log(me.r.readString());
				me.dispatchEvent(me.r.cmd);
			}
		};
		
    },

    // server事件派发
    dispatchEvent: function(cmd) {
        switch (cmd) {
            case hCMD.SVR_DEFAULT:
                this.onLoginSuccess();
                break;
			case hCMD.SVR_ORDER:
                this.onOrderSuccess();
                break;
			case 0:
			case hCMD.SVR_REGPUSH:
                this.onRegPushSuccess();
                break;
            default:
                console.error('CMD ERROR', this.r, cmd)
        }
    },

    /*************************** 无奈地分隔线 data read 部分 *******************************/

    // server事件处理
    onData: function(type) {
        var dataCallBack = this['on' + type];
        if (dataCallBack) {
            _.bind(dataCallBack, this)();
        }
    },
	
	onOrderSuccess: function() {
		console.log('onOrderSuccess');
		var cmd = this.r.cmd;
		var type = this.r.readString();
		var ret = this.r.readString();
		console.log(ret);
		var retInfo = $.parseJSON(ret);
		
		var f = $(".pay-list-detail").find("li.betRecordLi"),
			g = $(".tList-con").find("li.betRecordLi"),
			h = $(".multiBetBtn .btn-tz"),
			i = $(".multiBetBtn");
		var d = function(a) {
				$(a).find(".oddBox.bei-change").length || $(a).find(".oddBox").addClass("bei-change");
				var b = {};
				b = 1 == ShopCar.type ? $(".onBetSubmit") : $(".multiBetBtn"), b.addClass("oddChanged"), $(b).find(".fan-tips").addClass("hide"), b.find(".pl-tips").removeClass("hide")
			};
		var u = function(a) {
				return -1 != ("" + a).indexOf("/") ? a : -1 == ("" + a).indexOf("/") && -1 == ("" + a).indexOf(".") ? a + ".0" : a
			};
		var t = function(a, b, c) {
				var e = c.odds,
					f = {};
				if ((f = 1 == ShopCar.type ? $(".touzhu-box1 .touzhu-one") : $(".pay-list-detail").find("li[m_id='" + a + "'][p_id='" + b + "']")) && f.length) if ("70101" == b || "70111" == b) e = e.split(","), $.each($(f), function(a, b) {
					var c = $(b).attr("codes");
					"3" == c ? $(b).attr("newOdds", NumberUtil.fmoney(e[0])) : "1" == c ? $(b).attr("newOdds", NumberUtil.fmoney(e[1])) : $(b).attr("newOdds", NumberUtil.fmoney(e[2])), d(b)
				});
				else if ("70112" == b || "70102" == b || "3102" == b || "3202" == b || "3302" == b || "3402" == b) {
					var g = {};
					g = 1 == ShopCar.type ? $(".touzhu-box1 .touzhu-one") : $(".pay-list-detail").find("li[m_id='" + a + "'][p_id='" + b + "'][handicap='" + u(T.Util.getHandicapInfo(c.let_ball)) + "']"), e = e.split(","), $.each($(g), function(a, b) {
						"3" == $(b).attr("codes") ? $(b).attr("newOdds", NumberUtil.fmoney(e[0])) : $(b).attr("newOdds", NumberUtil.fmoney(e[1])), d(b)
					})
				} else if ("70104" == b || "70114" == b || "3104" == b || "3204" == b || "3304" == b || "3404" == b) {
					var g = {};
					g = 1 == ShopCar.type ? $(".touzhu-box1 .touzhu-one") : $(".pay-list-detail").find("li[m_id='" + a + "'][p_id='" + b + "'][handicap='" + u(T.Util.getHandicapInfo(c.let_ball)) + "']"), e = e.split(","), $.each($(g), function(a, b) {
						"1" == $(b).attr("codes") ? $(b).attr("newOdds", NumberUtil.fmoney(e[0])) : $(b).attr("newOdds", NumberUtil.fmoney(e[1])), d(b)
					})
				} else if ("70103" == b || "70113" == b) e && "object" != typeof e && (e = JSON.parse(e)), $.each($(f), function(a, b) {
					var c = $(b).attr("codes");
					if (-1 != c.indexOf(":")) {
						var f = c.split(":"),
							g = "L";
						parseInt(f[0]) > parseInt(f[1]) ? g = "W" : parseInt(f[0]) == parseInt(f[1]) && (g = "5:5" == c ? "A" : "D");
						for (var h = e[g], i = 0; i < h.length; i++)(h[i].handicap == c || "AOS" == h[i].handicap && "5:5" == c) && ($(b).attr("newOdds", NumberUtil.fmoney(h[i].odd)), d(b))
					}
				});
				else if ("70105" == b || "70115" == b) {
					e && "object" != typeof e && (e = JSON.parse(e));
					var h = {
						1: "R01",
						2: "R23",
						3: "R46",
						4: "R7"
					};
					$.each($(f), function(a, b) {
						var c = $(b).attr("codes");
						$(b).attr("newOdds", NumberUtil.fmoney(e[h[c]])), d(b)
					})
				} else if ("70133" == b || "70143" == b || "3133" == b || "3233" == b || "3333" == b || "3433" == b) {
					if ("BB" == Global.sType) {
						var g = {};
						return g = 1 == ShopCar.type ? $(".touzhu-box1 .touzhu-one") : $(".pay-list-detail").find("li[m_id='" + a + "'][p_id='" + b + "']"), e = e.split(","), void $.each($(g), function(a, b) {
							"1" == $(b).attr("codes") ? $(b).attr("newOdds", NumberUtil.fmoney(e[0])) : $(b).attr("newOdds", NumberUtil.fmoney(e[1])), d(b)
						})
					}
					e && "object" != typeof e && (e = JSON.parse(e)), $.each($(f), function(a, b) {
						"1" == $(b).attr("codes") ? $(b).attr("newOdds", NumberUtil.fmoney(e.sin)) : $(b).attr("newOdds", NumberUtil.fmoney(e.dou)), d(b)
					})
				} else if ("70130" == b || "70140" == b) e && "object" != typeof e && (e = JSON.parse(e)), $.each($(f), function(a, b) {
					"1" == $(b).attr("codes") ? $(b).attr("newOdds", NumberUtil.fmoney(e.big)) : $(b).attr("newOdds", NumberUtil.fmoney(e.small)), d(b)
				});
				else if ("70150" == b) {
					e && "object" != typeof e && (e = JSON.parse(e));
					var h = {
						33: "WW",
						31: "WD",
						30: "WL",
						13: "DW",
						11: "DD",
						10: "DL",
						"03": "LW",
						"01": "LD",
						"00": "LL"
					};
					$.each($(f), function(a, b) {
						var c = $(b).attr("codes");
						$(b).attr("newOdds", NumberUtil.fmoney(e[h[c]])), d(b)
					})
				}
			};
			
		if( ShopCar.type == 1){
			f = $(".touzhu-box1").find(".touzhu-one");
			i = $(".onBetSubmit");
			h = $(".onBetSubmit .btn-tz");
			
			$(".onBetSubmit").addClass("betSuccess").removeClass('noChoose');
			$(".onBetSubmit .btn-tz").html("确定");
			
			
		}else{
			$("p[codes].on,li[codes].on").removeClass("on");
			$(".delete-all").addClass("hide"),
			$(".litstxt").removeClass("initHide").html("已下注"),
			$(".dan-close,.del_record").hide(),
			$(".multiBetBtn").addClass("betSuccess").removeClass('noChoose'),
			$(".multiBetBtn .btn-tz").html("确定");
		}
		if(retInfo.ret!=0){
			tip(retInfo.retMsg);
			
			$(i).removeClass("noChoose").removeClass('betSuccess');
			b = {};
			b.res_data = [];
			$.each($(retInfo.failItems), function(a, d){
				var tmp = {};
				tmp.rFlag = 1;
				tmp.p_id = playToPlayId[d.oddsType+'-'+d.matchPhase];
				if(d.oddsType=='EUROPE'){
					tmp.let_ball = 0;
					tmp.odds = ""+d.fixtureOdds.w+","+d.fixtureOdds.d+","+d.fixtureOdds.l+"";
				}else if(d.oddsType=='ASIAN'){
					tmp.let_ball = d.fixtureOdds.h;
					tmp.odds = ""+d.fixtureOdds.w+","+d.fixtureOdds.l+"";
				}else{
					tmp.let_ball = d.fixtureOdds.h;
					tmp.odds = ""+d.fixtureOdds.b+","+d.fixtureOdds.s+"";
				}
				tmp.m_id = d.matchGroupId;
				b.res_data.push(tmp);
			});
			//{"ret":-9,"retMsg":"赔率已改变","failItems":[{"matchId":"6930053","matchGroupId":"cb8b9e1a-6152-4bf7-8f1a-a1b7b42473c2","homeScore":0,"awayScore":0,"matchSpId":"471290509","matchPhase":0,"oddsType":"BIGSMALL","fixtureOdds":{"h":"3","b":0.85,"s":0.91}}]}
			//{"msg":"数据已变更","msg_code":"1001","res_data":[{"rFlag":"1","let_ball":"0","m_id":"201803140000350000172113","p_id":"70101","odds":"1.34,4.24,6.99"},{"rFlag":"1","let_ball":"0","m_id":"201803030000247000169789","p_id":"70101","odds":"1.50,3.79,5.39"}]}
			$(h).html("确认投注");
			$(b.res_data).length ? ($.each($(b.res_data), function(a, b) {
//								if (b.n_playing && "1" == b.n_playing) s(b.m_id, b.p_id, b);
//								else {
									var c = b.odds.split(","),
										d = b.p_id,
										e = $("ul[m_id='" + b.m_id + "'][p_id='" + d + "']");
										console.log(e);
									if ("70101" == d || "70111" == d) "1" == b.rFlag ? ($(e).find("li[codes='3'] cite").html(NumberUtil.fmoney(c[0])), $(e).find("li[codes='1'] cite").html(NumberUtil.fmoney(c[1])), $(e).find("li[codes='0'] cite").html(NumberUtil.fmoney(c[2])), t(b.m_id, d, b)) : ($(".touzhu-one[m_id='" + b.m_id + "'][p_id='" + d + "']").remove(), $(".pay-list-detail").find("li[m_id='" + b.m_id + "'][p_id='" + d + "']").remove(), $(e).parent().remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), "cg_bet" == Buy.fromtype && Buy.cgDeleteRefresh(!0), tip("盘口已经移除!"));
									else if ("70112" == d || "70102" == d || "3102" == d || "3202" == d || "3302" == d || "3402" == d) if ("1" == b.rFlag) {
										var f = $("ul.match_title[m_id='" + b.m_id + "'][p_id='" + d + "'][handicap='" + u(T.Util.getHandicapInfo(b.let_ball)) + "']");
										if ($(f).find("li[codes='3'] cite").html(NumberUtil.fmoney(c[0])), $(f).find("li[codes='0'] cite").html(NumberUtil.fmoney(c[1])), "ground_match" == Buy.fromtype) {
											var g = $(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'][handicap='" + u(T.Util.getHandicapInfo(b.let_ball)) + "']");
											$(g).find(".codes[codes='3'] cite").html(NumberUtil.fmoney(c[0])), $(g).find(".codes[codes='0'] cite").html(NumberUtil.fmoney(c[1]))
										}
										t(b.m_id, d, b)
									} else $(".touzhu-one[m_id='" + b.m_id + "'][p_id='" + d + "']").remove(), $(".pay-list-detail").find("li[m_id='" + b.m_id + "'][p_id='" + d + "'][handicap='" + u(T.Util.getHandicapInfo(b.let_ball)) + "']").remove(), $("ul.match_title[m_id='" + b.m_id + "'][p_id='" + d + "'][handicap='" + u(T.Util.getHandicapInfo(b.let_ball)) + "']").remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), "cg_bet" == Buy.fromtype ? Buy.cgDeleteRefresh(!0) : "ground_match" == Buy.fromtype && ($(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'] .codes .betInfoWrap").hide(), $(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'] .codes").removeClass("on"), $("#selection-count,#SelectionCount").html(Buy.obj.find(".codes.on").length), 0 == Buy.obj.find(".codes.on").length && ShopCar.hide(), $(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'] .codes .locked").length || $(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'] .codes").append('<span class="locked">--</span>')), tip("盘口已经移除!");
									else if ("70114" == b.p_id || "70104" == b.p_id || "3104" == d || "3204" == d || "3304" == d || "3404" == d) if ("1" == b.rFlag) {
										var f = $("ul.match_title[m_id='" + b.m_id + "'][p_id='" + d + "'][handicap='" + u(T.Util.getHandicapInfo(b.let_ball)) + "']");
										if ($(f).find("li[codes='1'] cite").html(NumberUtil.fmoney(c[0])), $(f).find("li[codes='0'] cite").html(NumberUtil.fmoney(c[1])), "ground_match" == Buy.fromtype) {
											var g = $(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'][handicap='" + u(T.Util.getHandicapInfo(b.let_ball)) + "']");
											$(g).find(".codes[codes='1'] cite").html(NumberUtil.fmoney(c[0])), $(g).find(".codes[codes='0'] cite").html(NumberUtil.fmoney(c[1]))
										}
										t(b.m_id, d, b)
									} else $(".touzhu-one[m_id='" + b.m_id + "'][p_id='" + d + "']").remove(), $(".pay-list-detail").find("li[m_id='" + b.m_id + "'][p_id='" + d + "'][handicap='" + u(T.Util.getHandicapInfo(b.let_ball)) + "']").remove(), $("ul.match_title[m_id='" + b.m_id + "'][p_id='" + d + "'][handicap='" + u(T.Util.getHandicapInfo(b.let_ball)) + "']").remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), "cg_bet" == Buy.fromtype ? Buy.cgDeleteRefresh(!0) : "ground_match" == Buy.fromtype && ($(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'] .codes .betInfoWrap").hide(), $(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'] .codes").removeClass("on"), $("#selection-count,#SelectionCount").html(Buy.obj.find(".codes.on").length), 0 == Buy.obj.find(".codes.on").length && ShopCar.hide(), $(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'] .codes .locked").length || $(".playInfoWrap[m_id='" + b.m_id + "'][p_id='" + d + "'] .codes").append('<span class="locked">--</span>')), tip("盘口已经移除!");
									else if ("BB" == Global.sType && ("70133" == b.p_id || "70143" == b.p_id || "3133" == d || "3233" == d || "3333" == d || "3433" == d)) if ("1" == b.rFlag) {
										var f = $("ul.match_title[m_id='" + b.m_id + "'][p_id='" + d + "']");
										$(f).find("li[codes='1'] cite").html(NumberUtil.fmoney(c[0])), $(f).find("li[codes='2'] cite").html(NumberUtil.fmoney(c[1])), t(b.m_id, d, b)
									} else $(".touzhu-one[m_id='" + b.m_id + "'][p_id='" + d + "']").remove(), $(".pay-list-detail").find("li[m_id='" + b.m_id + "'][p_id='" + d + "']").remove(), $("ul.match_title[m_id='" + b.m_id + "'][p_id='" + d + "']").remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), "cg_bet" == Buy.fromtype && Buy.cgDeleteRefresh(!0), tip("盘口已经移除!")
								}
//							}
							), ShopCar && ShopCar.checkBetListAfterOrder()) : tip("有盘口已经不存在");
			
			
			
			
		}else{
			1 == ShopCar.type ? $(".touzhu-box1 .betMoney").removeClass("act-after").html("已投注 " + $(".touzhu-box1 .betMoney").html()) : 
			3 == ShopCar.type && ($(".touzhu-box3 .tList-con .betMoney").removeClass("act-after").html("已投注 " + $(".touzhu-box3 .tList-con .betMoney").html()), $(".touzhu-box3 .tList-con .betMoney").off(),
			$.each($(".tList-style li"), function(a, b) {
				$(b).hasClass("chuan-last") || $(b).off()
			}));
			var x = $(".pay-list-detail");
			x.find(".del_record").hide(), x.find(".betMoney").each(function(a, b) {
				var b = $(b),
					c = b.attr("data-val");
				b.html("投注 " + c).removeClass("caoz-input").addClass("betSuccessInput")
			}), tip("下注成功", "ok")
		}
	},

    // 登陆成功
    onLoginSuccess: function() {
		var cmd = this.r.cmd;
		var type = this.r.readString();
		var ret = this.r.readString();
		console.log(ret);
		var retInfo = $.parseJSON(ret);
		
		if(retInfo.ret!==0){
			tip(retInfo.retMsg,"error");
		}
		
		return;
    },
	
	onRegPushSuccess: function(){
		var cmd = this.r.cmd;
		var type = this.r.readString();
		var ret = this.r.readString();
		
		try {
			a = JSON.parse(ret)
		} catch (e) {
			a = null
		}
		b = null;
		console.log(a);
		if(a){
			switch ("" + a.pushType) {
				case 'odds':
					b = {};
					b.a_corner_368 = null;
					b.b_status = null;
					b.cFlag = null;
					b.evtCd = null;
					b.evtCont = null;
					b.h_corner_368 = null;
					b.h_value = null;
					b.msg = null;
					b.n_name = null;
					b.score = null;
					b.state = null;
					b.tFlg = null;
					b.type = null;
					b.u_no = null;
					b.msi = null;
					
					b.msgType = 2;
					b.play = a.content.oddsType;
					b.match_phase = a.content.matchPhase;
					b.odds = null;
					b.odds_phase = null;
					b.mId = a.matchGroupId;
					b.is_master = a.content.isMaster;
					b.uTime = new Date() - 0;
					d = a.content;
					if(b.play=='EUROPE'){
						b.handicap = 0;
						if(b.match_phase){
							b.odds_phase = ""+d.fixtureOdds.w+","+d.fixtureOdds.d+","+d.fixtureOdds.l+"";
						}else{
							b.odds = ""+d.fixtureOdds.w+","+d.fixtureOdds.d+","+d.fixtureOdds.l+"";
						}
					}else if(b.play=='ASIAN'){
						b.handicap = d.fixtureOdds.h;
						if(b.match_phase){
							b.odds_phase = ""+d.fixtureOdds.w+","+d.fixtureOdds.l+"";
						}else{
							b.odds = ""+d.fixtureOdds.w+","+d.fixtureOdds.l+"";
						}
					}else{
						b.handicap = d.fixtureOdds.h;
						if(b.match_phase){
							b.odds_phase = ""+d.fixtureOdds.b+","+d.fixtureOdds.s+"";
						}else{
							b.odds = ""+d.fixtureOdds.b+","+d.fixtureOdds.s+"";
						}
					}
				break;
				
				
			}
			
		}
		
		if(b){
			this.onMessageArrived(b);
		}
		
		
		
		
//		console.log(ret);
	},
	
	onMessageArrived: function(){},
	
    // 用户登陆
    login: function() {
		if( T.Storage.get('test')==1 ){
			uid = 200010;
			token = '79cce222e8673ff121244e55834bdf91';
		}else{
			uid = parseInt(T.Storage.get('uid'));
			token = T.Storage.get('token');
		}
        this.w.writeBegin(hCMD.CLI_DEFAULT);
        this.w.writeString('auth');

        var userInfo = {
            uid: uid,
            token: token,
        };
        this.w.writeString(JSON.stringify(userInfo));
        this.w.writeEnd();
		console.log(this.w.toblob());
        this.socket.send(this.w.toblob());
    },
	
	order: function(orderinfo){
		this.w.writeBegin(hCMD.CLI_ORDER);
        this.w.writeString('order');
		
		console.log(orderinfo);
		this.w.writeString(JSON.stringify(orderinfo));
		
		this.w.writeEnd();
        this.socket.send(this.w.toblob());
	},
	
	regpush: function(matchinfo,callback){
//		"regPush"  "{"matchGroupIds":[xxx,xxx,xxx]}"

		if(typeof(callback)=='function'){
			this.onMessageArrived = callback;
		}
		this.w.writeBegin(hCMD.CLI_REGPUSH);
        this.w.writeString('regPush');
		
		console.log(matchinfo);
		this.w.writeString(JSON.stringify(matchinfo));
		
		this.w.writeEnd();
        this.socket.send(this.w.toblob());
	}

};
//var openUrl ;
window.onload = function () {
//	alert(typeof(Client.openUrl));

	if( ( typeof(Client)=='object' ) && typeof(Client.openUrl)=='function'){
		openUrl = function(title,url){
			Client.openUrl(title,url);
		}
	}
	
	if(T.Util.getParaHash('uid')!=='' && T.Util.getParaHash('token')!=='' && T.Util.getParaHash('coin')){
		T.Storage.set('uid',T.Util.getParaHash('uid'));
		T.Storage.set('token',T.Util.getParaHash('token'));
		T.Storage.set('coin',T.Util.getParaHash('coin'));
		
		userinfo = {
			uid:T.Util.getParaHash('uid'),
			token:T.Util.getParaHash('token'),
			coin:T.Util.getParaHash('coin')
		};
		T.Storage.set('userinfo', userinfo);
	}
	
	hSocket.connect();
	
//	alert(T.Util.getPara('uid'));
//	alert(T.Util.getPara('token'));

}