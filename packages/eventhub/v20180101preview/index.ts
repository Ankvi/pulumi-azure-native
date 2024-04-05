import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetNamespaceIpFilterRuleArgs, GetNamespaceIpFilterRuleResult, GetNamespaceIpFilterRuleOutputArgs } from "./getNamespaceIpFilterRule";
export const getNamespaceIpFilterRule: typeof import("./getNamespaceIpFilterRule").getNamespaceIpFilterRule = null as any;
export const getNamespaceIpFilterRuleOutput: typeof import("./getNamespaceIpFilterRule").getNamespaceIpFilterRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceIpFilterRule","getNamespaceIpFilterRuleOutput"], () => require("./getNamespaceIpFilterRule"));

export { GetNamespaceVirtualNetworkRuleArgs, GetNamespaceVirtualNetworkRuleResult, GetNamespaceVirtualNetworkRuleOutputArgs } from "./getNamespaceVirtualNetworkRule";
export const getNamespaceVirtualNetworkRule: typeof import("./getNamespaceVirtualNetworkRule").getNamespaceVirtualNetworkRule = null as any;
export const getNamespaceVirtualNetworkRuleOutput: typeof import("./getNamespaceVirtualNetworkRule").getNamespaceVirtualNetworkRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceVirtualNetworkRule","getNamespaceVirtualNetworkRuleOutput"], () => require("./getNamespaceVirtualNetworkRule"));

export { NamespaceIpFilterRuleArgs } from "./namespaceIpFilterRule";
export type NamespaceIpFilterRule = import("./namespaceIpFilterRule").NamespaceIpFilterRule;
export const NamespaceIpFilterRule: typeof import("./namespaceIpFilterRule").NamespaceIpFilterRule = null as any;
utilities.lazyLoad(exports, ["NamespaceIpFilterRule"], () => require("./namespaceIpFilterRule"));

export { NamespaceVirtualNetworkRuleArgs } from "./namespaceVirtualNetworkRule";
export type NamespaceVirtualNetworkRule = import("./namespaceVirtualNetworkRule").NamespaceVirtualNetworkRule;
export const NamespaceVirtualNetworkRule: typeof import("./namespaceVirtualNetworkRule").NamespaceVirtualNetworkRule = null as any;
utilities.lazyLoad(exports, ["NamespaceVirtualNetworkRule"], () => require("./namespaceVirtualNetworkRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:eventhub/v20180101preview:NamespaceIpFilterRule":
                return new NamespaceIpFilterRule(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20180101preview:NamespaceVirtualNetworkRule":
                return new NamespaceVirtualNetworkRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "eventhub/v20180101preview", _module)