import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetKafkaConfigurationArgs, GetKafkaConfigurationResult, GetKafkaConfigurationOutputArgs } from "./getKafkaConfiguration";
export const getKafkaConfiguration: typeof import("./getKafkaConfiguration").getKafkaConfiguration = null as any;
export const getKafkaConfigurationOutput: typeof import("./getKafkaConfiguration").getKafkaConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getKafkaConfiguration","getKafkaConfigurationOutput"], () => require("./getKafkaConfiguration"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { KafkaConfigurationArgs } from "./kafkaConfiguration";
export type KafkaConfiguration = import("./kafkaConfiguration").KafkaConfiguration;
export const KafkaConfiguration: typeof import("./kafkaConfiguration").KafkaConfiguration = null as any;
utilities.lazyLoad(exports, ["KafkaConfiguration"], () => require("./kafkaConfiguration"));

export { ListAccountKeysArgs, ListAccountKeysResult, ListAccountKeysOutputArgs } from "./listAccountKeys";
export const listAccountKeys: typeof import("./listAccountKeys").listAccountKeys = null as any;
export const listAccountKeysOutput: typeof import("./listAccountKeys").listAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listAccountKeys","listAccountKeysOutput"], () => require("./listAccountKeys"));

export { ListFeatureAccountArgs, ListFeatureAccountResult, ListFeatureAccountOutputArgs } from "./listFeatureAccount";
export const listFeatureAccount: typeof import("./listFeatureAccount").listFeatureAccount = null as any;
export const listFeatureAccountOutput: typeof import("./listFeatureAccount").listFeatureAccountOutput = null as any;
utilities.lazyLoad(exports, ["listFeatureAccount","listFeatureAccountOutput"], () => require("./listFeatureAccount"));

export { ListFeatureSubscriptionArgs, ListFeatureSubscriptionResult, ListFeatureSubscriptionOutputArgs } from "./listFeatureSubscription";
export const listFeatureSubscription: typeof import("./listFeatureSubscription").listFeatureSubscription = null as any;
export const listFeatureSubscriptionOutput: typeof import("./listFeatureSubscription").listFeatureSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["listFeatureSubscription","listFeatureSubscriptionOutput"], () => require("./listFeatureSubscription"));

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
            case "azure-native:purview:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:purview:KafkaConfiguration":
                return new KafkaConfiguration(name, <any>undefined, { urn })
            case "azure-native:purview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "purview", _module)