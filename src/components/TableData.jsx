/* eslint-disable no-unused-vars */
import React from "react";
import { userContext } from "../context/CustomerContext";

const TableData = () => {
  const { formatDate, customers, loading } = userContext();
  return (
    <>
      <table className="w-full">
        <thead className="bg-gray-700  ">
          <tr>
            <th className="tableHead">S_NO</th>
            <th className="tableHead">Customer Name</th>
            <th className="tableHead">Customer Email</th>
            <th className="tableHead">Mobile</th>
            <th className="tableHead">Date of Birth</th>
            <th className="tableHead">Created</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : customers.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                No customers found
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <tr
                key={customer.s_no}
                className={`hover:bg-gray-800 hover:text-white transition ease-in duration-200`}
              >
                <td className="tableData  ">{customer.s_no}</td>
                <td className="tableData ">{customer.name_of_customer}</td>
                <td className="tableData ">{customer.email}</td>
                <td className="tableData ">{customer.mobile_number}</td>
                <td className="tableData ">{formatDate(customer.dob)}</td>
                <td className="tableData ">
                  {formatDate(customer.created_at)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
