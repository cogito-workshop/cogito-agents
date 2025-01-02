import { useCallback, useMemo, useState } from 'react';
import { BaseWidget } from './index';
import { AvailableWidgetTypes } from '@/constants';
import WidgetSettingSheet from './WidgetSettingSheet';
import {
  handleLablePosition,
  WIDGET_SETTING_FORM_MAP,
  WIDGET_SETTING_HANDLE_MAP,
} from './constants';
import { Handle } from '@xyflow/react';
import type { WidgetHandle } from '../interface';

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

    const widgetHandles: Array<WidgetHandle> = useMemo(() => {
      return WIDGET_SETTING_HANDLE_MAP[type] || [];
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

        {widgetHandles.map((handle) => (
          <Handle
            type={handle.type}
            position={handle.position}
            style={{
              transform: `translateY(${handle.offsetY}px)`,
            }}
            id={handle.id}
            className="!w-2 !h-2"
          >
            <span
              className={handleLablePosition({ position: handle.position })}
            >
              {handle.label}
            </span>
          </Handle>
        ))}
      </BaseWidget>
    );
  };
}

export default withBase;

export interface WrappedBaseWidgetProps {
  id: string;
  type: AvailableWidgetTypes;
}
