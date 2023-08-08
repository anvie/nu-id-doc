---
id: user
title: User
hide_title: true
sidebar_position: 3
---

## Daftar Endpoint User

Endpoint API berikut digunakan untuk mendapatkan informasi pengguna yang sedang login. Pastikan pengguna sudah terotentikasi menggunakan [OAuth](oauth) atau [QRAuth](qrauth). Setiap pemanggilan fungsi API ini harus menyertakan access token yang didapatkan dari proses [OAuth](oauth) atau [QRAuth](qrauth).

> Semua endpoint API berikut dapat diakses menggunakan base URL `https://api.nu.id`, NU.ID menggunakan versioning API dengan format `v{version-number}`. Saat ini versi API yang digunakan adalah `v1`. Sehingga base URL untuk API adalah `https://api.nu.id/v1`. Contoh untuk mengakses `/user/me` adalah `https://api.nu.id/v1/user/me`.

| Endpoint | Deskripsi |
| --- | --- |
| [/user/me](#user-me) | Mendapatkan informasi pengguna |
| [/user/update](#user-update) | Mengubah informasi dasar pengguna |


### User Me

**Endpoint**: `/user/me`

Mendapatkan informasi pengguna yang sedang login.

**Method:** GET

**Parameter:**

Tidak ada.

**Respons:**

* `id`: ID pengguna.
* `name`: Nama lengkap pengguna.
* `email`: Email pengguna.
* `phone`: Nomor telepon pengguna (scoping: `phone`).
* `image`: URL gambar profil pengguna.

Contoh respons:

```json
{
  "id": "5f7b5f7b5f7b5f7b5f7b5f7b",
  "name": "John Doe",
  "email": "john@example.com",
  "image": "https://example.com/image.jpg"
}
```

### User Update

**Endpoint**: `/user/update`

Mengubah informasi dasar pengguna. Sementara ini informasi yang dapat diubah hanyalah `image`, mungkin kedepannya akan ditambahkan yang lainnya.

Operasi ini membutuhkan akses token dengan scope [`update_basic_info`](../API/oauth#daftar-otorisasi-scope).

**Method:** POST

**Parameter:**

* `image`: URL gambar profil pengguna.

**Respons:**

Json dengan result "ok" jika berhasil.

Contoh respons:

```json
{
  "result": "ok"
}
```

