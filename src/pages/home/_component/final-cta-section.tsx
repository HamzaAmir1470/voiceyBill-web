import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { useTypedSelector } from "@/app/hook";

const FinalCtaSection = () => {
  const { user, accessToken } = useTypedSelector((state) => state.auth);
  const isAuthenticated = !!(user && accessToken);

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
            Start your free trial today and take control of your finances.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {isAuthenticated ? (
              <Button
                size="lg"
                asChild
                className="bg-white text-green-600 dark:text-green-600 hover:bg-gray-50 px-8 py-3 font-semibold shadow-lg"
              >
                <Link to="/overview">
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3 font-semibold shadow-lg"
                >
                  <Link to="/sign-up">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-green-600 hover:bg-white hover:text-green-600 px-8 py-3"
                >
                  <Link to="/sign-in">Sign In</Link>
                </Button>
              </>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80 pt-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Setup in 2 minutes</span>
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
                <rect x="6" y="15" width="4" height="2" fill="currentColor" />
              </svg>
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
