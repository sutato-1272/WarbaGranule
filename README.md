# Proyek Website WarnaGranule

Ini adalah proyek awal Next.js yang dibuat di Firebase Studio.

## Konfigurasi Penting: Kunci API Gemini

Agar fitur cerdas di aplikasi ini (seperti **Kalkulator Estimasi Material**) dapat berfungsi, Anda **wajib** menambahkan Kunci API (API Key) dari Google.

1.  **Dapatkan Kunci API Anda**: Kunjungi [Google AI Studio](https://aistudio.google.com/app/apikey) dan buat Kunci API baru. Proses ini gratis.
2.  **Atur di Proyek**: Buka file `.env` yang ada di folder utama proyek ini. Tempel (paste) Kunci API yang sudah Anda salin ke dalam variabel `GOOGLE_API_KEY`.

Contoh isi file `.env`:
`GOOGLE_API_KEY="MASUKKAN_API_KEY_ANDA_DI_SINI"`

**Penting:** Tanpa Kunci API ini, fitur kalkulator tidak akan bekerja saat Anda mencoba menjalankannya atau setelah di-deploy.

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
