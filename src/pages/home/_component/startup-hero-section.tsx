import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Sparkles, TrendingUp, Zap, Shield, DownloadCloud } from "lucide-react";
import { useTypedSelector } from "@/app/hook";

const StartupHeroSection = () => {
  const { user, accessToken } = useTypedSelector((state) => state.auth);
  const isAuthenticated = !!(user && accessToken);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20 px-4 py-2 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Expense Tracking
            </Badge>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Track expenses with{" "}
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                your voice
              </span>
              <br />
              in any language
            </h1>
            <p className="max-w-4xl mx-auto text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
              Simply speak your expense in any language or snap a receipt. Our
              AI understands you and tracks everything automatically.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 py-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">
                Any
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Language
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">
                Instant
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Voice to Data
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1">
                Free
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Forever
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
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
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white p-4 text-lg"
                >
                  <Link to="/sign-up">Start Tracking</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto p-4 text-lg"
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

          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              Get the mobile app now
            </p>
            <Button
              size="sm"
              onClick={() =>
                window.open(
                  "https://expo.dev/accounts/zainulabedin/projects/smart-money-tracker-mobile/builds/c5df751e-384d-44e5-b38d-923c7061d19d",
                  "_blank"
                )
              }
              //   className="inline-flex items-center gap-2 bg-transparent text-blue-600 border border-blue-600 px-4 py-2 rounded-md shadow hover:bg-blue-700 hover:text-white transition-colors duration-200"
              variant="outline"
              className="w-full sm:w-auto inline-flex items-center gap-2 border group"
            >
              <DownloadCloud className="w-4 h-4 group-hover:animate-bounce" />
              Download App
            </Button>
          </div>

          <div className="pt-16">
            <p className="text-sm text-muted-foreground mb-8 font-medium">
              Trusted by financial professionals worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Bank-level Security</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Instant Processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative mt-16 lg:mt-24">
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />

                <div className="relative z-10">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto">
                        <Zap className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold">AI Receipt Scanning</h3>
                      <p className="text-sm text-muted-foreground">
                        Upload receipts and extract data automatically with 99%
                        accuracy
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold">Smart Analytics</h3>
                      <p className="text-sm text-muted-foreground">
                        Get insights into spending patterns with beautiful
                        charts
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto">
                        <Shield className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold">Secure & Private</h3>
                      <p className="text-sm text-muted-foreground">
                        Your financial data is encrypted and protected
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full opacity-60 animate-bounce" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-bounce delay-300" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-bounce delay-700" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default StartupHeroSection;
