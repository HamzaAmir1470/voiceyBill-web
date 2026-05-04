import {
  Smartphone,
  RefreshCw,
  Lock,
  Activity,
  FileText,
  Users,
} from "lucide-react";

const EnterpriseStandardsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built with Enterprise Standards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern architecture with security, scalability, and performance at
            its core
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500 flex-shrink-0 shadow-sm">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Mobile-First Design
              </h3>
              <p className="text-muted-foreground">
                Fully responsive interface optimized for mobile, tablet, and
                desktop
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500 flex-shrink-0 shadow-sm">
              <RefreshCw className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Real-Time Sync
              </h3>
              <p className="text-muted-foreground">
                Instant data synchronization across all devices and users
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500 flex-shrink-0 shadow-sm">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Bank-Level Security
              </h3>
              <p className="text-muted-foreground">
                Enterprise-grade encryption and security protocols
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500 flex-shrink-0 shadow-sm">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Activity Logging
              </h3>
              <p className="text-muted-foreground">
                Comprehensive audit trails for all user actions and changes
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500 flex-shrink-0 shadow-sm">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Export & Reporting
              </h3>
              <p className="text-muted-foreground">
                Generate detailed reports in multiple formats (CSV, PDF, Excel)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500 flex-shrink-0 shadow-sm">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Role-Based Access
              </h3>
              <p className="text-muted-foreground">
                Granular permission system for different user roles and
                responsibilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseStandardsSection;
