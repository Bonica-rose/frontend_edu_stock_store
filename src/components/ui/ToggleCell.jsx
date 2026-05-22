import React from "react";

const ToggleCell = ({ value, onChange, activeLabel = "active", inactiveLabel = "inactive" }) => {
    const isActive = value === "active";

    return (
        <button
        onClick={onChange}
        className={`px-2 py-1 rounded text-sm font-medium  ${
            isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
        >
        {isActive ? activeLabel : inactiveLabel}
        </button>
    );
};

export default ToggleCell;