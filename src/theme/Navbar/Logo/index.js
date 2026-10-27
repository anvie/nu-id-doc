import React from 'react';
import Link from '@docusaurus/Link';
import LogoMark from '@site/src/components/LogoMark';

/** Brand in the header, laid out like the nu-iam dashboard header: mark, wordmark, rule, section label. */
export default function NavbarLogo() {
  return (
    <Link to="/docs/intro" className="navbar__brand nuid-brand" aria-label="NU Identity, Dokumentasi">
      <LogoMark animated className="nuid-brand__mark" />
      <span className="nuid-brand__name">NU Identity</span>
      <span className="nuid-brand__section">
        <span className="nuid-brand__rule" />
        <span className="label-mono">Dokumentasi</span>
      </span>
    </Link>
  );
}
