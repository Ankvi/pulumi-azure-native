import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationArgs } from "./application";
export type Application = import("./application").Application;
export const Application: typeof import("./application").Application = null as any;
utilities.lazyLoad(exports, ["Application"], () => require("./application"));

export { ApplicationTypeArgs } from "./applicationType";
export type ApplicationType = import("./applicationType").ApplicationType;
export const ApplicationType: typeof import("./applicationType").ApplicationType = null as any;
utilities.lazyLoad(exports, ["ApplicationType"], () => require("./applicationType"));

export { ApplicationTypeVersionArgs } from "./applicationTypeVersion";
export type ApplicationTypeVersion = import("./applicationTypeVersion").ApplicationTypeVersion;
export const ApplicationTypeVersion: typeof import("./applicationTypeVersion").ApplicationTypeVersion = null as any;
utilities.lazyLoad(exports, ["ApplicationTypeVersion"], () => require("./applicationTypeVersion"));

export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { GetApplicationArgs, GetApplicationResult, GetApplicationOutputArgs } from "./getApplication";
export const getApplication: typeof import("./getApplication").getApplication = null as any;
export const getApplicationOutput: typeof import("./getApplication").getApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getApplication","getApplicationOutput"], () => require("./getApplication"));

export { GetApplicationTypeArgs, GetApplicationTypeResult, GetApplicationTypeOutputArgs } from "./getApplicationType";
export const getApplicationType: typeof import("./getApplicationType").getApplicationType = null as any;
export const getApplicationTypeOutput: typeof import("./getApplicationType").getApplicationTypeOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationType","getApplicationTypeOutput"], () => require("./getApplicationType"));

export { GetApplicationTypeVersionArgs, GetApplicationTypeVersionResult, GetApplicationTypeVersionOutputArgs } from "./getApplicationTypeVersion";
export const getApplicationTypeVersion: typeof import("./getApplicationTypeVersion").getApplicationTypeVersion = null as any;
export const getApplicationTypeVersionOutput: typeof import("./getApplicationTypeVersion").getApplicationTypeVersionOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationTypeVersion","getApplicationTypeVersionOutput"], () => require("./getApplicationTypeVersion"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { ListClusterUpgradableVersionsArgs, ListClusterUpgradableVersionsResult, ListClusterUpgradableVersionsOutputArgs } from "./listClusterUpgradableVersions";
export const listClusterUpgradableVersions: typeof import("./listClusterUpgradableVersions").listClusterUpgradableVersions = null as any;
export const listClusterUpgradableVersionsOutput: typeof import("./listClusterUpgradableVersions").listClusterUpgradableVersionsOutput = null as any;
utilities.lazyLoad(exports, ["listClusterUpgradableVersions","listClusterUpgradableVersionsOutput"], () => require("./listClusterUpgradableVersions"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:servicefabric/v20210601:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-native:servicefabric/v20210601:ApplicationType":
                return new ApplicationType(name, <any>undefined, { urn })
            case "azure-native:servicefabric/v20210601:ApplicationTypeVersion":
                return new ApplicationTypeVersion(name, <any>undefined, { urn })
            case "azure-native:servicefabric/v20210601:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:servicefabric/v20210601:Service":
                return new Service(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "servicefabric/v20210601", _module)