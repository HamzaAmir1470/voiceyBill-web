import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20" id="demo">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of users who are already using VoiceyBill to manage their
          money smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="text-lg px-10 py-7 bg-green-500 hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/sign-up">
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-lg px-10 py-7 border-2 hover:bg-muted/50 transition-all duration-300"
          >
            <Link to="/sign-in">Already have an account?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
