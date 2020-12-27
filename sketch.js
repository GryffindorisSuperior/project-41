function preload(){
    
}

function setup(){
   umbrella = new Umbrella(70,60,10,10);
   var maxDrops = 100;
   for(var i = 0; i<maxDrops; i++){
       drops.push(new createDrop(random(0,400), random(0,400)));
   }
}

function draw(){
    createCanvas(1600,800)
}   

