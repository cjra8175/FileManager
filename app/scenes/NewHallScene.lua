--define(SERVER_TYPE_HND,        1).     %%百家乐百人场
--define(SERVER_TYPE_NORMAL,     2).     %%百家乐普通场
--define(SERVER_TYPE_VIP,        3).     %%百家乐私人场
--define(SERVER_TYPE_MULTAB,     4).     %%百家乐多桌场

--define(SERVER_TYPE_LHD_HND,    11).    %%龙虎斗百人场
--define(SERVER_TYPE_LHD_NORMAL, 12).    %%龙虎斗普通场
--define(SERVER_TYPE_LHD_VIP,    13).    %%龙虎斗私人场
--define(SERVER_TYPE_LHD_MULTAB, 14).    %%龙虎斗多桌场

--define(SERVER_TYPE_SICBO_HND,    21).  %%骰宝百人场
--define(SERVER_TYPE_SICBO_NORMAL, 22).  %%骰宝普通场
--define(SERVER_TYPE_SICBO_VIP,    23).  %%骰宝私人场
--define(SERVER_TYPE_SICBO_MULTAB, 24).  %%骰宝多桌场

--define(SERVER_TYPE_YXX_HND,    31).    %%鱼虾蟹百人场
--define(SERVER_TYPE_YXX_NORMAL, 32).    %%鱼虾蟹普通场
--define(SERVER_TYPE_YXX_VIP,    33).    %%鱼虾蟹私人场
--define(SERVER_TYPE_YXX_MULTAB, 34).    %%鱼虾蟹多桌场

local HallScene = class("HallScene", function()
    return display.newScene("HallScene")
end)

SubLayerHelper = require("app.scenes.hall.sub_layer.sub_layer_helper")
BankHelper = require("app.dialog.a_new.bank.bank_helper")

GAME_TYPE = 0
ROOM_TYPE = 0

local prefix = "hall/"
local require_prefix = "app.scenes.hall."

function HallScene:ctor()
	-- body
	local layer = display.newLayer()
    self:addChild(layer,-10)
    layer:setKeypadEnabled(true)
    layer:addNodeEventListener(cc.KEYPAD_EVENT, function(event)
        if event.key == "back" then  --返回键
            print("back")  --弹出一个对话框，点击yes退出账号
            if not Win:Empty() then
                Win:Pop()
                return
            else
                alert({content = RES_STRING("quit_game_desc")}, {RES_STRING("cancel"),RES_STRING("confirm")},nil, function (tag)
                	-- body
                	if tag == 2 then
                		app:exit()
                	end
                end)
            end
        end
    end)
    
    bac_data.room_type = 0

    display.newSprite("baccarat/hall/bg2.png"):addTo(self):align(display.LEFT_BOTTOM, 0, 0):setScaleX(2)
	-- self.table_root = display.newNode():addTo(self)
	display.newSprite("baccarat/hall/bg1.png"):addTo(self):align(display.LEFT_TOP, 0, display.height):setScaleX(2)

    appEvents.register(self, "baccarat_room_list","EmptyWindow", "AddWindow","SWITCH_GAME","ROOM_TYPE",
		"UPDATE_INFO","CANCEL_PHOTO","BAC_SOCKET_CLOSE","LOGIN_ROOM_ERROR","KICK_OUT", "UPDATE_UNREAD_FEEDBACK_REPLY","SHOW_LAYER","SHOW_HALL_TAB","SEND_OK","APP_RECIEVE_NOTICE_PUSH")
end

