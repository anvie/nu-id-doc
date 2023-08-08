---
id: keys
title: Keys
hide_title: true
sidebar_position: 4
---

## Daftar Endpoint Keys

Endpoint API berikut digunakan untuk mendapatkan informasi keys milik user. Pastikan pengguna sudah terotentikasi menggunakan [OAuth](oauth) atau [QRAuth](qrauth). Setiap pemanggilan fungsi API ini harus menyertakan access token yang didapatkan dari proses [OAuth](oauth) atau [QRAuth](qrauth).

| Endpoint | Deskripsi |
| --- | --- |
| [/keys](#keys) | Mendapatkan daftar kunci public pengguna |
| [/keys/register](#register) | Mendaftarkan pasangkan kunci baru |


### Keys

**Endpoint**: `/keys`

Mendapatkan daftar kunci public pengguna.

**Method:** GET

**Parameter:**

Tidak ada.

**Respons:**

* `id`: ID.
* `name`: Nama kunci.
* `publicKey`: Kunci public.
* `keyType`: Tipe kunci, contoh: ecdsa, ed25519, rsa, dll.
* `ownerId`: ID pemilik kunci.

Contoh respons:

```json
{
  "id": "5f7b5f7b5f7b5f7b5f7b5f7b",
  "name": "MyApp",
  "publicKey": "041390c54ff7e57da389865adab20f061ca325bb2a5fafdbc5ce41c0cf...",
  "keyType": "ecdsa",
  "ownerId": "5f7b5f7b5f7b5f7b5f7b5f7b"
}
```

### Register

**Endpoint**: `/keys/register`

Mendaftarkan pasangan kunci baru untuk pengguna.

:::info

Untuk sementara endpoint ini hanya bersifat menggenerasi pasangan kunci baru, belum bisa mengimpor kunci yang sudah ada. Dan sementara ini hanya mendukung tipe kunci `ecdsa`.

:::

Operasi ini membutuhkan akses token dengan scope [`add_key`](../API/oauth#daftar-otorisasi-scope).

**Method:** POST

**Parameter:**

* `name`: Nama kunci.

**Respons:**

Json dengan result keypair jika berhasil.

Contoh respons:

```json
{
  "result": {
    "publicKey": "041390c54ff7e57da389865adab20f061ca325bb2a5fafdbc5ce41c0cf...",
    "privateKey": "6dab5e2ab44552f26d716dfe4a4d9815abaaa45beb68a1dc0106780cc..."
  }
}
```

:::warning

Endpoint ini hanya akan mengembalikan private key sekali dan tidak akan bisa didapatkan lagi
dari server melalui endpoint manapun, jadi pastikan untuk menyimpan private key tersebut
di lokal dengan aman. Pastikan juga untuk melakukan enkripsi menggunakan kata sandi yang kuat apabila
disimpan di penyimpanan lokal.

:::