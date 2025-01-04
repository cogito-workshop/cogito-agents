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
import { useCallback } from 'react';

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
  const { setType, setIsDragging } = useDnD();

  const onDragStart = useCallback(
    (event: React.DragEvent, nodeType: AvailableWidgetTypes) => {
      setType(nodeType);
      setIsDragging(() => true);
      event.dataTransfer.effectAllowed = 'move';
    },
    [setType, setIsDragging],
  );

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
                      onDragOver={() => {
                        setIsDragging(() => false);
                      }}
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
