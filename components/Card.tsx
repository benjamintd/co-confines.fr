import React, { useEffect, useState } from "react";
import { logEvent } from "../lib/analytics";
import fetch from "isomorphic-unfetch";
import { mutate } from "swr";

export default ({ record }: { record: IRecord }) => {
  let image;
  try {
    image = record["Image de couverture"][0].thumbnails.large.url;
  } catch (error) {
    image = "/og-image.png";
  }

  const trackClick = () => {
    logEvent("linkClick", record.Titre);
  };
  const [currentlyLiked, setCurrentlyLiked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentlyLiked(!!window.localStorage.getItem(record.id));
    }
  }, []);

  return (
    <div className="z-0 shadow bg-white rounded hover:shadow-xl transition transition-all duration-300 hover:scale-105">
      <div
        className="relative w-full h-64 border-b border-gray-300 rounded-t"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <a
          href={record.Lien}
          rel="noopener noreferer"
          target="_blank"
          onClick={trackClick}
        >
          <div
            className="absolute w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.10) 100%)"
            }}
          />
        </a>
        <div
          className="absolute w-full h-10 bottom-0 flex items-center justify-between p-4 text-white font-monospace"
          style={{
            backgroundColor: "rgba(18, 16, 48, 0.2)",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.34)"
          }}
        >
          <div>
            {new Date(record["Last modified time"]).toLocaleDateString(
              "fr-FR",
              { month: "long", day: "numeric" }
            )}
          </div>
          <div
            className="cursor-pointer flex items-center"
            onClick={async e => {
              e.stopPropagation();
              window.localStorage.setItem(
                record.id,
                !currentlyLiked ? "true" : ""
              );
              setCurrentlyLiked(!currentlyLiked);
              if (!currentlyLiked) {
                record.likes += 1;
                await fetch(`/api/like?id=${record.id}`);
              } else {
                record.likes -= 1;
                await fetch(`/api/like?id=${record.id}&unlike=true`);
              }
              mutate("/api/content");
            }}
          >
            <span className="mr-2">{record.likes}</span>
            <Heart filled={currentlyLiked} />
          </div>
        </div>
      </div>
      <div className="p-6">
        <a
          href={record.Lien}
          rel="noopener noreferer"
          target="_blank"
          onClick={trackClick}
        >
          <h1 className="text-center font-bold text-xl pb-3 text-gray-800 hover:text-gray-700">
            {record.Titre}
          </h1>
        </a>
        {record["Type de contenu"] && (
          <p className="uppercase tracking-wide font-monospace text-gray-600 pt-6 pb-2 text-xs">
            {record["Type de contenu"]}
          </p>
        )}
        <p className="leading-normal pb-4">{record.Description}</p>
      </div>

      <div className="p-6 mt-auto flex flex-wrap">
        {record.Thèmes &&
          record.Thèmes.map((theme: string) => (
            <span
              key={theme}
              className="bg-accent-400 text-white font-monospace rounded-full px-3 py-1 text-xs mr-1 mb-1"
            >
              {theme}
            </span>
          ))}
      </div>
    </div>
  );
};

export const Link = () => (
  <svg
    className="mt-2"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 6.41L8.7 16.71C8.6096 16.814 8.49868 16.8982 8.3742 16.9573C8.24972 17.0164 8.11438 17.0491 7.97665 17.0534C7.83892 17.0578 7.70179 17.0336 7.57385 16.9824C7.44592 16.9312 7.32994 16.8541 7.2332 16.756C7.13646 16.6579 7.06104 16.5408 7.01167 16.4122C6.96231 16.2835 6.94007 16.1461 6.94634 16.0084C6.95261 15.8708 6.98726 15.7359 7.04812 15.6123C7.10898 15.4886 7.19474 15.3789 7.3 15.29L17.58 5H14C13.7348 5 13.4804 4.89464 13.2929 4.70711C13.1054 4.51957 13 4.26522 13 4C13 3.73478 13.1054 3.48043 13.2929 3.29289C13.4804 3.10536 13.7348 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V10C21 10.2652 20.8946 10.5196 20.7071 10.7071C20.5196 10.8946 20.2652 11 20 11C19.7348 11 19.4804 10.8946 19.2929 10.7071C19.1054 10.5196 19 10.2652 19 10V6.41ZM17 14C17 13.7348 17.1054 13.4804 17.2929 13.2929C17.4804 13.1054 17.7348 13 18 13C18.2652 13 18.5196 13.1054 18.7071 13.2929C18.8946 13.4804 19 13.7348 19 14V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7C3 5.9 3.9 5 5 5H10C10.2652 5 10.5196 5.10536 10.7071 5.29289C10.8946 5.48043 11 5.73478 11 6C11 6.26522 10.8946 6.51957 10.7071 6.70711C10.5196 6.89464 10.2652 7 10 7H5V19H17V14Z"
      fill="currentColor"
    />
  </svg>
);

