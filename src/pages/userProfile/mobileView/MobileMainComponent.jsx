import React, { useState } from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import ReservationUi from './ui/ReservationUi';

const  MobileMainComponent = () => {

const [activeTab, setActiveTab] = useState('Reservation')

const data = [
    {
        value: 'Reservation',
        html: <ReservationUi />,
    },
    {
        value: 'Saved',
        html: 'hello',
    },
    {
        value: 'Favorites',
        html: 'hello',
    },
    {
        value: 'Notify',
        html: 'hollw',
    }
]

  return (
    <div className='w-full h-auto'>

<Tabs value={activeTab}>

<TabsHeader  className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
indicatorProps={{
className:
"bg-transparent border-b-2 border-red-700 shadow-none rounded-none",
}}>
{data.map(({ value }) => (
<Tab
key={value}
value={value}
onClick={() => setActiveTab(value)}
className={activeTab === value ? "text-red-700 text-lg pb-5" : "text-lg pb-5"}
>
{value}
</Tab>
))}
</TabsHeader>

<TabsBody>
{data.map(({ value, html }) => (
<TabPanel key={value} value={value}>
<div className="h-auto">
{
html
}
</div>
</TabPanel>
))}
</TabsBody>
</Tabs>

    </div>
  )
}

export default MobileMainComponent