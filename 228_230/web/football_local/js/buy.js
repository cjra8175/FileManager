/* !v1-1.0.0.js 2018-01-10 */

var Buy = function() {
		var a = "",
			b = [],
			c = !0,
			d = function(a) {
				$(a).find(".oddBox.bei-change").length || $(a).find(".oddBox").addClass("bei-change");
				var b = {};
				b = 1 == ShopCar.type ? $(".onBetSubmit") : $(".multiBetBtn"), b.addClass("oddChanged"), $(b).find(".fan-tips").addClass("hide"), b.find(".pl-tips").removeClass("hide")
			},
			e = function() {
				$(".touzhu-box3 .betMoney").off().Touch(function(a) {
					if (!$(a).hasClass("caoz-input") && !$(a).hasClass("betSuccessInput")) {
						$(".touzhu-box3 .betMoney").removeClass("caoz-input"), $(a).addClass("caoz-input"), $(".touzhu-box3 .list-select").removeClass("list-select");
						var b = $(this).parent().parent();
						$(b).addClass("list-select"), Buy.showKeyboard(b)
					}
				}), $(".cgAward-icon-show").off().Touch(function(a) {
					T.Util.openWindow(T.Util.getRootPath() + "/" + Global.webRoot + "/app/awardRule.html?sportType=" + Global.sType + "&fromRuleFlag=" + $(a).attr("award-type"))
				})
			},
			f = function() {
				$(".chuan-last").off().Touch(function() {
					$(".chuan-last .sq-do i").hasClass("do-up") ? ($(".chuan-last .do-txt").html("收起"), $(".chuan-last .sq-do i").removeClass("do-up").addClass("do-down"), $.each($(".touzhu-box3 .tList-style ul li"), function(a, b) {
						$(b).hasClass("hide") && $(b).removeClass("hide")
					})) : $(".chuan-last .sq-do i").hasClass("do-down") && ($(".chuan-last .do-txt").html("更多"), $(".chuan-last .sq-do i").removeClass("do-down").addClass("do-up"), $.each($(".touzhu-box3 .tList-style ul li"), function(a, b) {
						a >= 4 && !$(b).hasClass("chuan-last") && $(b).addClass("hide")
					}))
				}), $(".tList-style ul .chuan-intro").off().Touch(function(a) {
					if ($(a).toggleClass("on"), $(a).hasClass("on")) {
						b = [];
						var c = $(".touzhu-list .touzhu-ulBox li"),
							d = [];
						d.length = c.length;
						var f = "hide";
						Buy.buyCombine_increase(c, 0, d, parseInt($(a).attr("data-index")), parseInt($(a).attr("data-index")), c.length);
						var g = !1;
						if ($.each($(".touzhu-box3 .betRecordLi"), function(a, b) {
							"true" == $(b).attr("hascgaward") && (g = !0)
						}), g) if (T.Util.isEmpty(selectCountCg)) f = tempAwardFlag ? "cgAward-show" : "hide";
						else for (var h in selectCountCg) parseInt($(a).attr("data-index")) < 10 ? parseInt(selectCountCg[h]) / 1e3 < 10 && (parseInt(selectCountCg[h]) / 1e3 + "").indexOf($(a).attr("data-index")) > -1 && tempAwardFlag && (f = "cgAward-show") : parseInt(selectCountCg[h]) / 1e5 >= 10 && (parseInt(selectCountCg[h]) / 1e5 + "").indexOf($(a).attr("data-index")) > -1 && tempAwardFlag && (f = "cgAward-show");
						else f = "hide";
						if ($(".tList-con ul").children(".touzhu-item").length) {
							var i = $(".tList-con ul").children(".touzhu-item").length;
							$.each($(".tList-con ul .touzhu-item"), function(c, d) {
								return c = parseInt(c), 0 == c && parseInt($(d).attr("data-index")) > parseInt($(a).attr("data-index")) ? ($(d).before('<li class="touzhu-item betRecordLi" data-index="' + $(a).attr("data-index") + '" data-all="1">\t\t\t\t\t\t\t<span class="cgAward-icon-show ' + f + '" award-type="cgAward"></span>\t\t\t\t\t\t\t<div class="chuan-style">' + $(a).attr("data-index") + '串1</div>\t\t\t\t\t\t\t<div class="chuan-fan">预计最高返还：<span class="bonus">0</span></div>\t\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t<span class="caoz-bei" style="position:absolute;right: 78px;top: 6px;"><em class="bei-number"  style="vertical-align: top;color:#666">' + b.length + '</em><em class="bei-ca">×</em></span>\t\t\t\t\t\t\t<span class="caoz-je betMoney" data-val="">输入金币</span>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</li>'), e(), !1) : parseInt($($(".tList-con ul .touzhu-item")[c]).attr("data-index")) < parseInt($(a).attr("data-index")) && parseInt($(a).attr("data-index")) < parseInt($($(".tList-con ul .touzhu-item")[c + 1]).attr("data-index")) ? ($(d).after('<li class="touzhu-item betRecordLi" data-index="' + $(a).attr("data-index") + '" data-all="1">\t\t\t\t\t\t\t<span class="cgAward-icon-show ' + f + '" award-type="cgAward"></span>\t\t\t\t\t\t\t<div class="chuan-style">' + $(a).attr("data-index") + '串1</div>\t\t\t\t\t\t\t<div class="chuan-fan">预计最高返还：<span class="bonus">0</span></div>\t\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t<span class="caoz-bei" style="position:absolute;right: 78px;top: 6px;"><em class="bei-number"  style="vertical-align: top;color:#666">' + b.length + '</em><em class="bei-ca">×</em></span>\t\t\t\t\t\t\t<span class="caoz-je betMoney" data-val="">输入金币</span>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</li>'), e(), !1) : c + 1 == i && parseInt($(d).attr("data-index")) < parseInt($(a).attr("data-index")) ? (T.Util.isEmpty($(a).attr("data-flag")) ? $(d).next().hasClass("keyboard") ? $(d).next().after('<li class="touzhu-item betRecordLi" data-index="' + $(a).attr("data-index") + '" data-all="1">\t\t\t\t\t\t\t\t\t\t<span class="cgAward-icon-show ' + f + '" award-type="cgAward"></span>\t\t\t\t\t\t\t\t\t\t<div class="chuan-style">' + $(a).attr("data-index") + '串1</div>\t\t\t\t\t\t\t\t\t\t<div class="chuan-fan">预计最高返还：<span class="bonus">0</span></div>\t\t\t\t\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t\t\t\t<span class="caoz-bei" style="position:absolute;right: 78px;top: 6px;"><em class="bei-number"  style="vertical-align: top;color:#666">' + b.length + '</em><em class="bei-ca">×</em></span>\t\t\t\t\t\t\t\t\t\t<span class="caoz-je betMoney" data-val="">输入金币</span>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t</li>') : $(d).after('<li class="touzhu-item betRecordLi" data-index="' + $(a).attr("data-index") + '" data-all="1">\t\t\t\t\t\t\t\t\t\t<span class="cgAward-icon-show ' + f + '" award-type="cgAward"></span>\t\t\t\t\t\t\t\t\t\t<div class="chuan-style">' + $(a).attr("data-index") + '串1</div>\t\t\t\t\t\t\t\t\t\t<div class="chuan-fan">预计最高返还：<span class="bonus">0</span></div>\t\t\t\t\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t\t\t\t<span class="caoz-bei" style="position:absolute;right: 78px;top: 6px;"><em class="bei-number"  style="vertical-align: top;color:#666">' + b.length + '</em><em class="bei-ca">×</em></span>\t\t\t\t\t\t\t\t\t\t<span class="caoz-je betMoney" data-val="">输入金币</span>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t</li>') : $(d).next().hasClass("keyboard") ? $(d).next().after('<li data-flag="' + $(a).attr("data-flag") + '" class="touzhu-item betRecordLi" data-index="' + $(a).attr("data-index") + '" data-all="' + $(a).attr("data-all") + '">\t\t\t\t\t\t\t\t\t<div class="chuan-style">' + (parseInt($(a).attr("data-index")) - 1) + "串" + $(a).attr("data-all") + '</div>\t\t\t\t\t\t\t\t\t<div class="chuan-fan">预计最高返还：<span class="bonus">0</span></div>\t\t\t\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t\t\t<span class="caoz-bei" style="position:absolute;right: 78px;top: 6px;"><em class="bei-number"  style="vertical-align: top;color:#666">' + $(a).attr("data-all") + '</em><em class="bei-ca">×</em></span>\t\t\t\t\t\t\t\t\t<span class="caoz-je betMoney" data-val="">输入金币</span>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</li>') : $(d).after('<li data-flag="' + $(a).attr("data-flag") + '" class="touzhu-item betRecordLi" data-index="' + $(a).attr("data-index") + '" data-all="' + $(a).attr("data-all") + '">\t\t\t\t\t\t\t\t\t<div class="chuan-style">' + (parseInt($(a).attr("data-index")) - 1) + "串" + $(a).attr("data-all") + '</div>\t\t\t\t\t\t\t\t\t<div class="chuan-fan">预计最高返还：<span class="bonus">0</span></div>\t\t\t\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t\t\t<span class="caoz-bei" style="position:absolute;right: 78px;top: 6px;"><em class="bei-number"  style="vertical-align: top;color:#666">' + $(a).attr("data-all") + '</em><em class="bei-ca">×</em></span>\t\t\t\t\t\t\t\t\t<span class="caoz-je betMoney" data-val="">输入金币</span>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</li>'), e(), !1) : void 0
							})
						} else {
							b = [];
							var c = $(".touzhu-list .pay-list-detail li.touzhu-item"),
								d = [];
							d.length = c.length, Buy.buyCombine_increase(c, 0, d, parseInt($(a).attr("data-index")), parseInt($(a).attr("data-index")), c.length), $(".tList-con ul").html('<li class="touzhu-item betRecordLi" data-index="' + $(a).attr("data-index") + '" data-all="1">\t\t\t\t\t\t\t<div class="chuan-style">' + $(a).attr("data-index") + '串1</div>\t\t\t\t\t\t\t<div class="chuan-fan">预计最高返还：<span class="bonus">0</span></div>\t\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t<span class="caoz-bei" style="position:absolute;right: 78px;top: 6px;"><em class="bei-number"  style="vertical-align: top;color:#666">' + b.length + '</em><em class="bei-ca">×</em></span>\t\t\t\t\t\t\t<span class="caoz-je betMoney" data-val="">输入金币</span>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</li>'), e()
						}
						var j = $(".box3Scrollable .pay-list-detail").height() + $(".box3Scrollable .tList-bg").height() + $(".box3Scrollable .tList-style").height() + $(".box3Scrollable .tList-con").height();
						$(".box3Scrollable").height() < j && $(".box3Scrollable").scrollTop(999)
					} else $(a).hasClass("on") || (1 == $(".tList-con ul .touzhu-item").length ? ($(a).toggleClass("on"), tip("至少选择一种串关方式")) : $.each($(".tList-con ul .touzhu-item"), function(b, c) {
						parseInt($(c).attr("data-index")) == parseInt($(a).attr("data-index")) && ($(c).next().hasClass("keyboard") && $(c).next().remove(), $(c).remove())
					}), x())
				})
			},
			g = function(a, b) { //生成购物车
				console.log('aaaa');
				if ($(".touzhu-box2 .betRecordLi,.touzhu-box3 .betRecordLi").remove(), T.Util.isEmpty(T.Storage.get("userinfo"))) 
					console.log('bbbb'), 
					$(".usercoin-box").addClass("hide"), 
					$(".login-btn").removeClass("hide"), 
					$(".login-btn").off().Touch(function() {
						$("#mask").hide(), T.Util.isEmpty(T.Storage.get("access_token")) && T.Util.login()
					});
				else {
					console.log('cccc');
					var c = T.Storage.get("userinfo").coin;
					$(".ye-count").html(T.Util.parseNumber(c)).attr("data-val", c), $(".usercoin-box").removeClass("hide"), $(".login-btn").addClass("hide")
				}
				var d = a.find(".on"),
					g = [],
					h = 1;
				tempAwardFlag = hasAwardFlag;
				for (var i = 0; j = d.length, i < j; i++) {
					var k, l, m, n = $(d[i]).parent();
					k = !! $(d[i]).parent().parent().parent().prev().find(".cgAward-Flag").attr("data-odd"), $(d[i]).parent().parent().parent().prev().find(".cgAward-Flag").attr("data-exprietime") && $(d[i]).parent().parent().parent().prev().find(".cgAward-Flag").attr("data-effecttime") ? (l = $(d[i]).parent().parent().parent().prev().find(".cgAward-Flag").attr("data-exprietime"), m = $(d[i]).parent().parent().parent().prev().find(".cgAward-Flag").attr("data-effecttime")) : (l = "", m = "");
					var o = T.Util.notNullValue(n.attr("ht_name"), "--").substring(0, 4),
						p = T.Util.notNullValue(n.attr("gt_name"), "--").substring(0, 4),
						q = n.attr("m_id"),
						r = n.attr("m_time"),
						s = n.attr("p_id"),
						matchSpId = n.attr("matchSpId"),
						awayScore = n.attr("gt_score"),
						homeScore = n.attr("ht_score"),
						matchId = n.attr("matchId"),
						handicap_s = n.attr("handicap_s"),
						t = playtypeObj[s].name,
						u = $(d[i]).find("cite").html();
						console.log(n);
					hasAwardFlag && !T.Util.isEmpty(extraMinOdd) && extraMinOdd.length && (min_odd = Math.min.apply(null, extraMinOdd), parseFloat(u) < parseFloat(min_odd) && (tempAwardFlag = !1)), h *= u;
					var v = $(d[i]).attr("codes"),
						w = n.attr("p_type"),
						x = "",
						y = o + " vs " + p,
						z = "0",
						A = "",
						B = "",
						C = n.attr("msi") || "";
					"70103" == s || "70113" == s || "70105" == s || "70150" == s || "70133" == s || "70143" == s || "70130" == s || "70140" == s || "3133" == s || "3233" == s || "3333" == s || "3433" == s ? (x = $(d[i]).find(".tName").html(), "70130" != s && "70140" != s || (z = n.attr("handicap"))) : "70101" == s || "70111" == s ? x = "3" == v ? o : "1" == v ? "平" : p : "70102" == s || "70112" == s || "3102" == s || "3202" == s || "3302" == s || "3402" == s ? ($("#inplay").length && (A = $("#score").html(), "70102" == s && (t = "当前让球")), z = n.attr("handicap"), x = "3" == v ? o + "" + $(d[i]).find("em").html() : p + "" + $(d[i]).find("em").html(), B = "isMaster=" + $(d[i]).parent().attr("isMaster")) : "70104" != s && "70114" != s && "3104" != s && "3204" != s && "3304" != s && "3404" != s || (z = n.attr("handicap"), $("#inplay").length && (A = $("#score").html()), x = "1" == v ? "高于" + z : "低于" + z, B = "isMaster=" + $(d[i]).parent().attr("isMaster"));
					"cg_bet" == Buy.fromtype && ("text-align:right;", "display:none;"), A = A || "", "VS" == A && (A = ""), 
					1 == ShopCar.type ? g.push('<div class="touzhu-one" m_id="' + q + '" m_time="' + r + '" class="betRecordLi" odds="' + u + '" codes="' + v + '" let_ball="-1" team_a="' + o + '" team_b="' + p + '" p_type="' + w + '" awayScore="' + awayScore + '" homeScore="' + homeScore + '" matchId="' + matchId + '" matchSpId="' + matchSpId + '" teamname="' + x + "|" + y + '" p_id="' + s + '" msi="' + C + '" handicap_s="' + handicap_s + '" handicap="' + z + '" ' + B + '>\t\t\t\t\t\t<div class="one-c1 betCont">' + x + '</div>\t\t\t\t\t\t<div class="one-style betWay"><span class="betWayName">' + t + '</span><span class="nowScore">' + A + '</span></div>\t\t\t\t\t\t<div class="one-fight vsInfo">' + o + " vs " + p + '</div>\t\t\t\t\t\t<span class="dan-close del_record"></span>\t\t\t\t\t\t<span class="bei-con oddBox">@<em class="betOdd">' + u + "</em></span>\t\t\t\t\t</div>") : 
					3 == ShopCar.type ? g.push('<li class="touzhu-item betRecordLi" effectTime="' + m + '" exprieTime="' + l + '" hasCgAward="' + k + '" m_id="' + q + '" m_time="' + r + '" class="betRecordLi" odds="' + u + '" codes="' + v + '" let_ball="-1" team_a="' + o + '" team_b="' + p + '" p_type="' + w + '" awayScore="' + awayScore + '" homeScore="' + homeScore + '" matchId="' + matchId + '" matchSpId="' + matchSpId + '" teamname="' + x + "|" + y + '" p_id="' + s + '" msi="' + C + '" handicap_s="' + handicap_s + '" handicap="' + z + '" ' + B + '>\t\t\t\t\t<div class="more-c1 betCont">' + x + '</div>\t\t\t\t\t<div class="more-style betWay"><span class="betWayName">' + t + '</span><span class="nowScore">' + A + '</span></div>\t\t\t\t\t<div class="more-fight">' + o + " vs " + p + '</div>\t\t\t\t\t<span class="more-close del_record"></span>\t\t\t\t\t<span class="more-bei oddBox">@<em class="betOdd">' + u + "</em></span>\t\t\t\t   </li>") : 
					g.push('<li class="touzhu-item betRecordLi" m_id="' + q + '" m_time="' + r + '" class="betRecordLi" odds="' + u + '" codes="' + v + '" let_ball="-1" team_a="' + o + '" team_b="' + p + '" p_type="' + w + '" awayScore="' + awayScore + '" homeScore="' + homeScore + '" matchId="' + matchId + '" matchSpId="' + matchSpId + '" teamname="' + x + "|" + y + '" p_id="' + s + '" msi="' + C + '" handicap_s="' + handicap_s + '" handicap="' + z + '" ' + B + '>\t\t\t\t\t\t<div class="more-c1 betCont">' + x + '</div>\t\t\t\t\t\t<div class="more-style betWay"><span class="betWayName">' + t + '</span><span class="nowScore">' + A + '</span></div>\t\t\t\t\t\t<div class="more-fight vsInfo">' + o + " vs " + p + '</div>\t\t\t\t\t\t<span class="more-close del_record"></span>\t\t\t\t\t\t<span class="more-bei bet-con oddBox">@<em class="betOdd">' + u + '</em></span>\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t<span class="caoz-je betMoney">输入金币</span>\t\t\t\t\t\t\t<div class="caoz-fh">预计返还<span class="bonus">0</span></div>\t\t\t\t\t\t</div>\t\t\t\t\t</li>')
				}
				if ("cg_bet" == Buy.fromtype) {
					var D = g.length;
					$(".touzhu-box3 .delete-count").html(D), $(".touzhu-box3 .touzhu-ulBox").html(g.join("")), CaculateCG.caculateCgFun(D), e(), f()
				}
				return g.join("")
			},
			h = function(a, b, c, e, f, g) {
				var h = {},
					i = "BB" == Global.sType ? "" : "[p_id='" + b + "']";
				if (1 == ShopCar.type) {
					if ($(".onBetSubmit").hasClass("betSuccess")) return;
					h = $(".touzhu-box1 .touzhu-one[m_id='" + a + "']" + i + "[codes='" + c + "'][msi='" + f + "']"), void 0 !== f && "ground" == f && (h = $(".touzhu-box1 .touzhu-one[m_id='" + a + "'][p_id='" + b + "'][codes='" + c + "']"))
				} else {
					if ($(".multiBetBtn").hasClass("betSuccess")) return;
					var j = 2 == ShopCar.type ? $(".touzhu-box2") : $(".touzhu-box3");
					h = j.find(".betRecordLi[m_id='" + a + "']" + i + "[codes='" + c + "'][msi='" + f + "']"), void 0 !== f && "ground" == f && (h = j.find(".betRecordLi[m_id='" + a + "'][p_id='" + b + "'][codes='" + c + "']"))
				}
				if (h.length) {
					var k = ("70102" == b || "70112" == b || "70104" == b || "70114" == b || "70130" == b || "70140" == b) && $(h).attr("handicap") != u(T.Util.getHandicapInfo(g));
					if ($(h).attr("odds") != e || k) {
						var l = "";
						if ("70102" == b || "70112" == b) {
							var m = T.Util.getHandicapInfo(g),
								n = T.Util.getOppositeHandicap(m);
							0 != parseFloat(g) && (parseFloat(g) > 0 ? m = "+" + m : n = "+" + n), l = "3" == c ? $(h).attr("team_a") + "" + u(m) : $(h).attr("team_b") + "" + u(n), $(h).attr("newOdds", NumberUtil.fmoney(e)), $(h).attr("newTeamname", l), $(h).attr("newHandicap", u(T.Util.getHandicapInfo(g)))
						} else "70104" == b || "70114" == b ? (l = "1" == c ? "高于" + u(T.Util.getHandicapInfo(g)) : "低于" + u(T.Util.getHandicapInfo(g)), $(h).attr("newOdds", NumberUtil.fmoney(e)), $(h).attr("newTeamname", l), $(h).attr("newHandicap", u(T.Util.getHandicapInfo(g)))) : "70130" == b || "70140" == b ? (l = "1" == c ? "大于" + T.Util.getHandicapInfo(g) : "小于" + T.Util.getHandicapInfo(g), $(h).attr("newOdds", NumberUtil.fmoney(e)), $(h).attr("newTeamname", l), $(h).attr("newHandicap", T.Util.getHandicapInfo(g))) : $(h).attr("newOdds", NumberUtil.fmoney(e));
						d(h)
					}
				}
			},
			i = function(a, b) {
				var c = "[handicap='" + b + "']";
				"70101" == a || "70111" == a ? c = "" : "70102" != a && "70112" != a && "70104" != a && "70114" != a || (b = u(T.Util.getHandicapInfo(b)), c = "[handicap='" + b + "']"), $("div.pay-list .pay-list-detail li[p_id='" + a + "']" + c).remove();
				var d = Buy.obj.find(".on");
				$(".selection-count,.delete-count").html(d.length), 0 == d.length && ShopCar.hide()
			},
			k = function(a, b, c) {
				if (!$(".onBetSubmit").hasClass("betSuccess")) {
					var d = {},
						e = {};
					1 == ShopCar.type ? d = $(".touzhu-box1 .touzhu-one[m_id='" + a + "'][p_id='" + b + "']") : (e = 2 == ShopCar.type ? $(".touzhu-box2") : $(".touzhu-box3"), d = e.find(".betRecordLi[m_id='" + a + "'][p_id='" + b + "']")), d.addClass("oddChanged"), $(d).find(".fan-tips").addClass("hide"), d.find(".pl-tips").removeClass("hide");
					var f = 3,
						g = 0,
						h = "";
					$.each(d, function(d, e) {
						if (f = $(e).attr("codes"), 
						$("ul.match_title[m_id='" + a + "'][p_id='" + b + "'] li[code='" + f + "']").addClass("on"),
						"70102" == b || "70112" == b) {
							var i = T.Util.getHandicapInfo(c.handicap),
								j = T.Util.getOppositeHandicap(i);
							0 != parseFloat(c.handicap) && (parseFloat(c.handicap) > 0 ? i = "+" + i : j = "+" + j), "3" == f ? (g = NumberUtil.fmoney(c.odds.split(",")[1]), h = $(e).attr("team_a") + "" + u(i)) : (g = NumberUtil.fmoney(c.odds.split(",")[0]), h = $(e).attr("team_b") + "" + u(j)), $(e).attr("newOdds", g), $(e).attr("newTeamname", h), $(e).attr("newHandicap", u(T.Util.getHandicapInfo(c.handicap)))
						} else "70104" == b || "70114" == b ? ($(e).attr("newHandicap", u(T.Util.getHandicapInfo(c.handicap))), "1" == f ? (g = NumberUtil.fmoney(c.odds.split(",")[1]), h = "高于" + u(T.Util.getHandicapInfo(c.handicap))) : (g = NumberUtil.fmoney(c.odds.split(",")[0]), h = "低于" + u(T.Util.getHandicapInfo(c.handicap))), $(e).attr("newOdds", g), $(e).attr("newTeamname", h), $(e).attr("newHandicap", u(T.Util.getHandicapInfo(c.handicap)))) : "70130" != b && "70140" != b || ($(e).attr("newHandicap", T.Util.getHandicapInfo(c.handicap)), "1" == f ? (g = NumberUtil.fmoney(c.odds.b), h = "大于" + T.Util.getHandicapInfo(c.handicap)) : (g = NumberUtil.fmoney(c.odds.s), h = "小于" + T.Util.getHandicapInfo(c.handicap)), $(e).attr("newOdds", g), $(e).attr("newTeamname", h), $(e).attr("newHandicap", T.Util.getHandicapInfo(c.handicap)))
					})
				}
			},
			l = function() {
				$(".multiBetBtn,.onBetSubmit").removeClass("oddChanged");
				var a = {};
				a = 1 == ShopCar.type ? $(".touzhu-box1 .touzhu-one").has(".oddBox.bei-change") : $(".pay-list-detail li").has(".oddBox.bei-change"), $.each($(a), function(a, b) {
					var c = $(b).attr("newOdds");
					$(b).attr("odds", c), $(b).find(".betOdd").html(c);
					var d = 0;
					console.log('c+1');
					1 == ShopCar.type ? (d = T.Util.isEmpty($(".touzhu-box1 .betMoney").attr("data-val")) ? 0 : $(".touzhu-box1 .betMoney").attr("data-val"), $(".touzhu-box1 .win-money").html(T.Util.parseNumber((c * d).toFixed(0)))) : (d = T.Util.isEmpty($(b).find(".betMoney").attr("data-val")) ? 0 : $(b).find(".betMoney").attr("data-val"), $(b).find(".bonus").html(T.Util.parseNumber(( (c+1) * d).toFixed(0)))), T.Util.isEmpty($(b).attr("newTeamname")) || ($(b).attr("handicap", $(b).attr("newHandicap")), $(b).find(".betCont").html($(b).attr("newTeamname")), $(b).attr("teamname", $(b).attr("newTeamname") + "|" + $(b).attr("team_a") + " vs " + $(b).attr("team_b")))
				}), MaxBetMoneyInfo.checkItemMaxInfoByOddChange($(a)), $(".oddBox").removeClass("bei-change"), $(".pl-tips").addClass("hide"), $(".onBetSubmit .fan-tips").removeClass("hide"), "cg_bet" == Buy.fromtype && Buy.cgOddsRefresh(), x()
			},
			m = function() {
				$("#submit,.onBetSubmit,.multiBetBtn").off().Touch(function(b) {
					if ($(b).hasClass("betSuccess")) return void ShopCar.hide();
					if ($(b).hasClass("oddChanged")) return void l();
					if ($(b).hasClass("noChoose")) return;
					
					$(b).hasClass("onBetSubmit") ? (
							$(".touzhu-box1 .touzhu-keyword").removeClass("keyword-up keyword-down").addClass("keyword-down"),
							setTimeout(function() {
								$(".touzhu-box1 .touzhu-keyword").removeClass("keyword-down").addClass("initHide")
							}, 300)
					) : $(b).hasClass("multiBetBtn") && ($(".keyboard").remove(), $(".touzhu-box2 .betMoney,.touzhu-box3 .betMoney").removeClass("caoz-input"), $(".betRecordLi").removeClass("list-select")), c = !1;
					var d = [],
						orderInfo = {
							'orderType' : Buy.fromtype == "cg_bet" ? 1 : 0,
							'items' : []
						},
						e = [],
						f = $(".pay-list-detail").find("li.betRecordLi"),
						g = $(".tList-con").find("li.betRecordLi"),
						h = $(".multiBetBtn .btn-tz"),
						i = $(".multiBetBtn");
					if (1 == ShopCar.type && (f = $(".touzhu-box1").find(".touzhu-one"), i = $(".onBetSubmit"), h = $(".onBetSubmit .btn-tz")), T.Util.isEmpty(T.Storage.get("access_token"))) /*return*/ $(i).removeClass("noChoose"), $(h).html("确认投注"), m(), void(c = !0); //T.Util.login(),
					
					if ($(i).addClass("noChoose"), $(h).html("正在下单..."), 0 == $(f).length) return tip("没有可投注项"), m(), void(c = !0);
					console.log('aaaa',f);
					for (var k = 0, n = 0, o = [], p = "", q = 0; j = $(f).length, q < j; q++) {
						var r = $(f[q]),
							v = r.attr("m_id"),
							w = r.attr("odds"),
							x = r.attr("codes"),
							matchSpId = r.attr("matchSpId"),
							matchId = r.attr("matchId"),
							awayScore = r.attr("awayScore"),
							homeScore = r.attr("homeScore"),
							z = 0;
						if ("cg_bet" != Buy.fromtype){
							z = r.find(".betMoney").attr("data-val"), 
							1 == ShopCar.type && (z = r.parent().parent().siblings(".touzhu-act").find(".betMoney").attr("data-val")), 
							k += parseInt(z),
							0 == e.length && e.push(v); //m_id
						}else {
							n = 0, o = [];
							for (var A = 0; A < $(g).length; A++) {
								var B = $(g[A]),
									C = "",
									D = {};
								z = B.find(".betMoney").attr("data-val");
								var E = 0;
								T.Util.isEmpty(B.attr("data-flag")) ? (E = z * parseInt(B.attr("data-mutil")), D.pass_num = parseInt(B.attr("data-mutil")), B.attr("data-index").length >= 2 ? D.s_type = 1e5 * parseInt(B.attr("data-index")) + parseInt(B.attr("data-all")) + "" : D.s_type = 1e3 * parseInt(B.attr("data-index")) + parseInt(B.attr("data-all")) + "") : (E = z * parseInt(B.attr("data-all")), D.pass_num = parseInt(B.attr("data-all")), (B.attr("data-index") - 1 + "").length >= 2 ? D.s_type = 1e5 * (parseInt(B.attr("data-index")) - 1) + parseInt(B.attr("data-all")) + "" : D.s_type = 1e3 * (parseInt(B.attr("data-index")) - 1) + parseInt(B.attr("data-all")) + ""), n += E, C = z + "", D.s_money = C, D.pre_prize = B.find(".bonus").html().split(",").join(""), o.push(D)
							}
							e.push(v)
						}
						z = z*100;
						if (!z || z < 10) return z ? z < 100 && tip("请至少下注1元") : tip("请输入您要投入的金币"), console.log('ffff'), $(i).removeClass("noChoose"), $(h).html("确认投注"), m(), void(c = !0);
						if (T.Util.isEmpty(z) || isNaN(z)) return !1;
						var F = r.attr("p_type"),
							G = r.attr("teamname");
						"cg_bet" == Buy.fromtype ? G += "|" + $(".tList-con .betRecordLi").find(".bonus").html() : 1 == ShopCar.type ? G += "|" + $(".touzhu-box1 .win-money").html() : G += "|" + $(r).find(".bonus").html();
						var H = r.attr("p_id"),
							I = r.attr("handicap"),
							handicap_s = r.attr("handicap_s"),
							J = "1";
							console.log(r,handicap_s);
						if ("ground_match" == Buy.fromtype || "inplay" == Buy.fromtype) if (J = "0", "ground_match" == Buy.fromtype) {
							var K = $("div.teamInfoWrap[m_id='" + v + "']");
							p = $(K).find(".gq1_one .gq_bf").html() + ":" + $(K).find(".gq2_one .gq_bf").html(), G += "|" + p
						} else p = $("#score").html(), G += "|" + $("#score").html();
						var L = {
							code_team_name: G,
							m_id: v,
							odds: w,
							codes: x,
							let_ball: I,
							buy_type: "1",
							p_id: H,
							p_type: F,
							buy_money: z,
							is_inplay: J
						};
						"0" == J && ("70130" != H && "70140" != H || (p = $("#betCoreBox").html()), L.score = p), "70102" != H && "70112" != H && "70104" != H && "70114" != H || T.Util.isEmpty(r.attr("isMaster")) || (L.isMaster = r.attr("isMaster")), d.push(L)
						
						
						var _tmp = {
							"matchGroupId": v,
							"matchId": matchId,
							"homeScore": parseInt(homeScore),
							"awayScore":  parseInt(awayScore),
							"matchSpId": matchSpId,
							"matchPhase": F == 20 ? 0 : 1,
							"oddsType": playIdToPlay[H],
							"fixtureOdds": {
								  },
							"buy": {
							},
							"content":JSON.stringify( L)
						  };
						if( _tmp.oddsType == 'EUROPE'){
							var _tkey = x == 3  ? 'w' : x == 1 ? 'd' : 'l';
						}else if( _tmp.oddsType == 'CS'){
							var _h = handicap_s.toLowerCase();
							if( _h == 'l'){
								var _tkey = _h+x.split(':')[1]+x.split(':')[0];
							}else if(_h == 'a'){
								var _tkey = 'aos';
							}else{
								var _tkey = _h+x.split(':')[0]+x.split(':')[1];
							}
						}else if( _tmp.oddsType == 'RNG'){
							var _tkey = String(handicap_s);
						}else if( _tmp.oddsType == 'HAF'){
							var _tkey = x.replace(/3/g,"w");
							_tkey = _tkey.replace(/1/g,"d");
							_tkey = _tkey.replace(/0/g,"l");
						}else if( _tmp.oddsType == 'OE'){
							var _tkey = x == 1  ? 's' : 'd';
						}else if( _tmp.oddsType === 'ASIAN' ){
							var _tkey = x == 3  ? 'w' : 'l';
							console.log(I);
							_tmp.fixtureOdds['h'] = String(handicap_s);
							_tmp.buy[_tkey] = z;
						}else{
							var _tkey = x == 1  ? 'b' : 's';
							_tmp.fixtureOdds['h'] = String(handicap_s);
						}
						_tmp.fixtureOdds[_tkey] = parseFloat(w);
						_tmp.buy[_tkey] = parseInt(z);
						
						orderInfo.items.push(_tmp);
					}
					
					if(ShopCar.type==3){
						orderInfo.TotalMoney = parseInt(z);
					}
					
					hSocket.order(orderInfo);
					
					return;
//					if (T.Util.isEmpty(a) && (a = T.Storage.get("access_token") + 1e5 * Math.random()), "cg_bet" == Buy.fromtype && (k = n), k > parseInt(T.Storage.get("userinfo").coin)) {
//						var M = "很抱歉，你的账户余额不足<br>请先充值",
//							N = T.Util.getRootPath() + "/" + Global.webRoot + "/shangcheng/shoppingMall.html";
//						ShopCar.hide();
//						var O = "去充值";
//						return Global.iosAudit && (M = "剩余金币不足，<br>请先领取金币！", O = "去领取", N = "#page=mission_index.html?pageFrom=" + pageFrom), confirm(M, function() {
//							T.isNative && Global.isAndroid && lib.nativeApi.compareVersion("2.4.1") || Global.isiOS && lib.nativeApi.compareVersion("2.3.1") ? Global.iosAudit ? T.Util.openWindow(T.Util.getRootPath() + "/" + Global.webRoot + "/game/index.html#page=mission_index.html&from=APP&pageFrom=" + pageFrom, "pop") : T.Util.openWindow(T.Util.getRootPath() + "/" + Global.webRoot + "/shangcheng/shoppingMall.html?type=JB&from=APP&pageFrom=" + pageFrom, "pop") : "playMin.html" != pageFrom && Global.isAndroid && lib.nativeApi.compareVersion("2.3.9") || Global.isiOS && lib.nativeApi.compareVersion("2.2.9") ? T.Util.openWindow(T.Util.getRootPath() + "/" + Global.webRoot + "/shangcheng/shoppingMall.html?type=JB&from=APP&pageFrom=" + pageFrom) : "playMin.html" == pageFrom ? tip("请到道具商城获取金币！") : window.location.href = N
//						}, "取消", O), $(i).removeClass("noChoose"), $(h).html("确认投注"), m(), void(c = !0)
//					}
					var P = {
						token: T.Storage.get("access_token"),
						req_token: a,
						data: {
							s_type: "1001",
							lot_id: "701",
							total_money: k,
							item: d
						}
					};
					"cg_bet" == Buy.fromtype && (P.data.p_id = "70199", d.length > 1 && (P.data.s_types = o, delete P.data.s_type)), "BB" == Global.sType && (P.data.sportType = "BB"), T.Util.xmlHttpRequest({
						reqData: P,
						timeout: 5e3,
						errorType: 1,
						reqUrl : 'http://localhost/tp5/api/p',
						//reqUrl: "http://112.121.171.234:8090/tp5/api/?s=activity/football/buy",
//						reqUrl: "/web/services/order/buy.json",
						callback: function(b) {
							console.log(b), $("li.keyboard").remove();
							var d;
							d = {'coin':100000};//T.Storage.get("userinfo"), 
							"cg_bet" == Buy.fromtype ? d.coin = parseInt(d.coin) - parseInt(n) : d.coin = parseInt(d.coin) - parseInt(k), 1 == ShopCar.type && T.Storage.set("oneBetMoney", k), T.Storage.set("userinfo", d), T.User.refreshUMoney(d.coin), $(".userMoney").html(T.Util.parseNumber(d.coin)), a = T.Storage.get("access_token") + 1e5 * Math.random(), m(), c = !0, Buy.obj.find(".on").removeClass("on"), "undefined" == typeof BetInfo || "play.html" != T.Util.getParaHash("page") && "playMin.html" != pageFrom || BetInfo.getBetCount();
							var f = "";
//							if ("BB" == Global.sType && (f = "&sport_type=1"), T.Util.xmlHttpRequest({
//								type: "get",
//								errorType: "1",
//								reqUrl: "/app-web/api/match/add_user_match?access_token=" + T.Storage.get("access_token") + "&match_id=" + e.join(",") + f,
//								callback: function(a, b, c) {
//									"BB" == Global.sType && window.location.href.indexOf("basketPlay.html") > -1 && $("#bask").removeClass().addClass("addbask")
//								},
//								errorCallback: function(a, b) {}
//							}), T.Util.isEmpty(T.Util.getPara("m_id")) || T.Util.xmlHttpRequest({
//								type: "get",
//								reqUrl: "/web/services/order/matchOrder/count?token=" + T.Storage.get("access_token") + "&matchId=" + T.Util.getPara("m_id"),
//								callback: function(a) {
//									a.res_data && a.res_data.value && ($("#count,.bet_count").html(a.res_data.value), $(".record-count").css("display", "block"))
//								},
//								errorCallback: function() {}
//							}), $(i).removeClass("noChoose"), $(h).html("确认投注"), T.isNative) {
//								var g = [],
//									j = [],
//									l = [],
//									o = [],
//									q = [],
//									r = [],
//									s = [],
//									t = [];
//								T.Util.isEmpty(T.Storage.get("successData")) || T.Storage.remove("successData"), T.Storage.set("sportType", "BB" == Global.sType ? 1 : 0);
//								var u = $(".touzhu-box2 .pay-list-detail .betRecordLi"),
//									v = [];
//								1 == ShopCar.type ? (u = $(".touzhu-box1"), s.push($(".touzhu-box1 .betMoney").html(), $(".touzhu-box1 .win-money").html())) : 2 == ShopCar.type ? s.push($(".touzhu-box2 .bt-count").html(), $(".touzhu-box2 .win-money").html()) : 3 == ShopCar.type && (s.push($(".touzhu-box3 .bt-count").html(), $(".touzhu-box3 .win-money").html()), u = $(".touzhu-box3 .pay-list-detail .betRecordLi"), v = $(".touzhu-box3 .tList-con li.betRecordLi")), u.each(function(a, b) {
//									if (g.push([$(b).find(".betCont").html(), $(b).find(".betWayName").html()]), j.push($(b).find(".betOdd").html()), l.push([$(b).find(".betMoney").html(), 1 == ShopCar.type ? $(b).find(".win-money").html() : $(b).find(".bonus").html()]), q.push(new Date(parseInt(1 == ShopCar.type ? $(b).find(".touzhu-one").attr("m_time") : $(b).attr("m_time"))).format("hh:mm")), r.push((1 == ShopCar.type ? $(b).find(".touzhu-one") : $(b)).attr("team_a") + " vs " + (1 == ShopCar.type ? $(b).find(".touzhu-one") : $(b)).attr("team_b")), "ground_match" == Buy.fromtype) {
//										var c = 1 == ShopCar.type ? $(b).find(".touzhu-one").attr("m_id") : $(b).attr("m_id"),
//											d = $("div.teamInfoWrap[m_id='" + c + "']");
//										p = $(d).find(".gq1_one .gq_bf").html() + ":" + $(d).find(".gq2_one .gq_bf").html(), o.push(["滚球", "(当前比分 " + p + ")"])
//									} else "inplay" == Buy.fromtype ? (p = $("#score").html(), o.push(["滚球", "(当前比分 " + p + ")"])) : o.push(["赛前", " "])
//								}), 3 == ShopCar.type && v.length && v.each(function(a, b) {
//									t.push([$(b).find(".chuan-style").html(), $(b).find(".bonus").html(), parseInt($(b).find(".betMoney").attr("data-val")) * parseInt($(b).find(".bei-number").html()), $(b).find(".bei-number").html()])
//								});
//								var w = {
//									fromtype: Buy.fromtype,
//									betCount: g,
//									total_count: s,
//									team_name: r,
//									bet_odd: j,
//									data_val: l,
//									isInplay: o,
//									matchTime: q
//								};
//								"cg_bet" == Buy.fromtype && (delete w.data_val, w.cgInformationList = t), console.log(t), "undefined" != typeof pageFrom && "playMin.html" == pageFrom && (w.matchTime = T.Storage.get("playMinMatchTime")), T.Storage.set("successData", w), $("p[codes].on,li[codes].on").removeClass("on"), ShopCar.hide(), api.openAnyView({
//									url: T.Util.getRootPath() + "/" + Global.webRoot + "/game/buyScuessMin.html",
//									fullScreen: "0"
//								}, function() {})
//							} else {
								$(".delete-all").addClass("hide"), $(".litstxt").removeClass("initHide").html("已下注"), $(".dan-close,.del_record").hide(), $(i).addClass("betSuccess"), $(h).html("确定"), 1 == ShopCar.type ? $(".touzhu-box1 .betMoney").removeClass("act-after").html("已投注 " + $(".touzhu-box1 .betMoney").html()) : 3 == ShopCar.type && ($(".touzhu-box3 .tList-con .betMoney").removeClass("act-after").html("已投注 " + $(".touzhu-box3 .tList-con .betMoney").html()), $(".touzhu-box3 .tList-con .betMoney").off(), $.each($(".tList-style li"), function(a, b) {
									$(b).hasClass("chuan-last") || $(b).off()
								}));
								var x = $(".pay-list-detail");
								x.find(".del_record").hide(), x.find(".betMoney").each(function(a, b) {
									var b = $(b),
										c = b.attr("data-val");
									b.html("投注 " + c).removeClass("caoz-input").addClass("betSuccessInput")
								}), tip("下注成功", "ok")
//							}
						},
						errorCallback: function(b) {
							if ($(i).removeClass("noChoose"), $(h).html("确认投注"), m(), c = !0, a = T.Storage.get("access_token") + 1e5 * Math.random(), "1001" == b.msg_code) $(b.res_data).length ? ($.each($(b.res_data), function(a, b) {
								if (b.n_playing && "1" == b.n_playing) s(b.m_id, b.p_id, b);
								else {
									var c = b.odds.split(","),
										d = b.p_id,
										e = $("ul[m_id='" + b.m_id + "'][p_id='" + d + "']");
									if ("70101" == d || "70111" == d)"1" == b.rFlag ? ($(e).find("li[codes='3'] cite").html(NumberUtil.fmoney(c[0])), $(e).find("li[codes='1'] cite").html(NumberUtil.fmoney(c[1])), $(e).find("li[codes='0'] cite").html(NumberUtil.fmoney(c[2])), t(b.m_id, d, b)) : ($(".touzhu-one[m_id='" + b.m_id + "'][p_id='" + d + "']").remove(), $(".pay-list-detail").find("li[m_id='" + b.m_id + "'][p_id='" + d + "']").remove(), $(e).parent().remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), "cg_bet" == Buy.fromtype && Buy.cgDeleteRefresh(!0), tip("盘口已经移除!"));
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
							}), ShopCar && ShopCar.checkBetListAfterOrder()) : tip("有盘口已经不存在");
							else if ("1011" == b.msg_code || "1002" == b.msg_code) $(b.res_data).length && ($.each($(b.res_data), function(a, b) {
								$(".pay-list-detail").find("li[m_id='" + b.m_id + "']").remove(), $("ul.match_title[m_id='" + b.m_id + "']").remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), "cg_bet" == Buy.fromtype && Buy.cgDeleteRefresh(!0)
							}), tip("赛程不可投注"), "cg_bet" == Buy.fromtype ? 0 == $(".touzhu-ulBox li.betRecordLi").length && ShopCar && ShopCar.hide() : 0 == $("li.betRecordLi").length && ShopCar && ShopCar.hide());
							else if ("1027" == b.msg_code && $(b.res_data).length) {
								var d = "";
								$.each($(b.res_data), function(a, b) {
									if (b.score && -1 != b.score.indexOf(":") && 2 == b.score.split(":").length) if (d = b.score.split(":"), "70130" == b.p_id || "70140" == b.p_id) $("#betCoreBox").html(b.score), $(".com[p_id='" + b.p_id + "'][m_id='" + b.m_id + "'] .curCornerCount").html(parseInt(d[0]) + parseInt(d[1]));
									else if ("ground_match" == Buy.fromtype || "inplay" == Buy.fromtype) if ("ground_match" == Buy.fromtype) {
										var c = $("div.teamInfoWrap[m_id='" + v + "']");
										$(c).find(".gq1_one .gq_bf").html(d[0]), $(c).find(".gq2_one .gq_bf").html(d[1])
									} else $("#score,.nowScore").html(b.score)
								})
							} else if ("1040" == b.msg_code) $(b.res_data).length && ($.each($(b.res_data), function(a, b) {
								y(b)
							}), 0 == $("li.betRecordLi").length && ShopCar && ShopCar.hide());
							else if ("1041" == b.msg_code) $(b.res_data).length && ($.each($(b.res_data), function(a, b) {
								var c = b.m_id;
								$(".match_title[m_id='" + c + "'] .codes").attr("club-locked", "1").removeClass("on").addClass("locked"), $(".match_title[m_id='" + c + "'] .codes .tMultiple").hide(), $(".betRecordLi[m_id='" + c + "']").remove()
							}), 0 == $("li.betRecordLi").length && ShopCar && ShopCar.hide());
							else {
								if ("BB" == Global.sType && window.location.pathname.indexOf("basketPlay.html") > 1 && "盘口已封盘" == b.msg && "1101" == b.msg_code) return ShopCar && ShopCar.hide(), $("#betslipBar").addClass("initHide"), $(".pay-list-detail").empty(), $("#submit").show(), $("#successsure").hide(), $(".match_title li").addClass("locked"), $(".codes").removeClass("on"), void tip("盘口已封盘");
								"1" != Global.isPK && "1" != Global.isClub && tip(b.msg)
							}
						},
						interfaceError: function() {
							$(i).removeClass("noChoose"), $(h).html("确认投注"), Buy.addOddsSubmitListener(), Buy.submitCommitSuccess = !0
						}
					})
				})
			},
			n = function(a) {
				$("li.keyboard").removeAttr("id").addClass("animate-down");
				var b = "cg_bet" == Buy.fromtype ? "" : '<div class="keyword-all"><span class="highest-con">最高投金<br /><em class="highest-money">0</em></span></div>',
					c = '<li class="list-keyword keyboard" id="keyboard">\t\t\t\t<div class="keyword-column1">\t\t\t\t\t<div class="keyword-jian number" data-val="1">1</div><div class="keyword-jian number" data-val="2">2</div><div class="keyword-jian number" data-val="3">3</div>\t\t\t\t\t<div class="keyword-jian number" data-val="4">4</div><div class="keyword-jian number" data-val="5">5</div><div class="keyword-jian number" data-val="6">6</div>\t\t\t\t\t<div class="keyword-jian number" data-val="7">7</div><div class="keyword-jian number" data-val="8">8</div><div class="keyword-jian number" data-val="9">9</div>\t\t\t\t\t<div class="keyword-jian number" data-val="0">0</div>\t\t\t\t</div>\t\t\t\t<div class="keyword-column2">\t\t\t\t\t<div class="cloumn2-left">\t\t\t\t\t\t<div class="keyword-jian number tmultiple" data-val="1000">千</div><div class="keyword-jian number tmultiple" data-val="10000">万</div><div class="keyword-jian number tmultiple" data-val="100000">十万</div><div class="keyword-jian number tmultiple" data-val="1000000">百万</div>\t\t\t\t\t</div>\t\t\t\t\t<div class="cloumn2-right">\t\t\t\t\t\t' + b + '\t\t\t\t\t\t<div class="keyword-qc liClear">清除</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</li>';
				if ($(a).after(c), $(a).next("li").removeClass("animate-down").addClass("animate-up"), setTimeout(function() {
					$("li.keyboard").not($(a).next("li")).remove()
				}, 300), "cg_bet" == Buy.fromtype) $(".touzhu-box3 .pay-list").scrollTop(999), 1 == $(".touzhu-box3 li.keyboard").length && setTimeout(function() {
					$(".touzhu-box3 .pay-list").scrollTop(999)
				}, 300), o();
				else {
					if ($(".touzhu-box2 .pay-list-detail").height() + 91 > $(".touzhu-box2 .pay-list").height()) {
						var d = $(".touzhu-box2.buy-list").offset().top,
							e = $("#keyboard").offset().top,
							f = e - d - 32;
						if (f < 83) $(".touzhu-box2 .pay-list").scrollTop($(".touzhu-box2 .pay-list").scrollTop() - $(".touzhu-box2 .pay-list").scrollTop() % 83);
						else {
							var g = $(".touzhu-box2 .pay-list").scrollTop() % 83;
							if (0 == g && f > 83) $(".touzhu-box2 .pay-list").scrollTop($(".touzhu-box2 .pay-list").scrollTop() + 83), f + 91 - 83 > $(".touzhu-box2 .pay-list").height() ? $(".touzhu-box2 .pay-list").scrollTop($(".touzhu-box2 .pay-list").scrollTop() + (f + 91 - 83 - $(".pay-list").height())) : (e = $("#keyboard").offset().top, (f = e - d - 32) + 91 > $(".touzhu-box2 .pay-list").height() && $(".touzhu-box2 .pay-list").scrollTop($(".touzhu-box2 .pay-list").scrollTop() + 83));
							else if (0 != g) {
								var h = 83 - $(".touzhu-box2 .pay-list").scrollTop() % 83;
								f > 83 && f < 166 ? $(".touzhu-box2 .pay-list").scrollTop($(".touzhu-box2 .pay-list").scrollTop() + h) : f > 166 && ($(".touzhu-box2 .pay-list").scrollTop($(".touzhu-box2 .pay-list").scrollTop() + 83 + h), f + 91 - 83 - h > $(".touzhu-box2 .pay-list").height() && $(".touzhu-box2 .pay-list").scrollTop($(".touzhu-box2 .pay-list").scrollTop() + (f + 93 - 83 - h - $(".touzhu-box2 .pay-list").height())))
							}
						}
					}
					p()
				}
			},
			o = function() {
				console.log('0');
				$(".keyboard .number").off().Touch(function(a) {
					console.log('00');
					var b = $(".touzhu-box3 .list-select .betMoney");
					if ("输入金币" == $(b).html() && 0 == parseInt($(a).attr("data-val"))) return !1;
					var c = 0;
					c = T.Util.isEmpty($(b).attr("data-val")) ? parseInt($(a).attr("data-val")) : $(a).hasClass("tmultiple") ? 0 == $(b).attr("data-val") ? parseInt(1 * parseInt($(a).attr("data-val"))) : parseInt($(b).attr("data-val") * parseInt($(a).attr("data-val"))) : parseInt($(b).attr("data-val") + "" + $(a).attr("data-val"));
					var d = T.Util.parseNumber(c);
					$(b).html(d).attr("data-val", c), CaculateCG.caculateBetMoney($(".betRecordLi.list-select").attr("data-flag"), parseInt($(".betRecordLi.list-select").attr("data-index")), $(".touzhu-box3 .pay-list-detail li.betRecordLi"), d, null), x()
				}), $(".keyboard .liClear").off().Touch(function() {
					var a = $(".betRecordLi.list-select .betMoney");
					$(a).html().length && ($(a).html("").removeAttr("data-val"), $(".betRecordLi.list-select").find(".bonus").html("0"), x())
				}), $(".keyboard .allIn").off().Touch(function() {
					var a = $(".betRecordLi.list-select .betMoney");
					if (T.Util.isEmpty(T.Storage.get("userinfo"))) return void tip("请您先登录哦~");
					var b = parseInt($(".ye-count").attr("data-val"));
					$(a).html(T.Util.parseNumber(b)).attr("data-val", b);
					var c = parseFloat($(".betRecordLi.list-select").find(".betOdd").html());
					$(".betRecordLi.list-select").find(".bonus").html(T.Util.parseNumber((c * newNum).toFixed(0))), x(), $(a).removeClass("caoz-input"), $(".betRecordLi").removeClass("list-select"), $(".keyboard").remove()
				})
			},
			p = function() {
				console.log('p');
				var playid,playname,add;
				$(".keyboard .number").off().Touch(function(a) {
					console.log('pp');
					var b = $(".betRecordLi.list-select .betMoney");
					if ("输入金币" == $(b).html() && 0 == parseInt($(a).attr("data-val"))) return !1;
					var c = 0;
					c = T.Util.isEmpty($(b).attr("data-val")) ? parseInt($(a).attr("data-val")) : $(a).hasClass("tmultiple") ? 0 == $(b).attr("data-val") ? parseInt(1 * parseInt($(a).attr("data-val"))) : parseInt($(b).attr("data-val") * parseInt($(a).attr("data-val"))) : parseInt($(b).attr("data-val") + "" + $(a).attr("data-val"));
					var d = ShopCar.checkItemMaxBetInfo($(".betRecordLi.list-select"), 2); - 1 != d && c > d && (c = 0, $("#keyboard .highest-money").html(T.Util.parseNumber(d)), $("#keyboard .keyword-all").addClass("highest"));
					var e = T.Util.parseNumber(c);
					$(b).html(e).attr("data-val", c);
					var f = parseFloat($(".betRecordLi.list-select").find(".betOdd").html());
					
					playid = $(".betRecordLi.list-select").attr('p_id');
					playname = playIdToPlay[playid];
					add=0;
					if( playname == "ASIAN" || playname == "BIGSMALL" | playname == "OE") add=1;
					
					f += add;
					
					$(".betRecordLi.list-select").find(".bonus").html(T.Util.parseNumber((f * c).toFixed(0))), x()
				}), $(".keyboard .liClear").off().Touch(function() {
					var a = $(".betRecordLi.list-select .betMoney");
					$(a).html().length && ($(a).html("").removeAttr("data-val"), $(".betRecordLi.list-select").find(".bonus").html("0"), x())
				}), $(".keyboard .keyword-all").off().Touch(function() {
					var a = $(".betRecordLi.list-select .betMoney");
					if (T.Util.isEmpty(T.Storage.get("userinfo"))) return void tip("请您先登录哦~");
					var b = parseInt($(".ye-count").attr("data-val")),
						c = ShopCar.checkItemMaxBetInfo($(".betRecordLi.list-select"), 2); - 1 != c && (b = c, $("#keyboard .highest-money").html(T.Util.parseNumber(c)), $("#keyboard .keyword-all").addClass("highest")), $(a).html(T.Util.parseNumber(b)).attr("data-val", b);
					var d = parseFloat($(".betRecordLi.list-select").find(".betOdd").html());
					$(".betRecordLi.list-select").find(".bonus").html(T.Util.parseNumber((d * b).toFixed(0))), x()
				})
			},
			q = function(a, b, c, d) {
				var e = [],
					f = "10", //10半场,20全场
					g = "BB" == Global.sType ? BBplaytypeObj[a].name : playtypeObj[a].name,
					h = "BB" == Global.sType ? BBplaytypeObj[a].desc : playtypeObj[a].desc,
					i = T.Util.notNullValue(b.ht_name, "--").substring(0, 4),
					j = T.Util.notNullValue(b.gt_name, "--").substring(0, 4),
					k = b.oddArr,
					l = b.handicap,
					m = b.m_id,
					n = b.m_time,
					o = c[0] || c[1] ? "locked" : "",
					p = '<span class="icon banIcon"></span>',
					q = "",
					r = "",
					s = "",
					t = !1,
					v = "",
					w = "";
				if (!T.Util.isEmpty(d)) for (var x in d) if ("1" != x || T.Util.isEmpty(d[x])) {
					if ("0" == x && !T.Util.isEmpty(d[x])) if ("ALL" == d[x]) s = '<span class="add-award-icon" award-type="pId" m_id=' + m + "></span>", r = s, v = r, w = s;
					else for (var y = d[x].split(","), z = 0; z < y.length; z++) y[z] == a && (s = '<span class="add-award-icon" award-type="pId" m_id=' + m + "></span>", "70101" == y[z] || "70111" == y[z] ? (r = s, v = r, w = s) : w = s)
				} else if ("ALL" == d[x]) r = '<span class="back-award-icon" award-type="All" m_id=' + m + "></span>", s = r, v = r, w = s, t = !0;
				else for (var y = d[x].split(","), z = 0; z < y.length; z++) y[z] == a && (r = '<span class="back-award-icon" award-type="pId" m_id=' + m + "></span>", s = r, v = r, w = s);
//				else console.log('hahaha',a,b,c,d);
				switch (a) {
				case "70101":
				case "70111": //赛果
					"70101" == a && (f = "20"), r = "70111" == a && t ? "" : v, p = '<span class="icon ' + playtypeObj[a].iconCls + '"></span>', b.oddsList && b.oddsList.length && "1" == b.oddsList[0].c_bet && (q = "club-locked='1'", o = "locked"), e.push('<div class="com" p_id="' + a + '" p_type="' + f + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '"  locked_list="">'), e.push('<div class="betDesc">' + p + '<span class="wfName">' + g + "</span><span> • " + h + "</span>" + r + "</div>"), e.push('<ul class="match_title" p_id="' + a + '" p_type="' + f + '" matchSpId="' + (b.oddsList ? b.oddsList[0].matchSpId : "") + '" ht_score="' + b.ht_score + '" gt_score="' + b.gt_score + '" matchId="' + b.matchId + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" msi="' + (b.oddsList ? b.oddsList[0].msi : "") + '"><li codes="3" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + i + '</span><cite class="tMultiple">' + NumberUtil.fmoney(k[0]) + '</cite></li><li codes="1" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">平局</span><cite class="tMultiple">' + NumberUtil.fmoney(k[1]) + '</cite></li><li codes="0" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + j + '</span><cite class="tMultiple">' + NumberUtil.fmoney(k[2]) + "</cite></li></ul>"), e.push("</div>");
					break;
				case "70102":
				case "70112"://让球
					"70102" == a && $("#inplay").length && (g = "当前让球"), "70102" == a && (f = "20"), s = "70112" == a && t ? "" : w, p = '<span class="icon ' + playtypeObj[a].iconCls + '"></span>', e.push('<div class="com" p_id="' + a + '" p_type="' + f + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" locked_list="">'), e.push('<div class="betDesc">' + p + '<span class="wfName">' + g + "</span><span> • " + h + "</span>" + s + "</div>");
					var A = "",
						B = "",
						k = "",
						C = "",
						D = b.oddsList && b.oddsList.length > 1 ? "" : "hide";
					$.each(b.oddsList, function(d, g) {
						if (q = "", "1" == g.c_bet && (q = "club-locked='1'", o = "locked"), "1" != g.bet_status && "1" != c[0] || "0" != g.isMaster) {
							if (o = c[0] || "1" == g.bet_status ? "locked" : "", "BB" == Global.sType) {
								var h = [];
								h.push(g.win || g.big), h.push(g.lost || g.small), k = h
							} else k = g.odds.split(",");
							C = "1" == g.isMaster ? "<span class='handicap_type " + D + "'>(主)</span>" : "<span class='handicap_type " + D + "'></span>", l = g.handicap, A = T.Util.getHandicapInfo(g.handicap), B = T.Util.getOppositeHandicap(A), 0 != parseFloat(T.Util.getLetBall(g.handicap)) && (parseFloat(T.Util.getLetBall(g.handicap)) > 0 ? A = "+" + A : B = "+" + B), e.push('<ul class="match_title" p_id="' + a + '" p_type="' + f + '" matchSpId="' + g.matchSpId + '" ht_score="' + b.ht_score + '" gt_score="' + b.gt_score + '" matchId="' + b.matchId + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" handicap_s="' + l + '" handicap="' + u(T.Util.getHandicapInfo(l)) + '" isMaster="' + g.isMaster + '" msi="' + g.msi + '"><li codes="3" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + i + "<em>" + u(A) + "</em>" + C + '</span><cite class="tMultiple">' + NumberUtil.fmoney(k[0]) + '</cite></li><li codes="0" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + j + "<em>" + u(B) + "</em>" + C + '</span><cite class="tMultiple">' + NumberUtil.fmoney(k[1]) + "</cite></li></ul>")
						}
					}), e.push("</div>");
					break;
				case "70104":
				case "70114"://大小
					"70104" == a && (f = "20"), s = "70114" == a && t ? "" : w, p = '<span class="icon ' + playtypeObj[a].iconCls + '"></span>', e.push('<div class="com" p_id="' + a + '" p_type="' + f + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" locked_list="">'), e.push('<div class="betDesc">' + p + '<span class="wfName">' + g + "</span><span> • " + h + "</span>" + s + "</div>");
					var A = "",
						B = "",
						k = "",
						C = "",
						D = b.oddsList && b.oddsList.length > 1 ? "" : "hide";
					$.each(b.oddsList, function(d, g) {
						if (q = "", "1" == g.c_bet && (q = "club-locked='1'", o = "locked"), "1" != g.bet_status && "1" != c[0] || "0" != g.isMaster) {
							if (o = c[0] || "1" == g.bet_status ? "locked" : "", "BB" == Global.sType) {
								var h = [];
								h.push(g.win || g.big), h.push(g.lost || g.small), k = h
							} else k = g.odds.split(",");
							C = "1" == g.isMaster ? "<span class='handicap_type " + D + "'>(主)</span>" : "<span class='handicap_type " + D + "'></span>", e.push('<ul class="match_title" p_id="' + a + '" p_type="' + f + '" matchSpId="' + g.matchSpId + '" ht_score="' + b.ht_score + '" gt_score="' + b.gt_score + '" matchId="' + b.matchId + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" handicap_s="' + g.handicap + '" handicap="' + u(T.Util.getHandicapInfo(g.handicap)) + '" isMaster="' + g.isMaster + '" msi="' + g.msi + '"><li codes="1" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">高于<em>' + u(g.handicap) + "</em>" + C + '</span><cite class="tMultiple">' + NumberUtil.fmoney(k[0]) + '</cite></li><li codes="0" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">低于<em>' + u(g.handicap) + "</em>" + C + '</span><cite class="tMultiple">' + NumberUtil.fmoney(k[1]) + "</cite></li></ul>")
						}
					}), e.push("</div>");
					break;
				default:
					g = "木有获取到玩法"
				}
				return e.join("")
			},
			r = function(a, b, c, d, e) {
				var f = [],
					g = "10",
					h = BBplaytypeObj[a].name,
					i = BBplaytypeObj[a].desc,
					j = T.Util.notNullValue(b.ht_name, "--").substring(0, 4),
					k = T.Util.notNullValue(b.gt_name, "--").substring(0, 4),
					l = (b.oddArr, b.handicap),
					m = b.m_id,
					n = b.m_time,
					o = c[0] || c[1] ? "locked" : "",
					p = '<span class="icon banIcon"></span>',
					q = "",
					r = "",
					s = "",
					t = !1,
					v = "";
				if (!T.Util.isEmpty(e)) for (var w in e) if ("1" != w || T.Util.isEmpty(e[w])) {
					if ("0" == w && !T.Util.isEmpty(e[w])) if ("ALL" == e[w]) s = '<span class="add-award-icon" award-type="pId" m_id=' + m + "></span>", r = s, r, v = s;
					else for (var x = e[w].split(","), y = 0; y < x.length; y++) x[y] == a && (s = '<span class="add-award-icon" award-type="pId" m_id=' + m + "></span>", v = s)
				} else if ("ALL" == e[w]) r = '<span class="back-award-icon" award-type="All" m_id=' + m + "></span>", s = r, r, v = s, t = !0;
				else for (var x = e[w].split(","), y = 0; y < x.length; y++) x[y] == a && (r = '<span class="back-award-icon" award-type="pId" m_id=' + m + "></span>", s = r, r, v = s);
				switch (a) {
				case "70133":
				case "70143":
				case "3133":
				case "3233":
				case "3333":
				case "3433":
					"70133" == a ? g = "20" : "3133" != a && "3233" != a && "3333" != a && "3433" != a || (g = BBplaytypeObj[a].pType), s = "70143" == a && t ? "" : v, p = '<span class="icon ' + BBplaytypeObj[a].iconCls + '"></span>', "1" == d[0].bet_status && (q = "club-locked='1'", o = "locked"), f.push('<div class="com" p_id="' + a + '" p_type="' + g + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" locked_list="">'), f.push('<div class="betDesc">' + p + '<span class="wfName">' + h + "</span><span> • " + i + "</span>" + s + "</div>"), f.push('<ul class="match_title" p_id="' + a + '" p_type="' + g + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" msi="' + (d[0].msi ? d[0].msi : "") + '"><li codes="1" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">单</span><cite class="tMultiple">' + new Number(d[0].dou).toFixed(2) + '</cite></li><li codes="2" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">双</span><cite class="tMultiple">' + new Number(d[0].sin).toFixed(2) + "</cite></li></ul>"), f.push("</div>");
					break;
				case "70102":
				case "70112":
				case "3102":
				case "3202":
				case "3302":
				case "3402":
					"70102" == a ? g = "20" : "3102" != a && "3202" != a && "3302" != a && "3402" != a || (g = BBplaytypeObj[a].pType), s = "70112" == a && t ? "" : v, p = '<span class="icon ' + BBplaytypeObj[a].iconCls + '"></span>', f.push('<div class="com" p_id="' + a + '" p_type="' + g + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" locked_list="">'), f.push('<div class="betDesc">' + p + '<span class="wfName">' + h + "</span><span> • " + i + "</span>" + s + "</div>");
					var z = "",
						A = "",
						B = "",
						C = d && d.length > 1 ? "" : "hide";
					$.each(d, function(d, e) {
						q = "", "1" == e.bet_status && (q = "club-locked='1'", o = "locked"), ("1" != e.bet_status && "1" != c[0] || "0" != e.isMaster) && (o = c[0] || "1" == e.bet_status ? "locked" : "", B = "1" == e.isMaster ? "<span class='handicap_type " + C + "'>(主)</span>" : "<span class='handicap_type " + C + "'></span>", l = e.handicap, z = T.Util.getHandicapInfo(e.handicap), A = T.Util.getOppositeHandicap(z), 0 != parseFloat(T.Util.getLetBall(e.handicap)) && (parseFloat(T.Util.getLetBall(e.handicap)) > 0 ? z = "+" + z : A = "+" + A), f.push('<ul class="match_title" p_id="' + a + '" p_type="' + g + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" handicap_s="' + l + '" handicap="' + u(T.Util.getHandicapInfo(l)) + '" isMaster="' + e.isMaster + '" msi="' + e.msi + '"><li codes="3" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + j + "<em>" + u(z) + "</em>" + B + '</span><cite class="tMultiple">' + new Number(e.win).toFixed(2) + '</cite></li><li codes="0" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + k + "<em>" + u(A) + "</em>" + B + '</span><cite class="tMultiple">' + new Number(e.lost).toFixed(2) + "</cite></li></ul>"))
					}), f.push("</div>");
					break;
				case "70104":
				case "70114":
				case "3104":
				case "3204":
				case "3304":
				case "3404":
					"70104" == a ? g = "20" : "3104" != a && "3204" != a && "3304" != a && "3404" != a || (g = BBplaytypeObj[a].pType), s = "70114" == a && t ? "" : v, p = '<span class="icon ' + BBplaytypeObj[a].iconCls + '"></span>', f.push('<div class="com" p_id="' + a + '" p_type="' + g + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" locked_list="">'), f.push('<div class="betDesc">' + p + '<span class="wfName">' + h + "</span><span> • " + i + "</span>" + s + "</div>");
					var z = "",
						A = "",
						B = "",
						C = d && d.length > 1 ? "" : "hide";
					$.each(d, function(d, e) {
						q = "", "1" == e.bet_status && (q = "club-locked='1'", o = "locked"), ("1" != e.bet_status && "1" != c[0] || "0" != e.isMaster) && (o = c[0] || "1" == e.bet_status ? "locked" : "", B = "1" == e.isMaster ? "<span class='handicap_type " + C + "'>(主)</span>" : "<span class='handicap_type " + C + "'></span>", f.push('<ul class="match_title" p_id="' + a + '" p_type="' + g + '" ht_name="' + b.ht_name + '" gt_name="' + b.gt_name + '" m_id="' + m + '" m_time="' + n + '" handicap_s="' + e.handicap + '" handicap="' + u(T.Util.getHandicapInfo(e.handicap)) + '" isMaster="' + e.isMaster + '" msi="' + e.msi + '"><li codes="1" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">高于<em>' + u(e.handicap) + "</em>" + B + '</span><cite class="tMultiple">' + new Number(e.big).toFixed(2) + '</cite></li><li codes="0" class="codes ' + o + '" ' + q + ' lock_http_flag="0" lock_event_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">低于<em>' + u(e.handicap) + "</em>" + B + '</span><cite class="tMultiple">' + new Number(e.small).toFixed(2) + "</cite></li></ul>"))
					}), f.push("</div>");
					break;
				default:
					h = "木有获取到玩法"
				}
				return f.join("")
			},
			s = function(a, b, c) {
				var d = c.odds;
				switch (d && "object" != typeof d && (d = JSON.parse(d)), t(a, b, c), b) {
				case "70103":
					if ("1" == c.rFlag) {
						var e = d.W.concat(d.D, d.L, d.A);
						$.each(e, function(a, b) {
							-1 != b.handicap.indexOf(":") ? $(".match_title[p_id='70103'] .codes[codes='" + b.handicap + "'] .tMultiple").html(NumberUtil.fmoney(b.odd)) : "AOS" == b.handicap && $(".match_title[p_id='70103'] .codes[codes='5:5'] .tMultiple").html(NumberUtil.fmoney(b.odd))
						})
					} else $(".touzhu-one[m_id='" + a + "'][p_id='" + b + "']").remove(), $(".pay-list-detail").find("li[m_id='" + a + "'][p_id='" + b + "']").remove(), $("div.com[p_id='" + b + "'][m_id='" + a + "']").find(".betScore-box").remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), tip("盘口已经移除!");
					break;
				case "70105":
				case "70115":
					if ("1" == c.rFlag) {
						var f = {
							R01: 1,
							R23: 2,
							R46: 3,
							R7: 4
						},
							g = "R01R23R46R7";
						$.each(d, function(a, c) {
							-1 != g.indexOf(a) && $(".match_title[p_id='" + b + "'] .codes[codes='" + f[a] + "'] .tMultiple").html(NumberUtil.fmoney(c))
						})
					} else $(".touzhu-one[m_id='" + a + "'][p_id='" + b + "']").remove(), $(".pay-list-detail").find("li[m_id='" + a + "'][p_id='" + b + "']").remove(), $("div.com[p_id='" + b + "'][m_id='" + a + "']").find(".match_title").remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), tip("盘口已经移除!");
					break;
				case "70133":
				case "70143":
					"1" == c.rFlag ? ($(".match_title[p_id='" + b + "'] .codes[codes='1'] .tMultiple").html(NumberUtil.fmoney(d.sin)), $(".match_title[p_id='" + b + "'] .codes[codes='2'] .tMultiple").html(NumberUtil.fmoney(d.dou))) : ($(".touzhu-one[m_id='" + a + "'][p_id='" + b + "']").remove(), $(".pay-list-detail").find("li[m_id='" + a + "'][p_id='" + b + "']").remove(), $("div.com[p_id='" + b + "'][m_id='" + a + "']").find(".match_title").remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), tip("盘口已经移除!"));
					break;
				case "70130":
				case "70140":
					"1" == c.rFlag ? ($(".match_title[p_id='" + b + "'] .codes[codes='1'] .tMultiple").html(NumberUtil.fmoney(d.big)), $(".match_title[p_id='" + b + "'] .codes[codes='0'] .tMultiple").html(NumberUtil.fmoney(d.small))) : ($(".touzhu-one[m_id='" + a + "'][p_id='" + b + "']").remove(), $(".pay-list-detail").find("li[m_id='" + a + "'][p_id='" + b + "']").remove(), $("div.com[p_id='" + b + "'][m_id='" + a + "']").find(".match_title").remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), tip("盘口已经移除!"));
					break;
				case "70150":
					if ("1" == c.rFlag) {
						var f = {
							WW: "33",
							WD: "31",
							WL: "30",
							DW: "13",
							DD: "11",
							DL: "10",
							LW: "03",
							LD: "01",
							LL: "00"
						},
							g = "WWWDWLDWDDDLLWLDLL";
						$.each(d, function(a, b) {
							-1 != g.indexOf(a) && $(".match_title[p_id='70150'] .codes[codes='" + f[a] + "'] .tMultiple").html(NumberUtil.fmoney(b))
						})
					} else $(".touzhu-one[m_id='" + a + "'][p_id='" + b + "']").remove(), $(".pay-list-detail").find("li[m_id='" + a + "'][p_id='" + b + "']").remove(), $("div.com[p_id='" + b + "'][m_id='" + a + "']").find(".match_title").remove(), $("#selection-count,#SelectionCount").html(Buy.obj.find("li.on").length), 0 == Buy.obj.find("li.on").length && ShopCar.hide(), tip("盘口已经移除!")
				}
			},
			t = function(a, b, c) {
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
			},
			u = function(a) {
				return -1 != ("" + a).indexOf("/") ? a : -1 == ("" + a).indexOf("/") && -1 == ("" + a).indexOf(".") ? a + ".0" : a
			},
			v = function(a) {
				tempAwardFlag = hasAwardFlag, $(".delete-count").html($(".touzhu-ulBox .touzhu-item").length), $(".touzhu-box3 .tList-con ul li.betRecordLi").length >= 1 ? (CaculateCG.caculateSaveCacheData($(".touzhu-ulBox li.betRecordLi").length, $(".touzhu-box3 .tList-style ul li"), $(".touzhu-box3 .tList-con ul li.betRecordLi")), CaculateCG.caculateCgFun($(".touzhu-ulBox li.betRecordLi").length, a)) : CaculateCG.caculateCgFun($(".touzhu-ulBox li.betRecordLi").length), e(), f(), x()
			},
			w = function() {
				$.each($(".touzhu-box3 .tList-con li"), function(a, b) {
					var c = parseInt($(b).find(".betMoney").attr("data-val")),
						d = T.Util.parseNumber(c);
					CaculateCG.caculateBetMoney($(b).attr("data-flag"), parseInt($(b).attr("data-index")), $(".touzhu-box3 .pay-list-detail li.betRecordLi"), d, $(b))
				})
			},
			x = function() {
				if ("cg_bet" == Buy.fromtype) {
					var a = $(".tList-con .betRecordLi"),
						b = 0,
						c = 0,
						d = 0,
						e = 0;
					$.each(a, function(a, f) {
						b = T.Util.isEmpty($(f).find(".betMoney").attr("data-val")) ? 0 : parseInt($(f).find(".betMoney").attr("data-val")),
						T.Util.isEmpty($(f).attr("data-flag")) ? T.Util.isEmpty($(f).attr("data-mutil")) ? b = T.Util.isEmpty($(f).find(".betMoney").attr("data-val")) ? 0 : parseInt($(f).find(".betMoney").attr("data-val")) : b *= parseInt($(f).attr("data-mutil")) : b *= parseInt($(f).attr("data-all")), d += b, c = parseInt($(f).find(".bonus").html().split(",").join("")), e += c
					}), 
					$(".bt-count").html(T.Util.parseNumber(d)),
					$(".win-money").html(T.Util.parseNumber(e));
				} else {
					console.log('aaaa');
					var a = $(".betRecordLi"),
						b = 0,
						c = 0,
						d = 0,
						e = 0;
					1 == ShopCar.type ? (T.Util.isEmpty($(".touzhu-box1 .betMoney").attr("data-val")) || (b = $(".touzhu-box1 .betMoney").attr("data-val")), $(".win-money").html(T.Util.parseNumber(parseInt((parseFloat($(".touzhu-box1 .betOdd").html()) * b).toFixed(0))))) : ($.each(a, function(a, f) {
						var playid,playname,add,m;
						playid = $(f).attr('p_id');
						playname = playIdToPlay[playid];
						add=0;
						if( playname == "ASIAN" || playname == "BIGSMALL" | playname == "OE") add=1;
						
						m = parseFloat($(f).find(".betOdd").html())+add;
						
						console.log(playid,playname,add,m);
						
						b = T.Util.isEmpty($(f).find(".betMoney").attr("data-val")) ? 0 : parseInt($(f).find(".betMoney").attr("data-val")), d += b, c = parseInt(( m * b).toFixed(0)), e += c
					}), $(".bt-count").html(T.Util.parseNumber(d)), $(".win-money").html(T.Util.parseNumber(e)))
				}
			},
			y = function(a) {
				var b = "";
				"70102" != a.p_id && "70104" != a.p_id || (b = "[handicap='" + u(T.Util.getHandicapInfo(a.let_ball)) + "']");
				var c = $(".match_title[m_id='" + a.m_id + "'][p_id='" + a.p_id + "']" + b);
				if (c.length && ($(c).find(".codes").removeClass("on").addClass("locked").attr("club-locked", "1"), $(c).find(".codes .tMultiple").hide()), "ground_match" == Buy.fromtype) {
					var d = $(".playInfoWrap[m_id='" + a.m_id + "'][p_id='" + a.p_id + "'][handicap='" + u(T.Util.getHandicapInfo(a.let_ball)) + "']");
					d.length && ($(d).find(".bet_cite .betInfoWrap").hide(), $(d).find(".bet_cite .locked").length || $(d).find(".bet_cite").append("<span class='locked'>--</span>"), $(d).attr("club-locked", "1"), $(d).find(".codes").removeClass("on"))
				}
				$(".betRecordLi[m_id='" + a.m_id + "'][p_id='" + a.p_id + "']" + b).remove()
			},
			z = function() {
				$(".del_record").off().Touch(function() {
					var a = $(this).parent();
					if (1 == ShopCar.type) a.remove(), $("p[codes].on,li[codes].on").removeClass("on"), ShopCar.hideOneBetView();
					else {
						var b = a.attr("m_id"),
							c = a.attr("codes"),
							d = a.attr("p_id");
						"index" == Buy.fromtype ? $("div[m_id='" + b + "']").find("p[codes='" + c + "']").removeClass("on") : "ground_match" == Buy.fromtype ? $("div[m_id='" + b + "'][p_id='" + d + "']").find("p[codes='" + c + "']").removeClass("on") : $("ul[m_id='" + b + "'][p_id='" + d + "']").find("li[codes='" + c + "']").removeClass("on"), a.remove(), $(".keyboard").remove(), $(".touzhu-box2 .betMoney").removeClass("caoz-input"), $(".betRecordLi").removeClass("list-select"), $(".delete-count").html($(".touzhu-ulBox .touzhu-item").length), 0 == $(".touzhu-ulBox .touzhu-item").length && ShopCar.hide(), x(), "cg_bet" == Buy.fromtype && Buy.cgDeleteRefresh(!0)
					}
				})
			};
		return {
			cgOddsRefresh: w,
			doPlayHtml: q,
			BBdoPlayHtml: r,
			getBetlist: g,
			buyCombine_increase: function(a, c, d, e, f, g) {
				for (var h = c; h < g + 1 - e; h++) {
					var i = [];
					if (d[e - 1] = h, e - 1 == 0) {
						var j;
						for (j = f - 1; j >= 0; j--) i.push(a[d[j]]);
						b.push(i)
					} else Buy.buyCombine_increase(a, h + 1, d, e - 1, f, g)
				}
			},
			cgDeleteRefresh: v,
			getChangedInPayList: h,
			changeBetWithAdd: k,
			addOddsSubmitListener: m,
			initKeyboardListenerCG: o,
			initDelBetItemLis: z,
			removeBetRecordByPlayIdAndHandicap: i,
			obj: "",
			fromtype: "",
			submitCommitSuccess: c,
			showKeyboard: n,
			init: function(a, b) {
				ShopCar.init(), Buy.obj = a, Buy.fromtype = b, "cg_bet" == Buy.fromtype && (ShopCar.type = 3);
				var c = 0,
					d = window.innerHeight - 66;
				(/iPhone|iPad|iPod|ios|IOS/.test(window.navigator.userAgent) && 812 == document.documentElement.clientHeight && 375 == document.documentElement.clientWidth || Global.deviceType && ("iPhone X" == Global.deviceType || "iPhone10,3" == Global.deviceType || "iPhone10,6" == Global.deviceType)) && (d = window.innerHeight - 90, c = 24), "undefined" == typeof pageFrom || "playMin.html" != pageFrom && "basketPlayMin.html" != pageFrom ? "undefined" != typeof pageFrom && "basketPlay.html" == pageFrom && (d = window.innerHeight - parseInt($(".matchHead").height())) : d = window.innerHeight, $(".buy-list").css({
					"max-height": d + "px"
				}), $(".pay-list").css({
					"max-height": d - 87 - c + "px",
					"overflow-y": "scroll"
				}), $(window).resize(function() {
					d = window.innerHeight - 50, "undefined" == typeof pageFrom || "playMin.html" != pageFrom && "basketPlayMin.html" != pageFrom ? "undefined" != typeof pageFrom && "basketPlay.html" == pageFrom && (d = window.innerHeight - parseInt($(".matchHead").height())) : d = window.innerHeight, $(".buy-list").css({
						"max-height": d + "px"
					}), $(".pay-list").css({
						"max-height": d - 87 - c + "px",
						"overflow-y": "scroll"
					})
				}), $("#betslipBar").off().Touch(function(b) {
					if (!Buy.obj.find(".codes.on").length) return $(".selection-count,#selection-count").html("0"), void ShopCar.hideBetCountIcon();
					if (2 == ShopCar.type) {
						if (1 == Buy.obj.find(".codes.on").length) return ShopCar.type = 1, $("#betslipBar").removeClass("tan-up tan-down").addClass("tan-down initHide"), $(".touzhu-box1 .touzhu-main").html(Buy.getBetlist(Buy.obj, Buy.fromtype)), void ShopCar.showOneBetView();
						MaxBetMoneyInfo.getMaxBetInfo($(".codes.on").parent().attr("m_id"), "BB" == Global.sType ? "BB" : "S", "GAME"), $(".touzhu-box2 .touzhu-ulBox").html(g(a)), $(".touzhu-box2 .delete-count").html($(".touzhu-ulBox .touzhu-item").length)
					} else 3 == ShopCar.type && g(a);
					ShopCar.showMultiBetView(), x(), Buy.initDelBetItemLis(), $(".touzhu-box2 .betMoney").off().Touch(function(a) {
						if ($(".touzhu-box2 .betMoney.caoz-input").each(function(a, b) {
							$(b).attr("data-val") || $(b).html("输入金币")
						}), !$(a).hasClass("caoz-input") && !$(a).hasClass("betSuccessInput")) {
							$(".touzhu-box2 .betMoney").removeClass("caoz-input"), $(a).addClass("caoz-input"), $("li.betRecordLi").removeClass("list-select");
							var b = $(this).parent().parent();
							$(b).addClass("list-select"), Buy.showKeyboard(b)
						}
					})
				}), m()
			}
		}
	}(),
	ShopCar = function() {
		var a = {};
		a.init = function() {
			a.type = 1, $(".betMoney").removeAttr("data-val"), $(".litstxt").addClass("initHide").html(""), $(".touzhu-xuan").removeClass("tan-up tan-down").addClass("initHide"), $(".touzhu-box1").removeClass("touzhu-up touzhu-down"), $(".touzhu-box1 .bet-box").addClass("initHide"), $(".touzhu-box1 .touzhu-keyword").removeClass("keyword-up keyword-down").addClass("initHide"), $(".touzhu-box1 .all-in").removeClass("highest"), $(".touzhu-box1 .touzhu-main,.touzhu-box2 .pay-list-detail").empty(), $(".touzhu-box2,.touzhu-box3").removeClass("tan-up tan-down").addClass("initHide"), b()
		};
		var b = function() {
				$(".oneBetBtn").off().Touch(function(a) {
					$(".onBetSubmit").hasClass("betSuccess") || $(a).find(".act-je").hasClass("act-after") && $(".touzhu-box1 .touzhu-keyword").hasClass("keyword-up") || ($(".act-je").addClass("act-after"), $(".touzhu-box1 .betMoney").attr("data-val") ? $(".touzhu-box1 .betMoney").html(T.Util.parseNumber($(".touzhu-box1 .betMoney").attr("data-val"))) : $(".touzhu-box1 .betMoney").html(""), $(".touzhu-box1 .touzhu-keyword").removeClass("initHide").addClass("keyword-up"))
				}), $(".oneBet-key").off().Touch(function(a) {
					if (0 == $(".touzhu-box1 .betMoney").html().length && 0 == parseInt($(a).attr("data-val"))) return !1;
					var b = 0;
					b = T.Util.isEmpty($(".betMoney").attr("data-val")) ? parseInt($(a).attr("data-val")) : $(a).hasClass("tmultiple") ? 0 == $(".touzhu-box1 .betMoney").attr("data-val") ? parseInt(1 * parseInt($(a).attr("data-val"))) : parseInt($(".touzhu-box1 .betMoney").attr("data-val") * parseInt($(a).attr("data-val"))) : parseInt($(".touzhu-box1 .betMoney").attr("data-val") + "" + $(a).attr("data-val")), c(b)
				}), $(".all-delete").off().Touch(function() {
					$(".touzhu-box1 .betMoney").html("").removeAttr("data-val"), $(".touzhu-box1 .win-money").html(""), $(".touzhu-box1 .fan-tips").addClass("hide")
				}), $(".all-in").off().Touch(function() {
					if (T.Util.isEmpty(T.Storage.get("userinfo"))) return void tip("请您先登录哦~");
					var a = parseInt($(".ye-count").attr("data-val"));
					1 == ShopCar.type && c(a, "allBtn")
				}), $("#chuan-close,#box2-close,.delete-all").off().Touch(function(a) {
					(1 == ShopCar.type || $(a).hasClass("delete-all")) && $("p[codes].on,li[codes].on").removeClass("on"), ShopCar.hide()
				}), $("#dan-close").off().Touch(function(a) {
					ShopCar.type = 2, ShopCar.hideOneBetView(), $(".selection-count,#selection-count").html("1"), ShopCar.showBetCountIcon()
				})
			},
			c = function(a, b) {
				var c = ShopCar.checkItemMaxBetInfo($(".touzhu-one")); - 1 != c && ("allBtn" == b ? (a = c, $(".touzhu-box1 .all-in").addClass("highest")) : a > c && (a = 0, $(".touzhu-box1 .all-in").addClass("highest")), $(".touzhu-box1 .highest-money").html(T.Util.parseNumber(c))), $(".touzhu-box1 .betMoney").html(T.Util.parseNumber(a)).attr("data-val", a), $(".touzhu-box1 .win-money").html(T.Util.parseNumber((a * parseFloat($(".touzhu-box1 .betOdd").html())).toFixed(0))), $(".touzhu-box1 .pl-tips").hasClass("hide") && $(".touzhu-box1 .fan-tips").removeClass("hide")
			};
		return a.hide = function() {
			console.trace();
			if (1 == a.type && ($("p[codes].on,li[codes].on").removeClass("on"), a.hideOneBetView()), a.hideMultiBetView(), Buy && Buy.obj) {
				var b = Buy.obj.find(".codes.on");
				$(".selection-count,#selection-count").html(b.length), b.length || (a.hideBetCountIcon(), 2 == ShopCar.type && (ShopCar.type = 1))
			}
		}, a.checkBetListAfterOrder = function() {
			(1 != a.type || $(".touzhu-box1 .touzhu-one").length) && (2 != a.type || $(".touzhu-box2 .betRecordLi").length) ? 3 != a.type || $(".touzhu-box3 .betRecordLi").length || ShopCar.hide() : ShopCar.hide()
		}, a.showBetCountIcon = function() {
			$("#betslipBar").hasClass("initHide") || $("#betslipBar").hasClass("tan-up") ? ($("#betslipBar").off("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"), $("#betslipBar").removeClass("tan-up tan-down initHide"), $("#betslipBar").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
				$("#betslipBar").removeClass("tan-up")
			}), $("#betslipBar").addClass("tan-up")) : $("#betslipBar").removeClass("tan-up"), $(".sq-action,.menu-home").addClass("hide")
		}, a.hideBetCountIcon = function() {
			$("#betslipBar").hasClass("initHide") ? $("#betslipBar").removeClass("tan-down") : ($("#betslipBar").off("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"), $("#betslipBar").addClass("tan-up tan-down"), $("#betslipBar").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
				$("#betslipBar").removeClass("tan-down").addClass("initHide")
			}), $("#betslipBar").addClass("tan-down")), $(".sq-action,.menu-home").removeClass("hide")
		}, a.showOneBetView = function() {
			a.type = 1, $(".touzhu-box1 .onBetSubmit").removeClass("betSuccess oddChanged"), $(".touzhu-box1 .all-in").removeClass("highest"), $(".touzhu-box1 .onBetSubmit .btn-tz").html("确认投注"), $(".touzhu-box1").removeClass("touzhu-up touzhu-down").addClass("touzhu-up"), $(".touzhu-box1 .pl-tips").addClass("hide"), $(".touzhu-box1 .bet-box").removeClass("initHide"), $(".touzhu-box1 .litstxt").addClass("initHide").html(""), MaxBetMoneyInfo.getMaxBetInfo($(".touzhu-one").attr("m_id"), "BB" == Global.sType ? "BB" : "S", "GAME", function() {
				if (T.isNative && Global.isAndroid && $(".touzhu-box1").off().Touch(function() {}), !T.Util.isEmpty(T.Storage.get("oneBetMoney")) && MaxBetMoneyInfo.checkStorageMoney()) {
					var a = parseInt(T.Storage.get("oneBetMoney"));
					$(".touzhu-box1 .betMoney").attr("data-val", a).addClass("act-after").html(T.Util.parseNumber(a)), $(".touzhu-box1 .win-money").html(T.Util.parseNumber(parseInt((parseFloat($(".touzhu-box1 .betOdd").html()) * a).toFixed(0)))), $(".touzhu-box1 .fan-tips").removeClass("hide")
				} else $(".touzhu-box1 .win-money").html(""), $(".touzhu-box1 .fan-tips").addClass("hide");
				$(".sq-action,.menu-home").addClass("hide"), Buy.initDelBetItemLis()
			})
		}, a.hideOneBetView = function() {
			$(".touzhu-box1 .betMoney").removeAttr("data-val"), $(".touzhu-box1 .litstxt").addClass("initHide").html(""), $(".touzhu-box1").removeClass("touzhu-up touzhu-down").addClass("touzhu-down"), $(".touzhu-box1 .touzhu-keyword").removeClass("keyword-up").addClass("keyword-down"), setTimeout(function() {
				$(".touzhu-box1").hasClass("touzhu-up") || $(".touzhu-box1 .bet-box").addClass("initHide"), $(".touzhu-box1").removeClass("touzhu-down"), $(".touzhu-box1 .touzhu-keyword").removeClass("keyword-down").addClass("initHide")
			}, 300), $(".touzhu-box1 .betMoney").text("输入金币").removeClass("act-after"), $(".sq-action,.menu-home").removeClass("hide")
		}, a.showMultiBetView = function() {
			a.type = 2, "cg_bet" == Buy.fromtype && (a.type = 3);
			var b = 2 == a.type ? $(".touzhu-box2") : $(".touzhu-box3");
			if (b.find(".betMoney").html("输入金币").removeClass("caoz-input"), b.find(".delete-all").removeClass("hide"), b.find(".multiBetBtn").removeClass("betSuccess oddChanged"), b.find(".multiBetBtn .btn-tz").html("确认投注"), b.find(".pl-tips").addClass("hide"), b.find(".win-money").html(""), b.find(".litstxt").addClass("initHide").html(""), T.Util.preventBottomLayerScroll($("#mask"), b, 2 == a.type ? ".box2Scrollable" : ".box3Scrollable"), b.hasClass("initHide") || b.hasClass("tan-down")) {
				if (b.hasClass("tan-up")) return;
				b.off("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"), b.removeClass("initHide"), b.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
					$("#mask").show()
				}), b.removeClass("tan-down").addClass("tan-up")
			}
		}, a.hideMultiBetView = function() {
			$.each([".touzhu-box2", ".touzhu-box3"], function(a, b) {
				$(b).hasClass("initHide") || ($(b).off("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"), $(b).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
					Global.isInApp && $(b).addClass("initHide"), $("#mask,.mask").hide()
				}), $(b).removeClass("tan-up").addClass("tan-down"))
			})
		}, a.checkItemMaxBetInfo = function(a, b) {
			var c = $(a).attr("m_time") - (new Date).getTime() < 864e5 ? 1 : 0,
				d = 10 == $(a).attr("p_type") ? 1 : 0,
				e = 1 == $(a).attr("ismaster") || T.Util.isEmpty($(a).attr("ismaster")) ? 1 : 0,
				f = $(a).attr("odds");
			return MaxBetMoneyInfo.getItemMaxBetMoney(e, d, c, f, b)
		}, a
	}(),
	CaculateCG = function() {
		function a(a) {
			return 0 == c ? 1 : (c--, a * arguments.callee(a - 1))
		}

		function b(a) {
			return a <= 2 ? 2 : a * arguments.callee(a - 1)
		}
		var c = 0,
			d = [],
			e = [],
			f = [],
			g = function(d) {
				var e = 0,
					f = 0;
				if (d > 2) for (var g = 2; g <= d; g++) c = g, f = a(d) / b(g), e += f;
				return e
			},
			h = function(a, b) {
				var c = [];
				if (a > 1) {
//					if ( $(".tList-style").removeClass("hide"), c.push('<li><span class="guo-txt">过关选项</span></li>'), a) if (a < 6) {
					if ( $(".tList-style").addClass("hide"), a) if (a < 6) {
						for (var g = 2; g <= a; g++) a <= 4 ? g == a ? c.push('<li data-index="' + g + '" class="chuan-intro on"><span class="guo-btn">' + g + "串1</span></li>") : c.push('<li data-index="' + g + '" class="chuan-intro"><span class="guo-btn">' + g + "串1</span></li>") : g == a ? c.push('<li data-index="' + g + '" class="chuan-intro on hide"><span class="guo-btn">' + g + "串1</span></li>") : g <= 4 ? c.push('<li data-index="' + g + '" class="chuan-intro"><span class="guo-btn">' + g + "串1</span></li>") : c.push('<li data-index="' + g + '" class="chuan-intro hide"><span class="guo-btn">' + g + "串1</span></li>");
						if (a > 2 && a < 6) {
							var h = CaculateCG.caculateAllCg(a);
							a > 4 ? c.push('<li data-all="' + h + '" data-flag="allCg" data-index="' + g + '" class="chuan-intro hide"><span class="guo-btn">' + a + "串" + h + "</span></li>") : c.push('<li data-all="' + h + '" data-flag="allCg" data-index="' + g + '" class="chuan-intro"><span class="guo-btn">' + a + "串" + h + "</span></li>")
						}
						a > 4 && c.push('<li class="chuan-last"> <span class="sq-do"><em class="do-txt">更多</em><i class="do-up"></i></span></li>')
					} else if (a >= 6 && a <= 14) {
						for (var i = 1; i < 4; i++) 3 == i ? c.push('<li data-index="' + a + '" class="chuan-intro on"><span class="guo-btn">' + a + "串1</span></li>") : c.push('<li data-index="' + (a - i) + '" class="chuan-intro"><span class="guo-btn">' + (a - i) + "串1</span></li>");
						for (var j = 0; j < c.length; j++) for (var k = 0; k < c.length - j - 1; k++) if (parseInt($(c[k]).attr("data-index")) > parseInt($(c[k + 1]).attr("data-index"))) {
							var l = c[k];
							c[k] = c[k + 1], c[k + 1] = l
						}
					}
					$(".tList-style ul").html(c.join(""))
				} else 1 == a && $(".tList-style").addClass("hide");
				if (!T.Util.isEmpty(e) && e.length && ($.each($(".touzhu-box3 .box3Scrollable .tList-style ul li"), function(a, b) {
					for (var c = 0; c < e.length; c++) if ($(e[c]).attr("data-index") == $(b).attr("data-index") && $(e[c]).hasClass("on")) {
						$(b).addClass("on");
						break
					}
				}), e = []), T.Util.isEmpty(b)) {
					var m = "";
					m = 1 == a ? "串关" : a + "串1", d = [];
					var n = $(".touzhu-list .pay-list-detail li.touzhu-item"),
						o = [];
					o.length = n.length;
					var p = "hide";
					CaculateCG.combine_increase(n, 0, o, n.length, n.length, n.length), "串关" == m && (p = "hide");
					var q = !1;
					if ($.each($(".touzhu-box3 .betRecordLi"), function(a, b) {
						"true" == $(b).attr("hascgaward") && (q = !0)
					}), q) if (T.Util.isEmpty(selectCountCg)) p = tempAwardFlag && "串关" != m ? "cgAward-show" : "hide";
					else for (var r in selectCountCg)"串关" != m && (a < 10 ? parseInt(selectCountCg[r]) / 1e3 < 10 && (parseInt(selectCountCg[r]) / 1e3 + "").indexOf("" + a) > -1 && tempAwardFlag && (p = "cgAward-show") : parseInt(selectCountCg[r]) / 1e5 >= 10 && (parseInt(selectCountCg[r]) / 1e5 + "").indexOf("" + a) > -1 && tempAwardFlag && (p = "cgAward-show"));
					else p = "hide";
					$(".tList-con ul").html('<li class="touzhu-item betRecordLi" data-index="' + a + '" data-all="1" data-mutil="">\t\t\t\t\t\t\t\t<span class="cgAward-icon-show ' + p + '" award-type="cgAward" style=></span>\t\t\t\t\t\t\t\t<div class="chuan-style">' + m + '</div>\t\t\t\t\t\t\t\t<div class="chuan-fan">预计最高返还：<span class="bonus">0</span></div>\t\t\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t\t<span class="caoz-bei" style="position:absolute;right: 78px;top: 6px;"><em class="bei-number" style="vertical-align: top;color:#666">' + d.length + '</em><em class="bei-ca">×</em></span>\t\t\t\t\t\t\t\t<span class="caoz-je betMoney" data-val="">输入金币</span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</li>')
				} else {
					for (var s = [], p = "hide", t = 0; t < f.length; t++) {
						var u = "",
							v = "";
						T.Util.isEmpty(f[t].betMoney) || isNaN(f[t].betMoney) ? (u = "请输入金币", v = "") : (u = f[t].betMoney, v = u);
						var m = "";
						1 == a && (m = "串关"), "串关" == m && (p = "hide");
						var q = !1;
						if ($.each($(".touzhu-box3 .betRecordLi"), function(a, b) {
							"true" == $(b).attr("hascgaward") && (q = !0)
						}), $.each($(".touzhu-box3 .betRecordLi"), function(a, b) {
							parseFloat($(b).attr("odds")) < min_odd && (tempAwardFlag = !1)
						}), q) {
							if (T.Util.isEmpty(selectCountCg)) p = hasAwardFlag && "串关" != m && tempAwardFlag ? "cgAward-show" : "hide";
							else for (var r in selectCountCg)"串关" != m && (a < 10 ? parseInt(selectCountCg[r]) / 1e3 < 10 && (parseInt(selectCountCg[r]) / 1e3 + "").indexOf("" + a) > -1 && tempAwardFlag && (p = "cgAward-show") : parseInt(selectCountCg[r]) / 1e5 >= 10 && (parseInt(selectCountCg[r]) / 1e5 + "").indexOf("" + a) > -1 && tempAwardFlag && (p = "cgAward-show"));
							for (var w in selectCountCg) if (parseInt(f[t].dataIndex) < 10) {
								if (parseInt(selectCountCg[w]) / 1e3 < 10) {
									if ((parseInt(selectCountCg[w]) / 1e3 + "").indexOf(f[t].dataIndex) > -1 && hasAwardFlag) {
										p = tempAwardFlag && "串关" != m ? "cgAward-show" : "hide";
										break
									}
									p = "hide"
								}
							} else if (parseInt(f[t].dataIndex) >= 10 && parseInt(selectCountCg[w]) / 1e5 >= 10) {
								if ((parseInt(selectCountCg[w]) / 1e5 + "").indexOf(f[t].dataIndex) > -1 && hasAwardFlag) {
									p = tempAwardFlag && "串关" != m ? "cgAward-show" : "hide";
									break
								}
								p = "hide"
							}
						} else p = "hide";
						m = "串关" == m ? "串关" : f[t].dataIndex + "串" + f[t].dataAll, s.push('<li class="touzhu-item betRecordLi" data-index="' + f[t].dataIndex + '" data-all=' + f[t].dataAll + " data-mutil=" + f[t].dataMutil + '>\t\t\t\t\t\t\t\t<span class="cgAward-icon-show ' + p + '" award-type="cgAward"></span>\t\t\t\t\t\t\t\t<div class="chuan-style">' + m + '</div>\t\t\t\t\t\t\t\t<div class="chuan-fan">预计最高返还：<span class="bonus">' + f[t].bonus + '</span></div>\t\t\t\t\t\t\t\t<div class="caoz-right">\t\t\t\t\t\t\t\t<span class="caoz-bei" style="position:absolute;right: 78px;top: 6px;"><em class="bei-number" style="vertical-align: top;color:#666">' + f[t].beiNumber + '</em><em class="bei-ca">×</em></span>\t\t\t\t\t\t\t\t<span class="caoz-je betMoney" data-val=' + v + ">" + u + "</span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</li>")
					}
					$(".tList-con ul").html(s.join("")), f = []
				}
			},
			i = function(a, b, c) {
				e = [], f = [];
				var g = $(".touzhu-list .touzhu-ulBox li"),
					h = [];
				if ($.each(c, function(b, c) {
					var e = {};
					if (parseInt($(c).attr("data-index")) <= a) {
						if (T.Util.isEmpty($(c).find(".betMoney").attr("data-val")) || isNaN($(c).find(".betMoney").attr("data-val"))) e.bonus = "0";
						else {
							var i = parseInt($(c).find(".betMoney").attr("data-val")),
								j = T.Util.parseNumber(i);
							CaculateCG.caculateBetMoney($(c).attr("data-flag"), parseInt($(c).attr("data-index")), $(".touzhu-box3 .pay-list-detail li.betRecordLi"), j, $(c)), e.bonus = $(c).find(".bonus").html()
						}
						d = [], h.length = g.length, CaculateCG.combine_increase(g, 0, h, parseInt($(c).attr("data-index")), parseInt($(c).attr("data-index")), g.length), T.Util.isEmpty($(c).attr("data-mutil")) || (e.dataMutil = d.length), e.dataIndex = $(c).attr("data-index"), e.dataAll = $(c).attr("data-all"), e.betMoney = $(c).find(".betMoney").attr("data-val"), e.beiNumber = d.length, f.push(e)
					}
				}), !f.length) {
					var i = {};
					i.bonus = "0", i.dataMutil = "", i.dataIndex = a, i.dataAll = "1", i.betMoney = "", i.beiNumber = "1", f.push(i)
				}
				$.each(b, function(b, c) {
					!T.Util.isEmpty($(c).attr("data-index")) && parseInt($(c).attr("data-index")) <= a && e.push(c)
				})
			},
			k = function(a, b, c, e, f, g) {
				for (var h = b; h < g + 1 - e; h++) {
					var i = [];
					if (c[e - 1] = h, e - 1 == 0) {
						var j;
						for (j = f - 1; j >= 0; j--) i.push(a[c[j]]);
						d.push(i)
					} else CaculateCG.combine_increase(a, h + 1, c, e - 1, f, g)
				}
			},
			l = function(a, b, c) {
				d = [];
				var e = a,
					f = 1,
					g = [];
				g.length = c.length, CaculateCG.combine_increase(c, 0, g, e, e, c.length);
				var h = 0;
				return $.each(d, function(a, c) {
					f = 1;
					var d = 0;
					$.each(c, function(a, b) {
						var c = $(b).find("em.betOdd");
						f *= parseFloat($(c).html())
					}), d = f * b, h += d
				}), h
			};
		return {
			caculateCgFun: h,
			caculateSaveCacheData: i,
			caculateAllCg: g,
			caculateBetMoney: function(a, b, c, e, f) {
				console.log(a, b, c, e, f);
				if (T.Util.isEmpty(e) || null != a) {
					if (!T.Util.isEmpty(e) && !T.Util.isEmpty(a)) {
						d = [];
						var g = 1,
							h = 0;
						e = parseInt(e.split(",").join(""));
						for (var b = 2; b <= c.length; b++) {
							var i = 0;
							if (b != c.length) i = CaculateCG.caculateSingleCg(b, e, c);
							else {
								for (var k = c.find("em.betOdd"), l = 0; j = k.length, l < j; l++) g *= parseFloat($(k[l]).html());
								i = g * e
							}
							h += i
						}
						if (parseInt(h.toFixed(0)) > 2e7) return tip("超出最大限注"), $(".tList-con li.list-select").find("span.betMoney").html("0"), void $(".tList-con li.list-select").find("span.betMoney").attr("data-val", "0");
						f ? f.find("span.bonus").html(T.Util.parseNumber(h.toFixed(0))) : $(".tList-con li.list-select").find("span.bonus").html(T.Util.parseNumber(h.toFixed(0)))
					}
				} else {
					console.log('else');
					var m = 1;
					var playid, playname, add;
					if (e = parseInt(e.split(",").join("")), c.length == b) {
//						console.log(c.find("em.betOdd"));
						for (var k = c.find("em.betOdd"), l = 0; j = k.length, l < j; l++){
							playid = $(k[l]).parents('li').attr('p_id');
							playname = playIdToPlay[playid];
							add=0;
							if( playname == "ASIAN" || playname == "BIGSMALL" | playname == "OE") add=1;
							m *= parseFloat($(k[l]).html())+add;
						}
						if (parseInt((m * e).toFixed(0)) > 2e7) return tip("超出最大限注"), $(".tList-con li.list-select").find("span.betMoney").html("0"), void $(".tList-con li.list-select").find("span.betMoney").attr("data-val", "0");
						f ? f.find("span.bonus").html(T.Util.parseNumber((m * e).toFixed(0))) : $(".tList-con li.list-select").find("span.bonus").html(T.Util.parseNumber((m * e).toFixed(0))), $(".tList-con li.list-select").attr("data-mutil", 1)
					} else if (parseInt(b) >= 2 && c.length > 1 && parseInt(b) < c.length) {
						d = [];
						var n = CaculateCG.caculateSingleCg(b, e, c);
						if (parseInt(n).toFixed(0) > 2e7) return tip("超出最大限注"), $(".tList-con li.list-select").find("span.betMoney").html("0"), void $(".tList-con li.list-select").find("span.betMoney").attr("data-val", "0");
						f ? f.find("span.bonus").html(T.Util.parseNumber(n.toFixed(0))) : $(".tList-con li.list-select").find("span.bonus").html(T.Util.parseNumber(n.toFixed(0))), $(".tList-con li.list-select").attr("data-mutil", d.length)
					} else {
						var o = c.find("em.betOdd");
						if (m = parseFloat($(o).html()), parseInt((m * e).toFixed(0)) > 2e7) return tip("超出最大限注"), $(".tList-con li.list-select").find("span.betMoney").html("0"), void $(".tList-con li.list-select").find("span.betMoney").attr("data-val", "0");
						f ? f.find("span.bonus").html(T.Util.parseNumber((m * e).toFixed(0))) : $(".tList-con li.list-select").find("span.bonus").html(T.Util.parseNumber((m * e).toFixed(0))), $(".tList-con li.list-select").attr("data-mutil", 1)
					}
				}
			},
			caculateSingleCg: l,
			combine_increase: k
		}
	}(),
	MaxBetMoneyInfo = function() {
		var a = {};
		a.retInfo = {}, a.getMaxBetInfo = function(b, c, d, e) {
			if (T.Util.isEmpty(T.Storage.get("access_token"))) return void(e && e());
			a.retInfo = {};
			var f = "/web/services/order/get_order_limit.json?match_id=" + b + "&sport_type=" + c + "&channel_code=" + d + "&token=" + T.Storage.get("access_token");
			T.Util.xmlHttpRequest({
				type: "get",
				errorType: "1",
				reqUrl: f,
				callback: function(b) {
					b.res_data && b.res_data.value && (a.retInfo = b.res_data.value, e && e())
				},
				errorCallback: function() {}
			})
		};
		var b = function(b, c, d, e, f) {
				var g = -1;
				if (a.retInfo && a.retInfo.RETURN_AWARD_LIMIT) if (a.retInfo.RETURN_AWARD_LIMIT.MATCH_MONEY > a.retInfo.USER_PAY_PREAWARD_INFO.SUM_PRE_PRIZE) {
					var h = parseInt(a.retInfo.RETURN_AWARD_LIMIT.MATCH_MONEY) - parseInt(a.retInfo.USER_PAY_PREAWARD_INFO.SUM_PRE_PRIZE) - f;
					if (a.retInfo.RETURN_AWARD_LIMIT.ITEM_MONEY) {
						var i = 1,
							j = {
								is_master: b,
								match_phase: c,
								is_lately: d
							};
						a.retInfo.RETURN_AWARD_RULE && a.retInfo.RETURN_AWARD_RULE.length && $.each(a.retInfo.RETURN_AWARD_RULE, function(a, b) {
							b.PARAM == j[b.CODE] && (i = NumberUtil.floatMul(i, b.VALUE))
						});
						var k = Math.min(h, Math.floor(NumberUtil.floatMul(a.retInfo.RETURN_AWARD_LIMIT.ITEM_MONEY, i)));
						g = Math.floor(NumberUtil.floatDiv(k, parseFloat(e) - 1))
					} else g = Math.floor(NumberUtil.floatDiv(h, parseFloat(e) - 1))
				} else g = 0;
				return g
			},
			c = function(b) {
				var c = -1;
				if (a.retInfo.USER_PAY_LIMIT && a.retInfo.USER_PAY_LIMIT.USER_MATCH_MONEY) {
					var d = parseInt(a.retInfo.USER_PAY_LIMIT.USER_MATCH_MONEY) - parseInt(a.retInfo.USER_PAY_PREAWARD_INFO.SUM_ITEM_MONEY) - b;
					c = Math.min(d, a.retInfo.USER_PAY_LIMIT.USER_ITEM_MONEY)
				}
				return c
			};
		return a.getItemMaxBetMoney = function(d, e, f, g, h) {
			var i = -1,
				j = 0,
				k = 0;
			if (void 0 != h && 2 == h && "ground_match" != Buy.fromtype) for (var l = 0; l <= $(".touzhu-box2 .betRecordLi").length; l++) {
				var m = $(".touzhu-box2 .betRecordLi").eq(l);
				if (!$(m).hasClass("list-select")) {
					var n = $(m).find(".betMoney");
					T.Util.isEmpty($(n).attr("data-val")) || 0 == $(n).attr("data-val") || (k += parseInt($(n).attr("data-val")), j += NumberUtil.floatMul(parseInt($(n).attr("data-val")), parseFloat($(m).attr("odds")) - 1))
				}
			}
			if (Object.getOwnPropertyNames(a.retInfo).length) {
				var o = b(d, e, f, g, j),
					p = c(k);
				i = -1 == p ? o : p, i = i < 0 ? 0 : i
			}
			return i
		}, a.checkItemMaxInfoByOddChange = function(b) {
			if (1 == ShopCar.type) {
				if (T.Util.isEmpty($(".touzhu-box1 .betMoney").attr("data-val"))) return;
				var c = ShopCar.checkItemMaxBetInfo(b); - 1 != c && parseInt($(".touzhu-box1 .betMoney").attr("data-val")) > c && ($(".touzhu-box1 .highest-money").html(T.Util.parseNumber(c)), $(".touzhu-box1 .all-in").addClass("highest"), $(".touzhu-box1 .betMoney").html("0").attr("data-val", 0), $(".touzhu-box1 .win-money").html("0"), $(".touzhu-box1 .touzhu-keyword").removeClass("initHide").addClass("keyword-up"))
			} else if (2 == ShopCar.type) {
				for (var d = 0, e = 0, f = 0; f <= $(".touzhu-box2 .betRecordLi").length; f++) {
					var g = $(".touzhu-box2 .betRecordLi").eq(f);
					if (!$(g).hasClass("list-select")) {
						var h = $(g).find(".betMoney");
						T.Util.isEmpty($(h).attr("data-val")) || 0 == $(h).attr("data-val") || (e += parseInt($(h).attr("data-val")), d += NumberUtil.floatMul(parseInt($(h).attr("data-val")), parseFloat($(g).attr("odds"))))
					}
				}
				if (d + T.Util.notNullValue(a.retInfo.USER_PAY_PREAWARD_INFO.SUM_PRE_PRIZE, 0) > a.retInfo.RETURN_AWARD_LIMIT.MATCH_MONEY) $(b).find(".betMoney").removeAttr("data-val", 0).html("0"), $(b).find(".bonus").html("0");
				else for (var f = 0; f <= $(".touzhu-box2 .betRecordLi").length; f++) {
					var g = $(".touzhu-box2 .betRecordLi").eq(f);
					if (!$(g).hasClass("list-select") && !T.Util.isEmpty($(g).find(".betMoney").attr("data-val"))) {
						var c = ShopCar.checkItemMaxBetInfo(g, 2); - 1 != c && parseInt($(g).find(".betMoney").attr("data-val")) > c && ($(g).find(".betMoney").removeAttr("data-val", 0).html("0"), $(g).find(".bonus").html("0"))
					}
				}
			}
		}, a.checkStorageMoney = function() {
			var a = !0,
				b = ShopCar.checkItemMaxBetInfo($(".touzhu-one"));
			return -1 != b && T.Storage.get("oneBetMoney") > b && (a = !1), a
		}, a.checkBetInfoAfterLogin = function() {
			if (1 == ShopCar.type && $(".touzhu-box1").hasClass("touzhu-up") || 2 == ShopCar.type && $(".touzhu-box2").hasClass("tan-up")) {
				var b = 1 == ShopCar.type ? $(".touzhu-one").attr("m_id") : $(".codes.on").parent().attr("m_id");
				a.getMaxBetInfo(b, "BB" == Global.sType ? "BB" : "S", "GAME", function() {
					var b = 1 == ShopCar.type ? $(".touzhu-box1 .touzhu-one") : $(".touzhu-box2 .betRecordLi");
					a.checkItemMaxInfoByOddChange(b)
				})
			}
		}, a
	}();