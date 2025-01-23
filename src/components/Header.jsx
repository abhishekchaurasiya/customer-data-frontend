import { RefreshCw, Search } from "lucide-react";
import { userContext } from "../context/CustomerContext";

const Header = () => {
  const {
    setRefreshKey,
    search,
    handleSearch,
    handleFilterFieldChange,
    filterField,
    filterOptions,
    filterValue,
    setFilterValue,
    setPageSize,
    pageSize,
  } = userContext();
  return (
    <div className="p-6 border-b border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-200">
          Customer Management
        </h2>
        <button
          onClick={() => setRefreshKey((k) => k + 1)}
          className="p-2 hover:bg-gray-600 text-white rounded-full"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers with Name and Email..."
            value={search}
            onChange={handleSearch}
            className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <input
            type="number"
            placeholder="Set page limit..."
            className="text-center px-2 w-20 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <select
            value={filterField}
            onChange={handleFilterFieldChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Filter by...</option>
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <input
            type={filterField === "mobile_number" ? "tel" : "text"}
            placeholder="Filter value..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
