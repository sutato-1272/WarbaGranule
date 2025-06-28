# Panduan Publikasi Website (Deployment)

Selamat! Website Anda sudah siap untuk dipublikasikan. Karena website ini dibuat dengan Next.js dan terintegrasi dengan Firebase, cara terbaik untuk mempublikasikannya adalah menggunakan **Firebase App Hosting**.

Berikut adalah langkah-langkah sederhana untuk mempublikasikan website Anda ke internet:

### Prasyarat:
Anda memerlukan **Node.js** dan **npm** yang terpasang di komputer Anda. Jika belum, Anda bisa mengunduhnya dari [nodejs.org](https://nodejs.org/).

### Langkah 1: Install Firebase CLI (Command Line Interface)

Firebase CLI adalah alat bantu baris perintah untuk mengelola proyek Firebase Anda. Jika Anda belum memilikinya, buka terminal (Command Prompt, PowerShell, atau Terminal di Mac/Linux) dan jalankan perintah ini:

```bash
npm install -g firebase-tools
```

### Langkah 2: Login ke Akun Google Anda

Setelah instalasi selesai, hubungkan Firebase CLI dengan akun Google Anda:

```bash
firebase login
```
Perintah ini akan membuka browser Anda untuk proses login.

### Langkah 3: Inisialisasi Firebase di Proyek Anda

Arahkan terminal Anda ke folder proyek ini. Kemudian, jalankan perintah berikut untuk menghubungkan proyek ini dengan Firebase:

```bash
firebase init apphosting
```
- Anda akan diminta untuk memilih proyek Firebase yang sudah ada atau membuat yang baru.
- Saat ditanya tentang lokasi backend, biarkan kosong (tekan Enter).
- Saat ditanya tentang repositori, biarkan kosong (tekan Enter).

### Langkah 4: Publikasikan (Deploy) Website Anda!

Ini adalah langkah terakhir. Jalankan perintah berikut untuk memulai proses build dan deployment:

```bash
firebase apphosting:backends:deploy
```
- Proses ini mungkin memakan waktu beberapa menit. Firebase CLI akan membangun aplikasi Next.js Anda dan mengunggahnya ke server.
- Setelah selesai, Anda akan mendapatkan **URL publik** untuk website Anda. Siapapun bisa mengakses website Anda melalui URL tersebut!

### Rangkuman Perintah:
1. `npm install -g firebase-tools` (Hanya perlu sekali)
2. `firebase login` (Hanya perlu sekali)
3. `firebase init apphosting` (Hanya untuk proyek ini)
4. `firebase apphosting:backends:deploy` (Setiap kali Anda ingin mempublikasikan perubahan baru)

Itu saja! Jika Anda membuat perubahan pada kode di masa mendatang, cukup jalankan kembali perintah `firebase apphosting:backends:deploy` untuk memperbarui website Anda.
