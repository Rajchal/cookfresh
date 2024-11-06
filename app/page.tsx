import Image from "next/image";
export default function Home() {
  return (
    <>
      <h1 className="font-lakwa">Welcome desu</h1>
      <h1 className="font-league"> Welcome desu</h1>

      <Image
        src="/icons/logo.svg"
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <Image
        src="/icons/ooo.svg"
        alt="Picture of the author"
        width={200}
        height={200}
      />
    </>
  );
}
