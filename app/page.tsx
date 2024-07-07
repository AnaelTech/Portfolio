import { CardGrid } from "./blog/posts/CardGrid";

export default function Page() {
  return (
    <section>
      <img
        alt="Profile Picture"
        loading="lazy"
        width="60"
        height="60"
        decoding="async"
        data-nimg="1"
        className="rounded-full mb-5"
        src="http://unsplash.it/g/60/60?random&blur&gravity=center"
      ></img>
      <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
        Sofware Engineer Junior.
      </h1>
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
      {/* <div className="my-8">
        <CardGrid />
      </div> */}
    </section>
  );
}
