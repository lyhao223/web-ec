"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (!session) {
    return <p>Something went wrong</p>;
  }
  return <>Welcome {session.user?.name}</>;
};

export default Page;
