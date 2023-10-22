import { type SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "base-code-t3",
      region: 'ap-southeast-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        environment: {
          DATABASE_URL: process.env.DATABASE_URL!,
          NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL!,
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;