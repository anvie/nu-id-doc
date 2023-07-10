---
id: api-index
sidebar_position: 1
title: API
---

# Dokumentasi API Siskader

Endpoint API berikut digunakan untuk mendapatkan informasi pengguna yang berkaitan dengan kader.

> **Catatan:** API yang tercantum di bawah ini merupakan API yang dapat diakses melalui NusaGW. 
> Apabila Anda belum mengenal NusaGW, silakan baca dokumentasi [NusaGW](/docs/NUSA/nusa-gateway.md) terlebih dahulu.
> API ini masih dalam tahap pengembangan dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.


Semua endpoint API berikut dapat diakses menggunakan base URL `https://siskader.nusa.nu.id`.

Semua endpoint API selain `/info` membutuhkan _access token_ yang dapat diperoleh dengan mengikuti prosedur OAuth yang dijelaskan di [dokumentasi otentikasi & otorisasi](../../API/OAuth.md).


| Endpoint | Deskripsi |
| --- | --- |
| [/info](#info) | Mendapatkan informasi layanan |
| [/v1/kader/{id}](#kader-id) | Mendapatkan informasi kader berdasarkan ID |


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
        "nusa_gateway": "https://siskader.nusa.nu.id"
    }
}
```

### Kader {#kader-id}

**Endpoint**: `/v1/kader/{id}`

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

