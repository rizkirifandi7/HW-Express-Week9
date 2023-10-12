# HW-Express-Week9

Nama : Rizki Rifani (FSWD 5A)

Program ini akan berjalan di port sesuai dengan yang ditentukan (misalnya, port 3000). Program dapat diakses dengan 2 endpoint utama yaitu berikut:

- Untuk akses ke API User: `http://localhost:3000/api/users`
- Untuk akses ke API Movie: `http://localhost:3000/api/movies`
- Untuk akses API melalui Swagger : `http://localhost:3000/api-docs`


</br>
Pada program ini terdiri dari 6 folder dan 1 file utama, yaitu :
</br>

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

- index.js

file ini merupakan file utama untuk menjalankan keseluruhan program


## Persyaratan

Sebelum dapat menjalankan aplikasi, pastikan telah memenuhi persyaratan berikut:

- Node.js
- PostgreSQL
- Browser
- Postman

## Instalasi

1. Clone repositori ini ke komputer:

   ```bash
   git clone https://github.com/rizkirifandi7/HW-Express-Week9.git

2. Pindah ke direktori projek

   ```bash
   cd HW-Express-Week9

3. Install package module

   ```bash
   npm install
   
4. Buatlah file baru dengan nama `.env` kemudian atur dan sesuaikan dengan program 

5. Import sample data `movies-database.sql` ke database PostgreSQL

6. Proses selesai


## Demo Program
1. Pastikan semua program sudah benar dan terhubung ke database, kemudian jalankan program dengan terminal menggunakan command berikut : 

   ```bash
   npm run start

2. Untuk memudahkan cara penggunaan program, gunakanlah endpoint yang menggunakan Swagger dan masukan endpoint tersebut ke browser :

     ```bash
   http://localhost:3000/api-docs/

  Maka akan muncul seperti berikut:

  ![Start](./public/assets/1.jpeg)
     
3. Untuk pertama cobalah untuk melakukan registrasi user dengan mengakses menu registrasi, isi setiap data nya :

  ![Regis](./public/assets/regis1.jpeg)

  </br>
  Maka akan menghasilkan output dan menghasilkan token yang nantinya dapat digunakan untuk melakukan CRUD data movie:

  ![Regis](./public/assets/regis2.jpeg)

4. Kemudian cobalah melakukan login 

  ![Login](./public/assets/login1.jpeg)
 
  </br>
   Maka akan menghasilkan output dan menghasilkan token yang nantinya dapat digunakan untuk melakukan CRUD data movie:

  ![Login](./public/assets/login2.jpeg)

5. Kemudian cobalah melakukan CRUD database movie namun sebelum melakukan itu masukan terlebih dahulu token yang didapatkan dari hasil registrasi ataupun login, setelah itu masukan ke Authorize 

  ![Auth](./public/assets/auth2.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut dan pengguna sudah dapat melakukan CRUD untuk data movie:

  ![Auth](./public/assets/auth1.jpeg)

6. Kemudian cobalah melakukan CRUD database movie dengan mencoba pagination

  ![Pagi](./public/assets/pagi1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![Auth](./public/assets/pagi2.jpeg)

7. Kemudian cobalah melakukan CRUD database movie dengan mencoba membuat data movie baru

  ![create](./public/assets/create1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![create](./public/assets/create1.jpeg)

8. Kemudian cobalah melakukan CRUD database movie dengan mencoba mendapatkan data berdasarkan id

  ![getid](./public/assets/getid1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![getid](./public/assets/getid2.jpeg)

9. Kemudian cobalah melakukan CRUD database movie dengan melakukan update data

  ![update](./public/assets/update1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![update](./public/assets/update2.jpeg)

10. Kemudian cobalah melakukan CRUD database movie dengan melakukan hapus data

  ![del](./public/assets/del1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![del](./public/assets/del2.jpeg)
