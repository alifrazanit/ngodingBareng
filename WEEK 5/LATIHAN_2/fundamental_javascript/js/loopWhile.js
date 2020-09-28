let namaKu = prompt("Siapa nama Anda?");
if(typeof(namaKu) !=='string'){
    alert("Masukkan Nama!!");
} else {
    let sebut3kali = 3;
    let i = 0;
    while(namaKu.toLowerCase() ==='bento'){
        alert(namaKu);
        i++;
        if(i === 3){
            break;
        }
    }
    if(namaKu.toLowerCase() !== 'bento'){
        alert(`Ga asik lu ${namaKu}`);
    }
}

