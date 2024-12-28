'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  // SidebarGroupLabel,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  // SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  AvailableWidgetTypes,
  WidgetCategories,
  type WidgetItem,
} from '@/constants';
import { useDnD } from '@/hooks/useDnD';
import { useEffect } from 'react';

export function NavMain({
  items,
}: {
  items: {
    title: WidgetCategories;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: WidgetItem[];
  }[];
}) {
  const [type, setType] = useDnD();

  const onDragStart = (
    event: React.DragEvent,
    nodeType: AvailableWidgetTypes,
  ) => {
    setType(nodeType);

    event.dataTransfer.effectAllowed = 'move';
  };

  useEffect(() => {
    if (type) {
      // statistic of one component usage
      // console.log(type);
    }
  }, [type]);

  return (
    <SidebarGroup>
      <SidebarInput className="mb-2" placeholder="enter widget name..." />
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem
                      key={subItem.type}
                      draggable
                      onDragStart={(ev) =>
                        onDragStart(ev, subItem.type as AvailableWidgetTypes)
                      }
                      className="w-1/3 h-16 border select-none rounded-md flex flex-col justify-center items-center cursor-pointer duration-300 hover:border-blue-400"
                    >
                      {subItem.icon}
                      <span className="text-xs mt-1">{subItem.title}</span>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
