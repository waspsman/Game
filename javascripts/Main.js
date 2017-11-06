var Stages = {};

Stages.Menu = function(game) {

    var text3;
};

Stages.Menu.prototype = {
    create: function() {
        this.game.stage.backgroundColor = '#000';

        text3 = this.add.text(450, 250, 'Start Game', { fill: "#ffffff" });
        text3.anchor.x = 0.5;
        text3.anchor.y = 0.5;

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
        game.add.plugin(PhaserInput.Plugin);
        var input = game.add.inputField(1000, 900);


        game.add.sprite(0, 0, 'start');
        var btnPlay = game.add.sprite(scaleNextW, scaleNextH, 'play');

        //var email = this.add.text(450, 250, 'Fuckkkkkkk', { fill: "#000000" });

        btnPlay.inputEnabled = true;
        btnPlay.events.onInputDown.add(this.roleCopd, this);

        //game.input.keyboard.addCallbacks(this, null, this.keyPress, null);

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
    var score;
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
        game.load.image('notify', './photo/notify.png');
        game.load.image('end', './photo/end.png');
        game.load.image('start2', './photo/start2.png');

        game.load.image('bar', './photo/bar.png');
        game.load.image('bar1', './photo/bar1.png');
        game.load.image('bar2', './photo/bar2.png');
        game.load.image('bar3', './photo/bar3.png');
        game.load.image('bar4', './photo/bar4.png');
        game.load.image('bar5', './photo/bar5.png');
        game.load.image('bar6', './photo/bar6.png');
        game.load.image('bar7', './photo/bar7.png');
        game.load.image('bar8', './photo/bar8.png');
        game.load.image('bar9', './photo/bar9.png');
        game.load.image('bar10', './photo/bar10.png');
        game.load.image('bar11', './photo/bar11.png');
        game.load.image('bar12', './photo/bar12.png');

        game.load.image('Abar', './photo/a.png');
        game.load.image('Bbar', './photo/b.png');
        game.load.image('Cbar', './photo/c.png');
        game.load.image('Dbar', './photo/d.png');
        game.load.image('Ebar', './photo/e.png');

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

        game.load.image('S3', './photo/cheang3/1.png');
        game.load.image('B3', './photo/cheang3/2.png');
        game.load.image('A3', './photo/cheang3/3.png');
        game.load.image('R3', './photo/cheang3/4.png');
    },
    create: function() {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        //add backgroud and borad
        game.add.sprite(0, 0, 'bg');
        game.add.sprite(0, 0, 'board');

        startlogo = game.add.sprite(450, 250, 'start2')
        startlogo.anchor.x = 0.5;
        startlogo.anchor.y = 0.5;
        game.time.events.add(1000, this.rmStart, this, startlogo);

        //add Time
        timer = game.time.create();

        timerEvent = timer.add(Phaser.Timer.MINUTE * 0 + Phaser.Timer.SECOND * 5, this.endTimer, this);

        timer.start();

        score = game.add.text(820, 35, number.score, {
            //font: "20px",
            fill: "#fff",
            align: "center"
        });

        score.anchor.setTo(0.5, 0.5);

        var btnNext = game.add.sprite(scaleNextW, scaleNextH, 'next');
        btnNext.inputEnabled = true;
        btnNext.events.onInputDown.add(this.cheangGame, this);

        //add group AwserBar
        this.awserBar = game.add.group();
        Abar = this.awserBar.create(150, game.world.height - 70, 'Abar');
        Bbar = this.awserBar.create(270, game.world.height - 70, 'Bbar');
        Cbar = this.awserBar.create(390, game.world.height - 70, 'Cbar');
        Dbar = this.awserBar.create(510, game.world.height - 70, 'Dbar');
        Ebar = this.awserBar.create(630, game.world.height - 70, 'Ebar');

        //add groub bar
        this.choiceBar = game.add.group();
        bar = this.choiceBar.create(50, game.world.height - 160, 'bar');
        bar1 = this.choiceBar.create(70, game.world.height - 140, 'bar1');
        bar2 = this.choiceBar.create(120, game.world.height - 140, 'bar2');
        bar3 = this.choiceBar.create(170, game.world.height - 140, 'bar3');
        bar4 = this.choiceBar.create(220, game.world.height - 140, 'bar4');
        bar5 = this.choiceBar.create(270, game.world.height - 140, 'bar5');
        bar6 = this.choiceBar.create(320, game.world.height - 140, 'bar6');
        bar7 = this.choiceBar.create(370, game.world.height - 140, 'bar7');
        bar8 = this.choiceBar.create(420, game.world.height - 140, 'bar1');
        bar9 = this.choiceBar.create(470, game.world.height - 140, 'bar8');
        bar10 = this.choiceBar.create(520, game.world.height - 140, 'bar9');
        bar11 = this.choiceBar.create(570, game.world.height - 140, 'bar6');
        bar12 = this.choiceBar.create(620, game.world.height - 140, 'bar10');
        bar13 = this.choiceBar.create(670, game.world.height - 140, 'bar11');
        bar14 = this.choiceBar.create(720, game.world.height - 140, 'bar12');
        bar15 = this.choiceBar.create(770, game.world.height - 140, 'bar6');

        bar1.inputEnabled = true;
        bar1.input.enableDrag();
        bar1.events.onDragStop.add(this.onDragStop1, this);
        bar2.inputEnabled = true;
        bar2.input.enableDrag();
        bar2.events.onDragStop.add(this.onDragStop2, this);
        bar3.inputEnabled = true;
        bar3.input.enableDrag();
        bar3.events.onDragStop.add(this.onDragStop3, this);
        bar4.inputEnabled = true;
        bar4.input.enableDrag();
        bar4.events.onDragStop.add(this.onDragStop4, this);
        bar5.inputEnabled = true;
        bar5.input.enableDrag();
        bar5.events.onDragStop.add(this.onDragStop5, this);
        bar6.inputEnabled = true;
        bar6.input.enableDrag();
        bar6.events.onDragStop.add(this.onDragStop6, this);
        bar7.inputEnabled = true;
        bar7.input.enableDrag();
        bar7.events.onDragStop.add(this.onDragStop7, this);
        bar8.inputEnabled = true;
        bar8.input.enableDrag();
        bar8.events.onDragStop.add(this.onDragStop8, this);
        bar9.inputEnabled = true;
        bar9.input.enableDrag();
        bar9.events.onDragStop.add(this.onDragStop9, this);
        bar10.inputEnabled = true;
        bar10.input.enableDrag();
        bar10.events.onDragStop.add(this.onDragStop10, this);
        bar11.inputEnabled = true;
        bar11.input.enableDrag();
        bar11.events.onDragStop.add(this.onDragStop11, this);
        bar12.inputEnabled = true;
        bar12.input.enableDrag();
        bar12.events.onDragStop.add(this.onDragStop12, this);
        bar13.inputEnabled = true;
        bar13.input.enableDrag();
        bar13.events.onDragStop.add(this.onDragStop13, this);
        bar14.inputEnabled = true;
        bar14.input.enableDrag();
        bar14.events.onDragStop.add(this.onDragStop14, this);
        bar15.inputEnabled = true;
        bar15.input.enableDrag();
        bar15.events.onDragStop.add(this.onDragStop15, this);

        //bar1.events.onDragStop.add(onDragStop, this);
        //game.physics.arcade.enable([this.bar1, this.Abar], Phaser.Physics.ARCADE);


    },
    onDragStop1: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar1.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar1.destroy();
            //console.log(awserD);
        } else {
            bar1.destroy();
            bar1 = this.choiceBar.create(70, game.world.height - 140, 'bar1');
            bar1.inputEnabled = true;
            bar1.input.enableDrag();
            bar1.events.onDragStop.add(this.onDragStop1, this);
        }
    },
    onDragStop2: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar2.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar2.destroy();
            //console.log(awserD);
        }
    },
    onDragStop3: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar3.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar3.destroy();
            //console.log(awserD);
        }
    },
    onDragStop4: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar4.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar4.destroy();
            //console.log(awserD);
        }
    },
    onDragStop5: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar5.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar5.destroy();
            //console.log(awserD);
        }
    },
    onDragStop6: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar6.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar6.destroy();
            //console.log(awserD);
        }
    },
    onDragStop7: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar7.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar7.destroy();
            //console.log(awserD);
        }
    },
    onDragStop8: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar8.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar8.destroy();
            //console.log(awserD);
        }
    },
    onDragStop9: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar9.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar9.destroy();
            //console.log(awserD);
        }
    },
    onDragStop10: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar10.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar10.destroy();
            //console.log(awserD);
        }
    },
    onDragStop11: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar11.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar11.destroy();
            //console.log(awserD);
        }
    },
    onDragStop12: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar12.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar12.destroy();
            //console.log(awserD);
        }
    },
    onDragStop13: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar13.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar13.destroy();
            //console.log(awserD);
        }
    },
    onDragStop14: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar14.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar14.destroy();
            //console.log(awserD);
        }
    },
    onDragStop15: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar15.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar15.destroy();
            //console.log(awserD);
        }
    },

    rmStart: function(logo) {
        startlogo.destroy();

    },
    cheangGame: function() {
        if (count == '0') {
            this.cheang2();
            count = '1';
        } else if (count == '1') {
            this.cheang3();
            count = '2';
        } else {
            this.cheang4();
            console.log('choice4');
            //count++;
        }
    },
    cheang2: function() {
        this.awserBar.destroy();
        this.choiceBar.destroy();

        //add choice
        this.choice = game.add.group();

        //add buttons
        var notify = this.choice.create(150, game.world.height - 70, 'notify');
        notify.scale.setTo(0.65, 0.65);

        var position = this.choice.create(270, game.world.height - 70, 'position');
        position.scale.setTo(0.65, 0.65);

        var oxygen = this.choice.create(390, game.world.height - 70, 'oxygen');
        oxygen.scale.setTo(0.65, 0.65);

        var med = this.choice.create(510, game.world.height - 70, 'med');
        med.scale.setTo(0.65, 0.65);

        var w, h;
        w = 15;
        h = 20;
        awserD.forEach(function(D) {
            game.add.text(w, h, D, {
                font: "14px",
                fill: "#d50000",
            });
            h += 15;
        }, this);


        //add event
        notify.inputEnabled = true;
        notify.events.onInputDown.add(this.eventNotify, this);

        position.inputEnabled = true;
        position.events.onInputDown.add(this.eventPosition, this);

        oxygen.inputEnabled = true;
        oxygen.events.onInputDown.add(this.eventOxygen, this);

        med.inputEnabled = true;
        med.events.onInputDown.add(this.eventMed, this);

    },
    cheang3: function() {

        this.choice.destroy();

        this.choice3 = game.add.group();

        var s3 = this.choice3.create(150, game.world.height - 70, 'S3');
        var b3 = this.choice3.create(270, game.world.height - 70, 'B3');
        var a3 = this.choice3.create(390, game.world.height - 70, 'A3');
        var r3 = this.choice3.create(510, game.world.height - 70, 'R3');

    },
    cheang4: function() {

        this.choice3.destroy();

        this.choice4 = game.add.group();

        var position = this.choice4.create(270, game.world.height - 70, 'position');
        position.scale.setTo(0.65, 0.65);

        var oxygen = this.choice4.create(390, game.world.height - 70, 'oxygen');
        oxygen.scale.setTo(0.65, 0.65);

        var med = this.choice4.create(510, game.world.height - 70, 'med');
        med.scale.setTo(0.65, 0.65);

    },
    update: function() {

    },
    render: function() {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (timer.running) {
            game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 2, 14, "#ff0");
        } else {
            var endlogo = game.add.sprite(game.world.centerX / 2, game.world.centerY / 2, 'end');
        }
    },
    endTimer: function() {
        // Stop the timer when the delayed event triggers
        timer.stop();
    },
    formatTime: function(s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
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
        this.choiceP.destroy();
    },
    p2: function() {
        this.choiceP.destroy();
    },
    p3: function() {
        this.choiceP.destroy();
    },
    canCleP: function() {
        this.choiceP.destroy();
    },


    eventOxygen: function() {
        // this.choiceP.destroy();
        // this.choiceM.destroy();

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
        this.choiceO.destroy();
    },
    o2: function() {
        this.choiceO.destroy();
    },
    o3: function() {
        this.choiceO.destroy();
    },
    o4: function() {
        this.choiceO.destroy();
    },
    o5: function() {
        this.choiceO.destroy();
    },
    canCleO: function() {
        this.choiceO.destroy();
    },

    eventMed: function() {

        // this.choiceP.destroy();
        // this.choiceO.destroy();

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
        this.choiceM.destroy();
    },
    m2: function() {
        this.choiceM.destroy();
    },
    m3: function() {
        this.choiceM.destroy();
    },
    m4: function() {
        this.choiceM.destroy();
    },
    m5: function() {
        this.choiceM.destroy();
    },
    canCleM: function() {
        this.choiceM.destroy();
    },

};


var scaleNextW = 750;
var scaleBackW = 710;
var scaleNextH = 400;
var scaleBackH = 360;

var Abar, Bbar, Cbar, Dbar, Ebar;
var bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10, bar11, bar12, bar13, bar14, bar15;
var awserD = [];

var number = { score: 0 };

var count = '0';

var timer, timerEvent, text;

var startlogo;

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