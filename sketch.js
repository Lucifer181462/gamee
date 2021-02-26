var hypnoBall,database,position;

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    hypnoBall = createSprite(250,250,10,10);
    hypnoBall.shapeColor = "red";
    var hypnoBallPosition = database.ref("ball/position")
    hypnoBallPosition.on("value",readPosition)
}

function draw(){
    background("white");
if(position!==undefined) {



    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}
function writePosition(x,y){
    database.ref("ball/position").set({
        x:position.x+x,
        y:position.y+y
    })
   
}

function readPosition(data) {
    position = data.val()
    hypnoBall.x = position.x;
    hypnoBall.y = position.y;
    
}