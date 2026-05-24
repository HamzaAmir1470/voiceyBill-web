import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { HeaderBar } from "@/components/navbar/header-bar";
import { Outlet } from "react-router-dom";
import EditTransactionDrawer from "@/components/transaction/edit-transaction-drawer";
import LogoutDialog from "@/components/navbar/logout-dialog";

const AppLayout = () => {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex bg-[var(--bg-color)] dark:bg-background transition-colors duration-300">
        {/* Left Side: Permanent Sidebar for desktop & tablet */}
        <Sidebar className="hidden md:flex" />

        {/* Right Side: Header and Main Content Page Area */}
        <div className="flex-1 md:pl-64 flex flex-col min-h-screen w-full">
          <HeaderBar onLogoutClick={() => setIsLogoutDialogOpen(true)} />
          <main className="w-full max-w-[var(--max-width)] mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Drawers and Modal Dialogs */}
      <EditTransactionDrawer />
      <LogoutDialog
        isOpen={isLogoutDialogOpen}
        setIsOpen={setIsLogoutDialogOpen}
      />
    </>
  );
};

export default AppLayout;
