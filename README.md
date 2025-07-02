# Proyek Website WarnaGranule

Ini adalah proyek awal Next.js yang dibuat di Firebase Studio.

## Cara Mendapatkan Kunci API Google (Gemini)

Untuk menggunakan fitur AI di aplikasi ini, Anda memerlukan Kunci API dari Google. Berikut cara mendapatkannya (proses ini gratis):

1.  **Buka Google AI Studio**: Kunjungi halaman ini dengan mengklik link berikut: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2.  **Masuk dengan Akun Google**: Jika diminta, masuk menggunakan akun Google Anda.
3.  **Buat Kunci API**: Klik tombol **"Create API key"**.
4.  **Pilih Proyek Baru**: Pilih opsi untuk membuat kunci di proyek baru (**"Create API key in new project"**).
5.  **Salin Kunci Anda**: Sebuah Kunci API akan dibuat. Ini adalah serangkaian teks panjang. **Salin (copy)** kunci tersebut dan simpan sementara di tempat aman.

Setelah Anda memiliki kunci ini, ikuti langkah-langkah di bawah untuk mengkonfigurasi proyek Anda.

---

## Konfigurasi Penting: Kunci API Gemini

Agar fitur cerdas di aplikasi ini (seperti **Kalkulator Estimasi Material**) dapat berfungsi, Anda **wajib** menambahkan Kunci API yang sudah Anda dapatkan.

### 1. Konfigurasi Lokal (Untuk Preview di Komputer Anda)
- **Dapatkan Kunci API Anda**: Ikuti panduan "Cara Mendapatkan Kunci API Google (Gemini)" di atas.
- **Atur di Proyek**: Buka file `.env` yang ada di folder utama proyek ini. Tempel (paste) Kunci API yang sudah Anda salin ke dalam variabel `GOOGLE_API_KEY`.

Contoh isi file `.env`:
`GOOGLE_API_KEY="MASUKKAN_API_KEY_ANDA_DI_SINI"`

### 2. Konfigurasi Produksi (Agar Deploy Berhasil)
Saat Anda mempublikasikan website, file `.env` tidak akan ikut terkirim. Anda harus menyimpan Kunci API Anda secara aman di Firebase.

- **Buka Firebase Console** dan navigasi ke bagian **App Hosting**.
- Pilih backend Anda, lalu buka tab **Settings**.
- Di bagian **Secrets**, klik **"Add secret"**.
- Masukkan nama secret: `GOOGLE_API_KEY`.
- Masukkan nilai secret: Kunci API yang Anda dapatkan dari Google AI Studio.
- Klik **"Create secret"** dan **"Save settings"**.

**Penting:** Tanpa melakukan kedua langkah di atas, fitur kalkulator tidak akan bekerja dan proses **deploy akan gagal**.

## Menjalankan Aplikasi Secara Lokal

Untuk melihat perubahan atau mengembangkan lebih lanjut di komputer Anda:

1.  Pasang semua paket yang dibutuhkan:
    ```bash
    npm install
    ```
2.  Jalankan server pengembangan:
    ```bash
    npm run dev
    ```

Aplikasi akan bisa diakses di `http://localhost:9002`.

## Mempublikasikan Website (Deploy)
Untuk mempublikasikan website Anda ke internet, ikuti panduan lengkap yang ada di file `DEPLOY.md`.
