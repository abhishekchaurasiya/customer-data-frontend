import { ChevronLeft, ChevronRight } from "lucide-react";
import { userContext } from "../context/CustomerContext";

const Pagination = () => {
  const { customers, currentPage, setCurrentPage, totalPages, totalRecords } =
    userContext();
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-100">
          Showing {customers.length} of {totalRecords} records
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
            className="p-2 border border-gray-300 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 hover:text-slate-950"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm text-gray-100">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={currentPage === totalPages}
            className="p-2 border border-gray-300 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 hover:text-slate-950"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
