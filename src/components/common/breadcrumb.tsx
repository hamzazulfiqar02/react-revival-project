
import React from "react"
import { Link } from "react-router-dom"

interface Props {
  screen: string
  subScreen?: string | null
}

const Breadcrumb = ({ screen, subScreen }: Props) => {
  return (
    <div className="flex items-center italic text-sm text-gray-500 mb-6">
      <Link to="/" className="hover:text-primary">
        Homepage
      </Link>
      <span className="mx-2">›</span>
      <span>{screen}</span>
      {subScreen && <span className="mx-2">›</span>}
      {subScreen && <span>{subScreen}</span>}
    </div>
  )
}

export default Breadcrumb
