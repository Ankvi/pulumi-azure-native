import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssociationsInterfaceArgs } from "./associationsInterface";
export type AssociationsInterface = import("./associationsInterface").AssociationsInterface;
export const AssociationsInterface: typeof import("./associationsInterface").AssociationsInterface = null as any;
utilities.lazyLoad(exports, ["AssociationsInterface"], () => require("./associationsInterface"));

export { FrontendsInterfaceArgs } from "./frontendsInterface";
export type FrontendsInterface = import("./frontendsInterface").FrontendsInterface;
export const FrontendsInterface: typeof import("./frontendsInterface").FrontendsInterface = null as any;
utilities.lazyLoad(exports, ["FrontendsInterface"], () => require("./frontendsInterface"));

export { GetAssociationsInterfaceArgs, GetAssociationsInterfaceResult, GetAssociationsInterfaceOutputArgs } from "./getAssociationsInterface";
export const getAssociationsInterface: typeof import("./getAssociationsInterface").getAssociationsInterface = null as any;
export const getAssociationsInterfaceOutput: typeof import("./getAssociationsInterface").getAssociationsInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getAssociationsInterface","getAssociationsInterfaceOutput"], () => require("./getAssociationsInterface"));

export { GetFrontendsInterfaceArgs, GetFrontendsInterfaceResult, GetFrontendsInterfaceOutputArgs } from "./getFrontendsInterface";
export const getFrontendsInterface: typeof import("./getFrontendsInterface").getFrontendsInterface = null as any;
export const getFrontendsInterfaceOutput: typeof import("./getFrontendsInterface").getFrontendsInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getFrontendsInterface","getFrontendsInterfaceOutput"], () => require("./getFrontendsInterface"));

export { GetTrafficControllerInterfaceArgs, GetTrafficControllerInterfaceResult, GetTrafficControllerInterfaceOutputArgs } from "./getTrafficControllerInterface";
export const getTrafficControllerInterface: typeof import("./getTrafficControllerInterface").getTrafficControllerInterface = null as any;
export const getTrafficControllerInterfaceOutput: typeof import("./getTrafficControllerInterface").getTrafficControllerInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getTrafficControllerInterface","getTrafficControllerInterfaceOutput"], () => require("./getTrafficControllerInterface"));

export { TrafficControllerInterfaceArgs } from "./trafficControllerInterface";
export type TrafficControllerInterface = import("./trafficControllerInterface").TrafficControllerInterface;
export const TrafficControllerInterface: typeof import("./trafficControllerInterface").TrafficControllerInterface = null as any;
utilities.lazyLoad(exports, ["TrafficControllerInterface"], () => require("./trafficControllerInterface"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20221001preview from "./v20221001preview";
import * as v20230501preview from "./v20230501preview";

export {
    v20221001preview,
    v20230501preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:servicenetworking:AssociationsInterface":
                return new AssociationsInterface(name, <any>undefined, { urn })
            case "azure-native:servicenetworking:FrontendsInterface":
                return new FrontendsInterface(name, <any>undefined, { urn })
            case "azure-native:servicenetworking:TrafficControllerInterface":
                return new TrafficControllerInterface(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "servicenetworking", _module)
