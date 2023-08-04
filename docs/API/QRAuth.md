---
id: qrauth
hide_title: true
sidebar_label: QRAuth
sidebar_position: 3
---

# QRAuth

QRAuth adalah metode otentikasi yang menggunakan QR Code. Metode ini memungkinkan pengguna untuk melakukan login ke berbagai layanan secara cepat dan mudah dengan cukup memindai QR Code yang ditampilkan di layar layanan menggunakan aplikasi [NU Online](https://app.nu.or.id/).

## API Endpoint

:::info

Semua endpoint API berikut dapat diakses menggunakan base URL `https://api.nu.id`, NU.ID menggunakan versioning API dengan format `v{version-number}`. Saat ini versi API yang digunakan adalah `v1`. Sehingga base URL untuk API adalah `https://api.nu.id/v1`. Contoh untuk mengakses `/qrAuth` adalah `https://api.nu.id/v1/qrAuth`.

:::

| Endpoint | Deskripsi |
| --- | --- |
| [/qrAuth](#/qr-auth) | Mendapatkan ID sesi untuk QR-code authentication. |
| [/authenticate](#authenticate) | Mendapatkan access token dan refresh token menggunakan kunci privat pengguna |

### QR Auth

**Endpoint**: `/qrAuth`

Endpoint ini digunakan untuk mendapatkan ID sesi, biasanya digunakan untuk mengotentikasi pengguna menggunakan kode QR.

**Method:** POST

**Parameter:**

| Parameter | Deskripsi | Diperlukan |
| --- | --- | --- |
| clientId | ID aplikasi client | Ya |
| nonce | String acak untuk menjaga dari penggunaan dobel | Ya |
| returnQrCode | Jika bernilai `true`, maka endpoint akan mengembalikan QR code dalam bentuk base64 | Opsional, default: false |

**Respons:**

Contoh respon sukses:

```json
{
  "clientId": "client-1",
  "sessionId": "nu.id:1:client-1:YgWIexz3YJwtqD8WQcoBdkDkGsNo5obz:1678550057",
  "expires": 1678550057
}
```

Contoh respon sukses apabila parameter `returnQrCode` diset `true`:

```json
{
  "clientId": "client-1",
  "sessionId": "nu.id:1:client-1:YgWIexz3YJwtqD8WQcoBdkDkGsNo5obz:1678550057",
  "expires": 1678550057,
  "qrcode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA....."
}
```

### Authenticate

**Endpoint**: `/authenticate`

Endpoint ini digunakan untuk mengotentikasi pengguna menggunakan ID sesi dan tanda tangan digital pengguna.
ID sesi adalah pengenal unik yang dihasilkan oleh endpoint API [qrAuth](#qr-auth).

Tanda tangan digital adalah tanda tangan yang dihasilkan oleh pengguna dengan menggunakan kunci pribadi dan ID sesi. Algoritma yang digunakan adalah [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) dengan kurva eliptik secp256k1. Untuk demo atau uji coba silahkan gunakan tool [jsrsasign](http://kjur.github.io/jsrsasign/sample/sample-ecdsa.html).

Berikut beberapa library yg bisa digunakan untuk menghasilkan tanda tangan digital berbasis ECDSA dengan kurva eliptik secp256k1:

| Bahasa Pemrograman | Nama Library | Link Download |
| --- | --- | --- |
| C/C++ | OpenSSL | https://www.openssl.org/ |
| Python | PyECC | https://pypi.org/project/pyecc/ |
| Java / C# | Bouncy Castle | https://www.bouncycastle.org/latest_releases.html |
| C++ | Botan | https://botan.randombit.net/download.html |
| Golang | Golang crypto/ecdsa | https://golang.org/pkg/crypto/ecdsa/ |
| Ruby | openssl-ecdsa | https://github.com/DavidEGrayson/ruby_ecdsa |
| Node.js | elliptic | https://www.npmjs.com/package/elliptic |
| Rust | Rust-secp256k1 | https://github.com/RustCrypto/signatures |

Endpoint ini akan mengembalikan token akses (`accessToken`) dan token penyegar (`refreshToken`) seperti yang didapatkan dari endpoint standar [OAuth2](https://tools.ietf.org/html/rfc6749#section-4.1.4).

** Method: ** POST

** Parameter: **

| Parameter | Deskripsi | Diperlukan |
| --- | --- | --- |
| sessionId | ID sesi pengguna yang akan di-sign | Ya |
| signature | Tanda tangan sessionId untuk mengotentikasi pengguna | Ya |
| publicKey | publicKey pengguna | Ya |
| nonce | String acak yang dihasilkan oleh klien yang digunakan untuk memverifikasi respons | Ya |

** Kode Respons: **

| Kode Status | Deskripsi |
| --- | --- |
| 200 OK | Otentikasi Berhasil |
| 400 Permintaan Buruk | Parameter Tidak Valid atau ID Sesinya Tidak Ditemukan |
| 405 Metode Tidak Diizinkan | Hanya permintaan POST yang diizinkan |
| 500 Kesalahan Server Internal | Terjadi kesalahan internal |

** Contoh Permintaan: **

```json
{
    "sessionId": "nu.id:1:client-1:YgWIexz3YJwtqD8WQcoBdkDkGsNo5obz:1678550057",
    "signature": "30460221008bf8d481763303cd260472f38fa2b3232a14f5cbea5414c54d42e8cc868a4c1b022100b5d7b8d09413649f5adf494c30488f7c0bf97b20de4f32c9065ae20f023fe50d",
    "publicKey": "04c5e4e387c76ada73c8a7fc7c613aac1ed455a87e8bcd72b74506d3ad8dcef0c06a644449be6d7e529cc6b4f2abe2be65c5197aa40464756e78e3da78f2bb82a8",
    "nonce": "XZSZPSA6yBVqfKj8fCgO2WZDamSQPPhS",
}
```

** Contoh Respon Apabila Sukses: **

```json
{
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGV4YW1wbGUuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.zT8XV1DfUW9uUjwWcJ9sJxjyR40A1XHyxdKbPtLIFRE",
        "refreshToken": "nPhyyUSTo3C4UBStqr8SwJBrE1WzRH3vYaGFy6oRFD4SqXFXXI9nczjNKTL3lxZ3E1mBXEEtoSumMtT6m7LTJQJfYrgjtnm0OOo0DMpztB0THjTQE7AUJmQGTvQv3UcS6keJwxZRhufJTyQl5cNWtkUy7IFvYzH6lJvR0DrU"
    }
}
```



