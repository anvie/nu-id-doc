---
id: api-user
title: User
hide_title: true
---

## Daftar Endpoint User

Endpoint API berikut digunakan untuk mendapatkan informasi pengguna yang sedang login. Pastikan pengguna sudah terotentikasi menggunakan [OAuth](oauth) atau [QRAuth](qrauth). Setiap pemanggilan fungsi API ini harus menyertakan access token yang didapatkan dari proses [OAuth](oauth) atau [QRAuth](qrauth).

> Semua endpoint API berikut dapat diakses menggunakan base URL `https://api.nu.id`, NU.ID menggunakan versioning API dengan format `v{version-number}`. Saat ini versi API yang digunakan adalah `v1`. Sehingga base URL untuk API adalah `https://api.nu.id/v1`. Contoh untuk mengakses `/user/me` adalah `https://api.nu.id/v1/user/me`.

| Endpoint | Deskripsi |
| --- | --- |
| [/user/me](#user-me) | Mendapatkan informasi pengguna |


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
