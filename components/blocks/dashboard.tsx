import { AppSidebar } from "@/components/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ChatArea from "./chat-area";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="h-full">
          <ChatArea />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
