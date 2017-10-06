var Stages = {};

Stages.Menu = function(game) {

    var text3;
};

Stages.Menu.prototype = {
    create: function() {
        this.game.stage.backgroundColor = '#000';

        text3 = this.add.text(536, 325, 'Start Game', { fill: "#ffffff" });

        text3.inputEnabled = true;
        text3.events.onInputDown.add(this.play, this);
    },

    play: function() {
        this.state.start('play');
    }
};



//##############################playGame#################################
Stages.play = function(game) {

};

Stages.play.prototype = {
    preload: function() {
        game.load.image('start', './photo/start.png');
        game.load.image('play', './photo/play.png')
    },
    create: function() {
        game.add.sprite(0, 0, 'start');
        var btnPlay = game.add.sprite(scaleNextW, scaleNextH, 'play');

        btnPlay.inputEnabled = true;
        btnPlay.events.onInputDown.add(this.roleCopd, this);
    },

    roleCopd: function() {
        this.state.start('roleCopd');
    }

};



//#############################Role##############################

Stages.roleCopd = function(game) {

};

Stages.roleCopd.prototype = {
    preload: function() {
        game.load.image('role', './photo/roleCOPD.png');
        game.load.image('next', './photo/next.png');
    },
    create: function() {
        game.add.sprite(0, 0, 'role');
        var btnNext = game.add.sprite(scaleNextW, scaleNextH, 'next');

        btnNext.inputEnabled = true;
        btnNext.events.onInputDown.add(this.copd1, this);
    },

    copd1: function() {
        this.state.start('copd1');
    }

};

Stages.copd1 = function(game) {

};

