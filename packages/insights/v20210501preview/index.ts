import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DiagnosticSettingArgs } from "./diagnosticSetting";
export type DiagnosticSetting = import("./diagnosticSetting").DiagnosticSetting;
export const DiagnosticSetting: typeof import("./diagnosticSetting").DiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["DiagnosticSetting"], () => require("./diagnosticSetting"));

export { GetDiagnosticSettingArgs, GetDiagnosticSettingResult, GetDiagnosticSettingOutputArgs } from "./getDiagnosticSetting";
export const getDiagnosticSetting: typeof import("./getDiagnosticSetting").getDiagnosticSetting = null as any;
export const getDiagnosticSettingOutput: typeof import("./getDiagnosticSetting").getDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnosticSetting","getDiagnosticSettingOutput"], () => require("./getDiagnosticSetting"));

export { GetManagementGroupDiagnosticSettingArgs, GetManagementGroupDiagnosticSettingResult, GetManagementGroupDiagnosticSettingOutputArgs } from "./getManagementGroupDiagnosticSetting";
export const getManagementGroupDiagnosticSetting: typeof import("./getManagementGroupDiagnosticSetting").getManagementGroupDiagnosticSetting = null as any;
export const getManagementGroupDiagnosticSettingOutput: typeof import("./getManagementGroupDiagnosticSetting").getManagementGroupDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getManagementGroupDiagnosticSetting","getManagementGroupDiagnosticSettingOutput"], () => require("./getManagementGroupDiagnosticSetting"));

export { GetSubscriptionDiagnosticSettingArgs, GetSubscriptionDiagnosticSettingResult, GetSubscriptionDiagnosticSettingOutputArgs } from "./getSubscriptionDiagnosticSetting";
export const getSubscriptionDiagnosticSetting: typeof import("./getSubscriptionDiagnosticSetting").getSubscriptionDiagnosticSetting = null as any;
export const getSubscriptionDiagnosticSettingOutput: typeof import("./getSubscriptionDiagnosticSetting").getSubscriptionDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getSubscriptionDiagnosticSetting","getSubscriptionDiagnosticSettingOutput"], () => require("./getSubscriptionDiagnosticSetting"));

export { ManagementGroupDiagnosticSettingArgs } from "./managementGroupDiagnosticSetting";
export type ManagementGroupDiagnosticSetting = import("./managementGroupDiagnosticSetting").ManagementGroupDiagnosticSetting;
export const ManagementGroupDiagnosticSetting: typeof import("./managementGroupDiagnosticSetting").ManagementGroupDiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["ManagementGroupDiagnosticSetting"], () => require("./managementGroupDiagnosticSetting"));

export { SubscriptionDiagnosticSettingArgs } from "./subscriptionDiagnosticSetting";
export type SubscriptionDiagnosticSetting = import("./subscriptionDiagnosticSetting").SubscriptionDiagnosticSetting;
export const SubscriptionDiagnosticSetting: typeof import("./subscriptionDiagnosticSetting").SubscriptionDiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["SubscriptionDiagnosticSetting"], () => require("./subscriptionDiagnosticSetting"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20210501preview:DiagnosticSetting":
                return new DiagnosticSetting(name, <any>undefined, { urn })
            case "azure-native:insights/v20210501preview:ManagementGroupDiagnosticSetting":
                return new ManagementGroupDiagnosticSetting(name, <any>undefined, { urn })
            case "azure-native:insights/v20210501preview:SubscriptionDiagnosticSetting":
                return new SubscriptionDiagnosticSetting(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20210501preview", _module)
