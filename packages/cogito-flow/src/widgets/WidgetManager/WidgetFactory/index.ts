import withBase, {
  WrappedBaseWidgetProps,
} from '@/widgets/BaseWidget/withBase';
import { isNull } from 'lodash-es';
import { DEFAULT_WIDGET_MAP, DEFAULT_WIDGET_KEYS } from '../constants';
import React from 'react';

class WidgetFactory {
  private defaultWidgets = new Map<
    string,
    (props: WrappedBaseWidgetProps) => React.ReactElement
  >();
  private remoteWidgets = new Map<
    string,
    (props: WrappedBaseWidgetProps) => React.ReactElement
  >();

  constructor() {
    this.loadDefaultWidgets();
  }

  public getWidgetEntityLazy(widgetType: string) {
    // 1. Firstly, query the widget by `widgetType` from `defaultWidget`
    if (this.defaultWidgets.has(widgetType)) {
      return this.defaultWidgets.get(widgetType);
    }

    // 2. Then, query the widget by `remoteType` from `remoteWidget`
    if (this.remoteWidgets.has(widgetType)) {
      return this.remoteWidgets.get(widgetType);
    }

    return null;
  }

  private loadDefaultWidgets() {
    for (const widgetType of DEFAULT_WIDGET_KEYS) {
      const enhancedWidget = this.buildWidget(DEFAULT_WIDGET_MAP[widgetType]);

      // if (this.defaultWidgets.has(widgetType)) {
      //   continue;
      // }

      if (isNull(enhancedWidget)) {
        continue;
      }

      this.defaultWidgets.set(widgetType, enhancedWidget);
    }
  }

  private buildWidget(widget: React.ElementType | null) {
    if (isNull(widget)) {
      return null;
    }

    return withBase(widget);
  }
}

export const widgetFactory = new WidgetFactory();
