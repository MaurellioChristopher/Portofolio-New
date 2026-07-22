"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import TimelineItem from "./TimelineItem";
import { supabase } from "@/lib/supabase";
import type { Experience } from "@/types";

const dummyExperiences: Experience[] = [
  // ===== EXPERIENCE =====
  {
    id: "e1",
    title: "Data Entry & Research Internship",
    organization: "PT. Ivonesia Solusi Data (Ivosights)",
    description: "Melakukan riset mendalam untuk mengumpulkan, memvalidasi, dan memperbarui data demografis serta informasi spesifik dari setiap tingkat Kabupaten/Kota hingga Kecamatan guna mendukung akurasi basis data perusahaan. Mengelola database internal secara terstruktur, mencakup proses input (data entry), transformasi data, hingga pembersihan data untuk memastikan seluruh informasi siap digunakan secara optimal.",
    date_start: "Juni 2026",
    date_end: "Saat ini",
    type: "work",
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Rules and Commisioner",
    organization: "EAD Practicum Laboratory",
    description: "Bertanggung jawab dalam penyusunan, pengawasan, dan penegakan tata tertib selama kegiatan praktikum berlangsung, guna memastikan proses berjalan tertib, adil, dan sesuai dengan prosedur laboratorium. Berperan aktif dalam menjaga disiplin serta membantu kelancaran koordinasi antara asisten laboratorium dan peserta. Bertanggung jawab sebagai PJ Absensi, yang mengatur Absensi Praktikan dan Absensi Asisten Praktikum.",
    date_start: "Januari 2026",
    date_end: "Juni 2026",
    type: "work",
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "e3",
    title: "Staff Competition & Event",
    organization: "Enterprise Data Management Laboratory",
    description: "Mengelola end-to-end kompetisi dan workshop berskala besar yang berfokus pada topik manajemen data enterprise, mulai dari perencanaan strategis, koordinasi teknis, hingga evaluasi keberhasilan acara. Bertanggung jawab atas manajemen operasional kompetisi data, termasuk penyusunan konsep, manajemen stakeholder, dan eksekusi pada hari H. Bertanggung jawab atas eksekusi webinar \"Data Awakening: Fueling the Next Generation of AI\" serta bertindak sebagai MC untuk mengelola alur acara dan interaksi antara pemateri dengan peserta secara profesional.",
    date_start: "November 2025",
    date_end: "Saat ini",
    type: "work",
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "e4",
    title: "Rules and Commissioner",
    organization: "SAG Practicum Laboratory",
    description: "Bertanggung jawab dalam penyusunan, pengawasan, dan penegakan tata tertib selama kegiatan praktikum berlangsung, guna memastikan proses berjalan tertib, adil, dan sesuai dengan prosedur laboratorium. Berperan aktif dalam menjaga disiplin serta membantu kelancaran koordinasi antara asisten laboratorium dan peserta. Bertanggung jawab sebagai PJ Absen, yang mengatur Absensi Praktikan dan Absensi Asisten Praktikum.",
    date_start: "September 2025",
    date_end: "Desember 2025",
    type: "work",
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "e5",
    title: "Staff MP => Ketua Umum",
    organization: "Managerial Trainer Organization",
    description: "Memimpin dan bertanggung jawab penuh atas arah strategis serta operasional organisasi, guna memastikan seluruh program kerja selaras dengan visi pengembangan kompetensi manajerial mahasiswa. Bertindak sebagai representasi utama organisasi dalam menjalin hubungan eksternal dengan stakeholder, serta aktif dalam pengambilan keputusan krusial bagi pengembangan MTO. Memiliki rekam jejak profesional dalam komunikasi publik, termasuk pengalaman sebagai Master of Ceremony (MC) pada INNOVEX 2025 dan Moderator pada ISILOGIC 2024, yang mendukung kapabilitas dalam memimpin forum resmi organisasi.",
    date_start: "Desember 2024",
    date_end: "Saat ini",
    type: "work",
    sort_order: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: "e6",
    title: "Club Study IT",
    organization: "SEARCH",
    description: "Berperan aktif dalam organisasi SEARCH dengan mengikuti berbagai seminar dan webinar yang diselenggarakan untuk pengembangan pengetahuan dan keterampilan anggota. Ikut serta dalam pelatihan IT dan kegiatan mentoring sebagai persiapan lomba, guna meningkatkan kompetensi teknis serta kemampuan kolaborasi dalam tim.",
    date_start: "Desember 2024",
    date_end: "November 2025",
    type: "work",
    sort_order: 6,
    created_at: new Date().toISOString(),
  },
  {
    id: "e7",
    title: "UI/UX Designer",
    organization: "Apple Dev SG (Unofficial)",
    description: "Berperan dalam perancangan user interface menggunakan Figma pada proyek, dengan fokus pada pembuatan desain antarmuka yang interaktif, intuitif, dan sesuai kebutuhan pengguna. Mempelajari bahasa pemrograman Swift untuk pengembangan aplikasi iOS dengan menggunakan tools Xcode, sebagai dasar pemahaman dalam membangun aplikasi berbasis Apple. Aktif berpartisipasi dalam setiap kegiatan dan diskusi proyek, dengan berkontribusi pada perencanaan, pengembangan, serta penyelesaian tugas secara kolaboratif.",
    date_start: "Januari 2025",
    date_end: "Desember 2025",
    type: "work",
    sort_order: 7,
    created_at: new Date().toISOString(),
  },
  // ===== EDUCATION =====
  {
    id: "ed1",
    title: "S1 Sistem Informasi",
    organization: "Universitas Telkom",
    description: "Menempuh pendidikan sarjana di program studi Sistem Informasi.",
    date_start: "2024",
    date_end: "Sekarang",
    type: "education",
    sort_order: 10,
    created_at: new Date().toISOString(),
  },
];

export default function Timeline() {
  const [experiences, setExperiences] =
    useState<Experience[]>(dummyExperiences);

  useEffect(() => {
    async function fetchExperiences() {
      if (!supabase) return;
      const { data, error } = await supabase
        .from("experiences")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!error && data && data.length > 0) {
        setExperiences(data);
      }
    }
    fetchExperiences();
  }, []);

  return (
    <SectionWrapper
      id="pengalaman"
      className="py-20 sm:py-28 px-4"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-maroon uppercase tracking-widest">
            Perjalanan
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-balance">
            Pendidikan & Pengalaman
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Setiap pengalaman membentuk siapa saya hari ini dan mempersiapkan
            saya untuk tantangan di masa depan.
          </p>
          <div className="w-16 h-1 bg-maroon/20 rounded-full mx-auto mt-5" />
        </div>

        {/* Timeline */}
        <div className="relative pl-10 md:pl-0">
          {/* Vertical Line */}
          <div className="timeline-line" />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                item={exp}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
