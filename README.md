# Desa Website

Template website desa modern yang terintegrasi dengan Desa CMS (on going). Didesain khusus untuk kebutuhan desa di Madura dengan fokus pada kemudahan penggunaan, performa dan biaya yang minim.

## 🌟 Fitur Website

### Beranda
- Slideshow berita terkini
- Statistik desa
- Pengumuman penting
- Links to vital services

### Profil Desa
- Sejarah desa
- Visi & misi
- Struktur pemerintahan
- Demografi penduduk

### Layanan
- Form pengaduan masyarakat
- Tracking status pengaduan
- Informasi layanan desa

### Transparansi
- Informasi APBD
- Laporan realisasi anggaran
- Program desa

### Informasi & Media
- Berita desa
- Artikel
- Galeri foto & video
- Agenda kegiatan

## 🛠️ Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context / Zustand / Redux
- **Data Fetching**: TanStack Query / Axios

## 🚀 Deployment

```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Build untuk production
npm run build

# Start production server
npm start
```

## ⚙️ Environment Variables

```env
NEXT_PUBLIC_CMS_URL=
NEXT_PUBLIC_VILLAGE_ID=
CMS_API_KEY=
```

## 🔒 Security Features

- API Key authentication
- Rate limiting
- CORS protection

## 💡 Usage

1. Deploy template website
2. Konfigurasi environment variables
3. Hubungkan dengan CMS menggunakan API key
4. Mulai mengelola konten melalui CMS

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🎯 Roadmap

Phase 1 (Current):
- [x] Basic website template
- [ ] CMS integration
- [ ] Deployment untuk 3 desa pilot

Phase 2:
- [ ] Additional customization options
- [ ] Performance optimization
- [ ] Extended features

## 🚀  Live Demo Sementara 
Aplikasi telah di-deploy dan dapat diakses melalui tautan berikut:  

🔗 [Desa App - Live Demo](https://desa-app.vercel.app/)
