import { FileText, TrendingUp, BarChart3 } from "lucide-react";

const FinancialChaosSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Financial Chaos Everyone Faces
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional expense tracking is broken. Here's why millions struggle
            with their finances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-card border hover:shadow-md transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/20 mb-6">
              <FileText className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Lost Receipt Chaos
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crumpled receipts everywhere, missing deductions, and tax season
              panic. Sound familiar?
            </p>
            <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <p className="text-red-700 dark:text-red-400 font-semibold text-sm">
                People lose $1,200+ in missed deductions yearly
              </p>
            </div>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border hover:shadow-md transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/20 mb-6">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Spending Blindness
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              No idea where your money goes until your bank account hits zero.
              The dreaded monthly surprise.
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
              <p className="text-orange-700 dark:text-orange-400 font-semibold text-sm">
                78% of people can't track their spending
              </p>
            </div>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border hover:shadow-md transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/20 mb-6">
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Tax Deduction Nightmare
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Manually sorting through hundreds of receipts, missing obvious
              deductions, paying too much.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
              <p className="text-purple-700 dark:text-purple-400 font-semibold text-sm">
                Small businesses miss 40% of deductions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialChaosSection;
