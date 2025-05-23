import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DisasterRecoveryConfigArgs } from "./disasterRecoveryConfig";
export type DisasterRecoveryConfig = import("./disasterRecoveryConfig").DisasterRecoveryConfig;
export const DisasterRecoveryConfig: typeof import("./disasterRecoveryConfig").DisasterRecoveryConfig = null as any;
utilities.lazyLoad(exports, ["DisasterRecoveryConfig"], () => require("./disasterRecoveryConfig"));

export { GetDisasterRecoveryConfigArgs, GetDisasterRecoveryConfigResult, GetDisasterRecoveryConfigOutputArgs } from "./getDisasterRecoveryConfig";
export const getDisasterRecoveryConfig: typeof import("./getDisasterRecoveryConfig").getDisasterRecoveryConfig = null as any;
export const getDisasterRecoveryConfigOutput: typeof import("./getDisasterRecoveryConfig").getDisasterRecoveryConfigOutput = null as any;
utilities.lazyLoad(exports, ["getDisasterRecoveryConfig","getDisasterRecoveryConfigOutput"], () => require("./getDisasterRecoveryConfig"));

export { GetMigrationConfigArgs, GetMigrationConfigResult, GetMigrationConfigOutputArgs } from "./getMigrationConfig";
export const getMigrationConfig: typeof import("./getMigrationConfig").getMigrationConfig = null as any;
export const getMigrationConfigOutput: typeof import("./getMigrationConfig").getMigrationConfigOutput = null as any;
utilities.lazyLoad(exports, ["getMigrationConfig","getMigrationConfigOutput"], () => require("./getMigrationConfig"));

export { GetNamespaceArgs, GetNamespaceResult, GetNamespaceOutputArgs } from "./getNamespace";
export const getNamespace: typeof import("./getNamespace").getNamespace = null as any;
export const getNamespaceOutput: typeof import("./getNamespace").getNamespaceOutput = null as any;
utilities.lazyLoad(exports, ["getNamespace","getNamespaceOutput"], () => require("./getNamespace"));

export { GetNamespaceAuthorizationRuleArgs, GetNamespaceAuthorizationRuleResult, GetNamespaceAuthorizationRuleOutputArgs } from "./getNamespaceAuthorizationRule";
export const getNamespaceAuthorizationRule: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRule = null as any;
export const getNamespaceAuthorizationRuleOutput: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceAuthorizationRule","getNamespaceAuthorizationRuleOutput"], () => require("./getNamespaceAuthorizationRule"));

export { GetNamespaceIpFilterRuleArgs, GetNamespaceIpFilterRuleResult, GetNamespaceIpFilterRuleOutputArgs } from "./getNamespaceIpFilterRule";
export const getNamespaceIpFilterRule: typeof import("./getNamespaceIpFilterRule").getNamespaceIpFilterRule = null as any;
export const getNamespaceIpFilterRuleOutput: typeof import("./getNamespaceIpFilterRule").getNamespaceIpFilterRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceIpFilterRule","getNamespaceIpFilterRuleOutput"], () => require("./getNamespaceIpFilterRule"));

export { GetNamespaceNetworkRuleSetArgs, GetNamespaceNetworkRuleSetResult, GetNamespaceNetworkRuleSetOutputArgs } from "./getNamespaceNetworkRuleSet";
export const getNamespaceNetworkRuleSet: typeof import("./getNamespaceNetworkRuleSet").getNamespaceNetworkRuleSet = null as any;
export const getNamespaceNetworkRuleSetOutput: typeof import("./getNamespaceNetworkRuleSet").getNamespaceNetworkRuleSetOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceNetworkRuleSet","getNamespaceNetworkRuleSetOutput"], () => require("./getNamespaceNetworkRuleSet"));

export { GetNamespaceVirtualNetworkRuleArgs, GetNamespaceVirtualNetworkRuleResult, GetNamespaceVirtualNetworkRuleOutputArgs } from "./getNamespaceVirtualNetworkRule";
export const getNamespaceVirtualNetworkRule: typeof import("./getNamespaceVirtualNetworkRule").getNamespaceVirtualNetworkRule = null as any;
export const getNamespaceVirtualNetworkRuleOutput: typeof import("./getNamespaceVirtualNetworkRule").getNamespaceVirtualNetworkRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceVirtualNetworkRule","getNamespaceVirtualNetworkRuleOutput"], () => require("./getNamespaceVirtualNetworkRule"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetQueueArgs, GetQueueResult, GetQueueOutputArgs } from "./getQueue";
export const getQueue: typeof import("./getQueue").getQueue = null as any;
export const getQueueOutput: typeof import("./getQueue").getQueueOutput = null as any;
utilities.lazyLoad(exports, ["getQueue","getQueueOutput"], () => require("./getQueue"));