function HallScene:onEnter()
    print("onEnter....")
    -- body
    self:init()
    -- BCRSocketManager.send_handler:get_room_list(11, 0)
    if self_user_data.money < 1000 and IsAppTest() then 
        BCRSocketManager.send_handler:send_ok(3000 * 100)
        self:performWithDelay(function()
            alert({content = string.format(RES_STRING("bankrupt_desc"), 3000)}, {RES_STRING("confirm")})
            BCRSocketManager.send_handler:send_updateinfo()
        end, 1)
    end

    if os.time() - self_user_data.last_get_feedback_reply_time > 60 then 
        php.get_feedback_reply()
        self_user_data.last_get_feedback_reply_time = os.time()
    end

    if IsAppTest() then 
        self.switch:setEnabled(false)
        appEvents.send("SWITCH_GAME", 3)
    else
        if GAME_TYPE ~= 0 and ROOM_TYPE ~= 0 then
            print("GAME_TYPE ="..GAME_TYPE)
            -- if GAME_TYPE == 3 then 
            --     GAME_TYPE = 2 
            -- elseif GAME_TYPE == 4 then 
            --     GAME_TYPE = 1
            -- elseif GAME_TYPE == 1 then 
            --     GAME_TYPE = 3
            -- elseif GAME_TYPE == 2 then 
            --     GAME_TYPE = 4 
            -- end
            self.switch:updateGameType(GAME_TYPE, function ( ... )
                -- body
                self.roomTable:updateRoomType(ROOM_TYPE)
            end)
        else
            self.switch:updateGameType(3)
        end
    end

    self:register_push_token()

    self:get_notice()
end


function HallScene:init()

    --适配iphoneX
    local iPXOffset = 0
    if ScreenAdapter.is_iphone_10_size == true then
        iPXOffset = 100
    end
	-- body
    self.top = require(require_prefix.."top_node").new():addTo(self,1):align(display.LEFT_BOTTOM, 0, 505 + iPXOffset)

    self.switch = require(require_prefix.."game_switch").new():addTo(self,1):align(display.LEFT_BOTTOM, 0, 449 + iPXOffset)

    self.bottom  = require(require_prefix.."bottom_node").new(self):addTo(self,SceneDepthConfig.SCENE_UP_UI_LAYER + 1):align(display.LEFT_BOTTOM, 0, 0)

    self.roomTable = require(require_prefix.."room_table").new(self,449 + iPXOffset):addTo(self):align(display.LEFT_BOTTOM, 0, self.bottom:getHeight())

    self.switch:updateGameType(2)

    --多桌重连逻辑
    if self_user_data.login_type == 3 then
        self:performWithDelay(function ( ... )
            Win.Close("app.dialog.a_new.notice")
            self.switch:updateGameType(1)
            self.roomTable:show_multi_table()
        end,1)
    else
        -- appvar.push_data = require("app.interface.system_interface").get_push_sky_road()
        self:performWithDelay(function ( ... )
            if appvar.push_data ~= "" then
                local jsonData = json.decode(appvar.push_data)
                self:enter_sky_road(jsonData)
            end
        end,1)
    end
end

function HallScene:enter_sky_road(jsonData)

    Win.Close("app.dialog.a_new.notice")
    -- body
    dump(jsonData)
    appvar.push_data = ""
    local gameType = tonumber(jsonData["game-type"])
    local roomID = tonumber(jsonData["room-id"])
    local gameLevel = tonumber(jsonData["level"])
    local serverID = tonumber(jsonData["server-id"])
    if gameType == 4 then
        self_user_data.multi_table_settings = {}
        self_user_data.multi_table_settings[1] = gameLevel
        self.roomTable:show_multi_table()
    elseif gameType == 1 or gameType == 2 then
        Win.unwait()
        local param = {}
        param.server_id = serverID
        param.room_id = roomID
        param.user_id = self_user_data.user_id
        param.user_name = self_user_data.user_name
        BCRSocketManager.send_handler:login_room(param)
    elseif gameType == 11 or gameType == 12 then
        Win.unwait()
        local param = {}
        param.server_id = serverID
        param.room_id = roomID
        param.user_id = self_user_data.user_id
        param.user_name = self_user_data.user_name
        BCRSocketManager.send_handler:login_room(param)
    elseif gameType == 21 or gameType == 22 then
        Win.unwait()
        local param = {}
        param.server_id = serverID
        param.room_id = roomID
        param.user_id = self_user_data.user_id
        param.user_name = self_user_data.user_name
        BCRSocketManager.send_handler:login_room(param)
    elseif gameType == 31 or gameType == 32 then
        Win.unwait()
        local param = {}
        param.server_id = serverID
        param.room_id = roomID
        param.user_id = self_user_data.user_id
        param.user_name = self_user_data.user_name
        BCRSocketManager.send_handler:login_room(param)
    end

end

