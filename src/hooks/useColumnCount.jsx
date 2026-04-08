import { useEffect, useState } from "react";

function useColumnCount() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    function updateColumns() {
      if (window.innerWidth >= 1440) {
        setColumns(4);
      }
      else if (window.innerWidth >= 768) {
        setColumns(2);
      }
      else {
        setColumns(1);
      }
    }

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return columns;
}

export default useColumnCount;