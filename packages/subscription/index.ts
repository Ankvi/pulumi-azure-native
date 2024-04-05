import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AliasArgs } from "./alias";
export type Alias = import("./alias").Alias;
export const Alias: typeof import("./alias").Alias = null as any;
utilities.lazyLoad(exports, ["Alias"], () => require("./alias"));

export { GetAliasArgs, GetAliasResult, GetAliasOutputArgs } from "./getAlias";
export const getAlias: typeof import("./getAlias").getAlias = null as any;
export const getAliasOutput: typeof import("./getAlias").getAliasOutput = null as any;
utilities.lazyLoad(exports, ["getAlias","getAliasOutput"], () => require("./getAlias"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20200901 from "./v20200901";
import * as v20211001 from "./v20211001";

export {
    v20200901,
    v20211001,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:subscription:Alias":
                return new Alias(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "subscription", _module)