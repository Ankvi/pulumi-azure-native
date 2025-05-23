import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CopilotSettingArgs } from "./copilotSetting";
export type CopilotSetting = import("./copilotSetting").CopilotSetting;
export const CopilotSetting: typeof import("./copilotSetting").CopilotSetting = null as any;
utilities.lazyLoad(exports, ["CopilotSetting"], () => require("./copilotSetting"));

export { GetCopilotSettingArgs, GetCopilotSettingResult } from "./getCopilotSetting";
export const getCopilotSetting: typeof import("./getCopilotSetting").getCopilotSetting = null as any;
export const getCopilotSettingOutput: typeof import("./getCopilotSetting").getCopilotSettingOutput = null as any;
utilities.lazyLoad(exports, ["getCopilotSetting","getCopilotSettingOutput"], () => require("./getCopilotSetting"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:portalservices:CopilotSetting":
                return new CopilotSetting(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "portalservices", _module)