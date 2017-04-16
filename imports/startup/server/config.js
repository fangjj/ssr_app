import { FlowRouter } from "meteor/kadira:flow-router-ssr";

FlowRouter.setDeferScriptLoading(true);

// We cache SSR pages for 4 minutes.
const FOUR_MINUTES = 1000 * 60 * 4;
FlowRouter.setPageCacheTimeout(FOUR_MINUTES);