export { GetQueueAuthorizationRuleArgs, GetQueueAuthorizationRuleResult, GetQueueAuthorizationRuleOutputArgs } from "./getQueueAuthorizationRule";
export const getQueueAuthorizationRule: typeof import("./getQueueAuthorizationRule").getQueueAuthorizationRule = null as any;
export const getQueueAuthorizationRuleOutput: typeof import("./getQueueAuthorizationRule").getQueueAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getQueueAuthorizationRule","getQueueAuthorizationRuleOutput"], () => require("./getQueueAuthorizationRule"));

export { GetRuleArgs, GetRuleResult, GetRuleOutputArgs } from "./getRule";
export const getRule: typeof import("./getRule").getRule = null as any;
export const getRuleOutput: typeof import("./getRule").getRuleOutput = null as any;
utilities.lazyLoad(exports, ["getRule","getRuleOutput"], () => require("./getRule"));

export { GetSubscriptionArgs, GetSubscriptionResult, GetSubscriptionOutputArgs } from "./getSubscription";
export const getSubscription: typeof import("./getSubscription").getSubscription = null as any;
export const getSubscriptionOutput: typeof import("./getSubscription").getSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getSubscription","getSubscriptionOutput"], () => require("./getSubscription"));

export { GetTopicArgs, GetTopicResult, GetTopicOutputArgs } from "./getTopic";
export const getTopic: typeof import("./getTopic").getTopic = null as any;
export const getTopicOutput: typeof import("./getTopic").getTopicOutput = null as any;
utilities.lazyLoad(exports, ["getTopic","getTopicOutput"], () => require("./getTopic"));

export { GetTopicAuthorizationRuleArgs, GetTopicAuthorizationRuleResult, GetTopicAuthorizationRuleOutputArgs } from "./getTopicAuthorizationRule";
export const getTopicAuthorizationRule: typeof import("./getTopicAuthorizationRule").getTopicAuthorizationRule = null as any;
export const getTopicAuthorizationRuleOutput: typeof import("./getTopicAuthorizationRule").getTopicAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getTopicAuthorizationRule","getTopicAuthorizationRuleOutput"], () => require("./getTopicAuthorizationRule"));

export { ListDisasterRecoveryConfigKeysArgs, ListDisasterRecoveryConfigKeysResult, ListDisasterRecoveryConfigKeysOutputArgs } from "./listDisasterRecoveryConfigKeys";
export const listDisasterRecoveryConfigKeys: typeof import("./listDisasterRecoveryConfigKeys").listDisasterRecoveryConfigKeys = null as any;
export const listDisasterRecoveryConfigKeysOutput: typeof import("./listDisasterRecoveryConfigKeys").listDisasterRecoveryConfigKeysOutput = null as any;
utilities.lazyLoad(exports, ["listDisasterRecoveryConfigKeys","listDisasterRecoveryConfigKeysOutput"], () => require("./listDisasterRecoveryConfigKeys"));

export { ListNamespaceKeysArgs, ListNamespaceKeysResult, ListNamespaceKeysOutputArgs } from "./listNamespaceKeys";
export const listNamespaceKeys: typeof import("./listNamespaceKeys").listNamespaceKeys = null as any;
export const listNamespaceKeysOutput: typeof import("./listNamespaceKeys").listNamespaceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listNamespaceKeys","listNamespaceKeysOutput"], () => require("./listNamespaceKeys"));

export { ListQueueKeysArgs, ListQueueKeysResult, ListQueueKeysOutputArgs } from "./listQueueKeys";
export const listQueueKeys: typeof import("./listQueueKeys").listQueueKeys = null as any;
export const listQueueKeysOutput: typeof import("./listQueueKeys").listQueueKeysOutput = null as any;
utilities.lazyLoad(exports, ["listQueueKeys","listQueueKeysOutput"], () => require("./listQueueKeys"));

export { ListTopicKeysArgs, ListTopicKeysResult, ListTopicKeysOutputArgs } from "./listTopicKeys";
export const listTopicKeys: typeof import("./listTopicKeys").listTopicKeys = null as any;
export const listTopicKeysOutput: typeof import("./listTopicKeys").listTopicKeysOutput = null as any;
utilities.lazyLoad(exports, ["listTopicKeys","listTopicKeysOutput"], () => require("./listTopicKeys"));

export { MigrationConfigArgs } from "./migrationConfig";
export type MigrationConfig = import("./migrationConfig").MigrationConfig;
export const MigrationConfig: typeof import("./migrationConfig").MigrationConfig = null as any;
utilities.lazyLoad(exports, ["MigrationConfig"], () => require("./migrationConfig"));

export { NamespaceArgs } from "./namespace";
export type Namespace = import("./namespace").Namespace;
export const Namespace: typeof import("./namespace").Namespace = null as any;
utilities.lazyLoad(exports, ["Namespace"], () => require("./namespace"));

