const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const c = canvas.getContext("2d")
let x = 100;
let y = 100;
let width = 100;
let height = 100;

//box
c.fillStyle = "dodgerblue";
c.fillRect(x, y, width, height) 
c.fillStyle = "tomato";
c.fillRect(x*3, y*4, width, height);
c.fillStyle = "gold"; 
c.fillRect(x*6, y*2, width, height) 

// Line

c.beginPath();
let number = 20;

c.moveTo(50, 300); //x and y cordinates
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3";
c.stroke();


// Arc / Circle



for(let i = 0; i < 24; i++){

    const r = Math.random() * 50;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    c.beginPath();
    c.arc(x,y, r,0, Math.PI * 2, false);
    c.strokeStyle = "#" + randomColor;
    c.stroke();
}

