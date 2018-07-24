var c = document.getElementById('biscuit')
var ctx = c.getContext("2d")
ctx.beginPath();
ctx.arc(200,55,55,0,2*Math.PI);
ctx.closePath();
ctx.fillStyle = "#976F0F";
ctx.fill();
//bouche
ctx.beginPath();
ctx.moveTo(225,65);
ctx.quadraticCurveTo(200,75,175,65);
ctx.closePath();
ctx.strokeStyle = "red";
ctx.stroke();
//bras
ctx.beginPath();
ctx.lineWidth = "30";
ctx.lineCap = "round";
ctx.moveTo(50,105);
ctx.lineTo(350,105);
ctx.lineTo(350,105);
ctx.strokeStyle = "#976F0F";
ctx.stroke();
ctx.closePath();
//corps
ctx.beginPath();
ctx.fillRect(145,120,110,150);
ctx.closePath();
ctx.fillStyle = "#976F0F";
ctx.fill();
//pied droit
ctx.beginPath();
ctx.lineWidth = "40";
ctx.lineCap = "round";
ctx.moveTo(165,225);
ctx.lineTo(165,325);
ctx.lineTo(165,325);
ctx.strokeStyle = "#976F0F";
ctx.stroke();
ctx.closePath();
//pied gauche
ctx.beginPath();
ctx.lineWidth = "40";
ctx.lineCap = "round";
ctx.moveTo(235,225);
ctx.lineTo(235,325);
ctx.lineTo(235,325);
ctx.strokeStyle = "#976F0F";
ctx.stroke();
ctx.closePath();
//pied milieu
ctx.beginPath();
ctx.lineWidth = "30";
ctx.lineCap = "round";
ctx.moveTo(200,275);
ctx.lineTo(200,300);
ctx.lineTo(200,300);
ctx.strokeStyle = "white";
ctx.stroke();
ctx.closePath();
//bouton
ctx.beginPath();
ctx.arc(200,140,10,0,2*Math.PI);
ctx.closePath();
ctx.fillStyle = "#7A2976";
ctx.fill();
//bouton
ctx.beginPath();
ctx.closePath();
ctx.arc(200,180,10,0,2*Math.PI);
ctx.fillStyle = "#7A2976";
ctx.fill();
//yeux
ctx.beginPath();
ctx.closePath();
ctx.arc(180,40,10,0,2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
//yeux
ctx.beginPath();
ctx.closePath();
ctx.arc(220,40,10,0,2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
