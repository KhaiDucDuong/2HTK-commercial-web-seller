import DashboardNav from "../components/dashboard/DashboardNav";

const AdminLayout = ({children}:{children: React.ReactNode}) => {
    return ( 
    <div>
        <DashboardNav/>
        {children}

    </div> );
}
 
export default AdminLayout;