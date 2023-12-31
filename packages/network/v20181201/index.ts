import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ExpressRouteCircuitArgs } from "./expressRouteCircuit";
export type ExpressRouteCircuit = import("./expressRouteCircuit").ExpressRouteCircuit;
export const ExpressRouteCircuit: typeof import("./expressRouteCircuit").ExpressRouteCircuit = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuit"], () => require("./expressRouteCircuit"));

export { GetExpressRouteCircuitArgs, GetExpressRouteCircuitResult, GetExpressRouteCircuitOutputArgs } from "./getExpressRouteCircuit";
export const getExpressRouteCircuit: typeof import("./getExpressRouteCircuit").getExpressRouteCircuit = null as any;
export const getExpressRouteCircuitOutput: typeof import("./getExpressRouteCircuit").getExpressRouteCircuitOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuit","getExpressRouteCircuitOutput"], () => require("./getExpressRouteCircuit"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20181201:ExpressRouteCircuit":
                return new ExpressRouteCircuit(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20181201", _module)
