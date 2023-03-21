import { Project } from "./Project";

export function Projects() {
  return (
    <>
      <Project
        id={1}
        name="vivid"
        next="poshkit"
        imageUrl="./projects/img_vivid.webp"
        logoUrl="./projects/logo_vivid.png"
        link_github="https://github.com/sumanbiswas7/vivid"
        link_project="https://play.google.com/store/apps/details?id=com.suman_biswas.vivid&pli=1"
        background="#50251c"
        techs={["React Native", "Redux", "Cloudinary", "Firebase"]}
        description="vivid is a social media app for android and ios where people can share
           images, like, comment and many more..."
      />
      <Project
        project_id="project-2"
        id={2}
        logoWidth="8rem"
        name="poshkit"
        next="lightjs"
        imageUrl="./projects/img_poshkit.webp"
        logoUrl="./projects/logo_poshkit.png"
        link_github="https://github.com/sumanbiswas7/poshkit"
        link_project="https://www.npmjs.com/package/poshkit"
        background="#005732"
        techs={["Rollup", "Storybook", "NPM", "React"]}
        description="A collection of modern, fancy components with amazing hover effects for React applications. Easily add stylish and interactive UI elements to your web applications without spending hours on custom styling and animation."
      />
      <Project
        project_id="project-3"
        id={3}
        imgWidth="32vmax"
        logoWidth="7rem"
        name="lightjs"
        next="moviezine"
        imageUrl="./projects/img_light.png"
        logoUrl="./projects/logo_light.svg"
        link_github="https://github.com/sumanbiswas7/lightjs"
        link_project="https://www.npmjs.com/package/create-light-project"
        background="#7C2408"
        techs={["TypeScript", "Webpack", "Sass"]}
        description="A JavaScript framework for building user interfaces. comes with a cli tool enables you to quickly start building a new Light.js application, with everything set up for you"
      />
      <Project
        project_id="project-4"
        id={4}
        imgWidth="32vmax"
        logoWidth="8rem"
        name="moviezine"
        next="nutshell"
        imageUrl="./projects/img_moviezine.webp"
        logoUrl="./projects/logo_moviezine.png"
        link_github="https://github.com/sumanbiswas7/moviezine"
        link_project="https://moviezine.vercel.app/"
        background="#182309"
        techs={["NextJS", "PostgreSQL", "AWS S3", "Sass", "GraphQL"]}
        description="website where everyone can share their favourite movie recommendations and see movies recommended by others"
      />
      <Project
        id={5}
        project_id="project-5"
        imgWidth="35vmax"
        name="nutshell"
        // next="NFT"
        imageUrl="./projects/img_nutshell.webp"
        logoUrl="./projects/logo_nutshell.png"
        link_github="https://github.com/sumanbiswas7/nutshell-web"
        link_project="https://nutshell-web.vercel.app/"
        background="#41260B"
        techs={["React Native", "GraphQL", "Firebase"]}
        description="The cheapest and simplest way to make your own fully customizable restaurant menu app."
      />
      {/* <Project
        id={6}
        project_id="project-6"
        imgWidth="24vmax"
        name="NFT"
        imageUrl="./projects/img_cuteshiba.webp"
        logoUrl="./projects/logo_cuteshiba.png"
        link_github="https://github.com/sumanbiswas7/nft-marketplace-server"
        link_project="https://testnets.opensea.io/collection/cuteshibainu"
        background="#103D48"
        techs={["Ethereum", "Solidity", "NFT"]}
        description="cute shiba inu NFT, deployed in opensea testnet. go ahead and buy some, It’s pretty darn cheap for your testnet wallet as well :)"
      /> */}
    </>
  );
}
