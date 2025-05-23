import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DeidServiceArgs } from "./deidService";
export type DeidService = import("./deidService").DeidService;
export const DeidService: typeof import("./deidService").DeidService = null as any;
utilities.lazyLoad(exports, ["DeidService"], () => require("./deidService"));

export { GetDeidServiceArgs, GetDeidServiceResult, GetDeidServiceOutputArgs } from "./getDeidService";
export const getDeidService: typeof import("./getDeidService").getDeidService = null as any;
export const getDeidServiceOutput: typeof import("./getDeidService").getDeidServiceOutput = null as any;
utilities.lazyLoad(exports, ["getDeidService","getDeidServiceOutput"], () => require("./getDeidService"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:healthdataaiservices:DeidService":
                return new DeidService(name, <any>undefined, { urn })
            case "azure-native:healthdataaiservices:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "healthdataaiservices", _module)