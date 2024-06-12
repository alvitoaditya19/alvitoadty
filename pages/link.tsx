import { useState } from 'react';

const LinkPage = () => {
  const email = 'muhammadalvitoaditya@gmail.com';
  const instagram = 'alvitoadty';
  const linkedin = 'https://www.linkedin.com/in/muhammadalvitoaditya/';
  const portofolio = 'https://alvitoadty.vercel.app/';
  const whatsapp = '082297145285';


  return (
    <div className="flex flex-col items-center justify-center min-h-screen gradient-color p-4">
      <h1 className="text-4xl text-white font-bold mb-8">@alvitoadty</h1>
      <img src="/images/photo-profile.png" className="w-60 h-60 rounded-full mb-8" alt="Profile" />
      <button
        onClick={() => window.location.href = `mailto:${email}`}
        className="w-full md:w-[280px] px-4 py-2 mb-4 bg-transparent border rounded-full border-white text-white text-base  hover:bg-white hover:text-black transition-colors duration-300"
      >
        Email Me
      </button>
      <button
        onClick={() => window.location.href = `${linkedin}`}
        className="w-full md:w-[280px] px-4 py-2 mb-4 bg-transparent border border-white text-white text-base rounded-full hover:bg-white hover:text-black transition-colors duration-300"
      >
        My Linkedin
      </button>
      <button
        onClick={() => window.location.href = `https://instagram.com/${instagram}`}
        className="w-full md:w-[280px] px-4 py-2 mb-4 bg-transparent border border-white text-white text-base rounded-full hover:bg-white hover:text-black transition-colors duration-300"
      >
        My Instagram
      </button>
      <button
        onClick={() => window.location.href = `${portofolio}`}
        className="w-full md:w-[280px] px-4 py-2 mb-4 bg-transparent border border-white text-white text-base rounded-full hover:bg-white hover:text-black transition-colors duration-300"
      >
        My Portofolio
      </button>
      <button
        onClick={() => window.location.href = `${portofolio}`}
        className="w-full md:w-[280px] px-4 py-2 bg-transparent border border-white text-white text-base rounded-full hover:bg-white hover:text-black transition-colors duration-300"
      >
        Whatsapp
      </button>

    </div>
  );
};

export default LinkPage;
