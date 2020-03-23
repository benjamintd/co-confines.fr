import React from "react";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

const iconParams = {
  size: 40,
  iconFillColor: "#767392",
  bgStyle: { fill: "none" }
};

export default () => (
  <>
    <div className="text-center pb-2 font-monospace text-gray-800">
      Vous aimez Coconfinés ? Partagez cette page autour de vous.
    </div>
    <div className="flex max-w-xl mx-auto justify-around py-4">
      <EmailShareButton
        url={"https://co-confines.fr"}
        subject="Coconfinés"
        body={`Voici une liste de ressources pour mieux vivre le confinement.`}
      >
        <EmailIcon {...iconParams} />
      </EmailShareButton>
      <LinkedinShareButton
        url={"https://co-confines.fr"}
        title={`Une liste de ressources pour mieux vivre le confinement.`}
        summary="Ce site répertorie des ressources fiables pour mieux vivre le confinement."
      >
        <LinkedinIcon {...iconParams} />
      </LinkedinShareButton>
      <FacebookShareButton
        url={"https://co-confines.fr"}
        quote={`Voici une liste de ressources pour mieux vivre le confinement !`}
      >
        <FacebookIcon {...iconParams} />
      </FacebookShareButton>
      <TwitterShareButton
        url={"https://co-confines.fr"}
        title={`Une liste de ressources pour mieux vivre le confinement #coconfinés`}
      >
        <TwitterIcon {...iconParams} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={"https://co-confines.fr"}
        title={`Une liste de ressources pour mieux vivre le confinement.`}
        separator=" "
      >
        <WhatsappIcon {...iconParams} />
      </WhatsappShareButton>
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
  </>
);
