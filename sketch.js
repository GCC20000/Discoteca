var it 

function setup() {
  createCanvas(400,400);
  it=createSprite (200,200,100,100)
}

function draw() 
{
  background(30);
  if (keyDown("d"))
  {it.position.x=it.position.x+5
  background("orange")
  }
  if(keyDown("s"))
  {it.position.y=it.position.y+5
  background("yellow")
  }
  if(keyDown("a"))
  {it.position.x=it.position.x-5
  background("red")
  }
  if(keyDown("w"))
  {it.position.y=it.position.y-5
  background("blue")
  }
  
  drawSprites()
}




