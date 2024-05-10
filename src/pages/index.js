import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../css/index.module.css";
import SwobLogo from "../../static/img/logo.png";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img
          alt="swob logo"
          className={styles.hero_img}
          src={SwobLogo}
          height={180}
          width={180}
        />
        <h1 className={styles.hero__title}>{siteConfig.title}</h1>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/contributing/introduction"
          >
            <Translate>Get Started with Desktop</Translate>
          </Link>
        </div>
        <div className={styles.buttons} style={{ marginTop: "10px" }}>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/App Tutorial/New-Tutorial"
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
    <Layout title={siteConfig.title} description="Stay Productive">
      <HomepageHeader />
    </Layout>
  );
}
