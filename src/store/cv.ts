import { defineStore } from 'pinia'

interface CV {
  id: string
  title: string
  lastUpdated: string
  atsScore: number
  type: 'ai' | 'original'
}

interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string[]
}

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
}

interface CVContent {
  firstName: string
  lastName: string
  professionalTitle: string
  location: string
  email: string
  phone: string
  website: string
  linkedin: string
  github: string
  profileImage: string
  summary: string
  experience: Experience[]
  certifications: Certification[]
  skills: string[]
}

export const useCVStore = defineStore('cv', {
  state: () => ({
    recentCVs: [] as CV[],
    activeCV: {
      firstName: 'Budi',
      lastName: 'Santoso',
      professionalTitle: 'Full Stack Developer & UI/UX Specialist',
      location: 'Jakarta, Indonesia',
      email: 'budi.santoso@email.com',
      phone: '+62 812 3456 7890',
      website: 'budi.dev',
      linkedin: 'linkedin.com/in/budisantoso',
      github: 'github.com/budisantoso',
      profileImage: '',
      summary: 'Pengembang perangkat lunak yang berorientasi pada detail dengan pengalaman lebih dari 5 tahun dalam membangun aplikasi web skala besar. Memiliki keahlian mendalam dalam React, Node.js, dan arsitektur cloud. Berkomitmen untuk menciptakan solusi digital yang elegan, berperforma tinggi, dan berpusat pada pengguna. Saya ahli dalam memimpin tim teknis dan menerjemahkan kebutuhan bisnis yang kompleks menjadi produk teknis yang sukses.',
      experience: [
        {
          id: '1',
          company: 'Tech Innovators Solutions',
          role: 'Senior Full Stack Developer',
          period: 'Januari 2021 - Sekarang',
          description: [
            'Memimpin pengembangan platform e-commerce yang melayani lebih dari 100.000 pengguna aktif bulanan menggunakan React dan NestJS.',
            'Mengoptimalkan performa database PostgreSQL yang mengurangi waktu muat halaman sebesar 45%.',
            'Mengintegrasikan sistem pembayaran pihak ketiga dan layanan pengiriman otomatis (API RajaOngkir & Midtrans).',
            'Mentoring 5 pengembang junior dan menerapkan standar penulisan kode Clean Code serta Unit Testing.',
            'Berkolaborasi dengan tim produk untuk menentukan roadmap fitur teknis selama 12 bulan ke depan.'
          ]
        },
        {
          id: '2',
          company: 'Creative Digital Studio',
          role: 'Frontend Engineer',
          period: 'Maret 2018 - Desember 2020',
          description: [
            'Membangun lebih dari 20 dashboard analytics yang responsif menggunakan Vue.js dan Tailwind CSS.',
            'Menerapkan sistem desain (Design System) modular yang meningkatkan efisiensi pengembangan sebesar 30%.',
            'Bekerja sama dengan desainer UI/UX untuk memastikan implementasi desain pixel-perfect di seluruh browser.',
            'Mengelola siklus deployment otomatis menggunakan GitHub Actions dan AWS Amplify.'
          ]
        },
        {
          id: '3',
          company: 'Startup Growth Lab',
          role: 'Junior Web Developer',
          period: 'Mei 2016 - Februari 2018',
          description: [
            'Membantu dalam pengembangan fitur-fitur baru pada aplikasi internal perusahaan menggunakan JavaScript dan PHP.',
            'Melakukan bug fixing dan pemeliharaan rutin pada situs web klien.',
            'Berpartisipasi dalam sesi stand-up harian dan proses agile scrum.'
          ]
        }
      ],
      certifications: [
        {
          id: '1',
          name: 'Google Professional Cloud Architect',
          issuer: 'Google Cloud',
          date: '2023'
        },
        {
          id: '2',
          name: 'Certified Scrum Master (CSM)',
          issuer: 'Scrum Alliance',
          date: '2022'
        },
        {
          id: '3',
          name: 'Meta Front-End Developer Professional Certificate',
          issuer: 'Coursera',
          date: '2021'
        }
      ],
      skills: ['TypeScript', 'React / Next.js', 'Node.js', 'Go (Golang)', 'AWS / GCP', 'Docker & Kubernetes', 'System Design', 'UI/UX Design', 'Tailwind CSS', 'Redux / Pinia']
    } as CVContent,
    ui: {
      zoom: 100,
      activeTemplate: 'Executive Minimal',
      accentColor: '#111827',
      typography: 'Modern (Sans)',
      layoutColumns: 2,
      sidebarCollapsed: true
    },
    isLoading: false,
    isExporting: false,
    exportTrigger: 0,
    error: null as string | null,
  }),
  actions: {
    async fetchRecentCVs() {
      this.isLoading = true
      try {
        this.recentCVs = [
          {
            id: '1',
            title: 'Senior Product Designer CV - Tech',
            lastUpdated: '2 hours ago',
            atsScore: 92,
            type: 'ai'
          }
        ]
      } finally {
        this.isLoading = false
      }
    },
    updateActiveCV(data: Partial<CVContent>) {
      this.activeCV = { ...this.activeCV, ...data }
    },
    updateExperience(id: string, data: Partial<Experience>) {
      const index = this.activeCV.experience.findIndex(e => e.id === id)
      if (index !== -1) {
        this.activeCV.experience[index] = { ...this.activeCV.experience[index], ...data }
      }
    },
    addExperience() {
      const newExp: Experience = {
        id: Math.random().toString(36).substr(2, 9),
        company: 'Perusahaan Baru',
        role: 'Jabatan Baru',
        period: '2024 - Sekarang',
        description: ['Tanggung jawab pekerjaan...']
      }
      this.activeCV.experience.push(newExp)
    },
    deleteExperience(id: string) {
      this.activeCV.experience = this.activeCV.experience.filter(e => e.id !== id)
    },
    addExperienceDescription(expId: string) {
      const exp = this.activeCV.experience.find(e => e.id === expId)
      if (exp) {
        exp.description.push('Tanggung jawab baru...')
      }
    },
    updateExperienceDescription(expId: string, index: number, text: string) {
      const exp = this.activeCV.experience.find(e => e.id === expId)
      if (exp && exp.description[index] !== undefined) {
        exp.description[index] = text
      }
    },
    deleteExperienceDescription(expId: string, index: number) {
      const exp = this.activeCV.experience.find(e => e.id === expId)
      if (exp) {
        exp.description.splice(index, 1)
      }
    },
    updateCertification(id: string, data: Partial<Certification>) {
      const index = this.activeCV.certifications.findIndex(c => c.id === id)
      if (index !== -1) {
        this.activeCV.certifications[index] = { ...this.activeCV.certifications[index], ...data }
      }
    },
    addCertification() {
      const newCert: Certification = {
        id: Math.random().toString(36).substr(2, 9),
        name: 'Sertifikat Baru',
        issuer: 'Lembaga Penerbit',
        date: '2024'
      }
      this.activeCV.certifications.push(newCert)
    },
    deleteCertification(id: string) {
      this.activeCV.certifications = this.activeCV.certifications.filter(c => c.id !== id)
    },
    addSkill(skill: string) {
      if (skill && !this.activeCV.skills.includes(skill)) {
        this.activeCV.skills.push(skill)
      }
    },
    removeSkill(index: number) {
      this.activeCV.skills.splice(index, 1)
    },
    toggleSidebar() {
      this.ui.sidebarCollapsed = !this.ui.sidebarCollapsed
    },
    triggerExport() {
      this.exportTrigger++
    }
  }
})

// Force re-sync of actions for the builder
