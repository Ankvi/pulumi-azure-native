import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMultipleActivationKeyArgs, GetMultipleActivationKeyResult, GetMultipleActivationKeyOutputArgs } from "./getMultipleActivationKey";
export const getMultipleActivationKey: typeof import("./getMultipleActivationKey").getMultipleActivationKey = null as any;
export const getMultipleActivationKeyOutput: typeof import("./getMultipleActivationKey").getMultipleActivationKeyOutput = null as any;
utilities.lazyLoad(exports, ["getMultipleActivationKey","getMultipleActivationKeyOutput"], () => require("./getMultipleActivationKey"));

export { MultipleActivationKeyArgs } from "./multipleActivationKey";
export type MultipleActivationKey = import("./multipleActivationKey").MultipleActivationKey;
export const MultipleActivationKey: typeof import("./multipleActivationKey").MultipleActivationKey = null as any;
utilities.lazyLoad(exports, ["MultipleActivationKey"], () => require("./multipleActivationKey"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:windowsesu:MultipleActivationKey":
                return new MultipleActivationKey(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "windowsesu", _module)