import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureServersSettingArgs } from "./azureServersSetting";
export type AzureServersSetting = import("./azureServersSetting").AzureServersSetting;
export const AzureServersSetting: typeof import("./azureServersSetting").AzureServersSetting = null as any;
utilities.lazyLoad(exports, ["AzureServersSetting"], () => require("./azureServersSetting"));

export { GetAzureServersSettingArgs, GetAzureServersSettingResult, GetAzureServersSettingOutputArgs } from "./getAzureServersSetting";
export const getAzureServersSetting: typeof import("./getAzureServersSetting").getAzureServersSetting = null as any;
export const getAzureServersSettingOutput: typeof import("./getAzureServersSetting").getAzureServersSettingOutput = null as any;
utilities.lazyLoad(exports, ["getAzureServersSetting","getAzureServersSettingOutput"], () => require("./getAzureServersSetting"));


// Export enums:
export * from "../types/enums/v20230501";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20230501:AzureServersSetting":
                return new AzureServersSetting(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20230501", _module)
