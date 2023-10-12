# HW-Express-Week9

Nama : Rizki Rifani (FSWD 5A)

Program ini akan berjalan di port sesuai dengan yang ditentukan (misalnya, port 3000). Program dapat diakses dengan 2 endpoint utama yaitu berikut:

- Untuk akses ke API User: `http://localhost:3000/api/users`
- Untuk akses ke API Movie: `http://localhost:3000/api/movies`

</br>
Pada program ini terdiri dari 6 folder dan 1 file utama, yaitu :

- models

Folder ini merupakan berisi file user dan movie yang digunakan untuk melakukan CRUD data dari database dengan query

- controller
  
Folder ini merupakan berisi file user dan movie yang digunakan untuk melakukan aksi ketika ada data yang akan di CRUD

- db

Folder ini berisi file yang digunakan untuk menghubungkan program ke databse postgreSQL

- middleware

Folder ini berisi file yang digunakan untuk melakukan auth

- routes

Folder ini berisi file route dari user dan movie yang digunakan untuk melakukan pemanggilan dari setiap endpoint 

- utils

Folder ini berisi konfigurasi untuk swagger


## Persyaratan

Sebelum dapat menjalankan aplikasi, pastikan telah memenuhi persyaratan berikut:

- Node.js
- PostgreSQL
- Browser
- Postman

## Instalasi

1. Clone repositori ini ke komputer:

   ```bash
   git clone https://github.com/rizkirifandi7/HW-ExpressJS.git

2. Pindah ke direktori projek

   ```bash
   cd HW-ExpressJS

3. Install depedensi atau module

   ```bash
   npm install

4. Import sample data `dvdrental.tar` ke database PostgreSQL

5. Proses selesai
