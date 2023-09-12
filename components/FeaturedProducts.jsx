import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="flex flex-col gap-[28px] sm:gap-[34px] min-h-screen">
      <div className="flex items-center  gap-3 ">
        <img className="w-6 h-6" src="/images/headimg.webp" alt="" />
        <h2 className="font-[900] text-[20px] sm:text-[25px]">
          Stores you might like
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-[6rem] lg:gap-y-[7rem] w-full">
        <Link href="">
          <div className="">
            <div
              href=""
              className="w-[100%] sm:w-[100%] lg:w-[90%] h-[23vh] text-slate-700 rounded-xl relative flex flex-col hover:scale-110 transition duration-800 ease-in-out "
            >
              <Image
                className="w-[100%] h-[100%] rounded-xl bg-contain "
                src="/images/burger and chips.jpg"
                alt=""
                fill
              />
              <h2 className="absolute bottom-2 left-2 text-[13px] bg-slate-800/50 px-2 text-white font-[500] rounded">
                Lorem ipsum
              </h2>
              <p className="font-[900] text-[14px] bg-primary w-14 flex items-center justify-center rounded-b-[6px] absolute top-[-2px] right-6">
                -50%
              </p>
              <div className="absolute top-[108%] left-5 flex flex-col ">
                <h2 className="font-[800] sm:text-[15px] lg:text-[18px] text-black text-[14px]">
                  Cafe Javas
                </h2>
                <p className="flex items-center sm:text-[14px] gap-1 font-[500] text-[12px]">
                  <img
                    className="w-6 h-5 bg-contain "
                    src="/images/good.png"
                    alt=""
                  />
                  88%
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="">
          <div className="">
            <div
              href=""
              className="w-[100%] sm:w-[100%] lg:w-[90%] h-[23vh] text-slate-700 rounded-xl relative flex flex-col "
            >
              <Image
                className="w-[100%] h-[100%] rounded-xl bg-contain"
                src="/images/chips.jpg"
                alt=""
                fill
              />
              <h2 className="absolute bottom-2 left-2 text-[13px] bg-slate-800/50 px-2 text-white font-[500] rounded">
                Lorem ipsum
              </h2>
              <p className="font-[900] text-[14px] bg-primary w-14 flex items-center justify-center rounded-b-[6px] absolute top-[-2px] right-6">
                -50%
              </p>
              <div className="absolute top-[108%] left-5 flex flex-col ">
                <h2 className="font-[800] sm:text-[15px] lg:text-[18px] text-black text-[14px]">
                  Cafe Javas
                </h2>
                <p className="flex items-center sm:text-[14px] gap-1 font-[500] text-[12px]">
                  <img
                    className="w-6 h-5 bg-contain "
                    src="/images/good.png"
                    alt=""
                  />
                  88%
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="">
          <div className="">
            <div
              href=""
              className="w-[100%] sm:w-[100%] lg:w-[90%] h-[23vh] text-slate-700 rounded-xl relative flex flex-col "
            >
              <Image
                className="w-[100%] h-[100%] rounded-xl bg-contain"
                src="/images/burger and chips.jpg"
                alt=""
                fill
              />
              <h2 className="absolute bottom-2 left-2 text-[13px] bg-slate-800/50 px-2 text-white font-[500] rounded">
                Lorem ipsum
              </h2>
              <p className="font-[900] text-[14px] bg-primary w-14 flex items-center justify-center rounded-b-[6px] absolute top-[-2px] right-6">
                -50%
              </p>
              <div className="absolute top-[108%] left-5 flex flex-col ">
                <h2 className="font-[800] sm:text-[15px] lg:text-[18px] text-black text-[14px]">
                  Cafe Javas
                </h2>
                <p className="flex items-center sm:text-[14px] gap-1 font-[500] text-[12px]">
                  <img
                    className="w-6 h-5 bg-contain "
                    src="/images/good.png"
                    alt=""
                  />
                  88%
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="">
          <div className="">
            <div
              href=""
              className="w-[100%] sm:w-[100%] lg:w-[90%] h-[23vh] text-slate-700 rounded-xl relative flex flex-col "
            >
              <Image
                className="w-[100%] h-[100%] rounded-xl bg-contain"
                src="/images/burger and chips.jpg"
                alt=""
                fill
              />
              <h2 className="absolute bottom-2 left-2 text-[13px] bg-slate-800/50 px-2 text-white font-[500] rounded">
                Lorem ipsum
              </h2>
              <p className="font-[900] text-[14px] bg-primary w-14 flex items-center justify-center rounded-b-[6px] absolute top-[-2px] right-6">
                -50%
              </p>
              <div className="absolute top-[108%] left-5 flex flex-col ">
                <h2 className="font-[800] sm:text-[15px] lg:text-[18px] text-black text-[14px]">
                  Cafe Javas
                </h2>
                <p className="flex items-center sm:text-[14px] gap-1 font-[500] text-[12px]">
                  <img
                    className="w-6 h-5 bg-contain "
                    src="/images/good.png"
                    alt=""
                  />
                  88%
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="">
          <div className="">
            <div
              href=""
              className="w-[100%] sm:w-[100%] lg:w-[90%] h-[23vh] text-slate-700 rounded-xl relative flex flex-col "
            >
              <Image
                className="w-[100%] h-[100%] rounded-xl bg-contain"
                src="/images/chips.jpg"
                alt=""
                fill
              />
              <h2 className="absolute bottom-2 left-2 text-[13px] bg-slate-800/50 px-2 text-white font-[500] rounded">
                Lorem ipsum
              </h2>
              <p className="font-[900] text-[14px] bg-primary w-14 flex items-center justify-center rounded-b-[6px] absolute top-[-2px] right-6">
                -50%
              </p>
              <div className="absolute top-[108%] left-5 flex flex-col ">
                <h2 className="font-[800] sm:text-[15px] lg:text-[18px] text-black text-[14px]">
                  Cafe Javas
                </h2>
                <p className="flex items-center sm:text-[14px] gap-1 font-[500] text-[12px]">
                  <img
                    className="w-6 h-5 bg-contain "
                    src="/images/good.png"
                    alt=""
                  />
                  88%
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="">
          <div className="">
            <div
              href=""
              className="w-[100%] sm:w-[100%] lg:w-[90%] h-[23vh] text-slate-700 rounded-xl relative flex flex-col "
            >
              <Image
                className="w-[100%] h-[100%] rounded-xl bg-contain"
                src="/images/burger and chips.jpg"
                alt=""
                fill
              />
              <h2 className="absolute bottom-2 left-2 text-[13px] bg-slate-800/50 px-2 text-white font-[500] rounded">
                Lorem ipsum
              </h2>
              <p className="font-[900] text-[14px] bg-primary w-14 flex items-center justify-center rounded-b-[6px] absolute top-[-2px] right-6">
                -50%
              </p>
              <div className="absolute top-[108%] left-5 flex flex-col ">
                <h2 className="font-[800] sm:text-[15px] lg:text-[18px] text-black text-[14px]">
                  Cafe Javas
                </h2>
                <p className="flex items-center sm:text-[14px] gap-1 font-[500] text-[12px]">
                  <img
                    className="w-6 h-5 bg-contain "
                    src="/images/good.png"
                    alt=""
                  />
                  88%
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="">
          <div className="">
            <div
              href=""
              className="w-[100%] sm:w-[100%] lg:w-[90%] h-[23vh] text-slate-700 rounded-xl relative flex flex-col "
            >
              <Image
                className="w-[100%] h-[100%] rounded-xl bg-contain"
                src="/images/chips.jpg"
                alt=""
                fill
              />
              <h2 className="absolute bottom-2 left-2 text-[13px] bg-slate-800/50 px-2 text-white font-[500] rounded">
                Lorem ipsum
              </h2>
              <p className="font-[900] text-[14px] bg-primary w-14 flex items-center justify-center rounded-b-[6px] absolute top-[-2px] right-6">
                -50%
              </p>
              <div className="absolute top-[108%] left-5 flex flex-col ">
                <h2 className="font-[800] sm:text-[15px] lg:text-[18px] text-black text-[14px]">
                  Cafe Javas
                </h2>
                <p className="flex items-center sm:text-[14px] gap-1 font-[500] text-[12px]">
                  <img
                    className="w-6 h-5 bg-contain "
                    src="/images/good.png"
                    alt=""
                  />
                  88%
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="">
          <div className="">
            <div
              href=""
              className="w-[100%] sm:w-[100%] lg:w-[90%] h-[23vh] text-slate-700 rounded-xl relative flex flex-col "
            >
              <Image
                className="w-[100%] h-[100%] rounded-xl bg-contain"
                src="/images/burger and chips.jpg"
                alt=""
                fill
              />
              <h2 className="absolute bottom-2 left-2 text-[13px] bg-slate-800/50 px-2 text-white font-[500] rounded">
                Lorem ipsum
              </h2>
              <p className="font-[900] text-[14px] bg-primary w-14 flex items-center justify-center rounded-b-[6px] absolute top-[-2px] right-6">
                -50%
              </p>
              <div className="absolute top-[108%] left-5 flex flex-col ">
                <h2 className="font-[800] sm:text-[15px] lg:text-[18px] text-black text-[14px]">
                  Cafe Javas
                </h2>
                <p className="flex items-center sm:text-[14px] gap-1 font-[500] text-[12px]">
                  <img
                    className="w-6 h-5 bg-contain "
                    src="/images/good.png"
                    alt=""
                  />
                  88%
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
