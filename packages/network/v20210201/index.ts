import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPrivateDnsZoneGroupArgs, GetPrivateDnsZoneGroupResult, GetPrivateDnsZoneGroupOutputArgs } from "./getPrivateDnsZoneGroup";
export const getPrivateDnsZoneGroup: typeof import("./getPrivateDnsZoneGroup").getPrivateDnsZoneGroup = null as any;
export const getPrivateDnsZoneGroupOutput: typeof import("./getPrivateDnsZoneGroup").getPrivateDnsZoneGroupOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateDnsZoneGroup","getPrivateDnsZoneGroupOutput"], () => require("./getPrivateDnsZoneGroup"));

export { GetPrivateEndpointArgs, GetPrivateEndpointResult, GetPrivateEndpointOutputArgs } from "./getPrivateEndpoint";
export const getPrivateEndpoint: typeof import("./getPrivateEndpoint").getPrivateEndpoint = null as any;
export const getPrivateEndpointOutput: typeof import("./getPrivateEndpoint").getPrivateEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpoint","getPrivateEndpointOutput"], () => require("./getPrivateEndpoint"));

export { GetPrivateLinkServiceArgs, GetPrivateLinkServiceResult, GetPrivateLinkServiceOutputArgs } from "./getPrivateLinkService";
export const getPrivateLinkService: typeof import("./getPrivateLinkService").getPrivateLinkService = null as any;
export const getPrivateLinkServiceOutput: typeof import("./getPrivateLinkService").getPrivateLinkServiceOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkService","getPrivateLinkServiceOutput"], () => require("./getPrivateLinkService"));

export { PrivateDnsZoneGroupArgs } from "./privateDnsZoneGroup";
export type PrivateDnsZoneGroup = import("./privateDnsZoneGroup").PrivateDnsZoneGroup;
export const PrivateDnsZoneGroup: typeof import("./privateDnsZoneGroup").PrivateDnsZoneGroup = null as any;
utilities.lazyLoad(exports, ["PrivateDnsZoneGroup"], () => require("./privateDnsZoneGroup"));

export { PrivateEndpointArgs } from "./privateEndpoint";
export type PrivateEndpoint = import("./privateEndpoint").PrivateEndpoint;
export const PrivateEndpoint: typeof import("./privateEndpoint").PrivateEndpoint = null as any;
utilities.lazyLoad(exports, ["PrivateEndpoint"], () => require("./privateEndpoint"));

export { PrivateLinkServiceArgs } from "./privateLinkService";
export type PrivateLinkService = import("./privateLinkService").PrivateLinkService;
export const PrivateLinkService: typeof import("./privateLinkService").PrivateLinkService = null as any;
utilities.lazyLoad(exports, ["PrivateLinkService"], () => require("./privateLinkService"));


// Export enums:
export * from "../types/enums/v20210201";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20210201:PrivateDnsZoneGroup":
                return new PrivateDnsZoneGroup(name, <any>undefined, { urn })
            case "azure-native:network/v20210201:PrivateEndpoint":
                return new PrivateEndpoint(name, <any>undefined, { urn })
            case "azure-native:network/v20210201:PrivateLinkService":
                return new PrivateLinkService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20210201", _module)
