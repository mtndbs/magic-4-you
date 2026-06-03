
import { Camera, Smile, Award, Heart } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { icon: <Camera className="w-8 h-8 text-gold" />, value: "150+", label: "אירועים שצולמו" },
    { icon: <Smile className="w-8 h-8 text-gold" />, value: "98%", label: "לקוחות מרוצים" },
    { icon: <Award className="w-8 h-8 text-gold" />, value: "5+", label: "שנות ניסיון" },
    { icon: <Heart className="w-8 h-8 text-gold" />, value: "אלפי", label: "זכרונות שנמסרו" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
