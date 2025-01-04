import { memo, useMemo } from 'react';
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { AvailableWidgetTypes } from '@/constants';
import { widgetControllerFactory } from '../WidgetManager/WidgetControllerFactory';

const WidgetController: React.FC<WidgetSettingSheetProps> = (props) => {
  const { open, type, onOpenChange, renderControllers } = props;

  const widgetName = useMemo(() => {
    return widgetControllerFactory.getWidgetName(type);
  }, [type]);

  return (
    <div>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>{widgetName}</SheetTitle>
          </SheetHeader>
          {renderControllers()}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default memo(WidgetController);

export interface WidgetSettingSheetProps {
  open: boolean;
  type: AvailableWidgetTypes;
  onOpenChange?: (open: boolean) => void;
  renderControllers: () => React.ReactNode;
}
