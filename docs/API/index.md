---
id: api-index
sidebar_label: API
hide_title: true
---

## Application Programming Interface

NU.ID menyediakan API yg memungkinkan pengembang untuk mengintegrasikan layanan mereka ke dalam ekosistem digital NU. Hal ini memungkinkan Anda untuk mengelola akses dan otorisasi yang tepat kepada pengguna.

NU.ID menggunakan protokol standar [OAuth](./OAuth.md) dalam mengotentikasi pengguna. Pengembang dapat menggunakan API ini untuk mengotentikasi pengguna dan terhubung ke layanan mereka.

Untuk bisa menggunakan API, Anda harus terlebih dahulu membuat layanan.


### Layanan

Untuk membuat layanan baru di NU.ID, Anda harus terlebih dahulu membuat aplikasi baru di [NU.ID Developer Console](https://nu.id/dashboard/apps). Setelah aplikasi berhasil dibuat, Anda akan mendapatkan `client_id` dan `client_secret` yang akan digunakan untuk mengakses API NU.ID.

Melalui developer console, Anda dapat mengatur berbagai hal terkait layanan Anda, seperti:

- **Nama Layanan** - Nama layanan yang akan ditampilkan kepada pengguna ketika mereka mengakses layanan Anda.
- **Deskripsi Layanan** - Deskripsi singkat tentang layanan Anda.
- **Redirect URI** - URI yang akan digunakan untuk mengarahkan pengguna setelah mereka berhasil login.
- **NUSA URI** - URI yang akan digunakan untuk komunikasi antar layanan dalam ekosistem NUSA.
