//The most challenging part of this project was finding a way for making the code check if a piece is moveable.
//The most fun part of this project was choosing the image because I ended up choosing a comical image. 
//The most interesting part of this project was figuring out how to solve the 15-piece puzzle.
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12 ,13 ,14, 15, 0];
var temp = 0;
var xpos = 20;
var ypos = 20;
var j = 0;
var shufflist = [];
var movecount = 0;
var comparelist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12 ,13 ,14, 15, 0];
var templist = [];
var shufflecount = 0;
onEvent("Play_btn", "click", function() {
  setScreen("MainScreen");
});
onEvent("undobtn", "click", function() {
  if (movecount!==0) {
    ypos=20;
    j = 0;
    list = [];
    for (var i = templist.length-16; i < templist.length; i++) {
appendItem(list, templist[i]);
    }
    setposition(j, xpos);
    if (movecount>1) {
      var listlength = templist.length;
      for (i = listlength-1; i > listlength-17; i--) {
        removeItem(templist, i);
      }
    }
  }
  if (movecount!==0) {
    movecount--;
    setText("move_cnt", "Number of Moves: "+movecount);
  }
});
onEvent("playagain_btn", "click", function() {
  OriginOrder();
  movecount = 0;
  setText("move_cnt", "Number of Moves: " + movecount);
  setScreen("MainScreen");
});
onEvent("shufflebtn", "click", function(event) {
  if (event.shiftKey) {
OriginOrder();
  } else {
    shufflecount = 0;
    for (var i = 0; i < 500; i++) {
      appendItem(shufflist, randomNumber(0,15));
    }
    timedLoop(0.01, function() {
      if (checkmove(shufflist[(randomNumber(0, shufflist.length-1))], 0)) {
        shufflecount = shufflecount+1;
      }
      if (shufflecount==150) {
        stopTimedLoop();
      }
    });
  }
  movecount = 0;
  setText("move_cnt", "Number of Moves: " + movecount);
});
onEvent("Piece1", "click", function() {
  if (checkmove(1)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece2", "click", function() {
  if (checkmove(2)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece3", "click", function() {
  if (checkmove(3)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece4", "click", function() {
  if (checkmove(4)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece5", "click", function() {
  if (checkmove(5)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece6", "click", function() {
  if (checkmove(6)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece7", "click", function() {
  if (checkmove(7)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece8", "click", function() {
  if (checkmove(8)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece9", "click", function() {
  if (checkmove(9)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece10", "click", function() {
  if (checkmove(10)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece11", "click", function() {
  if (checkmove(11)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece12", "click", function() {
  if (checkmove(12)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece13", "click", function() {
  if (checkmove(13)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece14", "click", function() {
  if (checkmove(14)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
onEvent("Piece15", "click", function() {
  if (checkmove(15)) {
    movecount = movecount+1;
    setText("move_cnt", "Number of Moves: "+ movecount);
  }
});
function checkmove (identifier, purpose) {
if (purpose!==0) {
  if (movecount>20) {
    for (var i = 0; i < 16; i++) {
      removeItem(templist, 0);
    }
  }
  for (var i = 0; i < list.length; i++) {
    appendItem(templist, list[i]);
  }
}
var zeroind = list.indexOf(0);
var idenind = list.indexOf(identifier);
if ((idenind==11||idenind==7||idenind==3)&&(idenind+1==zeroind)) {
  return false;
} else if (((idenind==4||idenind==8||idenind==12)&&idenind-1==zeroind)) {
  return false;
} else if ((idenind<3&&(idenind-1==zeroind||idenind+1==zeroind||idenind+4==zeroind))) {
  movepiece(zeroind, idenind);
  return true;
  } else if ((idenind>12&&(idenind-1==zeroind||idenind+1==zeroind||idenind-4==zeroind))) {
  movepiece(zeroind, idenind);
  return true;
} else if (((idenind>=3&&idenind<=12)&&(idenind+4==zeroind||idenind-4==zeroind||idenind-1==zeroind||idenind+1==zeroind))) {
  movepiece(zeroind, idenind);
  return true;
}
}
function movepiece(zeroind, idenind) {
  j = 0;
  ypos = 20;
  temp = list[idenind];
  insertItem(list, idenind, 0);
  removeItem(list, idenind+1);
  insertItem(list, zeroind, temp);
  removeItem(list, zeroind+1);
  setposition(j, xpos);
  if (shufflecount>=150) {
    setTimeout(function() {
      checkWin();
    }, 200);
  }
}
function checkWin() {
  var counter = 0;
  for (var i = 0; i < list.length&&comparelist[i]==list[i]; i++) {
    counter++;
  }
  if (counter==16&&movecount!==0) {
    setScreen("WinScreen");
    setText("winmovenum", "You won in just "+movecount+" moves!");
  }
}
function OriginOrder() {
  stopTimedLoop();
  list = [];
  ypos = 20;
  for (var n = 1; n < 16; n++) {
    appendItem(list, n);
  }
  appendItem(list, 0);
  j = 0;
  setposition(j, xpos);
}
function setposition(j, xpos) {
  for (var m = 0; m < list.length; m++) {
    setPosition("Piece"+list[m], xpos+(70*j), ypos, 70, 70);
    j++;
    if (m==3||m==7||m==11) {
      ypos = ypos+70;
      j = 0;
    }
  }
}
