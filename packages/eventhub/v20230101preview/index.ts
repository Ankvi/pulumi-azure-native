import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationGroupArgs } from "./applicationGroup";
export type ApplicationGroup = import("./applicationGroup").ApplicationGroup;
export const ApplicationGroup: typeof import("./applicationGroup").ApplicationGroup = null as any;
utilities.lazyLoad(exports, ["ApplicationGroup"], () => require("./applicationGroup"));

export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { ConsumerGroupArgs } from "./consumerGroup";
export type ConsumerGroup = import("./consumerGroup").ConsumerGroup;
export const ConsumerGroup: typeof import("./consumerGroup").ConsumerGroup = null as any;
utilities.lazyLoad(exports, ["ConsumerGroup"], () => require("./consumerGroup"));

export { DisasterRecoveryConfigArgs } from "./disasterRecoveryConfig";
export type DisasterRecoveryConfig = import("./disasterRecoveryConfig").DisasterRecoveryConfig;
export const DisasterRecoveryConfig: typeof import("./disasterRecoveryConfig").DisasterRecoveryConfig = null as any;
utilities.lazyLoad(exports, ["DisasterRecoveryConfig"], () => require("./disasterRecoveryConfig"));

export { EventHubArgs } from "./eventHub";
export type EventHub = import("./eventHub").EventHub;
export const EventHub: typeof import("./eventHub").EventHub = null as any;
utilities.lazyLoad(exports, ["EventHub"], () => require("./eventHub"));

export { EventHubAuthorizationRuleArgs } from "./eventHubAuthorizationRule";
export type EventHubAuthorizationRule = import("./eventHubAuthorizationRule").EventHubAuthorizationRule;
export const EventHubAuthorizationRule: typeof import("./eventHubAuthorizationRule").EventHubAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["EventHubAuthorizationRule"], () => require("./eventHubAuthorizationRule"));

export { GetApplicationGroupArgs, GetApplicationGroupResult, GetApplicationGroupOutputArgs } from "./getApplicationGroup";
export const getApplicationGroup: typeof import("./getApplicationGroup").getApplicationGroup = null as any;
export const getApplicationGroupOutput: typeof import("./getApplicationGroup").getApplicationGroupOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGroup","getApplicationGroupOutput"], () => require("./getApplicationGroup"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetConsumerGroupArgs, GetConsumerGroupResult, GetConsumerGroupOutputArgs } from "./getConsumerGroup";
export const getConsumerGroup: typeof import("./getConsumerGroup").getConsumerGroup = null as any;
export const getConsumerGroupOutput: typeof import("./getConsumerGroup").getConsumerGroupOutput = null as any;
utilities.lazyLoad(exports, ["getConsumerGroup","getConsumerGroupOutput"], () => require("./getConsumerGroup"));

export { GetDisasterRecoveryConfigArgs, GetDisasterRecoveryConfigResult, GetDisasterRecoveryConfigOutputArgs } from "./getDisasterRecoveryConfig";
export const getDisasterRecoveryConfig: typeof import("./getDisasterRecoveryConfig").getDisasterRecoveryConfig = null as any;
export const getDisasterRecoveryConfigOutput: typeof import("./getDisasterRecoveryConfig").getDisasterRecoveryConfigOutput = null as any;
utilities.lazyLoad(exports, ["getDisasterRecoveryConfig","getDisasterRecoveryConfigOutput"], () => require("./getDisasterRecoveryConfig"));

export { GetEventHubArgs, GetEventHubResult, GetEventHubOutputArgs } from "./getEventHub";
export const getEventHub: typeof import("./getEventHub").getEventHub = null as any;
export const getEventHubOutput: typeof import("./getEventHub").getEventHubOutput = null as any;
utilities.lazyLoad(exports, ["getEventHub","getEventHubOutput"], () => require("./getEventHub"));

export { GetEventHubAuthorizationRuleArgs, GetEventHubAuthorizationRuleResult, GetEventHubAuthorizationRuleOutputArgs } from "./getEventHubAuthorizationRule";
export const getEventHubAuthorizationRule: typeof import("./getEventHubAuthorizationRule").getEventHubAuthorizationRule = null as any;
export const getEventHubAuthorizationRuleOutput: typeof import("./getEventHubAuthorizationRule").getEventHubAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getEventHubAuthorizationRule","getEventHubAuthorizationRuleOutput"], () => require("./getEventHubAuthorizationRule"));

export { GetNamespaceArgs, GetNamespaceResult, GetNamespaceOutputArgs } from "./getNamespace";
export const getNamespace: typeof import("./getNamespace").getNamespace = null as any;
export const getNamespaceOutput: typeof import("./getNamespace").getNamespaceOutput = null as any;
utilities.lazyLoad(exports, ["getNamespace","getNamespaceOutput"], () => require("./getNamespace"));

export { GetNamespaceAuthorizationRuleArgs, GetNamespaceAuthorizationRuleResult, GetNamespaceAuthorizationRuleOutputArgs } from "./getNamespaceAuthorizationRule";
export const getNamespaceAuthorizationRule: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRule = null as any;
export const getNamespaceAuthorizationRuleOutput: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceAuthorizationRule","getNamespaceAuthorizationRuleOutput"], () => require("./getNamespaceAuthorizationRule"));