//#############################copd############################## 
Stages.copd1.prototype = {
    preload: function() {
        game.load.image('copd1', './photo/copd1.png');
        game.load.image('next', './photo/next.png');
        game.load.image('back', './photo/back.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'copd1');
        var btnNext = game.add.sprite(scaleNextW, scaleNextH, 'next');
        var btnBack = game.add.sprite(scaleBackW, scaleBackH, 'back');

        btnNext.inputEnabled = true;
        btnNext.events.onInputDown.add(this.copd2, this);
        btnBack.inputEnabled = true;
        btnBack.events.onInputDown.add(this.roleCopd, this);
    },
    copd2: function() {
        this.state.start('copd2');
    },
    roleCopd: function() {
        this.state.start('roleCopd');
    }
};

Stages.copd2 = function(game) {

};

Stages.copd2.prototype = {
    preload: function() {
        game.load.image('copd2', './photo/copd2.png');
        game.load.image('next', './photo/next.png');
        game.load.image('back', './photo/back.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'copd2');
        var btnNext = game.add.sprite(scaleNextW, scaleNextH, 'next');
        var btnBack = game.add.sprite(scaleBackW, scaleBackH, 'back');

        btnNext.inputEnabled = true;
        btnNext.events.onInputDown.add(this.copd3, this);

        btnBack.inputEnabled = true;
        btnBack.events.onInputDown.add(this.copd1, this);
    },

    copd3: function() {
        this.state.start('copd3');
    },

    copd1: function() {
        this.state.start('copd1');
    }

};

Stages.copd3 = function(game) {

};

Stages.copd3.prototype = {
    preload: function() {
        game.load.image('copd3', './photo/copd3.png');
        game.load.image('next', './photo/next.png');
        game.load.image('back', './photo/back.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'copd3');
        var btnNext = game.add.sprite(scaleNextW, scaleNextH, 'next');
        var btnBack = game.add.sprite(scaleBackW, scaleBackH, 'back');
        btnNext.inputEnabled = true;
        btnNext.events.onInputDown.add(this.copd4, this);

        btnBack.inputEnabled = true;
        btnBack.events.onInputDown.add(this.copd2, this);
    },

    copd4: function() {
        this.state.start('copd4');
    },

    copd2: function() {
        this.state.start('copd2');
    }
};

Stages.copd4 = function(game) {

};

Stages.copd4.prototype = {
    preload: function() {
        game.load.image('copd4', './photo/copd4.png');
        game.load.image('next', './photo/next.png');
        game.load.image('back', './photo/back.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'copd4');
        var btnNext = game.add.sprite(scaleNextW, scaleNextH, 'next');
        var btnBack = game.add.sprite(scaleBackW, scaleBackH, 'back');

        btnNext.inputEnabled = true;
        btnNext.events.onInputDown.add(this.playGame, this);

        btnBack.inputEnabled = true;
        btnBack.events.onInputDown.add(this.copd3, this);
    },

    playGame: function() {
        this.state.start('playGame');
    },

    copd3: function() {
        this.state.start('copd3');
    }
};

//##################################Game#########################################

Stages.playGame = function(game) {

};

Stages.playGame.prototype = {
    preload: function() {
        game.load.image('bg', './photo/bg.png');
        game.load.image('board', './photo/board.png');
        game.load.image('position', './photo/position.png');
        game.load.image('oxygen', './photo/oxygen.png');
        game.load.image('iv', './photo/iv.png');
        game.load.image('med', './photo/med.png');
        game.load.image('vs', './photo/vs.png');
        game.load.image('notify', './photo/notify.png')

        game.load.image('p1', './photo/position/1.png');
        game.load.image('p2', './photo/position/2.png');
        game.load.image('p3', './photo/position/3.png');
        game.load.image('cancleP', './photo/position/cancle.png');

        game.load.image('o1', './photo/oxygen/1.png');
        game.load.image('o2', './photo/oxygen/2.png');
        game.load.image('o3', './photo/oxygen/3.png');
        game.load.image('o4', './photo/oxygen/4.png');
        game.load.image('o5', './photo/oxygen/5.png');
        game.load.image('cancleO', './photo/oxygen/cancle.png');

        game.load.image('i1', './photo/iv/1.png');
        game.load.image('i2', './photo/iv/2.png');
        game.load.image('i3', './photo/iv/3.png');
        game.load.image('i4', './photo/iv/4.png');
        game.load.image('i5', './photo/iv/5.png');
        game.load.image('cancleI', './photo/iv/cancle.png');

        game.load.image('m1', './photo/med/1.png');
        game.load.image('m2', './photo/med/2.png');
        game.load.image('m3', './photo/med/3.png');
        game.load.image('m4', './photo/med/4.png');
        game.load.image('m5', './photo/med/5.png');
        game.load.image('cancleM', './photo/med/cancle.png');

        game.load.image('v1', './photo/vs/1.png');
        game.load.image('v2', './photo/vs/2.png');
        game.load.image('v3', './photo/vs/3.png');
        game.load.image('v4', './photo/vs/4.png');
        game.load.image('cancleV', './photo/vs/cancle.png');
    },
    create: function() {
        //add backgroud and borad
        game.add.sprite(0, 0, 'bg');
        game.add.sprite(0, 0, 'board');

        //add choice
        this.choice = game.add.group();

        //add buttons
        var notify = this.choice.create(150, game.world.height - 70, 'notify');
        notify.scale.setTo(0.65, 0.65);

        var position = this.choice.create(270, game.world.height - 70, 'position');
        position.scale.setTo(0.65, 0.65);

        var oxygen = this.choice.create(390, game.world.height - 70, 'oxygen');
        oxygen.scale.setTo(0.65, 0.65);

        var iv = this.choice.create(510, game.world.height - 70, 'iv');
        iv.scale.setTo(0.65, 0.65);

        var med = this.choice.create(630, game.world.height - 70, 'med');
        med.scale.setTo(0.65, 0.65);

        var vs = this.choice.create(750, game.world.height - 70, 'vs');
        vs.scale.setTo(0.65, 0.65);

        //add event
        notify.inputEnabled = true;
        notify.events.onInputDown.add(this.eventNotify, this);

        position.inputEnabled = true;
        position.events.onInputDown.add(this.eventPosition, this);

        oxygen.inputEnabled = true;
        oxygen.events.onInputDown.add(this.eventOxygen, this);

        iv.inputEnabled = true;
        iv.events.onInputDown.add(this.eventIv, this);

        med.inputEnabled = true;
        med.events.onInputDown.add(this.eventMed, this);

        vs.inputEnabled = true;
        vs.events.onInputDown.add(this.eventVs, this);
    },

    eventNotify: function() {

    },
    eventPosition: function() {
        this.choiceP = game.add.group();

        var p1 = this.choiceP.create(game.world.width - 700, game.world.height - 200, 'p1');
        var p2 = this.choiceP.create(game.world.width - 700, game.world.height - 170, 'p2');
        var p3 = this.choiceP.create(game.world.width - 700, game.world.height - 140, 'p3');
        var cancleP = this.choiceP.create(game.world.width - 700, game.world.height - 110, 'cancleP');

        p1.inputEnabled = true;
        p1.events.onInputDown.add(this.p1, this);
        p2.inputEnabled = true;
        p2.events.onInputDown.add(this.p2, this);
        p3.inputEnabled = true;
        p3.events.onInputDown.add(this.p3, this);
        cancleP.inputEnabled = true;
        cancleP.events.onInputDown.add(this.canCleP, this);
    },
    p1: function() {

    },
    p2: function() {

    },
    p3: function() {

    },
    canCleP: function() {
        this.choiceP.destroy();
    },


    eventOxygen: function() {
        this.choiceO = game.add.group();

        var o1 = this.choiceO.create(game.world.width - 590, game.world.height - 260, 'o1');
        var o2 = this.choiceO.create(game.world.width - 590, game.world.height - 230, 'o2');
        var o3 = this.choiceO.create(game.world.width - 590, game.world.height - 200, 'o3');
        var o4 = this.choiceO.create(game.world.width - 590, game.world.height - 170, 'o4');
        var o5 = this.choiceO.create(game.world.width - 590, game.world.height - 140, 'o5');
        var cancleO = this.choiceO.create(game.world.width - 590, game.world.height - 110, 'cancleO');

        o1.inputEnabled = true;
        o1.events.onInputDown.add(this.o1, this);
        o2.inputEnabled = true;
        o2.events.onInputDown.add(this.o2, this);
        o3.inputEnabled = true;
        o3.events.onInputDown.add(this.o3, this);
        o4.inputEnabled = true;
        o4.events.onInputDown.add(this.o4, this);
        o5.inputEnabled = true;
        o5.events.onInputDown.add(this.o5, this);
        cancleO.inputEnabled = true;
        cancleO.events.onInputDown.add(this.canCleO, this);
    },
    o1: function() {

    },
    o2: function() {

    },
    o3: function() {

    },
    o4: function() {

    },
    o5: function() {

    },
    canCleO: function() {
        this.choiceO.destroy();
    },


    eventIv: function() {
        this.choiceI = game.add.group();

        var i1 = this.choiceI.create(game.world.width - 450, game.world.height - 260, 'i1');
        var i2 = this.choiceI.create(game.world.width - 450, game.world.height - 230, 'i2');
        var i3 = this.choiceI.create(game.world.width - 450, game.world.height - 200, 'i3');
        var i4 = this.choiceI.create(game.world.width - 450, game.world.height - 170, 'i4');
        var i5 = this.choiceI.create(game.world.width - 450, game.world.height - 140, 'i5');
        var cancleI = this.choiceI.create(game.world.width - 450, game.world.height - 110, 'cancleI');

        i1.inputEnabled = true;
        i1.events.onInputDown.add(this.i1, this);
        i2.inputEnabled = true;
        i2.events.onInputDown.add(this.i2, this);
        i3.inputEnabled = true;
        i3.events.onInputDown.add(this.i3, this);
        i4.inputEnabled = true;
        i4.events.onInputDown.add(this.i4, this);
        i5.inputEnabled = true;
        i5.events.onInputDown.add(this.i5, this);
        cancleI.inputEnabled = true;
        cancleI.events.onInputDown.add(this.canCleI, this);
    },
    i1: function() {

    },
    i2: function() {

    },
    i3: function() {

    },
    i4: function() {

    },
    i5: function() {

    },
    canCleI: function() {
        this.choiceI.destroy();
    },


    eventMed: function() {
        this.choiceM = game.add.group();

        var m1 = this.choiceM.create(game.world.width - 370, game.world.height - 260, 'm1');
        var m2 = this.choiceM.create(game.world.width - 370, game.world.height - 230, 'm2');
        var m3 = this.choiceM.create(game.world.width - 370, game.world.height - 200, 'm3');
        var m4 = this.choiceM.create(game.world.width - 370, game.world.height - 170, 'm4');
        var m5 = this.choiceM.create(game.world.width - 370, game.world.height - 140, 'm5');
        var cancleM = this.choiceM.create(game.world.width - 370, game.world.height - 110, 'cancleM');

        m1.inputEnabled = true;
        m1.events.onInputDown.add(this.m1, this);
        m2.inputEnabled = true;
        m2.events.onInputDown.add(this.m2, this);
        m3.inputEnabled = true;
        m3.events.onInputDown.add(this.m3, this);
        m4.inputEnabled = true;
        m4.events.onInputDown.add(this.m4, this);
        m5.inputEnabled = true;
        m5.events.onInputDown.add(this.m5, this);
        cancleM.inputEnabled = true;
        cancleM.events.onInputDown.add(this.canCleM, this);
    },
    m1: function() {

    },
    m2: function() {

    },
    m3: function() {

    },
    m4: function() {

    },
    m5: function() {

    },
    canCleM: function() {
        this.choiceM.destroy();
    },


    eventVs: function() {
        this.choiceV = game.add.group();

        var v1 = this.choiceV.create(game.world.width - 220, game.world.height - 230, 'v1');
        var v2 = this.choiceV.create(game.world.width - 220, game.world.height - 200, 'v2');
        var v3 = this.choiceV.create(game.world.width - 220, game.world.height - 170, 'v3');
        var v4 = this.choiceV.create(game.world.width - 220, game.world.height - 140, 'v4');
        var cancleV = this.choiceV.create(game.world.width - 220, game.world.height - 110, 'cancleV');

        v1.inputEnabled = true;
        v1.events.onInputDown.add(this.v1, this);
        v2.inputEnabled = true;
        v2.events.onInputDown.add(this.v2, this);
        v3.inputEnabled = true;
        v3.events.onInputDown.add(this.v3, this);
        v4.inputEnabled = true;
        v4.events.onInputDown.add(this.v4, this);
        cancleV.inputEnabled = true;
        cancleV.events.onInputDown.add(this.canCleV, this);
    },
    v1: function() {

    },
    v2: function() {

    },
    v3: function() {

    },
    v4: function() {

    },
    canCleV: function() {
        this.choiceV.destroy();
    },


};


var scaleNextW = 750;
var scaleBackW = 710;
var scaleNextH = 400;
var scaleBackH = 360

var game = new Phaser.Game(900, 500, Phaser.AUTO, 'game');
game.state.add('Menu', Stages.Menu);
game.state.add('play', Stages.play);
game.state.add('roleCopd', Stages.roleCopd);
game.state.add('copd1', Stages.copd1);
game.state.add('copd2', Stages.copd2);
game.state.add('copd3', Stages.copd3);
game.state.add('copd4', Stages.copd4);
game.state.add('playGame', Stages.playGame);
game.state.start('Menu');