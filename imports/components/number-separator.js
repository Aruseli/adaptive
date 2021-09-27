import { useMemo } from 'react';

function localeString(x, sep, grp) {
  var sx = ("" + x).split("."),
    s = "",
    i,
    j;
  sep || (sep = " "); // default seperator
  grp || grp === 0 || (grp = 3); // default grouping
  i = sx[0].length;
  while (i > grp) {
    j = i - grp;
    s = sep + sx[0].slice(j, i) + s;
    i = j;
  }
  s = sx[0].slice(0, i) + s;
  sx[0] = s;
  return sx.join(".");
}

export function useSeparatorNumber(num, size = 3) {
  return useMemo(() => {
    return localeString(num, " ", size);
  }, [num, size]);
}