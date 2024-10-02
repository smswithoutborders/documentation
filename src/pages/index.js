import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import SwobLogo from "../../static/img/logo-icon-light.png";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={clsx("container", styles.headerContainer)}>
        {/* Logo Section */}
        <img
          alt="Swob logo"
          className={styles.hero_img}
          src={SwobLogo}
          height={180}
          width={180}
        />

        {/* Title and Tagline */}
        <h1 className={styles.hero__title}>{siteConfig.title}</h1>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>

        {/* Button Group */}
        <div className={styles.buttonGroup}>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/contributing/introduction"
            aria-label="Get started with iOS tutorial"
          >
            <Translate>Get Started with iOS</Translate>
          </Link>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/App Tutorial/New-Tutorial"
            aria-label="Get started with Android tutorial"
          >
            <Translate>Get Started with Android</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Smswithoutborders tutorial section"
    >
      <HomepageHeader />
    </Layout>
  );
}
