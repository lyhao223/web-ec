"use client"
import { Accordion, AccordionDetails, AccordionSummary, Pagination, Stack } from '@mui/material'
import { useSession } from 'next-auth/react';
import React, { use, useEffect, useState } from 'react'
import { FaArrowDown } from "react-icons/fa";
interface Item {
  id: string;
  title: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  orderID: string;
  items: Item[];
  totalAmount: number;
  paymentMethod: string;
}
const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const { data: session, status } = useSession();
    const fetchOrders = async() => {
        try {
           const res = await fetch('/api/checkout', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
            if(res.ok) {
                const data = await res.json()
                setOrders(data.orders)
                console.log(orders)
            }else{
                console.error('Failed to fetch orders')
            }
        } catch (error) {
            console.error('Failed to fetch orders')
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            fetchOrders()
        }
    }, [status])

    const orderPerPages = 4;
    const startIndex = (currentPage - 1) * orderPerPages;    
    const paginatedOrder = orders.slice(startIndex, startIndex + orderPerPages);
    const totalPages = Math.ceil(orders.length / orderPerPages);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };
  return (
    <div className='flex flex-col items-start justify-start space-y-5'>
      <div className='flex items-start justify-start'>
        <h1 className='text-4xl font-semibold tracking-widest subpixel-antialiased'>Your Orders</h1>
      </div>
      <div className='flex flex-col items-center justify-center space-y-4'>
      {orders.length > 0 ? (
          paginatedOrder.map((order, index) => (
            <Accordion key={order.orderID} className="w-[40rem]">
              <AccordionSummary expandIcon={<FaArrowDown />}>
                <h1>Order {startIndex + index + 1}</h1>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col items-start justify-start space-y-2">
                  <h1>Order ID: {order.orderID}</h1>
                  {/* Add other details as needed */}
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h2>Item {itemIndex + 1}: {item.title}</h2>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price}</p>
                      <img src={item.image} alt={item.title} width="50" />
                    </div>
                  ))}
                  <h1>Total Amount: ${order.totalAmount.toFixed(2)}</h1>
                  <h1>Payment Method: {order.paymentMethod}</h1>
                </div>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>

      <div className="flex items-center justify-center my-12">
          <Stack>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handleChange}
              color="primary"
              size="large"
            />
          </Stack>
        </div>
    </div>
  )
}

export default Orders
