---
hide_title: true
sidebar_label: API
sidebar_position: 2
---

## Application Programming Interface

NU.ID menyediakan API yg memungkinkan pengembang untuk mengintegrasikan layanan mereka ke dalam ekosistem digital NU. Hal ini memungkinkan Anda untuk mengelola akses dan otorisasi yang tepat kepada pengguna.

NU.ID menggunakan protokol standar [Oauth 2.0](https://oauth.net/2/) dalam mengotentikasi pengguna. Pengembang dapat menggunakan API ini untuk mengotentikasi pengguna dan terhubung ke layanan mereka.

## Daftar API endpoint

Semua endpoint API berikut dapat diakses menggunakan base URL `https://nu.id/api`

### OAuth 2.0

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
* `scope`: (opsional) daftar otorisasi yang diperlukan oleh aplikasi.

**Respon:**

* `code`: Kode OAuth yang dapat digunakan untuk mendapatkan token akses.


### Token

**Endpoint**: `/oauth/token`

Mendapatkan token akses OAuth 2 dari kode OAuth yang didapatkan sebelumnya melalui endpoint `/oauth/authorize`.

**Method:** POST

**Parameter:**

* `grant_type`: jenis permintaan. `authorization_code` harus dipilih untuk menggunakan endpoint ini.
* `code`: Token OAuth yang didapatkan dari endpoint `/oauth/authorize`.
* `redirect_uri`: URL yang dicantumkan dalam permintaan OAuth.
* `client_id`: ID klien yang digunakan untuk membuat permintaan OAuth.

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
