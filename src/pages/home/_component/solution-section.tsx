import { CheckCircle, Zap, Brain, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "@/app/hook";
import { Button } from "../../../components/ui/button";

const SolutionSection = () => {
  const { user, accessToken } = useTypedSelector((state) => state.auth);
  const isAuthenticated = !!(user && accessToken);

  const solutions = [
    {
      icon: Brain,
      title: "Voice in Any Language",
      description:
        "Say 'I spent $50 on groceries' or speak in your native language — our AI instantly logs it",
      benefit: "Natural language processing",
    },
    {
      icon: Zap,
      title: "Receipt Scanning",
      description:
        "Upload any clear receipt and AI will process and categorize data instantly",
      benefit: "No typing required",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description:
        "View spending patterns with beautiful charts and AI-powered insights",
      benefit: "Actionable insights",
    },
    {
      icon: Shield,
      title: "Built for Everyone",
      description:
        "Multi-currency support, global merchant recognition, and understanding of spending habits worldwide",
      benefit: "Truly global experience",
    },
  ];

  return (
    <section className="py-24 relative" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <div className="bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-full flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">The Solution</span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Meet{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              VoiceyBill
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            The expense tracker that understands your voice in any language.
            Finally, a financial tool built for how people actually communicate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-card/50 border border-green-200/20 rounded-2xl p-8 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="bg-green-500/10 text-green-700 dark:text-green-300 px-3 py-1 rounded-lg text-sm font-medium inline-block">
                      ✓ {solution.benefit}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-green-500/10 border border-green-200/20 rounded-2xl p-8 text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Voice AI brings millions online
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Just like WhatsApp made messaging accessible to everyone,{" "}
              <span className="font-semibold text-green-700">VoiceyBill</span>{" "}
              makes financial tracking accessible through natural voice commands
              in any language.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              {isAuthenticated ? (
                <Button
                  size="lg"
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Link to="/overview">View Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button
                    size="sm"
                    asChild
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white p-4"
                  >
                    <Link to="/sign-up">Start Tracking</Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:w-auto p-4"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1XmxlqZ-22w9744xmEyUYchdL5w5xjTyg/view",
                        "_blank"
                      )
                    }
                  >
                    Watch Demo
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
