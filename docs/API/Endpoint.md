---
id: api-endpoint
title: Endpoint
---

## Daftar Endpoint

Semua endpoint API berikut dapat diakses menggunakan base URL `https://nu.id/api`, NU.ID menggunakan versioning API dengan format `v{version-number}`. Saat ini versi API yang digunakan adalah `v1`. Sehingga base URL untuk API adalah `https://nu.id/api/v1`. Contoh untuk mengakses `/user/me` adalah `https://nu.id/api/v1/user/me`.

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
