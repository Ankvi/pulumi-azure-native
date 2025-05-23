import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationArgs } from "./application";
export type Application = import("./application").Application;
export const Application: typeof import("./application").Application = null as any;
utilities.lazyLoad(exports, ["Application"], () => require("./application"));

export { ApplicationDefinitionArgs } from "./applicationDefinition";
export type ApplicationDefinition = import("./applicationDefinition").ApplicationDefinition;
export const ApplicationDefinition: typeof import("./applicationDefinition").ApplicationDefinition = null as any;
utilities.lazyLoad(exports, ["ApplicationDefinition"], () => require("./applicationDefinition"));

export { GetApplicationArgs, GetApplicationResult, GetApplicationOutputArgs } from "./getApplication";
export const getApplication: typeof import("./getApplication").getApplication = null as any;
export const getApplicationOutput: typeof import("./getApplication").getApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getApplication","getApplicationOutput"], () => require("./getApplication"));

export { GetApplicationDefinitionArgs, GetApplicationDefinitionResult, GetApplicationDefinitionOutputArgs } from "./getApplicationDefinition";
export const getApplicationDefinition: typeof import("./getApplicationDefinition").getApplicationDefinition = null as any;
export const getApplicationDefinitionOutput: typeof import("./getApplicationDefinition").getApplicationDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationDefinition","getApplicationDefinitionOutput"], () => require("./getApplicationDefinition"));

export { GetJitRequestArgs, GetJitRequestResult, GetJitRequestOutputArgs } from "./getJitRequest";
export const getJitRequest: typeof import("./getJitRequest").getJitRequest = null as any;
export const getJitRequestOutput: typeof import("./getJitRequest").getJitRequestOutput = null as any;
utilities.lazyLoad(exports, ["getJitRequest","getJitRequestOutput"], () => require("./getJitRequest"));

export { JitRequestArgs } from "./jitRequest";
export type JitRequest = import("./jitRequest").JitRequest;
export const JitRequest: typeof import("./jitRequest").JitRequest = null as any;
utilities.lazyLoad(exports, ["JitRequest"], () => require("./jitRequest"));

export { ListApplicationAllowedUpgradePlansArgs, ListApplicationAllowedUpgradePlansResult, ListApplicationAllowedUpgradePlansOutputArgs } from "./listApplicationAllowedUpgradePlans";
export const listApplicationAllowedUpgradePlans: typeof import("./listApplicationAllowedUpgradePlans").listApplicationAllowedUpgradePlans = null as any;
export const listApplicationAllowedUpgradePlansOutput: typeof import("./listApplicationAllowedUpgradePlans").listApplicationAllowedUpgradePlansOutput = null as any;
utilities.lazyLoad(exports, ["listApplicationAllowedUpgradePlans","listApplicationAllowedUpgradePlansOutput"], () => require("./listApplicationAllowedUpgradePlans"));

export { ListApplicationTokensArgs, ListApplicationTokensResult, ListApplicationTokensOutputArgs } from "./listApplicationTokens";
export const listApplicationTokens: typeof import("./listApplicationTokens").listApplicationTokens = null as any;
export const listApplicationTokensOutput: typeof import("./listApplicationTokens").listApplicationTokensOutput = null as any;
utilities.lazyLoad(exports, ["listApplicationTokens","listApplicationTokensOutput"], () => require("./listApplicationTokens"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:solutions:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-native:solutions:ApplicationDefinition":
                return new ApplicationDefinition(name, <any>undefined, { urn })
            case "azure-native:solutions:JitRequest":
                return new JitRequest(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "solutions", _module)