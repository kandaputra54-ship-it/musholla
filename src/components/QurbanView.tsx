interface QurbanViewProps {
  harga?: number;
  batasPembayaran?: string;
  tahunHijriah?: number;
  tahunMasehi?: number;
}

export const QurbanView = ({
  harga = 3_700_000,
  batasPembayaran = '25 Mei 2026',
  tahunHijriah = 1447,
  tahunMasehi = 2026,
}: QurbanViewProps) => {
  const formatRupiah = (num: number) =>
    num.toLocaleString('id-ID').replace(/,/g, '.');

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-10 animate-in fade-in duration-1000 min-h-0">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-5xl font-bold tracking-tight text-yellow-500 uppercase">
          Menerima & Menyalurkan Hewan Qurban {tahunHijriah}H / {tahunMasehi}
        </h2>
        <p className="text-2xl opacity-80 uppercase tracking-[0.4em] font-light">Panitia Qurban Masjid & Musholla  Al-Huda</p>
        <div className="h-1 w-48 bg-emerald-500 mx-auto mt-4" />
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        <p className="uppercase tracking-[0.4em] text-emerald-400 text-2xl font-light">Nilai Qurban per jiwa</p>

        <div className="flex items-baseline gap-3">
          <span className="text-white/40 text-6xl font-light">Rp</span>
          <span className="text-[5.5rem] font-black leading-none text-white">{formatRupiah(harga)}</span>
        </div>
      </div>
    </div>
  );
};