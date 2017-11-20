var Stages = {};

//####################################StartGame################################
Stages.startGame = function(game) {
    var btnPlay;
};
Stages.startGame.prototype = {
    preload: function() {
        game.load.image('start', './photo/start.png');
        game.load.image('btnPlay', './photo/play.png');
    },
    create: function() {
        game.add.sprite(0, 0, 'start');

        btnPlay = game.add.sprite(750, scale.scaleNextH, 'btnPlay');
        btnPlay.scale.setTo(0.65, 0.65);

        btnPlay.inputEnabled = true;
        btnPlay.events.onInputDown.add(this.btnPlay, this);
    },

    btnPlay: function() {
        this.state.start('copd1');
    },
};

//####################################Copd1################################
Stages.copd1 = function(game) {
    var btnN;
};
Stages.copd1.prototype = {
    preload: function() {
        game.load.image('copd1', './photo/copd1.png');
        game.load.image('btnN', './photo/next.png');
        //game.load.image('btnB', './photo/Back.png');
    },
    create: function() {
        game.add.sprite(0, 0, 'copd1');
        btnN = game.add.sprite(scale.scaleNextW, scale.scaleNextH, 'btnN');

        btnN.inputEnabled = true;
        btnN.events.onInputDown.add(this.btnN, this);
    },
    btnN: function() {
        this.state.start('copd2');
    }

};

//####################################Copd2################################
Stages.copd2 = function(game) {
    var btnN, btnB;
};
Stages.copd2.prototype = {
    preload: function() {
        game.load.image('copd2', './photo/copd2.png');
        game.load.image('btnN', './photo/next.png');
        game.load.image('btnB', './photo/back.png');
    },
    create: function() {
        game.add.sprite(0, 0, 'copd2');
        btnN = game.add.sprite(scale.scaleNextW, scale.scaleNextH, 'btnN');
        btnB = game.add.sprite(scale.scaleBackW, scale.scaleBackH, 'btnB');

        btnN.inputEnabled = true;
        btnN.events.onInputDown.add(this.btnN, this);
        btnB.inputEnabled = true;
        btnB.events.onInputDown.add(this.btnB, this);
    },
    btnN: function() {
        this.state.start('copd3');
    },
    btnB: function() {
        this.state.start('copd1');
    }
};

//################################copd3#####################################
Stages.copd3 = function(game) {
    var btnN, btnB;
};
Stages.copd3.prototype = {
    preload: function() {
        game.load.image('copd3', './photo/copd3.png');
        game.load.image('btnN', './photo/next.png');
        game.load.image('btnB', './photo/back.png');
    },
    create: function() {
        game.add.sprite(0, 0, 'copd3');
        btnN = game.add.sprite(scale.scaleNextW, scale.scaleNextH, 'btnN');
        btnB = game.add.sprite(scale.scaleBackW, scale.scaleBackH, 'btnB');

        btnN.inputEnabled = true;
        btnN.events.onInputDown.add(this.btnN, this);
        btnB.inputEnabled = true;
        btnB.events.onInputDown.add(this.btnB, this);
    },
    btnN: function() {
        this.state.start('copd5');
    },
    btnB: function() {
        this.state.start('copd2');
    }
};

//-----------------------------Copd5-----------------------------------------
Stages.copd5 = function(game) {
    var btnN, btnB;
};
Stages.copd5.prototype = {
    preload: function() {
        game.load.image('copd5', './photo/copd5.png');
        game.load.image('btnB', './photo/back.png');
        game.load.image('btnN', './photo/next.png')
    },
    create: function() {
        game.add.sprite(0, 0, 'copd5');
        btnN = game.add.sprite(scale.scaleNextW, scale.scaleNextH, 'btnN');
        btnB = game.add.sprite(scale.scaleBackW, scale.scaleBackH, 'btnB');

        btnN.inputEnabled = true;
        btnN.events.onInputDown.add(this.btnN, this);
        btnB.inputEnabled = true;
        btnB.events.onInputDown.add(this.btnB, this);
    },
    btnN: function() {
        this.state.start('copd6');
    },
    btnB: function() {
        this.state.start('copd3');
    }
};

