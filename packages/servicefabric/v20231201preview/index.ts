import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetManagedClusterArgs, GetManagedClusterResult, GetManagedClusterOutputArgs } from "./getManagedCluster";
export const getManagedCluster: typeof import("./getManagedCluster").getManagedCluster = null as any;
export const getManagedClusterOutput: typeof import("./getManagedCluster").getManagedClusterOutput = null as any;
utilities.lazyLoad(exports, ["getManagedCluster","getManagedClusterOutput"], () => require("./getManagedCluster"));

export { GetManagedClusterApplicationArgs, GetManagedClusterApplicationResult, GetManagedClusterApplicationOutputArgs } from "./getManagedClusterApplication";
export const getManagedClusterApplication: typeof import("./getManagedClusterApplication").getManagedClusterApplication = null as any;
export const getManagedClusterApplicationOutput: typeof import("./getManagedClusterApplication").getManagedClusterApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getManagedClusterApplication","getManagedClusterApplicationOutput"], () => require("./getManagedClusterApplication"));

export { GetManagedClusterApplicationTypeArgs, GetManagedClusterApplicationTypeResult, GetManagedClusterApplicationTypeOutputArgs } from "./getManagedClusterApplicationType";
export const getManagedClusterApplicationType: typeof import("./getManagedClusterApplicationType").getManagedClusterApplicationType = null as any;
export const getManagedClusterApplicationTypeOutput: typeof import("./getManagedClusterApplicationType").getManagedClusterApplicationTypeOutput = null as any;
utilities.lazyLoad(exports, ["getManagedClusterApplicationType","getManagedClusterApplicationTypeOutput"], () => require("./getManagedClusterApplicationType"));

export { GetManagedClusterApplicationTypeVersionArgs, GetManagedClusterApplicationTypeVersionResult, GetManagedClusterApplicationTypeVersionOutputArgs } from "./getManagedClusterApplicationTypeVersion";
export const getManagedClusterApplicationTypeVersion: typeof import("./getManagedClusterApplicationTypeVersion").getManagedClusterApplicationTypeVersion = null as any;
export const getManagedClusterApplicationTypeVersionOutput: typeof import("./getManagedClusterApplicationTypeVersion").getManagedClusterApplicationTypeVersionOutput = null as any;
utilities.lazyLoad(exports, ["getManagedClusterApplicationTypeVersion","getManagedClusterApplicationTypeVersionOutput"], () => require("./getManagedClusterApplicationTypeVersion"));

export { GetManagedClusterServiceArgs, GetManagedClusterServiceResult, GetManagedClusterServiceOutputArgs } from "./getManagedClusterService";
export const getManagedClusterService: typeof import("./getManagedClusterService").getManagedClusterService = null as any;
export const getManagedClusterServiceOutput: typeof import("./getManagedClusterService").getManagedClusterServiceOutput = null as any;
utilities.lazyLoad(exports, ["getManagedClusterService","getManagedClusterServiceOutput"], () => require("./getManagedClusterService"));

export { GetNodeTypeArgs, GetNodeTypeResult, GetNodeTypeOutputArgs } from "./getNodeType";
export const getNodeType: typeof import("./getNodeType").getNodeType = null as any;
export const getNodeTypeOutput: typeof import("./getNodeType").getNodeTypeOutput = null as any;
utilities.lazyLoad(exports, ["getNodeType","getNodeTypeOutput"], () => require("./getNodeType"));

export { GetmanagedAzResiliencyStatusArgs, GetmanagedAzResiliencyStatusResult, GetmanagedAzResiliencyStatusOutputArgs } from "./getmanagedAzResiliencyStatus";
export const getmanagedAzResiliencyStatus: typeof import("./getmanagedAzResiliencyStatus").getmanagedAzResiliencyStatus = null as any;
export const getmanagedAzResiliencyStatusOutput: typeof import("./getmanagedAzResiliencyStatus").getmanagedAzResiliencyStatusOutput = null as any;
utilities.lazyLoad(exports, ["getmanagedAzResiliencyStatus","getmanagedAzResiliencyStatusOutput"], () => require("./getmanagedAzResiliencyStatus"));

