import {
  CreditCard,
  Scan,
  BarChart3,
  FileText,
  RefreshCw,
  Download,
} from "lucide-react";
import { ReactElement } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactElement;
  iconBg: string;
  testimonial: string;
  author: string;
  role: string;
  avatar: string;
}

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      title: "Transaction Management",
      description:
        "Complete CRUD operations for expenses and income with real-time categorization, payment methods, and smart duplicate detection.",
      icon: <CreditCard className="h-10 w-10 text-white" />,
      iconBg: "bg-green-500",
      testimonial:
        "The transaction management system helps me track every expense effortlessly. The duplicate detection saved me hours.",
      author: "Sarah Johnson",
      role: "Financial Analyst",
      avatar: "S",
    },
    {
      title: "AI Receipt Scanning",
      description:
        "Upload receipts and let Google AI automatically extract transaction details, amounts, and categories.",
      icon: <Scan className="h-10 w-10 text-white" />,
      iconBg: "bg-green-500",
      testimonial:
        "The AI receipt scanner is incredible! Just snap a photo and all details are extracted perfectly.",
      author: "Michael Chen",
      role: "Small Business Owner",
      avatar: "M",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time charts with Recharts showing spending trends, expense breakdowns, and MongoDB aggregated insights.",
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      iconBg: "bg-green-500",
      testimonial:
        "The visual analytics help me understand my spending patterns better. The pie charts are particularly insightful.",
      author: "Emma Thompson",
      role: "Marketing Director",
      avatar: "E",
    },
    {
      title: "Automated Monthly Reports",
      description:
        "Get detailed monthly financial reports automatically emailed with insights, savings rate, and spending analysis.",
      icon: <FileText className="h-10 w-10 text-white" />,
      iconBg: "bg-green-500",
      testimonial:
        "Love getting my monthly reports automatically. It keeps me accountable and shows my financial progress.",
      author: "David Rodriguez",
      role: "Portfolio Manager",
      avatar: "D",
    },
    {
      title: "Recurring Transactions",
      description:
        "Set up recurring income and expenses with cron job automation running daily at 5 AM for seamless processing.",
      icon: <RefreshCw className="h-10 w-10 text-white" />,
      iconBg: "bg-green-500",
      testimonial:
        "Recurring transactions feature is perfect for my monthly subscriptions. Everything is automated now.",
      author: "Lisa Park",
      role: "Software Engineer",
      avatar: "L",
    },
    {
      title: "CSV Import & Export",
      description:
        "Bulk import transactions from CSV files and export your data for backup or external analysis with bulk operations support.",
      icon: <Download className="h-10 w-10 text-white" />,
      iconBg: "bg-green-500",
      testimonial:
        "Imported 2 years of bank data in minutes. The CSV export feature is great for my accountant too.",
      author: "James Wilson",
      role: "Tech Executive",
      avatar: "J",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features That Actually Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature designed to solve real financial pain points. No
            fluff, just results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border group"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${feature.iconBg} mb-6 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="border-t pt-4">
                <blockquote className="text-sm italic text-foreground mb-3 leading-relaxed">
                  "{feature.testimonial}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                    {feature.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {feature.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {feature.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
