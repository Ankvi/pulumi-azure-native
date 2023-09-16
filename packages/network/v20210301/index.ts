import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CustomIPPrefixArgs } from "./customIPPrefix";
export type CustomIPPrefix = import("./customIPPrefix").CustomIPPrefix;
export const CustomIPPrefix: typeof import("./customIPPrefix").CustomIPPrefix = null as any;
utilities.lazyLoad(exports, ["CustomIPPrefix"], () => require("./customIPPrefix"));

export { ExpressRouteGatewayArgs } from "./expressRouteGateway";
export type ExpressRouteGateway = import("./expressRouteGateway").ExpressRouteGateway;
export const ExpressRouteGateway: typeof import("./expressRouteGateway").ExpressRouteGateway = null as any;
utilities.lazyLoad(exports, ["ExpressRouteGateway"], () => require("./expressRouteGateway"));

export { GetCustomIPPrefixArgs, GetCustomIPPrefixResult, GetCustomIPPrefixOutputArgs } from "./getCustomIPPrefix";
export const getCustomIPPrefix: typeof import("./getCustomIPPrefix").getCustomIPPrefix = null as any;
export const getCustomIPPrefixOutput: typeof import("./getCustomIPPrefix").getCustomIPPrefixOutput = null as any;
utilities.lazyLoad(exports, ["getCustomIPPrefix","getCustomIPPrefixOutput"], () => require("./getCustomIPPrefix"));

export { GetExpressRouteGatewayArgs, GetExpressRouteGatewayResult, GetExpressRouteGatewayOutputArgs } from "./getExpressRouteGateway";
export const getExpressRouteGateway: typeof import("./getExpressRouteGateway").getExpressRouteGateway = null as any;
export const getExpressRouteGatewayOutput: typeof import("./getExpressRouteGateway").getExpressRouteGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteGateway","getExpressRouteGatewayOutput"], () => require("./getExpressRouteGateway"));


// Export enums:
export * from "../types/enums/v20210301";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20210301:CustomIPPrefix":
                return new CustomIPPrefix(name, <any>undefined, { urn })
            case "azure-native:network/v20210301:ExpressRouteGateway":
                return new ExpressRouteGateway(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20210301", _module)
