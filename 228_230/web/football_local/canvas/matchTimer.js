/* !v1-1.0.0.js 2018-01-10 */

function PlayTimer(a, b, c) {
	this.timerStartFlag = Math.random(), this.halfTimerFlag = Math.random(), this.firstHalfFlag = Math.random(), this.secondHalfFlag = Math.random(), this.mId = c, this.mStatus = a, this.second = b, this.firstTimerLoading = !0, this.secondTimerLoading = !0, this.halfTimerLoading = !0
}
PlayTimer.prototype.timerStart = function() {
	clearInterval(this.timerStartFlag);
	var a = this;
	this.timerStartFlag = setInterval(function() {
		a.timeAdd(a)
	}, 1e3)
},
PlayTimer.prototype.timeAdd = function(a) {
	var b = $("div[m_id='" + a.mId + "'] .rTime");
	if ($("article.timeDown").length && a.mId == T.Util.getPara("m_id") && (b = $("article.timeDown")), $(b).length && "-1" != $(b).attr("value")) {
		var c = $(b).attr("value");
		if (c = parseInt(c) + 1, $(b).attr("value", c), $(b).html(a.parseRtimeToSecond(c, a.mStatus)), c >= 2580 && "2" == a.mStatus && a.firstTimerLoading) a.firstTimerLoading = !1, a.firstHalfFlag = setInterval(function() {
			a.getPlayStatus(a)
		}, 1e4), $("article.timeDown").length && a.mId == T.Util.getPara("m_id") && ($("div.com").has($("ul[p_type='10']")).remove(), $(".pay-list").find("li[p_type='10']").remove(), $(".selection-count").html($("#inplay li.on").length));
		else if (c >= 5280 && "4" == a.mStatus && a.secondTimerLoading) a.secondTimerLoading = !1, a.secondHalfFlag = setInterval(function() {
			a.getPlayStatus(a)
		}, 1e4);
		else if ("3" == a.mStatus && a.halfTimerLoading) a.halfTimerLoading = !1, a.halfTimerFlag = setInterval(function() {
			a.getPlayStatus(a)
		}, 3e4);
		else if (c >= 5280 && "4" == a.mStatus) if ($("article.timeDown").length && a.mId == T.Util.getPara("m_id")) $("#inplay").empty().append("<div class='no_betList'>当前比赛已停止竞猜</div>"), $(".pay-list").find("li").remove(), $(".selection-count").html(0);
		else if ("ground_match" == Buy.fromtype) {
			$(".playInfoWrap[m_id='" + a.mId + "']").find(".betInfoWrap").hide();
			var d = $(".playInfoWrap[m_id='" + a.mId + "']").find(".bet_cite");
			$.each(d, function(a, b) {
				$(b).find(".locked").length || $(b).append("<span class='locked'>--</span>"), $(b).removeClass("on")
			}), $(".buy-list").find("li.betRecordLi[m_id='" + a.mId + "']").remove();
			Buy.obj.find(".codes.on")
		}
	}
},
PlayTimer.prototype.getPlayStatus = function(a) {
	return ;
	T.Util.xmlHttpRequest({
		type: "get",
		reqUrl: "/web/services/match/state.json?m_id=" + a.mId + "&random=" + Math.random(),
		callback: function(b) {
			if (void 0 !== b.res_data && b.res_data.length && parseInt(b.res_data[0].m_status) >= parseInt(a.mStatus)) {
				"2" == a.mStatus ? (clearInterval(a.firstHalfFlag), a.firstTimerLoading = !0) : "4" == a.mStatus ? (clearInterval(a.secondHalfFlag), a.secondTimerLoading = !0) : "3" == a.mStatus && (clearInterval(a.halfTimerFlag), a.halfTimerLoading = !0), clearInterval(a.timerStartFlag), a.mId = b.res_data[0].m_id, a.mStatus = b.res_data[0].m_status, a.second = b.res_data[0].r_time;
				var c = $("#inplay").length;
				$("article.timeDown").length && a.mId == T.Util.getPara("m_id") ? ($("article.timeDown").html(a.init(a)), $("article.timeDown").attr("id", a.mId + "|" + a.second + "|" + a.mStatus)) : ($("div[m_id='" + a.mId + "'] .rTime").html(a.init(a)), $("div[m_id='" + a.mId + "']").attr("id", a.mId + "|" + a.second + "|" + a.mStatus)), -1 != "2348".indexOf(a.mStatus) && a.timerStart()
			}
			if ("5" == a.mStatus) {
				if (clearInterval(a.firstHalfFlag), clearInterval(a.secondHalfFlag), clearInterval(a.halfTimerFlag), clearInterval(a.timerStartFlag), "undefined" != typeof matchEvent && c && a.mId == T.Util.getPara("m_id") && (console.log("调用妹子FINISHED事件"), matchEvent("FINISHED", "", "")), "inPlayList.html" == pageFrom) {
					var d = $("div.gameItem[m_id='" + a.mId + "']").attr("l_id"),
						e = $("div.gameItem[m_id='" + a.mId + "']").attr("f_char");
					if ("undefined" != typeof groundLeaguesMap && groundLeaguesMap.size() && groundLeaguesMap.containsKey(e)) for (var f = groundLeaguesMap.get(e), g = 0; g < f.length; g++) {
						var h = f[g];
						if (h.l_id == d) {
							if (h.count > 1) f[g].count--;
							else {
								if ("undefined" != typeof selectedLeagues && selectedLeagues.length) for (var i = 0; i < selectedLeagues.length; i++) if (selectedLeagues[g] == d) {
									selectedLeagues.splice(i, 1);
									break
								}
								f.splice(g, 1), 0 == f.length && groundLeaguesMap.remove(e)
							}
							break
						}
					}
					$("div[m_id='" + a.mId + "']").remove()
				}
				a.mId == T.Util.getPara("m_id") && $("article.timeDown").html("比赛结束")
			} else "3" == b.res_data[0].m_status && "undefined" != typeof matchEvent && c && a.mId == T.Util.getPara("m_id") && (console.log("调用妹子HALF_END事件"), matchEvent("HALF_END", "", ""))
		},
		errorCallback: function(a) {}
	})
},
PlayTimer.prototype.clearTimer = function() {
	window.clearInterval(this.timerStartFlag), window.clearInterval(this.halfTimerFlag), window.clearInterval(this.firstHalfFlag), window.clearInterval(this.secondHalfFlag)
},
PlayTimer.prototype.parseRtimeToSecond = function(a, b) {
	var a = parseInt(a);
	if ("2" == b && a > 2700) return "45+";
	if ("4" == b && a > 5400) return "90+";
	if ("3" == b) return "半场结束";
	var c = parseInt((a / 60).toString().split(".")[0]),
		d = a % 60;
	return c = c < 10 ? "0" + c : c, d = d < 10 ? "0" + d : d, /\d+/.test("" + c) && /\d+/.test("" + d) ? c + ":" + d : ""
},
PlayTimer.prototype.init = function(a) {
	return "1" == a.mStatus ? "未开始" : -1 != "248".indexOf(a.mStatus) ? a.parseRtimeToSecond(a.second, a.mStatus) : "3" == a.mStatus ? "半场结束" : "5" == a.mStatus ? "已结束" : "6" == a.mStatus ? "比赛已取消" : "7" == a.mStatus ? "比赛改期" : "9" == a.mStatus ? "点球" : "10" == a.mStatus ? "暂停" : "11" == a.mStatus ? "腰斩" : "12" == a.mStatus ? "推迟开赛" : void 0
};