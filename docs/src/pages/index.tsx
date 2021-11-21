import React, {useEffect, useRef} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {useLocalBootstrap} from "../commom/env";

import Link from '@docusaurus/Link';

export function Air(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    const path = useLocalBootstrap() ? '/img/air.png' : `${siteConfig.baseUrl}img/air.png` ;
    return (
            <img
                onClick={()=>{}}
                src={path}
                className={styles.air}
            />
    )

}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  let StarBG = null;
  if (ExecutionEnvironment.canUseDOM) {
      StarBG = require("../components/BG.tsx").StarBG;
  }
  return (
          <Layout title={`Hello from ${siteConfig.title}`}>
              <BrowserOnly>
                  {()=> <StarBG />}
              </BrowserOnly>
          <Link to="/blog">
            <Air />
          </Link>
          </Layout>
  );
}
