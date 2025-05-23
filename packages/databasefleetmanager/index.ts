import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FirewallRuleArgs } from "./firewallRule";
export type FirewallRule = import("./firewallRule").FirewallRule;
export const FirewallRule: typeof import("./firewallRule").FirewallRule = null as any;
utilities.lazyLoad(exports, ["FirewallRule"], () => require("./firewallRule"));

export { FleetArgs } from "./fleet";
export type Fleet = import("./fleet").Fleet;
export const Fleet: typeof import("./fleet").Fleet = null as any;
utilities.lazyLoad(exports, ["Fleet"], () => require("./fleet"));

export { FleetDatabaseArgs } from "./fleetDatabase";
export type FleetDatabase = import("./fleetDatabase").FleetDatabase;
export const FleetDatabase: typeof import("./fleetDatabase").FleetDatabase = null as any;
utilities.lazyLoad(exports, ["FleetDatabase"], () => require("./fleetDatabase"));

export { FleetTierArgs } from "./fleetTier";
export type FleetTier = import("./fleetTier").FleetTier;
export const FleetTier: typeof import("./fleetTier").FleetTier = null as any;
utilities.lazyLoad(exports, ["FleetTier"], () => require("./fleetTier"));

export { FleetspaceArgs } from "./fleetspace";
export type Fleetspace = import("./fleetspace").Fleetspace;
export const Fleetspace: typeof import("./fleetspace").Fleetspace = null as any;
utilities.lazyLoad(exports, ["Fleetspace"], () => require("./fleetspace"));

export { GetFirewallRuleArgs, GetFirewallRuleResult, GetFirewallRuleOutputArgs } from "./getFirewallRule";
export const getFirewallRule: typeof import("./getFirewallRule").getFirewallRule = null as any;
export const getFirewallRuleOutput: typeof import("./getFirewallRule").getFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallRule","getFirewallRuleOutput"], () => require("./getFirewallRule"));

export { GetFleetArgs, GetFleetResult, GetFleetOutputArgs } from "./getFleet";
export const getFleet: typeof import("./getFleet").getFleet = null as any;
export const getFleetOutput: typeof import("./getFleet").getFleetOutput = null as any;
utilities.lazyLoad(exports, ["getFleet","getFleetOutput"], () => require("./getFleet"));

export { GetFleetDatabaseArgs, GetFleetDatabaseResult, GetFleetDatabaseOutputArgs } from "./getFleetDatabase";
export const getFleetDatabase: typeof import("./getFleetDatabase").getFleetDatabase = null as any;
export const getFleetDatabaseOutput: typeof import("./getFleetDatabase").getFleetDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getFleetDatabase","getFleetDatabaseOutput"], () => require("./getFleetDatabase"));

export { GetFleetTierArgs, GetFleetTierResult, GetFleetTierOutputArgs } from "./getFleetTier";
export const getFleetTier: typeof import("./getFleetTier").getFleetTier = null as any;
export const getFleetTierOutput: typeof import("./getFleetTier").getFleetTierOutput = null as any;
utilities.lazyLoad(exports, ["getFleetTier","getFleetTierOutput"], () => require("./getFleetTier"));

export { GetFleetspaceArgs, GetFleetspaceResult, GetFleetspaceOutputArgs } from "./getFleetspace";
export const getFleetspace: typeof import("./getFleetspace").getFleetspace = null as any;
export const getFleetspaceOutput: typeof import("./getFleetspace").getFleetspaceOutput = null as any;
utilities.lazyLoad(exports, ["getFleetspace","getFleetspaceOutput"], () => require("./getFleetspace"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:databasefleetmanager:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:databasefleetmanager:Fleet":
                return new Fleet(name, <any>undefined, { urn })
            case "azure-native:databasefleetmanager:FleetDatabase":
                return new FleetDatabase(name, <any>undefined, { urn })
            case "azure-native:databasefleetmanager:FleetTier":
                return new FleetTier(name, <any>undefined, { urn })
            case "azure-native:databasefleetmanager:Fleetspace":
                return new Fleetspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "databasefleetmanager", _module)