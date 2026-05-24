import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowUpDown,
  BarChart3,
  Settings,
  LogOut,
  Mic,
  Sparkles
} from "lucide-react";
import { PROTECTED_ROUTES } from "@/routes/common/routePath";
import { cn } from "@/lib/utils";
import Logo from "../logo/logo";
import { Button } from "../ui/button";
import LogoutDialog from "../navbar/logout-dialog";

interface SidebarProps {
  className?: string;
  onLinkClick?: () => void;
}

const Sidebar = ({ className, onLinkClick }: SidebarProps) => {
  const { pathname } = useLocation();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const routes = [
    { href: PROTECTED_ROUTES.OVERVIEW, label: "Overview", Icon: LayoutDashboard },
    { href: PROTECTED_ROUTES.TRANSACTIONS, label: "Transactions", Icon: ArrowUpDown },
    { href: PROTECTED_ROUTES.REPORTS, label: "Reports", Icon: BarChart3 },
    { href: PROTECTED_ROUTES.SETTINGS, label: "Settings", Icon: Settings },
  ];

  return (
    <>
      <aside
        className={cn(
          "flex flex-col h-screen fixed left-0 top-0 w-64 bg-white/70 dark:bg-zinc-950/25 border-r border-zinc-150/70 dark:border-white/5 py-6 px-4 z-40 backdrop-blur-xl transition-all duration-300 justify-between",
          className
        )}
      >
        <div className="flex flex-col gap-8">
          {/* Top Logo */}
          <div className="px-3">
            <Logo />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {routes.map((route) => {
              const Icon = route.Icon;
              const isActive = pathname === route.href;
              return (
                <Button
                  key={route.href}
                  size="sm"
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3.5 font-semibold text-[13.5px] px-4 py-2.5 rounded-full border border-transparent transition-all duration-300 group",
                    isActive
                      ? "text-primary bg-primary/8 border-primary/20 dark:text-brand-green-light dark:bg-brand-green-light/8 dark:border-brand-green-light/10 shadow-[0_2px_12px_-4px_rgba(22,97,20,0.06)] dark:shadow-[0_2px_12px_-4px_rgba(159,255,89,0.06)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                  asChild
                >
                  <NavLink to={route.href} onClick={onLinkClick}>
                    <Icon
                      className={cn(
                        "h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110",
                        isActive
                          ? "text-primary dark:text-brand-green-light"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    />
                    <span>{route.label}</span>
                  </NavLink>
                </Button>
              );
            })}
          </nav>
        </div>

        {/* Bottom promo & logout action */}
        <div className="flex flex-col gap-4">
          {/* Custom VoiceyAI Promo Card */}
          <div className="relative overflow-hidden p-4 rounded-2xl border border-zinc-150/80 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.01] backdrop-blur-md shadow-sm group">
            {/* Soft pulsing ambient green circle behind */}
            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-brand-green/5 dark:bg-brand-green-light/3 blur-xl group-hover:scale-125 transition-all duration-500 pointer-events-none" />
            
            <div className="flex items-start gap-2.5 z-10 relative">
              <div className="h-7 w-7 rounded-lg bg-primary/8 dark:bg-brand-green-light/8 flex items-center justify-center text-primary dark:text-brand-green-light">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1">
                <p className="text-[11.5px] font-extrabold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  VoiceyAI Input
                </p>
                <p className="text-[10.5px] text-muted-foreground mt-0.5 leading-relaxed font-medium">
                  Add transactions seamlessly using your voice!
                </p>
              </div>
            </div>

            {/* Glowing Microphone button placeholder */}
            <div className="mt-3.5 flex items-center justify-between bg-white dark:bg-zinc-900/50 border border-zinc-150/50 dark:border-white/5 p-2 rounded-xl">
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest pl-1.5">
                Ready to record
              </span>
              <div className="h-7 w-7 rounded-full bg-brand-green dark:bg-brand-green-light flex items-center justify-center shadow-md dark:shadow-brand-green-light/10 text-white dark:text-zinc-950 animate-voice-pulse hover:scale-105 transition-all duration-300 cursor-pointer">
                <Mic className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Separation line */}
          <div className="h-px bg-zinc-150/60 dark:bg-white/5 w-full" />

          {/* Logout Action */}
          <Button
            size="sm"
            variant="ghost"
            className="w-full justify-start gap-3.5 font-semibold text-[13.5px] text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:text-rose-400 dark:hover:text-rose-350 dark:hover:bg-rose-950/10 px-4 py-2.5 rounded-full border border-transparent transition-all duration-200 group"
            onClick={() => setIsLogoutDialogOpen(true)}
          >
            <LogOut className="h-[17px] w-[17px] text-rose-500 dark:text-rose-450 transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span>Log Out</span>
          </Button>
        </div>
      </aside>

      <LogoutDialog
        isOpen={isLogoutDialogOpen}
        setIsOpen={setIsLogoutDialogOpen}
      />
    </>
  );
};

export default Sidebar;
