import { Button } from "../ui/Button";
import { ChevronLeft } from "lucide-react";
import img1 from "../../assets/1770490356937_original_1.jpeg";
import img2 from "../../assets/1770490356937_styled_0.jpeg";
import img3 from "../../assets/1770493852385_original_1.jpeg";
import img4 from "../../assets/1770493852385_styled_0.jpeg";

export const GalleryPreview = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="py-20" id="gallery">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-gold text-sm font-semibold tracking-wider uppercase mb-2">
              הקסם שלנו
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              צילום בכל <span className="text-gold">פריים</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="shrink-0"
            icon={<ChevronLeft className="w-4 h-4" />}
          >
            צפה בגלריה המלאה
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-white/5"
            >
              <img
                src={src}
                alt="Gallery preview"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
