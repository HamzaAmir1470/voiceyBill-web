import { Label, Pie, PieChart, Cell } from "recharts";
import {
  ShoppingBag,
  Utensils,
  Car,
  Zap,
  Film,
  Activity,
  Home,
  Coins,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DateRangeType } from "@/components/date-range-select";
import { formatCurrency } from "@/lib/format-currency";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPercentage } from "@/lib/format-percentage";
import { EmptyState } from "@/components/empty-state";
import { useExpensePieChartBreakdownQuery } from "@/features/analytics/analyticsAPI";

const COLORS = [
  "#8b5cf6", // Violet
  "#ec4899", // Pink
  "#3b82f6", // Blue
  "#10b981", // Emerald
  "#a855f7", // Purple
  "#f59e0b", // Amber
  "#ef4444", // Rose
  "#06b6d4", // Cyan
  "#64748b", // Slate
];

// Helper to determine background tint for circles
const hexToRGBA = (hex: string, opacity: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const getCategoryIcon = (categoryName: string): LucideIcon => {
  const name = categoryName.toLowerCase();
  if (name.includes("food") || name.includes("dining") || name.includes("eat")) return Utensils;
  if (name.includes("grocer") || name.includes("shopping") || name.includes("store")) return ShoppingBag;
  if (name.includes("car") || name.includes("travel") || name.includes("transit") || name.includes("transport")) return Car;
  if (name.includes("bill") || name.includes("utilit") || name.includes("electricity") || name.includes("water")) return Zap;
  if (name.includes("show") || name.includes("movi") || name.includes("entert") || name.includes("fun")) return Film;
  if (name.includes("rent") || name.includes("hous") || name.includes("home")) return Home;
  if (name.includes("health") || name.includes("medic") || name.includes("doctor")) return Activity;
  if (name.includes("coin") || name.includes("invest") || name.includes("bank")) return Coins;
  return HelpCircle;
};

const chartConfig = {
  amount: {
    label: "Amount",
  },
} satisfies ChartConfig;

const ExpensePieChart = (props: { dateRange?: DateRangeType }) => {
  const { dateRange } = props;

  const { data, isFetching } = useExpensePieChartBreakdownQuery({
    preset: dateRange?.value,
  });
  const categories = data?.data?.breakdown || [];
  const totalSpent = data?.data?.totalSpent || 0;

  if (isFetching) {
    return <PieChartSkeleton />;
  }

  const CustomLegend = () => {
    return (
      <div className="grid grid-cols-1 gap-y-3 mt-6 border-t border-zinc-100 dark:border-white/5 pt-5">
        {categories.map((entry, index) => {
          const color = COLORS[index % COLORS.length];
          const CategoryIcon = getCategoryIcon(entry.name);
          return (
            <div key={`legend-${index}`} className="flex items-center gap-3 group/item cursor-pointer">
              {/* Wise/Revolut styled circular low-opacity badge */}
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover/item:scale-110"
                style={{
                  backgroundColor: hexToRGBA(color, 0.12),
                }}
              >
                <CategoryIcon className="size-4" style={{ color }} />
              </div>
              <div className="flex justify-between w-full min-w-0">
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 capitalize truncate">
                    {entry.name}
                  </span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">
                    Category Breakdown
                  </span>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-xs font-extrabold metric-numeric text-zinc-900 dark:text-white">
                    {formatCurrency(entry.value)}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-450 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800/40 px-1.5 py-0.5 rounded border border-zinc-100 dark:border-zinc-700/10 mt-0.5">
                    {formatPercentage(entry.percentage, { decimalPlaces: 0 })}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Card className="border border-zinc-150/85 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] backdrop-blur-md shadow-sm dark:shadow-md rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-350">
      <CardHeader className="pb-0 pt-5 px-5">
        <CardTitle className="text-[16px] font-extrabold text-zinc-800 dark:text-zinc-100 tracking-tight">Expenses Breakdown</CardTitle>
        <CardDescription className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider uppercase">Total spent {dateRange?.label}</CardDescription>
      </CardHeader>
      <CardContent className="pb-5 pt-4 px-5">
        <div className="w-full flex flex-col">
          {categories?.length === 0 ? (
            <EmptyState
              title="No expenses found"
              description="There are no expenses recorded for this period."
            />
          ) : (
            <>
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square h-[170px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent className="backdrop-blur-md bg-white/90 dark:bg-[#111a13]/90 border border-zinc-150/80 dark:border-white/5 shadow-xl rounded-xl p-2.5" />}
                  />

                  <Pie
                    data={categories}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={58}
                    outerRadius={75}
                    paddingAngle={3}
                    strokeWidth={0}
                    stroke="transparent"
                  >
                    {categories.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        className="transition-all duration-300 hover:opacity-90 outline-none"
                      />
                    ))}

                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          const cx = viewBox.cx ?? 0;
                          const cy = viewBox.cy ?? 0;
                          return (
                            <text
                              x={cx}
                              y={cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={cx}
                                y={cy - 2}
                                className="fill-zinc-800 dark:fill-zinc-100 text-xl font-extrabold metric-numeric tracking-tight"
                              >
                                {formatCurrency(totalSpent, { compact: true })}
                              </tspan>
                              <tspan
                                x={cx}
                                y={cy + 16}
                                className="fill-zinc-400 dark:fill-zinc-550 text-[10px] font-bold uppercase tracking-wider"
                              >
                                Spent
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
              <CustomLegend />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const PieChartSkeleton = () => (
  <Card className="border border-zinc-150/85 dark:border-white/5 bg-white dark:bg-white/3 rounded-2xl overflow-hidden">
    <CardHeader className="pb-0 pt-5 px-5">
      <Skeleton className="h-4.5 w-40 bg-zinc-200 dark:bg-white/10" />
      <Skeleton className="h-3 w-28 mt-2 bg-zinc-200 dark:bg-white/10" />
    </CardHeader>
    <CardContent className="pb-5 pt-3 px-5">
      <div className="w-full flex items-center justify-center py-2">
        <div className="relative w-[150px] h-[150px]">
          <Skeleton className="rounded-full w-full h-full bg-zinc-150 dark:bg-white/5" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Skeleton className="h-6 w-20 mb-2 bg-zinc-200 dark:bg-white/10" />
            <Skeleton className="h-3 w-12 bg-zinc-200 dark:bg-white/10" />
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-3 border-t border-zinc-100 dark:border-white/5 pt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="h-2.5 w-2.5 rounded-full bg-zinc-200 dark:bg-white/10" />
              <Skeleton className="h-3.5 w-16 bg-zinc-200 dark:bg-white/10" />
            </div>
            <div className="flex items-center gap-1.5">
              <Skeleton className="h-3.5 w-12 bg-zinc-200 dark:bg-white/10" />
              <Skeleton className="h-3.5 w-8 rounded-md bg-zinc-200 dark:bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default ExpensePieChart;
