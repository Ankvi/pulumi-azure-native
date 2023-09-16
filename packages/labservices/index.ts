import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EnvironmentArgs } from "./environment";
export type Environment = import("./environment").Environment;
export const Environment: typeof import("./environment").Environment = null as any;
utilities.lazyLoad(exports, ["Environment"], () => require("./environment"));

export { EnvironmentSettingArgs } from "./environmentSetting";
export type EnvironmentSetting = import("./environmentSetting").EnvironmentSetting;
export const EnvironmentSetting: typeof import("./environmentSetting").EnvironmentSetting = null as any;
utilities.lazyLoad(exports, ["EnvironmentSetting"], () => require("./environmentSetting"));

export { GalleryImageArgs } from "./galleryImage";
export type GalleryImage = import("./galleryImage").GalleryImage;
export const GalleryImage: typeof import("./galleryImage").GalleryImage = null as any;
utilities.lazyLoad(exports, ["GalleryImage"], () => require("./galleryImage"));

export { GetEnvironmentArgs, GetEnvironmentResult, GetEnvironmentOutputArgs } from "./getEnvironment";
export const getEnvironment: typeof import("./getEnvironment").getEnvironment = null as any;
export const getEnvironmentOutput: typeof import("./getEnvironment").getEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironment","getEnvironmentOutput"], () => require("./getEnvironment"));

export { GetEnvironmentSettingArgs, GetEnvironmentSettingResult, GetEnvironmentSettingOutputArgs } from "./getEnvironmentSetting";
export const getEnvironmentSetting: typeof import("./getEnvironmentSetting").getEnvironmentSetting = null as any;
export const getEnvironmentSettingOutput: typeof import("./getEnvironmentSetting").getEnvironmentSettingOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironmentSetting","getEnvironmentSettingOutput"], () => require("./getEnvironmentSetting"));

export { GetGalleryImageArgs, GetGalleryImageResult, GetGalleryImageOutputArgs } from "./getGalleryImage";
export const getGalleryImage: typeof import("./getGalleryImage").getGalleryImage = null as any;
export const getGalleryImageOutput: typeof import("./getGalleryImage").getGalleryImageOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryImage","getGalleryImageOutput"], () => require("./getGalleryImage"));

export { GetGlobalUserEnvironmentArgs, GetGlobalUserEnvironmentResult, GetGlobalUserEnvironmentOutputArgs } from "./getGlobalUserEnvironment";
export const getGlobalUserEnvironment: typeof import("./getGlobalUserEnvironment").getGlobalUserEnvironment = null as any;
export const getGlobalUserEnvironmentOutput: typeof import("./getGlobalUserEnvironment").getGlobalUserEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getGlobalUserEnvironment","getGlobalUserEnvironmentOutput"], () => require("./getGlobalUserEnvironment"));

export { GetGlobalUserOperationBatchStatusArgs, GetGlobalUserOperationBatchStatusResult, GetGlobalUserOperationBatchStatusOutputArgs } from "./getGlobalUserOperationBatchStatus";
export const getGlobalUserOperationBatchStatus: typeof import("./getGlobalUserOperationBatchStatus").getGlobalUserOperationBatchStatus = null as any;
export const getGlobalUserOperationBatchStatusOutput: typeof import("./getGlobalUserOperationBatchStatus").getGlobalUserOperationBatchStatusOutput = null as any;
utilities.lazyLoad(exports, ["getGlobalUserOperationBatchStatus","getGlobalUserOperationBatchStatusOutput"], () => require("./getGlobalUserOperationBatchStatus"));

export { GetGlobalUserOperationStatusArgs, GetGlobalUserOperationStatusResult, GetGlobalUserOperationStatusOutputArgs } from "./getGlobalUserOperationStatus";
export const getGlobalUserOperationStatus: typeof import("./getGlobalUserOperationStatus").getGlobalUserOperationStatus = null as any;
export const getGlobalUserOperationStatusOutput: typeof import("./getGlobalUserOperationStatus").getGlobalUserOperationStatusOutput = null as any;
utilities.lazyLoad(exports, ["getGlobalUserOperationStatus","getGlobalUserOperationStatusOutput"], () => require("./getGlobalUserOperationStatus"));

export { GetGlobalUserPersonalPreferencesArgs, GetGlobalUserPersonalPreferencesResult, GetGlobalUserPersonalPreferencesOutputArgs } from "./getGlobalUserPersonalPreferences";
export const getGlobalUserPersonalPreferences: typeof import("./getGlobalUserPersonalPreferences").getGlobalUserPersonalPreferences = null as any;
export const getGlobalUserPersonalPreferencesOutput: typeof import("./getGlobalUserPersonalPreferences").getGlobalUserPersonalPreferencesOutput = null as any;
utilities.lazyLoad(exports, ["getGlobalUserPersonalPreferences","getGlobalUserPersonalPreferencesOutput"], () => require("./getGlobalUserPersonalPreferences"));

export { GetLabArgs, GetLabResult, GetLabOutputArgs } from "./getLab";
export const getLab: typeof import("./getLab").getLab = null as any;
export const getLabOutput: typeof import("./getLab").getLabOutput = null as any;
utilities.lazyLoad(exports, ["getLab","getLabOutput"], () => require("./getLab"));

