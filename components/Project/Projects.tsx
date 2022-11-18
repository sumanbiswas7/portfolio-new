import { Project } from "./Project";

export function Projects() {
  return (
    <>
      <Project
        id={1}
        name="vivid"
        next="moviezine"
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
        id={3}
        project_id="project-3"
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
    </>
  );
}
