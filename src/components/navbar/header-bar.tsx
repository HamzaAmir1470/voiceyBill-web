import { useState } from "react";
import { Sun, Moon, Search, Bell, Menu } from "lucide-react";
import { useTypedSelector } from "@/app/hook";
import { useTheme } from "@/context/theme-provider";
import { Button } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
import { UserNav } from "./user-nav";
import Sidebar from "../sidebar";
import Logo from "../logo/logo";

interface HeaderBarProps {
  onLogoutClick?: () => void;
}

export const HeaderBar = ({ onLogoutClick }: HeaderBarProps) => {
  const { user } = useTypedSelector((state) => state.auth);
  const { theme, setTheme } = useTheme();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-zinc-150/70 dark:border-white/5 bg-background/80 px-4 sm:px-6 backdrop-blur-lg transition-all duration-300">
        
        {/* Left Side: Mobile Hamburger Menu & Brand, or Search Bar on Desktop */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger menu */}
          <Button
            variant="ghost"
            size="icon"
            className="inline-flex md:hidden text-foreground hover:bg-muted/65 border border-transparent hover:border-border/30 rounded-xl h-9.5 w-9.5"
            onClick={() => setIsMobileDrawerOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Mobile Brand Logo */}
          <div className="flex md:hidden text-foreground [&_span]:text-foreground [&_img]:opacity-95">
            <Logo />
          </div>

          {/* Desktop Search Bar (Nexora-inspired) */}
          <div className="hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-150/80 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.01] hover:bg-zinc-100/50 dark:hover:bg-white/[0.03] transition-all duration-200 cursor-pointer w-64 text-muted-foreground shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] group">
            <Search className="h-4 w-4 text-zinc-400 dark:text-zinc-500 group-hover:text-foreground transition-colors duration-200" />
            <span className="text-[12.5px] font-medium pl-0.5">Search actions...</span>
            <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-0.5 rounded-md border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900 px-1.5 font-mono text-[9px] font-extrabold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest shadow-sm">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right Side: Theme toggles, bell, and User menu */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Search bar trigger visible on mobile header */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9.5 w-9.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/65 border border-transparent"
            title="Search"
          >
            <Search className="h-4.5 w-4.5" />
          </Button>

          {/* Theme toggler */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9.5 w-9.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/65 border border-transparent hover:border-border/30 transition-all duration-200"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4.5 w-4.5 text-primary" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-primary" />
            )}
          </Button>

          {/* Notifications bell icon with ambient glow badge (Nexora inspired) */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="h-9.5 w-9.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/65 border border-transparent hover:border-border/30 transition-all duration-200"
              title="Notifications"
            >
              <Bell className="h-4.5 w-4.5" />
            </Button>
            {/* Pulsing indicator pill */}
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green dark:bg-brand-green-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green dark:bg-brand-green-light"></span>
            </span>
          </div>

          <div className="h-4 w-px bg-zinc-150/60 dark:bg-white/5" />

          {/* User profile dropdown popup */}
          <UserNav
            userName={user?.name || ""}
            profilePicture={user?.profilePicture || ""}
            onLogout={onLogoutClick || (() => {})}
          />
        </div>
      </header>

      {/* Mobile Drawer Sheet Overlay */}
      <Sheet open={isMobileDrawerOpen} onOpenChange={setIsMobileDrawerOpen}>
        <SheetContent side="left" className="p-0 border-r border-zinc-150/70 dark:border-white/5 w-64 bg-transparent">
          <Sidebar
            className="fixed top-0 bottom-0 left-0 right-0 h-full w-full bg-white dark:bg-zinc-950/95"
            onLinkClick={() => setIsMobileDrawerOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </>
  );
};
