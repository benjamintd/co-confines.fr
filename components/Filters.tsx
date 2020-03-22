import React, { useRef, useState } from "react";
import classnames from "classnames";
import useComponentSize from "@rehooks/component-size";

interface IProps {
  filters: IFilters;
  setFilters: (f: IFilters) => void;
}

export default (props: IProps) => {
  let ref = useRef(null);
  let size = useComponentSize(ref);
  return (
    <div ref={ref} className="w-full">
      {size.width < 768 ? (
        <MobileFilters {...props} />
      ) : (
        <DesktopFilters {...props} />
      )}
    </div>
  );
};

const DesktopFilters = ({ filters, setFilters }: IProps) => {
  return (
    <div className="w-11/12 mx-auto flex overflow-x-scroll lg:text-md text-sm">
      {Object.keys(filters).map(k => (
        <div
          className={classnames(
            "cursor-pointer m-2 p-2 rounded-full whitespace-no-wrap",
            {
              "bg-accent-400 text-white": filters[k]
            }
          )}
          key={k}
          onClick={() => {
            setFilters({ ...filters, [k]: !filters[k] });
          }}
        >
          {k}
        </div>
      ))}
    </div>
  );
};

const MobileFilters = ({ filters, setFilters }: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown inline-block relative m-3">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span>Filtrer</span>
      </button>
      <ul
        className={classnames("absolute text-gray-700 pt-1 z-50 shadow-md", {
          hidden: !open,
          block: open
        })}
      >
        {Object.keys(filters).map((k, i) => (
          <li
            className={classnames(
              "cursor-pointer py-2 px-4 whitespace-no-wrap",
              {
                "bg-accent-500 text-white": filters[k],
                "bg-gray-100 text-gray-700": !filters[k],
                "rounded-t": i === 0,
                "rounded-b": i === Object.keys(filters).length - 1
              }
            )}
            key={k}
            onClick={() => {
              setFilters({ ...filters, [k]: !filters[k] });
            }}
          >
            {k}
          </li>
        ))}
      </ul>
    </div>
  );
};
