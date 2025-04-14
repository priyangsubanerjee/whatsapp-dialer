import Image from "next/image";
import DialCard from "./components/DialCard";

export default function Home() {
  const keypads = [
    { id: 1, name: "1", action: "/keypad1.png" },
    { id: 2, name: "2", action: "/keypad2.png" },
    { id: 3, name: "3", action: "/keypad3.png" },
    { id: 4, name: "4", action: "/keypad4.png" },
    { id: 5, name: "5", action: "/keypad5.png" },
    { id: 6, name: "6", action: "/keypad6.png" },
    { id: 7, name: "7", action: "/keypad7.png" },
    { id: 8, name: "8", action: "/keypad8.png" },
    { id: 9, name: "9", action: "/keypad8.png" },
    {
      id: 10,
      name: (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 21q-.425 0-.712-.288T11 20v-5.6l-3.95 3.975q-.3.3-.712.3t-.713-.3t-.3-.712t.3-.713L9.6 13H4q-.425 0-.712-.288T3 12t.288-.712T4 11h5.6L5.625 7.05q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3L11 9.6V4q0-.425.288-.712T12 3t.713.288T13 4v5.6l3.95-3.975q.3-.3.713-.3t.712.3t.3.713t-.3.712L14.4 11H20q.425 0 .713.288T21 12t-.288.713T20 13h-5.6l3.975 3.95q.3.3.3.713t-.3.712t-.712.3t-.713-.3L13 14.4V20q0 .425-.288.713T12 21"
          ></path>
        </svg>
      ),
      action: "/keypad8.png",
    },
    { id: 11, name: "0", action: "/keypad8.png" },
    { id: 12, name: "#", action: "/keypad8.png" },
  ];
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
