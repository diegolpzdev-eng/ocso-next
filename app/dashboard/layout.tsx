import Header from "./_components/header"
import Sidebar from "./_components/_sidebar/sidebar"

export default function LayoutDashboard({children, count
}:Readonly<{
  children: React.ReactNode;
  count: React.ReactNode;
}>){
    return <div className="bg-orange-50">
        <Header />
        <div className="flex flex-row items-center">
            <Sidebar />
            {children}
            {count}
        </div>
    </div>
}