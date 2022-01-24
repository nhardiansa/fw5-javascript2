const values = [2, 25, 4, 14, 17, 30, 8]

const seleksiNilai = (limit1, limit2, data) => {

  // validator pengecekan tipe data
  if (typeof limit1 !== "number" || typeof limit2 !== 'number' || !Array.isArray(data)) {
    console.log('Data tidak valid');
    return 0;
  }

  // validator jika nilai awal lebih besar dari nilai akhir
  if (limit1 > limit2) {
    console.log('Nilai akhir harus lebih besar dari nilai awal');
    return 0;
  }

  // validator jika panjang data kurang dari 5
  if (data.length <= 5) {
    console.log('Jumlah angka dalam dataArray harus lebih dari 5');
    return 0;
  }

  // mengambil data yang lebih dari nilai awal dan yg kurang dari nilai akhir
  const result = data.filter(el => el > limit1 && el < limit2)

  // melakukan sortir terhadap array yang telah didapat
  const final = result.sort((a, b) => a - b)

  console.log(final);
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
