import Featuredsection from "@/components/featuredsection";
import Herosection from "@/components/hersosection";
import Image from "next/image";
import Musicclass from "@/components/musiclass";
import Reviews from "@/components/reviews";
import Events from "@/components/events";
export default function Home() {
  return (
    <div className="bg-grid-white/[0.02] antialiased min-h-screen font-[family-name:var(--font-geist-sans)]">
     <Herosection/>
     <Featuredsection/>
     <Musicclass />
     <Reviews />
     <Events />
    </div>
  );
}
