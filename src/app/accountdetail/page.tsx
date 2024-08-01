"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";
import AccountDetail from "../UI/Component/Account/Detail/AccountDetail";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
   const loadingIcon = (
    <div className="relative top-0 p-32 h-96">
      <button
        type="button"
        className="bg-gray-300 flex flex-row items-center justify-center space-x-2 p-2 rounded-lg"
        disabled>
        <AiOutlineLoading3Quarters className="animate-spin" />
        <span>Processing...</span>
      </button>
    </div>
  );
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

 
  return <>{!session ? loadingIcon: <AccountDetail />}</>;
};

export default Page;
