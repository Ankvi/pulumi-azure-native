import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureCliScriptArgs } from "./azureCliScript";
export type AzureCliScript = import("./azureCliScript").AzureCliScript;
export const AzureCliScript: typeof import("./azureCliScript").AzureCliScript = null as any;
utilities.lazyLoad(exports, ["AzureCliScript"], () => require("./azureCliScript"));

export { AzurePowerShellScriptArgs } from "./azurePowerShellScript";
export type AzurePowerShellScript = import("./azurePowerShellScript").AzurePowerShellScript;
export const AzurePowerShellScript: typeof import("./azurePowerShellScript").AzurePowerShellScript = null as any;
utilities.lazyLoad(exports, ["AzurePowerShellScript"], () => require("./azurePowerShellScript"));

export { GetAzureCliScriptArgs, GetAzureCliScriptResult, GetAzureCliScriptOutputArgs } from "./getAzureCliScript";
export const getAzureCliScript: typeof import("./getAzureCliScript").getAzureCliScript = null as any;
export const getAzureCliScriptOutput: typeof import("./getAzureCliScript").getAzureCliScriptOutput = null as any;
utilities.lazyLoad(exports, ["getAzureCliScript","getAzureCliScriptOutput"], () => require("./getAzureCliScript"));

export { GetAzurePowerShellScriptArgs, GetAzurePowerShellScriptResult, GetAzurePowerShellScriptOutputArgs } from "./getAzurePowerShellScript";
export const getAzurePowerShellScript: typeof import("./getAzurePowerShellScript").getAzurePowerShellScript = null as any;
export const getAzurePowerShellScriptOutput: typeof import("./getAzurePowerShellScript").getAzurePowerShellScriptOutput = null as any;
utilities.lazyLoad(exports, ["getAzurePowerShellScript","getAzurePowerShellScriptOutput"], () => require("./getAzurePowerShellScript"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:resources/v20230801:AzureCliScript":
                return new AzureCliScript(name, <any>undefined, { urn })
            case "azure-native:resources/v20230801:AzurePowerShellScript":
                return new AzurePowerShellScript(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "resources/v20230801", _module)