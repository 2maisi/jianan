import Image from "next/image";

export default function JaHeader() {
  return (
    <div className="w-screen bg-white p-6">
      <div className="flex flex-row items-center">
        <Image src="/favicon.ico" alt="logo" width={50} height={50} />
        <div className="text-3xl text-black font-bold ml-4">Finish</div>
      </div>
    </div>
  )
}
