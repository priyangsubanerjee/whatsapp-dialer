import Image from "next/image";
import DialCard from "./components/DialCard";

export default function Home() {
  return (
    <div className="bg-[#21c063] h-svh fixed inset-0">
      <div className="mt-16 px-12">
        <img className="w-16 mx-auto" src="https://www.cdnlogo.com/logos/w/29/whatsapp-icon.svg" alt="" />
        <h2 className="text-3xl text-white font-bold text-center mt-6">WhatsApp Dialer</h2>
        <p className="text-sm text-white textpre text-center font-medium leading-6 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <DialCard />
    </div>
  );
}
