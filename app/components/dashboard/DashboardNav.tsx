"use client";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import Container from "../Container";
import DashboardNavItem from "./DashboardNavItem";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
          <Link href="/dashboard">
            <DashboardNavItem
              label="Summary"
              icon={MdDashboard}
              selected={pathname === "/dashboard"}
            />
          </Link>
          <Link href="/dashboard/add-products">
            <DashboardNavItem
              label="Add Product"
              icon={MdLibraryAdd}
              selected={pathname === "/dashboard/add-products"}
            />
          </Link>
          <Link href="/dashboard/manage-products">
            <DashboardNavItem
              label="Manage Products"
              icon={MdDns}
              selected={pathname === "/dashboard/manage-products"}
            />
          </Link>
          <Link href="/dashboard/manage-orders">
            <DashboardNavItem
              label="Manage Orders"
              icon={MdFormatListBulleted}
              selected={pathname === "/dashboard/manage-orders"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default DashboardNav;
