import { AVAILABLE_WIDGET_LIST, type WidgetItem } from '@/constants';
import { WidgetCategoryItem } from '../interface';
import { DEFAULT_WIDGET_CATEGORIES } from '../constants';

class WidgetThumbnailFactory {
  private widgetThumbnailMap = new Map<AvailableWidgetTypes, WidgetItem>();
  private widgetCategories: WidgetCategoryItem[];

  constructor() {
    this.widgetCategories = [];

    this.loadDefaultWidgets();
  }

  public get WidgetThumbnailList() {
    const widgetList = [...this.widgetThumbnailMap.values()];

    return this.widgetCategories.map(({ category, ...item }) => {
      const categoryItems = [];

      for (const widget of widgetList) {
        if (widget.category === category) {
          categoryItems.push(widget);
        }
      }

      item.items = categoryItems;

      return item;
    });
  }

  register(type: string, widget: WidgetItem) {
    /**
     * NOTE: the widget maybe come from multi sources, such as:
     * 1. built-in widgets
     * 2. third-party widgets
     * 3. ...
     */
    if (this.widgetThumbnailMap.has(type as AvailableWidgetTypes)) return;

    this.widgetThumbnailMap.set(type as AvailableWidgetTypes, widget);
  }

  registerCategory(widgetCatetory: WidgetCategoryItem) {
    this.widgetCategories.push(widgetCatetory);
  }

  remove(type: AvailableWidgetTypes) {
    if (this.widgetThumbnailMap.has(type)) {
      this.widgetThumbnailMap.delete(type);
    }
  }

  private loadDefaultWidgetCategories() {
    for (const category of DEFAULT_WIDGET_CATEGORIES) {
      this.registerCategory(category);
    }
  }

  private loadDefaultWidgets() {
    for (const widget of AVAILABLE_WIDGET_LIST) {
      this.register(widget.type, widget);
    }

    this.loadDefaultWidgetCategories();
  }
}

export const widgetThumbnailFactory = new WidgetThumbnailFactory();
