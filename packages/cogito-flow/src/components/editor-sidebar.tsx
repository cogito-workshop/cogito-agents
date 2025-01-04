import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  DEFAULT_TEAMS,
  DEFAULT_USER_PROFILE,
} from '@/constants/widget-panel-config';
import { useEffect, useState } from 'react';
import { widgetThumbnailFactory } from '@/widgets/WidgetManager/WidgetThumbnailFactory';
import { WidgetCategoryItem } from '@/widgets/WidgetManager/interface';

export function EditorSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [widgetList, setWidgetList] = useState<
    Omit<WidgetCategoryItem, 'category'>[]
  >([]);

  useEffect(() => {
    if (widgetThumbnailFactory.WidgetThumbnailList.length > 0) {
      setWidgetList(widgetThumbnailFactory.WidgetThumbnailList);
    }
  }, []);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={DEFAULT_TEAMS} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={widgetList} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={DEFAULT_USER_PROFILE} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
