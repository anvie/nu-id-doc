---
id: api-index
sidebar_position: 1
title: API
---

# Dokumentasi API Siskader

Endpoint API berikut digunakan untuk mendapatkan informasi pengguna yang berkaitan dengan informasi kader.

> **Catatan:** API yang tercantum di bawah ini merupakan API yang dapat diakses melalui NusaGW. 
> Apabila Anda belum mengenal NusaGW, silakan baca [dokumentasi NusaGW](../NUSA/nusa-gateway) terlebih dahulu.
> API ini masih dalam tahap pengembangan dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.


Semua endpoint API berikut dapat diakses menggunakan base URL `https://siskader.nusa.nu.id`, NU.ID menggunakan versioning API dengan format `v{version-number}`. Saat ini versi API yang digunakan adalah `v1`. Sehingga base URL untuk API adalah `https://siskader.nusa.nu.id/v1`. Contoh untuk mengakses `/kader/[id]` adalah `https://siskader.nusa.nu.id/v1/kader/CBqdbvpOwDV2gC3bSbeIpVMEdmfkB6`.

| Endpoint | Deskripsi |
| --- | --- |
| [/info](#info) | Mendapatkan informasi layanan |
| [/kader/{id}](#kader-id) | Mendapatkan informasi kader berdasarkan ID |


### Info

**Endpoint**: `/info`

Mendapatkan informasi layanan.

**Method:** GET

**Parameter:**

Tidak ada.

**Respons:**

Contoh respon apabila sukses:

```json
{
    "app": {
    "id": "CLavgeYcIoIlI6iayifIzjvjQWm14wPf",
    "name": "Siskader",
    "description": "siskader app",
    "slug": "siskader",
    "owner_id": "clhr7ynrk0000jbyd5d6f0y0w",
    "redirect_uris": [
        "https://siskader.nu.id/api/auth/callback/nu.id",
        "http://localhost:3001/api/auth/callback/nu.id"
    ],
    "createdAt": "2023-05-17T04:51:17.398Z",
    "nusa_gateway": "https://siskader.nusa.nu.id"
}
```

### Kader {#kader-id}

**Endpoint**: `/kader/{id}`

Mendapatkan informasi kader berdasarkan ID.

**Method:** GET

**Parameter:**

Tidak ada.

**Respons:**

Contoh respon apabila sukses:

```json
{
  "id": "CBqdbvpOwDV2gC3bSbeIpVMEdmfkB6",
  "nia": "1234567890",
  "full_name": "John Doe",
  "status": "KADER",
  "created_at": "2021-01-01T00:00:00.000Z",
  "membership": "LTN-NU",
  "membership_role": "ANGGOTA"
}
```

