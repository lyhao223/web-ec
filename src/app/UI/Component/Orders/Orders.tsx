"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Pagination,
  Stack,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
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
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders);
        setLoading(true);
      } else {
        console.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchOrders();
    }
  }, [status]);

  const loadingIcon = (
    <button
      type="button"
      className="bg-gray-600 flex flex-row items-center justify-center space-x-2 p-2 rounded-lg"
      disabled>
      <AiOutlineLoading3Quarters className="animate-spin" />
      <span>Processing...</span>
    </button>
  );

  const router = useRouter();
  useEffect(() => {
    if (!session && status === "unauthenticated") {
      setLoading(false);
      router.push("/login");
    }
  }, [session, status]);
  const orderPerPages = 4;
  const startIndex = (currentPage - 1) * orderPerPages;
  const paginatedOrder = orders.slice(startIndex, startIndex + orderPerPages);
  const totalPages = Math.ceil(orders.length / orderPerPages);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <>
      {!session ? (
        loadingIcon
      ) : (
        <div className="flex flex-col items-start justify-start space-y-5">
          <h1 className="text-xl xl:text-4xl 2xl:text-4xl lg:text-3xl font-semibold tracking-widest subpixel-antialiased">
            Your Orders
          </h1>
          <div className="flex flex-col items-center justify-center 2xl:mx-0 xl:mx-60 lg:mx-10 md:mx-7 mx-0">
            <div className="flex flex-col items-start justify-start 2xl:items-center 2xl:justify-center xl:items-center xl:justify-center lg:items-center lg:justify-center space-y-4">
              {orders.length > 0 ? (
                paginatedOrder.map((order, index) => (
                  <Accordion
                    key={order.orderID}
                    className="w-80 2xl:w-[40rem] xl:w-[40rem] lg:w-[40rem] md:w-[36rem]">
                    <AccordionSummary expandIcon={<FaArrowDown />}>
                      <h1 className="subpixel-antialiased text-lg font-medium tracking-wider">
                        Order {startIndex + index + 1}
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="flex flex-col items-start justify-start space-y-6">
                        <h1 className="text-sm 2xl:text-lg xl:text-lg lg:text-lg md:text-lg font-semibold text-red-600 tracking-tight">
                          Order ID: {order.orderID.toUpperCase()}
                        </h1>
                        {/* Add other details as needed */}
                        {order.items.map((item, itemIndex) => (
                          <Link
                            href={`/shop/productID/${item.id}`}
                            key={itemIndex}
                            className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row items-center justify-start 2xl:items-center xl:items-center lg:items-center md:items-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-center space-x-0 space-y-4 2xl:space-x-10 xl:space-x-10 lg:space-x-10 md:space-x-10 border p-3 2xl:px-3 xl:px-3 lg:px-3 md:px-3 rounded-lg shadow-lg 2xl:w-[38rem] 2xl:h-32 xl:w-[38rem] xl:h-32 lg:w-[38rem] lg:h-32 md:w-full md:h-32  text-sm">
                            <h2 className="text-nowrap hidden xl:block 2xl:block lg:block md:block">
                              Item {itemIndex + 1}
                            </h2>
                            <img src={item.image} alt={item.title} width="50" />
                            <h2 className="truncate w-64">{item.title}</h2>
                            <p className="text-nowrap ">
                              Quantity: {item.quantity}
                            </p>
                            <p className="text-nowrap">Price: ${item.price}</p>
                          </Link>
                        ))}
                        <div className="flex flex-col items-start justify-start space-y-4">
                          <h1>
                            Total Amount:{" "}
                            <span className="text-lg font-medium text-red-500">
                              ${order.totalAmount.toFixed(2)}
                            </span>
                          </h1>
                          <h1>
                            Payment Method:{" "}
                            <span className="text-lg font-medium text-red-500">
                              {order.paymentMethod}
                            </span>
                          </h1>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <p className="flex items-center justify-center text-5xl font-medium text-red-500">
                  No orders found.
                </p>
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
        </div>
      )}
    </>
  );
};

export default Orders;
