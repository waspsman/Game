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

        var p1 = this.choiceP.create(game.world.width - 700, game.world.height - 140, 'p1');
        var cancleP = this.choiceP.create(game.world.width - 700, game.world.height - 110, 'cancleP');

        cancleP.inputEnabled = true;
        cancleP.events.onInputDown.add(this.canCle, this);
    },

    eventOxygen: function() {

    },
    eventIv: function() {

    },
    eventMed: function() {

    },
    eventVs: function() {

    },
    canCle: function() {
        this.choiceP.destroy();
    }

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