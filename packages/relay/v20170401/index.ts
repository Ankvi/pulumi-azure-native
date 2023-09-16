import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetHybridConnectionAuthorizationRuleArgs, GetHybridConnectionAuthorizationRuleResult, GetHybridConnectionAuthorizationRuleOutputArgs } from "./getHybridConnectionAuthorizationRule";
export const getHybridConnectionAuthorizationRule: typeof import("./getHybridConnectionAuthorizationRule").getHybridConnectionAuthorizationRule = null as any;
export const getHybridConnectionAuthorizationRuleOutput: typeof import("./getHybridConnectionAuthorizationRule").getHybridConnectionAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getHybridConnectionAuthorizationRule","getHybridConnectionAuthorizationRuleOutput"], () => require("./getHybridConnectionAuthorizationRule"));

export { GetNamespaceAuthorizationRuleArgs, GetNamespaceAuthorizationRuleResult, GetNamespaceAuthorizationRuleOutputArgs } from "./getNamespaceAuthorizationRule";
export const getNamespaceAuthorizationRule: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRule = null as any;
export const getNamespaceAuthorizationRuleOutput: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceAuthorizationRule","getNamespaceAuthorizationRuleOutput"], () => require("./getNamespaceAuthorizationRule"));

export { GetWCFRelayAuthorizationRuleArgs, GetWCFRelayAuthorizationRuleResult, GetWCFRelayAuthorizationRuleOutputArgs } from "./getWCFRelayAuthorizationRule";
export const getWCFRelayAuthorizationRule: typeof import("./getWCFRelayAuthorizationRule").getWCFRelayAuthorizationRule = null as any;
export const getWCFRelayAuthorizationRuleOutput: typeof import("./getWCFRelayAuthorizationRule").getWCFRelayAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getWCFRelayAuthorizationRule","getWCFRelayAuthorizationRuleOutput"], () => require("./getWCFRelayAuthorizationRule"));

export { HybridConnectionAuthorizationRuleArgs } from "./hybridConnectionAuthorizationRule";
export type HybridConnectionAuthorizationRule = import("./hybridConnectionAuthorizationRule").HybridConnectionAuthorizationRule;
export const HybridConnectionAuthorizationRule: typeof import("./hybridConnectionAuthorizationRule").HybridConnectionAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["HybridConnectionAuthorizationRule"], () => require("./hybridConnectionAuthorizationRule"));

export { NamespaceAuthorizationRuleArgs } from "./namespaceAuthorizationRule";
export type NamespaceAuthorizationRule = import("./namespaceAuthorizationRule").NamespaceAuthorizationRule;
export const NamespaceAuthorizationRule: typeof import("./namespaceAuthorizationRule").NamespaceAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["NamespaceAuthorizationRule"], () => require("./namespaceAuthorizationRule"));

export { WCFRelayAuthorizationRuleArgs } from "./wcfrelayAuthorizationRule";
export type WCFRelayAuthorizationRule = import("./wcfrelayAuthorizationRule").WCFRelayAuthorizationRule;
export const WCFRelayAuthorizationRule: typeof import("./wcfrelayAuthorizationRule").WCFRelayAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["WCFRelayAuthorizationRule"], () => require("./wcfrelayAuthorizationRule"));


// Export enums:
export * from "../types/enums/v20170401";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:relay/v20170401:HybridConnectionAuthorizationRule":
                return new HybridConnectionAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:relay/v20170401:NamespaceAuthorizationRule":
                return new NamespaceAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:relay/v20170401:WCFRelayAuthorizationRule":
                return new WCFRelayAuthorizationRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "relay/v20170401", _module)
