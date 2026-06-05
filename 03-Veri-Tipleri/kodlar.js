// Veri Tipleri

// 05 Haziran 2026 - Enes Bayram Kursu - Bölüm 8  - Ders 67

// ? Veri Tipleri

/*
1- String  

let name = "Ömer";
let  surname= "Kurnaz" 
console.log(name +" " + surname);

2-Number

let number1 = 12;
let number2 = 23;
console.log(number1+number2);

3-Boolean
let number1 = 12;
let number2 = 13;
let sonuc = number1 + number2;
console.log(sonuc > 25)

4-Null
let a = null;
a = 15;
console.log(a);


5-Undefined
let a;
console.log(a)

6-Object
let personel = {
name: "Ömer Kurnaz",
job: "Frontend Developer",
wage: "35.000₺"
}
console.log(personel);

7-Function

let func = function() {
console.log("Merhaba");
}
func();

*/

// ? Primitive Veri Tipleri (İlkel Veri Tipleri)

// * 1-) String Veri tipi: Metinsel  ifadelerde "" içerisinde kullanılır.
// let isim = "Ömer Kurnaz";
// console.log(isim);
// verinin tipini öğrenmek için (typeof isim) kullanılır

// * 2-) Number Veri tipi: Rakam olarak kulanacağımız verilerimizi number veri tipinde tutariz.

// let sayi = 15;
// console.log(sayi);
// console.log(typeof sayi);

// number veri tipinde toplama işlemi
// let sayi1 = 5.7;
// let sayi2 = 6.3;
// console.log(sayi1 + sayi2);

// string veri tipinde birleştirme işlemi
// let a = "5";
// let b = "6";
// console.log(a + b); // Burada birleştirme yapar

// ! Not: yukarda iki tane string ifadeyi toplama işlemi yapıldığında 56 sonucunu alırız stringlerde toplama olmaz birleştirme yapar.

// * Örnek Uygulama: Yaşınız: 24 ekrana yazdır:

// let age = "Yaşınız:";
// let sayi = 24;
// console.log(age + " " + sayi);

// * 3-) Boolean Veri tipi: Koşul sağlıyorsa true  koşul sağlamıyorsa false döner.

// console.log(10 > 5); true olur
// console.log(10 < 5); false olur

// let a = 9;
// let b = 8;
// let sonuc = a + b;
// console.log(sonuc > 18);  false olur

// * 4-) Null Veri tipi: Boş olarak kullanırız sonradan bir değer ataması yapmak için.

// let a = null; Boş
// a = 25;
// console.log(a);

// * 5-) Undefined Veri tipi: Değer ataması yapılmamış.

// let a;  değer ataması yapılmamış undefined olur
// console.log(a);

// ? Referans Veri Tipleri (Gelişmiş Veri Tipleri)

// * 6-) Object Veri tipi: Süslü Parantez içerisinde yazılır.

// let name = {
//   isim: "Ömer",
//   soyisim: "Kurnaz",
//   yas: 24
// };
// console.log(bio);

// * 7-) Function Veri tipi: Tekrar kullanılabilir kod bloklarının kendisini ifade eden veri tipidir.

// let func = function() {
// console.log("Merhaba");
// }
// func();
