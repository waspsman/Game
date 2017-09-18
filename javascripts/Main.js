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
        var btnPlay = game.add.sprite(536, 325, 'play');

        btnPlay.inputEnabled = true;
        btnPlay.events.onInputDown.add(this.copd1, this);
    },

    copd1: function() {
        this.state.start('copd1');
    }

};

Stages.copd1 = function(game) {

};

Stages.copd1.prototype = {
    preload: function() {
        game.load.image('copd1', './photo/copd1.png');
        game.load.image('next', './photo/next.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'copd1');
        var btnNext = game.add.sprite(1000, 550, 'next');

        btnNext.inputEnabled = true;
        btnNext.events.onInputDown.add(this.copd2, this);
    },
    copd2: function() {
        this.state.start('copd2');
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
        var btnNext = game.add.sprite(1000, 550, 'next');
        var btnBack = game.add.sprite(100, 550, 'back');

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
        var btnNext = game.add.sprite(1000, 550, 'next');
        var btnBack = game.add.sprite(100, 550, 'back');

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
        var btnNext = game.add.sprite(1000, 550, 'next');
        var btnBack = game.add.sprite(100, 550, 'back');

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

var game = new Phaser.Game(900, 500, Phaser.AUTO, 'game');
game.state.add('Menu', Stages.Menu);
game.state.add('play', Stages.play);
game.state.add('copd1', Stages.copd1);
game.state.add('copd2', Stages.copd2);
game.state.add('copd3', Stages.copd3);
game.state.add('copd4', Stages.copd4);
game.state.add('playGame', Stages.playGame);
game.state.start('Menu');