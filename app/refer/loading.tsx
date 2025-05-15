import { Skeleton } from "@/components/ui/skeleton"

export default function ReferLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-6">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-16" />
      </div>

      {/* Page Title skeleton */}
      <Skeleton className="h-10 w-48 mx-auto mb-8" />

      {/* Referral Section skeleton */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
        <Skeleton className="h-6 w-64 mb-6" />

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image skeleton */}
          <div className="w-full md:w-1/3">
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>

          {/* Content skeleton */}
          <div className="w-full md:w-2/3">
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-3/4 mb-6" />

            {/* Sharing Options skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Referral History skeleton */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-10 w-full md:w-64 rounded-lg" />
        </div>

        {/* Table skeleton */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">
                  <Skeleton className="h-4 w-20" />
                </th>
                <th className="text-left py-3 px-4">
                  <Skeleton className="h-4 w-16" />
                </th>
                <th className="text-left py-3 px-4">
                  <Skeleton className="h-4 w-16" />
                </th>
                <th className="text-left py-3 px-4">
                  <Skeleton className="h-4 w-20" />
                </th>
                <th className="text-left py-3 px-4">
                  <Skeleton className="h-4 w-16" />
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((item) => (
                <tr key={item} className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <Skeleton className="h-4 w-32" />
                  </td>
                  <td className="py-3 px-4">
                    <Skeleton className="h-4 w-20" />
                  </td>
                  <td className="py-3 px-4">
                    <Skeleton className="h-4 w-20" />
                  </td>
                  <td className="py-3 px-4">
                    <Skeleton className="h-6 w-24 rounded-full" />
                  </td>
                  <td className="py-3 px-4">
                    <Skeleton className="h-4 w-16" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination skeleton */}
        <div className="flex justify-between items-center mt-6">
          <Skeleton className="h-4 w-40" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
