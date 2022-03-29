import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../css/index.module.css";
import SwobLogo from "../../static/img/logo.png";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img className={styles.hero_img} src={SwobLogo} height={200} width={200} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/developers/introduction"
          >
            Get Started
          </Link>
          <a
            className="button button--outline button--primary button--lg margin-left--md"
            href="https://github.com/smswithoutborders"
          >
            Github
          </a>
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
