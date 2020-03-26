import React from "react";
import NeighborsIcon from "./NeighborsIcon";
import Logo from "./Logo";

export default () => {
  return (
    <div className="font-monospace p-4 text-gray-800">
      <div className="w-10/12 max-w-3xl mx-auto text-center">
        <p>Nous sommes tous</p>
        <Logo className="text-accent-500 my-4 lg:h-16 md:h-10 h-8 mx-auto"></Logo>
        <p className="font-bold py-2">À nous d'en tirer parti.</p>
        <p className="py-2">
          Les virus s'affrontent par la science et par le savoir.
        </p>
        <p className="py-2">
          Nous sommes un{" "}
          <a className="underline hover:text-gray-600" href="/about">
            collectif citoyen
          </a>{" "}
          qui veut diffuser une information fiable, des bonnes pratiques et des
          expériences inspirantes. Venez découvrir notre sélection&nbsp;!
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
            <span className="font-bold">Contribuez</span> à compiler les
            ressources pour faire face quotidiennement au défi du COVID-19.
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
