---
hide_title: true
sidebar_label: API
sidebar_position: 5
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
| [/oauth/token](/docs/api/oauth2/token) | Endpoint untuk mendapatkan token akses |
| [/oauth/refreshAccessToken](/docs/api/oauth2/revoke) | Endpoint untuk memperbaharui token akses |
| [/oauth/revoke](/docs/api/oauth2/revoke) | Endpoint untuk membatalkan token akses |


## Authorize

