// Initial data
export type VillageProfileData = {
    general: {
      name: string
      subdistrict: string
      district: string
      province: string
      postalCode: string
      area: string
      hamlets: string
      rw: string
      rt: string
      boundaries: string
    }
    history: string[]
    government: {
      headman: { name: string; position: string; photo?: string }
      secretary: { name: string; position: string; photo?: string }
      treasurer: { name: string; position: string; photo?: string }
      departments: { name: string; position: string }[]
    }
    demographics: {
      total: string
      households: string
      male: string
      female: string
      ageGroups: {
        children: string
        youth: string
        adult: string
        elderly: string
      }
      education: {
        level: string
        count: string
        percentage: string
      }[]
    }
    potential: {
      agriculture: string[]
      livestock: string[]
      tourism: string[]
      facilities: {
        education: string[]
        health: string[]
        worship: string[]
        public: string[]
      }
    }
    vision: string
    mission: string[]
  }

export const initialData: VillageProfileData = {
    general: {
      name: "Desa Duko",
      subdistrict: "Rubaru",
      district: "Sumenep",
      province: "Jawa Timur",
      postalCode: "43253",
      area: "5.2 km²",
      hamlets: "4 Dusun",
      rw: "12 RW",
      rt: "36 RT",
      boundaries: "Utara: Desa Cikalong, Selatan: Desa Mekarsari, Timur: Desa Sukajadi, Barat: Desa Cimahi",
    },
    history: [
      "Desa Sukamaju didirikan pada tahun 1945 setelah kemerdekaan Indonesia. Awalnya merupakan pemukiman kecil yang dihuni oleh beberapa keluarga petani yang mengolah lahan subur di sekitar kaki gunung.",
      'Nama "Sukamaju" berasal dari kata "Suka" yang berarti senang dan "Maju" yang berarti berkembang, mencerminkan harapan para pendiri desa agar masyarakatnya hidup dalam kesenangan dan terus berkembang.',
      "Seiring berjalannya waktu, Desa Sukamaju berkembang menjadi desa yang makmur dengan berbagai potensi pertanian, peternakan, dan wisata alam yang menjadi andalan perekonomian masyarakat.",
    ],
    government: {
      headman: { name: "H. Suherman", position: "Kepala Desa" },
      secretary: { name: "Asep Saepudin", position: "Sekretaris Desa" },
      treasurer: { name: "Hj. Siti Aminah", position: "Bendahara Desa" },
      departments: [
        { name: "Dedi Supriadi", position: "Kaur Pemerintahan" },
        { name: "Rina Marlina", position: "Kaur Pembangunan" },
        { name: "Agus Setiawan", position: "Kaur Kesejahteraan" },
        { name: "Yanti Suryani", position: "Kaur Keuangan" },
      ],
    },
    demographics: {
      total: "1,245",
      households: "320",
      male: "640",
      female: "605",
      ageGroups: {
        children: "285",
        youth: "210",
        adult: "520",
        elderly: "230",
      },
      education: [
        { level: "Tidak Sekolah", count: "120", percentage: "9.6%" },
        { level: "SD/Sederajat", count: "325", percentage: "26.1%" },
        { level: "SMP/Sederajat", count: "280", percentage: "22.5%" },
        { level: "SMA/Sederajat", count: "390", percentage: "31.3%" },
        { level: "Diploma/Sarjana", count: "130", percentage: "10.5%" },
      ],
    },
    potential: {
      agriculture: ["Padi (120 hektar)", "Jagung (45 hektar)", "Sayuran (30 hektar)", "Buah-buahan (25 hektar)"],
      livestock: ["Sapi (85 ekor)", "Kambing (120 ekor)", "Ayam (2500 ekor)", "Bebek (350 ekor)"],
      tourism: ["Air Terjun Sukamaju", "Bukit Panorama", "Agrowisata Kebun Strawberry", "Kampung Budaya"],
      facilities: {
        education: ["SD: 2 unit", "SMP: 1 unit", "PAUD: 3 unit"],
        health: ["Puskesmas: 1 unit", "Posyandu: 4 unit", "Bidan Desa: 2 orang"],
        worship: ["Masjid: 5 unit", "Musholla: 8 unit", "Gereja: 1 unit"],
        public: ["Balai Desa: 1 unit", "Lapangan: 2 unit", "Pasar Desa: 1 unit"],
      },
    },
    vision:
      "Mewujudkan Desa Sukamaju yang mandiri, sejahtera, dan berbudaya berbasis pertanian dan pariwisata yang berkelanjutan",
    mission: [
      "Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan",
      "Mengembangkan potensi pertanian dan peternakan dengan teknologi tepat guna",
      "Membangun infrastruktur desa yang memadai dan berkelanjutan",
      "Mengembangkan potensi wisata desa untuk meningkatkan perekonomian masyarakat",
      "Melestarikan budaya dan kearifan lokal sebagai identitas desa",
      "Meningkatkan pelayanan publik yang transparan dan akuntabel",
    ],
  }