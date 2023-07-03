---
id: nusa-gateway
title: Gateway
hide_title: true
---

## NusaGW

NusaGW atau Nusa Gateway adalah sebuah layanan yang menyediakan API Gateway untuk menghubungkan antar layanan yang terintegrasi dalam ekosistem NUSA. 
Tujuan utama dari layanan ini adalah untuk memudahkan pengembang dalam mengintegrasikan layanan mereka dengan layanan lainnya dalam ekosistem NUSA 
secara aman dan terstruktur, sesuai dengan standar yang telah ditetapkan.

### Domain

Setiap aplikasi yang telah terdaftar di NU.ID akan memiliki sub-domain yang unik untuk mengakses layanan mereka. Domain ini akan digunakan sebagai endpoint untuk mengakses layanan tersebut melalui NusaGW. Ketika pertama kali aplikasi dibuat, nama sub-domain akan otomatis dibuatkan oleh sistem diambil dari nama aplikasi yang telah terdaftar di NU.ID dengan format `kebab-case` lower-case.

Format domain:

```
[app].nusa.nu.id
```

Dimana `[app]` adalah nama aplikasi yang telah terdaftar di NU.ID dengan format `kebab-case`, yang kita sebut dengan istilah _slug_. Slug tidak dapat diubah setelah aplikasi terdaftar.

Contoh sub-domain untuk aplikasi Siskader, maka domainnya adalah:

```
siskader.nusa.nu.id
```

### Daftar Layanan Resmi

Berikut adalah daftar layanan resmi yang telah terintegrasi dengan NusaGW dan dapat diakses melalui sub-domain masing-masing:

| Layanan | Sub-domain | Deskripsi |
| --- | --- | --- |
| [Siskader](../integration/Siskader/index.md) | [siskader.nusa.nu.id](https://siskader.nusa.nu.id/v1/info) | Sistem Informasi Kaderisasi NU |
| Coofis | [coofis.nusa.nu.id](https://coofis.nusa.nu.id/v1/info) | Sistem Disposisi Surat NU |

