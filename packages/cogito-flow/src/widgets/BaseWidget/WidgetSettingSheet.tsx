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
import { memo } from 'react';

const WidgetSettingSheet: React.FC<WidgetSettingSheetProps> = (props) => {
  const { open, type, onOpenChange, renderForm } = props;
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
          {renderForm()}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default memo(WidgetSettingSheet);

export interface WidgetSettingSheetProps {
  open: boolean;
  type: AvailableWidgetTypes;
  onOpenChange?: (open: boolean) => void;
  renderForm: () => React.ReactNode;
}
