---
id: oauth
hide_title: true
sidebar_label: OAuth
sidebar_position: 2
---

# Otentikasi &amp; Otorisasi

NU.ID menggunakan [OAuth 2.0](https://oauth.net/2/) sebagai metode untuk authentication dan authorization. [OAuth 2.0](https://oauth.net/2/) adalah protokol standar yang digunakan untuk memberikan akses ke aplikasi pihak ketiga terhadap sumber daya yang dilindungi. Ini memungkinkan pengguna untuk memberikan izin kepada aplikasi pihak ketiga untuk mengakses data mereka tanpa harus memberikan kata sandi mereka. Dengan menggunakan OAuth v2, NU.ID dapat memberikan keamanan dan kontrol yang lebih baik kepada pengguna.

## Daftar API endpoint OAuth

Semua endpoint API berikut dapat diakses menggunakan base URL `https://nu.id/api`

| Endpoint | Deskripsi |
| --- | --- |
| [/oauth/authorize](#authorize) | Endpoint untuk mengotentikasi pengguna |
| [/oauth/token](#token) | Endpoint untuk mendapatkan token akses |
| [/oauth/refreshAccessToken](#refresh-access-token) | Endpoint untuk memperbaharui token akses |
| [/oauth/revoke](#revoke) | Endpoint untuk membatalkan token akses |


### Authorize

**Endpoint**: `/oauth/authorize`

Inisiasi proses autentikasi pengguna menggunakan standar OAuth 2.0.

**Method:** GET

**Parameter:**

* `response_type`: jenis respons yang akan dikembalikan. Hanya tipe `code` yang didukung.
* `client_id`: ID klien yang digunakan untuk membuat permintaan OAuth.
* `redirect_uri`: URL yang akan dikunjungi setelah Anda berhasil login.
* `state`: Parameter yang dicantumkan pada permintaan OAuth.
* `scope`: (opsional) daftar otorisasi yang diperlukan oleh aplikasi. Lihat [daftar otorisasi](#daftar-otorisasi) untuk daftar lengkap otorisasi yang didukung.

**Respon:**

* `code`: Kode OAuth yang dapat digunakan untuk mendapatkan token akses.


### Token

**Endpoint**: `/oauth/token`

Mendapatkan token akses OAuth 2 dari kode OAuth yang didapatkan sebelumnya melalui endpoint `/oauth/authorize`.

**Method:** POST

**Parameter:**

* `client_id`: ID klien yang digunakan untuk membuat permintaan OAuth.
* `client_secret`: Kunci rahasia klien yang didapatkan ketika mendaftarkan klien pertama kali.
* `code`: Token OAuth yang didapatkan dari endpoint `/oauth/authorize`.
* `redirect_uri`: URL yang akan dikunjungi setelah user berhasil login.

**Respons:**

* `access_token`: Token OAuth yang dapat digunakan untuk mengakses layanan NU.ID.
* `token_type`: jenis token OAuth, saat ini hanya mendukung `Bearer`.
* `expires_in`: waktu kadaluwarsa token OAuth dalam detik.
* `refresh_token`: Token OAuth yang dapat digunakan untuk memperbaharui token akses.


### Refresh Access Token

**Endpoint**: `/oauth/refreshAccessToken`

Memperbarui token OAuth yang kedaluwarsa.

**Method:** POST

**Parameter:**

* `grant_type`: jenis permintaan. `refresh_token` harus dipilih untuk menggunakan endpoint ini.
* `refresh_token`: Token OAuth yang didapatkan dari endpoint `/oauth/token`.
* `client_id`: ID klien yang digunakan untuk membuat permintaan OAuth.

**Respons:**

* `access_token`: Token OAuth yang dapat digunakan untuk mengakses layanan NU.ID.
* `expires_in`: waktu kadaluwarsa token OAuth dalam detik.

### Revoke

**Endpoint**: `/oauth/revoke`

Membatalkan atau menghapus token akses OAuth.

**Method:** POST

**Parameter:**
* `token`: Token akses yang akan dibatalkan.

**Respons:**
Tidak ada.


## Daftar Otorisasi

| Otorisasi | Deskripsi |
| --- | --- |
| `basic_info` | Mengakses info nama dan alamat email (read-only) |
| `phone` | Mengakses nomor telepon (read-only) |
