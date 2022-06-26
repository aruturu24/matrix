var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

var characters = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
characters = characters.split("");

var font_size = 20;
var cols = Math.floor(c.width / font_size) + 1;
var ypos = Array(cols).fill(0);

function draw() {
  ctx.fillStyle = "#0001";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px arial";

  ypos.forEach((y, i) => {
    const txt = characters[Math.floor(Math.random() * characters.length)];
    const x = i * font_size;
    ctx.fillText(txt, x, y);
    
    if(y > font_size * 5 && Math.random() > 0.975) {
      ypos[i] = 0;
    }else {
      ypos[i] = y + font_size;
    }
  });
}

setInterval(draw, 75);