export { GetLabAccountArgs, GetLabAccountResult, GetLabAccountOutputArgs } from "./getLabAccount";
export const getLabAccount: typeof import("./getLabAccount").getLabAccount = null as any;
export const getLabAccountOutput: typeof import("./getLabAccount").getLabAccountOutput = null as any;
utilities.lazyLoad(exports, ["getLabAccount","getLabAccountOutput"], () => require("./getLabAccount"));

export { GetLabAccountRegionalAvailabilityArgs, GetLabAccountRegionalAvailabilityResult, GetLabAccountRegionalAvailabilityOutputArgs } from "./getLabAccountRegionalAvailability";
export const getLabAccountRegionalAvailability: typeof import("./getLabAccountRegionalAvailability").getLabAccountRegionalAvailability = null as any;
export const getLabAccountRegionalAvailabilityOutput: typeof import("./getLabAccountRegionalAvailability").getLabAccountRegionalAvailabilityOutput = null as any;
utilities.lazyLoad(exports, ["getLabAccountRegionalAvailability","getLabAccountRegionalAvailabilityOutput"], () => require("./getLabAccountRegionalAvailability"));

export { GetLabPlanArgs, GetLabPlanResult, GetLabPlanOutputArgs } from "./getLabPlan";
export const getLabPlan: typeof import("./getLabPlan").getLabPlan = null as any;
export const getLabPlanOutput: typeof import("./getLabPlan").getLabPlanOutput = null as any;
utilities.lazyLoad(exports, ["getLabPlan","getLabPlanOutput"], () => require("./getLabPlan"));

export { GetScheduleArgs, GetScheduleResult, GetScheduleOutputArgs } from "./getSchedule";
export const getSchedule: typeof import("./getSchedule").getSchedule = null as any;
export const getScheduleOutput: typeof import("./getSchedule").getScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getSchedule","getScheduleOutput"], () => require("./getSchedule"));

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { LabArgs } from "./lab";
export type Lab = import("./lab").Lab;
export const Lab: typeof import("./lab").Lab = null as any;
utilities.lazyLoad(exports, ["Lab"], () => require("./lab"));

export { LabAccountArgs } from "./labAccount";
export type LabAccount = import("./labAccount").LabAccount;
export const LabAccount: typeof import("./labAccount").LabAccount = null as any;
utilities.lazyLoad(exports, ["LabAccount"], () => require("./labAccount"));

export { LabPlanArgs } from "./labPlan";
export type LabPlan = import("./labPlan").LabPlan;
export const LabPlan: typeof import("./labPlan").LabPlan = null as any;
utilities.lazyLoad(exports, ["LabPlan"], () => require("./labPlan"));

export { ListGlobalUserEnvironmentsArgs, ListGlobalUserEnvironmentsResult, ListGlobalUserEnvironmentsOutputArgs } from "./listGlobalUserEnvironments";
export const listGlobalUserEnvironments: typeof import("./listGlobalUserEnvironments").listGlobalUserEnvironments = null as any;
export const listGlobalUserEnvironmentsOutput: typeof import("./listGlobalUserEnvironments").listGlobalUserEnvironmentsOutput = null as any;
utilities.lazyLoad(exports, ["listGlobalUserEnvironments","listGlobalUserEnvironmentsOutput"], () => require("./listGlobalUserEnvironments"));

export { ListGlobalUserLabsArgs, ListGlobalUserLabsResult, ListGlobalUserLabsOutputArgs } from "./listGlobalUserLabs";
export const listGlobalUserLabs: typeof import("./listGlobalUserLabs").listGlobalUserLabs = null as any;
export const listGlobalUserLabsOutput: typeof import("./listGlobalUserLabs").listGlobalUserLabsOutput = null as any;
utilities.lazyLoad(exports, ["listGlobalUserLabs","listGlobalUserLabsOutput"], () => require("./listGlobalUserLabs"));

export { ScheduleArgs } from "./schedule";
export type Schedule = import("./schedule").Schedule;
export const Schedule: typeof import("./schedule").Schedule = null as any;
utilities.lazyLoad(exports, ["Schedule"], () => require("./schedule"));

export { UserArgs } from "./user";
export type User = import("./user").User;
export const User: typeof import("./user").User = null as any;
utilities.lazyLoad(exports, ["User"], () => require("./user"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20181015 from "./v20181015";
import * as v20220801 from "./v20220801";
import * as v20230607 from "./v20230607";

export {
    v20181015,
    v20220801,
    v20230607,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:labservices:Environment":
                return new Environment(name, <any>undefined, { urn })
            case "azure-native:labservices:EnvironmentSetting":
                return new EnvironmentSetting(name, <any>undefined, { urn })
            case "azure-native:labservices:GalleryImage":
                return new GalleryImage(name, <any>undefined, { urn })
            case "azure-native:labservices:Lab":
                return new Lab(name, <any>undefined, { urn })
            case "azure-native:labservices:LabAccount":
                return new LabAccount(name, <any>undefined, { urn })
            case "azure-native:labservices:LabPlan":
                return new LabPlan(name, <any>undefined, { urn })
            case "azure-native:labservices:Schedule":
                return new Schedule(name, <any>undefined, { urn })
            case "azure-native:labservices:User":
                return new User(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "labservices", _module)
