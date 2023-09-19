import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DevBoxDefinitionArgs } from "./devBoxDefinition";
export type DevBoxDefinition = import("./devBoxDefinition").DevBoxDefinition;
export const DevBoxDefinition: typeof import("./devBoxDefinition").DevBoxDefinition = null as any;
utilities.lazyLoad(exports, ["DevBoxDefinition"], () => require("./devBoxDefinition"));

export { GetDevBoxDefinitionArgs, GetDevBoxDefinitionResult, GetDevBoxDefinitionOutputArgs } from "./getDevBoxDefinition";
export const getDevBoxDefinition: typeof import("./getDevBoxDefinition").getDevBoxDefinition = null as any;
export const getDevBoxDefinitionOutput: typeof import("./getDevBoxDefinition").getDevBoxDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getDevBoxDefinition","getDevBoxDefinitionOutput"], () => require("./getDevBoxDefinition"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:devcenter/v20221111preview:DevBoxDefinition":
                return new DevBoxDefinition(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devcenter/v20221111preview", _module)
