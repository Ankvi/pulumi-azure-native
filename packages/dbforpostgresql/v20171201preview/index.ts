import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { GetServerAdministratorArgs, GetServerAdministratorResult, GetServerAdministratorOutputArgs } from "./getServerAdministrator";
export const getServerAdministrator: typeof import("./getServerAdministrator").getServerAdministrator = null as any;
export const getServerAdministratorOutput: typeof import("./getServerAdministrator").getServerAdministratorOutput = null as any;
utilities.lazyLoad(exports, ["getServerAdministrator","getServerAdministratorOutput"], () => require("./getServerAdministrator"));

export { GetServerSecurityAlertPolicyArgs, GetServerSecurityAlertPolicyResult, GetServerSecurityAlertPolicyOutputArgs } from "./getServerSecurityAlertPolicy";
export const getServerSecurityAlertPolicy: typeof import("./getServerSecurityAlertPolicy").getServerSecurityAlertPolicy = null as any;
export const getServerSecurityAlertPolicyOutput: typeof import("./getServerSecurityAlertPolicy").getServerSecurityAlertPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getServerSecurityAlertPolicy","getServerSecurityAlertPolicyOutput"], () => require("./getServerSecurityAlertPolicy"));

export { GetVirtualNetworkRuleArgs, GetVirtualNetworkRuleResult, GetVirtualNetworkRuleOutputArgs } from "./getVirtualNetworkRule";
export const getVirtualNetworkRule: typeof import("./getVirtualNetworkRule").getVirtualNetworkRule = null as any;
export const getVirtualNetworkRuleOutput: typeof import("./getVirtualNetworkRule").getVirtualNetworkRuleOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkRule","getVirtualNetworkRuleOutput"], () => require("./getVirtualNetworkRule"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { ServerAdministratorArgs } from "./serverAdministrator";
export type ServerAdministrator = import("./serverAdministrator").ServerAdministrator;
export const ServerAdministrator: typeof import("./serverAdministrator").ServerAdministrator = null as any;
utilities.lazyLoad(exports, ["ServerAdministrator"], () => require("./serverAdministrator"));

export { ServerSecurityAlertPolicyArgs } from "./serverSecurityAlertPolicy";
export type ServerSecurityAlertPolicy = import("./serverSecurityAlertPolicy").ServerSecurityAlertPolicy;
export const ServerSecurityAlertPolicy: typeof import("./serverSecurityAlertPolicy").ServerSecurityAlertPolicy = null as any;
utilities.lazyLoad(exports, ["ServerSecurityAlertPolicy"], () => require("./serverSecurityAlertPolicy"));

export { VirtualNetworkRuleArgs } from "./virtualNetworkRule";
export type VirtualNetworkRule = import("./virtualNetworkRule").VirtualNetworkRule;
export const VirtualNetworkRule: typeof import("./virtualNetworkRule").VirtualNetworkRule = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkRule"], () => require("./virtualNetworkRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbforpostgresql/v20171201preview:Server":
                return new Server(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20171201preview:ServerAdministrator":
                return new ServerAdministrator(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20171201preview:ServerSecurityAlertPolicy":
                return new ServerSecurityAlertPolicy(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20171201preview:VirtualNetworkRule":
                return new VirtualNetworkRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbforpostgresql/v20171201preview", _module)