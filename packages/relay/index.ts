import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetHybridConnectionArgs, GetHybridConnectionResult, GetHybridConnectionOutputArgs } from "./getHybridConnection";
export const getHybridConnection: typeof import("./getHybridConnection").getHybridConnection = null as any;
export const getHybridConnectionOutput: typeof import("./getHybridConnection").getHybridConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getHybridConnection","getHybridConnectionOutput"], () => require("./getHybridConnection"));

export { GetHybridConnectionAuthorizationRuleArgs, GetHybridConnectionAuthorizationRuleResult, GetHybridConnectionAuthorizationRuleOutputArgs } from "./getHybridConnectionAuthorizationRule";
export const getHybridConnectionAuthorizationRule: typeof import("./getHybridConnectionAuthorizationRule").getHybridConnectionAuthorizationRule = null as any;
export const getHybridConnectionAuthorizationRuleOutput: typeof import("./getHybridConnectionAuthorizationRule").getHybridConnectionAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getHybridConnectionAuthorizationRule","getHybridConnectionAuthorizationRuleOutput"], () => require("./getHybridConnectionAuthorizationRule"));

export { GetNamespaceArgs, GetNamespaceResult, GetNamespaceOutputArgs } from "./getNamespace";
export const getNamespace: typeof import("./getNamespace").getNamespace = null as any;
export const getNamespaceOutput: typeof import("./getNamespace").getNamespaceOutput = null as any;
utilities.lazyLoad(exports, ["getNamespace","getNamespaceOutput"], () => require("./getNamespace"));

export { GetNamespaceAuthorizationRuleArgs, GetNamespaceAuthorizationRuleResult, GetNamespaceAuthorizationRuleOutputArgs } from "./getNamespaceAuthorizationRule";
export const getNamespaceAuthorizationRule: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRule = null as any;
export const getNamespaceAuthorizationRuleOutput: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceAuthorizationRule","getNamespaceAuthorizationRuleOutput"], () => require("./getNamespaceAuthorizationRule"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetWCFRelayArgs, GetWCFRelayResult, GetWCFRelayOutputArgs } from "./getWCFRelay";
export const getWCFRelay: typeof import("./getWCFRelay").getWCFRelay = null as any;
export const getWCFRelayOutput: typeof import("./getWCFRelay").getWCFRelayOutput = null as any;
utilities.lazyLoad(exports, ["getWCFRelay","getWCFRelayOutput"], () => require("./getWCFRelay"));

export { GetWCFRelayAuthorizationRuleArgs, GetWCFRelayAuthorizationRuleResult, GetWCFRelayAuthorizationRuleOutputArgs } from "./getWCFRelayAuthorizationRule";
export const getWCFRelayAuthorizationRule: typeof import("./getWCFRelayAuthorizationRule").getWCFRelayAuthorizationRule = null as any;
export const getWCFRelayAuthorizationRuleOutput: typeof import("./getWCFRelayAuthorizationRule").getWCFRelayAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getWCFRelayAuthorizationRule","getWCFRelayAuthorizationRuleOutput"], () => require("./getWCFRelayAuthorizationRule"));

export { HybridConnectionArgs } from "./hybridConnection";
export type HybridConnection = import("./hybridConnection").HybridConnection;
export const HybridConnection: typeof import("./hybridConnection").HybridConnection = null as any;
utilities.lazyLoad(exports, ["HybridConnection"], () => require("./hybridConnection"));

export { HybridConnectionAuthorizationRuleArgs } from "./hybridConnectionAuthorizationRule";
export type HybridConnectionAuthorizationRule = import("./hybridConnectionAuthorizationRule").HybridConnectionAuthorizationRule;
export const HybridConnectionAuthorizationRule: typeof import("./hybridConnectionAuthorizationRule").HybridConnectionAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["HybridConnectionAuthorizationRule"], () => require("./hybridConnectionAuthorizationRule"));

export { ListHybridConnectionKeysArgs, ListHybridConnectionKeysResult, ListHybridConnectionKeysOutputArgs } from "./listHybridConnectionKeys";
export const listHybridConnectionKeys: typeof import("./listHybridConnectionKeys").listHybridConnectionKeys = null as any;
export const listHybridConnectionKeysOutput: typeof import("./listHybridConnectionKeys").listHybridConnectionKeysOutput = null as any;
utilities.lazyLoad(exports, ["listHybridConnectionKeys","listHybridConnectionKeysOutput"], () => require("./listHybridConnectionKeys"));

export { ListNamespaceKeysArgs, ListNamespaceKeysResult, ListNamespaceKeysOutputArgs } from "./listNamespaceKeys";
export const listNamespaceKeys: typeof import("./listNamespaceKeys").listNamespaceKeys = null as any;
export const listNamespaceKeysOutput: typeof import("./listNamespaceKeys").listNamespaceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listNamespaceKeys","listNamespaceKeysOutput"], () => require("./listNamespaceKeys"));

export { ListWCFRelayKeysArgs, ListWCFRelayKeysResult, ListWCFRelayKeysOutputArgs } from "./listWCFRelayKeys";
export const listWCFRelayKeys: typeof import("./listWCFRelayKeys").listWCFRelayKeys = null as any;
export const listWCFRelayKeysOutput: typeof import("./listWCFRelayKeys").listWCFRelayKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWCFRelayKeys","listWCFRelayKeysOutput"], () => require("./listWCFRelayKeys"));

export { NamespaceArgs } from "./namespace";
export type Namespace = import("./namespace").Namespace;
export const Namespace: typeof import("./namespace").Namespace = null as any;
utilities.lazyLoad(exports, ["Namespace"], () => require("./namespace"));

export { NamespaceAuthorizationRuleArgs } from "./namespaceAuthorizationRule";
export type NamespaceAuthorizationRule = import("./namespaceAuthorizationRule").NamespaceAuthorizationRule;
export const NamespaceAuthorizationRule: typeof import("./namespaceAuthorizationRule").NamespaceAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["NamespaceAuthorizationRule"], () => require("./namespaceAuthorizationRule"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { WCFRelayArgs } from "./wcfrelay";
export type WCFRelay = import("./wcfrelay").WCFRelay;
export const WCFRelay: typeof import("./wcfrelay").WCFRelay = null as any;
utilities.lazyLoad(exports, ["WCFRelay"], () => require("./wcfrelay"));

export { WCFRelayAuthorizationRuleArgs } from "./wcfrelayAuthorizationRule";
export type WCFRelayAuthorizationRule = import("./wcfrelayAuthorizationRule").WCFRelayAuthorizationRule;
export const WCFRelayAuthorizationRule: typeof import("./wcfrelayAuthorizationRule").WCFRelayAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["WCFRelayAuthorizationRule"], () => require("./wcfrelayAuthorizationRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:relay:HybridConnection":
                return new HybridConnection(name, <any>undefined, { urn })
            case "azure-native:relay:HybridConnectionAuthorizationRule":
                return new HybridConnectionAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:relay:Namespace":
                return new Namespace(name, <any>undefined, { urn })
            case "azure-native:relay:NamespaceAuthorizationRule":
                return new NamespaceAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:relay:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:relay:WCFRelay":
                return new WCFRelay(name, <any>undefined, { urn })
            case "azure-native:relay:WCFRelayAuthorizationRule":
                return new WCFRelayAuthorizationRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "relay", _module)