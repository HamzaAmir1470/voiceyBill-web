import { TrendingUp, Users, DollarSign, Zap } from "lucide-react";

const TractionSection = () => {
  const metrics = [
    {
      icon: Users,
      value: "10K+",
      label: "Active Users",
      growth: "+150% MoM",
    },
    {
      icon: DollarSign,
      value: "$2.5M+",
      label: "Money Tracked",
      growth: "+200% MoM",
    },
    {
      icon: Zap,
      value: "50K+",
      label: "Receipts Scanned",
      growth: "+300% MoM",
    },
    {
      icon: TrendingUp,
      value: "99.2%",
      label: "User Satisfaction",
      growth: "Industry Leading",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-blue-50/50 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold text-foreground leading-tight">
            Explosive growth
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed font-light">
            Users love Smart Tracker. Our metrics speak for themselves.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center space-y-6 p-8 rounded-3xl bg-card/50 border hover:border-blue-300/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Icon className="w-10 h-10 text-blue-600 mx-auto" />
                <div className="text-5xl font-bold text-foreground">
                  {metric.value}
                </div>
                <div className="text-xl font-semibold text-foreground">
                  {metric.label}
                </div>
                <div className="text-sm text-green-600 font-semibold bg-green-50 dark:bg-green-950/20 px-3 py-1 rounded-lg">
                  {metric.growth}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TractionSection;
