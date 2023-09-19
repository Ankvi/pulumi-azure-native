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

export { GetServerGroupArgs, GetServerGroupResult, GetServerGroupOutputArgs } from "./getServerGroup";
export const getServerGroup: typeof import("./getServerGroup").getServerGroup = null as any;
export const getServerGroupOutput: typeof import("./getServerGroup").getServerGroupOutput = null as any;
utilities.lazyLoad(exports, ["getServerGroup","getServerGroupOutput"], () => require("./getServerGroup"));

export { ServerGroupArgs } from "./serverGroup";
export type ServerGroup = import("./serverGroup").ServerGroup;
export const ServerGroup: typeof import("./serverGroup").ServerGroup = null as any;
utilities.lazyLoad(exports, ["ServerGroup"], () => require("./serverGroup"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbforpostgresql/v20201005privatepreview:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20201005privatepreview:ServerGroup":
                return new ServerGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbforpostgresql/v20201005privatepreview", _module)
