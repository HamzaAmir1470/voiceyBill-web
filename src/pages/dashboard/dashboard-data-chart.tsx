import * as React from "react";
import { format } from "date-fns";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { EmptyState } from "@/components/empty-state";
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import { DateRangeType } from "@/components/date-range-select";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/lib/format-currency";
import { useChartAnalyticsQuery } from "@/features/analytics/analyticsAPI";
import { cn } from "@/lib/utils";

interface PropsType {
  dateRange?: DateRangeType;
}

const COLORS = ["var(--brand-green)", "var(--color-destructive)"];
const TRANSACTION_TYPES = ["income", "expenses"];

const chartConfig = {
  income: {
    label: "Income",
    color: COLORS[0],
  },
  expenses: {
    label: "Expenses",
    color: COLORS[1],
  },
} satisfies ChartConfig;

const DashboardDataChart: React.FC<PropsType> = (props) => {
  const { dateRange } = props;
  const isMobile = useIsMobile();

  const { data, isFetching } = useChartAnalyticsQuery({
    preset: dateRange?.value,
  });
  const chartData = data?.data?.chartData || [];
  const totalExpenseCount = data?.data?.totalExpenseCount || 0;
  const totalIncomeCount = data?.data?.totalIncomeCount || 0;

  if (isFetching) {
    return <ChartSkeleton />;
  }

  return (
    <Card className="border border-zinc-150/85 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] backdrop-blur-md shadow-sm dark:shadow-md rounded-2xl overflow-hidden !pt-0 group hover:border-zinc-300 dark:hover:border-white/10 hover:shadow-lg transition-all duration-350">
      <CardHeader
        className="flex flex-col items-stretch !space-y-0 border-b border-zinc-100/80
      dark:border-white/5 !p-0 pr-1 sm:flex-row bg-zinc-50/30 dark:bg-transparent"
      >
        <div className="flex flex-1 flex-col justify-center gap-1.5 px-6 py-5 sm:py-0">
          <CardTitle className="text-[16px] font-extrabold text-zinc-800 dark:text-zinc-100 tracking-tight">Transaction Overview</CardTitle>
          <CardDescription>
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider uppercase">Total transactions {dateRange?.label}</span>
          </CardDescription>
        </div>
        <div className="flex items-center gap-3 px-6 py-4 sm:py-0 sm:pr-4">
          {TRANSACTION_TYPES.map((key) => {
            const chart = key as keyof typeof chartConfig;
            const isIncome = key === TRANSACTION_TYPES[0];
            return (
              <div
                key={chart}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-300",
                  isIncome
                    ? "text-emerald-700 dark:text-brand-green-light bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-100/50 dark:border-emerald-500/10 shadow-[0_0_10px_-2px_rgba(159,255,89,0.04)]"
                    : "text-rose-700 dark:text-rose-450 bg-rose-50/60 dark:bg-rose-950/20 border-rose-100/50 dark:border-rose-500/10 shadow-[0_0_10px_-2px_rgba(220,38,38,0.04)]"
                )}
              >
                <div className="flex flex-col">
                  <span className="text-[10px] opacity-70 font-semibold uppercase tracking-wider">
                    {chartConfig[chart].label}
                  </span>
                  <span className="flex items-center gap-1.5 text-base font-extrabold metric-numeric">
                    {isIncome ? (
                      <TrendingUpIcon className="size-3" style={{ color: "var(--brand-green)" }} />
                    ) : (
                      <TrendingDownIcon className="size-3 text-rose-500" />
                    )}
                    {isIncome ? totalIncomeCount : totalExpenseCount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-1 pt-4 sm:px-4 sm:pt-4 h-[300px]">
        {chartData?.length === 0 ? (
          <EmptyState
            title="No transaction data"
            description="There are no transactions recorded for this period."
          />
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[300px] w-full"
          >
            <AreaChart
              data={chartData || []}
              margin={{ left: 10, right: 10, top: 15, bottom: 5 }}
            >
              <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS[0]} stopOpacity={0.12} />
                  <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="expensesGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={COLORS[1]} stopOpacity={0.12} />
                  <stop offset="95%" stopColor={COLORS[1]} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="rgba(120, 120, 120, 0.04)" strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                minTickGap={isMobile ? 25 : 30}
                fontSize={11}
                tickFormatter={(value) =>
                  format(new Date(value), isMobile ? "MMM d" : "MMM d, yyyy")
                }
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={isMobile ? 50 : 60}
                fontSize={11}
                tickFormatter={(value) =>
                  formatCurrency(Number(value), { compact: true })
                }
              />
              <ChartTooltip
                cursor={{
                  stroke: "rgba(148, 163, 184, 0.15)",
                  strokeWidth: 1.5,
                  strokeDasharray: "4 4",
                }}
                content={
                  <ChartTooltipContent
                    className="backdrop-blur-md bg-white/90 dark:bg-[#111a13]/90 border border-zinc-150/80 dark:border-white/5 shadow-xl rounded-xl p-3"
                    labelFormatter={(value) =>
                      format(new Date(value), "MMMM d, yyyy")
                    }
                    indicator="line"
                    formatter={(value, name) => {
                      const isExpense = name === "expenses";
                      const color = isExpense ? COLORS[1] : COLORS[0];
                      return [
                        <span key={name} className="font-extrabold metric-numeric" style={{ color }}>
                          {formatCurrency(Number(value), {
                            showSign: true,
                            compact: false,
                            isExpense,
                          })}
                        </span>,
                        isExpense ? "Expenses" : "Income",
                      ];
                    }}
                  />
                }
              />
              <Area
                dataKey="income"
                type="monotone"
                fill="url(#incomeGradient)"
                stroke={COLORS[0]}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5, strokeWidth: 0, fill: COLORS[0] }}
              />
              <Area
                dataKey="expenses"
                type="monotone"
                fill="url(#expensesGradient)"
                stroke={COLORS[1]}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5, strokeWidth: 0, fill: COLORS[1] }}
              />
              <ChartLegend
                verticalAlign="bottom"
                content={<ChartLegendContent />}
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
};

const ChartSkeleton = () => (
  <Card className="border border-zinc-150/85 dark:border-white/5 bg-white dark:bg-white/3 rounded-xl overflow-hidden !pt-0">
    <CardHeader className="flex flex-col items-stretch !space-y-0 border-b border-zinc-100 dark:border-white/5 !p-0 pr-1 sm:flex-row bg-zinc-50/50 dark:bg-transparent">
      <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-4 sm:py-0">
        <Skeleton className="h-5 w-48 bg-zinc-200 dark:bg-white/10" />
        <Skeleton className="h-3.5 w-32 mt-2 bg-zinc-200 dark:bg-white/10" />
      </div>
      <div className="flex">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-center even:border-l
            sm:border-l border-zinc-100 dark:border-white/5 sm:px-4 sm:py-6 min-w-36"
          >
            <Skeleton className="h-3.5 w-20 mx-auto bg-zinc-200 dark:bg-white/10" />
            <Skeleton className="h-7 w-24 mx-auto mt-2 sm:h-10 bg-zinc-200 dark:bg-white/10" />
          </div>
        ))}
      </div>
    </CardHeader>
    <CardContent className="px-1 pt-2 sm:px-4 sm:pt-2 h-[280px]">
      <Skeleton className="h-full w-full bg-zinc-150 dark:bg-white/5" />
    </CardContent>
  </Card>
);

export default DashboardDataChart;
