const TablePagination = ({
    currentPage,
    totalPages,
    setCurrentPage,
}) => {
    return (
        <div className="flex items-center gap-2 mt-4">
            <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
                className="border border-gray-400 hover:border-black hover:bg-black hover:text-white p-2 rounded-sm text-[14.5px] cursor-pointer"
            >
                Prev
            </button>

            <span className="text-[14.5px]">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
                className="border border-gray-400 hover:border-black hover:bg-black hover:text-white p-2 rounded-sm text-[14.5px] cursor-pointer"
            >
                Next
            </button>
        </div>
    );
};

export default TablePagination;