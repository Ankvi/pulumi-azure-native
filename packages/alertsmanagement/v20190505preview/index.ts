import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ActionRuleByNameArgs } from "./actionRuleByName";
export type ActionRuleByName = import("./actionRuleByName").ActionRuleByName;
export const ActionRuleByName: typeof import("./actionRuleByName").ActionRuleByName = null as any;
utilities.lazyLoad(exports, ["ActionRuleByName"], () => require("./actionRuleByName"));

export { GetActionRuleByNameArgs, GetActionRuleByNameResult, GetActionRuleByNameOutputArgs } from "./getActionRuleByName";
export const getActionRuleByName: typeof import("./getActionRuleByName").getActionRuleByName = null as any;
export const getActionRuleByNameOutput: typeof import("./getActionRuleByName").getActionRuleByNameOutput = null as any;
utilities.lazyLoad(exports, ["getActionRuleByName","getActionRuleByNameOutput"], () => require("./getActionRuleByName"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:alertsmanagement/v20190505preview:ActionRuleByName":
                return new ActionRuleByName(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "alertsmanagement/v20190505preview", _module)
