import { Users, Wallet, CalendarDays, Building } from "lucide-react";

const UseCasesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perfect for Every Use Case
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From personal budgeting to enterprise expense management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500 mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Roommates & Shared Living
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Split rent, utilities, groceries, and household expenses with
              automatic settlement tracking.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500 mb-6">
              <Wallet className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Personal Finance
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Track personal expenses, set budgets, and analyze spending
              patterns with detailed insights.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500 mb-6">
              <CalendarDays className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Events & Travel
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Manage group trips, events, and shared activities with transparent
              expense tracking.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500 mb-6">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Business Teams
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise expense management with admin controls, reporting, and
              compliance features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
