import React, { createContext, useContext, useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

// Context
type SidebarContextType = {
  isOpen: boolean
  toggle: () => void
  close: () => void
  open: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])
  const close = useCallback(() => setIsOpen(false), [])
  const open = useCallback(() => setIsOpen(true), [])
  
  return (
    <SidebarContext.Provider value={{ isOpen, toggle, close, open }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function Sidebar({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const { isOpen } = useSidebar()
  const isMobile = useMobile()
  
  return (
    <aside
      className={`${
        isMobile
          ? `fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`
          : "relative w-64"
      } min-h-screen bg-white border-r border-gray-200 ${className}`}
    >
      {children}
    </aside>
  )
}

export function SidebarTrigger() {
  const { toggle, isOpen } = useSidebar()
  const isMobile = useMobile()
  
  if (!isMobile) return null
  
  return (
    <button
      onClick={toggle}
      className="fixed bottom-20 left-4 z-50 p-2 bg-primary text-white rounded-full shadow-lg"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  )
}

export function SidebarHeader({ children }: { children?: React.ReactNode }) {
  return <div className="p-4 border-b border-gray-200">{children}</div>
}

export function SidebarContent({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 overflow-y-auto py-4">{children}</div>
}

export function SidebarFooter({ children }: { children?: React.ReactNode }) {
  return <div className="p-4 border-t border-gray-200">{children}</div>
}

export function SidebarGroup({ children }: { children: React.ReactNode }) {
  return <div className="px-3 mb-6">{children}</div>
}

export function SidebarGroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 px-4 text-sm font-medium text-gray-500">{children}</h3>
  )
}

export function SidebarGroupContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export function SidebarMenu({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-1">{children}</ul>
}

export function SidebarMenuItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>
}

export function SidebarMenuButton({
  children,
  asChild = false,
  ...props
}: {
  children: React.ReactNode
  asChild?: boolean
  [key: string]: any
}) {
  const Comp = asChild ? React.Fragment : "button"
  const { close } = useSidebar()
  const isMobile = useMobile()
  
  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) close()
    props.onClick?.(e)
  }
  
  return (
    <Comp
      {...(!asChild && {
        ...props,
        onClick: handleClick,
        className: `flex items-center w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
          props.className || ""
        }`,
      })}
    >
      {children}
    </Comp>
  )
}
