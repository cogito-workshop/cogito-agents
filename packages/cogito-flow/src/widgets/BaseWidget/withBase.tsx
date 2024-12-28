import { useCallback, useState } from 'react';
import { BaseWidget } from './index';
import { AvailableWidgetTypes } from '@/constants';
import { WidgetSettingSheet } from './WidgetSettingSheet';

function withBase(WrappedWidget: React.ElementType) {
  return function WrappedBaseWidget(props: WrappedBaseWidgetProps) {
    const { type } = props;
    const [openSetting, setOpenSetting] = useState(false);

    const onWidgetSetting = useCallback(() => {
      console.log(type);
      setOpenSetting(true);
    }, [type]);

    return (
      <BaseWidget {...props}>
        <WrappedWidget {...props} onWidgetSetting={onWidgetSetting} />
        <WidgetSettingSheet
          open={openSetting}
          type={type}
          onOpenChange={setOpenSetting}
        />
      </BaseWidget>
    );
  };
}

export default withBase;

export interface WrappedBaseWidgetProps {
  id: string;
  type: AvailableWidgetTypes;
}
