"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";
import AccountDetail from "../UI/Component/Account/Detail/AccountDetail";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (!session) {
    return <div className="p-32"><p>Something went wrong</p></div>;
  }
  return <><AccountDetail /></>;
};

export default Page;
