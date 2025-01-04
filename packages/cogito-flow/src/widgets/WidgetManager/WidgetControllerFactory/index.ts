import React from 'react';

import { DEFAULT_WIDGET_KEYS } from '../constants';
import { WIDGET_CONTROLLER_CONFIG_MAP } from '@/widgets/BaseWidget/constants';

class WidgetControllerFactory {
  private defaultWidgetControllerList = new Map<
    string,
    (props: Record<string, unknown>) => React.ReactNode
  >();

  constructor() {
    this.loadDefaultWidgetController();
  }

  public getWidgetName(widgetType: AvailableWidgetTypes) {
    return WIDGET_CONTROLLER_CONFIG_MAP[widgetType].widgetName;
  }

  public getWidgetControllerLazy(
    widgetType: string,
    props: Record<string, unknown>,
  ) {
    // 1. Firstly, query the widget by `widgetType` from `defaultWidget`
    if (this.defaultWidgetControllerList.has(widgetType)) {
      return this.defaultWidgetControllerList.get(widgetType)?.(props);
    }

    // 2. Then, query the widget by `remoteType` from `remoteWidget`
    if (this.defaultWidgetControllerList.has(widgetType)) {
      return this.defaultWidgetControllerList.get(widgetType)?.(props);
    }

    return null;
  }

  private loadDefaultWidgetController() {
    for (const widgetType of DEFAULT_WIDGET_KEYS) {
      const widgetEditController =
        WIDGET_CONTROLLER_CONFIG_MAP[widgetType].controller;

      if (widgetEditController) {
        this.defaultWidgetControllerList.set(widgetType, widgetEditController);
      }
    }
  }
}

export const widgetControllerFactory = new WidgetControllerFactory();
