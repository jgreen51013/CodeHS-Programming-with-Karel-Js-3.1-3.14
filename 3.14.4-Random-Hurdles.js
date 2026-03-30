function start(){
    for(var i = 0; i < 13; i++){
        see();
    }
}
function jump(){
	turnLeft();
	move();
	turnRight();
	move();
	turnRight();
	move();
	turnLeft();
}
function see(){
    if(frontIsBlocked()){
        jump();
    }else {
        move();
    }
}
