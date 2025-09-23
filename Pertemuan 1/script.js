// =========================
// Variabel Sekolah
// =========================
var sekolah = "SMK Negeri 1 Banyuwangi";
let jurusan = "Rekayasa Perangkat Lunak";
const tahunBerdiri = 1995;

// Array global siswa
    let siswaList = [
      { nama: "Rangga", nilai: 92 },
      { nama: "Firdaus", nilai: 78 },
      { nama: "Wahyu", nilai: 65 },
      { nama: "Scendy", nilai: 88 },
      { nama: "Jakcy", nilai: 55 }
    ];

// =========================
// Identitas Sekolah
// =========================
function tampilIdentitas() {
  let teks = `
    <h3>Identitas Sekolah</h3>
    <p>Nama Sekolah: ${sekolah}</p>
    <p>Jurusan Unggulan: ${jurusan}</p>
    <p>Tahun Berdiri: ${tahunBerdiri}</p>
  `;
  document.getElementById("hasil").innerHTML = teks;
}

// =========================
// Dialog Input
// =========================
function tampilDialog() {
  let siswa = prompt("Masukkan nama siswa:");
  let konfirmasi = confirm("Apakah nama siswa benar " + siswa + "?");

  if (konfirmasi) {
    alert("Halo, " + siswa + "! Selamat belajar di " + sekolah);
  } else {
    alert("Silakan isi ulang nama siswa.");
  }
}

// =========================
// Operator & Percabangan
// =========================
function cekNilai() {
  let nilaiUjian = parseInt(prompt("Masukkan nilai ujian siswa:"));
  let status = (nilaiUjian >= 75) ? "Lulus" : "Tidak Lulus";

  let hasil = `<h3>Hasil Ujian</h3>
               <p>Nilai: ${nilaiUjian}</p>
               <p>Status: ${status}</p>`;

  if (nilaiUjian >= 90) {
    hasil += "<p>Kategori: Sangat Baik (A)</p>";
  } else if (nilaiUjian >= 75) {
    hasil += "<p>Kategori: Cukup Baik (B)</p>";
  } else {
    hasil += "<p>Kategori: Remedial</p>";
  }

  document.getElementById("hasil").innerHTML = hasil;
}

// =========================
// Perulangan For
// =========================
function tampilKelas() {
  let teks = `<h3>Daftar Kelas di ${sekolah}</h3>`;
  for (let i = 10; i <= 12; i++) {
    teks += `Kelas ${i} ${jurusan}<br>`;
  }
  document.getElementById("hasil").innerHTML = teks;
}

// =========================
// Array Ekstrakurikuler
// =========================
function tampilEkskul() {
  let ekstrakurikuler = ["Pramuka", "PMR", "Futsal", "Paskibra"];

  let teks = "<h3>Daftar Ekstrakurikuler</h3>";
  ekstrakurikuler.forEach(function(item, index) {
    teks += (index + 1) + ". " + item + "<br>";
  });

  document.getElementById("hasil").innerHTML = teks;
}

// =========================
// Tabel Siswa
// =========================
function tampilTabelSiswa() {
  let teks = `
    <h3>Daftar Siswa & Nilai</h3>
    <table>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Nilai</th>
        <th>Status</th>
      </tr>
  `;

  siswaList.forEach((s, i) => {
    let status = (s.nilai >= 75) ? "Lulus" : "Tidak Lulus";
    teks += `
      <tr>
        <td>${i + 1}</td>
        <td>${s.nama}</td>
        <td>${s.nilai}</td>
        <td>${status}</td>
      </tr>
    `;
  });

  teks += "</table>";
  document.getElementById("hasil").innerHTML = teks;
}

// =========================
// Tambah Siswa
// =========================
function tambahSiswa() {
  let namaBaru = prompt("Masukkan nama siswa baru:");
  let nilaiBaru = parseInt(prompt("Masukkan nilai siswa baru:"));

  if (namaBaru && !isNaN(nilaiBaru)) {
    siswaList.push({ nama: namaBaru, nilai: nilaiBaru });
    alert("Siswa berhasil ditambahkan!");
    tampilTabelSiswa();
  } else {
    alert("Input tidak valid, coba lagi.");
  }
}

// =========================
// Hapus Siswa
// =========================
function hapusSiswa() {
  let namaHapus = prompt("Masukkan nama siswa yang ingin dihapus:");
  let index = siswaList.findIndex(s => s.nama.toLowerCase() === namaHapus.toLowerCase());

  if (index !== -1) {
    siswaList.splice(index, 1);
    alert("Siswa " + namaHapus + " berhasil dihapus.");
    tampilTabelSiswa();
  } else {
    alert("Siswa dengan nama " + namaHapus + " tidak ditemukan.");
  }
}

// =========================
// Edit Siswa
// =========================
function editSiswa() {
  let namaEdit = prompt("Masukkan nama siswa yang ingin diedit:");
  let index = siswaList.findIndex(s => s.nama.toLowerCase() === namaEdit.toLowerCase());

  if (index !== -1) {
    let siswa = siswaList[index];
    let namaBaru = prompt("Ubah nama siswa (kosongkan jika tidak diubah):", siswa.nama);
    let nilaiBaru = prompt("Ubah nilai siswa (kosongkan jika tidak diubah):", siswa.nilai);

    if (namaBaru) siswa.nama = namaBaru;
    if (nilaiBaru && !isNaN(parseInt(nilaiBaru))) siswa.nilai = parseInt(nilaiBaru);

    alert("Data siswa berhasil diperbarui!");
    tampilTabelSiswa();
  } else {
    alert("Siswa dengan nama " + namaEdit + " tidak ditemukan.");
  }
}

// =========================
// Cari Siswa
// =========================
function cariSiswa() {
  let namaCari = prompt("Masukkan nama siswa yang ingin dicari:");
  if (!namaCari) {
    alert("Nama tidak boleh kosong.");
    return;
  }

  let hasilCari = siswaList.filter(s => s.nama.toLowerCase().includes(namaCari.toLowerCase()));

  if (hasilCari.length > 0) {
    let teks = `
      <h3>Hasil Pencarian: "${namaCari}"</h3>
      <table>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Nilai</th>
          <th>Status</th>
        </tr>
    `;

    hasilCari.forEach((s, i) => {
      let status = (s.nilai >= 75) ? "Lulus" : "Tidak Lulus";
      teks += `
        <tr>
          <td>${i + 1}</td>
          <td>${s.nama}</td>
          <td>${s.nilai}</td>
          <td>${status}</td>
        </tr>
      `;
    });

    teks += "</table>";
    document.getElementById("hasil").innerHTML = teks;
  } else {
    alert("Siswa dengan nama " + namaCari + " tidak ditemukan.");
  }
}
