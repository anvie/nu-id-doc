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

Setiap aplikasi yang telah terdaftar di NU.ID akan memiliki sub-domain yang unik untuk mengakses layanan mereka. Domain ini akan digunakan sebagai endpoint untuk mengakses layanan tersebut melalui NusaGW.

Format domain:

```
[app].nusa.nu.id
```

Dimana `[app]` adalah nama aplikasi yang telah terdaftar di NU.ID dengan format `kebab-case`, yang kita sebut dengan istilah _slug_. Slug tidak dapat diubah setelah aplikasi terdaftar.

Contoh sub-domain untuk aplikasi Siskader, maka domainnya adalah:

```
siskader.nusa.nu.id
```

_to be continued..._