var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// PLAYER 1 

var sonic = createSprite(16,16,15,15);

var wall1 = createSprite(40,81,10,100);
var wall2 = createSprite(94,36,100,10);
var wall3 = createSprite(139,62,10,60);
var wall5 = createSprite(190,127,10,100);
var wall6 = createSprite(231,50,10,58);
var wall7 = createSprite(273,22,93,10);
var wall8 = createSprite(16,126,40,10);
var wall9 = createSprite(140,172,100,10);
var wall4 = createSprite(320,70,10,200);
var wall10 = createSprite(210,74,50,10);
var wall11 = createSprite(274,140,10,140);

// Seperating line

var wall0 = createSprite(200,212,500,10);

// PLAYER 2

var shadow = createSprite(16,230,15,15);

// BORDER 

var wall40 = createSprite(320,270,10,200);

var wall12 = createSprite(42,300,10,110);
var wall20 = createSprite(92,250,106,10);
var wall30 = createSprite(140,280,10,60);
var wall45 = createSprite(190,320,10,100);
var wall50 = createSprite(232,280,10,70);
var wall70 = createSprite(276,250,95,10);
var wall80 = createSprite(16,350,45,10);
var wall90 = createSprite(140,365,100,10);
var wall100 = createSprite(210,310,40,10);
var wall110 = createSprite(274,360,10,140);

var Ring1 = createSprite(292,270,20,20);
var Ring2 = createSprite(292,42,20,20);

// COLOURS

wall1.shapeColor ="gold";
wall2.shapeColor ="gold";
wall3.shapeColor ="gold";
wall4.shapeColor ="gold";
wall5.shapeColor ="gold";
wall6.shapeColor ="gold";
wall7.shapeColor ="gold";
wall8.shapeColor ="gold";
wall9.shapeColor ="gold";
wall10.shapeColor ="gold";
wall11.shapeColor ="gold";

wall0.shapeColor ="gold";

wall40.shapeColor ="gold";
wall12.shapeColor ="gold";
wall30.shapeColor ="gold";
wall45.shapeColor ="gold";
wall50.shapeColor ="gold";
wall80.shapeColor ="gold";
wall70.shapeColor ="gold";
wall90.shapeColor ="gold";
wall100.shapeColor ="gold";
wall110.shapeColor ="gold";
wall20.shapeColor ="gold";

function draw(){
  createEdgeSprites();
  background("purple");
  
  sonic.shapeColor=("Blue");
  shadow.shapeColor=("Black");
  
  Ring1.shapeColor=("Yellow");
  Ring2.shapeColor=("Yellow");
  
  // CREATING EDGES AND COLLISON
  
  sonic.bounceOff(edges);
  shadow.bounceOff(edges);
  
  sonic.bounceOff(wall3);
  sonic.bounceOff(wall2);
  sonic.bounceOff(wall1);
  sonic.bounceOff(wall4);
  sonic.bounceOff(wall5);
  sonic.bounceOff(wall6);
  sonic.bounceOff(wall7);
  sonic.bounceOff(wall8);
  sonic.bounceOff(wall9);
  sonic.bounceOff(wall10);
  sonic.bounceOff(wall11);
  sonic.bounceOff(wall0);
  
  shadow.bounceOff(wall12);
  shadow.bounceOff(wall20);
  shadow.bounceOff(wall30);
  shadow.bounceOff(wall45);
  shadow.bounceOff(wall50);
  shadow.bounceOff(wall70);
  shadow.bounceOff(wall80);
  shadow.bounceOff(wall90);
  shadow.bounceOff(wall40);
  shadow.bounceOff(wall100);
  shadow.bounceOff(wall110);
  shadow.bounceOff(wall0);
  
  // MOVEMENT
  
  if(keyDown(UP_ARROW)) {
    sonic.velocityX = 0;
    sonic.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW)){
    sonic.velocityX = 0;
    sonic.velocityY = 5;
  }
  
  if(keyDown(LEFT_ARROW)){
    sonic.velocityX = -5;
    sonic.velocityY = 0;
  }
  
  if(keyDown(RIGHT_ARROW)){
    sonic.velocityX = 5;
    sonic.velocityY = 0;
  }
  if(keyDown("w")) {
    shadow.velocityX = 0;
    shadow.velocityY = -5;
  }
  
  if(keyDown("s")){
    shadow.velocityX = 0;
    shadow.velocityY = 5;
  }
  
  if(keyDown("a")){
    shadow.velocityX = -5;
    shadow.velocityY = 0;
  }
  
  if(keyDown("d")){
    shadow.velocityX = 5;
    shadow.velocityY = 0;
  }
  
  // WIN STATES
  
  if (sonic.isTouching(Ring2)) {
  sonic.velocityX= 0;
  sonic.velocityY= 0;
  
  fill("Orange");
  textSize(50);
  text("Sonic Wins", 70, 212);
  
  sonic.destroy()
  shadow.destroy()
  
  Ring1.destroy()
  Ring2.destroy()
  
  wall1.destroy()
  wall2.destroy()
  wall3.destroy()
  wall4.destroy()
  wall5.destroy()
  wall6.destroy()
  wall7.destroy()
  wall8.destroy()
  wall9.destroy()
  wall10.destroy()
  wall11.destroy()
  
  wall0.destroy()
  
  wall12.destroy()
  wall20.destroy()
  wall30.destroy()
  wall45.destroy()
  wall50.destroy()
  wall70.destroy()
  wall80.destroy()
  wall90.destroy()
  wall100.destroy()
  wall110.destroy()
  wall140.destroy()
  }
  
  if (shadow.isTouching(Ring1)) {
  shadow.velocityX= 0;
  shadow.velocityY= 0;
  
  fill("Orange");
  textSize(50);
  text("Shadow Wins", 45, 212);
  
    sonic.destroy()
  shadow.destroy()
  
  Ring1.destroy()
  Ring2.destroy()
  
  wall1.destroy()
  wall2.destroy()
  wall3.destroy()
  wall4.destroy()
  wall5.destroy()
  wall6.destroy()
  wall7.destroy()
  wall8.destroy()
  wall9.destroy()
  wall10.destroy()
  wall11.destroy()
  
  wall0.destroy()
  
  wall12.destroy()
  wall20.destroy()
  wall30.destroy()
  wall45.destroy()
  wall50.destroy()
  wall70.destroy()
  wall80.destroy()
  wall90.destroy()
  wall100.destroy()
  wall110.destroy()
  wall140.destroy()
  }

drawSprites();
  
} 
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
