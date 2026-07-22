-- =========================================
-- Supabase Schema for Portfolio Website
-- Maurellio Christopher Yonathan
-- =========================================

-- Tabel Projects
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  tech_stack TEXT[],
  image_url TEXT,
  live_url TEXT,
  github_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel Experiences (Pendidikan, Kerja, Prestasi)
CREATE TABLE experiences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  organization TEXT,
  description TEXT,
  date_start TEXT,
  date_end TEXT,
  type TEXT CHECK (type IN ('education', 'work', 'achievement')),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel Blogs
CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel Messages (Contact Form)
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================
-- Dummy Data
-- =========================================

-- Projects
INSERT INTO projects (title, description, tech_stack, image_url, live_url) VALUES
(
  'CariKerja',
  'Platform portal pencari kerja (job portal) terintegrasi dengan arsitektur multiservice. Dirancang untuk skalabilitas tinggi guna menghubungkan talenta terbaik dengan berbagai perusahaan.',
  ARRAY['JavaScript', 'PostgreSQL', 'Docker', 'Microservices'],
  '/projects/cari-kerja.png',
  NULL
),
(
  'MTO-Hub',
  'Platform digital terpusat untuk manajemen organisasi MTO FRI Telkom University, termasuk pengelolaan anggota dan event.',
  ARRAY['TSX', 'Supabase', 'Javascript', 'HTML CSS'],
  '/projects/mto-hub-1.png',
  'https://mtohub2026.vercel.app/dashboard'
),
(
  'California Housing AI',
  'Aplikasi AI interaktif untuk analisis dan prediksi harga rumah. Proyek ini dikembangkan menggunakan bahasa Python dan Jupyter Notebook (IPYNB), serta dideploy menggunakan Streamlit.',
  ARRAY['IPYNB', 'Python', 'Streamlit', 'GitHub'],
  '/projects/california-housing.png',
  'https://kelompok5tubesdatmincaliforniahousingprice-fhtcahqywbwrzwx3xmz.streamlit.app/'
),
(
  'AI-Driven Climate Mitigation: Strategic Pathway to Net Zero (SDG 13)',
  'Proyek ini mengadopsi kerangka kerja analitis ketat untuk mengidentifikasi "Decoupling Point"—titik di mana pertumbuhan ekonomi suatu negara tidak lagi berbanding lurus dengan perusakan lingkungan. Analisis ini sangat esensial bagi perumusan kebijakan global di bawah payung SDG 13 (Climate Action).',
  ARRAY['Python', 'Data Analysis', 'AI', 'SDG 13'],
  '/projects/climate-mitigation.png',
  NULL
),
(
  'Agrigems Trace',
  'Sistem keterlacakan (traceability) rantai pasok agrikultur terpadu. Mengintegrasikan petani, pabrik, dan agen untuk memberikan transparansi penuh dari kebun hingga distribusi dengan memanfaatkan peta interaktif berbasis geospasial (GIS).',
  ARRAY['TSX', 'JavaScript', 'Supabase', 'GIS'],
  '/projects/agrigems-trace.png',
  'https://agrigems.vercel.app/'
),
(
  'SkillExchange',
  'Aplikasi pertukaran keahlian (skill exchange) untuk mahasiswa. Platform ini dirancang dengan fitur-fitur interaktif seperti real-time chat, profile matching untuk menemukan rekan belajar yang tepat, serta sistem poin (point system) sebagai reward.',
  ARRAY['Laravel', 'phpMyAdmin', 'PHP'],
  '/projects/skill-exchange.png',
  NULL
);

