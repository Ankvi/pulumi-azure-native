import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ContainerGroupArgs } from "./containerGroup";
export type ContainerGroup = import("./containerGroup").ContainerGroup;
export const ContainerGroup: typeof import("./containerGroup").ContainerGroup = null as any;
utilities.lazyLoad(exports, ["ContainerGroup"], () => require("./containerGroup"));

export { ContainerGroupProfileArgs } from "./containerGroupProfile";
export type ContainerGroupProfile = import("./containerGroupProfile").ContainerGroupProfile;
export const ContainerGroupProfile: typeof import("./containerGroupProfile").ContainerGroupProfile = null as any;
utilities.lazyLoad(exports, ["ContainerGroupProfile"], () => require("./containerGroupProfile"));

export { GetContainerGroupArgs, GetContainerGroupResult, GetContainerGroupOutputArgs } from "./getContainerGroup";
export const getContainerGroup: typeof import("./getContainerGroup").getContainerGroup = null as any;
export const getContainerGroupOutput: typeof import("./getContainerGroup").getContainerGroupOutput = null as any;
utilities.lazyLoad(exports, ["getContainerGroup","getContainerGroupOutput"], () => require("./getContainerGroup"));

export { GetContainerGroupProfileArgs, GetContainerGroupProfileResult, GetContainerGroupProfileOutputArgs } from "./getContainerGroupProfile";
export const getContainerGroupProfile: typeof import("./getContainerGroupProfile").getContainerGroupProfile = null as any;
export const getContainerGroupProfileOutput: typeof import("./getContainerGroupProfile").getContainerGroupProfileOutput = null as any;
utilities.lazyLoad(exports, ["getContainerGroupProfile","getContainerGroupProfileOutput"], () => require("./getContainerGroupProfile"));

export { GetNGroupArgs, GetNGroupResult, GetNGroupOutputArgs } from "./getNGroup";
export const getNGroup: typeof import("./getNGroup").getNGroup = null as any;
export const getNGroupOutput: typeof import("./getNGroup").getNGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNGroup","getNGroupOutput"], () => require("./getNGroup"));

export { NGroupArgs } from "./ngroup";
export type NGroup = import("./ngroup").NGroup;
export const NGroup: typeof import("./ngroup").NGroup = null as any;
utilities.lazyLoad(exports, ["NGroup"], () => require("./ngroup"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerinstance:ContainerGroup":
                return new ContainerGroup(name, <any>undefined, { urn })
            case "azure-native:containerinstance:ContainerGroupProfile":
                return new ContainerGroupProfile(name, <any>undefined, { urn })
            case "azure-native:containerinstance:NGroup":
                return new NGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerinstance", _module)