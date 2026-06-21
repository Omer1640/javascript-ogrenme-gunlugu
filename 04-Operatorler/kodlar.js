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

// 20 Haziran 2026 - Enes Bayram Kursu - Bölüm 9  - Ders 70

// * Mantıksal Operatörler

/*
    && : ve operatörü
    || : veya operatörü
    ! : değil operatörü

*/

// * && ve operatörü : her iki koşuluda sağlaması gerekir yani birisi false diğeri true olursa sonuç false olur her ikiside true olmalı.

// Ehliyet Almak isteyen birisi: Yaşı 18'e eşit veya 18'den büyükse ve  28000 TL veya daha fazla parası varsa ehliyet alabilir.

// let age = 18;
// let cash = 25000;
// console.log(age >= 18 && cash >= 28000);  birinci koşulu sağlıyor ama ikinci koşulu sağlamadığı için false olur.

// yaş 18 den büyükse ve 30000 TL para varsa ve sağlık koşullarını sağlıyorsa ehliyet alabilir.

// let age = 19;
// let cash = 31000;
// let health = true;

// console.log(age > 18 && cash > 30000 && health);

// * || veya operatörü : her iki koşuldan birisi true olursa sonuç true olur.

// console.log(5 > 3 || 2 < 1);  true olur

/*
let age = 19;
let cash = 31000;
let health = false;

console.log(age > 18 && cash > 30000 || health); burada true olur 
*/

// * ! değil operatörü : koşulun tersini verir.

// console.log(!(10 < 5 && 4 > 3));  false true yaptı

// * Örnek Uygulama : Üni Sınavına giriş için gereken şartlar yaş 17 ve üzeri ,lise mezunu , sınav başvurusu

// let age = 17;
// let graduate = false;
// let application = true;

// console.log((age >= 17 && graduate) || (age>=17 && application)); birinci koşul false ikinci koşul true
// console.log((age >= 17 && graduate) && (age>=17 && application)); her iki koşulda true olmadığı için sonuç false olur
// console.log(!(age >= 17 && graduate) && (age>=17 && application)); true olur

// 21 Haziran 2026 - Enes Bayram Kursu - Bölüm 9  - Ders 71

// * Karşılaştırma Operatörleri

/*

 == : eşit mi
 != : eşit değil mi
 > : büyük mü
 < : küçük mü
 >= : büyük eşit mi    
 <= : küçük eşit mi
*/

// * (==) eşit mi: iki sayının birbirine eşitliğinde kullanılır.

// console.log(20 == 20);
// console.log("20" == 20); burda sadece sayıların eşitliğine bakar eşitse true döner tip kontrolü yapmaz

// * (!=) eşit değil mi: iki sayının eşit olmadığını gösterir.

// console.log(10!=3);

// let age = 24;
// console.log(age!=18);

// * (>) büyük mü : sayıların büyük mü olduğunu gösterir.

// let a = 20;
// let b = 12;
// console.log(a > b);

// * (<) küçük mü : sayıların küçük mü olduğunu gösterir.

// let a = 56;
// let b = 42;
// console.log(a < b);

// * (>=) büyük eşit mi : sayıların büyük veya eşit olduğunu gösterir.
// let sayi = 24;
// console.log(sayi >= 22);  sayi değişkeni büyük olduğu için true olur
// console.log(sayi >= 24);  sayi değişkeni 24 sayısına eşit olduğu için true olur.

// * (<=) küçük eşit mi : sayıların küçük veya eşit olduğunu gösterir.
// let sayi = 24;
// console.log(sayi <= 25); sayi değişkeni 25 sayısından küçüktür sonuç true
// console.log(sayi <= 18); sayi değişkeni 18 sayısından küçük ve eşit değildir sonuç false 
