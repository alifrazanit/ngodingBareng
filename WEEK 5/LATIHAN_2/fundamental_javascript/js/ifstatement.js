let todayisrain = false;
let res = todayisrain ? 'Pakai Payung' : 'tidak pakai payung'; //one line if statement
alert(res);

let now = new Date().getHours();
if(now === 2) alert('Bangun tidur');
if(now === 4) alert('Sholat subuh');
if(now === 5) alert('Beberes');
if(now === 9) alert('Kerja');
if(now === 12) alert('Zuhur Isoma');
if(now === 15) alert('Ashar dulu gan');
if(now === 17) alert('Beres Kerja');
if(now === 18) alert('Hayo magrib');
if(now === 19) alert('Isya jangan ketinggalan');
if(now > 20) alert('Ngoding gan..');

let kodedia = 140918;
if(kodedia === 140918){
    alert('Bissmillah insha Allah dipermudah untuk menghalalkan');
} else if(typeof(kodedia) !== 'number'){
    alert('Masukan kodenya gan');
} else{
    alert('Bissmillah mengikuti takdir Allah');
}

let lahir = 1997;
let tahunIni = new Date().getFullYear();
let umur = tahunIni - lahir;

if(umur >= 1 && umur <= 9){
    alert('Masih dede dede');
} else if(umur >= 10 && umur <= 15){
    alert('Remaja Galau');
} else if(umur >= 16 && umur <= 20){
    alert('Nyari jati diri katanya mah');
} else if(umur >= 21 && umur <= 25){
    alert('Dewasa dan harus segera menikah :)');
} else {
    alert('Kamu sudah harus berkeluarga');
}