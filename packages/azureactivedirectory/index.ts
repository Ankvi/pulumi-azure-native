import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { B2CTenantArgs } from "./b2ctenant";
export type B2CTenant = import("./b2ctenant").B2CTenant;
export const B2CTenant: typeof import("./b2ctenant").B2CTenant = null as any;
utilities.lazyLoad(exports, ["B2CTenant"], () => require("./b2ctenant"));

export { CIAMTenantArgs } from "./ciamtenant";
export type CIAMTenant = import("./ciamtenant").CIAMTenant;
export const CIAMTenant: typeof import("./ciamtenant").CIAMTenant = null as any;
utilities.lazyLoad(exports, ["CIAMTenant"], () => require("./ciamtenant"));

export { GetB2CTenantArgs, GetB2CTenantResult, GetB2CTenantOutputArgs } from "./getB2CTenant";
export const getB2CTenant: typeof import("./getB2CTenant").getB2CTenant = null as any;
export const getB2CTenantOutput: typeof import("./getB2CTenant").getB2CTenantOutput = null as any;
utilities.lazyLoad(exports, ["getB2CTenant","getB2CTenantOutput"], () => require("./getB2CTenant"));

export { GetCIAMTenantArgs, GetCIAMTenantResult, GetCIAMTenantOutputArgs } from "./getCIAMTenant";
export const getCIAMTenant: typeof import("./getCIAMTenant").getCIAMTenant = null as any;
export const getCIAMTenantOutput: typeof import("./getCIAMTenant").getCIAMTenantOutput = null as any;
utilities.lazyLoad(exports, ["getCIAMTenant","getCIAMTenantOutput"], () => require("./getCIAMTenant"));

export { GetGuestUsageArgs, GetGuestUsageResult, GetGuestUsageOutputArgs } from "./getGuestUsage";
export const getGuestUsage: typeof import("./getGuestUsage").getGuestUsage = null as any;
export const getGuestUsageOutput: typeof import("./getGuestUsage").getGuestUsageOutput = null as any;
utilities.lazyLoad(exports, ["getGuestUsage","getGuestUsageOutput"], () => require("./getGuestUsage"));

export { GuestUsageArgs } from "./guestUsage";
export type GuestUsage = import("./guestUsage").GuestUsage;
export const GuestUsage: typeof import("./guestUsage").GuestUsage = null as any;
utilities.lazyLoad(exports, ["GuestUsage"], () => require("./guestUsage"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azureactivedirectory:B2CTenant":
                return new B2CTenant(name, <any>undefined, { urn })
            case "azure-native:azureactivedirectory:CIAMTenant":
                return new CIAMTenant(name, <any>undefined, { urn })
            case "azure-native:azureactivedirectory:GuestUsage":
                return new GuestUsage(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azureactivedirectory", _module)