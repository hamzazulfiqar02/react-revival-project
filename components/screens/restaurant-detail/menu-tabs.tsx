"use client"

interface MenuTabsProps {
  tabs: {
    id: string
    name: string
    count: number
  }[]
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function MenuTabs({ tabs, activeTab, setActiveTab }: MenuTabsProps) {
  return (
    <div className="mb-6">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-3 text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? "text-Black70 border-b-2 border-Black90 font-semibold"
                : "text-Black70 hover:text-Black70"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>
    </div>
  )
}
