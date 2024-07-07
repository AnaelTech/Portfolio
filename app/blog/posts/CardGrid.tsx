export function CardGrid() {
  const cards = [
    {
      name: "Dub",
      picture: "https://precedent.dev/images/logo.png",
      description:
        "Link management for modern marketing teams. 6K stars on GitHub, 5.2K users.",
      link: "dub.co",
    },
    {
      name: "DomainsGPT",
      picture: "https://precedent.dev/images/logo.png",
      description:
        "Generate brandable & memorable domain names using AI. Over 280K names generated.",
      link: "domainsg.pt",
    },
    {
      name: "ShareGPT",
      picture: "https://precedent.dev/images/logo.png",
      description:
        "Share your wildest ChatGPT conversations with 1 click. Used by Google to train Bard.",
      link: "sharegpt.com",
    },
    {
      name: "One Word Domains",
      picture: "https://precedent.dev/images/logo.png",
      description:
        "Database of 1.2M+ available one-word domains for your startup.",
      link: "oneword.domains",
    },
    {
      name: "Extrapolate",
      picture: "https://precedent.dev/images/logo.png",
      description: "See how well you age with AI. Over 36K photos generated.",
      link: "extrapolate.app",
    },
    {
      name: "Precedent",
      picture: "https://precedent.dev/images/logo.png",
      description:
        "An opinionated collection of components, hooks, and utilities for your Next.js project.",
      link: "precedent.dev",
    },
  ];

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.name}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <img src={card.picture} alt="" />
          <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
          <p className="text-gray-700 mb-4">{card.description}</p>
          <a
            href={`https://${card.link}`}
            className="text-blue-500 hover:underline"
          >
            {card.link}
          </a>
        </div>
      ))}
    </div>
  );
}
