import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FirewallRuleArgs } from "./firewallRule";
export type FirewallRule = import("./firewallRule").FirewallRule;
export const FirewallRule: typeof import("./firewallRule").FirewallRule = null as any;
utilities.lazyLoad(exports, ["FirewallRule"], () => require("./firewallRule"));

export { GetFirewallRuleArgs, GetFirewallRuleResult, GetFirewallRuleOutputArgs } from "./getFirewallRule";
export const getFirewallRule: typeof import("./getFirewallRule").getFirewallRule = null as any;
export const getFirewallRuleOutput: typeof import("./getFirewallRule").getFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallRule","getFirewallRuleOutput"], () => require("./getFirewallRule"));

export { GetMongoClusterArgs, GetMongoClusterResult, GetMongoClusterOutputArgs } from "./getMongoCluster";
export const getMongoCluster: typeof import("./getMongoCluster").getMongoCluster = null as any;
export const getMongoClusterOutput: typeof import("./getMongoCluster").getMongoClusterOutput = null as any;
utilities.lazyLoad(exports, ["getMongoCluster","getMongoClusterOutput"], () => require("./getMongoCluster"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { ListMongoClusterConnectionStringsArgs, ListMongoClusterConnectionStringsResult, ListMongoClusterConnectionStringsOutputArgs } from "./listMongoClusterConnectionStrings";
export const listMongoClusterConnectionStrings: typeof import("./listMongoClusterConnectionStrings").listMongoClusterConnectionStrings = null as any;
export const listMongoClusterConnectionStringsOutput: typeof import("./listMongoClusterConnectionStrings").listMongoClusterConnectionStringsOutput = null as any;
utilities.lazyLoad(exports, ["listMongoClusterConnectionStrings","listMongoClusterConnectionStringsOutput"], () => require("./listMongoClusterConnectionStrings"));

export { MongoClusterArgs } from "./mongoCluster";
export type MongoCluster = import("./mongoCluster").MongoCluster;
export const MongoCluster: typeof import("./mongoCluster").MongoCluster = null as any;
utilities.lazyLoad(exports, ["MongoCluster"], () => require("./mongoCluster"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:mongocluster:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:mongocluster:MongoCluster":
                return new MongoCluster(name, <any>undefined, { urn })
            case "azure-native:mongocluster:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "mongocluster", _module)