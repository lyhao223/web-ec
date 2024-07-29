import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
const AccountDetail = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-32 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <Link href="/accountdetail" className="block text-sm hover:underline">
          Detail
        </Link>
        <Link
          href="/accountdetail/orders"
          className="block text-sm hover:underline">
          Orders
        </Link>
      </div>
      <div className="" onClick={() => signOut()}>
        Log out
      </div>
    </div>
  );
};

export default AccountDetail;
