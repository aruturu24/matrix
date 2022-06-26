var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

var characters = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
characters = characters.split("");

var font_size = 20;
var cols = Math.floor(c.width / font_size) + 1;
var ypos = Array(cols).fill(0);

var font_color = "#0F0";
var random_char = true;

function draw() {
  ctx.fillStyle = "#0001";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = font_color;
  ctx.font = font_size + "px arial";

  ypos.forEach((y, i) => {

    const txt = random_char ? characters[Math.floor(Math.random() * characters.length)] : characters[i % characters.length];
    const x = i * font_size;
    ctx.fillText(txt, x, y);
    
    if(y > font_size * 5 && Math.random() > 0.975) {
      ypos[i] = 0;
    }else {
      ypos[i] = y + font_size;
    }
  });
}

c.addEventListener("click", (e) => {
  document.getElementById("options").classList.toggle("hide");
});

function saveChanges() {
  font_color = document.getElementById("color").value;
  characters = document.getElementById("chars").value || characters.join("");
  characters = characters.split("");
  random_char = document.getElementById("rand").checked;
}

setInterval(draw, 75);
