import * as React from 'react';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Footprints,
  // Frame,
  GalleryVerticalEnd,
  // Map,
  // PieChart,
  Settings2,
  ShipWheel,
  SquareTerminal,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
// import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  user: {
    name: 'Assistant',
    email: 'me@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Cogito Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Coigto Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'General',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Input',
          icon: Footprints,
        },
        {
          title: 'Ouput',
          icon: Footprints,
        },
        {
          title: 'Parsers',
          icon: Footprints,
        },
      ],
    },
    {
      title: 'Agents',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          icon: Footprints,
        },
        {
          title: 'Starred',
          icon: Footprints,
        },
        {
          title: 'Settings',
          icon: Footprints,
        },
      ],
    },
    {
      title: 'Classifiers',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          icon: Footprints,
        },
        {
          title: 'Explorer',
          icon: Footprints,
        },
        {
          title: 'Quantum',
          icon: Footprints,
        },
      ],
    },
    {
      title: 'Retrievers',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          icon: Footprints,
        },
        {
          title: 'Explorer',
          icon: Footprints,
        },
        {
          title: 'Quantum',
          icon: Footprints,
        },
      ],
    },
    {
      title: 'Storers',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          icon: Footprints,
        },
        {
          title: 'Explorer',
          icon: Footprints,
        },
        {
          title: 'Quantum',
          icon: Footprints,
        },
      ],
    },
    {
      title: 'LLMs',
      icon: Bot,
      items: [
        {
          title: 'Ollama',
          icon: ShipWheel,
        },
        {
          title: 'Explorer',
          icon: ShipWheel,
        },
        {
          title: 'Quantum',
          icon: ShipWheel,
        },
      ],
    },
    {
      title: 'Tools',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          icon: Footprints,
        },
        {
          title: 'Explorer',
          icon: Footprints,
        },
        {
          title: 'Quantum',
          icon: Footprints,
        },
      ],
    },
    {
      title: 'Documentation',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          icon: Footprints,
        },
        {
          title: 'Get Started',
          icon: Footprints,
        },
        {
          title: 'Tutorials',
          icon: Footprints,
        },
        {
          title: 'Changelog',
          icon: Footprints,
        },
      ],
    },
    {
      title: 'Settings',
      icon: Settings2,
      items: [
        {
          title: 'General',
          icon: Footprints,
        },
        {
          title: 'Team',
          icon: Footprints,
        },
        {
          title: 'Billing',
          icon: Footprints,
        },
        {
          title: 'Limits',
          icon: Footprints,
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
