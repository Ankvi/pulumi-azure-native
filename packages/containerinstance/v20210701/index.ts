import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ContainerGroupArgs } from "./containerGroup";
export type ContainerGroup = import("./containerGroup").ContainerGroup;
export const ContainerGroup: typeof import("./containerGroup").ContainerGroup = null as any;
utilities.lazyLoad(exports, ["ContainerGroup"], () => require("./containerGroup"));

export { GetContainerGroupArgs, GetContainerGroupResult, GetContainerGroupOutputArgs } from "./getContainerGroup";
export const getContainerGroup: typeof import("./getContainerGroup").getContainerGroup = null as any;
export const getContainerGroupOutput: typeof import("./getContainerGroup").getContainerGroupOutput = null as any;
utilities.lazyLoad(exports, ["getContainerGroup","getContainerGroupOutput"], () => require("./getContainerGroup"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerinstance/v20210701:ContainerGroup":
                return new ContainerGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerinstance/v20210701", _module)