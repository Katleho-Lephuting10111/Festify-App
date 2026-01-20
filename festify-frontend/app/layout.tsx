import './global.css'
import Navbar from '@/components/Navbar'


export const metadata = {
title: 'Festify',
description: 'Discover and create music events',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-black text-white min-h-screen">
<Navbar />
<main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
</body>
</html>
)
}