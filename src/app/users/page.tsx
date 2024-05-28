"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "method",
    header: "Method"
  }
];

const data: Payment[] = [
  {
    name: "Amaan Bhati",
    email: "mail@amaanbhati.tech",
    lastOrder: "2024-04-03",
    method: "Google Pay"
  },
  {
    name: "Shekhar Reddy",
    email: "Shekhar@gmail.com",
    lastOrder: "2024-02-15",
    method: "PayPal"
  },
  {
    name: "Shivam",
    email: "Shivam@gmail.com",
    lastOrder: "2024-03-20",
    method: "Stripe"
  },
  {
    name: "Ravi Tiwari",
    email: "ravi@gmail.com",
    lastOrder: "2024-04-10",
    method: "Phonepe"
  },
  {
    name: "Atishay Triparthi",
    email: "atishay@gmail.com",
    lastOrder: "2024-05-05",
    method: "Cash"
  },
  {
    name: "Atharv Gupta",
    email: "atharv@gmail.com",
    lastOrder: "2024-06-18",
    method: "Bank Transfer"
  },
  {
    name: "Vaibhav Tiwari",
    email: "tiwari@gmail.com",
    lastOrder: "2024-07-22",
    method: "Paytm"
  },
  {
    name: "Utkrisht Jaiswal",
    email: "Utkrisht@gmail.com",
    lastOrder: "2024-08-30",
    method: "Apple Pay"
  },
  {
    name: "Suvojit Ghosh",
    email: "suvo@gmail.com",
    lastOrder: "2024-09-12",
    method: "Google Pay"
  },
  {
    name: "Saumya Ranjan Jena",
    email: "odio@gmail.com",
    lastOrder: "2024-10-25",
    method: "Cryptocurrency"
  },
  {
    name: "Alok Kumar",
    email: "godfather@gmail.com",
    lastOrder: "2024-11-05",
    method: "Satte ka paisa"
  },
  {
    name: "Paul",
    email: "kaala@gmail.com",
    lastOrder: "2024-12-08",
    method: "GooglePay"
  },
  {
    name: "Ankush",
    email: "gargi@gmail.com",
    lastOrder: "2024-01-18",
    method: "Udhaari"
  },
  {
    name: "Abhyuday",
    email: "harami@gmail.com",
    lastOrder: "2024-02-22",
    method: "Valorant"
  },
  {
    name: "Alok",
    email: "alok@gmail.com",
    lastOrder: "2024-03-30",
    method: "Stripe"
  }
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
