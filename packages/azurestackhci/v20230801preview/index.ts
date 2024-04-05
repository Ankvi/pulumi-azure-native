import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ArcSettingArgs } from "./arcSetting";
export type ArcSetting = import("./arcSetting").ArcSetting;
export const ArcSetting: typeof import("./arcSetting").ArcSetting = null as any;
utilities.lazyLoad(exports, ["ArcSetting"], () => require("./arcSetting"));

export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { DeploymentSettingArgs } from "./deploymentSetting";
export type DeploymentSetting = import("./deploymentSetting").DeploymentSetting;
export const DeploymentSetting: typeof import("./deploymentSetting").DeploymentSetting = null as any;
utilities.lazyLoad(exports, ["DeploymentSetting"], () => require("./deploymentSetting"));

export { EdgeDeviceArgs } from "./edgeDevice";
export type EdgeDevice = import("./edgeDevice").EdgeDevice;
export const EdgeDevice: typeof import("./edgeDevice").EdgeDevice = null as any;
utilities.lazyLoad(exports, ["EdgeDevice"], () => require("./edgeDevice"));

export { ExtensionArgs } from "./extension";
export type Extension = import("./extension").Extension;
export const Extension: typeof import("./extension").Extension = null as any;
utilities.lazyLoad(exports, ["Extension"], () => require("./extension"));

export { GetArcSettingArgs, GetArcSettingResult, GetArcSettingOutputArgs } from "./getArcSetting";
export const getArcSetting: typeof import("./getArcSetting").getArcSetting = null as any;
export const getArcSettingOutput: typeof import("./getArcSetting").getArcSettingOutput = null as any;
utilities.lazyLoad(exports, ["getArcSetting","getArcSettingOutput"], () => require("./getArcSetting"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetDeploymentSettingArgs, GetDeploymentSettingResult, GetDeploymentSettingOutputArgs } from "./getDeploymentSetting";
export const getDeploymentSetting: typeof import("./getDeploymentSetting").getDeploymentSetting = null as any;
export const getDeploymentSettingOutput: typeof import("./getDeploymentSetting").getDeploymentSettingOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentSetting","getDeploymentSettingOutput"], () => require("./getDeploymentSetting"));

export { GetEdgeDeviceArgs, GetEdgeDeviceResult, GetEdgeDeviceOutputArgs } from "./getEdgeDevice";
export const getEdgeDevice: typeof import("./getEdgeDevice").getEdgeDevice = null as any;
export const getEdgeDeviceOutput: typeof import("./getEdgeDevice").getEdgeDeviceOutput = null as any;
utilities.lazyLoad(exports, ["getEdgeDevice","getEdgeDeviceOutput"], () => require("./getEdgeDevice"));

export { GetExtensionArgs, GetExtensionResult, GetExtensionOutputArgs } from "./getExtension";
export const getExtension: typeof import("./getExtension").getExtension = null as any;
export const getExtensionOutput: typeof import("./getExtension").getExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getExtension","getExtensionOutput"], () => require("./getExtension"));

export { GetUpdateArgs, GetUpdateResult, GetUpdateOutputArgs } from "./getUpdate";
export const getUpdate: typeof import("./getUpdate").getUpdate = null as any;
export const getUpdateOutput: typeof import("./getUpdate").getUpdateOutput = null as any;
utilities.lazyLoad(exports, ["getUpdate","getUpdateOutput"], () => require("./getUpdate"));

export { GetUpdateRunArgs, GetUpdateRunResult, GetUpdateRunOutputArgs } from "./getUpdateRun";
export const getUpdateRun: typeof import("./getUpdateRun").getUpdateRun = null as any;
export const getUpdateRunOutput: typeof import("./getUpdateRun").getUpdateRunOutput = null as any;
utilities.lazyLoad(exports, ["getUpdateRun","getUpdateRunOutput"], () => require("./getUpdateRun"));

export { GetUpdateSummaryArgs, GetUpdateSummaryResult, GetUpdateSummaryOutputArgs } from "./getUpdateSummary";
export const getUpdateSummary: typeof import("./getUpdateSummary").getUpdateSummary = null as any;
export const getUpdateSummaryOutput: typeof import("./getUpdateSummary").getUpdateSummaryOutput = null as any;
utilities.lazyLoad(exports, ["getUpdateSummary","getUpdateSummaryOutput"], () => require("./getUpdateSummary"));

export { UpdateArgs } from "./update";
export type Update = import("./update").Update;
export const Update: typeof import("./update").Update = null as any;
utilities.lazyLoad(exports, ["Update"], () => require("./update"));

export { UpdateRunArgs } from "./updateRun";
export type UpdateRun = import("./updateRun").UpdateRun;
export const UpdateRun: typeof import("./updateRun").UpdateRun = null as any;
utilities.lazyLoad(exports, ["UpdateRun"], () => require("./updateRun"));

export { UpdateSummaryArgs } from "./updateSummary";
export type UpdateSummary = import("./updateSummary").UpdateSummary;
export const UpdateSummary: typeof import("./updateSummary").UpdateSummary = null as any;
utilities.lazyLoad(exports, ["UpdateSummary"], () => require("./updateSummary"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azurestackhci/v20230801preview:ArcSetting":
                return new ArcSetting(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230801preview:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230801preview:DeploymentSetting":
                return new DeploymentSetting(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230801preview:EdgeDevice":
                return new EdgeDevice(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230801preview:Extension":
                return new Extension(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230801preview:Update":
                return new Update(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230801preview:UpdateRun":
                return new UpdateRun(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230801preview:UpdateSummary":
                return new UpdateSummary(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azurestackhci/v20230801preview", _module)