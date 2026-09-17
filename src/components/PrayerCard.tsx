import { format, isAfter, isBefore, addMinutes } from 'date-fns';

interface PrayerCardProps {
  label: string;
  time: Date;
  currentTime: Date;
  isUpcoming: boolean;
  utama?: string;
  badal?: string;
  muadzin?: string;
}

export const PrayerCard = ({ label, time, currentTime, isUpcoming, utama }: PrayerCardProps) => {
  const activeUntil = addMinutes(time, 60);
  const isRunning = isAfter(currentTime, time) && isBefore(currentTime, activeUntil);

  // Menentukan role & nama imam
  const role = label === 'Dzuhur' && utama === 'KHOTIB' ? 'Khatib' : 'Imam';
  const imamName = utama || '-';

  return (
    <div
      className={`
        relative flex flex-col items-center justify-center
        h-[14rem] rounded-[24px] transition-all duration-700
        backdrop-blur-3xl overflow-hidden px-2
        ${isRunning
          ? 'bg-gradient-to-br from-[#FAED21]/30 to-transparent border-4 border-[#FAED21] scale-105 z-20'
          : isUpcoming
            ? 'bg-white/20 border-2 border-white/60 scale-[1.02] z-10'
            : 'bg-white/10 border border-white/20'
        }
      `}
    >
      {/* Bagian Atas: Label & Waktu */}
      <span className="text-3xl font-black uppercase tracking-widest text-white/90">{label}</span>
      <span className="text-5xl font-mono font-black tracking-tighter leading-none my-2 text-white">
        {format(time, 'HH:mm')}
      </span>

      {/* Bagian Bawah: Hanya Informasi Imam */}
      {utama && (
        <div className="w-full mt-2 border-t border-white/10 pt-2 flex flex-col items-center">
          <span className="text-[20px] font-bold uppercase tracking-widest text-[#FAED21]">
            {role}
          </span>
          <span className="text-[22px] font-black text-white leading-tight truncate max-w-[140px] text-center">
            {imamName}
          </span>
        </div>
      )}
    </div>
  );
};