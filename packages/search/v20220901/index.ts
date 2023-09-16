import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetSharedPrivateLinkResourceArgs, GetSharedPrivateLinkResourceResult, GetSharedPrivateLinkResourceOutputArgs } from "./getSharedPrivateLinkResource";
export const getSharedPrivateLinkResource: typeof import("./getSharedPrivateLinkResource").getSharedPrivateLinkResource = null as any;
export const getSharedPrivateLinkResourceOutput: typeof import("./getSharedPrivateLinkResource").getSharedPrivateLinkResourceOutput = null as any;
utilities.lazyLoad(exports, ["getSharedPrivateLinkResource","getSharedPrivateLinkResourceOutput"], () => require("./getSharedPrivateLinkResource"));

export { ListAdminKeyArgs, ListAdminKeyResult, ListAdminKeyOutputArgs } from "./listAdminKey";
export const listAdminKey: typeof import("./listAdminKey").listAdminKey = null as any;
export const listAdminKeyOutput: typeof import("./listAdminKey").listAdminKeyOutput = null as any;
utilities.lazyLoad(exports, ["listAdminKey","listAdminKeyOutput"], () => require("./listAdminKey"));

export { ListQueryKeyBySearchServiceArgs, ListQueryKeyBySearchServiceResult, ListQueryKeyBySearchServiceOutputArgs } from "./listQueryKeyBySearchService";
export const listQueryKeyBySearchService: typeof import("./listQueryKeyBySearchService").listQueryKeyBySearchService = null as any;
export const listQueryKeyBySearchServiceOutput: typeof import("./listQueryKeyBySearchService").listQueryKeyBySearchServiceOutput = null as any;
utilities.lazyLoad(exports, ["listQueryKeyBySearchService","listQueryKeyBySearchServiceOutput"], () => require("./listQueryKeyBySearchService"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { SharedPrivateLinkResourceArgs } from "./sharedPrivateLinkResource";
export type SharedPrivateLinkResource = import("./sharedPrivateLinkResource").SharedPrivateLinkResource;
export const SharedPrivateLinkResource: typeof import("./sharedPrivateLinkResource").SharedPrivateLinkResource = null as any;
utilities.lazyLoad(exports, ["SharedPrivateLinkResource"], () => require("./sharedPrivateLinkResource"));


// Export enums:
export * from "../types/enums/v20220901";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:search/v20220901:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:search/v20220901:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:search/v20220901:SharedPrivateLinkResource":
                return new SharedPrivateLinkResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "search/v20220901", _module)
