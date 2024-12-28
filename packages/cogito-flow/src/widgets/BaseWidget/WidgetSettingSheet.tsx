// import { Button } from '@/components/ui/button';
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { AvailableWidgetTypes } from '@/constants';

export const WidgetSettingSheet: React.FC<WidgetSettingSheetProps> = (
  props,
) => {
  const { open, type, onOpenChange } = props;
  console.log(type);
  return (
    <div>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure? </SheetTitle>
            {/* <SheetDescription>

            </SheetDescription> */}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export interface WidgetSettingSheetProps {
  open: boolean;
  type: AvailableWidgetTypes;
  onOpenChange: (open: boolean) => void;
  onFormChange: (values: Record<string, unknown>) => void;
}
