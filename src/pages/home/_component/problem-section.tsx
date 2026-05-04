import { AlertTriangle, Banknote, TrendingDown, Clock } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Language Barriers",
      description:
        "Existing apps only work in English, but billions of people think and communicate in their native language daily",
      stat: "5B+",
    },
    {
      icon: TrendingDown,
      title: "Complex Text Input",
      description:
        "Typing on phones is slow and frustrating, making consistent expense tracking a painful daily task",
      stat: "5x slower",
    },
    {
      icon: Banknote,
      title: "No Voice Support",
      description:
        "While voice messages are hugely popular worldwide, no financial app supports natural voice input",
      stat: "0 apps",
    },
  ];

  return (
    <section className="py-24 relative" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <div className="bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-full flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">The Problem</span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold text-foreground leading-tight">
            Financial tracking is{" "}
            <span className="text-red-600">impossible</span> for most people
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed font-light">
            Billions of people around the world don't communicate in English as
            their primary language. Current expense apps are built for English
            speakers only, leaving most of the world behind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="text-center space-y-6 p-8 rounded-3xl bg-card/50 border border-red-200/20 hover:border-red-300/30 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto">
                  <Icon className="w-10 h-10 text-red-600" />
                </div>

                <div className="space-y-3">
                  <div className="text-4xl font-bold text-red-600">
                    {problem.stat}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call out box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-red-500/5 border border-red-200/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The result? Millions excluded from digital finance.
            </h3>
            <p className="text-lg text-muted-foreground">
              While TikTok and WhatsApp have deep adoption through voice/video,
              financial apps remain
              <span className="font-bold text-red-600">
                {" "}
                text-only and English-only
              </span>
              , excluding the majority of the world's population from digital
              financial tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
