import { Button } from "../ui/Button";
import { ChevronLeft, Camera as CameraIcon } from "lucide-react";
import imgBack from "../../assets/1770490356937_original_1.jpeg";
import imgFront from "../../assets/1770496217349_original_2.jpeg";
import logo from "../../assets/logo.webp";

export const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Content (RTL Right) */}
        <div className="flex flex-col gap-6">
          <div className="text-gold text-sm font-semibold tracking-wider uppercase mb-2">
            מי אנחנו
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            אנחנו לא רק מצלמים, <br />
            אנחנו <span className="text-gold">יוצרים זכרונות.</span>
          </h2>

          <p className="text-gray-400 text-lg">
            ב-Magic 4 You, אנחנו מאמינים שלכל אירוע יש סיפור ששווה לספר. סגנון
            הצילום המגנטי שלנו משלב יצירתיות, רגעים ספונטניים, וצילומים נצחיים
            שמעניקים לכם זכרונות שיישארו אתכם לתמיד.
          </p>

          <div className="mt-4">
            <Button
              variant="outline"
              icon={<ChevronLeft className="w-4 h-4" />}
            >
              קרא עוד עלינו
            </Button>
          </div>
        </div>

        {/* Images (RTL Left) */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Back Card */}
          <div
            className="absolute w-[280px] h-[380px] bg-[#1a1c23] border-[6px] border-white max-w-full rounded shadow-2xl transform -rotate-6 -translate-x-12 opacity-80"
            style={{
              backgroundImage: `url('${imgBack}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Middle Card (The logo one) */}
          <div className="absolute z-10 w-[300px] h-[400px] bg-dark border-[6px] border-white max-w-full rounded shadow-2xl flex flex-col items-center justify-center transform rotate-2">
            <img
              src={logo}
              alt="Magic 4 You Logo"
              className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(234,194,130,0.8)]"
            />

            <h3 className="text-4xl text-gold font-script">Magic 4 you</h3>
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-500 mt-2 text-center px-4">
              אנו מקפיאים זכרונות, שתנצרו לנצח.
            </p>
          </div>

          {/* Front Card */}
          <div
            className="absolute z-0 w-[280px] h-[380px] bg-[#1a1c23] border-[6px] border-white max-w-full rounded shadow-2xl transform rotate-12 translate-x-16 opacity-90"
            style={{
              backgroundImage: `url('${imgFront}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="absolute top-1/4 right-0 w-8 h-8 text-gold">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
