
import { Button } from '../ui/Button';
import { Star } from 'lucide-react';
import logo from '../../assets/logo.webp';
import { WhatsappLogo } from '../ui/WhatsappIcon';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Right content (RTL Left side on screen) */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="inline-block border border-gold/30 rounded-full px-4 py-1 text-gold text-xs font-semibold tracking-wider uppercase self-start bg-gold/5">
            צילום מגנטי
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            רגעים שנדבקים <br /> בדוק עם <span className="text-gold">קסם.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg">
            אנחנו תופסים את האנרגיה, החיוכים משתקפים, והפרטים הקטנים שעושים את האירוע שלכם לבלתי נשכח.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button 
              href="https://wa.me/972502251234"
              target="_blank"
              rel="noopener noreferrer"
              icon={<WhatsappLogo className="w-5 h-5" />}
            >
              שריין תאריך
            </Button>
            <Button variant="outline">
              לצפייה בגלריה
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex -space-x-3 -space-x-reverse">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-600 border-2 border-dark overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-gold">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-gray-400 mt-1">אמינות מעל 100+ לקוחות מרוצים</span>
            </div>
          </div>
        </div>

        {/* Left Graphics (RTL Right side on screen) */}
        <div className="order-1 md:order-2 flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
             {/* Neon glowing camera placeholder */}
             <div className="absolute inset-0 border-[3px] border-gold rounded-3xl opacity-20 transform rotate-[-5deg]"></div>
             <div className="absolute inset-0 border-[3px] border-gold rounded-3xl opacity-40 transform rotate-[3deg]"></div>
             <img src={logo} alt="Magic 4 You Logo" className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(234,194,130,0.8)]" />
          </div>
          <div className="text-center mt-8 space-y-2">
            <h2 className="text-6xl text-gold font-script drop-shadow-md">Magic 4 you</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">אנו מקפיאים זכרונות, שתנצרו לנצח.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
