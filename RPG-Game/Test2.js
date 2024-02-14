(function() {
	Galv.MBG.v = Number(PluginManager.parameters('Galv_MessageBackground')["Image Variable ID"]);
	Galv.MBG.s = Number(PluginManager.parameters('Galv_MessageBackground')["Disable Switch ID"]);
	Galv.MBG.disable = false;
	Galv.MBG.window = null;
	

Galv.MBG.Scene_Map_create = Scene_Map.prototype.create;
Scene_Map.prototype.create = function() {
	Galv.MBG.disable = false;
	Galv.MBG.window = null;
	Galv.MBG.Scene_Map_create.call(this);
};


// ---------------- WINDOW MESSAGE

// WINDOW MESSAGE START MESSAGE - MOD
Galv.MBG.Window_Message_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
	// Create graphic when window is displayed
	if (Galv.Mstyle.target) {
		Galv.MBG.disable = true;
	} else {
		Galv.MBG.disable = false;
	};
	
	Galv.MBG.window = this;
	Galv.MBG.Window_Message_startMessage.call(this);
};

// WINDOW MESSAGE SET BACKGROUND TYPE

Galv.MBG.Window_Message_setBackgroundType = Window_Message.prototype.setBackgroundType;
Window_Message.prototype.setBackgroundType = function(type) {
	if (Galv.Mstyle.target) {
		this.opacity = Galv.Mstyle.opacity;
	} else if (!$gameSwitches.value(Galv.MBG.s)) {
		this.opacity = 0;
		this.hideBackgroundDimmer();
		return;
	};
	Galv.MBG.Window_Message_setBackgroundType.call(this,type);
};



// ---------------- SCENE MAP

Galv.MBG.Scene_Map_createWindowLayer = Scene_Map.prototype.createWindowLayer;
Scene_Map.prototype.createWindowLayer = function() {
	this._msgBgSprite = new Sprite_GalvMsgBg();
	this._msgBgSprite.z = -1000;
	this.addChild(this._msgBgSprite);
	Galv.MBG.Scene_Map_createWindowLayer.call(this);
};


// ---------------- SCENE BATTLE

Galv.MBG.Scene_Battle_createWindowLayer = Scene_Battle.prototype.createWindowLayer;
Scene_Battle.prototype.createWindowLayer = function() {
	this._msgBgSprite = new Sprite_GalvMsgBg();
	this._msgBgSprite.z = -1000;
	this.addChild(this._msgBgSprite);
	Galv.MBG.Scene_Battle_createWindowLayer.call(this);
};

})();