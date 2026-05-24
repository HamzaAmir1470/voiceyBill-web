import { FC } from "react";
import CountUp from "react-countup";
import { TrendingDownIcon, TrendingUpIcon, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format-currency";
import { formatPercentage } from "@/lib/format-percentage";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { DateRangeEnum, DateRangeType } from "@/components/date-range-select";

type CardType = "balance" | "income" | "expenses" | "savings";
type CardStatus = {
  label: string;
  colorClass: string;
  Icon: LucideIcon;
  description?: string;
};

interface SummaryCardProps {
  title: string;
  value?: number;
  dateRange?: DateRangeType;
  percentageChange?: number;
  isPercentageValue?: boolean;
  isLoading?: boolean;
  expenseRatio?: number;
  cardType: CardType;
}

const getCardStatus = (
  value: number,
  cardType: CardType,
  expenseRatio?: number
): CardStatus => {
  if (cardType === "savings") {
    if (value === 0) {
      return { label: "No Savings Record", colorClass: "text-zinc-450 dark:text-white/40", Icon: TrendingDownIcon };
    }
    if (value < 10) {
      return {
        label: "Low Savings",
        colorClass: "text-rose-600 dark:text-rose-450 font-semibold bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded-full text-xs",
        Icon: TrendingDownIcon,
        description: `Only ${value.toFixed(1)}% saved`,
      };
    }
    if (value < 20) {
      return {
        label: "Moderate",
        colorClass: "text-amber-600 dark:text-amber-450 font-semibold bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-full text-xs",
        Icon: TrendingDownIcon,
        description: `${expenseRatio?.toFixed(0)}% spent`,
      };
    }
    if (expenseRatio && expenseRatio > 75) {
      return {
        label: "High Spend",
        colorClass: "text-rose-600 dark:text-rose-450 font-semibold bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded-full text-xs",
        Icon: TrendingDownIcon,
        description: `${expenseRatio.toFixed(0)}% spent`,
      };
    }
    if (expenseRatio && expenseRatio > 60) {
      return {
        label: "Warning: High Spend",
        colorClass: "text-amber-600 dark:text-amber-450 font-semibold bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-full text-xs",
        Icon: TrendingDownIcon,
        description: `${expenseRatio.toFixed(0)}% spent`,
      };
    }
    return { 
      label: "Good Savings", 
      colorClass: "text-emerald-600 dark:text-brand-green-light font-semibold bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full text-xs", 
      Icon: TrendingUpIcon 
    };
  }

  if (value === 0) {
    const typeLabel =
      cardType === "income" ? "Income" : cardType === "expenses" ? "Expenses" : "Balance";
    return { label: `No ${typeLabel}`, colorClass: "text-zinc-450 dark:text-white/40", Icon: TrendingDownIcon };
  }

  if (cardType === "balance" && value < 0) {
    return {
      label: "Overdrawn",
      colorClass: "text-rose-600 dark:text-rose-450 font-semibold bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded-full text-xs",
      Icon: TrendingDownIcon,
      description: "Balance is negative",
    };
  }

  return { label: "", colorClass: "", Icon: TrendingDownIcon };
};

const getTrendDirection = (value: number, cardType: CardType) => {
  if (cardType === "expenses") return value <= 0 ? "positive" : "negative";
  return value >= 0 ? "positive" : "negative";
};

const SummaryCard: FC<SummaryCardProps> = ({
  title,
  value = 0,
  dateRange,
  percentageChange,
  isPercentageValue,
  isLoading,
  expenseRatio,
  cardType = "balance",
}) => {
  const status = getCardStatus(value, cardType, expenseRatio);
  const showTrend =
    percentageChange !== undefined &&
    percentageChange !== null &&
    cardType !== "savings";

  const trendDirection =
    showTrend && percentageChange !== 0
      ? getTrendDirection(percentageChange, cardType)
      : null;

  if (isLoading) {
    return (
      <Card className="border border-zinc-100 dark:border-white/5 bg-white dark:bg-white/3 rounded-xl gap-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-5">
          <Skeleton className="h-4 w-24 bg-zinc-200 dark:bg-white/10" />
        </CardHeader>
        <CardContent className="space-y-6">
          <Skeleton className="h-8 w-full bg-zinc-200 dark:bg-white/10" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-3.5 w-12 bg-zinc-200 dark:bg-white/10" />
            <Skeleton className="h-3.5 w-16 bg-zinc-200 dark:bg-white/10" />
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatCountupValue = (val: number) => {
    return isPercentageValue
      ? formatPercentage(val, { decimalPlaces: 1 })
      : formatCurrency(val, { isExpense: cardType === "expenses", showSign: false });
  };

  return (
    <Card className="relative overflow-hidden border border-zinc-150/80 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] backdrop-blur-md shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_30px_-5px_rgba(159,255,89,0.06)] hover:border-zinc-300 dark:hover:border-white/10 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 rounded-2xl gap-0 group">
      {/* Dynamic glowing background spot for forest/neon green theme */}
      <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-brand-green/5 dark:bg-brand-green-light/3 blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />
      
      <CardHeader className="flex flex-row items-center justify-between pb-3.5 pt-5 px-5">
        <CardTitle className="text-[11.5px] text-zinc-450 dark:text-zinc-400 font-extrabold uppercase tracking-widest">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4 pb-5 px-5">
        <div
          className={cn(
            "text-3xl font-extrabold tracking-tight metric-numeric text-zinc-900 dark:text-white transition-colors duration-200",
            cardType === "balance" && value < 0 && "text-rose-600 dark:text-rose-400"
          )}
        >
          <CountUp
            start={0}
            end={value}
            preserveValue
            decimals={2}
            decimalPlaces={2}
            formattingFn={formatCountupValue}
          />
        </div>

        <div className="text-xs mt-1">
          {cardType === "savings" ? (
            <div className="flex items-center gap-2 flex-wrap">
              <span className={cn("px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-sm", status.colorClass)}>{status.label}</span>
              {status.description && (
                <span className="text-zinc-450 dark:text-zinc-550 font-semibold">{status.description}</span>
              )}
            </div>
          ) : dateRange?.value === DateRangeEnum.ALL_TIME ? (
            <span className="text-zinc-400 dark:text-zinc-550 text-[11px] font-bold uppercase tracking-wider">Showing {dateRange?.label}</span>
          ) : value === 0 || status.label ? (
            <div className="flex items-center gap-2">
              <span className={cn("px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-sm", status.colorClass)}>{status.label}</span>
              {!status.description && (
                <span className="text-zinc-400 dark:text-zinc-550 text-[11px] font-semibold">• {dateRange?.label}</span>
              )}
              {status.description && (
                <span className="text-zinc-400 dark:text-zinc-550 text-[11px] font-semibold">• {status.description}</span>
              )}
            </div>
          ) : showTrend ? (
            <div className="flex items-center gap-2">
              {percentageChange !== 0 && (
                <div
                  className={cn(
                    "flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold shadow-sm transition-all duration-300",
                    trendDirection === "positive"
                      ? "text-emerald-700 dark:text-brand-green-light bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-500/10 dark:shadow-[0_0_12px_rgba(159,255,89,0.06)]"
                      : "text-rose-700 dark:text-rose-450 bg-rose-50 dark:bg-rose-950/20 border border-rose-100/50 dark:border-rose-500/10 dark:shadow-[0_0_12px_rgba(220,38,38,0.06)]"
                  )}
                >
                  {trendDirection === "positive" ? (
                    <TrendingUpIcon className="size-3" />
                  ) : (
                    <TrendingDownIcon className="size-3" />
                  )}
                  <span>
                    {formatPercentage(percentageChange || 0, {
                      showSign: percentageChange !== 0,
                      isExpense: cardType === "expenses",
                      decimalPlaces: 1,
                    })}
                  </span>
                </div>
              )}
              {percentageChange === 0 && (
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-700/20">
                  <TrendingDownIcon className="size-3" />
                  <span>{formatPercentage(0, { showSign: false, decimalPlaces: 1 })}</span>
                </div>
              )}
              <span className="text-zinc-400 dark:text-zinc-550 text-[11px] font-semibold">• {dateRange?.label}</span>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
