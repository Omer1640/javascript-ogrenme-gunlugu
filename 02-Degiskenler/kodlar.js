// Değişkenler

// 31 Mayıs 2026 - Enes Bayram Kursu - Bölüm 7  - Ders 65

// * Scope Kavramı : Scope Kapsam demek

// * Global Scope (Her yerden erişilebilen)

// var a = 5;

// if bloğu içerisinden erişme

// if (true) {
//   console.log(a);
// }

// fonksiyon içerisinden erişme
// function method1() {
//   console.log(a);
// }
// method1();

// * Function Scope ( Sadece functionun içerisinden erişilebilendir dışardıdan functiona erişim sağlanamaz)

// * Bu kullanım doğru
// function method1() {
//   var a = 10;
//   console.log(a);
// }
// method1();

// * Bu kullanım yanlış
// function method1() {
//   var a = 10;
// }
// console.log(a);
// method1();

// * Block Scope (Bir functionun içersine açılmış if, while, for yani bir yapının içinde bir blok açılmasıdır )

/* function method1() {
  if (true) {  // block scope örneği
    var a = 12;
    console.log(a);
  }
}
method1(); */

// 01 Haziran 2026 - Enes Bayram Kursu - Bölüm 7  - Ders 66

// * Var & Let & Const Farkları

// * var/let/const degiskenIsmi = deger;  bu şekilde değişken tanımlanır

// let sayi = 10;

//* Var: Var ile tanımlanan her şey function scope olur her yerden erişim sağlarız varda aynı değişken isimlerini kullanabiliriz eksi yönü ram bellekte çok fazla yer kaplar ve uygulamayı yavaşlatır var ile değişken tanımlama tercih edilmiyor.

// var a = 5;
// var a = 20;
// console.log(a);

/* function selamVer() {
  var selam = "Herkese Selam"; // function scope
  if (true) {
    var a = 10;
      console.log(a);
  }
  console.log(a);
  console.log(selam);
  
}
selamVer();
*/

// * let/const : block scope özelliğine sahiptir block dışında erişilemez hata verir. Let ve const aynı değişken ismini kullanamazlar

/* let a = 5;
 let a = 20;
 console.log(a); Yanlış kullanım
 */

/* const a = 5; 
 const a = 20;
console.log(a);  Yanlış kullanım
*/

/* function selamVer() {
  var selam = "Herkese Selam";
  if (true) {
    let a = 10;
    console.log(a); // Doğru
  }
  console.log(a); // Yanlış
  console.log(selam);
}
selamVer();
*/

// * const & let arasındaki fark

// * const (constant) : sabit, değişmez

// const a = 5;
// a = 20;
// console.log(a);

// * let: Değiştirilebilir

let a = 5;
a = 20; 
console.log(a);

