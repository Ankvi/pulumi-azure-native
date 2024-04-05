import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetNetworkSecurityPerimeterArgs, GetNetworkSecurityPerimeterResult, GetNetworkSecurityPerimeterOutputArgs } from "./getNetworkSecurityPerimeter";
export const getNetworkSecurityPerimeter: typeof import("./getNetworkSecurityPerimeter").getNetworkSecurityPerimeter = null as any;
export const getNetworkSecurityPerimeterOutput: typeof import("./getNetworkSecurityPerimeter").getNetworkSecurityPerimeterOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityPerimeter","getNetworkSecurityPerimeterOutput"], () => require("./getNetworkSecurityPerimeter"));

export { NetworkSecurityPerimeterArgs } from "./networkSecurityPerimeter";
export type NetworkSecurityPerimeter = import("./networkSecurityPerimeter").NetworkSecurityPerimeter;
export const NetworkSecurityPerimeter: typeof import("./networkSecurityPerimeter").NetworkSecurityPerimeter = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityPerimeter"], () => require("./networkSecurityPerimeter"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20210301preview:NetworkSecurityPerimeter":
                return new NetworkSecurityPerimeter(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20210301preview", _module)