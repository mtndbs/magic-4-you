
import { Sparkles, Camera, Magnet, Image as ImageIcon } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "רגעים מגנטיים",
      desc: "אנו תופסים את הרגעים האמיתיים והקסומים."
    },
    {
      icon: <Camera className="w-6 h-6 text-gold" />,
      title: "מומחי אירועים",
      desc: "חתונות, מסיבות, אירועי חברה ועוד."
    },
    {
      icon: <Magnet className="w-6 h-6 text-gold" />,
      title: "חיבור מיידי",
      desc: "אנו משתלבים בקהל, ואתם זורחים."
    },
    {
      icon: <ImageIcon className="w-6 h-6 text-gold" />,
      title: "זכרונות לנצח",
      desc: "מזכרות באיכות הגבוהה ביותר שתאהבו תמיד."
    }
  ];

  return (
    <section className="py-12 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
            {features.map((f, idx) => (
              <div key={idx} className={`pt-6 md:pt-0 ${idx !== 0 ? 'md:pr-8' : ''} flex items-start gap-4`}>
                <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
