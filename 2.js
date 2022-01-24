const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]


const searchName = (keyword, limit, cb) => {
  
  //menyaring setiap elemen yang tiap karakter dalam elemen tersebut
  //telah berubah menjadi lower case lalu diperiksa apakah mengandung
  // string yang sama dengan parameter keyword
  const filteredNames = names.filter(el => el.toLowerCase().includes(keyword.toLowerCase()))
  
  // membatasi panjang array yg sesuai dengan limit
  const result = filteredNames.slice(0, limit)

  // melakukan pemanggilan terhadap function callback
  cb(result)
}

searchName('an', 3, (result) => {
  console.log(result);
})