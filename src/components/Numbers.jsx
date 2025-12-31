export function Numbers() {
  const numberMeanings = [
    {
      number: "1",
      name: "Life Path Number",
      description: "Your core purpose and the path you are meant to walk in this lifetime.",
      keywords: "Leadership, Independence, Innovation",
    },
    {
      number: "2",
      name: "Destiny Number",
      description: "Your life goals and what you are working towards achieving.",
      keywords: "Harmony, Partnership, Diplomacy",
    },
    {
      number: "3",
      name: "Soul Urge Number",
      description: "Your inner desires, motivations, and what truly drives you.",
      keywords: "Creativity, Expression, Joy",
    },
    {
      number: "4",
      name: "Personality Number",
      description: "How others perceive you and the impression you make.",
      keywords: "Stability, Structure, Discipline",
    },
    {
      number: "5",
      name: "Birthday Number",
      description: "Special talents and abilities you were born with.",
      keywords: "Freedom, Adventure, Change",
    },
    {
      number: "6",
      name: "Expression Number",
      description: "Your natural talents and how you express yourself to the world.",
      keywords: "Nurturing, Responsibility, Love",
    },
  ]

  return (
    <section id="numbers" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold mb-6 text-balance">
            {"Understanding Your Numbers"}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {
              "Each number in your numerology chart carries unique vibrations and meanings. Here are the key numbers that shape your destiny."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {numberMeanings.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-[family-name:var(--font-cinzel)] text-2xl font-bold">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-xs text-accent font-medium">{item.keywords}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
