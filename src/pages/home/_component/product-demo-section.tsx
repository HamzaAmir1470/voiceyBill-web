import { Upload, Zap, BarChart3, ArrowRight, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTypedSelector } from "@/app/hook";

const ProductDemoSection = () => {
  const { user, accessToken } = useTypedSelector((state) => state.auth);
  const isAuthenticated = !!(user && accessToken);

  const demoSteps = [
    {
      step: "1",
      icon: Upload,
      title: "Upload Receipt or Voice Note",
      description: "Simply upload your receipt image, or record a voice note",
      color: "blue",
    },
    {
      step: "2",
      icon: Zap,
      title: "AI Processing",
      description:
        "Our AI extracts amount, date, merchant, and category instantly",
      color: "purple",
    },
    {
      step: "3",
      icon: BarChart3,
      title: "Instant Insights",
      description:
        "View analytics and track your spending patterns automatically",
      color: "green",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <div className="bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-full flex items-center gap-2">
              <Play className="w-5 h-5" />
              <span className="font-medium">How it Works</span>
            </div>
          </div>

          <h3 className="text-4xl sm:text-5xl font-bold text-foreground">
            Three simple{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              steps
            </span>
          </h3>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Transform your expense tracking with our intelligent voice-first
            approach
          </p>
        </div>

        {/* <div className="max-w-6xl mx-auto mb-20">
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
            <div className="aspect-video bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

              <div className="text-center space-y-6 z-10">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20 shadow-2xl">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <div className="text-white space-y-3">
                  <h3 className="text-2xl font-semibold">Interactive Demo</h3>
                  <p className="text-white/80 text-lg">
                    Watch Smart Tracker in action
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <div className="text-white/60 text-sm font-medium">
                0:00 / 2:30
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm px-6 py-3"
              >
                <Play className="w-5 h-5 mr-2" />
                Play Demo
              </Button>
            </div>
          </div>
        </div> */}

        {/* <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-200/20 rounded-2xl p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto">
              <Play className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">
              See Smart Tracker in Action
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Watch our demo to see how easily you can track expenses with voice
              notes and receipt scanning
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1XmxlqZ-22w9744xmEyUYchdL5w5xjTyg/view",
                  "_blank"
                )
              }
              className="border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div> */}

        <div className="space-y-16">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {demoSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === demoSteps.length - 1;

              const iconColorClass =
                step.color === "blue"
                  ? "text-blue-600"
                  : step.color === "purple"
                  ? "text-purple-600"
                  : "text-green-600";

              return (
                <div key={index} className="relative">
                  <div className="text-center space-y-8">
                    <div className="relative">
                      <div className="w-24 h-24 flex items-center justify-center mx-auto">
                        <Icon className={`w-12 h-12 ${iconColorClass}`} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {!isLast && (
                    <div className="hidden md:block absolute top-12 -right-6 text-gray-300 dark:text-gray-600">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-green-500/10 border border-green-200/20 rounded-2xl p-8 text-center space-y-6">
              <div className="text-center space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Ready to transform your expense tracking?
                </h3>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  {isAuthenticated ? (
                    <Button
                      size="lg"
                      asChild
                      className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white p-4 text-lg"
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

                <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground pt-0">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Quick setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="10"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="6"
                        y="15"
                        width="4"
                        height="2"
                        fill="currentColor"
                      />
                    </svg>
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-200/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-muted-foreground">
                  Accuracy Rate
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">5s</div>
                <div className="text-sm text-muted-foreground">
                  Processing Time
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">0</div>
                <div className="text-sm text-muted-foreground">
                  Manual Entry
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProductDemoSection;
