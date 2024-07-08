import Image from "next/image";

export default function Page() {
  return (
    <section className="py-12">
      <div className="flex row mb-2 gap-4">
        <Image
          alt="Profile Picture"
          loading="lazy"
          width={60}
          height={60}
          className="rounded-full h-16 w-16 object-cover"
          src="/images/IMG_5442.jpg"
        ></Image>
        <h1 className="text-5xl font-semibold tracking-tighter">
          Sofware Engineer Junior.
        </h1>
      </div>
      <p className="mb-4">
        Hello! My name is Anaël Payet, and I am a 25-year-old junior developer
        currently undergoing training at Human Booster. I am actively seeking an
        apprenticeship as an Application Developer Designer at Doranco, starting
        in September 2024, for a duration of 12 months. If you are interested in
        my profile or have any opportunities, please feel free to contact me at
        <strong className="underline underline-offset-4">
          {" "}
          anaelpayetpro@gmail.com
        </strong>
        .
      </p>
    </section>
  );
}