function HallScene:handle_app_event(name, args)
    local data = args[1]
    if "baccarat_room_list" == name then
        self:hide_loading()
        self.roomTable:updateTable(data)
    elseif "EmptyWindow" == name then
        self.roomTable:setTableViewTouch(Win.Empty())
    elseif "AddWindow" == name then
        self.roomTable:setTableViewTouch(Win.Empty())
    elseif "UPDATE_INFO" == name then
        if self and self.top then
            self.top:updateMoney()
            self.top:updateName()
        end
    elseif "CANCEL_PHOTO" == name then
        self.top:updateAvatar()
    elseif name == "BAC_SOCKET_CLOSE" then
        --app:server_close()
        if not self.is_kick_out then
            app:enter_baccarat_loading_scene()
        end
    elseif name == "KICK_OUT" then
        self.is_kick_out = true
        alert({content = RES_STRING("login_other_place")}, {RES_STRING("confirm")}, nil, function(tag)
            app:enter_baccarat_login()  
        end)
    elseif name == "LOGIN_ROOM_ERROR" then
        Win.unwait()
        --
        if IsVisiter() then
            app:show_visiter()
        else
            if IsAppTest() then
                alert({content = RES_STRING("money_not_enough_desc_1")}, {RES_STRING("confirm")}, nil)
            else
                alert({content = RES_STRING("money_not_enough_desc_2")}, {RES_STRING("cancel"),RES_STRING("charge_now")}, nil, function(tag)
                    if tag == 2 then
                        Win.Add("app.scenes.hall.bank_layer",true)
                    end
                end)
            end
        end
    elseif name == "UPDATE_UNREAD_FEEDBACK_REPLY" then 
        print("self_user_data.unread_feedback_reply", self_user_data.unread_feedback_reply)
        self.bottom:updateRedHoodState(self_user_data.unread_feedback_reply)
    elseif name == "SHOW_LAYER" then
        require("app.components.web_viewer").remove_web_page()
        if self.layer then
            self.layer:removeSelf()
            self.layer = nil
        end
        if data ~= "hall" then
            self.roomTable:hide()
            self.layer = require(require_prefix..data).new(self):addTo(self,SceneDepthConfig.SCENE_UP_UI_LAYER)
        else
            self.roomTable:show()
        end
    elseif name == "SWITCH_GAME" then
        GAME_TYPE = args[1]
    elseif name == "ROOM_TYPE" then
        ROOM_TYPE = args[1]
    elseif name == "SHOW_HALL_TAB" then
        local tag = args[1]
        self.bottom:handleBtnEvent(tag)
    elseif name == "SEND_OK" then
        local billingIndex = args[1]
        local money_list = {50, 120, 400, 2500}
        BCRSocketManager.send_handler:send_ok(money_list[billingIndex] * 100)
        local scheduler = require(cc.PACKAGE_NAME .. ".scheduler")
        scheduler.performWithDelayGlobal(function()
            alert({content = string.format(RES_STRING("purchase_complete_desc"), money_list[billingIndex])}, {RES_STRING("confirm")})
            BCRSocketManager.send_handler:send_updateinfo()
        end, 1)
    elseif name == "APP_RECIEVE_NOTICE_PUSH" then
        --天路提醒
        print("APP_RECIEVE_NOTICE_PUSH")
        appvar.push_data = require("app.interface.system_interface").get_push_sky_road()
        self:performWithDelay(function ( ... )
            if appvar.push_data ~= "" then
                local jsonData = json.decode(appvar.push_data)
                self:enter_sky_road(jsonData)
            end
        end,1)
    end
end

function HallScene:register_push_token()
    if appvar.push_token == "" then
        appvar.push_token = require("app.interface.system_interface").get_push_token()
        print("push_token:"..appvar.push_token)
        if appvar.push_token ~= "" then
            php.add_push_token(appvar.devid, appvar.push_token)
        end
    end
end

function HallScene:get_notice()
    if appvar.show_notice == 1 then 
        Win.Add("app.dialog.a_new.notice")
        appvar.show_notice = 0
    end
end

function HallScene:show_loading()
    if not self._loading then
        self._loading = ActivityIndicator.create():addTo(self, SceneDepthConfig.ANIMATION)
    end
    self._loading:pos(display.cx, display.cy)
    self._loading:scale(.5)
    return self._loading
end

function HallScene:hide_loading()
    if self._loading then
        self._loading:removeFromParent()
        self._loading = nil
    end
end

return HallScene