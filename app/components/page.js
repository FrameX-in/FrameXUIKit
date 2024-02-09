import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div class="h-screen">
        {/* <div class="container mx-auto max-w-5xl"> */}
        <div class="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-12">
          <Link href="/components/button">
            <div class="relative">
              <div class="px-2">
                <div class="flex h-8 w-full rounded-t-lg border-b-2 border-slate-300 bg-red-100 pl-[90px] shadow-lg">
                  <small class="my-auto items-center text-xs font-light tracking-tight text-slate-400">
                    21 Componennts
                  </small>
                </div>
              </div>
              <div class="flex h-12 w-full rounded-lg bg-white pl-[98px] shadow-xl">
                <small class="my-auto text-lg font-medium text-slate-700">
                  Button
                </small>
              </div>
              <div class="absolute top-2 left-6 h-16 w-16 rounded-full border-2 border-white shadow-md">
                <img
                  class="rounded-full object-cover object-center"
                  src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link href="/components/button">
            <div class="relative">
              <div class="px-2">
                <div class="flex h-8 w-full rounded-t-lg border-b-2 border-slate-300 bg-red-100 pl-[90px] shadow-lg">
                  <small class="my-auto items-center text-xs font-light tracking-tight text-slate-400">
                    21 Componennts
                  </small>
                </div>
              </div>
              <div class="flex h-12 w-full rounded-lg bg-white pl-[98px] shadow-xl">
                <small class="my-auto text-lg font-medium text-slate-700">
                  Button
                </small>
              </div>
              <div class="absolute top-2 left-6 h-16 w-16 rounded-full border-2 border-white shadow-md">
                <img
                  class="rounded-full object-cover object-center"
                  src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default page;
