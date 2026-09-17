// components/ImamOverlay.tsx
interface ImamOverlayProps {
  isVisible: boolean;
  prayerLabel: string;
  utama: string;
}

export const ImamOverlay = ({ isVisible, prayerLabel, utama }: ImamOverlayProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-[#1a204d] flex flex-col items-center justify-center text-white p-6">
      
      {/* Header Judul */}
      <div className="text-center mb-8">
        <p className="text-lg text-[#FAED21] font-medium tracking-[0.3em] uppercase mb-1 opacity-80">
          Informasi Shalat Berjamaah
        </p>
        <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight leading-tight">
          Jadwal Imam <span className="text-[#FAED21]">{prayerLabel}</span>
        </h2>
      </div>

      {/* Container Kartu Imam Utama */}
      <div className="flex flex-col gap-5 w-full max-w-2xl">
        <div className="relative overflow-hidden bg-gradient-to-r from-white/10 to-white/5 rounded-[2rem] p-8 md:p-10 border border-white/20 shadow-lg text-center">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#FAED21]" />
          
          <p className="text-xl text-white/60 mb-2 uppercase tracking-[0.2em] font-semibold">
            Imam Utama
          </p>
          <p className="text-5xl md:text-7xl font-bold text-white tracking-wide truncate">
            {utama}
          </p>
        </div>
      </div>

      {/* Footer Pengingat Shaf */}
      <div className="mt-12 text-center max-w-4xl">
        <div className="h-[1px] w-24 bg-[#FAED21]/40 mx-auto mb-4" />
        <p className="text-2xl md:text-3xl font-medium text-[#FAED21] italic leading-relaxed px-4">
          "Luruskan dan rapatkan shaf, karena lurusnya shaf termasuk kesempurnaan shalat."
        </p>
      </div>

    </div>
  );
};