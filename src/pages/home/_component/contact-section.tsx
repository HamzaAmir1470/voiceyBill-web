import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MessageSquare, Activity } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="hover:shadow-md transition-all duration-300 border">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary mb-4 mx-auto">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Support & Help</CardTitle>
              <CardDescription className="text-sm">
                Need help with the app or have technical questions?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full hover:bg-primary/5 hover:border-primary/50 transition-colors"
                asChild
              >
                <a href="mailto:support@voiceybill.com">support@voiceybill.com</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all duration-300 border">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500 mb-4 mx-auto">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Feedback & Suggestions</CardTitle>
              <CardDescription className="text-sm">
                Share your ideas to help us improve the platform and serve you
                better.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
                asChild
              >
                <a href="mailto:feedback@voiceybill.com">feedback@voiceybill.com</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-card border text-sm text-muted-foreground">
            <Activity className="h-4 w-4 mr-2 text-primary" />
            Average response time:{" "}
            <span className="font-semibold text-foreground ml-1">
              2-4 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
