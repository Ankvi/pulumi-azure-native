import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DefenderForStorageArgs } from "./defenderForStorage";
export type DefenderForStorage = import("./defenderForStorage").DefenderForStorage;
export const DefenderForStorage: typeof import("./defenderForStorage").DefenderForStorage = null as any;
utilities.lazyLoad(exports, ["DefenderForStorage"], () => require("./defenderForStorage"));

export { GetDefenderForStorageArgs, GetDefenderForStorageResult, GetDefenderForStorageOutputArgs } from "./getDefenderForStorage";
export const getDefenderForStorage: typeof import("./getDefenderForStorage").getDefenderForStorage = null as any;
export const getDefenderForStorageOutput: typeof import("./getDefenderForStorage").getDefenderForStorageOutput = null as any;
utilities.lazyLoad(exports, ["getDefenderForStorage","getDefenderForStorageOutput"], () => require("./getDefenderForStorage"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20221201preview:DefenderForStorage":
                return new DefenderForStorage(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20221201preview", _module)