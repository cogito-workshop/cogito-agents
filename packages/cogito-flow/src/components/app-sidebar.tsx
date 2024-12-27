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
  WidgetList,
} from '@/constants/widget-panel-config';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={DEFAULT_TEAMS} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={WidgetList} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={DEFAULT_USER_PROFILE} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
