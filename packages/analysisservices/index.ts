import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetServerDetailsArgs, GetServerDetailsResult, GetServerDetailsOutputArgs } from "./getServerDetails";
export const getServerDetails: typeof import("./getServerDetails").getServerDetails = null as any;
export const getServerDetailsOutput: typeof import("./getServerDetails").getServerDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getServerDetails","getServerDetailsOutput"], () => require("./getServerDetails"));

export { ListServerGatewayStatusArgs, ListServerGatewayStatusResult, ListServerGatewayStatusOutputArgs } from "./listServerGatewayStatus";
export const listServerGatewayStatus: typeof import("./listServerGatewayStatus").listServerGatewayStatus = null as any;
export const listServerGatewayStatusOutput: typeof import("./listServerGatewayStatus").listServerGatewayStatusOutput = null as any;
utilities.lazyLoad(exports, ["listServerGatewayStatus","listServerGatewayStatusOutput"], () => require("./listServerGatewayStatus"));

export { ServerDetailsArgs } from "./serverDetails";
export type ServerDetails = import("./serverDetails").ServerDetails;
export const ServerDetails: typeof import("./serverDetails").ServerDetails = null as any;
utilities.lazyLoad(exports, ["ServerDetails"], () => require("./serverDetails"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:analysisservices:ServerDetails":
                return new ServerDetails(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "analysisservices", _module)