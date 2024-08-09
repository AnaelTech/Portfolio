import { CardGrid } from "./posts/CardGrid";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="mx-auto lg:max-w-screen-2xl w-full">
      <div className="max-w-2xl mx-5 sm:mx-0 py-8 ">
        <h1 className="tmb-8 text-5xl font-semibold tracking-tighter">
          Projects I completed during my training and personal projects
        </h1>
      </div>
      <CardGrid />
    </section>
  );
}
