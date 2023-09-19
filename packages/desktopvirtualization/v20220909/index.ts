import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationArgs } from "./application";
export type Application = import("./application").Application;
export const Application: typeof import("./application").Application = null as any;
utilities.lazyLoad(exports, ["Application"], () => require("./application"));

export { ApplicationGroupArgs } from "./applicationGroup";
export type ApplicationGroup = import("./applicationGroup").ApplicationGroup;
export const ApplicationGroup: typeof import("./applicationGroup").ApplicationGroup = null as any;
utilities.lazyLoad(exports, ["ApplicationGroup"], () => require("./applicationGroup"));

export { GetApplicationArgs, GetApplicationResult, GetApplicationOutputArgs } from "./getApplication";
export const getApplication: typeof import("./getApplication").getApplication = null as any;
export const getApplicationOutput: typeof import("./getApplication").getApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getApplication","getApplicationOutput"], () => require("./getApplication"));

export { GetApplicationGroupArgs, GetApplicationGroupResult, GetApplicationGroupOutputArgs } from "./getApplicationGroup";
export const getApplicationGroup: typeof import("./getApplicationGroup").getApplicationGroup = null as any;
export const getApplicationGroupOutput: typeof import("./getApplicationGroup").getApplicationGroupOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGroup","getApplicationGroupOutput"], () => require("./getApplicationGroup"));

export { GetHostPoolArgs, GetHostPoolResult, GetHostPoolOutputArgs } from "./getHostPool";
export const getHostPool: typeof import("./getHostPool").getHostPool = null as any;
export const getHostPoolOutput: typeof import("./getHostPool").getHostPoolOutput = null as any;
utilities.lazyLoad(exports, ["getHostPool","getHostPoolOutput"], () => require("./getHostPool"));

export { GetMSIXPackageArgs, GetMSIXPackageResult, GetMSIXPackageOutputArgs } from "./getMSIXPackage";
export const getMSIXPackage: typeof import("./getMSIXPackage").getMSIXPackage = null as any;
export const getMSIXPackageOutput: typeof import("./getMSIXPackage").getMSIXPackageOutput = null as any;
utilities.lazyLoad(exports, ["getMSIXPackage","getMSIXPackageOutput"], () => require("./getMSIXPackage"));

export { GetScalingPlanArgs, GetScalingPlanResult, GetScalingPlanOutputArgs } from "./getScalingPlan";
export const getScalingPlan: typeof import("./getScalingPlan").getScalingPlan = null as any;
export const getScalingPlanOutput: typeof import("./getScalingPlan").getScalingPlanOutput = null as any;
utilities.lazyLoad(exports, ["getScalingPlan","getScalingPlanOutput"], () => require("./getScalingPlan"));

export { GetScalingPlanPooledScheduleArgs, GetScalingPlanPooledScheduleResult, GetScalingPlanPooledScheduleOutputArgs } from "./getScalingPlanPooledSchedule";
export const getScalingPlanPooledSchedule: typeof import("./getScalingPlanPooledSchedule").getScalingPlanPooledSchedule = null as any;
export const getScalingPlanPooledScheduleOutput: typeof import("./getScalingPlanPooledSchedule").getScalingPlanPooledScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getScalingPlanPooledSchedule","getScalingPlanPooledScheduleOutput"], () => require("./getScalingPlanPooledSchedule"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { HostPoolArgs } from "./hostPool";
export type HostPool = import("./hostPool").HostPool;
export const HostPool: typeof import("./hostPool").HostPool = null as any;
utilities.lazyLoad(exports, ["HostPool"], () => require("./hostPool"));

export { MSIXPackageArgs } from "./msixpackage";
export type MSIXPackage = import("./msixpackage").MSIXPackage;
export const MSIXPackage: typeof import("./msixpackage").MSIXPackage = null as any;
utilities.lazyLoad(exports, ["MSIXPackage"], () => require("./msixpackage"));

export { ScalingPlanArgs } from "./scalingPlan";
export type ScalingPlan = import("./scalingPlan").ScalingPlan;
export const ScalingPlan: typeof import("./scalingPlan").ScalingPlan = null as any;
utilities.lazyLoad(exports, ["ScalingPlan"], () => require("./scalingPlan"));

export { ScalingPlanPooledScheduleArgs } from "./scalingPlanPooledSchedule";
export type ScalingPlanPooledSchedule = import("./scalingPlanPooledSchedule").ScalingPlanPooledSchedule;
export const ScalingPlanPooledSchedule: typeof import("./scalingPlanPooledSchedule").ScalingPlanPooledSchedule = null as any;
utilities.lazyLoad(exports, ["ScalingPlanPooledSchedule"], () => require("./scalingPlanPooledSchedule"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:desktopvirtualization/v20220909:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-native:desktopvirtualization/v20220909:ApplicationGroup":
                return new ApplicationGroup(name, <any>undefined, { urn })
            case "azure-native:desktopvirtualization/v20220909:HostPool":
                return new HostPool(name, <any>undefined, { urn })
            case "azure-native:desktopvirtualization/v20220909:MSIXPackage":
                return new MSIXPackage(name, <any>undefined, { urn })
            case "azure-native:desktopvirtualization/v20220909:ScalingPlan":
                return new ScalingPlan(name, <any>undefined, { urn })
            case "azure-native:desktopvirtualization/v20220909:ScalingPlanPooledSchedule":
                return new ScalingPlanPooledSchedule(name, <any>undefined, { urn })
            case "azure-native:desktopvirtualization/v20220909:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "desktopvirtualization/v20220909", _module)
