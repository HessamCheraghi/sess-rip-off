import rtlPlugin from "stylis-plugin-rtl";
// had to use version 2.0.2 of "stylis-plugin-rtl" to fix compile errors remind me if the problem resolves.
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function RTL(props) {
  return (
    <div dir="rtl">
      <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
    </div>
  );
}
