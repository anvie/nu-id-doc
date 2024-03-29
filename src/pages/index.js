import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {Redirect} from '@docusaurus/router';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return <Redirect to="/docs/intro" />;
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="NU.ID Tutorial & API Documentation">
      <HomepageHeader />
      {/* <main> */}
        {/* <HomepageFeatures /> */}
      {/* </main> */}
    </Layout>
  );
}
