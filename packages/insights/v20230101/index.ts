import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ActionGroupArgs } from "./actionGroup";
export type ActionGroup = import("./actionGroup").ActionGroup;
export const ActionGroup: typeof import("./actionGroup").ActionGroup = null as any;
utilities.lazyLoad(exports, ["ActionGroup"], () => require("./actionGroup"));

export { GetActionGroupArgs, GetActionGroupResult, GetActionGroupOutputArgs } from "./getActionGroup";
export const getActionGroup: typeof import("./getActionGroup").getActionGroup = null as any;
export const getActionGroupOutput: typeof import("./getActionGroup").getActionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getActionGroup","getActionGroupOutput"], () => require("./getActionGroup"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20230101:ActionGroup":
                return new ActionGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20230101", _module)