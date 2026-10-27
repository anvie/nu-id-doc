import React from 'react';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import LogoMark from '@site/src/components/LogoMark';

/** Footer in the nu-iam landing style: brand blurb, link columns from themeConfig.footer.links, mono base line. */
export default function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {links = [], copyright} = footer;

  return (
    <footer className="nuid-footer">
      <div className="nuid-container">
        <div className="nuid-footer__grid">
          <div>
            <Link to="/docs/intro" className="nuid-brand" aria-label="NU Identity">
              <LogoMark className="nuid-brand__mark" />
              <span className="nuid-brand__name">NU Identity</span>
            </Link>
            <p className="nuid-footer__about">
              Platform identitas tunggal dan manajemen akses untuk seluruh ekosistem digital
              Nahdlatul Ulama.
            </p>
          </div>
          {links.map((col) => (
            <div key={col.title}>
              <h4 className="label-mono">{col.title}</h4>
              <ul className="nuid-footer__links">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link {...(item.to ? {to: item.to} : {href: item.href})}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="nuid-footer__base">
          <p>{copyright}</p>
          <p>
            Visi <span className="nuid-footer__accent">Satu Data NU</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
