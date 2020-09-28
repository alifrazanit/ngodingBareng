alert("hi");

let title = 'Masukan Nama Anda';
let defaultName = 'masukkan nama anda...';

result = prompt(title, [defaultName]);
alert(`Hallo ${result}`);

let QA = confirm("Apakah Anda ingin melanjutkan?");

if(QA){
    alert('Bagus !');
} else {
    alert(':(');
}