import React from "react";
import NeighborsIcon from "./NeighborsIcon";

export default () => {
  return (
    <div className="font-monospace p-4 text-gray-800">
      <div className="w-10/12 max-w-3xl mx-auto text-center">
        <p>Nous sommes tous</p>
        <h1 className="text-accent-500 font-title lg:text-6xl md:text-5xl text-3xl font-bold py-3">
          coConfinés.
        </h1>
        <p className="font-bold">
          Les virus s'affrontent par la science et par le savoir.
        </p>
        <p>
          En tant que citoyens, nous avons le pouvoir de contribuer à diffuser
          une information fiable, des bonnes pratiques, et des expériences
          inspirantes.
        </p>
        <div className="flex justify-center lg:py-12 py-8">
          <NeighborsIcon />
        </div>

        <div className="flex flex-wrap items-center justify-around">
          <CTA>
            <span className="font-bold">Consultez</span> des informations
            fiables mises à jour régulièrement.
          </CTA>
          <CTA>
            <span className="font-bold">Contribuez</span> à compiler le savoir
            pour faire face quotidiennement au défi du COVID-19.
          </CTA>
        </div>
      </div>
    </div>
  );
};

const CTA = ({ children }) => (
  <div className="flex pb-8">
    <svg
      className="mr-2 align-baseline mt-1"
      width="33"
      height="18"
      viewBox="0 0 33 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 9H32M32 9L24.0137 1M32 9L24.0137 17" stroke="#3F3D56" />
    </svg>
    <div className="w-64 text-left">{children}</div>
  </div>
);
