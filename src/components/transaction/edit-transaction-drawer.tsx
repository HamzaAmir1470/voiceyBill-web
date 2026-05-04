import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import TransactionForm from "./transaction-form";
import useEditTransactionDrawer from "@/hooks/use-edit-transaction-drawer";

const EditTransactionDrawer = () => {
  const { open, transactionId, onCloseDrawer } = useEditTransactionDrawer();
  return (
    <Drawer open={open} onOpenChange={onCloseDrawer} direction="right">
      <DrawerContent className="max-w-md h-full flex flex-col">
        <DrawerHeader className="flex-shrink-0">
          <DrawerTitle className="text-xl font-semibold">
            Edit Transaction
          </DrawerTitle>
          <DrawerDescription>
            Edit a transaction to track your finances
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto">
          <TransactionForm
            isEdit
            transactionId={transactionId}
            onCloseDrawer={onCloseDrawer}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default EditTransactionDrawer;
