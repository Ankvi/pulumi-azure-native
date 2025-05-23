import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLabArgs, GetLabResult, GetLabOutputArgs } from "./getLab";
export const getLab: typeof import("./getLab").getLab = null as any;
export const getLabOutput: typeof import("./getLab").getLabOutput = null as any;
utilities.lazyLoad(exports, ["getLab","getLabOutput"], () => require("./getLab"));

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

export { LabPlanArgs } from "./labPlan";
export type LabPlan = import("./labPlan").LabPlan;
export const LabPlan: typeof import("./labPlan").LabPlan = null as any;
utilities.lazyLoad(exports, ["LabPlan"], () => require("./labPlan"));

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

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:labservices:Lab":
                return new Lab(name, <any>undefined, { urn })
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