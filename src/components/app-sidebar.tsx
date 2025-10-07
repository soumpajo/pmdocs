import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { getTranslations } from "next-intl/server"
import { IoMdLogOut } from "react-icons/io"
import { signout } from "@/app/(auth)/login/actions"

const translations = await getTranslations("common")
const translations_auth = await getTranslations("auth")
// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: translations("projects"),
    url: "projects",
    icon: Inbox,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={signout} variant="outline" size="sm">
          <IoMdLogOut />{translations_auth("signout")}
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}