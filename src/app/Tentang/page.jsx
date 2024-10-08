"use client";
import React from "react";
import Image from "next/image";
export default function Tentang() {
  return (
    <div>
      <div className="flex-row flex justify-center items-center min-h-[80vh] max-w-screen flex-wrap">
        <div className="p-4 z-10 max-w-[500px]  ">
          {/* bg-slate-950 bg-opacity-15 rounded-xl */}
          <h1 className="text-lg font-medium">
            Tentang Ayunan Cuaca Malaysia.
          </h1>
          <br></br>
          <p>
            Ayunan Cuaca, namanya di ilhamkan daripada sebuah istillah “Ayunan
            suasana hati” yang memberi makna “Mood swing”. Ini kerana sifat
            cuaca adalah tidak menentu dan boleh berubah dengan sekelip mata.
          </p>
          <br></br>
          <p>
            Oleh itu dengan mengambil semangat istilah Ayunan suasana hati, maka
            webapp cuaca ini dinamakan sebagai Ayunan Cuaca Malaysia.
          </p>
          <br></br>
          <p className="text-pretty">
            UIUX Design, Animasi, Webapp Development dibangunkan sepenuhnya oleh
            Isfa Farhan.
          </p>
        </div>
        <Image
          className="xl:w-[500px] sm:w-[130px] sm:top-[510px] "
          /* className="absolute xl:w-[500px] xl:top-72 right-[100px] sm:w-[130px] sm:top-[510px] " */
          src="Bulan.svg"
          alt="gambar bulan sabit merah"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
