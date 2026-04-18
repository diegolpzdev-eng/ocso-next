
"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps{
    icon: ReactNode
    path: string
}

export const NavItem = ({icon, path}: NavItemProps) => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <Link href={path} className="w-full flex justify-center">
            <span className={pathName === path ? "bg-orange-400 w-10/12 flex justify-center rounded-md transition-colors py-2" : "w-10/12 py-2"}>{icon}</span>
        </Link>
    )
}

export default NavItem