export { NamespaceAuthorizationRuleArgs } from "./namespaceAuthorizationRule";
export type NamespaceAuthorizationRule = import("./namespaceAuthorizationRule").NamespaceAuthorizationRule;
export const NamespaceAuthorizationRule: typeof import("./namespaceAuthorizationRule").NamespaceAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["NamespaceAuthorizationRule"], () => require("./namespaceAuthorizationRule"));

export { NamespaceIpFilterRuleArgs } from "./namespaceIpFilterRule";
export type NamespaceIpFilterRule = import("./namespaceIpFilterRule").NamespaceIpFilterRule;
export const NamespaceIpFilterRule: typeof import("./namespaceIpFilterRule").NamespaceIpFilterRule = null as any;
utilities.lazyLoad(exports, ["NamespaceIpFilterRule"], () => require("./namespaceIpFilterRule"));

export { NamespaceNetworkRuleSetArgs } from "./namespaceNetworkRuleSet";
export type NamespaceNetworkRuleSet = import("./namespaceNetworkRuleSet").NamespaceNetworkRuleSet;
export const NamespaceNetworkRuleSet: typeof import("./namespaceNetworkRuleSet").NamespaceNetworkRuleSet = null as any;
utilities.lazyLoad(exports, ["NamespaceNetworkRuleSet"], () => require("./namespaceNetworkRuleSet"));

export { NamespaceVirtualNetworkRuleArgs } from "./namespaceVirtualNetworkRule";
export type NamespaceVirtualNetworkRule = import("./namespaceVirtualNetworkRule").NamespaceVirtualNetworkRule;
export const NamespaceVirtualNetworkRule: typeof import("./namespaceVirtualNetworkRule").NamespaceVirtualNetworkRule = null as any;
utilities.lazyLoad(exports, ["NamespaceVirtualNetworkRule"], () => require("./namespaceVirtualNetworkRule"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { QueueArgs } from "./queue";
export type Queue = import("./queue").Queue;
export const Queue: typeof import("./queue").Queue = null as any;
utilities.lazyLoad(exports, ["Queue"], () => require("./queue"));

export { QueueAuthorizationRuleArgs } from "./queueAuthorizationRule";
export type QueueAuthorizationRule = import("./queueAuthorizationRule").QueueAuthorizationRule;
export const QueueAuthorizationRule: typeof import("./queueAuthorizationRule").QueueAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["QueueAuthorizationRule"], () => require("./queueAuthorizationRule"));

export { RuleArgs } from "./rule";
export type Rule = import("./rule").Rule;
export const Rule: typeof import("./rule").Rule = null as any;
utilities.lazyLoad(exports, ["Rule"], () => require("./rule"));

export { SubscriptionArgs } from "./subscription";
export type Subscription = import("./subscription").Subscription;
export const Subscription: typeof import("./subscription").Subscription = null as any;
utilities.lazyLoad(exports, ["Subscription"], () => require("./subscription"));

export { TopicArgs } from "./topic";
export type Topic = import("./topic").Topic;
export const Topic: typeof import("./topic").Topic = null as any;
utilities.lazyLoad(exports, ["Topic"], () => require("./topic"));

export { TopicAuthorizationRuleArgs } from "./topicAuthorizationRule";
export type TopicAuthorizationRule = import("./topicAuthorizationRule").TopicAuthorizationRule;
export const TopicAuthorizationRule: typeof import("./topicAuthorizationRule").TopicAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["TopicAuthorizationRule"], () => require("./topicAuthorizationRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:servicebus:DisasterRecoveryConfig":
                return new DisasterRecoveryConfig(name, <any>undefined, { urn })
            case "azure-native:servicebus:MigrationConfig":
                return new MigrationConfig(name, <any>undefined, { urn })
            case "azure-native:servicebus:Namespace":
                return new Namespace(name, <any>undefined, { urn })
            case "azure-native:servicebus:NamespaceAuthorizationRule":
                return new NamespaceAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:servicebus:NamespaceIpFilterRule":
                return new NamespaceIpFilterRule(name, <any>undefined, { urn })
            case "azure-native:servicebus:NamespaceNetworkRuleSet":
                return new NamespaceNetworkRuleSet(name, <any>undefined, { urn })
            case "azure-native:servicebus:NamespaceVirtualNetworkRule":
                return new NamespaceVirtualNetworkRule(name, <any>undefined, { urn })
            case "azure-native:servicebus:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:servicebus:Queue":
                return new Queue(name, <any>undefined, { urn })
            case "azure-native:servicebus:QueueAuthorizationRule":
                return new QueueAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:servicebus:Rule":
                return new Rule(name, <any>undefined, { urn })
            case "azure-native:servicebus:Subscription":
                return new Subscription(name, <any>undefined, { urn })
            case "azure-native:servicebus:Topic":
                return new Topic(name, <any>undefined, { urn })
            case "azure-native:servicebus:TopicAuthorizationRule":
                return new TopicAuthorizationRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "servicebus", _module)