/* eslint-disable no-unused-vars */
import { ChevronLeft, ChevronRight, Table } from "lucide-react";
import Header from "./Header";
import { userContext } from "../context/CustomerContext";
import TableData from "./TableData";
import Pagination from "./Pagination";

const Customer = () => {
  const { error } = userContext();

  return (
    <div className="lg:p-8 bg-slate-900 h-screen">
      <div className=" lg:rounded-md shadow-md bg-slate-800">
        <Header />

        {/* Main content */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
              {error}
            </div>
          )}
          <div className="overflow-x-auto">
            <TableData />
          </div>

          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Customer;
