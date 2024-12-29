import { EditorSidebar } from '@/components/editor-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
// import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  // SidebarTrigger,
} from '@/components/ui/sidebar';
import { DnDProvider } from '@/context/ContextProviders';
import { FlowEditorWithProvider } from '@/editor/FlowEditor';

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <DnDProvider>
        <EditorSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              {/* <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" /> */}
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Cogito Agent</BreadcrumbLink>
                  </BreadcrumbItem>
                  {/* <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem> */}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
            <FlowEditorWithProvider />
          </div>
        </SidebarInset>
      </DnDProvider>
    </SidebarProvider>
  );
}
