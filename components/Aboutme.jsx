import Image from "next/image";
import React from "react";

const Aboutme = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">About Me</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-2 row-span-2">
          <Image src="/photo.jpg" alt="/" width="300" height="300" />
        </div>
        <div className="max-w-fit py-10 text-left">
          <a className="text-1xl">
            Usia : 17
            <br />
            Jurusan : Rekayasa Perangkat Lunak
            <br />
            Alamat : Sawojajar, Malang, Indonesia
            <br />
            Email : Zalfa.alisya@gmail.com
            <br />
            Telepon : 085604441400
            <br />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
