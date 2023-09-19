import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AutoscaleSettingArgs } from "./autoscaleSetting";
export type AutoscaleSetting = import("./autoscaleSetting").AutoscaleSetting;
export const AutoscaleSetting: typeof import("./autoscaleSetting").AutoscaleSetting = null as any;
utilities.lazyLoad(exports, ["AutoscaleSetting"], () => require("./autoscaleSetting"));

export { GetAutoscaleSettingArgs, GetAutoscaleSettingResult, GetAutoscaleSettingOutputArgs } from "./getAutoscaleSetting";
export const getAutoscaleSetting: typeof import("./getAutoscaleSetting").getAutoscaleSetting = null as any;
export const getAutoscaleSettingOutput: typeof import("./getAutoscaleSetting").getAutoscaleSettingOutput = null as any;
utilities.lazyLoad(exports, ["getAutoscaleSetting","getAutoscaleSettingOutput"], () => require("./getAutoscaleSetting"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20221001:AutoscaleSetting":
                return new AutoscaleSetting(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20221001", _module)