//-----------------------------------copd6-------------------------------
Stages.copd6 = function(game) {
    var btnN, btnB;
};
Stages.copd6.prototype = {
    preload: function() {
        game.load.image('copd6', './photo/copd6.png');
        game.load.image('btnB', './photo/back.png');
        game.load.image('btnN', './photo/next.png')
    },
    create: function() {
        game.add.sprite(0, 0, 'copd6');
        btnN = game.add.sprite(scale.scaleNextW, scale.scaleNextH, 'btnN');
        btnB = game.add.sprite(scale.scaleBackW, scale.scaleBackH, 'btnB');

        var text3 = this.add.text(70, 440, 'more COPD ...', {
            fill: "#ff5252 ",
            fontSize: '16px'
        });
        text3.anchor.x = 0.5;
        text3.anchor.y = 0.5;

        text3.inputEnabled = true;
        text3.events.onInputDown.add(this.more, this);

        btnN.inputEnabled = true;
        btnN.events.onInputDown.add(this.btnN, this);
        btnB.inputEnabled = true;
        btnB.events.onInputDown.add(this.btnB, this);
    },
    btnN: function() {
        this.state.start('copd7');
    },
    btnB: function() {
        this.state.start('copd5');
    },
    more: function() {
        window.open("http://www.google.com");
    }
};

//---------------------------------------copd7----------------------------------
Stages.copd7 = function(game) {
    var btnN, btnB;
};
Stages.copd7.prototype = {
    preload: function() {
        game.load.image('copd7', './photo/copd7.png');
        game.load.image('btnB', './photo/back.png');
        game.load.image('btnN', './photo/next.png')
    },
    create: function() {
        game.add.sprite(0, 0, 'copd7');
        btnN = game.add.sprite(scale.scaleNextW, scale.scaleNextH, 'btnN');
        btnB = game.add.sprite(scale.scaleBackW, scale.scaleBackH, 'btnB');

        btnN.inputEnabled = true;
        btnN.events.onInputDown.add(this.btnN, this);
        btnB.inputEnabled = true;
        btnB.events.onInputDown.add(this.btnB, this);
    },
    btnN: function() {
        this.state.start('playGame');
    },
    btnB: function() {
        this.state.start('copd6');
    }
};