export { GetNamespaceNetworkRuleSetArgs, GetNamespaceNetworkRuleSetResult, GetNamespaceNetworkRuleSetOutputArgs } from "./getNamespaceNetworkRuleSet";
export const getNamespaceNetworkRuleSet: typeof import("./getNamespaceNetworkRuleSet").getNamespaceNetworkRuleSet = null as any;
export const getNamespaceNetworkRuleSetOutput: typeof import("./getNamespaceNetworkRuleSet").getNamespaceNetworkRuleSetOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceNetworkRuleSet","getNamespaceNetworkRuleSetOutput"], () => require("./getNamespaceNetworkRuleSet"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetSchemaRegistryArgs, GetSchemaRegistryResult, GetSchemaRegistryOutputArgs } from "./getSchemaRegistry";
export const getSchemaRegistry: typeof import("./getSchemaRegistry").getSchemaRegistry = null as any;
export const getSchemaRegistryOutput: typeof import("./getSchemaRegistry").getSchemaRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getSchemaRegistry","getSchemaRegistryOutput"], () => require("./getSchemaRegistry"));

export { ListDisasterRecoveryConfigKeysArgs, ListDisasterRecoveryConfigKeysResult, ListDisasterRecoveryConfigKeysOutputArgs } from "./listDisasterRecoveryConfigKeys";
export const listDisasterRecoveryConfigKeys: typeof import("./listDisasterRecoveryConfigKeys").listDisasterRecoveryConfigKeys = null as any;
export const listDisasterRecoveryConfigKeysOutput: typeof import("./listDisasterRecoveryConfigKeys").listDisasterRecoveryConfigKeysOutput = null as any;
utilities.lazyLoad(exports, ["listDisasterRecoveryConfigKeys","listDisasterRecoveryConfigKeysOutput"], () => require("./listDisasterRecoveryConfigKeys"));

export { ListEventHubKeysArgs, ListEventHubKeysResult, ListEventHubKeysOutputArgs } from "./listEventHubKeys";
export const listEventHubKeys: typeof import("./listEventHubKeys").listEventHubKeys = null as any;
export const listEventHubKeysOutput: typeof import("./listEventHubKeys").listEventHubKeysOutput = null as any;
utilities.lazyLoad(exports, ["listEventHubKeys","listEventHubKeysOutput"], () => require("./listEventHubKeys"));

export { ListNamespaceKeysArgs, ListNamespaceKeysResult, ListNamespaceKeysOutputArgs } from "./listNamespaceKeys";
export const listNamespaceKeys: typeof import("./listNamespaceKeys").listNamespaceKeys = null as any;
export const listNamespaceKeysOutput: typeof import("./listNamespaceKeys").listNamespaceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listNamespaceKeys","listNamespaceKeysOutput"], () => require("./listNamespaceKeys"));

export { NamespaceArgs } from "./namespace";
export type Namespace = import("./namespace").Namespace;
export const Namespace: typeof import("./namespace").Namespace = null as any;
utilities.lazyLoad(exports, ["Namespace"], () => require("./namespace"));

export { NamespaceAuthorizationRuleArgs } from "./namespaceAuthorizationRule";
export type NamespaceAuthorizationRule = import("./namespaceAuthorizationRule").NamespaceAuthorizationRule;
export const NamespaceAuthorizationRule: typeof import("./namespaceAuthorizationRule").NamespaceAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["NamespaceAuthorizationRule"], () => require("./namespaceAuthorizationRule"));

export { NamespaceNetworkRuleSetArgs } from "./namespaceNetworkRuleSet";
export type NamespaceNetworkRuleSet = import("./namespaceNetworkRuleSet").NamespaceNetworkRuleSet;
export const NamespaceNetworkRuleSet: typeof import("./namespaceNetworkRuleSet").NamespaceNetworkRuleSet = null as any;
utilities.lazyLoad(exports, ["NamespaceNetworkRuleSet"], () => require("./namespaceNetworkRuleSet"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { SchemaRegistryArgs } from "./schemaRegistry";
export type SchemaRegistry = import("./schemaRegistry").SchemaRegistry;
export const SchemaRegistry: typeof import("./schemaRegistry").SchemaRegistry = null as any;
utilities.lazyLoad(exports, ["SchemaRegistry"], () => require("./schemaRegistry"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:eventhub/v20230101preview:ApplicationGroup":
                return new ApplicationGroup(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:ConsumerGroup":
                return new ConsumerGroup(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:DisasterRecoveryConfig":
                return new DisasterRecoveryConfig(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:EventHub":
                return new EventHub(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:EventHubAuthorizationRule":
                return new EventHubAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:Namespace":
                return new Namespace(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:NamespaceAuthorizationRule":
                return new NamespaceAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:NamespaceNetworkRuleSet":
                return new NamespaceNetworkRuleSet(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:eventhub/v20230101preview:SchemaRegistry":
                return new SchemaRegistry(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "eventhub/v20230101preview", _module)