export { GetmanagedMaintenanceWindowStatusArgs, GetmanagedMaintenanceWindowStatusResult, GetmanagedMaintenanceWindowStatusOutputArgs } from "./getmanagedMaintenanceWindowStatus";
export const getmanagedMaintenanceWindowStatus: typeof import("./getmanagedMaintenanceWindowStatus").getmanagedMaintenanceWindowStatus = null as any;
export const getmanagedMaintenanceWindowStatusOutput: typeof import("./getmanagedMaintenanceWindowStatus").getmanagedMaintenanceWindowStatusOutput = null as any;
utilities.lazyLoad(exports, ["getmanagedMaintenanceWindowStatus","getmanagedMaintenanceWindowStatusOutput"], () => require("./getmanagedMaintenanceWindowStatus"));

export { ManagedClusterArgs } from "./managedCluster";
export type ManagedCluster = import("./managedCluster").ManagedCluster;
export const ManagedCluster: typeof import("./managedCluster").ManagedCluster = null as any;
utilities.lazyLoad(exports, ["ManagedCluster"], () => require("./managedCluster"));

export { ManagedClusterApplicationArgs } from "./managedClusterApplication";
export type ManagedClusterApplication = import("./managedClusterApplication").ManagedClusterApplication;
export const ManagedClusterApplication: typeof import("./managedClusterApplication").ManagedClusterApplication = null as any;
utilities.lazyLoad(exports, ["ManagedClusterApplication"], () => require("./managedClusterApplication"));

export { ManagedClusterApplicationTypeArgs } from "./managedClusterApplicationType";
export type ManagedClusterApplicationType = import("./managedClusterApplicationType").ManagedClusterApplicationType;
export const ManagedClusterApplicationType: typeof import("./managedClusterApplicationType").ManagedClusterApplicationType = null as any;
utilities.lazyLoad(exports, ["ManagedClusterApplicationType"], () => require("./managedClusterApplicationType"));

export { ManagedClusterApplicationTypeVersionArgs } from "./managedClusterApplicationTypeVersion";
export type ManagedClusterApplicationTypeVersion = import("./managedClusterApplicationTypeVersion").ManagedClusterApplicationTypeVersion;
export const ManagedClusterApplicationTypeVersion: typeof import("./managedClusterApplicationTypeVersion").ManagedClusterApplicationTypeVersion = null as any;
utilities.lazyLoad(exports, ["ManagedClusterApplicationTypeVersion"], () => require("./managedClusterApplicationTypeVersion"));

export { ManagedClusterServiceArgs } from "./managedClusterService";
export type ManagedClusterService = import("./managedClusterService").ManagedClusterService;
export const ManagedClusterService: typeof import("./managedClusterService").ManagedClusterService = null as any;
utilities.lazyLoad(exports, ["ManagedClusterService"], () => require("./managedClusterService"));

export { NodeTypeArgs } from "./nodeType";
export type NodeType = import("./nodeType").NodeType;
export const NodeType: typeof import("./nodeType").NodeType = null as any;
utilities.lazyLoad(exports, ["NodeType"], () => require("./nodeType"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:servicefabric/v20231201preview:ManagedCluster":
                return new ManagedCluster(name, <any>undefined, { urn })
            case "azure-native:servicefabric/v20231201preview:ManagedClusterApplication":
                return new ManagedClusterApplication(name, <any>undefined, { urn })
            case "azure-native:servicefabric/v20231201preview:ManagedClusterApplicationType":
                return new ManagedClusterApplicationType(name, <any>undefined, { urn })
            case "azure-native:servicefabric/v20231201preview:ManagedClusterApplicationTypeVersion":
                return new ManagedClusterApplicationTypeVersion(name, <any>undefined, { urn })
            case "azure-native:servicefabric/v20231201preview:ManagedClusterService":
                return new ManagedClusterService(name, <any>undefined, { urn })
            case "azure-native:servicefabric/v20231201preview:NodeType":
                return new NodeType(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "servicefabric/v20231201preview", _module)