import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../../components/ui/badge";
import { useTypedSelector } from "@/app/hook";

const HeroSection = () => {
  const { user, accessToken } = useTypedSelector((state) => state.auth);
  const isAuthenticated = !!(user && accessToken);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto text-center w-full relative z-10">
        {/* <div
          className="inline-flex items-center p-2 rounded-full bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm font-medium mb-8 shadow-sm border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm
            max-w-full sm:max-w-fit flex-wrap sm:flex-nowrap text-center sm:text-left"
        >
          <span className="whitespace-normal sm:whitespace-nowrap">
            Professional Expense Management Platform
          </span>
        </div> */}
        <div className="flex justify-center mb-8">
          <Badge
            variant="secondary"
            className="bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20 px-4 py-2 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Financial Intelligence
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
            Enterprise-Grade
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
            Expense Management
          </span>
          <br />
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
            Built for Scale
          </span>
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          Complete financial management solution with real-time analytics, smart
          settlements, budget controls, and enterprise admin features.
          {/* <br className="hidden sm:block" />
            <span className="text-green-600 font-semibold">
              Trusted by teams worldwide
            </span>{" "}
            for professional expense tracking and collaboration. */}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {isAuthenticated ? (
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <Link to="/overview">Go to Dashboard</Link>
            </Button>
          ) : (
            <></>
          )}
          <Button
            size="lg"
            asChild
            className="text-lg px-10 py-7 bg-green-500 hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/sign-up">
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Shield className="h-5 w-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Enterprise Security
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Real-Time Analytics
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Unlimited Users
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Zap className="h-5 w-5 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Multi-Currency
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
