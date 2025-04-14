"use client"

import { useState } from "react"
import { HiCheck, HiXMark } from "react-icons/hi2"

// Define the type for our village profile data
type VillageProfileData = {
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

// Initial data
const initialData: VillageProfileData = {
  general: {
    name: "Desa Sukamaju",
    subdistrict: "Cianjur",
    district: "Cianjur",
    province: "Jawa Barat",
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

export default function EditProfileForm() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [profileData, setProfileData] = useState<VillageProfileData>(initialData)
  const [tempData, setTempData] = useState<VillageProfileData>(initialData)

  // Start editing a specific section
  const startEditing = (section: string) => {
    setIsEditing(true)
    setActiveSection(section)
    setTempData({ ...profileData })
  }

  // Cancel editing
  const cancelEditing = () => {
    setIsEditing(false)
    setActiveSection(null)
    setTempData(profileData)
  }

  // Save changes
  const saveChanges = () => {
    setProfileData({ ...tempData })
    setIsEditing(false)
    setActiveSection(null)
    // Here you would typically send the data to your backend
    alert("Perubahan berhasil disimpan!")
  }

  // Handle input changes for general information
  const handleGeneralChange = (field: string, value: string) => {
    setTempData({
      ...tempData,
      general: {
        ...tempData.general,
        [field]: value,
      },
    })
  }

  // Handle input changes for history
  const handleHistoryChange = (index: number, value: string) => {
    const newHistory = [...tempData.history]
    newHistory[index] = value
    setTempData({
      ...tempData,
      history: newHistory,
    })
  }

  // Handle input changes for vision
  const handleVisionChange = (value: string) => {
    setTempData({
      ...tempData,
      vision: value,
    })
  }

  // Handle input changes for mission
  const handleMissionChange = (index: number, value: string) => {
    const newMission = [...tempData.mission]
    newMission[index] = value
    setTempData({
      ...tempData,
      mission: newMission,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Profil Desa</h1>
        {!isEditing ? (
          <button
            onClick={() => startEditing("general")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <HiCheck className="h-4 w-4" />
            Edit Profil
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={cancelEditing}
              className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              <HiXMark className="h-4 w-4" />
              Batal
            </button>
            <button
              onClick={saveChanges}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <HiCheck className="h-4 w-4" />
              Simpan
            </button>
          </div>
        )}
      </div>

      {/* General Information */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Informasi Umum</h2>
          {!isEditing && (
            <button onClick={() => startEditing("general")} className="text-blue-600 hover:text-blue-800">
              Edit
            </button>
          )}
        </div>
        <div className="p-4">
          {isEditing && activeSection === "general" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Desa</label>
                  <input
                    type="text"
                    value={tempData.general.name}
                    onChange={(e) => handleGeneralChange("name", e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kecamatan</label>
                  <input
                    type="text"
                    value={tempData.general.subdistrict}
                    onChange={(e) => handleGeneralChange("subdistrict", e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kabupaten</label>
                  <input
                    type="text"
                    value={tempData.general.district}
                    onChange={(e) => handleGeneralChange("district", e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Provinsi</label>
                  <input
                    type="text"
                    value={tempData.general.province}
                    onChange={(e) => handleGeneralChange("province", e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kode Pos</label>
                  <input
                    type="text"
                    value={tempData.general.postalCode}
                    onChange={(e) => handleGeneralChange("postalCode", e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Luas Wilayah</label>
                  <input
                    type="text"
                    value={tempData.general.area}
                    onChange={(e) => handleGeneralChange("area", e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah Dusun</label>
                  <input
                    type="text"
                    value={tempData.general.hamlets}
                    onChange={(e) => handleGeneralChange("hamlets", e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah RW</label>
                  <input
                    type="text"
                    value={tempData.general.rw}
                    onChange={(e) => handleGeneralChange("rw", e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah RT</label>
                  <input
                    type="text"
                    value={tempData.general.rt}
                    onChange={(e) => handleGeneralChange("rt", e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Batas Wilayah</label>
                  <textarea
                    value={tempData.general.boundaries}
                    onChange={(e) => handleGeneralChange("boundaries", e.target.value)}
                    className="w-full p-2 border rounded-md"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Nama Desa</h3>
                  <p className="text-base">{profileData.general.name}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Kecamatan</h3>
                  <p className="text-base">{profileData.general.subdistrict}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Kabupaten</h3>
                  <p className="text-base">{profileData.general.district}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Provinsi</h3>
                  <p className="text-base">{profileData.general.province}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Kode Pos</h3>
                  <p className="text-base">{profileData.general.postalCode}</p>
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Luas Wilayah</h3>
                  <p className="text-base">{profileData.general.area}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Jumlah Dusun</h3>
                  <p className="text-base">{profileData.general.hamlets}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Jumlah RW</h3>
                  <p className="text-base">{profileData.general.rw}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Jumlah RT</h3>
                  <p className="text-base">{profileData.general.rt}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Batas Wilayah</h3>
                  <p className="text-base">{profileData.general.boundaries}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Village History */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Sejarah Desa</h2>
          {!isEditing && (
            <button onClick={() => startEditing("history")} className="text-blue-600 hover:text-blue-800">
              Edit
            </button>
          )}
        </div>
        <div className="p-4">
          {isEditing && activeSection === "history" ? (
            <div className="space-y-4">
              {tempData.history.map((paragraph, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Paragraf {index + 1}</label>
                  <textarea
                    value={paragraph}
                    onChange={(e) => handleHistoryChange(index, e.target.value)}
                    className="w-full p-2 border rounded-md"
                    rows={4}
                  />
                </div>
              ))}
              <button
                onClick={() => setTempData({ ...tempData, history: [...tempData.history, ""] })}
                className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
              >
                Tambah Paragraf
              </button>
            </div>
          ) : (
            <div>
              {profileData.history.map((paragraph, index) => (
                <p key={index} className="text-base text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Village Vision and Mission */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Visi dan Misi Desa</h2>
          {!isEditing && (
            <button onClick={() => startEditing("vision-mission")} className="text-blue-600 hover:text-blue-800">
              Edit
            </button>
          )}
        </div>
        <div className="p-4">
          {isEditing && activeSection === "vision-mission" ? (
            <div className="space-y-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Visi</label>
                <textarea
                  value={tempData.vision}
                  onChange={(e) => handleVisionChange(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Misi</label>
                {tempData.mission.map((item, index) => (
                  <div key={index} className="mb-2 flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleMissionChange(index, e.target.value)}
                      className="w-full p-2 border rounded-md"
                    />
                    <button
                      onClick={() => {
                        const newMission = [...tempData.mission]
                        newMission.splice(index, 1)
                        setTempData({ ...tempData, mission: newMission })
                      }}
                      className="px-2 py-1 bg-red-500 text-white rounded-md"
                    >
                      <HiXMark className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setTempData({ ...tempData, mission: [...tempData.mission, ""] })}
                  className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm mt-2"
                >
                  Tambah Misi
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h3 className="font-medium mb-2">Visi</h3>
                <p className="text-base text-gray-700">`{profileData.vision}`</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Misi</h3>
                <ol className="list-decimal list-inside text-base text-gray-700 space-y-2">
                  {profileData.mission.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Additional sections would follow the same pattern */}
      {/* For brevity, I'm showing just a few editable sections */}
    </div>
  )
}
