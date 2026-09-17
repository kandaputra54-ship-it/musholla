// src/lib/kajianSchedule.ts

// Helper untuk menentukan pekan keberapa dalam sebulan
export const getWeekOfMonth = (date: Date) => {
  const day = date.getDate();
  return Math.ceil(day / 7);
};

export const kajianRutin = [
  { hari: 'Senin', judul: 'Al-Qur\'an dan Terjemahan', waktu: "Ba'da Subuh" },
  { hari: 'Selasa', judul: 'Kitab Riyadhus Shalihin', waktu: "Ba'da Subuh" },
  { hari: 'Rabu', judul: 'Al-Qur\'an dan Terjemahan', waktu: "Ba'da Subuh" },
  { hari: 'Kamis', judul: 'Tarjih Tanya Jawab Agama', waktu: "Ba'da Subuh" },
  { hari: 'Jumat', judul: 'Tanya Jawab Agama', waktu: "Ba'da Subuh" },
  { hari: 'Sabtu', judul: 'Murojaah Al-Qur\'an', waktu: "Ba'da Subuh" },
];

export const tpaSchedule = {
  hari: 'Senin - Ahad',
  waktu: "Ba'da Magrib",
  judul: 'Tilawah Al-Quran & Terjemahan',
  kegiatan: "Tilawah Al-Quran & Terjemahan"
};