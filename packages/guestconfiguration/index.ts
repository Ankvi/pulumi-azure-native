import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGuestConfigurationAssignmentArgs, GetGuestConfigurationAssignmentResult, GetGuestConfigurationAssignmentOutputArgs } from "./getGuestConfigurationAssignment";
export const getGuestConfigurationAssignment: typeof import("./getGuestConfigurationAssignment").getGuestConfigurationAssignment = null as any;
export const getGuestConfigurationAssignmentOutput: typeof import("./getGuestConfigurationAssignment").getGuestConfigurationAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getGuestConfigurationAssignment","getGuestConfigurationAssignmentOutput"], () => require("./getGuestConfigurationAssignment"));

export { GetGuestConfigurationAssignmentsVMSSArgs, GetGuestConfigurationAssignmentsVMSSResult, GetGuestConfigurationAssignmentsVMSSOutputArgs } from "./getGuestConfigurationAssignmentsVMSS";
export const getGuestConfigurationAssignmentsVMSS: typeof import("./getGuestConfigurationAssignmentsVMSS").getGuestConfigurationAssignmentsVMSS = null as any;
export const getGuestConfigurationAssignmentsVMSSOutput: typeof import("./getGuestConfigurationAssignmentsVMSS").getGuestConfigurationAssignmentsVMSSOutput = null as any;
utilities.lazyLoad(exports, ["getGuestConfigurationAssignmentsVMSS","getGuestConfigurationAssignmentsVMSSOutput"], () => require("./getGuestConfigurationAssignmentsVMSS"));

export { GetGuestConfigurationConnectedVMwarevSphereAssignmentArgs, GetGuestConfigurationConnectedVMwarevSphereAssignmentResult, GetGuestConfigurationConnectedVMwarevSphereAssignmentOutputArgs } from "./getGuestConfigurationConnectedVMwarevSphereAssignment";
export const getGuestConfigurationConnectedVMwarevSphereAssignment: typeof import("./getGuestConfigurationConnectedVMwarevSphereAssignment").getGuestConfigurationConnectedVMwarevSphereAssignment = null as any;
export const getGuestConfigurationConnectedVMwarevSphereAssignmentOutput: typeof import("./getGuestConfigurationConnectedVMwarevSphereAssignment").getGuestConfigurationConnectedVMwarevSphereAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getGuestConfigurationConnectedVMwarevSphereAssignment","getGuestConfigurationConnectedVMwarevSphereAssignmentOutput"], () => require("./getGuestConfigurationConnectedVMwarevSphereAssignment"));

export { GetGuestConfigurationHCRPAssignmentArgs, GetGuestConfigurationHCRPAssignmentResult, GetGuestConfigurationHCRPAssignmentOutputArgs } from "./getGuestConfigurationHCRPAssignment";
export const getGuestConfigurationHCRPAssignment: typeof import("./getGuestConfigurationHCRPAssignment").getGuestConfigurationHCRPAssignment = null as any;
export const getGuestConfigurationHCRPAssignmentOutput: typeof import("./getGuestConfigurationHCRPAssignment").getGuestConfigurationHCRPAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getGuestConfigurationHCRPAssignment","getGuestConfigurationHCRPAssignmentOutput"], () => require("./getGuestConfigurationHCRPAssignment"));

export { GuestConfigurationAssignmentArgs } from "./guestConfigurationAssignment";
export type GuestConfigurationAssignment = import("./guestConfigurationAssignment").GuestConfigurationAssignment;
export const GuestConfigurationAssignment: typeof import("./guestConfigurationAssignment").GuestConfigurationAssignment = null as any;
utilities.lazyLoad(exports, ["GuestConfigurationAssignment"], () => require("./guestConfigurationAssignment"));

export { GuestConfigurationAssignmentsVMSSArgs } from "./guestConfigurationAssignmentsVMSS";
export type GuestConfigurationAssignmentsVMSS = import("./guestConfigurationAssignmentsVMSS").GuestConfigurationAssignmentsVMSS;
export const GuestConfigurationAssignmentsVMSS: typeof import("./guestConfigurationAssignmentsVMSS").GuestConfigurationAssignmentsVMSS = null as any;
utilities.lazyLoad(exports, ["GuestConfigurationAssignmentsVMSS"], () => require("./guestConfigurationAssignmentsVMSS"));

export { GuestConfigurationConnectedVMwarevSphereAssignmentArgs } from "./guestConfigurationConnectedVMwarevSphereAssignment";
export type GuestConfigurationConnectedVMwarevSphereAssignment = import("./guestConfigurationConnectedVMwarevSphereAssignment").GuestConfigurationConnectedVMwarevSphereAssignment;
export const GuestConfigurationConnectedVMwarevSphereAssignment: typeof import("./guestConfigurationConnectedVMwarevSphereAssignment").GuestConfigurationConnectedVMwarevSphereAssignment = null as any;
utilities.lazyLoad(exports, ["GuestConfigurationConnectedVMwarevSphereAssignment"], () => require("./guestConfigurationConnectedVMwarevSphereAssignment"));

export { GuestConfigurationHCRPAssignmentArgs } from "./guestConfigurationHCRPAssignment";
export type GuestConfigurationHCRPAssignment = import("./guestConfigurationHCRPAssignment").GuestConfigurationHCRPAssignment;
export const GuestConfigurationHCRPAssignment: typeof import("./guestConfigurationHCRPAssignment").GuestConfigurationHCRPAssignment = null as any;
utilities.lazyLoad(exports, ["GuestConfigurationHCRPAssignment"], () => require("./guestConfigurationHCRPAssignment"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:guestconfiguration:GuestConfigurationAssignment":
                return new GuestConfigurationAssignment(name, <any>undefined, { urn })
            case "azure-native:guestconfiguration:GuestConfigurationAssignmentsVMSS":
                return new GuestConfigurationAssignmentsVMSS(name, <any>undefined, { urn })
            case "azure-native:guestconfiguration:GuestConfigurationConnectedVMwarevSphereAssignment":
                return new GuestConfigurationConnectedVMwarevSphereAssignment(name, <any>undefined, { urn })
            case "azure-native:guestconfiguration:GuestConfigurationHCRPAssignment":
                return new GuestConfigurationHCRPAssignment(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "guestconfiguration", _module)