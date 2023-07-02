import { useState } from "react";
import "./App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="App h-screen w-screen flex flex-col md:flex-row">
      <div
        className={`transition-all duration-300 h-1/5 md:h-screen bg-[#F3A536] w-full md:w-1/6 flex items-center justify-center ${
          showSidebar ? "!w-screen !h-screen" : ""
        }`}
      >
        <div className={`${!showSidebar ? "!hidden opacity-0" : ""}`}>
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="absolute opacity-1 top-0 cursor-pointer font-semibold right-0 m-10 px-5 py-3 border border-black text-black w-[200px] flex justify-center items-center rounded-[10px]"
          >
            Chiudi
          </div>
          <section className="py-3 sm:py-5">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
              <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Locale convenzionato
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Categoria
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Tipo di offerta
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Offerta
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Informazioni
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="vertigo-logo.png"
                          alt="vertigo-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        Vertigo tattoos & piercing
                      </th>
                      <td className="px-4 py-2 text-xs">Negozio</td>
                      <td className="px-4 py-2 text-xs">Sconto</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        10%
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="juta-logo.png"
                          alt="juta-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        Juta health & fitness
                      </th>
                      <td className="px-4 py-2 text-xs">Palestra</td>
                      <td className="px-4 py-2 text-xs">Sconto</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        1 mese sala macchine a 50 €
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        Accesso in 2 fasce a scelta tra: 07:00-11:00,
                        13:30-16:30 o 19:30-21:30
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="juta-logo.png"
                          alt="juta-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        Juta health & fitness
                      </th>
                      <td className="px-4 py-2 text-xs">Palestra</td>
                      <td className="px-4 py-2 text-xs">Omaggio</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        1 pass gratuito di prova
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="urban-logo.png"
                          alt="urban-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        Urban Coffee & Factory Lab
                      </th>
                      <td className="px-4 py-2 text-xs">Bar</td>
                      <td className="px-4 py-2 text-xs">Sconto</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        10%
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="wakiki-logo.png"
                          alt="wakiki-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        Waikiki Poke
                      </th>
                      <td className="px-4 py-2 text-xs">Ristorazione</td>
                      <td className="px-4 py-2 text-xs">Omaggio</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        1 bibita omaggio ogni pokè
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="barduomo-logo.png"
                          alt="barduomo-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        Bar duomo
                      </th>
                      <td className="px-4 py-2 text-xs">Bar</td>
                      <td className="px-4 py-2 text-xs">Sconto</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        Ichnusa a 2,50€
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="ibris-logo.png"
                          alt="ibris-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        Ibris Focacce e Pizze
                      </th>
                      <td className="px-4 py-2 text-xs">Ristorazione</td>
                      <td className="px-4 py-2 text-xs">Sconto</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        10%
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="debug-logo.png"
                          alt="debug-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        DeBugs Trento
                      </th>
                      <td className="px-4 py-2 text-xs">Bar</td>
                      <td className="px-4 py-2 text-xs">Sconto</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        2 Gin Tonic 10 € e 2 Long Island 12€
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="murapc-logo.png"
                          alt="murapc-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        Mura Pc
                      </th>
                      <td className="px-4 py-2 text-xs">Negozio</td>
                      <td className="px-4 py-2 text-xs">Sconto</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        10%
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <img
                          src="aquilabasket-logo.png"
                          alt="aquilabasket-logo"
                          className="w-auto rounded-full h-8 mr-3"
                        />
                        Aquila Basket
                      </th>
                      <td className="px-4 py-2 text-xs">Intrattenimento</td>
                      <td className="px-4 py-2 text-xs">Sconto</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        Biglietto in curva 10€
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        Necessaria UniAquila Card
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        className={`md:w-5/6 flex flex-col w-full ${
          showSidebar ? "!hidden" : ""
        }`}
      >
        <div className="flex">
          <div className="md:w-3/5 mb-10">
            <div className="h-1/2 p-2 md:p-10 flex flex-col justify-center">
              <p className="text-3xl font-bold w-[350px]">
                Spotted Unitn, da studenti per studenti.
              </p>
              <p className="mt-5 text-sm font-extralight tracking-wide">
                Associazione è apartitica e aconfessionale con l’obiettivo di
                condividere, consolidare e divulgare attività di utilità sociale
                per il pubblico universitario. Organiziamo e gestiamo eventi di
                carattere ludico, artistico e culturale grazie alle sinergie
                create con altre organizzazioni dell'ambiente universitario.
                L’obiettivo rimane quello di promozione verso ogni altra
                attività relativa alla vita universitaria trentina, valorizzando
                luoghi e locali e facendo quello che sui social facciamo da
                sempre: far incontrare le persone.
              </p>
            </div>
            <div className="border my-10 border-l-0 rounded-r-[20px] border-[#F3A536]  w-full h-1/2 p-4 md:p-10 flex flex-col">
              <p className="text-white text-2xl mt-3 font-bold">
                Spotted Unitn annunci per i vostri annunci e per le pubblicità
              </p>

              <p className="mt-5 text-sm font-extralight tracking-wide">
                Lorem ipsum dolor sit amet consectetur. Adipiscing quam eget
                nunc turpis egestas vel. Nunc nisl leo ultricies elementum
                maecenas at mauris.Lorem ipsum dolor sit amet consectetur.
                Adipiscing quam eget nunc turpis egestas vel. Nunc nisl leo
                ultricies elementum maecenas at mauris.Lorem ipsum dolor sit
                amet consectetur. Adipiscing quam eget nunc turpis egestas vel.
                Nunc nisl leo ultricies elementum maecenas at mauris.Lorem ipsum
                dolor sit amet consectetur. Adipiscing quam eget nunc turpis
                egestas vel. Nunc nisl leo ultricies elementum maecenas at
                mauris.Lorem ipsum dolor sit amet consectetur. Adipiscing quam
                eget nunc turpis egestas vel. Nunc nisl leo ultricies elementum
                maecenas at mauris.Lorem ipsum dolor sit amet consectetur.
                Adipiscing quam eget nunc turpis egestas vel. Nunc nisl leo
                ultricies elementum maecenas at mauris.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 p-2 md:p-10 mb-10">
            <div className="border rounded-[20px] border-[#F3A536] w-full h-1/2 p-4 md:p-10 flex flex-col">
              <div className="md:flex items-center">
                <div className="w-[100px] mr-5">
                  <img src="logo.png" className="object-container" />
                </div>
                <p className="text-[#F3A536] text-2xl mt-3 font-bold">
                  Tutti i vantaggi della <br /> tua Spotted Card
                </p>
              </div>
              <p className="mt-5 text-sm font-extralight tracking-wide">
                Lorem ipsum dolor sit amet consectetur. Adipiscing quam eget
                nunc turpis egestas vel. Nunc nisl leo ultricies elementum
                maecenas at mauris.
              </p>
              <div
                onClick={() => setShowSidebar(!showSidebar)}
                className="cursor-pointer mt-5 px-5 py-3 border border-[#F3A536] text-[#F3A536] flex justify-center items-center rounded-[10px]"
              >
                Scopri tutte le convenzioni con i locali di Trento
              </div>
            </div>
            <div className="w-full h-1/2 p-4 md:p-10 flex flex-col justify-center">
              <p className="text-white text-2xl mt-3 font-bold">
                Spotted Unitn annunci per i vostri annunci e per le pubblicità
              </p>
              <p className="mt-5 text-sm font-extralight tracking-wide">
                Lorem ipsum dolor sit amet consectetur. Adipiscing quam eget
                nunc turpis egestas vel. Nunc nisl leo ultricies elementum
                maecenas at mauris.Lorem ipsum dolor sit amet consectetur.
                Adipiscing quam eget nunc turpis egestas vel. Nunc nisl leo
                ultricies elementum maecenas at mauris.Lorem ipsum dolor sit
                amet consectetur. Adipiscing quam eget nunc turpis egestas vel.
                Nunc nisl leo ultricies elementum maecenas at mauris.Lorem ipsum
                dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 mt-auto ">
          <div className="border rounded-[20px] h-[60px] flex justify-center border-[#F3A536] w-full">
            <p className="mt-5 text-sm font-extralight tracking-wide">
              Lorem ipsum dolor sit amet consectetur. Adipiscing quam eget nunc
              turpis egestas vel. Nunc nisl leo ultricies elementum maecenas at
              mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
