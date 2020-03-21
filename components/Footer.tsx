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
    <div className="flex max-w-xl mx-auto justify-around p-4 pb-12">
      <EmailShareButton
        url={"https://co-confines.fr"}
        subject="CoConfinés"
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
    <div className="py-4 text-center bg-gray-200 text-gray-700">
      Made with ❤︎ depuis chez nous · coConfinés © 2020
    </div>
  </>
);
