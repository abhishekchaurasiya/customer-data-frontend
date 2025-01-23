/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const BaseUrl = `https://customer-data-backend-3ifx.onrender.com/api`;

const CustomerContext = createContext();
export const userContext = () => useContext(CustomerContext);

const CustomerContextProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [sortField, setSortField] = useState("s_no");
  const [sortOrder, setSortOrder] = useState("asc");
  const [refreshKey, setRefreshKey] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  if (pageSize < 1) {
    setPageSize(10);
  }

  const fetchCustomerData = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: currentPage,
        limit: pageSize ? pageSize : 10,
        sortField,
        sortOrder,
      });

      if (search) {
        params.append("search", search);
      }
      if (filterField && filterValue) {
        params.append("filterField", filterField);
        params.append("filterValue", filterValue);
      }

      const response = await axios.get(`${BaseUrl}/customers?${params}`);
      setCustomers(response.data.data);
      setTotalPages(response.data.metadata.totalPages);
      setTotalRecords(response.data.metadata.totalCustomers);
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchCustomerData();
  }, [
    currentPage,
    search,
    filterField,
    filterValue,
    sortField,
    sortOrder,
    refreshKey,
    pageSize,
  ]);

  const filterOptions = [
    { value: "name_of_customer", label: "Customer Name" },
    { value: "email", label: "Email" },
    { value: "mobile_number", label: "Mobile Number" },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterFieldChange = (e) => {
    setFilterField(e.target.value);
    setFilterValue("");
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const value = {
    handleFilterFieldChange,
    handleSearch,
    formatDate,
    fetchCustomerData,
    filterOptions,
    customers,
    setCustomers,
    error,
    setError,
    loading,
    setLoading,
    search,
    setSearch,
    filterField,
    setFilterField,
    filterValue,
    setFilterValue,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    totalRecords,
    setTotalRecords,
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
    refreshKey,
    setRefreshKey,
    setPageSize,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
