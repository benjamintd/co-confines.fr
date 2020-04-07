import React from "react";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

const iconParams = {
  size: 40,
  iconFillColor: "#767392",
  bgStyle: { fill: "none" },
};

export default () => (
  <div className="pt-8">
    <div className="text-center pb-2 font-monospace text-gray-800">
      Vous aimez Coconfinés ? Retrouvez-nous sur les réseaux.
    </div>
    <div className="flex max-w-xl mx-auto justify-around items-center py-4">
      <a href="mailto:contact@co-confines.fr">
        <EmailIcon {...iconParams} />
      </a>
      <a href="https://www.linkedin.com/company/coconfin%C3%A9s/">
        <LinkedinIcon {...iconParams} />
      </a>
      <a href="https://www.facebook.com/Coconfin%C3%A9s-109640104012023/">
        <FacebookIcon {...iconParams} />
      </a>
      <a href="https://twitter.com/CoConfines">
        <TwitterIcon {...iconParams} />
      </a>
      <a href="https://www.instagram.com/coconfines/" className="w-5 h-5">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 169.063 169.063"
          fill="#767392"
        >
          <path
            d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"
          />
          <path
            d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
          />
          <path
            d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"
          />
        </svg>
      </a>
    </div>
    <div className="text-center font-monospace text-gray-800 pb-12">
      Une idée d'amélioration ?{" "}
      <a
        className="underline text-gray-800 hover:text-gray-600"
        href="/suggestion"
      >
        Dites-le nous ici
      </a>
      &nbsp;!
    </div>
    <div className="py-4 text-center bg-gray-200 text-gray-700">
      Made with ❤︎ depuis chez nous ;)
    </div>
  </div>
);
