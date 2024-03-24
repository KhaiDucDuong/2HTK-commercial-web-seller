"use client";
import Heading from "@/app/components/Heading";
import { products } from "@/utils/products";
import { DataGrid } from "@mui/x-data-grid";
import {Product} from '@prisma/client'
interface ManageProductsClientProps {}

const ManageProductsClient: React.FC<ManageProductsClientProps> = () => {
  let rows: any[];
  if (products)
    return (
      <div className="max-w-[1150px] m-auto text-xl">
        <div className="mb-4 mt-8">
          <Heading title="Manage Products" center />
        </div>
        <div style={{height: 600, width:"100%"}}>
          {/* <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 9 },
              },
            }}
            pageSizeOptions={[9, 20]}
            checkboxSelection
          /> */}
        </div>
      </div>
    );
};

export default ManageProductsClient;
