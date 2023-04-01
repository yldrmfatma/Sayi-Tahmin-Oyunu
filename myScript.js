let guess=prompt("Lütfen dört basamaklı bir sayı giriniz: ");
function randNumFunc(min,max){

    let randNum = Math.floor (Math.random()* (max - min) + min);
    return randNum;
}
let rand=randNumFunc(1000,9999);
let rands=rand.toString();

console.log("1000 ile 9999 arasında rastgele sayı üretildi: ",rands);
console.log("Tahmin edilen dört basamaklı sayı: ",guess);

const rand_arr=rands.split('');
//console.log(rand_arr)
const guess_arr=guess.split('');
//console.log(guess_arr)

//rastgele üretilen sayı değerlerine göre tahmin sayı değerleri kontrol edilmiştir
for(let i=0; i<rand_arr.length;i++){
    if(rand_arr[i]==guess_arr[i])
    {
        console.log( (i+1) + ". sırada hem sayı hem de değerini buldunuz." + rand_arr[i] )
    }
    else if (guess_arr.includes(rand_arr[i])==true)
    {
        console.log((i+1) +" .sıranın değerini buldunuz.");
    }
    else if (guess_arr.includes(rand_arr[i])==false)
    {
        console.log((i+1) +" .sıra için değer bulunamadı.");
    }
}