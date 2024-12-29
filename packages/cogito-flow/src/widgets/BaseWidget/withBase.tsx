import { useCallback, useState } from 'react';
import { BaseWidget } from './index';
import { AvailableWidgetTypes } from '@/constants';
import WidgetSettingSheet from './WidgetSettingSheet';
import { WIDGET_SETTING_FORM_MAP } from './constants';

function withBase(WrappedWidget: React.ElementType) {
  return function WrappedBaseWidget(props: WrappedBaseWidgetProps) {
    const { type } = props;
    const [openSetting, setOpenSetting] = useState(false);

    const onWidgetSetting = useCallback(() => {
      console.log(type);
      setOpenSetting(true);
    }, [type]);

    const renderForm = useCallback(() => {
      return WIDGET_SETTING_FORM_MAP[type];
    }, [type]);

    return (
      <BaseWidget {...props}>
        <WrappedWidget {...props} onWidgetSetting={onWidgetSetting} />
        <WidgetSettingSheet
          open={openSetting}
          type={type}
          // onFormChange={handleFormChange}
          onOpenChange={setOpenSetting}
          renderForm={renderForm}
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
