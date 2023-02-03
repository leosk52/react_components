import { useState } from "react";
import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowUp />
          <GoArrowDown />
        </div>
      );
    }

    if (sortOrder === null) {
      return (
        <div>
          <GoArrowUp />
          <GoArrowDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          {" "}
          <GoArrowUp />{" "}
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          {" "}
          <GoArrowDown />{" "}
        </div>
      );
    }
  };

  const handleClick = (label) => {

    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-300"  onClick={() => handleClick(column.label)}>
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    console.log(sortBy);
    const { sortValue } = config.find((column) => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

export default SortableTable;
