import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { ListAdminKeyArgs, ListAdminKeyResult, ListAdminKeyOutputArgs } from "./listAdminKey";
export const listAdminKey: typeof import("./listAdminKey").listAdminKey = null as any;
export const listAdminKeyOutput: typeof import("./listAdminKey").listAdminKeyOutput = null as any;
utilities.lazyLoad(exports, ["listAdminKey","listAdminKeyOutput"], () => require("./listAdminKey"));

export { ListQueryKeyBySearchServiceArgs, ListQueryKeyBySearchServiceResult, ListQueryKeyBySearchServiceOutputArgs } from "./listQueryKeyBySearchService";
export const listQueryKeyBySearchService: typeof import("./listQueryKeyBySearchService").listQueryKeyBySearchService = null as any;
export const listQueryKeyBySearchServiceOutput: typeof import("./listQueryKeyBySearchService").listQueryKeyBySearchServiceOutput = null as any;
utilities.lazyLoad(exports, ["listQueryKeyBySearchService","listQueryKeyBySearchServiceOutput"], () => require("./listQueryKeyBySearchService"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));


// Export enums:
export * from "../types/enums/v20210401preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:search/v20210401preview:Service":
                return new Service(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "search/v20210401preview", _module)
