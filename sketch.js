var cockpit, cockpitImg;
//var shots = 5;
var bullet, bulletGroup;
var ship, ship2, ship3; ship4, ship5;
var skyImg, sky;
var badImage;
var badArray = []
var badImg;
var explosionImg;
//var level = 1;
var width = windowWidth/2;
var height = windowHeight/1.35;
var gameState = "play"


function preload(){
    cockpitImg = loadImage("cockpit.png");
    skyImg = loadImage("sky.png");
    badImg = loadImage("badFight.png");
    explosionImg = loadImage("explosion.png");
}


function setup(){

    
    
    //475
    createCanvas(windowWidth/2, windowHeight/1.35);

    bulletGroup = new Group();

    

    //237.5
    sky = createSprite(width/2, height/3, width, height);
    sky.addImage(skyImg);

    
   
    ship = createSprite(width/2, height/5.84, 30, 30);
    ship.addImage("Ship", badImg);
    ship.addImage("Boom", explosionImg);
    ship.scale = 0.4;
    ship.rotationSpeed = 2.5;

    ship2 = createSprite(width/3, height/3.89, 30, 30);
    ship2.addImage("Ship", badImg);
    ship2.addImage("Boom", explosionImg);
    ship2.scale = 0.4;
    ship2.rotationSpeed = 2.5;

    ship3 = createSprite(width/4, height/2.92, 30, 30);
    ship3.addImage("Ship", badImg);
    ship3.addImage("Boom", explosionImg);
    ship3.scale = 0.4;
    ship3.rotationSpeed = 2.5;

    ship4 = createSprite(width/1.5, height/3.89, 30, 30);
    ship4.addImage("Ship", badImg);
    ship4.addImage("Boom", explosionImg);
    ship4.scale = 0.4;
    ship4.rotationSpeed = 2.5;

    ship5 = createSprite(width/1.25, height/2.92, 30, 30);
    ship5.addImage("Ship", badImg);
    ship5.addImage("Boom", explosionImg);
    ship5.scale = 0.4;
    ship5.rotationSpeed = 2.5;

    cockpit = createSprite(width/2, height/3, 30, 30);
    cockpit.addImage(cockpitImg);
    cockpit.scale = 0.6
}


function draw() {
    background("white");

    //console.log(height)

        if(ship.rotation >= 50){
            ship.rotationSpeed = -2.5;
        } else if(ship.rotation <= -50){
        ship.rotationSpeed = 2.5;
        }

        
        if(ship2.rotation >= 50){
            ship2.rotationSpeed = -2;
        } else if(ship2.rotation <= -50){
        ship2.rotationSpeed = 2;
        }


        if(ship3.rotation >= 50){
            ship3.rotationSpeed = -2.3;
        } else if(ship3.rotation <= -50){
        ship3.rotationSpeed = 2.3;
        }


        if(ship4.rotation >= 50){
            ship4.rotationSpeed = -2.7;
        } else if(ship4.rotation <= -50){
        ship4.rotationSpeed = 2.7;
        }


        if(ship5.rotation >= 50){
            ship5.rotationSpeed = -2.1;
        } else if(ship5.rotation <= -50){
        ship5.rotationSpeed = 2.1;
        }
        

        //console.log(mouseX, mouseY)
        cockpit.x = camera.x;
        cockpit.y = camera.y + 60;

        cameraStuff();

        if(mouseWentDown("leftButton")){
            //11, -89
            //245, 215
            if(keyDown("c")===false){
                bullet = createSprite(camera.x+6, camera.y -89, 2, 2);
            } else {
                bullet = createSprite(camera.x+6, camera.y -29, 2, 2);
            }
            
        // bullet.visible = false;
            bullet.depth = cockpit.depth - 1;
            bullet.lifetime = 1;
            bulletGroup.add(bullet);

            //shots -= 1;
        }

        if(bulletGroup.isTouching(ship)){
            ship.lifetime = 20;
            ship.changeImage("Boom", explosionImg)
            bullet.destroy();
        }

        if(bulletGroup.isTouching(ship2)){
            ship2.lifetime = 20;
            ship2.changeImage("Boom", explosionImg)
            bullet.destroy();
        }

        if(bulletGroup.isTouching(ship3)){
            ship3.lifetime = 20;
            ship3.changeImage("Boom", explosionImg)
            bullet.destroy();
        }

        if(bulletGroup.isTouching(ship4)){
            ship4.lifetime = 20;
            ship4.changeImage("Boom", explosionImg)
            bullet.destroy();
        }

        if(bulletGroup.isTouching(ship5)){
            ship5.lifetime = 20;
            ship5.changeImage("Boom", explosionImg)
            bullet.destroy();
        }


        //console.log(ship.rotation);
        if(ship.rotation <= 0){
            ship.velocityX = -2;
        } else {
            ship.velocityX = 2;
        }

        if(ship2.rotation <= 0){
            ship2.velocityX = -2;
        } else {
            ship2.velocityX = 2;
        }

        if(ship3.rotation <= 0){
            ship3.velocityX = -2;
        } else {
            ship3.velocityX = 2;
        }

        if(ship4.rotation <= 0){
            ship4.velocityX = -2;
        } else {
            ship4.velocityX = 2;
        }

        if(ship5.rotation <= 0){
            ship5.velocityX = -2;
        } else {
            ship5.velocityX = 2;
        }

        

        if(ship.scale >= 0.05){
            if(frameCount%1 === 0){
                ship.scale = ship.scale - 0.002;
            }
        }

        if(ship2.scale >= 0.05){
            if(frameCount%1 === 0){
                ship2.scale = ship2.scale - 0.002;
            }
        }

        if(ship3.scale >= 0.05){
            if(frameCount%1 === 0){
                ship3.scale = ship3.scale - 0.002;
            }
        }

        if(ship4.scale >= 0.05){
            if(frameCount%1 === 0){
                ship4.scale = ship4.scale - 0.002;
            }
        }

        if(ship5.scale >= 0.05){
            if(frameCount%1 === 0){
                ship5.scale = ship5.scale - 0.002;
            }
        }
        
        

        if(keyDown("c")){
        // camera.y += World.mouseY + 100;
            camera.zoom = 3
            cockpit.y += 60
            cockpit.x -=5
            //camera.y += 100
        }

        if(keyWentUp("c")){
            camera.zoom = 1
            cockpit.y -= 60
        }

    

    drawSprites();
  }


  function cameraStuff(){
    
    camera.y=World.mouseY;
    camera.x=World.mouseX;
  }

