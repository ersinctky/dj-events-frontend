import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, description, children, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ events | Find hottest parties",
  description: "Find the latest event and musical event",
  keywords: "Dj , party , event",
};