Stages.playGame = function(game) {
    var startlogo, endlogo, text, timer, timerEvent, score;
    var bar, bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10, bar11, bar12, bar13, bar14;
    var Abar, Bbar, Cbar, Dbar, Ebar;
    var notify1, position1, oxygen1;
    var p1, p2, p3, canleP;
    var o1, o2, o3, o4, cancleO;
    var l1, l2, l3, l4;
    var s3, b3, a3, r3;
    var c1, c2, c3, c4;
    var rate, rr, sat, bp, t;
    var warning1, warning2;
    var mediecation2, recomend2, vs2;
    var m1, m2, m3, cancelM;
    var info, finish;

};
Stages.playGame.prototype = {
    preload: function() {
        game.load.image('bg', './photo/bg.png');
        game.load.image('board', './photo/board.png');
        game.load.image('end', './photo/end.png');
        game.load.image('startlogo', './photo/start2.png');
        game.load.image('btnN', './photo/next.png');
        game.load.image('position', './photo/position.png');
        game.load.image('oxygen', './photo/oxygen.png');
        game.load.image('notify', './photo/notify.png');
        game.load.image('warning1', './photo/warning1.png');
        game.load.image('warning2', './photo/warning2.png');
        game.load.image('mediecation', './photo/mediecation.png');
        game.load.image('vs', './photo/vs.png');
        game.load.image('recomend', './photo/recomend.png')
        game.load.image('info', './photo/info.png');
        game.load.image('finish', './photo/finish.png');


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
        game.load.image('bar13', './photo/bar13.png');
        game.load.image('bar14', './photo/bar14.png');

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
        game.load.image('cancleO', './photo/oxygen/cancle.png');

        game.load.image('S3', './photo/cheang3/1.png');
        game.load.image('B3', './photo/cheang3/2.png');
        game.load.image('A3', './photo/cheang3/3.png');
        game.load.image('R3', './photo/cheang3/4.png');

        game.load.image('L1', './photo/other/1.png');
        game.load.image('L2', './photo/other/2.png');
        game.load.image('L3', './photo/other/3.png');
        game.load.image('L4', './photo/other/4.png');
        game.load.image('one', './photo/other/one.png');
        game.load.image('two', './photo/other/two.png');
        game.load.image('three', './photo/other/three.png');
        game.load.image('four', './photo/other/four.png');

        game.load.image('m1', './photo/mediecation/1.png');
        game.load.image('m2', './photo/mediecation/2.png');
        game.load.image('m3', './photo/mediecation/3.png');
        game.load.image('cancelM', './photo/mediecation/cancelM.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'bg');
        //game.add.sprite(0, 60, 'board');

        startlogo = game.add.sprite(450, 250, 'startlogo')
        startlogo.anchor.x = 0.5;
        startlogo.anchor.y = 0.5;

        score = this.add.text(820, 20, number.score, { fill: '#ffffff', fontSize: '20px' });
        //add time
        game.time.events.add(1000, this.rmStart, this, startlogo);
        timer = game.time.create();
        timerEvent = timer.add(Phaser.Timer.MINUTE * 5 + Phaser.Timer.SECOND * 0, this.endTimer, this);

        timer.start();
    },
    rmStart: function(logo) {
        startlogo.destroy();

        btnCheang = game.add.sprite(scale.scaleNextW, scale.scaleNextH, 'btnN');
        btnCheang.inputEnabled = true;
        btnCheang.events.onInputDown.add(this.cheangGame, this);

        this.awserBar = game.add.group();
        Abar = this.awserBar.create(100 - 40, game.world.height - 70, 'Abar');
        Bbar = this.awserBar.create(250 - 40, game.world.height - 70, 'Bbar');
        Cbar = this.awserBar.create(390 - 40, game.world.height - 70, 'Cbar');
        Dbar = this.awserBar.create(550 - 40, game.world.height - 70, 'Dbar');
        Ebar = this.awserBar.create(700 - 40, game.world.height - 70, 'Ebar');

        this.bar = game.add.group();
        bar = this.bar.create(30, 230, 'bar');
        bar.scale.setTo(0.9, 0.9);
        bar1 = this.bar.create(65, 250, 'bar1');
        bar2 = this.bar.create(175, 250, 'bar2');
        bar3 = this.bar.create(265, 240, 'bar3');
        bar4 = this.bar.create(395, 250, 'bar4');
        bar5 = this.bar.create(515, 250, 'bar5');
        bar6 = this.bar.create(655, 235, 'bar6');
        bar7 = this.bar.create(765, 240, 'bar7');
        bar8 = this.bar.create(65, 320, 'bar8');
        bar9 = this.bar.create(185, 320, 'bar9');
        bar10 = this.bar.create(275, 320, 'bar10');
        bar11 = this.bar.create(415, 320, 'bar11');
        bar12 = this.bar.create(515, 310, 'bar12');
        bar12.scale.setTo(0.9, 0.9);
        bar13 = this.bar.create(645, 320, 'bar13');
        bar14 = this.bar.create(765, 320, 'bar14');
        bar14.scale.setTo(0.8, 0.8);

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

    },
    onDragStop1: function() {
        if (Phaser.Rectangle.intersects(Cbar.getBounds(), bar1.getBounds())) {
            //number.score = number.score + 2;
            score.setText(number.score);
            bar1.destroy();
            //awserD.push('BP 130/80 mmHg');
            //console.log(awserD);
        } else {
            bar1.destroy();
            bar1 = this.bar.create(0, 0, 'bar1');
            bar1.inputEnabled = true;
            bar1.input.enableDrag();
            bar1.events.onDragStop.add(this.onDragStop1, this);
        }
    },
    onDragStop2: function() {
        if (Phaser.Rectangle.intersects(Ebar.getBounds(), bar2.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            awserD.push('37.8 C');
            bar2.destroy();
            //console.log(awserD);
        } else {
            bar2.destroy();
            bar2 = this.bar.create(175, 250, 'bar2');
            bar2.inputEnabled = true;
            bar2.input.enableDrag();
            bar2.events.onDragStop.add(this.onDragStop2, this);
        }
    },
    onDragStop3: function() {
        if (Phaser.Rectangle.intersects(Bbar.getBounds(), bar3.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar3.destroy();
            awserD.push('Oxygen saturation 94%');
            //console.log(awserD);
        } else {
            bar3.destroy();
            bar3 = this.bar.create(265, 240, 'bar3');
            bar3.inputEnabled = true;
            bar3.input.enableDrag();
            bar3.events.onDragStop.add(this.onDragStop3, this);
        }
    },
    onDragStop4: function() {
        if (Phaser.Rectangle.intersects(Cbar.getBounds(), bar4.getBounds())) {
            //number.score = number.score + 2;
            score.setText(number.score);
            bar4.destroy();
            //awserD.push('Oxygen saturation 94%');
            //console.log(awserD);
        } else {
            bar4.destroy();
            bar4 = this.bar.create(220, game.world.height - 140, 'bar4');
            bar4.inputEnabled = true;
            bar4.input.enableDrag();
            bar4.events.onDragStop.add(this.onDragStop4, this);
        }
    },
    onDragStop5: function() {
        if (Phaser.Rectangle.intersects(Cbar.getBounds(), bar5.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            awserD.push('BP 130/80 mmHg.');
            bar5.destroy();
            //console.log(awserD);
        } else {
            bar5.destroy();
            bar5 = this.bar.create(515, 250, 'bar5');
            bar5.inputEnabled = true;
            bar5.input.enableDrag();
            bar5.events.onDragStop.add(this.onDragStop5, this);
        }
    },
    onDragStop6: function() {
        if (Phaser.Rectangle.intersects(Bbar.getBounds(), bar6.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            awserD.push('Respiratory rate 30 bpm');
            bar6.destroy();
            console.log(awserD);
        } else {
            bar6.destroy();
            bar6 = this.bar.create(655, 235, 'bar6');
            bar6.inputEnabled = true;
            bar6.input.enableDrag();
            bar6.events.onDragStop.add(this.onDragStop6, this);
        }
    },
    onDragStop7: function() {
        if (Phaser.Rectangle.intersects(Bbar.getBounds(), bar7.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            awserD.push('wheezing');
            bar7.destroy();
            console.log(awserD);
        } else {
            bar7.destroy();
            bar7 = this.bar.create(765, 240, 'bar7');
            bar7.inputEnabled = true;
            bar7.input.enableDrag();
            bar7.events.onDragStop.add(this.onDragStop7, this);
        }
    },
    onDragStop8: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar8.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar8.destroy();
            //console.log(awserD);
        } else {
            bar8.destroy();
            bar8 = this.bar.create(65, 320, 'bar8');
            bar8.inputEnabled = true;
            bar8.input.enableDrag();
            bar8.events.onDragStop.add(this.onDragStop8, this);
        }
    },
    onDragStop9: function() {
        if (Phaser.Rectangle.intersects(Cbar.getBounds(), bar9.getBounds())) {
            //number.score = number.score + 2;
            score.setText(number.score);
            bar9.destroy();
            //awserD.push('Cappilary refill');
            //console.log(awserD);
        } else {
            bar9.destroy();
            bar9 = this.bar.create(470, game.world.height - 140, 'bar9');
            bar9.inputEnabled = true;
            bar9.input.enableDrag();
            bar9.events.onDragStop.add(this.onDragStop9, this);
        }
    },
    onDragStop10: function() {
        if (Phaser.Rectangle.intersects(Cbar.getBounds(), bar10.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            bar10.destroy();
            awserD.push('Cappilary refill');
            console.log(awserD);
        } else {
            bar10.destroy();
            bar10 = this.bar.create(275, 320, 'bar10');
            bar10.inputEnabled = true;
            bar10.input.enableDrag();
            bar10.events.onDragStop.add(this.onDragStop10, this);
        }
    },
    onDragStop11: function() {
        if (Phaser.Rectangle.intersects(Dbar.getBounds(), bar11.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            awserD.push('E4V5M5');
            bar11.destroy();
            console.log(awserD);
        } else {
            bar11.destroy();
            bar11 = this.bar.create(415, 320, 'bar11');
            bar11.inputEnabled = true;
            bar11.input.enableDrag();
            bar11.events.onDragStop.add(this.onDragStop11, this);
        }
    },
    onDragStop12: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar12.getBounds())) {
            //number.score = number.score + 2;
            score.setText(number.score);
            bar12.destroy();
            //console.log(awserD);
        } else {
            bar12.destroy();
            bar12 = this.bar.create(620, game.world.height - 140, 'bar12');
            bar12.inputEnabled = true;
            bar12.input.enableDrag();
            bar12.events.onDragStop.add(this.onDragStop12, this);
        }
    },
    onDragStop13: function() {
        if (Phaser.Rectangle.intersects(Cbar.getBounds(), bar13.getBounds())) {
            number.score = number.score + 2;
            score.setText(number.score);
            awserD.push('heart rate 96 bpm');
            bar13.destroy();
            console.log(awserD);
        } else {
            bar13.destroy();
            bar13 = this.bar.create(645, 320, 'bar13');
            bar13.inputEnabled = true;
            bar13.input.enableDrag();
            bar13.events.onDragStop.add(this.onDragStop13, this);
        }
    },
    onDragStop14: function() {
        if (Phaser.Rectangle.intersects(Abar.getBounds(), bar14.getBounds())) {
            //number.score = number.score + 2;
            score.setText(number.score);
            bar14.destroy();
            //console.log(awserD);
        } else {
            bar14.destroy();
            bar14 = this.bar.create(720, game.world.height - 140, 'bar14');
            bar14.inputEnabled = true;
            bar14.input.enableDrag();
            bar14.events.onDragStop.add(this.onDragStop14, this);
        }
    },
    nextPage: function() {
        this.state.start('copd8');

    },
    render: function() {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (timer.running) {
            game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 20, 30, '#ffffff', '30px');
        } else {
            endlogo = game.add.sprite(450, 250, 'end');
            endlogo.anchor.x = 0.5;
            endlogo.anchor.y = 0.5;
            game.time.events.add(5000, this.nextPage, this, endlogo);
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
    cheangGame: function() {
        var btnCheang = 0;
        if (btnCheang == 0) {
            this.game2();
            btnCheang = 1;
        } else if (btnCheang == 1) {
            this.game3();
            btnCheang = 2;
        }


    },
    game2: function() {
        this.bar.destroy();
        this.awserBar.destroy();
        btnCheang.destroy();

        rate = game.add.text(830, 70, number.rate, { fill: '#ffffff', fontSize: '20px' });
        rr = game.add.text(720, 100, number.rr, { fill: '#ffffff', fontSize: '20px' });
        sat = game.add.text(780, 100, number.sat, { fill: '#ffffff', fontSize: '20px' });
        bp = game.add.text(720, 130, number.bp, { fill: '#ffffff', fontSize: '20px' });
        t = game.add.text(720, 160, number.t, { fill: '#ffffff', fontSize: '20px' });
        game.add.sprite(0, 50, 'board');

        this.choice = game.add.group();
        notify1 = this.choice.create(200, game.world.height - 70, 'notify');
        notify1.scale.setTo(0.65, 0.65);
        position1 = this.choice.create(400, game.world.height - 70, 'position');
        position1.scale.setTo(0.65, 0.65);
        oxygen1 = this.choice.create(600, game.world.height - 70, 'oxygen');
        oxygen1.scale.setTo(0.65, 0.65);

        notify1.inputEnabled = true;
        notify1.events.onInputDown.add(this.notify1, this);
        position1.inputEnabled = true;
        position1.events.onInputDown.add(this.position1, this);
        oxygen1.inputEnabled = true;
        oxygen1.events.onInputDown.add(this.oxygen1, this);

        this.awserD = game.add.group();
        var w = 15;
        var h = 60;
        awserD.forEach(D => {
            game.add.text(w, h, D, {
                font: "14px",
                fill: "#d50000",
            });
            h += 20;
        });

    },
    notify1: function() {
        number.score += 10;
        score.setText(number.score);
        number.rr = 30;
        number.sat = '92%';
        number.bp = '130/80';
        number.t = 37.2;
        rr.setText(number.rr);

        this.game3();
    },
    position1: function() {
        if (this.choiceO) {
            this.choiceO.destroy();
        } else if (this.choiceM) {
            this.choiceM.destroy();
        } else if (this.choiceR) {
            this.choiceR.destroy();
        }
        this.choiceP = game.add.group();
        p1 = this.choiceP.create(position1.centerX - 77, game.world.height - 200, 'p1');
        p2 = this.choiceP.create(position1.centerX - 77, game.world.height - 170, 'p2');
        p3 = this.choiceP.create(position1.centerX - 77, game.world.height - 140, 'p3');
        canleP = this.choiceP.create(position1.centerX - 77, game.world.height - 110, 'cancleP');

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
        position1.inputEnabled = false;
        this.choiceP.destroy();
    },
    p2: function() {
        number.score += 10;
        score.setText(number.score);
        position1.inputEnabled = false;
        this.choiceP.destroy();
    },
    p3: function() {
        position1.inputEnabled = false;
        this.choiceP.destroy();
    },
    cancleP: function() {
        this.choiceP.destroy();
    },
    oxygen1: function() {
        if (this.choiceP) {
            this.choiceP.destroy();
        } else if (this.choiceM) {
            this.choiceM.destroy();
        } else if (this.choiceR) {
            this.choiceR.destroy();
        }
        this.choiceO = game.add.group();

        o1 = this.choiceO.create(oxygen1.centerX - 77, game.world.height - 260 + 30, 'o1');
        o2 = this.choiceO.create(oxygen1.centerX - 77, game.world.height - 230 + 30, 'o2');
        o3 = this.choiceO.create(oxygen1.centerX - 77, game.world.height - 200 + 30, 'o3');
        o4 = this.choiceO.create(oxygen1.centerX - 77, game.world.height - 170 + 30, 'o4');
        cancleO = this.choiceO.create(oxygen1.centerX - 77, game.world.height - 110, 'cancleO');

        o1.inputEnabled = true;
        o1.events.onInputDown.add(this.o1, this);
        o2.inputEnabled = true;
        o2.events.onInputDown.add(this.o2, this);
        o3.inputEnabled = true;
        o3.events.onInputDown.add(this.o3, this);
        o4.inputEnabled = true;
        o4.events.onInputDown.add(this.o4, this);
        cancleO.inputEnabled = true;
        cancleO.events.onInputDown.add(this.canCleO, this);
    },
    o1: function() {
        oxygen1.inputEnabled = false;
        this.choiceO.destroy();
    },
    o2: function() {
        oxygen1.inputEnabled = false;
        this.choiceO.destroy();
    },
    o3: function() {
        number.score += 10;
        score.setText(number.score);
        oxygen1.inputEnabled = false;
        this.choiceO.destroy();
    },
    o4: function() {
        oxygen1.inputEnabled = false;
        this.choiceO.destroy();
    },
    cancleO: function() {
        this.choiceO.destroy();
    },
    game3: function() {
        this.choice.destroy();
        this.choice3 = game.add.group();

        l1 = this.choice3.create(230, game.world.height - 350 - 10, 'L1');
        l2 = this.choice3.create(230, game.world.height - 280 - 25, 'L2');
        l3 = this.choice3.create(230, game.world.height - 210 - 15, 'L3');
        l4 = this.choice3.create(230, game.world.height - 140, 'L4');
        l1.scale.setTo(0.8, 0.8);
        l2.scale.setTo(0.8, 0.8);
        l3.scale.setTo(0.75, 0.75);
        l4.scale.setTo(0.8, 0.8);

        s3 = this.choice3.create(150, game.world.height - 70, 'S3');
        b3 = this.choice3.create(270, game.world.height - 70, 'B3');
        a3 = this.choice3.create(430, game.world.height - 70, 'A3');
        r3 = this.choice3.create(580, game.world.height - 70, 'R3');

        c1 = this.choice3.create(150, game.world.height - 350 - 10, 'one');
        c2 = this.choice3.create(150, game.world.height - 280 - 10, 'two');
        c3 = this.choice3.create(150, game.world.height - 210 - 10, 'three');
        c4 = this.choice3.create(150, game.world.height - 140, 'four');

        c1.inputEnabled = true;
        c1.input.enableDrag();
        c1.events.onDragStop.add(this.onDragStopC1, this);
        c2.inputEnabled = true;
        c2.input.enableDrag();
        c2.events.onDragStop.add(this.onDragStopC2, this);
        c3.inputEnabled = true;
        c3.input.enableDrag();
        c3.events.onDragStop.add(this.onDragStopC3, this);
        c4.inputEnabled = true;
        c4.input.enableDrag();
        c4.events.onDragStop.add(this.onDragStopC4, this);
    },
    onDragStopC1: function() {
        if (Phaser.Rectangle.intersects(c1.getBounds(), s3.getBounds())) {
            c1.destroy();
            checkC++;
            cCheck.c1 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c1.getBounds(), b3.getBounds())) {
            c1.destroy();
            cCheck.c1 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c1.getBounds(), a3.getBounds())) {
            c1.destroy();
            cCheck.c1 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c1.getBounds(), r3.getBounds())) {
            c1.destroy();
            cCheck.c1 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else {
            c1.destroy();
            c1 = this.choice3.create(150, game.world.height - 350 - 10, 'one');
            c1.inputEnabled = true;
            c1.input.enableDrag();
            c1.events.onDragStop.add(this.onDragStopC1, this);
        }
    },
    onDragStopC2: function() {
        if (Phaser.Rectangle.intersects(c2.getBounds(), b3.getBounds())) {
            c2.destroy();
            checkC++;
            cCheck.c2 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();

            }
        } else if (Phaser.Rectangle.intersects(c2.getBounds(), s3.getBounds())) {
            c2.destroy();
            cCheck.c2 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c2.getBounds(), a3.getBounds())) {
            c2.destroy();
            cCheck.c2 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c2.getBounds(), r3.getBounds())) {
            c2.destroy();
            cCheck.c2 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else {
            c2.destroy();
            c2 = this.choice3.create(150, game.world.height - 280 - 10, 'two');
            c2.inputEnabled = true;
            c2.input.enableDrag();
            c2.events.onDragStop.add(this.onDragStopC2, this);
        }
    },
    onDragStopC3: function() {
        if (Phaser.Rectangle.intersects(c3.getBounds(), a3.getBounds())) {
            c3.destroy();
            checkC++;
            cCheck.c3 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c3.getBounds(), s3.getBounds())) {
            c3.destroy();
            cCheck.c3 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c3.getBounds(), b3.getBounds())) {
            c3.destroy();
            cCheck.c3 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c3.getBounds(), r3.getBounds())) {
            c3.destroy();
            cCheck.c3 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else {
            c3.destroy();
            c3 = this.choice3.create(150, game.world.height - 210 - 10, 'three');
            c3.inputEnabled = true;
            c3.input.enableDrag();
            c3.events.onDragStop.add(this.onDragStopC3, this);
        }
    },
    onDragStopC4: function() {
        if (Phaser.Rectangle.intersects(c4.getBounds(), r3.getBounds())) {
            c4.destroy();
            checkC++;
            cCheck.c4 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c4.getBounds(), s3.getBounds())) {
            c4.destroy();
            cCheck.c4 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c4.getBounds(), b3.getBounds())) {
            c4.destroy();
            cCheck.c4 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else if (Phaser.Rectangle.intersects(c4.getBounds(), a3.getBounds())) {
            c4.destroy();
            cCheck.c4 = true;
            if (cCheck.c1 && cCheck.c2 && cCheck.c3 && cCheck.c4) {
                this.checkWarning();
            }
        } else {
            c4.destroy();
            c4 = this.choice3.create(150, game.world.height - 140, 'four');
            c4.inputEnabled = true;
            c4.input.enableDrag();
            c4.events.onDragStop.add(this.onDragStopC4, this);
        }
    },
    warning: function() {
        warning1 = game.add.sprite(450, 250, 'warning1');
        warning1.anchor.x = 0.5;
        warning1.anchor.y = 0.5;
        game.time.events.add(5000, this.rmWarning1, this, warning1);
        cCheck.c1 = false;
        cCheck.c2 = false;
        cCheck.c3 = false;
        cCheck.c4 = false;
    },
    rmWarning1: function() {
        warning1.destroy();
        checkC = 0;
        c1 = this.choice3.create(150, game.world.height - 350 - 10, 'one');
        c2 = this.choice3.create(150, game.world.height - 280 - 10, 'two');
        c3 = this.choice3.create(150, game.world.height - 210 - 10, 'three');
        c4 = this.choice3.create(150, game.world.height - 140, 'four');

        c1.inputEnabled = true;
        c1.input.enableDrag();
        c1.events.onDragStop.add(this.onDragStopC1, this);
        c2.inputEnabled = true;
        c2.input.enableDrag();
        c2.events.onDragStop.add(this.onDragStopC2, this);
        c3.inputEnabled = true;
        c3.input.enableDrag();
        c3.events.onDragStop.add(this.onDragStopC3, this);
        c4.inputEnabled = true;
        c4.input.enableDrag();
        c4.events.onDragStop.add(this.onDragStopC4, this);
    },
    checkWarning: function() {

        if (c == 0) {
            c = 1;
            console.log(c);
            if (checkC == 3) {
                number.score += 75;
                score.setText(number.score);
                this.game4();
            } else if (checkC == 4) {
                number.score += 100;
                score.setText(number.score);
                this.game4();
            } else {
                this.warning();
            }
        } else {
            warning2 = this.choice3.create(450, 250, 'warning2');
            warning2.anchor.x = 0.5;
            warning2.anchor.y = 0.5;
            warning2.inputEnabled = true;
            number.rate = 102
            number.rr = 36;
            number.sat = '87%';
            number.bp = '150/90';
            rate.setText(number.rate);
            rr.setText(number.rr);
            sat.setText(number.sat);
            bp.setText(number.bp);
            warning2.events.onInputDown.add(this.game4, this);
        }
    },
    game4: function() {
        this.choice3.destroy();
        //awserD.destroy();

        // var w = 15;
        // var h = 60;
        // plan.forEach(D => {
        //     game.add.text(w, h, D, {
        //         font: "14px",
        //         fill: "#d50000",
        //     });
        //     h += 20;
        // });
        this.choice4 = game.add.group();
        mediecation2 = this.choice4.create(200 - 100, game.world.height - 70, 'mediecation');
        mediecation2.scale.setTo(0.65, 0.65);
        position1 = this.choice4.create(350 - 100, game.world.height - 70, 'position');
        position1.scale.setTo(0.65, 0.65);
        oxygen1 = this.choice4.create(500 - 100, game.world.height - 70, 'oxygen');
        oxygen1.scale.setTo(0.65, 0.65);
        vs2 = this.choice4.create(650 - 100, game.world.height - 70, 'vs');
        vs2.scale.setTo(0.65, 0.65);
        recomend2 = this.choice4.create(800 - 100, game.world.height - 70, 'recomend');
        recomend2.scale.setTo(0.65, 0.65);
        finish = this.choice4.create(800, game.world.height - 70, 'finish');

        finish.inputEnabled = true;
        finish.events.onInputDown.add(this.finish, this);
        mediecation2.inputEnabled = true;
        mediecation2.events.onInputDown.add(this.mediecation2, this);
        position1.inputEnabled = true;
        position1.events.onInputDown.add(this.position1, this);
        oxygen1.inputEnabled = true;
        oxygen1.events.onInputDown.add(this.oxygen1, this);
        vs2.inputEnabled = true;
        vs2.events.onInputDown.add(this.vs2, this);
        recomend2.inputEnabled = true;
        recomend2.events.onInputDown.add(this.recomend2, this);

    },
    finish: function() {
        game.state.start('copd8');
    },
    mediecation2: function() {
        if (this.choiceP) {
            this.choiceP.destroy();
        } else if (this.choiceO) {
            this.choiceO.destroy();
        } else if (this.choiceR) {
            this.choiceR.destroy();
        }
        this.choiceM = game.add.group();

        m1 = this.choiceM.create(mediecation2.centerX - 110, game.world.height - 200, 'm1');
        m2 = this.choiceM.create(mediecation2.centerX - 110, game.world.height - 170, 'm2');
        m3 = this.choiceM.create(mediecation2.centerX - 110, game.world.height - 140, 'm3');
        cancleM = this.choiceM.create(mediecation2.centerX - 110, game.world.height - 110, 'cancelM');

        m1.inputEnabled = true;
        m1.events.onInputDown.add(this.m1, this);
        m2.inputEnabled = true;
        m2.events.onInputDown.add(this.m2, this);
        m3.inputEnabled = true;
        m3.events.onInputDown.add(this.m3, this);
        cancleM.inputEnabled = true;
        cancleM.events.onInputDown.add(this.canCleM, this);
    },
    m1: function() {
        number.score += 4;
        score.setText(number.score);
        mediecation2.inputEnabled = false;
        this.choiceM.destroy();
    },
    m2: function() {
        number.score += 4;
        score.setText(number.score);
        mediecation2.inputEnabled = false;
        this.choiceM.destroy();
    },
    m3: function() {
        number.score += 4;
        score.setText(number.score);
        mediecation2.inputEnabled = false;
        this.choiceM.destroy();
    },
    cancelM: function() {
        this.choiceM.destroy();
    },
    recomend2: function() {

        if (this.choiceP) {
            this.choiceP.destroy();
        } else if (this.choiceO) {
            this.choiceO.destroy();
        } else if (this.choiceM) {
            this.choiceM.destroy();
        }
        number.score += 10;
        score.setText(number.score);
        this.choiceR = game.add.group();
        info = this.choiceR.create(450, 250, 'info');
        info.anchor.x = 0.5;
        info.anchor.y = 0.5;
        recomend2.inputEnabled = false;
        info.inputEnabled = true;
        info.events.onInputDown.add(this.rmInfo, this);

    },
    rmInfo: function() {
        this.choiceR.destroy();
    },
    vs2: function() {
        if (this.choiceP) {
            this.choiceP.destroy();
        } else if (this.choiceO) {
            this.choiceO.destroy();
        } else if (this.choiceR) {
            this.choiceR.destroy();
        } else if (this.choiceM) {
            this.choiceM.destroy();
        }
        number.score += 10;
        score.setText(number.score);
        vs2.inputEnabled = false;
        number.rate = 98
        number.rr = 26;
        number.sat = '95%';
        number.bp = '120/80';
        rate.setText(number.rate);
        rr.setText(number.rr);
        sat.setText(number.sat);
        bp.setText(number.bp);
    },
};
Stages.copd8 = function(game) {
    var btnN, score;
};
Stages.copd8.prototype = {
    preload: function() {
        game.load.image('copd8', './photo/copd8.png');
        game.load.image('btnN', './photo/Next.png')
    },
    create: function() {
        game.add.sprite(0, 0, 'copd8');
        btnN = game.add.sprite(scale.scaleNextW, scale.scaleNextH, 'btnN');
        score = this.add.text(450, 250, number.score, { fill: "#ffffff" });
        score.anchor.x = 0.5;
        score.anchor.y = 0.5;
        btnN.inputEnabled = true;
        btnN.events.onInputDown.add(this.btnN, this);
    },
    btnN: function() {
        this.state.start('copd1');
    }

};

var scale = {
    'scaleNextW': 780,
    'scaleBackW': 740,
    'scaleNextH': 430,
    'scaleBackH': 390
};

var number = { score: 0, rate: 96, rr: 32, sat: '90%', bp: '130/80', t: 37.2 };
var awserD = [];
var plan = ['- O2 cannula 3 LPM Keep O2 sat > 92 %',
    '- Berodual 1 NB 15 x 3 then 1 NB ทุก 2 ชม.',
    '- Sulbutamol inhalation 1 NB ทุก 1 ชม.',
    '- Dexamethazone 5 mg IV stat then ทุก 6 ชม'
];
var checkC = 0;
var c = 0;
var cCheck = { c1: false, c2: false, c3: false, c4: false };

var game = new Phaser.Game(900, 500, Phaser.AUTO, 'game');
game.state.add('startgame', Stages.startGame);
game.state.add('copd1', Stages.copd1);
game.state.add('copd2', Stages.copd2);
game.state.add('copd3', Stages.copd3);
game.state.add('copd5', Stages.copd5);
game.state.add('copd6', Stages.copd6);
game.state.add('copd7', Stages.copd7);
game.state.add('playGame', Stages.playGame);
game.state.add('copd8', Stages.copd8);

game.state.start('startgame');