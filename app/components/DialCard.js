"use client";
import React from "react";
import toast from "react-hot-toast";

function DialCard() {
  const keypads = [
    { id: 1, name: "1", action: "number" },
    { id: 2, name: "2", action: "number" },
    { id: 3, name: "3", action: "number" },
    { id: 4, name: "4", action: "number" },
    { id: 5, name: "5", action: "number" },
    { id: 6, name: "6", action: "number" },
    { id: 7, name: "7", action: "number" },
    { id: 8, name: "8", action: "number" },
    { id: 9, name: "9", action: "number" },
    {
      id: 10,
      name: "+",
      action: "number",
    },
    { id: 11, name: "0", action: "number" },
    {
      id: 12,
      name: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m11.4 16l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6zM9 20q-.475 0-.9-.213t-.7-.587L2 12l5.4-7.2q.275-.375.7-.587T9 4h11q.825 0 1.413.587T22 6v12q0 .825-.587 1.413T20 20z"
          ></path>
        </svg>
      ),
      action: "erase",
    },
  ];

  const tabs = [
    {
      id: 0,
      name: "input",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 4h1a3 3 0 0 1 3 3a3 3 0 0 1 3-3h1m0 16h-1a3 3 0 0 1-3-3a3 3 0 0 1-3 3H5m0-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1m8 0h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7M9 7v10"
          ></path>
        </svg>
      ),
    },
    {
      id: 1,
      name: "dialer",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13.84 3.84a1.838 1.838 0 0 1-3.141 1.3a1.838 1.838 0 1 1 2.602-2.601c.345.345.54.812.54 1.3m3.599 1.839a1.84 1.84 0 1 0 0-3.679a1.84 1.84 0 0 0 0 3.68M8.4 3.84a1.838 1.838 0 0 1-3.141 1.3A1.839 1.839 0 1 1 7.86 2.539c.345.345.539.812.539 1.3m5.441 5.437a1.839 1.839 0 1 1-3.677-.041a1.839 1.839 0 0 1 3.677.041m3.6 1.839a1.84 1.84 0 1 0 0-3.679a1.84 1.84 0 0 0 0 3.68M8.4 9.276a1.839 1.839 0 0 1-3.141 1.3a1.839 1.839 0 1 1 3.141-1.3m5.44 5.438a1.838 1.838 0 0 1-2.193 1.815a1.84 1.84 0 1 1 2.193-1.815m0 5.446a1.838 1.838 0 0 1-2.199 1.805a1.84 1.84 0 0 1-.663-3.333a1.84 1.84 0 0 1 2.862 1.529m5.44-5.447a1.838 1.838 0 0 1-2.193 1.815a1.84 1.84 0 0 1-1.348-2.507a1.84 1.84 0 0 1 3.541.692m-10.88 0a1.838 1.838 0 0 1-3.137 1.314A1.84 1.84 0 1 1 8.4 14.714"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      name: "history",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28">
          <path
            fill="currentColor"
            d="M5.5 4.25v1.28A11.96 11.96 0 0 1 14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12a11.95 11.95 0 0 1-5.637-1.404l-4.77 1.357a1.25 1.25 0 0 1-1.544-1.544l1.356-4.77A11.95 11.95 0 0 1 2 14q.001-1.023.166-2h.004c.254-1.314.609-2.182 1.334-1.973c.694.2.509.84.317 1.5a7 7 0 0 0-.137.524H3.68Q3.5 12.999 3.5 14c0 1.884.496 3.65 1.363 5.178a.75.75 0 0 1 .07.575l-1.318 4.634l4.634-1.318a.75.75 0 0 1 .576.07A10.45 10.45 0 0 0 14 24.5c5.799 0 10.5-4.701 10.5-10.5S19.799 3.5 14 3.5a10.48 10.48 0 0 0-8.247 4H8.75a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 4 8.25v-4a.75.75 0 0 1 1.5 0M8.75 6.5h-.582A9.46 9.46 0 0 1 14 4.5a9.5 9.5 0 0 1 0 19a9.45 9.45 0 0 1-4.681-1.231a1.75 1.75 0 0 0-1.343-.162l-2.908.827l.826-2.907a1.75 1.75 0 0 0-.161-1.343A9.45 9.45 0 0 1 4.5 14q.002-.87.15-1.694l.013-.053c.026-.126.066-.264.119-.448l.016-.056c.083-.282.223-.759.195-1.206A1.7 1.7 0 0 0 4.872 10H8.75a1.75 1.75 0 1 0 0-3.5M14 9.75a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H14z"
          ></path>
        </svg>
      ),
    },
  ];

  const [number, setNumber] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState(0);

  const openChat = (mode = "in_app") => {
    if (!number) {
      toast("Please enter a number");
      setTimeout(() => {
        document.getElementById("number-input").focus();
      }, 2000);
      return;
    }
    switch (mode) {
      case "in_app":
        window.location.href = `whatsapp://send?phone=${number}`;
        break;
      case "web":
        window.location.href = `https://api.whatsapp.com/send?phone=${number}`;
    }
  };

  return (
    <div className="p-4 fixed bottom-1 md:bottom-10 inset-x-0">
      <div className="bg-white border-2 w-full py-6 px-5 rounded-t-[20px] rounded-b-[45px] max-w-sm mx-auto">
        <div className="flex items-center justify-center gap-10 max-w-[200px] mx-auto">
          {tabs.map((tab, index) => (
            <button key={index} onClick={() => setSelectedTab(index)} className={`${selectedTab === index ? "text-[#1b1b1b]" : "text-neutral-400"}`}>
              {tab.icon}
            </button>
          ))}
        </div>

        {selectedTab == 0 && (
          <div className="flex items-center h-14 bg-neutral-100 rounded-xl mt-6">
            <span className="w-16 h-14 flex items-center justify-center border-r border-neutral-200 font-medium">+91 </span>
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full bg-transparent outline-none text-lg px-4"
              placeholder="Type number here"
              name=""
              id="number-input"
            />
          </div>
        )}

        {selectedTab == 1 && (
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full bg-transparent text-center outline-none text-xl font-medium px-4 tracking-wide mt-8"
            placeholder="0"
            name=""
            id="number-input"
          />
        )}

        {selectedTab == 1 && (
          <div className="grid grid-cols-3 max-w-[250px] mx-auto gap-y-2 mt-6">
            {keypads.map((keypad, index) =>
              keypad.name == null ? (
                <div key={index}></div>
              ) : (
                <div key={index} className="flex items-center justify-center">
                  <button
                    className="h-16 w-16 rounded-full text-xl bg-neutral-100 active:bg-neutral-200 flex items-center justify-center"
                    onClick={() => {
                      switch (keypad.action) {
                        case "number":
                          setNumber(number + keypad.name);
                          break;
                        case "erase":
                          setNumber(number.slice(0, -1));
                          break;
                      }
                    }}
                  >
                    {keypad.name}
                  </button>
                </div>
              )
            )}
          </div>
        )}

        {selectedTab == 2 && (
          <div>
            <p className="text-center mt-8 text-neutral-600">Feature coming soon</p>
          </div>
        )}

        <div className="mt-6">
          <div className="flex justify-center">
            <button onClick={() => openChat("web")} className="text-sm text-neutral-600 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"
                ></path>
              </svg>
              <span>Open in Whatsapp web</span>
            </button>
          </div>
          <div className="mt-7">
            <button
              onClick={() => openChat("in_app")}
              className="h-12 bg-[#1da254] text-white font-semibold w-full rounded-full flex items-center justify-center gap-2"
            >
              <span>Open in app</span>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h10m0 0v10m0-10L7 17"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 text-neutral-700 justify-center mt-6 text-sm">
          <a href="https://github.com/priyangsubanerjee">Github</a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-1 text-neutral-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
            ></path>
          </svg>
          <a href="https://priyangsu.dev/">Say Hi 👋</a>
        </div>
      </div>
    </div>
  );
}

export default DialCard;
