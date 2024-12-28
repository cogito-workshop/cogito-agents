import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
} from 'lucide-react';
import {
  AVAILABLE_AGENT_LIST,
  AVAILABLE_CLASSIFIER_LIST,
  AVAILABLE_GENERAL_LIST,
  AVAILABLE_LLM_LIST,
  AVAILABLE_RETRIEVER_LIST,
  AVAILABLE_STORE_LIST,
  AVAILABLE_TOOL_LIST,
  WidgetCategories,
} from './widgets';

export const DEFAULT_USER_PROFILE = {
  name: 'Assistant',
  email: 'me@example.com',
  avatar: '/avatars/shadcn.jpg',
};

export const DEFAULT_TEAMS = [
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
];

export const WidgetList = [
  {
    title: WidgetCategories.General,
    icon: SquareTerminal,
    isActive: true,
    items: AVAILABLE_GENERAL_LIST,
  },
  {
    title: WidgetCategories.Agents,
    icon: SquareTerminal,
    isActive: true,
    items: AVAILABLE_AGENT_LIST,
  },
  {
    title: WidgetCategories.Classifiers,
    icon: Bot,
    items: AVAILABLE_CLASSIFIER_LIST,
  },
  {
    title: WidgetCategories.Retrievers,
    icon: Bot,
    items: AVAILABLE_RETRIEVER_LIST,
  },
  {
    title: WidgetCategories.Storers,
    icon: Bot,
    items: AVAILABLE_STORE_LIST,
  },
  {
    title: WidgetCategories.LLMs,
    icon: Bot,
    items: AVAILABLE_LLM_LIST,
  },
  {
    title: WidgetCategories.Tools,
    icon: Bot,
    items: AVAILABLE_TOOL_LIST,
  },
  // {
  //   title: 'Documentation',
  //   icon: BookOpen,
  //   items: [
  //     {
  //       title: 'Introduction',
  //       icon: Footprints,
  //     },
  //     {
  //       title: 'Get Started',
  //       icon: Footprints,
  //     },
  //     {
  //       title: 'Tutorials',
  //       icon: Footprints,
  //     },
  //     {
  //       title: 'Changelog',
  //       icon: Footprints,
  //     },
  //   ],
  // },
  // {
  //   title: 'Settings',
  //   icon: Settings2,
  //   items: [
  //     {
  //       title: 'General',
  //       icon: Footprints,
  //     },
  //     {
  //       title: 'Team',
  //       icon: Footprints,
  //     },
  //     {
  //       title: 'Billing',
  //       icon: Footprints,
  //     },
  //     {
  //       title: 'Limits',
  //       icon: Footprints,
  //     },
  //   ],
  // },
];
