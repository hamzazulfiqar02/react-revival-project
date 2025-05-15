import { DataTable } from "./data-table"
import { SectionHeader } from "./section-header"

interface RedemptionData {
  dealId: string
  claimedUsers: number
  totalDinners: number
  totalBill: number
  dateTime: string
}

interface RedemptionTableProps {
  data: RedemptionData[]
}

export function RedemptionTable({ data }: RedemptionTableProps) {
  const columns = [
    {
      key: "dealId",
      header: "Deal ID",
    },
    {
      key: "claimedUsers",
      header: "Claimed SM Per Table",
      isToolTip: true,
      toolTip: "Number of Super Mondays diners who claimed the BOGO offer during this visit."
    },
    {
      key: "totalDinners",
      header: "Total Dinners",
    },
    {
      key: "totalBill",
      header: "Total Bill Amount",
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    {
      key: "dateTime",
      header: "Date & Time",
      width: "20%",
    },
  ]

  return (
    <div className="mt-8">
      <SectionHeader
        title="Offer Redemption Overview"
        tooltip="This table shows the redemption details for your restaurant's offers"
      />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
