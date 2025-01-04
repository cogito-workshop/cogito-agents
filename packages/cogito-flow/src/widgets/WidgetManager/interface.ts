import { type LucideIcon } from 'lucide-react';

import { WidgetCategories, WidgetItem } from '@/constants';

export interface WidgetCategoryItem {
  title: WidgetCategories;
  category: WidgetCategories;
  icon: LucideIcon;
  isActive?: boolean;
  items: WidgetItem[];
}
