import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GatewayArgs } from "./gateway";
export type Gateway = import("./gateway").Gateway;
export const Gateway: typeof import("./gateway").Gateway = null as any;
utilities.lazyLoad(exports, ["Gateway"], () => require("./gateway"));

export { GetGatewayArgs, GetGatewayResult, GetGatewayOutputArgs } from "./getGateway";
export const getGateway: typeof import("./getGateway").getGateway = null as any;
export const getGatewayOutput: typeof import("./getGateway").getGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getGateway","getGatewayOutput"], () => require("./getGateway"));

export { GetOperatorApiConnectionArgs, GetOperatorApiConnectionResult, GetOperatorApiConnectionOutputArgs } from "./getOperatorApiConnection";
export const getOperatorApiConnection: typeof import("./getOperatorApiConnection").getOperatorApiConnection = null as any;
export const getOperatorApiConnectionOutput: typeof import("./getOperatorApiConnection").getOperatorApiConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getOperatorApiConnection","getOperatorApiConnectionOutput"], () => require("./getOperatorApiConnection"));

export { OperatorApiConnectionArgs } from "./operatorApiConnection";
export type OperatorApiConnection = import("./operatorApiConnection").OperatorApiConnection;
export const OperatorApiConnection: typeof import("./operatorApiConnection").OperatorApiConnection = null as any;
utilities.lazyLoad(exports, ["OperatorApiConnection"], () => require("./operatorApiConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:programmableconnectivity:Gateway":
                return new Gateway(name, <any>undefined, { urn })
            case "azure-native:programmableconnectivity:OperatorApiConnection":
                return new OperatorApiConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "programmableconnectivity", _module)