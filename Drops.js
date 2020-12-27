class Drops{
    options = {
        constructor(){
            this.position.x = pointA,
            this.position.y = pointB
        }
    }
    
    ellipse = Matter.body.create(this.position.x,this.position.y,10,10,5);

    update(){
        if(this.position.y === 800){
            this.position.y = 0;
        }
    }

    ellipse(){
        this.ellipse.create;
    }

}