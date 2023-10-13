import { useRouter } from "next/router";
import styles from "./projects_by_id.module.scss";
import { useEffect, useState } from "react";
import PROJECTS from "../../data/projects.json";
import { BiArrowBack } from "react-icons/bi";
import { RiGithubLine, RiLink, RiHomeSmileLine } from "react-icons/ri";
import { Project } from "../../types/project";
import Link from "next/link";
import { tagLinks } from "../../data/tag-links";

export default function ProjectsByIdPage() {
  const [data, setData] = useState<DataState>({
    data: null,
    load: true,
    err: null,
  });
  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    initLoadProject(id);
  }, [id]);

  if (data.load) return <h1>Loading...</h1>;
  if (data.err) return <h1>{data.err}</h1>;

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.top_row}>
          <Link href="/#projects" className={styles.back_btn}>
            <BiArrowBack /> Back
          </Link>
          <Link href={"/"}>
            <RiHomeSmileLine size={25} color="#898989" />
          </Link>
        </div>

        {/* Main Content */}
        <div className={styles.main_content_container}>
          <div className={styles.project_desc_cont}>
            <h3>{data.data?.title}</h3>
            <p>{data.data?.description}</p>
            <h3>Tech Stack</h3>
            <div className={styles.tags_cont}>
              {data.data?.tags.map((t) => (
                <Tag title={t} />
              ))}
            </div>

            <h3>Show Project</h3>
            <div className={styles.tags_cont}>
              <a
                href={data.data?.github}
                target="_blank"
                className={styles.tag}
              >
                <RiGithubLine /> Github Link
              </a>
              <a href={data.data?.live} target="_blank" className={styles.tag}>
                <RiLink /> Live Link
              </a>
            </div>
          </div>

          {/* Project Image  */}
          <div className={styles.img_cont}>
            <img src={data.data?.img} />
            <div className={styles.blur} />
          </div>
        </div>
      </div>
    </div>
  );

  /**
   * Helper Functions
   */
  function initLoadProject(id: string) {
    if (!id) return;
    const intId = parseInt(id);
    const projectById = PROJECTS.find((p) => p.id == intId);
    if (!projectById) {
      setData({
        data: null,
        err: `No Project with id ${intId} found`,
        load: false,
      });
    } else {
      setData({
        data: projectById,
        err: null,
        load: false,
      });
    }
  }
}

function Tag({ title }: { title: string }) {
  let href = "";
  const strippedTitle = title
    .toLowerCase()
    .replaceAll(" ", "") as keyof typeof tagLinks;
  if (strippedTitle in tagLinks) href = tagLinks[strippedTitle];

  return (
    <a href={href} target="_blank" className={styles.tag}>
      {title}
    </a>
  );
}

/**
 * Types
 */
interface DataState {
  err: string | null;
  data: Project | null;
  load: boolean;
}
