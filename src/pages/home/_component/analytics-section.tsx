import { BarChart3, TrendingUp, FileText } from "lucide-react";

const AnalyticsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Analytics & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make informed financial decisions with comprehensive analytics,
            real-time dashboards, and detailed reporting capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500 flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Interactive Dashboards
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real-time charts showing spending trends, category breakdowns,
                  and budget utilization with drill-down capabilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500 flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Budget Tracking & Alerts
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Set monthly budgets by category with progress monitoring and
                  automated alerts when approaching limits.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500 flex-shrink-0">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Advanced Reporting
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generate detailed reports in multiple formats with
                  customizable date ranges and filtering options.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">
                Monthly Overview
              </h3>
              <span className="text-xs text-green-600 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full font-medium">
                Live
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Food & Dining
                  </span>
                  <span className="text-sm font-semibold text-orange-600">
                    87%
                  </span>
                </div>
                <div className="w-full h-2 bg-orange-100 dark:bg-orange-900/20 rounded-full overflow-hidden">
                  <div className="w-[87%] h-full bg-orange-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Transportation
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    45%
                  </span>
                </div>
                <div className="w-full h-2 bg-blue-100 dark:bg-blue-900/20 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-blue-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Entertainment
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    23%
                  </span>
                </div>
                <div className="w-full h-2 bg-green-100 dark:bg-green-900/20 rounded-full overflow-hidden">
                  <div className="w-[23%] h-full bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
