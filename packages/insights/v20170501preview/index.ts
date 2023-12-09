import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSubscriptionDiagnosticSettingArgs, GetSubscriptionDiagnosticSettingResult, GetSubscriptionDiagnosticSettingOutputArgs } from "./getSubscriptionDiagnosticSetting";
export const getSubscriptionDiagnosticSetting: typeof import("./getSubscriptionDiagnosticSetting").getSubscriptionDiagnosticSetting = null as any;
export const getSubscriptionDiagnosticSettingOutput: typeof import("./getSubscriptionDiagnosticSetting").getSubscriptionDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getSubscriptionDiagnosticSetting","getSubscriptionDiagnosticSettingOutput"], () => require("./getSubscriptionDiagnosticSetting"));

export { ListDiagnosticSettingsCategoryArgs, ListDiagnosticSettingsCategoryResult, ListDiagnosticSettingsCategoryOutputArgs } from "./listDiagnosticSettingsCategory";
export const listDiagnosticSettingsCategory: typeof import("./listDiagnosticSettingsCategory").listDiagnosticSettingsCategory = null as any;
export const listDiagnosticSettingsCategoryOutput: typeof import("./listDiagnosticSettingsCategory").listDiagnosticSettingsCategoryOutput = null as any;
utilities.lazyLoad(exports, ["listDiagnosticSettingsCategory","listDiagnosticSettingsCategoryOutput"], () => require("./listDiagnosticSettingsCategory"));

export { SubscriptionDiagnosticSettingArgs } from "./subscriptionDiagnosticSetting";
export type SubscriptionDiagnosticSetting = import("./subscriptionDiagnosticSetting").SubscriptionDiagnosticSetting;
export const SubscriptionDiagnosticSetting: typeof import("./subscriptionDiagnosticSetting").SubscriptionDiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["SubscriptionDiagnosticSetting"], () => require("./subscriptionDiagnosticSetting"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20170501preview:SubscriptionDiagnosticSetting":
                return new SubscriptionDiagnosticSetting(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20170501preview", _module)
