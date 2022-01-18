const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]


const searchName = (keyword, limit, cb) => {
  
  //menyaring setiap elemen yang tiap karakter dalam elemen tersebut
  //telah berubah menjadi lower case lalu diperiksa apakah mengandung
  // string yang sama dengan parameter keyword
  const names = name.filter(el => el.toLowerCase().includes(keyword))
  
  // membatasi panjang array yg sesuai dengan limit
  const result = names.slice(0, limit)

  cb(result)
}

searchName('an', 2, (result) => {
  console.log(result);
})