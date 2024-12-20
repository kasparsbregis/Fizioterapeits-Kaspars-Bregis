import { BookOpenText, HandHeartIcon } from "lucide-react";
import React from "react";

const Vizitkarte = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex h-auto w-full max-w-3xl flex-col items-center justify-center gap-1 rounded-xl p-4 text-[#292929] sm:flex-row sm:items-start sm:gap-6">
        <div className="flex w-[100px]">
          <BookOpenText height={100} width={100} />
        </div>
        <div className="flex flex-col items-start ">
          <h1 className="section-title text-[24px] leading-tight sm:text-[36px]">
            Izglītība
          </h1>
          <div className="mt-4 flex flex-col gap-2">
            <p>
              <span className="text-xl font-bold">2015.-2019.</span> - Bakalaura
              grāds &quot;Fizioterapija&quot; - Latvijas Sporta Pedagoģijas
              Akadēmija (LSPA)
            </p>
            <p>
              <span className="text-xl font-bold">2018.</span> - Iziets
              sertifikācijas process fizioterapijā - &quot;Sertificēts
              fizioterapeits&quot;
            </p>
            <p>
              <span className="text-xl font-bold">2019.-2021.</span> -
              Specialitāte &quot;Lietišķās kinezioloģijas speciālists&quot; -
              Medicīnas un Izglītības centrs &quot;VOKS&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full max-w-3xl flex-col-reverse items-center justify-center gap-1 rounded-xl p-4 text-[#292929] sm:flex-row sm:items-start sm:gap-6">
        <div className="flex max-w-5xl flex-col items-start sm:items-end">
          <h1 className="section-title text-[24px] leading-tight sm:text-[36px]">
            Darba pieredze
          </h1>
          <div className="mt-4 flex flex-col items-start gap-2 sm:items-end">
            <p>
              <span className="text-xl font-bold">2016.-2019.</span> -
              Fizioterapeits SIA &quot;Siguldas Slimnīca&quot; rehabilitācijas
              nodaļa
            </p>
            <p>
              <span className="text-xl font-bold">2018.-2018.</span> -
              Fizioterapeits SIA &quot;LE Fizio&quot;
            </p>
            <p>
              <span className="text-xl font-bold">2019.-2019.</span> -
              Fizioterapeits &quot;Breģis Kaspars - fizioterapeita prakse&quot;
            </p>
            <p>
              <span className="text-xl font-bold">2019.-2024.</span> -
              Fizioterapeits futbola klubā &quot;Valmiera FC&quot;
            </p>
            <p>
              <span className="text-xl font-bold">2024.-...</span> -
              Fizioterapeits &quot;Breģis Kaspars - fizioterapeita prakse&quot;
            </p>
          </div>
        </div>
        <div className="flex w-[100px] justify-end">
          <HandHeartIcon height={100} width={100} />
        </div>
      </div>
    </div>
  );
};

export default Vizitkarte;
