/* !v1-1.0.0.js 2018-01-10 */

var Scene = function() {
		var a = {
			GOAL: "jq",
			PENALTY: "dq",
			GOAL_OWN: "wl",
			SUBST: "hr",
			CARD_R: "hp",
			CARD_Y: "ACE",
			CARD_Y_2ND: "hp2",
			CORNER: "rq"
		},
			b = {
				GK: "守门员",
				DF: "后卫",
				MF: "中场",
				FW: "前锋"
			};
		return {
			getStrokeAnalysis: function() {
				T.Util.xmlHttpRequest({
					hostFlag: "appweb",
					type: "get",
					reqUrl: "/app-web/api/event/qry_event_count?match_id=" + m_id,
					callback: function(a) {
						if (a.qry_event_count && a.qry_event_count.data.length) {
							$(".SK_content .TJ").empty();
							var b = "style='width:100%;'",
								c = "style='width:100%;'";
							$.each(a.qry_event_count.data, function(a, d) {
								b = "style='width:100%;'", c = "style='width:100%;'", parseInt(d.guest_num) > parseInt(d.home_num) ? b = "style='width:" + parseInt(d.home_num) / parseInt(d.guest_num) * 100 + "%'" : parseInt(d.guest_num) < parseInt(d.home_num) && (c = "style='width:" + parseInt(d.guest_num) / parseInt(d.home_num) * 100 + "%'"), $(".SK_content .TJ").append(" <ul class='SK_dat'>  <li class='dat1'>    <p class='dat1_L'>" + d.home_num + "</p> \t  <p class='dat1_dBox'>      <b class='dat1_d' " + b + "></b>    </p>  </li>  <li class='dat2'>" + d.event_name + "</li>  <li class='dat3'>    <p class='dat3_L'>" + d.guest_num + "</p>    <p class='dat3_dBox'>      <b class='dat3_d' " + c + "></b>    </p>  </li> </ul> ")
							})
						} else $(".SK_content .TJ").empty(), $(".SK_content .TJ").append("<div class='noRecord'><div class='txtDesc'><p class='txtTitle'>暂时还没有技术统计</p></div></div>")
					},
					errorCallback: function() {}
				})
			},
			getEventAnalysis: function() {
				T.Util.xmlHttpRequest({
					hostFlag: "appweb",
					type: "get",
					reqUrl: "/app-web/api/event/qry_events?match_id=" + m_id,
					callback: function(b) {
						if (b.qry_events && b.qry_events.data.length) {
							$(".SJ .event_wrap").empty();
							var c = "";
							$.each(b.qry_events.data, function(b, d) {
								c = '<ul class="SJ_box"><li class="SJ_tim1_l"><span>' + (d.team_name ? d.team_name : "") + '</span><b class="icon ' + a[d.event_code] + ' floatL"></b></li><li class="SJ_tim2">' + d.running_time + '\'</li><li class="SJ_tim3"></li></ul>', "g" == d.team_flag && (c = '<ul class="SJ_box"><li class="SJ_tim1_l"></li><li class="SJ_tim2">' + d.running_time + '\'</li><li class="SJ_tim3"><span>' + (d.team_name ? d.team_name : "") + '</span><b class="icon ' + a[d.event_code] + ' floatR"></b></li></ul>'), $(".SJ .event_wrap").append(c)
							}), $(".football_labelBox").show()
						} else $(".SJ .event_wrap").empty(), $(".SJ .event_wrap").append("<div class='noRecord'><div class='txtDesc'><p class='txtTitle'>暂时还没有事件</p></div></div>"), $(".football_labelBox").hide()
					},
					errorCallback: function() {}
				})
			},
			getTeamAnalysis: function() {
				T.Util.xmlHttpRequest({
					hostFlag: "appweb",
					type: "get",
					reqUrl: "/app-web/api/match/qry_match_lineup?match_id=" + m_id,
					callback: function(a) {
						if (a.qry_match_lineup && a.qry_match_lineup.home) {
							var c = a.qry_match_lineup.home,
								d = a.qry_match_lineup.guest,
								e = a.qry_match_lineup.home_subs,
								f = a.qry_match_lineup.guest_subs;
							$(".firstWrap .teamWrap").empty();
							for (var g = 0; g < c.length; g++) $(".firstWrap .teamWrap").append('<ul class="player"><li class="playerLeft"><p class="floatL"><b class="icon playerYellow">' + c[g].team_num + '</b><span class="Color">' + (c[g].role_cd ? b[c[g].role_cd] : "") + '</span></p><span class="player_color" style="color:#333;">' + c[g].team_name + '</span></li><li class="playerRight"><p class="floatR"><span class="Color">' + (d[g].role_cd ? b[d[g].role_cd] : "") + '</span><b class="icon playerBlue">' + d[g].team_num + '</b></p><span class="player_color" style="color:#333;">' + d[g].team_name + "</span></li></ul>");
							if (e && e.length) for (var h = 0; h < e.length; h++) $(".secondWrap .teamWrap").append('<ul class="player"><li class="playerLeft"><p class="floatL"><b class="icon playerYellow">' + e[h].team_num + '</b><span class="Color">' + (e[h].role_cd ? b[e[h].role_cd] : "") + '</span></p><span class="player_color" style="color:#333;">' + e[h].team_name + '</span></li><li class="playerRight"><p class="floatR"><span class="Color">' + (f[h].role_cd ? b[f[h].role_cd] : "") + '</span><b class="icon playerBlue">' + f[h].team_num + '</b></p><span class="player_color" style="color:#333;">' + f[h].team_name + "</span></li></ul>");
							else $(".secondWrap .teamWrap").empty(), $(".secondWrap .teamWrap").append("<div class='noRecord'><div class='txtDesc'><p class='txtTitle'>暂时还没有对阵信息</p></div></div>")
						} else $(".firstWrap .teamWrap,.secondWrap .teamWrap").empty(), $(".firstWrap .teamWrap,.secondWrap .teamWrap").append("<div class='noRecord'><div class='txtDesc'><p class='txtTitle'>暂时还没有对阵信息</p></div></div>")
					},
					errorCallback: function() {}
				})
			}
		}
	}(),
	BallTalks = function() {
		var a = 0,
			b = 0,
			c = 0;
		return {
			getUnReadNum: function() {
				return;
				var a = "obj_type=3&obj_id=" + m_id;
				0 != BallTalks.endId && (a = "obj_type=3&obj_id=" + m_id + "&cur_id=" + BallTalks.endId), T.Util.xmlHttpRequest({
					hostFlag: "appweb",
					type: "get",
					reqUrl: "/app-web/api/comment/get_comment_count?" + a,
					errorType: "none",
					callback: function(a) {
						a.get_comment_count && void 0 !== a.get_comment_count.msg_num && (a.get_comment_count.msg_num > 0 ? ($(".unReadCount").html(a.get_comment_count.msg_num), $(".LQ_more").show()) : ($(".unReadCount").html(a.get_comment_count.msg_num), $(".LQ_more").hide()))
					},
					errorCallback: function() {}
				})
			},
			getMessages: function(d) {
				var e = {
					obj_type: 3,
					page_index: 1,
					page_size: 10,
					comment_type: BallTalks.msgType
				};
				e.obj_id = m_id, T.Util.isEmpty(T.Storage.get("access_token")) || (e.access_token = T.Storage.get("access_token")), d && "history" == d ? e.end_id = a : d && "add" == d && (e.start_id = c), T.Util.xmlHttpRequest({
					hostFlag: "appweb",
					type: "post",
					reqUrl: "/app-web/api/comment/qry_comments",
					reqData: {
						qry_comments: e
					},
					errorType: "none",
					callback: function(e) {
						if (e.qry_comments && e.qry_comments.data && e.qry_comments.data.length) {
							d && "add" != d || (c = e.qry_comments.data[0].comment_id, BallTalks.endId = c, d || $(".LQ_content").empty()), $(".noChats").remove();
							var f;
							a = e.qry_comments.data[e.qry_comments.data.length - 1].comment_id, b = e.qry_comments.data[0].comment_id;
							var g = e.qry_comments.data.reverse();
							d && "history" == d && (g = g.reverse()), $.each(g, function(a, b) {
								f = '<div class="LQ_list"><img src="' + b.portrait_pic + '" alt="" class="LQ_userimg"><div class="userInfo_box"><span class="Color LQ_userName">' + b.nickname + '</span><p><span class="userChat userChatL">' + b.content + "</span></p></div></div>", 1 == b.is_self ? f = '<div class="LQ_listRight"><img src="' + b.portrait_pic + '"  class="LQ_userimg floatR"/><div  class="selfInfo_box floatR"><span class="Color LQ_userName floatR">' + b.nickname + '</span><br/><p class="floatR"><span class="userChat userChatR">' + b.content + "</span></p></div></div>" : "1" == b.comment_type && (f = '<div class="LQ_list"><img src="../img/system_head.png" alt="" class="LQ_userimg"><div class="userInfo_box"><span class="Color LQ_userName">百盈提点</span><p><span class="userChat userChatL">' + b.content + "</span></p></div></div>"), d && "history" == d ? $(".LQ_content").prepend(f) : $(".LQ_content").append(f)
							}), void 0 !== d && "add" != d || $(".LQ_content").scrollTop(1e4)
						} else void 0 === d ? $(".LQ_content").empty().append('<div class="noChats">暂时没有聊天记录</div>') : d && "history" == d && $(".LQ_content div").length && (BallTalks.hasMore = !1, tip("已无更多记录"))
					},
					errorCallback: function() {}
				})
			},
			publishMessage: function(a) {
				var b = {
					obj_type: 3,
					access_token: T.Storage.get("access_token"),
					content: a
				};
				b.obj_id = m_id, T.Util.xmlHttpRequest({
					hostFlag: "appweb",
					type: "post",
					reqUrl: "/app-web/api/comment/add_comment",
					reqData: {
						add_comment: b
					},
					callback: function(a) {
						tip("发送成功"), BallTalks.getMessages()
					},
					errorCallback: function() {}
				})
			},
			startId: a,
			endId: b,
			hasMore: !0,
			getUnreadCount: 0,
			msgType: -1
		}
	}(),
	BetInfo = function() {
		var a = new Map;
		a.put("CALLCENTER_LOST", "needFilter");
		var b = function() {//addBetListener
				var a = [];
				$(".codes").off().Touch(function(b) {
					var b = $(b);
					return "1" != $(b).attr("lock_msgtype7_flag") && "1" != $(b).attr("lock_msgtype8_flag") && "1" != $(b).attr("lock_http_flag") && 
					( !b.hasClass("locked") && 
						(	b.toggleClass("on"),
							a = Buy.obj.find(".codes.on"), 
							void(  a.length > 0 ? 1 == a.length && 1 == ShopCar.type ? ( $(".touzhu-box1 .touzhu-main").html(Buy.getBetlist(Buy.obj, Buy.fromtype)), ShopCar.showOneBetView() ) : ( ShopCar.type = 2, ShopCar.hideOneBetView(), $(".selection-count,#selection-count").html(a.length), ShopCar.showBetCountIcon() ) : ( $(".selection-count,#selection-count").html(0), ShopCar.hide(), ShopCar.hideBetCountIcon() )
								 )
						)
					)
				}),
				$(".add-award-icon,.back-award-icon").off().Touch(function(a) {
					T.Util.openWindow(T.Util.getRootPath() + "/" + Global.webRoot + "/app/awardRule.html?m_id=" + $(a).attr("m_id") + "&fromRuleFlag=" + $(a).attr("award-type"))
				})
			},
			c = function(a) {
				var b = void 0 != playToPlayId[a.play + "-" + a.match_phase] ? playToPlayId[a.play + "-" + a.match_phase] : a.play,
					c = a.odds.split(","),
					d = a.handicap || "",
					f = a.mId,
					g = a.msi;
				switch (b) {
				case "70101":
				case "70111":
					for (var h = 0; h < c.length; h++) {
						var i = "";
						0 == h ? (i = "3", $('ul[p_id="' + b + '"] li[codes="3"] cite').html(NumberUtil.fmoney(c[0]))) : 1 == h ? (i = "1", $('ul[p_id="' + b + '"] li[codes="1"] cite').html(NumberUtil.fmoney(c[1]))) : 2 == h && (i = "0", $('ul[p_id="' + b + '"] li[codes="0"] cite').html(NumberUtil.fmoney(c[2]))), Buy.getChangedInPayList(f, b, i, NumberUtil.fmoney(c[h]), g, d)
					}
					break;
				case "70102":
				case "70112":
				case "70104":
				case "70114":
					var j = d,
						k = d;
					"70102" == b || "70112" == b ? (j = T.Util.getHandicapInfo(d), k = T.Util.getOppositeHandicap(j), 0 != parseFloat(T.Util.getLetBall(d)) && (parseFloat(T.Util.getLetBall(d)) > 0 ? j = "+" + j : k = "+" + k)) : "70104" != b && "70114" != b || (j = T.Util.getHandicapInfo(d), k = T.Util.getHandicapInfo(d)), j = e(j), k = e(k);
					var l = $('ul[p_id="' + b + '"][msi="' + g + '"]');
					$(l).attr({
						handicap: e(T.Util.getHandicapInfo(d)),
						isMaster: a.is_master
					}), 1 == a.is_master && ($(l).siblings(".match_title").find(".handicap_type").html(""), $(l).siblings(".match_title").attr("isMaster", 0), $(l).find(".handicap_type").html("(主)"));
					for (var h = 0; h < c.length; h++) {
						var i = "",
							m = c[h];
						"70112" == b || "70102" == b ? 0 == h ? (i = "3", $(l).find('li[codes="3"] .tName em').html(j), $(l).find('li[codes="3"] cite').html(NumberUtil.fmoney(NumberUtil.floatAdd(parseFloat(m), 1)))) : 1 == h && (i = "0", $(l).find('li[codes="0"] .tName em').html(k), $(l).find('li[codes="0"] cite').html(NumberUtil.fmoney(NumberUtil.floatAdd(parseFloat(m), 1)))) : "70104" != b && "70114" != b || "" != m && (0 == h ? (i = "1", $(l).find('li[codes="1"] .tName em').html(j), $(l).find('li[codes="1"] cite').html(NumberUtil.fmoney(NumberUtil.floatAdd(parseFloat(m), 1)))) : 1 == h && (i = "0", $(l).find('li[codes="0"] .tName em').html(k), $(l).find('li[codes="0"] cite').html(NumberUtil.fmoney(NumberUtil.floatAdd(parseFloat(m), 1))))), Buy.getChangedInPayList(f, b, i, NumberUtil.fmoney(NumberUtil.floatAdd(parseFloat(m), 1)), g, d)
					}
					break;
				case "70103":
				case "70113":
					var n = "string" == typeof a.odds ? JSON.parse(a.odds) : a.odds;
					n = n[0];
					var o = [],
						p = $("ul.match_title[m_id='" + f + "'][msi='" + g + "'][p_id='" + b + "'] li.codes.on"),
						q = $("ul.match_title[m_id='" + f + "'][msi='" + g + "'][p_id='" + b + "']").attr("m_time");
					$.each(p, function(a, b) {
						o.push($(b).attr("codes"))
					}), $(".com[p_id='" + b + "'][m_id='" + f + "']").find(".betDesc").siblings().remove();
					var r = [];
					r.push(BetInfo.getScoreInfoByType("W", n.W, 0, a.msi, q)), r.push(BetInfo.getScoreInfoByType("D", n.D, 0, a.msi, q)), r.push(BetInfo.getScoreInfoByType("L", n.L, 0, a.msi, q)), r.push(BetInfo.getScoreInfoByType("A", n.A, 0, a.msi, q)), $(".com[p_id='" + b + "'][m_id='" + f + "']").append(r.join("")), $.each(o, function(a, c) {
						$("ul.match_title[m_id='" + f + "'][msi='" + g + "'][p_id='" + b + "'] li.codes[codes='" + c + "']").addClass("on")
					});
					var s = n.W.concat(n.D, n.L);
					$.each(s, function(a, c) {
						Buy.getChangedInPayList(f, b, c.handicap, c.odd, g, d)
					});
					break;
				case "70105":
				case "70115":
					var t = "70105" == b ? "20" : "10",
						u = "undefined" != typeof matchInfo && matchInfo.ht_name ? matchInfo.ht_name : "",
						v = "undefined" != typeof matchInfo && matchInfo.gt_name ? matchInfo.gt_name : "",
						n = "string" == typeof a.odds ? JSON.parse(a.odds) : a.odds;
					n = n[0];
					var o = [],
						p = $("ul.match_title[m_id='" + f + "'][msi='" + g + "'][p_id='" + b + "'] li.codes.on");
					$.each(p, function(a, b) {
						o.push($(b).attr("codes"))
					}), $(".com[p_id='" + b + "'] .match_title").remove(), $(".com[p_id='" + b + "']").append('<ul class="match_title" p_id="' + b + '" p_type="' + t + '" ht_name="' + u + '" gt_name="' + v + '" m_id="' + f + '" msi="' + g + '"><li class="codes" codes="1" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">0~1球</span><cite class="tMultiple">' + NumberUtil.fmoney(n.R01) + '</cite></li><li class="codes" codes="2" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">2~3球</span><cite class="tMultiple">' + NumberUtil.fmoney(n.R23) + '</cite></li></ul><ul class="match_title" p_id="' + b + '" p_type="' + t + '" ht_name="' + u + '" gt_name="' + v + '" m_id="' + f + '"><li class="codes" codes="3" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">4~6球</span><cite class="tMultiple">' + NumberUtil.fmoney(n.R46) + '</cite></li><li class="codes" codes="4" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">7球以上</span><cite class="tMultiple">' + NumberUtil.fmoney(n["R7+"]) + "</cite></li></ul>"), $.each(o, function(a, c) {
						$("ul.match_title[m_id='" + f + "'][msi='" + g + "'][p_id='" + b + "'] li.codes[codes='" + c + "']").addClass("on")
					});
					var w = {
						R01: "1",
						R23: "2",
						R46: "3",
						"R7+": "4"
					};
					$.each(n, function(a, c) {
						Buy.getChangedInPayList(f, b, w[a], c, g, a)
					});
					break;
				case "70133":
				case "70143":
					var n = "string" == typeof a.odds ? JSON.parse(a.odds) : a.odds,
						t = "70133" == b ? "20" : "10",
						u = "undefined" != typeof matchInfo && matchInfo.ht_name ? matchInfo.ht_name : "",
						v = "undefined" != typeof matchInfo && matchInfo.gt_name ? matchInfo.gt_name : "";
					n = n[0];
					var o = [],
						p = $("ul.match_title[m_id='" + f + "'][msi='" + g + "'][p_id='" + b + "'] li.codes.on");
					$.each(p, function(a, b) {
						o.push($(b).attr("codes"))
					}), $(".com[p_id='" + b + "'] .match_title").remove(), $(".com[p_id='" + b + "']").append('<ul class="match_title" p_id="' + b + '" p_type="' + t + '" ht_name="' + u + '" gt_name="' + v + '" m_id="' + f + '" msi="' + g + '"><li class="codes" codes="1" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">单数</span><cite class="tMultiple">' + NumberUtil.fmoney(n.S) + '</cite></li><li class="codes" codes="2" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">双数</span><cite class="tMultiple">' + NumberUtil.fmoney(n.D) + "</cite></li></ul>"), $.each(o, function(a, c) {
						$("ul.match_title[m_id='" + f + "'][msi='" + g + "'][p_id='" + b + "'] li.codes[codes='" + c + "']").addClass("on")
					});
					var w = {
						S: "1",
						D: "2"
					};
					$.each(n, function(a, c) {
						Buy.getChangedInPayList(f, b, w[a], c, g, a)
					});
					break;
				case "70150":
					var n = "string" == typeof a.odds ? JSON.parse(a.odds) : a.odds,
						t = "70150" == b ? "20" : "10",
						u = "undefined" != typeof matchInfo && matchInfo.ht_name ? matchInfo.ht_name : "",
						v = "undefined" != typeof matchInfo && matchInfo.gt_name ? matchInfo.gt_name : "";
					n = n[0];
					var o = [],
						p = $("ul.match_title[m_id='" + f + "'][msi='" + g + "'][p_id='" + b + "'] li.codes.on");
					$.each(p, function(a, b) {
						o.push($(b).attr("codes"))
					}), $(".com[p_id='" + b + "'] .match_title").remove(), $(".com[p_id='" + b + "']").append('<ul class="match_title" p_id="' + b + '" p_type="' + t + '" ht_name="' + u + '" gt_name="' + v + '" m_id="' + m_id + '" msi="' + g + '"><li class="codes" codes="33" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">胜-胜</span><cite class="tMultiple">' + NumberUtil.fmoney(n.WW) + '</cite></li><li class="codes" codes="31" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">胜-平</span><cite class="tMultiple">' + NumberUtil.fmoney(n.WD) + '</cite></li><li class="codes" codes="30" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">胜-负</span><cite class="tMultiple">' + NumberUtil.fmoney(n.WL) + '</cite></li></ul><ul class="match_title" p_id="' + b + '" p_type="' + t + '" ht_name="' + u + '" gt_name="' + v + '" m_id="' + m_id + '" msi="' + g + '"><li class="codes" codes="13" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">平-胜</span><cite class="tMultiple">' + NumberUtil.fmoney(n.DW) + '</cite></li><li class="codes" codes="11" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">平-平</span><cite class="tMultiple">' + NumberUtil.fmoney(n.DD) + '</cite></li><li class="codes" codes="10" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">平-负</span><cite class="tMultiple">' + NumberUtil.fmoney(n.DL) + '</cite></li></ul><ul class="match_title" p_id="' + b + '" p_type="' + t + '" ht_name="' + u + '" gt_name="' + v + '" m_id="' + m_id + '" msi="' + g + '"><li class="codes" codes="03" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">负-胜</span><cite class="tMultiple">' + NumberUtil.fmoney(n.LW) + '</cite></li><li class="codes" codes="01" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">负-平</span><cite class="tMultiple">' + NumberUtil.fmoney(n.LD) + '</cite></li><li class="codes" codes="00" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">负-负</span><cite class="tMultiple">' + NumberUtil.fmoney(n.LL) + "</cite></li></ul>"), $.each(o, function(a, c) {
						$("ul.match_title[m_id='" + f + "'][msi='" + g + "'][p_id='" + b + "'] li.codes[codes='" + c + "']").addClass("on")
					});
					var w = {
						WW: "33",
						WD: "31",
						WL: "30",
						DW: "13",
						DD: "11",
						DL: "30",
						LW: "03",
						LD: "01",
						LL: "00"
					};
					$.each(n, function(a, c) {
						Buy.getChangedInPayList(f, b, w[a], c, g, a)
					});
					break;
				case "70130":
				case "70140":
					var n = "string" == typeof a.odds ? JSON.parse(a.odds) : a.odds;
					n = n[0], $('ul[p_id="' + b + '"][handicap="' + T.Util.getHandicapInfo(d) + '"]').find('li[codes="1"] cite').html(n.B), $('ul[p_id="' + b + '"][handicap="' + T.Util.getHandicapInfo(d) + '"]').find('li[codes="0"] cite').html(n.S);
					var w = {
						B: "1",
						S: "0"
					};
					$.each(n, function(a, c) {
						Buy.getChangedInPayList(f, b, w[a], c, g, a)
					});
					break;
				default:
					p_name = "木有获取到玩法"
				}
			},
			d = function(a, b, c, d, e, f) {
				console.log(a,b,c,d,e,f);
				var g = [],
					h = [],
					i = "平",
					j = "draw",
					k = "";
				a && "W" == a ? (i = "主胜", j = "win") : a && "L" == a ? (i = "主负", j = "lose") : a && "A" == a && (i = "其他", j = "other"), g.push("<div class='betScore-box " + j + "'><span class='bf-title'>" + i + "</span>");
				var l = 0 == c ? "" : "locked";
				"1" == f && (k = "club-locked='1'", l = "locked");
				for (var m = 0; m < b.length; m += 3) h = [], h.push('<ul class="match_title" p_id="' + b[m].p_id + '" p_type="' + b[m].p_type + '" ht_name="' + matchInfo.ht_name + '" gt_name="' + matchInfo.gt_name + '" m_id="' + m_id + '" m_time="' + e + '" msi="' + d + '" matchSpId="' + b[m].matchSpId + '" ht_score="' + b[m].ht_score + '" gt_score="' + b[m].gt_score + '" matchId="' + b[m].matchId + '" handicap_s="' + b[m].handicap_s +  '"><li class="codes ' + l + '" ' + k + ' codes="' + ("AOS" == b[m].handicap ? "5:5" : b[m].handicap) + '" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + ("AOS" == b[m].handicap ? "其他比分" : b[m].handicap) + '</span><cite class="tMultiple">' + NumberUtil.fmoney(b[m].odd) + "</cite></li>"), "AOS" != b[m].handicap && "4:3" != b[m].handicap && "3:4" != b[m].handicap || h.push('<li class="codes locked"><span class="tName"></span><cite class="tMultiple"></cite></li>'), m + 1 < b.length && h.push('<li class="codes ' + l + '" ' + k + ' codes="' + b[m + 1].handicap + '" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + ("" + b[m + 1].handicap).replace(/(5:0)/gi, "胜其他").replace(/(0:5)/gi, "负其他") + '</span><cite class="tMultiple">' + NumberUtil.fmoney(b[m + 1].odd) + "</cite></li>"), m + 2 < b.length && h.push('<li class="codes ' + l + '" ' + k + ' codes="' + b[m + 2].handicap + '" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + b[m + 2].handicap + '</span><cite class="tMultiple">' + NumberUtil.fmoney(b[m + 2].odd) + "</cite></li>"), h.push("</ul>"), g.push(h.join(""));
				return g.push("</div>"), g.join("")
			},
			e = function(a) {
				return -1 != ("" + a).indexOf("/") ? a : -1 == ("" + a).indexOf("/") && -1 == ("" + a).indexOf(".") ? a + ".0" : a
			},
			f = function(a) {
				if (console.log("msgTime:" + (new Date).getTime() + " " + a.payloadString), a.payloadString && "" != a.payloadString) {
					var b = JSON.parse(a.payloadString);
					if (!(T.Util.isEmpty(T.Storage.get("difTime")) || T.Util.isEmpty(b.uTime) && T.Util.isEmpty(b.u_time))) {
						(new Date).getTime() - parseInt(T.Storage.get("difTime")) - (b.uTime || b.u_time) >= 1e4 && console.log("msg timeout===")
					}
					var c = b.mId;
					if (!("" + b.msgType).match(/99|100/)) {
						if (c != (T.Util.getParaHash("m_id") || T.Util.getPara("m_id"))) return
					}
					var d = $("#inplay").length;
					switch ("" + b.msgType) {
					case "1":
						if (d) {
							if (BetInfo.eventFilter.containsKey(b.evtCd) || "CALLCENTER_LOST" == b.evtCd) break;
							T.Util.isEmpty(b.cFlag) || "GOAL" !== b.evtCd || "" + b.cFlag != "1" ? "function" == typeof matchEvent && matchEvent(b.evtCd, b.tFlg, b.evtCont) : "function" == typeof matchEvent && matchEvent("SCORE", b.tFlg, b.evtCont)
						}
						break;
					case "2":
						g(b);
						break;
					case "3":
						var e = b.score;
						d && ($("#score,.live_score").html(e), $(".betRecordLi[m_id='" + m_id + "'] .nowScore").html(e), $("span.scoreTxt").html(" (" + e + ")"));
						break;
					case "4":
						var f = b.state;
						if ("undefined" != typeof inplayGameTimer && void 0 !== inplayGameTimer.mStatus && parseInt(f) > parseInt(inplayGameTimer.mStatus)) if (clearInterval(inplayGameTimer.timerStartFlag), clearInterval(inplayGameTimer.halfTimerFlag), clearInterval(inplayGameTimer.firstHalfFlag), clearInterval(inplayGameTimer.secondHalfFlag), inplayGameTimer.mStatus = f, -1 != "34".indexOf(f) && (inplayGameTimer.second = 2700, "4" == f && d && "function" == typeof matchEvent && (matchEvent("KICKOFF", "h", ""), console.log("调用妹子KICKOFF事件"))), $(".timeDown").attr("id", inplayGameTimer.mId + "|" + inplayGameTimer.second + "|" + inplayGameTimer.mStatus), $(".timeDown").attr("value", inplayGameTimer.second), -1 != "23489".indexOf(f)) {
							if (inplayGameTimer.timerStart(), "2" == f && "prePlay" == Buy.fromtype)"prePlay.html" == T.Util.getParaHash("page") ? window.location.href = window.location.href.replace("prePlay.html", "inPlay_new.html") : window.location.href = window.location.href.replace("isInPlay=0", "isInPlay=1");
							else if ("2" == f && "playMin.html" == pageFrom && ($(".score-item").hide(), $(".score-item").hasClass("on"))) {
								$(".pay-list-detail li.betRecordLi");
								$("#betslipBar").addClass("initHide"), ShopCar && ShopCar.hide(), $(".hotBet-item").addClass("on"), Init.getBetHotInfo()
							}
						} else "5" == f && d && ("function" == typeof matchEvent && (matchEvent("FINISHED", "", ""), console.log("调用妹子FINISHED事件")), $("article.timeDown").html("比赛结束"));
						"5" == f && d && "function" == typeof matchEvent ? (matchEvent("FINISHED", "", ""), console.log("调用妹子FINISHED事件")) : "3" == f && d && "function" == typeof matchEvent && (matchEvent("HALF_END", "", ""), console.log("调用妹子HALF_END事件"));
						break;
					case "5":
						pageFrom && "playMin.html" == pageFrom && (matchInfo.homeCorner = b.h_corner_368 || 0 == b.h_corner_368 ? b.h_corner_368 : "", matchInfo.awayCorner = b.a_corner_368 || 0 == b.a_corner_368 ? b.a_corner_368 : "", T.Util.isEmpty(matchInfo.homeCorner) || T.Util.isEmpty(matchInfo.awayCorner) || ($(".curCornerCount").html(parseInt(matchInfo.homeCorner) + parseInt(matchInfo.awayCorner)), $("#betCoreBox").html(matchInfo.homeCorner + ":" + matchInfo.awayCorner)));
						break;
					case "7":
						if ("1" == b.type) if ("1" == b.b_status) $(".match_title li").attr("lock_msgtype7_flag", "1"), $(".tMultiple").hide(), $(".codes").addClass("locked");
						else if ("0" == b.b_status) {
							var i = $(".match_title .codes");
							$.each(i, function(a, b) {
								1 != $(b).attr("club-locked") && ($(b).attr("lock_msgtype7_flag", "0"), $(b).attr("lock_http_flag", "0"), 0 == $(b).attr("lock_http_flag") && 0 == $(b).attr("lock_msgtype7_flag") && 0 == $(b).attr("lock_msgtype8_flag") && ($(b).find("cite").show(), $(b).removeClass("locked")))
							})
						}
						break;
					case "8":
						if (!T.Util.isEmpty(b.odds_phase) && "2" == b.odds_phase) return !1;
						var j = void 0 != playToPlayId[b.play + "-" + b.match_phase] ? playToPlayId[b.play + "-" + b.match_phase] : b.play;
						if (-1 == "701017011170102701127010470114".indexOf(j)) return !1;
						var k = "";
						T.Util.isEmpty(b.odds) || (k = b.odds.split(",")), "1" == b.b_status ? ($("ul.match_title[m_id='" + c + "'][p_id='" + j + "'][msi='" + b.msi + "']").remove(), h(c, j, b.msi)) : "0" == b.b_status && !T.Util.isEmpty(b.odds) && k.length && (b.handicap = b.h_value, g(b));
						break;
					case "100":
						var l = b;
						rollMessage.addMsg(l);
						break;
					case "99":
						T.User.getUInfo(T.Storage.get("access_token"), T.User.refreshUMoney, "1")
					}
					delete b
				}
			},
			g = function(a) {
				var b = a.mId,
					d = void 0 != playToPlayId[a.play + "-" + a.match_phase] ? playToPlayId[a.play + "-" + a.match_phase] : a.play,
					e = a.odds.split(","),
					f = a.handicap || "",
					g = a.msi || "";
				if ($("ul.match_title[m_id='" + b + "'][p_id='" + d + "'][msi='" + g + "'] li").length) c(a), BetInfo.addBetListener();
				else {
					var h = $("div.com[m_id='" + b + "'][p_id='" + d + "']"),
						j = $(h).find("ul.match_title li.on"),
						k = [];
					$.each(j, function(a, b) {
						k.push($(b).attr("codes"))
					}), "70101" != d && "70111" != d && "70103" != d && "70113" != d && "70105" != d && "70115" != d && "70133" != d && "70143" != d && "70150" != d || $(h).find("ul.match_title").remove(), "undefined" == typeof pageFrom || "inPlay_new.html" != pageFrom && "prePlay.html" != pageFrom || $(h).find("ul.match_title").remove(), i(b, d, f, e, k, a), $(".handicap_type").removeClass("hide").show(), BetInfo.addBetListener()
				}
			},
			h = function(a, b, c) {
				$(".betRecordLi[m_id='" + a + "'][p_id='" + b + "'][msi='" + c + "']").remove(), $(".touzhu-one[m_id='" + a + "'][p_id='" + b + "'][msi='" + c + "']").remove(), ShopCar && ShopCar.checkBetListAfterOrder()
			},
			i = function(a, b, c, d, f, g) {
				var h = $("div.com[m_id='" + a + "'][p_id='" + b + "']"),
					i = "70101" == b || "70111" == b ? "999" : c,
					j = "" + $(h).attr("locked_list");
				if ($(h).length && (T.Util.isEmpty(j) || -1 == j.indexOf(i))) {
					var k = $(h).attr("p_type"),
						l = T.Util.notNullValue($(h).attr("gt_name"), "--"),
						m = T.Util.notNullValue($(h).attr("ht_name"), "--"),
						n = $(h).attr("m_time");
					if ("70101" == b || "70111" == b) $(h).append('<ul class="match_title" p_id="' + b + '" p_type="' + k + '" ht_name="' + m + '" gt_name="' + l + '" m_id="' + a + '" m_time="' + n + '" msi="' + g.msi + '"><li codes="3" class="codes" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + m.substring(0, 4) + '</span><cite class="tMultiple">' + NumberUtil.fmoney(d[0]) + '</cite></li><li codes="1" class="codes" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">平局</span><cite class="tMultiple">' + NumberUtil.fmoney(d[1]) + '</cite></li><li codes="0" class="codes" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + l.substring(0, 4) + '</span><cite class="tMultiple">' + NumberUtil.fmoney(d[2]) + "</cite></li></ul>");
					else if ("70102" == b || "70112" == b) {
						var o = T.Util.getHandicapInfo(c),
							p = T.Util.getOppositeHandicap(o);
						0 != parseFloat(c) && (parseFloat(c) > 0 ? o = "+" + o : p = "+" + p), 1 == g.is_master && ($(h).find(".handicap_type").html(""), $(h).find(".match_title").attr("isMaster", 0));
						var q = '<ul class="match_title" p_id="' + b + '" p_type="' + k + '" handicap="' + e(o) + '" ht_name="' + m + '" gt_name="' + l + '" m_id="' + a + '" msi="' + g.msi + '" m_time="' + n + '" isMaster="' + g.is_master + '"><li codes="3" class="codes" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + m.substring(0, 4) + "<em>" + e(o) + "</em>" + (1 == g.is_master ? '<span class="handicap_type">(主)</span>' : '<span class="handicap_type"></span>') + '</span><cite class="tMultiple">' + NumberUtil.fmoney(NumberUtil.floatAdd(parseFloat(d[0]), 1)) + '</cite></li><li codes="0" class="codes" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">' + l.substring(0, 4) + "<em>" + e(p) + "</em>" + (1 == g.is_master ? '<span class="handicap_type">(主)</span>' : '<span class="handicap_type"></span>') + '</span><cite class="tMultiple">' + NumberUtil.fmoney(NumberUtil.floatAdd(parseFloat(d[1]), 1)) + "</cite></li></ul>";
						1 == g.is_master ? $(h).find(".betDesc").after(q) : $(h).append(q)
					} else if ("70104" == b || "70114" == b) {
						1 == g.is_master && $(h).find(".handicap_type").html("");
						var q = '<ul class="match_title" p_id="' + b + '" p_type="' + k + '" handicap="' + e(T.Util.getHandicapInfo(c)) + '" ht_name="' + m + '" gt_name="' + l + '" m_id="' + a + '" msi="' + g.msi + '" m_time="' + n + '" isMaster="' + g.is_master + '"><li codes="1" class="codes" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">高于<em>' + e(T.Util.getHandicapInfo(c)) + "</em>" + (1 == g.is_master ? '<span class="handicap_type">(主)</span>' : '<span class="handicap_type"></span>') + '</span><cite class="tMultiple">' + NumberUtil.fmoney(NumberUtil.floatAdd(parseFloat(d[0]), 1)) + '</cite></li><li codes="0" class="codes" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">低于<em>' + e(T.Util.getHandicapInfo(c)) + "</em>" + (1 == g.is_master ? '<span class="handicap_type">(主)</span>' : '<span class="handicap_type"></span>') + '</span><cite class="tMultiple">' + NumberUtil.fmoney(NumberUtil.floatAdd(parseFloat(d[1]), 1)) + "</cite></li></ul>";
						1 == g.is_master ? $(h).find(".betDesc").after(q) : $(h).append(q)
					} else if ("70103" == b || "70113" == b) {
						var r = "string" == typeof g.odds ? JSON.parse(g.odds) : g.odds;
						r = r[0], arr = [], $(h).find(".betDesc").siblings().remove(), arr.push(BetInfo.getScoreInfoByType("W", r.W, 0, g.msi, n)), arr.push(BetInfo.getScoreInfoByType("D", r.D, 0, g.msi, n)), arr.push(BetInfo.getScoreInfoByType("L", r.L, 0, g.msi, n)), arr.push(BetInfo.getScoreInfoByType("A", r.A, 0, g.msi, n)), $(h).append(arr.join(""))
					} else if ("70105" == b || "70115" == b) {
						var s = "undefined" != typeof matchInfo && matchInfo.ht_name ? matchInfo.ht_name : "",
							t = "undefined" != typeof matchInfo && matchInfo.gt_name ? matchInfo.gt_name : "",
							r = "string" == typeof g.odds ? JSON.parse(g.odds) : g.odds;
						r = r[0], $(h).append('<ul class="match_title" p_id="' + b + '" p_type="' + k + '" ht_name="' + s + '" gt_name="' + t + '" m_id="' + a + '" m_time="' + n + '" msi="' + g.msi + '"><li class="codes" codes="1" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">0~1球</span><cite class="tMultiple">' + NumberUtil.fmoney(r.R01) + '</cite></li><li class="codes" codes="2" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">2~3球</span><cite class="tMultiple">' + NumberUtil.fmoney(r.R23) + '</cite></li></ul><ul class="match_title" p_id="' + b + '" p_type="' + k + '" ht_name="' + s + '" gt_name="' + t + '" m_id="' + a + '" m_time="' + n + '" msi="' + g.msi + '"><li class="codes" codes="3" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">4~6球</span><cite class="tMultiple">' + NumberUtil.fmoney(r.R46) + '</cite></li><li class="codes" codes="4" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">7球以上</span><cite class="tMultiple">' + NumberUtil.fmoney(r["R7+"]) + "</cite></li></ul>")
					} else if ("70133" == b || "70143" == b) {
						var r = "string" == typeof g.odds ? JSON.parse(g.odds) : g.odds;
						r = r[0], s = "undefined" != typeof matchInfo && matchInfo.ht_name ? matchInfo.ht_name : "", t = "undefined" != typeof matchInfo && matchInfo.gt_name ? matchInfo.gt_name : "", $(h).append('<ul class="match_title" p_id="' + b + '" p_type="' + k + '" ht_name="' + s + '" gt_name="' + t + '" m_id="' + a + '" m_time="' + n + '" msi="' + g.msi + '"><li class="codes" codes="1" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">单数</span><cite class="tMultiple">' + NumberUtil.fmoney(r.S) + '</cite></li><li class="codes" codes="2" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">双数</span><cite class="tMultiple">' + NumberUtil.fmoney(r.D) + "</cite></li></ul>")
					} else if ("70150" == b) {
						var r = "string" == typeof g.odds ? JSON.parse(g.odds) : g.odds;
						r = r[0], s = "undefined" != typeof matchInfo && matchInfo.ht_name ? matchInfo.ht_name : "", t = "undefined" != typeof matchInfo && matchInfo.gt_name ? matchInfo.gt_name : "", $(h).append('<ul class="match_title" p_id="' + b + '" p_type="' + k + '" ht_name="' + s + '" gt_name="' + t + '" m_id="' + m_id + '" m_time="' + n + '" msi="' + g.msi + '"><li class="codes" codes="33" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">胜-胜</span><cite class="tMultiple">' + NumberUtil.fmoney(r.WW) + '</cite></li><li class="codes" codes="31" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">胜-平</span><cite class="tMultiple">' + NumberUtil.fmoney(r.WD) + '</cite></li><li class="codes" codes="30" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">胜-负</span><cite class="tMultiple">' + NumberUtil.fmoney(r.WL) + '</cite></li></ul><ul class="match_title" p_id="' + b + '" p_type="' + k + '" ht_name="' + s + '" gt_name="' + t + '" m_id="' + m_id + '" m_time="' + n + '" msi="' + g.msi + '"><li class="codes" codes="13" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">平-胜</span><cite class="tMultiple">' + NumberUtil.fmoney(r.DW) + '</cite></li><li class="codes" codes="11" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">平-平</span><cite class="tMultiple">' + NumberUtil.fmoney(r.DD) + '</cite></li><li class="codes" codes="10" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">平-负</span><cite class="tMultiple">' + NumberUtil.fmoney(r.DL) + '</cite></li></ul><ul class="match_title" p_id="' + b + '" p_type="' + k + '" ht_name="' + s + '" gt_name="' + t + '" m_id="' + m_id + '" m_time="' + n + '" msi="' + g.msi + '"><li class="codes" codes="03" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">负-胜</span><cite class="tMultiple">' + NumberUtil.fmoney(r.LW) + '</cite></li><li class="codes" codes="01" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">负-平</span><cite class="tMultiple">' + NumberUtil.fmoney(r.LD) + '</cite></li><li class="codes" codes="00" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">负-负</span><cite class="tMultiple">' + NumberUtil.fmoney(r.LL) + "</cite></li></ul>")
					} else if ("70130" == b || "70140" == b) {
						var r = "string" == typeof g.odds ? JSON.parse(g.odds) : g.odds;
						r = r[0], s = "undefined" != typeof matchInfo && matchInfo.ht_name ? matchInfo.ht_name : "", t = "undefined" != typeof matchInfo && matchInfo.gt_name ? matchInfo.gt_name : "";
						var q = '<ul class="match_title" p_id="' + playId + '" handicap="' + T.Util.getHandicapInfo(g.handicap) + '" p_type="' + k + '" ht_name="' + s + '" gt_name="' + t + '" m_id="' + m_id + '" m_time="' + n + '" msi="' + g.msi + '" isMaster="' + g.is_master + '"><li class="codes" codes="1" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">高于' + T.Util.getHandicapInfo(g.handicap) + '</span><cite class="tMultiple">' + NumberUtil.fmoney(r.B) + '</cite></li><li class="codes" codes="0" lock_http_flag="0" lock_msgtype7_flag="0" lock_msgtype8_flag="0"><span class="tName">低于' + T.Util.getHandicapInfo(g.handicap) + '</span><cite class="tMultiple">' + NumberUtil.fmoney(r.S) + "</cite></li></ul>";
						1 == g.is_master ? $(h).find(".corner-box").after(q) : $(h).append(q)
					}
					"70101" != b && "70111" != b && "70103" != b && "70113" != b && "70105" != b && "70115" != b && "70133" != b && "70143" != b && "70150" != b || f.length && $.each(f, function(a, c) {
						$(".match_title[p_id='" + b + "'] li[codes='" + c + "']").addClass("on")
					})
				}
			};
		return {
			getBetCount: function() {
				var a = "";
				if ("1" == Global.isClub) a = "/web/services/order/matchOrder/count?token=" + T.Storage.get("access_token") + "&c_id=" + T.Storage.get("clubsInfo").ID + "&matchId=" + m_id;
				else if ("1" == Global.isPK) {
					var b = T.Util.getPara("r_id") || "";
					b || (b = T.Storage.get("pkInfo").ID), a = "/web/services/order/matchOrder/count?token=" + T.Storage.get("access_token") + "&s_type=2&c_id=" + b + "&matchId=" + m_id
				} else a = "/web/services/order/matchOrder/count?token=" + T.Storage.get("access_token") + "&matchId=" + m_id;
				T.Util.xmlHttpRequest({
					type: "get",
					reqUrl: a,
					callback: function(a) {
						a.res_data && a.res_data.value && ($(".bet_count,.record-count").html(a.res_data.value), $(".record-count").css("display", "block"))
					},
					errorCallback: function() {}
				})
			},
			onMessageArrived: f,
			addBetListener: b,
			getMatchBetRecord: function() {
				T.Util.xmlHttpRequest({
					type: "get",
					reqUrl: "/web/services/order/matchOrder?token=" + T.Storage.get("access_token") + "&matchId=" + m_id,
					callback: function(a) {
						if (a.res_data && a.res_data.value && a.res_data.value.length) {
							$(".bet_count").html(a.res_data.value.length), $(".sq_TZ").empty();
							var b = "";
							$.each(a.res_data.value, function(a, c) {
								b = c.info, "1" == c.isFlag ? $(".sq_TZ").append(T.betInfoHtml.fillSignBetInfo(b)) : "2" == c.isFlag && $(".sq_TZ").append(T.betInfoHtml.fillGroupBetInfo(b))
							})
						} else $(".sq_TZ").html("<div class='noRecord'><div class='icon noHistoy'></div><div class='txtDesc'><p class='txtTitle'>暂时还没有投注记录</p></div></div>")
					},
					errorCallback: function() {}
				})
			},
			eventFilter: a,
			getScoreInfoByType: d
		}
	}(),
	FX = function() {
		function a() {
			T.Util.xmlHttpRequest({
				reqUrl: "/app-web/api/match/get_team_matchs?home_type=" + b + "&is_guest=" + c + "&is_home=" + d + "&match_id=" + T.Util.getPara("m_id"),
				type: "get",
				callback: function(a) {
					console.log(a);
					var b = function(a, b) {
							function d(a) {
								var b = new Array;
								for (var c in a) - 1 == b.indexOf(a[c]) && b.push(a[c]);
								return b
							}
							function e(a, b) {
								var c = [];
								$.each(a, function(a, b) {
									c.push('<span class="xuan-btn">' + b + '<i class="xuan-icon"></i></span>')
								}), b.html(c.join(""))
							}
							var f = [],
								g = "";
							$.each(b, function(a, d) {
								var e = d.home_team_name,
									h = d.guest_team_name;
								e = (e + "").length > 3 ? e.substr(0, 3) : e, h = (h + "").length > 3 ? h.substr(0, 3) : h, g += d.league_name + ",";
								var i = "",
									j = "",
									k = "",
									l = "";
								i = "胜" == d.match_result ? "win-col" : "负" == d.match_result ? "lose-col" : "draw-col", T.Storage.get("leagueMatch").hid == d.home_team_id ? (k = i, l = "") : (k = "", l = i), b == c.guest_matchs && (T.Storage.get("leagueMatch").gid == d.guest_team_id ? (k = "", l = i) : (k = i, l = "")), j = "赢" == d.match_cap_result ? "win-col" : "输" == d.match_cap_result ? "lose-col" : "draw-col", f.push('<tr data-leagues= "' + d.league_name + '">\t\t\t\t\t<td width="18%">' + d.league_name + '</td>\t\t\t\t\t<td width="18%">16-03-23</td>\t\t\t\t\t<td width="41%"><span class="' + k + '" >' + e + '</span> <em class="all-bf">' + d.home_team_score + ":" + d.guest_team_score + "</em>(" + d.home_team_first_score + ":" + d.guest_team_first_score + ') <span class="' + l + '">' + h + '</span></td>\t\t\t\t<td width="10%"><span class="' + i + '">' + d.match_result + "</span></td>\t\t\t\t<td>" + d.cap_type_name + '<span class="' + j + '">' + d.match_cap_result + "</span></td>\t\t\t\t</tr>")
							}), g = g.substr(0, g.length - 1), g = g.split(","), a.html(f.join("")), b == n ? e(d(g), $("#hisLeagues")) : b == o ? e(d(g), $("#homeLeagues")) : b == p && e(d(g), $("#guestLeagues")), $(".xuan-btn").off().click(function() {
								$(this).toggleClass("xuan-no"), $(this).parent().hasClass("hisLeagues") && ($(this).hasClass("xuan-no") ? $("#historyMatchs tr[data-leagues='" + $(this).text() + "']").hide() : $("#historyMatchs tr[data-leagues='" + $(this).text() + "']").show()), $(this).parent().hasClass("homeLeagues") && ($(this).hasClass("xuan-no") ? $("#homeHis tr[data-leagues='" + $(this).text() + "']").hide() : $("#homeHis tr[data-leagues='" + $(this).text() + "']").show()), $(this).parent().hasClass("guestLeagues") && ($(this).hasClass("xuan-no") ? $("#guestHis tr[data-leagues='" + $(this).text() + "']").hide() : $("#guestHis tr[data-leagues='" + $(this).text() + "']").show())
							})
						};
					if (!a.get_team_matchs || h(a.get_team_matchs)) return $(".lsjf-con").hide(), void $(".jqss-con").hide();
					var c = a.get_team_matchs;
					if (c.his_win) {
						$("#homeWin").html("主胜" + c.his_win + "场"), $("#guestWin").html("客胜" + c.his_lost + "场"), $("#evenWin").html("平局" + c.his_even + "场");
						var d = c.his_win + c.his_lost + c.his_even,
							i = parseInt(c.his_win / d * 100),
							j = parseInt(c.his_lost / d * 100),
							k = parseInt(c.his_even / d * 100);
						if ($("#homeWin").parent().next().find(".per-1").css("width", i + "%"), $("#guestWin").parent().next().find(".per-3").css("width", j + "%"), $("#evenWin").parent().next().find(".per-2").css("width", k + "%"), c.his_desc && c.his_desc.length > 0) {
							var l = c.his_desc,
								m = [];
							$.each(l, function(a, b) {
								m.push('<div class="ls-tips">' + b + "</div>")
							}), $("#matchDesc").html(m.join(""))
						}
					} else $(".lsjf-c1").hide();
					var n = c.history_matchs,
						o = c.home_matchs,
						p = c.guest_matchs;
					c.history_matchs && n.length > 0 ? b($("#historyMatchs"), n) : $(".hisjf").hide(), c.history_matchs && (0 != n.length || c.his_win && "" != c.his_win) || ($(".lsjf-con").hide(), g = !0, f && e && $(".sq_FX").html('<div class="noRecord"><div class="icon noGame"></div><div class="txtDesc"><p class="txtTitle">暂未获取到分析详情</p></div></div>')), c.guest_win_desc ? ($("#guestCapWin").html(c.guest_win_desc + "<br/>" + c.guest_cap_win + " " + c.guest_win_per_desc), $("#homeCapWin").html(c.home_win_desc + "<br/>" + c.home_win_per_desc + " " + c.home_cap_win), $("#guestCapWin").parent().next().find(".precent-2").css("width", c.guest_per + "%"), $("#homeCapWin").parent().next().find(".precent-1").css("width", c.home_per + "%")) : $("#jqtxt").hide(), c.home_matchs && 0 != o.length || c.guest_matchs && 0 != p.length || $(".jqss-con").hide(), c.home_matchs && o.length > 0 && b($("#homeHis"), o), c.guest_matchs && p.length > 0 && b($("#guestHis"), p)
				},
				errorCallback: function() {}
			})
		}
		var b = "",
			c = "",
			d = "",
			e = (T.Storage.get("leagueMatch"), !1),
			f = !1,
			g = !1,
			h = function(a) {
				var b;
				for (b in a) return !1;
				return !0
			},
			i = function() {
				$(".choise-con").click(function(a) {
					a.stopPropagation(), $(this).find(".chiose-up").toggleClass("chiose-down"), $(".chang-nav").toggleClass("hide")
				}), $(document).click(function() {
					"block" == $(".chang-nav").css("display") && ($(".chang-nav").addClass("hide"), $(".choise-con").find(".chiose-up").removeClass("chiose-down"))
				}), $(".chang-nav li").click(function() {
					var a = $(this).text();
					$(this).addClass("on").siblings().removeClass("on"), $(".choise-txt").text(a);
					var b = $(this).attr("data-count"),
						c = $("#historyMatchs tr").length;
					c -= $("#historyMatchs tr.ii").length, c > b ? $.each($("#historyMatchs tr"), function(a, c) {
						a >= b && ($(c).hide(), $(c).addClass("ii"))
					}) : $.each($("#historyMatchs tr"), function(a, c) {
						c && a < b && ($(c).show(), $(c).removeClass("ii"))
					})
				}), $(".xuan-btn").click(function() {
					$(this).toggleClass("xuan-no")
				}), $(".sai-nav li").click(function() {
					if (!$(this).hasClass("on")) {
						$(this).addClass("on").siblings().removeClass("on");
						var e = $(this).index();
						$(this).parent().hasClass("hisMatch") ? 1 == e ? (b = 1, d = 0, c = "") : (b = 0, d = 0, c = "") : $(this).parent().hasClass("homeMatch") ? 1 == e ? (d = 1, c = "") : (d = 0, c = "") : 1 == e ? (c = 1, d = "", b = "") : (c = 0, d = "", b = ""), a()
					}
				})
			};
		return {
			contrastsInit: function() {
				T.Util.xmlHttpRequest({
					reqUrl: "/app-web/api/match/qry_match_analysis?match_id=" + T.Util.getPara("m_id"),
					type: "get",
					callback: function(a) {
						if (console.log(a), !a.qry_match_analysis || h(a.qry_match_analysis)) return $(".sldb-con").hide(), $(".jfpm-con").hide(), e = !0, void(f && g && $(".sq_FX").html('<div class="noRecord"><div class="icon noGame"></div><div class="txtDesc"><p class="txtTitle">暂未获取到分析详情</p></div></div>'));
						var b = a.qry_match_analysis;
						b.analysis_desc && "" != b.analysis_desc || $(".sldb-con").hide(), $("#homeS").html(b.home_per), $("#homeS").parent().next().find(".precent-1").width(b.home_per + "%"), $("#guestS").html(b.guest_per), $("#guestS").parent().next().find(".precent-2").width(b.guest_per + "%"), $("#analysisText").html(b.analysis_desc), $("#homeZL").html(b.home_zl_desc + " " + b.home_zl_point), $("#homeZL").parent().next().find(".precent-1").width(b.home_zl_per + "%"), $("#guestZL").html(b.guest_zl_point + " " + b.guest_zl_desc), $("#guestZL").parent().next().find(".precent-2").width(b.guest_zl_per + "%"), $("#homeZK").html(b.home_zk_desc + " " + b.home_zk_point), $("#homeZK").parent().next().find(".precent-1").width(b.home_zk_per + "%"), $("#guestZK").html(b.guest_zk_point + " " + b.guest_zk_desc), $("#guestZK").parent().next().find(".precent-2").width(b.guest_zk_per + "%"), $("#homeAttack").html(b.home_attack_desc), $("#homeAttack").parent().next().find(".precent-1").width(b.home_attack_per + "%"), $("#guestAttack").html(b.guest_attack_desc), $("#guestAttack").parent().next().find(".precent-2").width(b.guest_attack_per + "%"), $("#homeDefend").html(b.home_defend_desc), $("#homeDefend").parent().next().find(".precent-1").width(b.home_defend_per + "%"), $("#guestDefend").html(b.guest_defend_desc), $("#guestDefend").parent().next().find(".precent-2").width(b.guest_defend_per + "%");
						var c = b.guest_ranks,
							d = b.home_ranks;
						if (0 == d.length && 0 == c.length) $(".jfpm-con").hide();
						else for (var i = [c, d], j = [
							[],
							[]
						], k = 0; k < i.length; k++) {
							for (var l = 0; l < i[k].length; l++) {
								var m = "",
									n = "";
								1 == l && (n = "tr-on"), 2 == l && (m = "tr-on");
								var o = [m, n];
								j[k].push(' <tr class="' + o[k] + '">\t\t\t\t\t\t<td width="16%">' + i[k][l].nums[0] + '</td>\t\t\t\t\t\t<td width="10%">' + i[k][l].nums[1] + '</td>\t\t\t\t\t\t<td width="10%">' + i[k][l].nums[2] + '</td>\t\t\t\t\t\t<td width="10%">' + i[k][l].nums[3] + '</td>\t\t\t\t\t\t<td width="10%">' + i[k][l].nums[4] + '</td>\t\t\t\t\t\t<td width="10%">' + i[k][l].nums[5] + '</td>\t\t\t\t\t\t<td width="10%">' + i[k][l].nums[6] + '</td>\t\t\t\t\t\t<td width="10%">' + i[k][l].nums[7] + "</td>\t\t\t\t\t\t<td>" + i[k][l].nums[8] + "</td>\t\t\t\t\t\t</tr>")
							}
							$("#homeRank").html(j[1].join("")), $("#guestRank").html(j[0].join(""))
						}
					},
					errorCallback: function() {}
				}), a(), T.Util.xmlHttpRequest({
					reqUrl: "/app-web/api/match/qry_future_matchs?match_id=" + T.Util.getPara("m_id"),
					type: "get",
					callback: function(a) {
						console.log(a);
						var b = function(a, b) {
								a.push("<tr><td>" + b.nums[0] + "</td>"), a.push('<td colspan="4">');
								for (var c = 1; c < 3; c++) for (var d = Array.prototype.slice.call(b.nums[c]), e = 0; e < d.length; e++)"赢" == d[e] || "大" == d[e] ? a.push('<span class="win-col">' + d[e] + "</span>") : a.push('<span class="lose-col">' + d[e] + "</span>"), 1 == c && e == d.length - 1 && a.push('</td><td colspan="4">');
								m.push("</td></tr>")
							},
							c = function(a, b) {
								$.each(b, function(b, c) {
									var d = c.home_team_name,
										e = c.guest_team_name;
									d = (d + "").length > 4 ? d.substr(0, 4) : d, e = (e + "").length > 4 ? e.substr(0, 4) : e, a.push('<tr>\t\t\t\t\t\t\t<td width="15%">' + c.league_name + '</td>\t\t\t\t\t\t\t<td width="20%">' + c.match_time.substr(2) + '</td>\t\t\t\t\t\t\t<td width="50%"><span data-id="' + c.home_team_id + '">' + d + '</span> VS <span data-id="' + c.guest_team_id + '">' + e + "</span></td>\t\t\t\t\t\t<td>" + c.match_date_diff + "</td>\t\t\t\t\t\t</tr>")
								})
							};
						if (!a.qry_future_matchs || h(a.qry_future_matchs)) return $(".lspl-con").hide(), void(f = !0);
						var d = a.qry_future_matchs,
							i = d.home_handicaps,
							j = d.guest_handicaps,
							k = d.home_results,
							l = d.guest_results,
							m = [],
							n = [];
						if (0 == i.length && 0 == j.length) $(".pldb").hide();
						else {
							for (var o = 0; o < 3; o++) i.length && m.push('<tr><td width="14%">' + i[o].nums[0] + '</td>\t\t\t\t\t\t<td width="10%">' + i[o].nums[1] + '</td>\t\t\t\t\t\t<td width="10%">' + i[o].nums[2] + '</td>\t\t\t\t\t\t<td width="10%">' + i[o].nums[3] + '</td>\t\t\t\t\t\t<td width="10%">' + i[o].nums[4] + '</td>\t\t\t\t\t\t<td width="10%">' + i[o].nums[5] + '</td>\t\t\t\t\t\t<td width="12%">' + i[o].nums[6] + '</td>\t\t\t\t\t\t<td width="10%">' + i[o].nums[7] + "</td>\t\t\t\t\t\t<td>" + i[o].nums[8] + "</td></tr>"), j.length && n.push('<tr><td width="14%">' + j[o].nums[0] + '</td>\t\t\t\t\t\t<td width="10%">' + j[o].nums[1] + '</td>\t\t\t\t\t\t<td width="10%">' + j[o].nums[2] + '</td>\t\t\t\t\t\t<td width="10%">' + j[o].nums[3] + '</td>\t\t\t\t\t\t<td width="10%">' + j[o].nums[4] + '</td>\t\t\t\t\t\t<td width="10%">' + j[o].nums[5] + '</td>\t\t\t\t\t\t<td width="12%">' + j[o].nums[6] + '</td>\t\t\t\t\t\t<td width="10%">' + j[o].nums[7] + "</td>\t\t\t\t\t\t<td>" + j[o].nums[8] + "</td></tr>");
							"" != k && k.nums.length > 0 && b(m, k), "" != l && l.nums.length > 0 && b(n, l)
						}
						$("#homeHand").html(m.join("")), $("#guestHand").html(n.join("")), m.length = 0, n.length = 0;
						var p = d.home_matchs,
							q = d.guest_matchs;
						0 == p.length && 0 == q.length ? $(".wlss-con").hide() : (c(m, p), c(n, q)), 0 == i.length && 0 == j.length && 0 == p.length && 0 == q.length && (f = !0, g && e && $(".sq_FX").html('<div class="noRecord"><div class="icon noGame"></div><div class="txtDesc"><p class="txtTitle">暂未获取到分析详情</p></div></div>')), $("#homeFuture").html(m.join("")), $("#guestFuture").html(n.join("")), $("#guestFuture span[data-id='" + T.Storage.get("leagueMatch").gid + "']").addClass("win-col"), $("#homeFuture span[data-id='" + T.Storage.get("leagueMatch").hid + "']").addClass("win-col")
					},
					errorCallback: function() {}
				}), console.log(T.Storage.get("leagueMatch")), $(".hName").html(T.Storage.get("leagueMatch").hn), $(".gName").html(T.Storage.get("leagueMatch").gn), FX.addLis()
			},
			isEmptyObj: h,
			addLis: i
		}
	}(),
	PLInfo = function() {
		var a = function() {
				$(".sq_PL .SK_listBOX li").off().Touch(function(a) {
					$(a).addClass("or").siblings().removeClass("or"), PLInfo.getData($(a).index())
				}), PLInfo.getData(0)
			},
			b = function(a) {
				"4" == a ? T.Util.xmlHttpRequest({
					type: "get",
					reqUrl: "/app-web/api/match/qry_match_tendency?match_id=" + m_id,
					callback: function(a) {
						PLInfo.doQXHtml(a.qry_match_tendency)
					}
				}) : T.Util.xmlHttpRequest({
					type: "get",
					reqUrl: "/app-web/api/odds/qry_odds?match_id=" + m_id + "&odds_type=" + a,
					callback: function(a) {
						PLInfo.doPLHtml(a.qry_odds.data)
					}
				})
			},
			c = function(a) {
				function b(a) {
					return "-" == a.substring(0, 1) ? '<span class="col-down">' + a + "</span>" : a
				}
				function c(a) {
					return "热" == a ? '<span class="col-up">' + a + "</span>" : a
				}
				$("#PLBox").hide();
				var d = [];
				if (!a.jc_amounts && !a.jc_rates) return d.push('<div class="noRecord"><div class="icon noGame"></div><div class="txtDesc"><p class="txtTitle">没有数据</p></div></div>'), void $("#PLQXBox").html(d.join("")).show();
				if (a.jc_amounts) {
					var e = a.jc_amounts;
					d.push('<div class="xing-box"><div class="xing-top"><h3 class="xing-title">竞彩投注倾向</h3><span class="xing-mon">' + a.sum_desc + '</span></div>\t\t\t<div class="xing-biao"><table class="xing-table"><thead><tr><td>选项</td><td>赔率</td><td>成交量</td><td>佣金</td><td>盈亏</td><td>比例</td></tr></thead><tbody>\t\t\t\t<tr><td><span class="xing-t1">' + e[0][0] + "</span></td><td>" + e[0][1] + "</td><td>" + e[0][2] + "</td><td>" + e[0][3] + "</td><td>" + b(e[0][4]) + "</td><td>" + b(e[0][5]) + '</td></tr>\t\t\t\t<tr><td><span class="xing-t1">' + e[1][0] + "</span></td>\t\t\t\t<td>" + e[1][1] + "</td>\t\t\t\t<td>" + e[1][2] + "</td>\t\t\t\t<td>" + e[1][3] + "</td>\t\t\t\t<td>" + b(e[1][4]) + "</td>\t\t\t\t<td>" + b(e[1][5]) + '</td></tr>\t\t\t<tr><td><span class="xing-t1">' + e[2][0] + "</span></td>\t\t\t<td>" + e[2][1] + "</td>\t\t\t<td>" + e[2][2] + "</td>\t\t\t<td>" + e[2][3] + "</td>\t\t\t<td>" + b(e[2][4]) + "</td>\t\t\t<td>" + b(e[2][5]) + "</td></tr></tbody></table></div></div>")
				}
				if (a.jc_rates) {
					var f = a.jc_rates;
					d.push('<div class="xing-box"><div class="xing-top"><h3 class="xing-title">投注比例对比</h3></div>\t\t\t\t<div class="xing-biao"><table class="xing-table"><thead>\t\t\t\t<tr><td>选项</td><td>主流公司投注比例</td><td>竞彩投注比例</td><td>冷热指数</td></tr></thead>\t\t\t\t<tbody><tr>\t\t\t\t<td><span class="xing-t1">' + f[0][0] + "</span></td>\t\t\t\t<td>" + f[0][1] + "</td>\t\t\t\t<td>" + f[0][2] + "</td>\t\t\t\t<td>" + c(f[0][3]) + '</td></tr>\t\t\t\t<tr><td><span class="xing-t1">' + f[1][0] + "</span></td>\t\t\t\t<td>" + f[1][1] + "%</td>\t\t\t\t<td>" + f[1][2] + "%</td>\t\t\t\t<td>" + c(f[1][3]) + '</td></tr>\t\t\t<tr><td><span class="xing-t1">' + f[2][0] + "</span></td>\t\t\t<td>" + f[2][1] + "</td>\t\t\t<td>" + f[2][2] + "</td>\t\t\t<td>" + c(f[2][3]) + "</td></tr></tbody></table>\t\t</div></div>")
				}
				$("#PLQXBox").html(d.join("")).show()
			},
			d = function(a) {
				$("#PLQXBox").hide();
				for (var b = [], c = [], d = 0, e = a.length; d < e; d++) {
					"-1" != a[d].company_id && c.push('<li data-id="' + a[d].company_id + '">' + a[d].company_name + "</li>");
					var f = "1" == a[d].win_odds_chg ? "col-red" : "0" == a[d].win_odds_chg ? "" : "col-blue",
						g = "1" == a[d].even_odds_chg ? "col-red" : "0" == a[d].even_odds_chg ? "" : "col-blue",
						h = "1" == a[d].lost_odds_chg ? "col-red" : "0" == a[d].lost_odds_chg ? "" : "col-blue",
						i = "百家欧赔" == a[d].company_name ? "" : "companyJianTou";
					b.push('<div class="pei-con">\t\t\t<h3 class="pei-title">' + a[d].company_name + '</h3>\t\t\t<div class="pei-intro ' + i + '" companyId=' + a[d].company_id + '>\t\t\t<div class="pei-page"><span class="page-tit">初赔</span><span>' + a[d].first_win_odds + "</span><span>" + a[d].first_even_odds + "</span><span>" + a[d].first_lost_odds + '</span></div>\t\t\t<div class="pei-page"><span class="page-tit">即时</span><span class="' + f + '">' + a[d].win_odds + '</span><span class="' + g + '">' + a[d].even_odds + '</span><span class="' + h + '">' + a[d].lost_odds + "</span></div>\t\t\t</div></div>")
				}
				b.length > 6 ? $(".pei-content .SK_tip_content").css("bottom", "") : $(".pei-content .SK_tip_content").css("bottom", "0"), $("#PLBox").html(b.join("")).show(), $("#companyUL").html(c.join("")), $(".companyJianTou").off().Touch(function(a) {
					$('#companyUL li[data-id="' + $(a).attr("companyId") + '"]').siblings().removeClass("on"), $('#companyUL li[data-id="' + $(a).attr("companyId") + '"]').addClass("on"), PLInfo.getPLChangeData($(a).attr("companyId"))
				})
			},
			e = function(a) {
				var b = $(".sq_PL .SK_listBOX li[class~='or']").attr("data-type");
				T.Util.xmlHttpRequest({
					type: "get",
					reqUrl: "/app-web/api/odds/qry_odds_chgs?company_id=" + a + "&match_id=" + m_id + "&odds_type=" + b + "&page_index=1&page_size=20",
					callback: function(a) {
						PLInfo.doPLChangeHtml(a.qry_odds_chgs, b), "0" == b || "3" == b ? ($("#positionDescription td").eq(0).html("胜"), $("#positionDescription td").eq(1).html("平"), $("#positionDescription td").eq(2).html("负"), $("#positionDescription td").eq(3).html("更新"), $("#historyDescription td").eq(1).html("胜"), $("#historyDescription td").eq(2).html("平"), $("#historyDescription td").eq(3).html("负").show()) : "1" == b ? ($("#positionDescription td").eq(0).html("水"), $("#positionDescription td").eq(1).html("盘口"), $("#positionDescription td").eq(2).html("水"), $("#positionDescription td").eq(3).html("更新"), $("#historyDescription td").eq(1).html("赢盘"), $("#historyDescription td").eq(2).html("走盘"), $("#historyDescription td").eq(3).html("输盘").show()) : "2" == b && ($("#positionDescription td").eq(0).html("大"), $("#positionDescription td").eq(1).html("盘口"), $("#positionDescription td").eq(2).html("小"), $("#positionDescription td").eq(3).html("更新"), $("#historyDescription td").eq(1).html("大球"), $("#historyDescription td").eq(2).html("小球"), $("#historyDescription td").eq(3).hide()), $(".sq_PL .SK_listBOX li[class~='or']").attr("data-type"), $("#PLChangeBox").show(), $(".content_wrap").hide(), $("#closePLDetailBox").off().Touch(function() {
							$("#PLChangeBox").hide(), $(".content_wrap").show()
						}), "inPlay_new.html" == pageFrom && ($(".sq_headerText").html("赔率详情"), $("#back").off().Touch(function() {
							"赔率详情" == $(".sq_headerText").html() ? ($("#PLChangeBox").hide(), $(".content_wrap").show(), $(".sq_headerText").html(T.Storage.get("inPlayLeagueName", 1))) : T.Util.back()
						}))
					}
				})
			};
		return {
			init: a,
			getData: b,
			doQXHtml: c,
			doPLHtml: d,
			doPLChangeHtml: function(a, b) {
				var c = a.his_data;
				if (c && 0 == c.length) $("#historyPLTable").parent().hide();
				else if (c && c.length > 0) {
					var d = [];
					for (i in c)"2" == b ? d.push("<tr><td>" + c[i].name + "<br>" + c[i].total_num + '场</td>\t\t\t\t<td><span class="pei-col1">' + Math.round(1e3 * parseFloat(c[i].win_num / c[i].total_num)) / 10 + "%</span><br>" + c[i].win_num + '场</td>\t\t\t\t<td><span class="pei-col3">' + Math.round(1e3 * parseFloat(c[i].lost_num / c[i].total_num)) / 10 + "%</span><br>" + c[i].lost_num + "场</td>\t\t\t\t</tr>") : d.push("<tr><td>" + c[i].name + "<br>" + c[i].total_num + '场</td>\t\t\t\t<td><span class="pei-col1">' + Math.round(1e3 * parseFloat(c[i].win_num / c[i].total_num)) / 10 + "%</span><br>" + c[i].win_num + '场</td>\t\t\t\t<td><span class="pei-col2">' + Math.round(1e3 * parseFloat(c[i].even_num / c[i].total_num)) / 10 + "%</span><br>" + c[i].even_num + '场</td>\t\t\t\t<td><span class="pei-col3">' + Math.round(1e3 * parseFloat(c[i].lost_num / c[i].total_num)) / 10 + "%</span><br>" + c[i].lost_num + "场</td>\t\t\t\t</tr>");
					$("#historyPLTable").html(d.join("")), $("#historyPLTable").parent().show()
				}
				var e = a.data;
				if (e && 0 == e.length) $("#changePLTable").parent().hide();
				else if (e && e.length > 0) {
					var d = [];
					for (i in e) {
						var f = "1" == e[i].win_odds_chg ? "pei-col1" : "-1" == e[i].win_odds_chg ? "pei-col2" : "",
							g = "1" == e[i].even_odds_chg ? "pei-col1" : "-1" == e[i].even_odds_chg ? "pei-col2" : "",
							h = "1" == e[i].lost_odds_chg ? "pei-col1" : "-1" == e[i].lost_odds_chg ? "pei-col2" : "",
							j = "",
							k = "",
							l = "";
						"0" == b || "3" == b ? (j = e[i].win_odds, k = e[i].even_odds, l = e[i].lost_odds) : "1" == b ? (j = e[i].win_odds, k = e[i].cap_type_name, l = e[i].lost_odds) : "2" == b && (j = e[i].win_odds, k = e[i].cap_type_name, l = e[i].lost_odds), d.push('<tr><td><span class="' + f + '">' + j + '</span></td>\t\t\t\t\t<td><span class="' + g + '">' + k + '</span></td>\t\t\t\t<td><span class="' + h + '">' + l + '</span></td>\t\t\t\t<td><span class="pei-update">' + e[i].update_time.split(" ")[0] + "<br>" + e[i].update_time.split(" ")[1] + "</span></td>\t\t\t\t</tr>")
					}
					$("#changePLTable").html(d.join("")), $("#changePLTable").parent().show()
				}
				$("#companyUL li").off().Touch(function(a) {
					$(a).siblings().removeClass("on"), $(a).addClass("on"), PLInfo.getPLChangeData($(a).attr("data-id"))
				})
			},
			getPLChangeData: e
		}
	}();