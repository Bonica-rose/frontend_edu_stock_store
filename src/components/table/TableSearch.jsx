const TableSearch = ({ search, setSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-400 rounded-sm px-2 py-1 w-64 outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-[14.5px]"
        />
    );
};

export default TableSearch;