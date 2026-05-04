import { Button } from "@/components/ui/button";
import { DownloadCloud, Mic, Camera, CheckCircle, Globe } from "lucide-react";
import mockupImage from "@/assets/images/mockup.png";

const DownloadAppSection = () => {
  const features = [
    {
      icon: Mic,
      title: "Voice-first input in any language",
      description: "Speak naturally — our AI understands you",
    },
    {
      icon: Globe,
      title: "Multi-currency support and global merchant recognition",
      description: "Built for users anywhere in the world",
    },
    {
      icon: Camera,
      title: "Fast receipt scanning and instant categorization",
      description: "Upload a receipt for automatic expense tracking",
    },
  ];

  const handleDownloadApp = () => {
    window.open(
      "https://expo.dev/accounts/zainulabedin/projects/smart-money-tracker-mobile/builds/c5df751e-384d-44e5-b38d-923c7061d19d",
      "_blank"
    );
  };

  return (
    <section className="py-24 relative" id="mobile-app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <div className="bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-full flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Mobile Beta</span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Try the{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              VoiceyBill
            </span>{" "}
            mobile beta
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
              Download the beta build on Expo to preview the mobile experience
              for iOS and Android. Instant voice-to-data, multi-currency
              support, and secure syncing with your account.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleDownloadApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg shadow-lg group"
                >
                  <DownloadCloud className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download App
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1XmxlqZ-22w9744xmEyUYchdL5w5xjTyg/view",
                      "_blank"
                    )
                  }
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -inset-8 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 rounded-3xl blur-3xl" />

              <div className="relative">
                <img
                  src={mockupImage}
                  alt="VoiceyBill Mobile App - Global Expense Tracking"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
