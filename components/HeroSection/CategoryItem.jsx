import Image from "next/image";
export default function CategoryItem({ classNames = "" }) {
  return (
    <div
      class={`blob bg-slate-100 flex justify-center items-center flex-col cursor-pointer ${classNames}`}
    >
      <div className="w-8 h-8 relative">
        <Image
          src="/categories/burger.png"
          fill
          alt="burger"
          className="w-full object-fit absolute"
        />
      </div>
      <h2 className="text-xs">Category</h2>
    </div>
  );
}
