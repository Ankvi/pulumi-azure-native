import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLicenseArgs, GetLicenseResult, GetLicenseOutputArgs } from "./getLicense";
export const getLicense: typeof import("./getLicense").getLicense = null as any;
export const getLicenseOutput: typeof import("./getLicense").getLicenseOutput = null as any;
utilities.lazyLoad(exports, ["getLicense","getLicenseOutput"], () => require("./getLicense"));

export { GetLicenseProfileArgs, GetLicenseProfileResult, GetLicenseProfileOutputArgs } from "./getLicenseProfile";
export const getLicenseProfile: typeof import("./getLicenseProfile").getLicenseProfile = null as any;
export const getLicenseProfileOutput: typeof import("./getLicenseProfile").getLicenseProfileOutput = null as any;
utilities.lazyLoad(exports, ["getLicenseProfile","getLicenseProfileOutput"], () => require("./getLicenseProfile"));

export { GetMachineArgs, GetMachineResult, GetMachineOutputArgs } from "./getMachine";
export const getMachine: typeof import("./getMachine").getMachine = null as any;
export const getMachineOutput: typeof import("./getMachine").getMachineOutput = null as any;
utilities.lazyLoad(exports, ["getMachine","getMachineOutput"], () => require("./getMachine"));

export { GetMachineExtensionArgs, GetMachineExtensionResult, GetMachineExtensionOutputArgs } from "./getMachineExtension";
export const getMachineExtension: typeof import("./getMachineExtension").getMachineExtension = null as any;
export const getMachineExtensionOutput: typeof import("./getMachineExtension").getMachineExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getMachineExtension","getMachineExtensionOutput"], () => require("./getMachineExtension"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetPrivateLinkScopeArgs, GetPrivateLinkScopeResult, GetPrivateLinkScopeOutputArgs } from "./getPrivateLinkScope";
export const getPrivateLinkScope: typeof import("./getPrivateLinkScope").getPrivateLinkScope = null as any;
export const getPrivateLinkScopeOutput: typeof import("./getPrivateLinkScope").getPrivateLinkScopeOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkScope","getPrivateLinkScopeOutput"], () => require("./getPrivateLinkScope"));

export { LicenseArgs } from "./license";
export type License = import("./license").License;
export const License: typeof import("./license").License = null as any;
utilities.lazyLoad(exports, ["License"], () => require("./license"));

export { LicenseProfileArgs } from "./licenseProfile";
export type LicenseProfile = import("./licenseProfile").LicenseProfile;
export const LicenseProfile: typeof import("./licenseProfile").LicenseProfile = null as any;
utilities.lazyLoad(exports, ["LicenseProfile"], () => require("./licenseProfile"));

export { MachineArgs } from "./machine";
export type Machine = import("./machine").Machine;
export const Machine: typeof import("./machine").Machine = null as any;
utilities.lazyLoad(exports, ["Machine"], () => require("./machine"));

export { MachineExtensionArgs } from "./machineExtension";
export type MachineExtension = import("./machineExtension").MachineExtension;
export const MachineExtension: typeof import("./machineExtension").MachineExtension = null as any;
utilities.lazyLoad(exports, ["MachineExtension"], () => require("./machineExtension"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { PrivateLinkScopeArgs } from "./privateLinkScope";
export type PrivateLinkScope = import("./privateLinkScope").PrivateLinkScope;
export const PrivateLinkScope: typeof import("./privateLinkScope").PrivateLinkScope = null as any;
utilities.lazyLoad(exports, ["PrivateLinkScope"], () => require("./privateLinkScope"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybridcompute/v20230620preview:License":
                return new License(name, <any>undefined, { urn })
            case "azure-native:hybridcompute/v20230620preview:LicenseProfile":
                return new LicenseProfile(name, <any>undefined, { urn })
            case "azure-native:hybridcompute/v20230620preview:Machine":
                return new Machine(name, <any>undefined, { urn })
            case "azure-native:hybridcompute/v20230620preview:MachineExtension":
                return new MachineExtension(name, <any>undefined, { urn })
            case "azure-native:hybridcompute/v20230620preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:hybridcompute/v20230620preview:PrivateLinkScope":
                return new PrivateLinkScope(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybridcompute/v20230620preview", _module)