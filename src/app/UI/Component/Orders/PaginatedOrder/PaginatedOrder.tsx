import React, { useState } from 'react'

const PaginatedOrder = ({orders} : any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const orderPerPages = 5;
  const startIndex = (currentPage - 1) * orderPerPages;
  const paginatedBlog = orders.slice(startIndex, startIndex + orderPerPages);
  
  const totalPages = Math.ceil(orders.length / orderPerPages);
  return (
    <>
      
    </>
  )
}

export default PaginatedOrder
