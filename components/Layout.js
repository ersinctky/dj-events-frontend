import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, description, children, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ events | Find hottest parties",
  description: "Find the latest event and musical event",
  keywords: "Dj , party , event",
};
