// * Operatörler

// 12 Haziran 2026 - Enes Bayram Kursu - Bölüm 9  - Ders 68

// * Aritmetik Operatörler

// ! Not:  =  atama operatörüdür 5 = 5 eşittir değildir.

// let sayi = 5; 5 sayısını sayi değişkenine atamış oldum.

// ? Aritmetik Operatörler şunlardır
/*
 "+": Sayısal ifadelerde toplama işlemi , string ifadelerin olduğu yerde birleştirme  

 "-": Sayısal ifadelerde çıkarma işlemi yapar

 "*": Sayısal ifadelerde çarpma işlemi yapar

 "/": Sayısal ifadelerde bölme işlemi yapar

 "%": Mod alma (bölünen sayının kalanını bulur)

 "++": Sayıları bir bir artırır

 "--": Sayıları bir bir azaltır

"**": üs almada kullanılır
*/

// *  "+" Operatörü

// Sayısal ifadelerde kullanımı
// let sayi1 = 10;
// let sayi2 = 20;
// let toplam = sayi1 + sayi2;
// console.log(toplam);

// String ifadelerdeki birleştirme görevi
/*
let sayi1 = 200;
let sayi2 = 600;
console.log("Toplam Sonuç:" + (sayi1 + sayi2));  Buradaki Çıktı string ifade ile number ifadeyi birleştirdi.
*/

// *  "-" Operatörü
// Sayısal ifadelerde çıkarma işlemi yapar
// let kazanc = 80.0;
// let borc = 25.0;
// let kalan = kazanc - borc;
// console.log("Geriye kalan toplam para:" + " " + kalan);

// *  "*" Operatörü
// Sayısal ifadelerde çarpma işlemi yapar
// console.log(10 * 50);
// let a = 25;
// let b = 16;
// let carpim = a * b;
// console.log(carpim);

// *  "/"  Operatörü
// Sayısal ifadelerde bölme işlemi yapar
// let sayi1 = 77;
// let sayi2 = 13;
// console.log((sayi1 + sayi2) / 2);

// *  "%" (Mod Alma) Operatörü
// iki tane bölünen sayının kalanını bulur
// let sayi1 = 34;
// let sayi2 = 16;
// console.log(sayi1 % sayi2);
// *  "++"  Operatörü
// sayıları birer birer artırır
// let a = 12;
// a++;
// a++;
// a++;
// a++;
// console.log(a);

// *  "--"  Operatörü
// sayıları birer birer azaltır
// let a = 28;
// a--;
// a--;
// a--;
// console.log(a);

// * (**) Operatörü
// Sayısal ifadelerde üs alma olarak kullanılır

// let a = 8;
// let b = 4;
// console.log(a ** b);

// 13 Haziran 2026 - Enes Bayram Kursu - Bölüm 9  - Ders 69

// * Atama Operatörleri

/*
    =  sağ taraftaki değeri değişkene atar
    == iki değerin eşitliğini ifade eder tipine bakmaz sadece değerine bakar 
    === burda tip kontrolü yapılır hem değere hemde tipinin eşitliğine bakılır
    += önce sayıyı toplayıp sonra değişkenin içerisine atar 
    -= önce sayıyı çıkarıp sonra değişkenin içerisine atar
    (*=) önce sayıyı çarpıp sonra değişkenin içerisine  atar
    /= önce sayıyı bölüp sonra değişkenin içerisine  atar
    %= önce sayıyının modunu yani kalanını bulur sonra değişkenin içerisine  atar
    **= önce sayının üssünü alır sonrada değişkenin içerisine atar
*/

// * (=) sağ tarafta bulunan değeri değişkenin içerisine atar.

// let a = 10;
// console.log(a);

// * (==) değerlerin birbirlerine eşit olup olmadığını kontol eder

// let sayi = 50;
// console.log(sayi == 40); false
// console.log(sayi == "50");  burada sadece değere bakar true olur.

// * (===) değerlere ve veri tiplerine bakar ikiside eşit olmalı

/* 
 let sayi1 = 24;
let sayi2 = "24";
console.log(sayi1 === sayi2); burada false döner çünkü değerler birbirine eşit 
ama veri tipleri eşit değil.

let a = "45";
let b = "45";
console.log(a === b); true döner
*/

// * (+=) önce sayıyı toplayıp sonrada değişkene atar.
// bu eski yöntem
// let a = 10;
// a = a + 5;
// console.log(a);

// Yeni pratik yöntem
// a += 5;
// console.log(a);
// * (-=) önce sayıyı çıkarıp sonrada değişkene atar.
// bu eski yöntem
//  a = a - 3;
// console.log(a);

// Yeni pratik yöntem
// a -= 3;
// console.log(a);
// * (*=) önce sayıyı çarpıp sonrada değişkene atar.
// bu eski yöntem
// a = a * 9;
// console.log(a);

// Yeni pratik yöntem
// a *= 9;
// console.log(a);
// * (/=) önce sayıyı böler sonrada değişkene atar.
// bu eski yöntem
// a = a / 2;
// console.log(a);

// Yeni pratik yöntem
// a/= 2;
// console.log(a);
// * (%=) sayının modunu(kalanını) bulur sonrada değişkene atar.
// bu eski yöntem
// a = a % 7;
// console.log(a);

// Yeni pratik yöntem
// a%= 7;
// console.log(a);
// * (**=) önce sayının üssünü alır sonrada değişkene atar.
// bu eski yöntem
// a = a**3;
// console.log(a);

// Yeni pratik yöntem
// a**= 3;
// console.log(a);