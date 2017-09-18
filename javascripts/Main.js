var Stages = {};

Stages.Menu = function(game) {
    var text1;
    var text2;
    var text3;
};

Stages.Menu.prototype = {
    create: function() {
        this.game.stage.backgroundColor = '#000';
        text1 = this.add.text(10, 10, '1. Blue', { fill: "#ffffff" });
        text2 = this.add.text(10, 40, '2. Red', { fill: "#ffffff" });
        text3 = this.add.text(10, 70, 'Start Game', { fill: "#ffffff" });

        text1.inputEnabled = true;
        text1.events.onInputDown.add(this.blue, this);

        text2.inputEnabled = true;
        text2.events.onInputDown.add(this.red, this);

        text3.inputEnabled = true;
        text3.events.onInputDown.add(this.play, this);
    },
    blue: function() {
        this.state.start('Blue');
    },
    red: function() {
        this.state.start('Red');
    },
    play: function() {
        this.state.start('play');
    }
};

Stages.play = function(game) {
    var text;
};

Stages.play.prototype = {
    preload: function() {
        game.load.image('bg', './photo/bg.png');
    },
    create: function() {
        game.add.sprite(150, 150, 'bg');
    }
};

Stages.Red = function(game) {
    var text;
};

Stages.Red.prototype = {
    create: function() {
        this.game.stage.backgroundColor = "#ff0000";
        this.add.text(10, 10, 'Red Stage', { fill: '#fff' });
        text = this.add.text(this.world.centerX,
            this.world.centerY, 'Menu', { fill: '#fff' });

        text.inputEnabled = true;
        text.events.onInputDown.add(this.go, this);
    },
    go: function() {
        this.state.start('Menu');
    }
};

Stages.Blue = function(game) {
    var text;
};

Stages.Blue.prototype = {
    preload: function() {
        game.load.image('bg', './photo/bg.png')
    },
    create: function() {
        //this.game.stage.backgroundCol = "#051efa";
        game.add.sprite(0, 0, 'bg');
        this.add.text(10, 10, 'Blue Stage', { fill: '#fff' });
        text = this.add.text(this.world.centerX,
            this.world.centerY, 'Menu', { fill: '#fff' });

        text.inputEnabled = true;
        text.events.onInputDown.add(this.go, this);
    },
    go: function() {
        this.state.start('Menu');
    }
};

var game = new Phaser.Game(500, 500, Phaser.AUTO, 'game');
game.state.add('Menu', Stages.Menu);
game.state.add('Blue', Stages.Blue);
game.state.add('Red', Stages.Red);
game.state.add('play', Stages.play);
game.state.start('Menu');