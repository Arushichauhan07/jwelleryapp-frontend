import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, XAxis, YAxis, Line, Legend  } from "recharts";

const AdminHome = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    let greeting = "Hello";

    if (hours < 12) greeting = "Good Morning";
    else if (hours < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    const dashboardData = {
        users: 1200,
        products: 320,
        sales: 54000,
        newLaunches: 12,

        salesByCategory: [
            { name: "Electronics", value: 400 },
            { name: "Clothing", value: 300 },
            { name: "Home", value: 200 },
            { name: "Others", value: 100 },
        ],

        salesTrend: [
            { name: "Jan", sales: 4000 },
            { name: "Feb", sales: 3000 },
            { name: "Mar", sales: 5000 },
            { name: "Apr", sales: 7000 },
        ],
    };

    const StatCard = ({ title, value }) => (
        <div className="bg-[#520a10] rounded-xl p-6 shadow-sm">
            <h3 className="text-lg text-white">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );


    const userData = [
        { name: "Active", value: 80 },
        { name: "Inactive", value: 20 },
    ];

    const COLORS = ["#5E0006", "#d4a017"];
    return (
        <div className=''>

            {/* **************************** INTO SECTION **************************** */}
            <div className='h-80 relative overflow-hidden rounded-xl'>
                <img src="https://i.pinimg.com/736x/af/e2/9d/afe29dec99e6d0a20616fd7abb79aefa.jpg" alt="Admin Avatar" className="absolute inset-0 h-full w-full object-cover scale-110" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex flex-col justify-between p-5 text-white">

                    {/* Top section */}
                    <div>
                        <h1 className="text-6xl font-bold">
                            {time.toLocaleTimeString()}
                        </h1>
                        <p className="text-md opacity-80">
                            {time.toDateString()}
                        </p>
                    </div>

                    {/* Bottom section */}
                    <div>
                        <h2 className="text-4xl font-semibold">{greeting}</h2>
                        <p className="text-sm opacity-80">Arushi Chauhan</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4 my-5">

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <StatCard title="Users" value={dashboardData.users} />
                    <StatCard title="Products" value={dashboardData.products} />
                    <StatCard title="Sales" value={`₹${dashboardData.sales}`} />
                    <StatCard title="Launches" value={dashboardData.newLaunches} />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Line Chart */}
                    <div className="bg-white rounded-xl p-4 shadow-sm h-100 col-span-2">
                        <h3 className="mb-3 font-semibold">Sales Trend</h3>
                        <ResponsiveContainer width="100%" height="90%">
                            <LineChart data={dashboardData.salesTrend}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="sales" stroke="#6366f1" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm h-100">
                        <h3 className="mb-3 font-semibold">User Status</h3>

                        <ResponsiveContainer width="100%" height="90%">
                            <PieChart>
                                <Pie
                                    data={userData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    dataKey="value"
                                    label
                                >
                                    {userData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>

                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AdminHome