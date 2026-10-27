import React from 'react';
import clsx from 'clsx';
import {ARCH, BOWL, BOWL_LINE, BOWL_WIDTH} from '@site/src/utils/logoMark';

/**
 * The NU.ID mark alone. `color` paints it one colour (e.g. white on a green button).
 * `animated` assembles it on load and gives it a small hover gesture; see .nuid-mark in custom.css.
 */
export default function LogoMark({className, color, animated = false}) {
  return (
    <svg
      viewBox="0 0 84 84"
      fill="none"
      aria-hidden="true"
      className={clsx(animated && 'nuid-mark', className)}>
      <path data-part="t" d={ARCH} fill={color || '#B211DE'} />
      {animated ? (
        <path
          data-part="u"
          className="nuid-sweep"
          d={BOWL_LINE}
          stroke={color || '#19B378'}
          strokeWidth={BOWL_WIDTH}
          pathLength={1}
        />
      ) : (
        <path data-part="u" d={BOWL} fill={color || '#19B378'} />
      )}
    </svg>
  );
}
