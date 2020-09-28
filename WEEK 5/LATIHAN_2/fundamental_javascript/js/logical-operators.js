
/**
 * simplenya 
 ATAU = ||
 DAN = &&
 TIDAK = ! 
 TIDAK = !=
 */
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}
let iya = true;
let tapi = true;
let itu = 'kamu';
if(!iya){
    alert('tidak iya');
} else {
    alert('iya');
    if(tapi && itu ==='kamu'){
        alert('tapi itu kamu');
    } else if(tapi && itu !=='kamu'){
        alert('tapi itu bukan kamu');
    } else {
        alert('pusing')
    }
}