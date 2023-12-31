import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetNetworkFunctionArgs, GetNetworkFunctionResult, GetNetworkFunctionOutputArgs } from "./getNetworkFunction";
export const getNetworkFunction: typeof import("./getNetworkFunction").getNetworkFunction = null as any;
export const getNetworkFunctionOutput: typeof import("./getNetworkFunction").getNetworkFunctionOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkFunction","getNetworkFunctionOutput"], () => require("./getNetworkFunction"));

export { NetworkFunctionArgs } from "./networkFunction";
export type NetworkFunction = import("./networkFunction").NetworkFunction;
export const NetworkFunction: typeof import("./networkFunction").NetworkFunction = null as any;
utilities.lazyLoad(exports, ["NetworkFunction"], () => require("./networkFunction"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20230515preview from "./v20230515preview";

export {
    v20230515preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:mobilepacketcore:NetworkFunction":
                return new NetworkFunction(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "mobilepacketcore", _module)
