import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationGroupArgs } from "./applicationGroup";
export type ApplicationGroup = import("./applicationGroup").ApplicationGroup;
export const ApplicationGroup: typeof import("./applicationGroup").ApplicationGroup = null as any;
utilities.lazyLoad(exports, ["ApplicationGroup"], () => require("./applicationGroup"));

export { GetApplicationGroupArgs, GetApplicationGroupResult, GetApplicationGroupOutputArgs } from "./getApplicationGroup";
export const getApplicationGroup: typeof import("./getApplicationGroup").getApplicationGroup = null as any;
export const getApplicationGroupOutput: typeof import("./getApplicationGroup").getApplicationGroupOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGroup","getApplicationGroupOutput"], () => require("./getApplicationGroup"));

export { GetHostPoolArgs, GetHostPoolResult, GetHostPoolOutputArgs } from "./getHostPool";
export const getHostPool: typeof import("./getHostPool").getHostPool = null as any;
export const getHostPoolOutput: typeof import("./getHostPool").getHostPoolOutput = null as any;
utilities.lazyLoad(exports, ["getHostPool","getHostPoolOutput"], () => require("./getHostPool"));

export { HostPoolArgs } from "./hostPool";
export type HostPool = import("./hostPool").HostPool;
export const HostPool: typeof import("./hostPool").HostPool = null as any;
utilities.lazyLoad(exports, ["HostPool"], () => require("./hostPool"));


// Export enums:
export * from "../types/enums/v20220401preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:desktopvirtualization/v20220401preview:ApplicationGroup":
                return new ApplicationGroup(name, <any>undefined, { urn })
            case "azure-native:desktopvirtualization/v20220401preview:HostPool":
                return new HostPool(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "desktopvirtualization/v20220401preview", _module)
