import Logo from "@/components/logo/logo";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo url="/" />
            <p className="text-muted-foreground mt-2">
              Your AI-powered personal finance companion
            </p>
          </div>
          <div className="text-muted-foreground">
            © 2025 VoiceyBill. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
