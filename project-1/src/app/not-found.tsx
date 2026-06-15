"use client";

import Image from "next/image";
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#014D38] flex items-center justify-center p-6">
      <div className="relative w-full max-w-6xl rounded-[40px] bg-[#ECE7CB] overflow-hidden">
        {/* Background 404 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[28rem] font-black text-[#B7C89A] opacity-80 leading-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[750px]">
          {/* Tree Illustration */}
          <div className="relative w-[650px] h-[450px]">
            <Image
              src="/tree.png"
              alt="404 Illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
        

        
          </div>
        </div>

        {/* Bottom Button */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="flex rounded-xl overflow-hidden shadow-xl">
            <div className="bg-[#262626] text-white px-6 py-5 text-2xl font-bold">
              W.
            </div>

            <button className="bg-[#B8F2C9] px-6 py-5 font-semibold hover:bg-[#a5e7b8] transition">
              Visit Resource
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}