export const Heart = ({ filled }: { filled: boolean }) => {
  if (filled) {
    return (
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M13.76 2.75999C14.8974 1.70015 16.4018 1.12317 17.9562 1.15059C19.5106 1.17802 20.9937 1.80771 22.093 2.90702C23.1923 4.00632 23.822 5.4894 23.8494 7.04381C23.8768 8.59822 23.2998 10.1026 22.24 11.24L13.71 19.78C13.617 19.8737 13.5064 19.9481 13.3846 19.9989C13.2627 20.0497 13.132 20.0758 13 20.0758C12.868 20.0758 12.7373 20.0497 12.6154 19.9989C12.4936 19.9481 12.383 19.8737 12.29 19.78L3.75999 11.24C2.70015 10.1026 2.12317 8.59822 2.15059 7.04381C2.17802 5.4894 2.80771 4.00632 3.90702 2.90702C5.00632 1.80771 6.4894 1.17802 8.04381 1.15059C9.59822 1.12317 11.1026 1.70015 12.24 2.75999L13 3.50999L13.76 2.75999Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.149658"
            y="0.149658"
            width="25.7007"
            height="22.9261"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M12.76 2.75999C13.8974 1.70015 15.4018 1.12317 16.9562 1.15059C18.5106 1.17802 19.9937 1.80771 21.093 2.90702C22.1923 4.00632 22.822 5.4894 22.8494 7.04381C22.8768 8.59822 22.2998 10.1026 21.24 11.24L12.71 19.78C12.617 19.8737 12.5064 19.9481 12.3846 19.9989C12.2627 20.0497 12.132 20.0758 12 20.0758C11.868 20.0758 11.7373 20.0497 11.6154 19.9989C11.4936 19.9481 11.383 19.8737 11.29 19.78L2.75999 11.24C1.70015 10.1026 1.12317 8.59822 1.15059 7.04381C1.17802 5.4894 1.80771 4.00632 2.90702 2.90702C4.00632 1.80771 5.4894 1.17802 7.04381 1.15059C8.59822 1.12317 10.1026 1.70015 11.24 2.75999L12 3.50999L12.76 2.75999ZM19.83 9.82999C20.5806 9.07943 21.0022 8.06145 21.0022 6.99999C21.0022 5.93854 20.5806 4.92056 19.83 4.16999C19.4584 3.79835 19.0172 3.50355 18.5316 3.30242C18.046 3.10129 17.5256 2.99777 17 2.99777C15.9385 2.99777 14.9206 3.41943 14.17 4.16999L12.71 5.63999C12.617 5.73372 12.5064 5.80812 12.3846 5.85888C12.2627 5.90965 12.132 5.93579 12 5.93579C11.868 5.93579 11.7373 5.90965 11.6154 5.85888C11.4936 5.80812 11.383 5.73372 11.29 5.63999L9.82999 4.16999C9.07943 3.41943 8.06145 2.99777 6.99999 2.99777C5.93854 2.99777 4.92056 3.41943 4.16999 4.16999C3.41943 4.92056 2.99777 5.93854 2.99777 6.99999C2.99777 8.06145 3.41943 9.07943 4.16999 9.82999L12 17.66L19.83 9.82999Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="-0.850342"
            y="0.149658"
            width="25.7007"
            height="22.9261"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
};