-- Experiences
INSERT INTO experiences (title, organization, description, date_start, date_end, type, sort_order) VALUES
(
  'Data Entry & Research Internship',
  'PT. Ivonesia Solusi Data (Ivosights)',
  'Melakukan riset mendalam untuk mengumpulkan, memvalidasi, dan memperbarui data demografis serta informasi spesifik dari setiap tingkat Kabupaten/Kota hingga Kecamatan guna mendukung akurasi basis data perusahaan. Mengelola database internal secara terstruktur, mencakup proses input (data entry), transformasi data, hingga pembersihan data untuk memastikan seluruh informasi siap digunakan secara optimal.',
  'Juni 2026', 'Saat ini', 'work', 1
),
(
  'Rules and Commisioner',
  'EAD Practicum Laboratory',
  'Bertanggung jawab dalam penyusunan, pengawasan, dan penegakan tata tertib selama kegiatan praktikum berlangsung, guna memastikan proses berjalan tertib, adil, dan sesuai dengan prosedur laboratorium. Berperan aktif dalam menjaga disiplin serta membantu kelancaran koordinasi antara asisten laboratorium dan peserta. Bertanggung jawab sebagai PJ Absensi, yang mengatur Absensi Praktikan dan Absensi Asisten Praktikum.',
  'Januari 2026', 'Juni 2026', 'work', 2
),
(
  'Staff Competition & Event',
  'Enterprise Data Management Laboratory',
  'Mengelola end-to-end kompetisi dan workshop berskala besar yang berfokus pada topik manajemen data enterprise, mulai dari perencanaan strategis, koordinasi teknis, hingga evaluasi keberhasilan acara. Bertanggung jawab atas manajemen operasional kompetisi data, termasuk penyusunan konsep, manajemen stakeholder, dan eksekusi pada hari H. Bertanggung jawab atas eksekusi webinar "Data Awakening: Fueling the Next Generation of AI" serta bertindak sebagai MC untuk mengelola alur acara dan interaksi antara pemateri dengan peserta secara profesional.',
  'November 2025', 'Saat ini', 'work', 3
),
(
  'Rules and Commissioner',
  'SAG Practicum Laboratory',
  'Bertanggung jawab dalam penyusunan, pengawasan, dan penegakan tata tertib selama kegiatan praktikum berlangsung, guna memastikan proses berjalan tertib, adil, dan sesuai dengan prosedur laboratorium. Berperan aktif dalam menjaga disiplin serta membantu kelancaran koordinasi antara asisten laboratorium dan peserta. Bertanggung jawab sebagai PJ Absen, yang mengatur Absensi Praktikan dan Absensi Asisten Praktikum.',
  'September 2025', 'Desember 2025', 'work', 4
),
(
  'Staff MP => Ketua Umum',
  'Managerial Trainer Organization',
  'Memimpin dan bertanggung jawab penuh atas arah strategis serta operasional organisasi, guna memastikan seluruh program kerja selaras dengan visi pengembangan kompetensi manajerial mahasiswa. Bertindak sebagai representasi utama organisasi dalam menjalin hubungan eksternal dengan stakeholder, serta aktif dalam pengambilan keputusan krusial bagi pengembangan MTO. Memiliki rekam jejak profesional dalam komunikasi publik, termasuk pengalaman sebagai Master of Ceremony (MC) pada INNOVEX 2025 dan Moderator pada ISILOGIC 2024, yang mendukung kapabilitas dalam memimpin forum resmi organisasi.',
  'Desember 2024', 'Saat ini', 'work', 5
),
(
  'Club Study IT',
  'SEARCH',
  'Berperan aktif dalam organisasi SEARCH dengan mengikuti berbagai seminar dan webinar yang diselenggarakan untuk pengembangan pengetahuan dan keterampilan anggota. Ikut serta dalam pelatihan IT dan kegiatan mentoring sebagai persiapan lomba, guna meningkatkan kompetensi teknis serta kemampuan kolaborasi dalam tim.',
  'Desember 2024', 'November 2025', 'work', 6
),
(
  'UI/UX Designer',
  'Apple Dev SG (Unofficial)',
  'Berperan dalam perancangan user interface menggunakan Figma pada proyek, dengan fokus pada pembuatan desain antarmuka yang interaktif, intuitif, dan sesuai kebutuhan pengguna. Mempelajari bahasa pemrograman Swift untuk pengembangan aplikasi iOS dengan menggunakan tools Xcode, sebagai dasar pemahaman dalam membangun aplikasi berbasis Apple. Aktif berpartisipasi dalam setiap kegiatan dan diskusi proyek, dengan berkontribusi pada perencanaan, pengembangan, serta penyelesaian tugas secara kolaboratif.',
  'Januari 2025', 'Desember 2025', 'work', 7
),
(
  'S1 Sistem Informasi',
  'Universitas Telkom',
  'Menempuh pendidikan sarjana di program studi Sistem Informasi.',
  '2024', 'Sekarang', 'education', 10
);

-- Blogs
INSERT INTO blogs (title, excerpt, content) VALUES
(
  'Memulai Perjalanan di Dunia AI/ML',
  'Pengalaman pertama saya belajar Machine Learning dan bagaimana hal itu mengubah perspektif saya tentang teknologi.',
  'Artificial Intelligence dan Machine Learning telah menjadi salah satu bidang yang paling menarik perhatian saya sejak awal kuliah. Perjalanan ini dimulai ketika saya pertama kali mempelajari Python dan memahami konsep dasar dari supervised learning...'
),
(
  'Mengapa Next.js Menjadi Pilihan Utama Saya',
  'Perbandingan framework modern dan alasan mengapa Next.js cocok untuk berbagai jenis proyek web.',
  'Dalam dunia pengembangan web modern, pemilihan framework yang tepat sangat krusial. Setelah mencoba berbagai framework seperti React, Vue, dan Angular, saya akhirnya menemukan Next.js sebagai pilihan utama saya...'
),
(
  'Kepemimpinan di Era Digital',
  'Refleksi saya sebagai Ketua Umum MTO FRI dan bagaimana teknologi membantu dalam mengelola organisasi.',
  'Menjadi pemimpin di organisasi mahasiswa di era digital membawa tantangan dan peluang yang unik. Sebagai Ketua Umum MTO FRI, saya belajar bahwa kepemimpinan bukan hanya tentang mengambil keputusan...'
);

-- =========================================
-- Row Level Security
-- =========================================

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read experiences" ON experiences FOR SELECT USING (true);
CREATE POLICY "Public read blogs" ON blogs FOR SELECT USING (true);

-- Public insert for contact form
CREATE POLICY "Public insert messages" ON messages FOR INSERT WITH CHECK (true);
