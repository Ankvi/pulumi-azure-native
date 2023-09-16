import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetScheduledQueryRuleArgs, GetScheduledQueryRuleResult, GetScheduledQueryRuleOutputArgs } from "./getScheduledQueryRule";
export const getScheduledQueryRule: typeof import("./getScheduledQueryRule").getScheduledQueryRule = null as any;
export const getScheduledQueryRuleOutput: typeof import("./getScheduledQueryRule").getScheduledQueryRuleOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledQueryRule","getScheduledQueryRuleOutput"], () => require("./getScheduledQueryRule"));

export { ScheduledQueryRuleArgs } from "./scheduledQueryRule";
export type ScheduledQueryRule = import("./scheduledQueryRule").ScheduledQueryRule;
export const ScheduledQueryRule: typeof import("./scheduledQueryRule").ScheduledQueryRule = null as any;
utilities.lazyLoad(exports, ["ScheduledQueryRule"], () => require("./scheduledQueryRule"));


// Export enums:
export * from "../types/enums/v20200501preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20200501preview:ScheduledQueryRule":
                return new ScheduledQueryRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20200501preview", _module)
