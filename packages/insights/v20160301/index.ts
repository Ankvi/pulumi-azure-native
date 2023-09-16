import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AlertRuleArgs } from "./alertRule";
export type AlertRule = import("./alertRule").AlertRule;
export const AlertRule: typeof import("./alertRule").AlertRule = null as any;
utilities.lazyLoad(exports, ["AlertRule"], () => require("./alertRule"));

export { GetAlertRuleArgs, GetAlertRuleResult, GetAlertRuleOutputArgs } from "./getAlertRule";
export const getAlertRule: typeof import("./getAlertRule").getAlertRule = null as any;
export const getAlertRuleOutput: typeof import("./getAlertRule").getAlertRuleOutput = null as any;
utilities.lazyLoad(exports, ["getAlertRule","getAlertRuleOutput"], () => require("./getAlertRule"));

export { GetLogProfileArgs, GetLogProfileResult, GetLogProfileOutputArgs } from "./getLogProfile";
export const getLogProfile: typeof import("./getLogProfile").getLogProfile = null as any;
export const getLogProfileOutput: typeof import("./getLogProfile").getLogProfileOutput = null as any;
utilities.lazyLoad(exports, ["getLogProfile","getLogProfileOutput"], () => require("./getLogProfile"));

export { LogProfileArgs } from "./logProfile";
export type LogProfile = import("./logProfile").LogProfile;
export const LogProfile: typeof import("./logProfile").LogProfile = null as any;
utilities.lazyLoad(exports, ["LogProfile"], () => require("./logProfile"));


// Export enums:
export * from "../types/enums/v20160301";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20160301:AlertRule":
                return new AlertRule(name, <any>undefined, { urn })
            case "azure-native:insights/v20160301:LogProfile":
                return new LogProfile(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20160301", _module)
