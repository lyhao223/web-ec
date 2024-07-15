import React, { Fragment } from "react";
import shipping from '@/../../assets/content/shipping.jpg';
import Link from "next/link";
const page = () => {
  return (
    <Fragment>
    <div className="relative top-0">
        <img src={shipping.src} className="xl:w-full xl:h-[35rem]"/>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white text-center xl:text-5xl text-xl subpixel-antialiased tracking-wider font-semibold">Shipping & Return</p>
            <div className="flex flex-row items-center justify-center text-white space-x-2">
                <Link href='/' className="underline">Home</Link>
                <span>{">"}</span>
                <span>Shipping & Return</span>
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center my-12 space-y-8 xl:p-0 p-2">
        <div className="flex flex-col items-start justify-start space-y-4 xl:w-[40rem]">
            <h1 className="subpixel-antialiased tracking-widest font-medium xl:text-5xl text-3xl">Covid-19 Update</h1>
            <p>We are shipping orders as usual, with our warehouse team working Monday-Friday while adhering to social distancing regulations.</p>
            <p>DHL have informed us that they are experiencing major delays with both domestic and international shipping as a result of the Covid-19 pandemic.</p>
            <p>Please contact us via Email, Instagram or Facebook if you have any questions regarding the above.</p>
        </div>

        <div className="flex flex-col items-start justify-start space-y-4 xl:w-[40rem]">
            <h1 className="subpixel-antialiased tracking-widest font-medium xl:text-5xl text-3xl">Within Europe</h1>
            <p>All orders are charged a flat rate of EU€7.50</p>
            <p>Orders placed before 9am will usually be dispatched on the same business day.</p>
            <p>Please be mindful that during sale periods, there may be a slight delay in dispatches.</p>
            <p>Delivery takes up to 4 business days most orders are received within 2 business days.</p>
        </div>

        <div className="flex flex-col items-start justify-start space-y-4 xl:w-[40rem]">
            <h1 className="subpixel-antialiased tracking-widest font-medium xl:text-5xl text-3xl">Express Shipping Within Europe</h1>
            <p>We also offer an express shipping option for a fee of €10 per order via the DHL eParcel Express Post network.</p>
            <p>Orders placed before 9am will usually be dispatched on the same business day.</p>
            <p>Please be mindful that during sale periods, there may be a slight delay in dispatches</p>
            <p>Express Post guarantees a next business day delivery for all metropolitan areas in Europe. For regional areas, delivery will take between 2-3 business days.</p>
            <p>Your signature will be requested upon delivery.</p>
            <p>All orders are shipped using DHL and can be traced using the online tracking service sent to you with your order confirmation.</p>
            <p>Please note, where an order is placed during a promotional period, there may be a delay on the date of dispatch due to the high volume of orders received.</p>
            <p>We ship to most international destinations at a flat rate of EU€20.</p>
            <p>Orders placed before 9am will usually be dispatched on the same business day.</p>
            <p>Delivery takes between 10 and 12 working days.</p>
            <p>If you have any questions about shipping, please feel free to contact us.</p>
            <p>Our shipping charges do not include any import taxes and duties that may arise when entering your country. Customers are responsible for payment of such charges and these can't be calculated prior to shipping.</p>
        </div> 

        <div className="flex flex-col items-start justify-start space-y-4 xl:w-[40rem]">
            <h1 className="subpixel-antialiased tracking-widest font-medium xl:text-5xl text-3xl">Please Note</h1>
            <p>Unfortunately due to a number of fraudulent orders, Somedays reserves the right to request identification material from international orders, or where a credit card origin is not that of the destination country.</p>
            <p>This may include a scan of your Drivers Licence, Passport and the Credit Card used for the transaction, we appreciate your co-operation.</p>

        </div>       
    </div>
    </Fragment>
  );
};

export default page;
