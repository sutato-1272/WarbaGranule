# Panduan Publikasi Website (Deployment) - Versi Super Mudah!

Selamat! Website Anda sudah siap untuk dipublikasikan ke seluruh dunia. Jangan khawatir, proses ini lebih mudah dari yang Anda bayangkan. Anggap saja ini seperti mengunggah file ke internet agar bisa dilihat semua orang.

Berikut adalah langkah-langkah super detail yang akan memandu Anda:

### Prasyarat (Anda Hanya Perlu Melakukan Ini Sekali Saja)

1.  **"Memasang Alat Bantu" (Install Firebase CLI)**
    Buka Terminal Anda dan ketik perintah di bawah ini, lalu tekan **Enter**:
    ```bash
    npm install -g firebase-tools
    ```

2.  **"Masuk ke Akun Google Anda" (Login)**
    Di Terminal yang sama, ketik perintah ini dan tekan **Enter**:
    ```bash
    firebase login
    ```
    Perintah ini akan membuka browser Anda untuk login ke akun Google. Ikuti prosesnya.

### Langkah-langkah Deployment Proyek

Lakukan langkah-langkah ini setiap kali Anda akan mempublikasikan website.

**Langkah 1: "Menghubungkan Proyek ke Firebase" (Inisialisasi)**

*   **Penting:** Pastikan Terminal Anda sedang berada di dalam folder proyek ini.
*   **Anda hanya perlu melakukan ini sekali untuk proyek ini.**

Ketik perintah berikut dan tekan **Enter**:
```bash
firebase init apphosting
```
Terminal akan menanyakan beberapa hal. Ikuti panduan ini:
1.  Pilih proyek Firebase yang sudah Anda buat, atau pilih **"Create a new project"**.
2.  Saat ditanya tentang "backend location", biarkan saja kosong. **Cukup tekan Enter**.
3.  Saat ditanya tentang "repository", biarkan juga kosong. **Cukup tekan Enter**.

**Langkah 2: "Menyimpan Kunci API di Server" (Sangat Penting!)**

Ini adalah langkah **paling krusial** agar proses deploy tidak gagal. Anda harus memberitahu server Firebase tentang Kunci API Google Anda.

*   Buka **Firebase Console** di browser Anda, lalu masuk ke proyek Anda.
*   Di menu sebelah kiri, navigasi ke **Build > App Hosting**.
*   Anda akan melihat daftar backend Anda. Klik backend tersebut.
*   Pilih tab **Settings**.
*   Gulir ke bawah hingga Anda menemukan bagian **Secrets**. Klik **"Add secret"**.
*   Untuk **"Secret name"**, ketik persis seperti ini: `GOOGLE_API_KEY`
*   Untuk **"Secret value"**, tempel (paste) Kunci API yang Anda dapatkan dari Google AI Studio.
*   Klik **"Create secret"** lalu **"Save settings"**.

**Anda hanya perlu melakukan Langkah 2 ini sekali saja.**

**Langkah 3: "Publikasikan!" (Deploy)**

Sekarang Anda siap mempublikasikan. Lakukan langkah ini **setiap kali** Anda ingin mempublikasikan perubahan baru.

Ketik perintah ini di Terminal dan tekan **Enter**:
```bash
firebase apphosting:backends:deploy
```
- Proses ini mungkin butuh beberapa menit.
- Setelah selesai, Terminal akan memberikan Anda sebuah **URL publik**.
- **Selamat!** Website Anda sudah online!

### Rangkuman Perintah Singkat:
- **Sekali seumur hidup komputer:** `npm install -g firebase-tools` & `firebase login`
- **Sekali untuk proyek ini:** `firebase init apphosting` & **Mengatur Secret di Firebase Console**.
- **Setiap ada perubahan:** `firebase apphosting:backends:deploy`

Jika ada langkah yang membuat Anda ragu, jangan sungkan bertanya lagi!
