/*=============== 1. pop() =============== */

// Fungsi ini berfungsi menghapus elemen terakhir dari sebuah array serta akan mengembalikan nilai terakhir yang telah dihapus tersebut

// contoh:
const bulan = ['March', 'Jan', 'Feb', 'Dec'];
const angka = [2, 3, 5, 3, 6, 6, 4]

console.log(bulan.pop()); // "Feb"
console.log(angka.pop()); // 4


/*=============== 2. isArray() =============== */

// Fungsi ini berfungsi mengecek suatu data yang dimasukan ke dalam parameternya adalah berbentuk array atau bukan. Fungsi ini mengembalikan nilai boolean yang mana jika yang dimasukan adalah array maka akan bernilai true dan begitu pun sebaliknya.

// contoh:
const bulan2 = ['March', 'Jan', 'Feb', 'Dec']
const kata3 = "Bulan Purnama"

console.log(Array.isArray(bulan2)); // true
console.log(Array.isArray(kata3)); // false

/*=============== 3. includes() =============== */

// Fungsi ini bisa digunakan untuk tipe data array dan string. Berfungsi untuk mengecek apakah terdapat elemen yang sesuai dengan nilai yang dimasukan lewat parameternya yang mana jika benar terdapat maka akan mengembalikan nilai true tetapi jika tidak ada maka akan mengembalikan nilai false

// contoh:
const bulan3 = ['March', 'Jan', 'Feb', 'Dec'];
const kalimat = "ayam makan jagung"

console.log( bulan3.includes('Dec') ); //true
console.log( kalimat.includes("api") ); //false

/*=============== 4. join() =============== */

// Fungsi ini berfungsi untuk membentuk sebuah string dari kumpulan elemen array. Secara opsional, jika parameter ini diisi (string), maka nilai dari parameter itu akan menjadi perantara (separator) dari setiap elemen yang telah digabung menjadi sebua string. Jika parameter tidak diisi makan yang menjadi separatornya ialah koma (,)

// contoh:
const bulan4 = ['March', 'Jan', 'Feb', 'Dec'];

console.log( bulan4.join() ); // "March,Jan,Feb,Dec"
console.log( bulan4.join('') ); // "DecFebJanMarch"


/*=============== 5. lastIndexOf() =============== */

// Fungsi ini berfungsi mencari index terakhir dari elemen yang dimasukan lewat parameter. Jika tidak ada elemen yang sesuai dengan parameternya maka akan mengembalikan nilia -1

// contoh:
const bulan5 = ['March', 'Jan', 'Feb', 'Dec'];
const angka3 = [2, 3, 5, 3, 6, 6, 4]

console.log( bulan5.lastIndexOf('Feb') ); // 2
console.log( angka3.lastIndexOf(3) ); // 3
console.log( angka3.lastIndexOf(10) ); // -1


/*=============== 6. toString =============== */

// Fugngsi ini berfungsi membuat array menjadi sebuah string.

// contoh:
const bulan6 = ['March', 'Jan', 'Feb', 'Dec'];
const angka4 = [2, 3, 5, 3, 6, 6, 4]

console.log( bulan6.toString() ); // "March,Jan,Feb,Dec"
console.log( angka4.toString() ); // "2,3,5,3,6,6,4"


/*=============== 7. shift() =============== */

// Fungsi ini berfungsi untuk menghapus element pertama dari sebuah array dan mengembalikan elemen yang telah dihapus dari array tersebut

// contoh:
const array1 = [1, 2, 3];

console.log( array1.shift() ); // 1
console.log( array1 ); // [2, 3]


/*=============== 8. unshift =============== */

// Fungsi ini berfungsi untuk menambah satu atau lebih elemen ke dalam array dari awal array dan mengembalikan nilai panjang array baru yang telah ditambahkan

// contoh:
const array2 = [1, 2, 3];

console.log( array2.unshift(5) ); // 4
console.log( array2 ); // [5, 1, 2, 3]


/*=============== 9. trim() =============== */

// Fungsi ini berfungsi untuk menghapus spasi yang terdapat di awal dan akhir dari sebuah string serta mengembalikan nilai string yang telah dihapus spasinya tersebut

// contoh:
const kata1 = "      Makan ayam di KFC       "

console.log( kata1.trim() ); // Makan ayam di KFC


/*=============== 10. toUpperCase() =============== */

// Fungsi ini merubah setiap karakter dalam string menjadi huruf besar serta mengembalikan nilai string baru yang telah diubah sebelumnya.

// contoh:
const kata2 = "Makan ayam di KFC"

console.log( kata2.toUpperCase() );
