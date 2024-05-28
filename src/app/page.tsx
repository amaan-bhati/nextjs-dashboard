/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "Rs 345,231.89",
    discription: "+31.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+49350",
    discription: "+180.49% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+80,234",
    discription: "+45% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+233",
    discription: "+431 since last hour",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Aloo Kumar",
    email: "sattebaj@email.com",
    saleAmount: "+RS 25348,999.00"
  },
  {
    name: "Amaan Bhati",
    email: "mail@amaanbhati.tech",
    saleAmount: "+RS 189,999.00"
  },
  {
    name: "Ravi",
    email: "ravi@email.com",
    saleAmount: "+RS 42,99.00"
  },
  {
    name: "Shivam",
    email: "shiva@email.com",
    saleAmount: "+RS 329.00"
  },
 
  {
    name: "Shekhar",
    email: "shekhar@email.com",
    saleAmount: "+RS 39.00"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 500569 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
