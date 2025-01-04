import { useCallback, useMemo, useState } from 'react';
import { Handle } from '@xyflow/react';

import { BaseWidget } from './index';
import { AvailableWidgetTypes } from '@/constants';
import WidgetController from './WidgetController';
import { handleLablePosition, WIDGET_SETTING_HANDLE_MAP } from './constants';
import type { WidgetHandle } from '../interface';
import { widgetControllerFactory } from '../WidgetManager/WidgetControllerFactory';
// import { WidgetControllerContext } from './WidgetControllerContext';

function withBase(WrappedWidget: React.ElementType) {
  return function WrappedBaseWidget(props: WrappedBaseWidgetProps) {
    const { type, id } = props;

    const [openSetting, setOpenSetting] = useState(false);

    const onWidgetSetting = useCallback(() => {
      setOpenSetting(true);
    }, []);

    const handleControllerSubmit = useCallback(
      (values: Record<string, unknown>) => {
        console.log('form changed: ', values);
      },
      [],
    );

    const renderControllers = useCallback(() => {
      return widgetControllerFactory.getWidgetControllerLazy(type, {
        type,
        id,
        onSubmit: handleControllerSubmit,
      });
    }, [type, id, handleControllerSubmit]);

    const widgetHandles: Array<WidgetHandle> = useMemo(() => {
      return WIDGET_SETTING_HANDLE_MAP[type] || [];
    }, [type]);

    return (
      <BaseWidget {...props}>
        <WrappedWidget
          {...props}
          onWidgetSetting={onWidgetSetting}
          key={`entity-${id}`}
        />

        <WidgetController
          open={openSetting}
          type={type}
          onOpenChange={setOpenSetting}
          renderControllers={renderControllers}
        />

        {widgetHandles.map((handle) => (
          <Handle
            type={handle.type}
            position={handle.position}
            style={{
              transform: `translateY(${handle.offsetY}px)`,
            }}
            id={id}
            key={handle.id}
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
