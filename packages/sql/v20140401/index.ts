import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DatabaseArgs } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { DatabaseAdvisorArgs } from "./databaseAdvisor";
export type DatabaseAdvisor = import("./databaseAdvisor").DatabaseAdvisor;
export const DatabaseAdvisor: typeof import("./databaseAdvisor").DatabaseAdvisor = null as any;
utilities.lazyLoad(exports, ["DatabaseAdvisor"], () => require("./databaseAdvisor"));

export { DatabaseThreatDetectionPolicyArgs } from "./databaseThreatDetectionPolicy";
export type DatabaseThreatDetectionPolicy = import("./databaseThreatDetectionPolicy").DatabaseThreatDetectionPolicy;
export const DatabaseThreatDetectionPolicy: typeof import("./databaseThreatDetectionPolicy").DatabaseThreatDetectionPolicy = null as any;
utilities.lazyLoad(exports, ["DatabaseThreatDetectionPolicy"], () => require("./databaseThreatDetectionPolicy"));

export { DisasterRecoveryConfigurationArgs } from "./disasterRecoveryConfiguration";
export type DisasterRecoveryConfiguration = import("./disasterRecoveryConfiguration").DisasterRecoveryConfiguration;
export const DisasterRecoveryConfiguration: typeof import("./disasterRecoveryConfiguration").DisasterRecoveryConfiguration = null as any;
utilities.lazyLoad(exports, ["DisasterRecoveryConfiguration"], () => require("./disasterRecoveryConfiguration"));

export { ElasticPoolArgs } from "./elasticPool";
export type ElasticPool = import("./elasticPool").ElasticPool;
export const ElasticPool: typeof import("./elasticPool").ElasticPool = null as any;
utilities.lazyLoad(exports, ["ElasticPool"], () => require("./elasticPool"));

export { FirewallRuleArgs } from "./firewallRule";
export type FirewallRule = import("./firewallRule").FirewallRule;
export const FirewallRule: typeof import("./firewallRule").FirewallRule = null as any;
utilities.lazyLoad(exports, ["FirewallRule"], () => require("./firewallRule"));

export { GetDatabaseArgs, GetDatabaseResult, GetDatabaseOutputArgs } from "./getDatabase";
export const getDatabase: typeof import("./getDatabase").getDatabase = null as any;
export const getDatabaseOutput: typeof import("./getDatabase").getDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabase","getDatabaseOutput"], () => require("./getDatabase"));

export { GetDatabaseAdvisorArgs, GetDatabaseAdvisorResult, GetDatabaseAdvisorOutputArgs } from "./getDatabaseAdvisor";
export const getDatabaseAdvisor: typeof import("./getDatabaseAdvisor").getDatabaseAdvisor = null as any;
export const getDatabaseAdvisorOutput: typeof import("./getDatabaseAdvisor").getDatabaseAdvisorOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAdvisor","getDatabaseAdvisorOutput"], () => require("./getDatabaseAdvisor"));

export { GetDatabaseThreatDetectionPolicyArgs, GetDatabaseThreatDetectionPolicyResult, GetDatabaseThreatDetectionPolicyOutputArgs } from "./getDatabaseThreatDetectionPolicy";
export const getDatabaseThreatDetectionPolicy: typeof import("./getDatabaseThreatDetectionPolicy").getDatabaseThreatDetectionPolicy = null as any;
export const getDatabaseThreatDetectionPolicyOutput: typeof import("./getDatabaseThreatDetectionPolicy").getDatabaseThreatDetectionPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseThreatDetectionPolicy","getDatabaseThreatDetectionPolicyOutput"], () => require("./getDatabaseThreatDetectionPolicy"));

export { GetDisasterRecoveryConfigurationArgs, GetDisasterRecoveryConfigurationResult, GetDisasterRecoveryConfigurationOutputArgs } from "./getDisasterRecoveryConfiguration";
export const getDisasterRecoveryConfiguration: typeof import("./getDisasterRecoveryConfiguration").getDisasterRecoveryConfiguration = null as any;
export const getDisasterRecoveryConfigurationOutput: typeof import("./getDisasterRecoveryConfiguration").getDisasterRecoveryConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getDisasterRecoveryConfiguration","getDisasterRecoveryConfigurationOutput"], () => require("./getDisasterRecoveryConfiguration"));

export { GetElasticPoolArgs, GetElasticPoolResult, GetElasticPoolOutputArgs } from "./getElasticPool";
export const getElasticPool: typeof import("./getElasticPool").getElasticPool = null as any;
export const getElasticPoolOutput: typeof import("./getElasticPool").getElasticPoolOutput = null as any;
utilities.lazyLoad(exports, ["getElasticPool","getElasticPoolOutput"], () => require("./getElasticPool"));

export { GetFirewallRuleArgs, GetFirewallRuleResult, GetFirewallRuleOutputArgs } from "./getFirewallRule";
export const getFirewallRule: typeof import("./getFirewallRule").getFirewallRule = null as any;
export const getFirewallRuleOutput: typeof import("./getFirewallRule").getFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallRule","getFirewallRuleOutput"], () => require("./getFirewallRule"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { GetServerAdvisorArgs, GetServerAdvisorResult, GetServerAdvisorOutputArgs } from "./getServerAdvisor";
export const getServerAdvisor: typeof import("./getServerAdvisor").getServerAdvisor = null as any;
export const getServerAdvisorOutput: typeof import("./getServerAdvisor").getServerAdvisorOutput = null as any;
utilities.lazyLoad(exports, ["getServerAdvisor","getServerAdvisorOutput"], () => require("./getServerAdvisor"));

export { GetServerAzureADAdministratorArgs, GetServerAzureADAdministratorResult, GetServerAzureADAdministratorOutputArgs } from "./getServerAzureADAdministrator";
export const getServerAzureADAdministrator: typeof import("./getServerAzureADAdministrator").getServerAzureADAdministrator = null as any;
export const getServerAzureADAdministratorOutput: typeof import("./getServerAzureADAdministrator").getServerAzureADAdministratorOutput = null as any;
utilities.lazyLoad(exports, ["getServerAzureADAdministrator","getServerAzureADAdministratorOutput"], () => require("./getServerAzureADAdministrator"));

export { GetServerCommunicationLinkArgs, GetServerCommunicationLinkResult, GetServerCommunicationLinkOutputArgs } from "./getServerCommunicationLink";
export const getServerCommunicationLink: typeof import("./getServerCommunicationLink").getServerCommunicationLink = null as any;
export const getServerCommunicationLinkOutput: typeof import("./getServerCommunicationLink").getServerCommunicationLinkOutput = null as any;
utilities.lazyLoad(exports, ["getServerCommunicationLink","getServerCommunicationLinkOutput"], () => require("./getServerCommunicationLink"));

export { GetTransparentDataEncryptionArgs, GetTransparentDataEncryptionResult, GetTransparentDataEncryptionOutputArgs } from "./getTransparentDataEncryption";
export const getTransparentDataEncryption: typeof import("./getTransparentDataEncryption").getTransparentDataEncryption = null as any;
export const getTransparentDataEncryptionOutput: typeof import("./getTransparentDataEncryption").getTransparentDataEncryptionOutput = null as any;
utilities.lazyLoad(exports, ["getTransparentDataEncryption","getTransparentDataEncryptionOutput"], () => require("./getTransparentDataEncryption"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { ServerAdvisorArgs } from "./serverAdvisor";
export type ServerAdvisor = import("./serverAdvisor").ServerAdvisor;
export const ServerAdvisor: typeof import("./serverAdvisor").ServerAdvisor = null as any;
utilities.lazyLoad(exports, ["ServerAdvisor"], () => require("./serverAdvisor"));

export { ServerAzureADAdministratorArgs } from "./serverAzureADAdministrator";
export type ServerAzureADAdministrator = import("./serverAzureADAdministrator").ServerAzureADAdministrator;
export const ServerAzureADAdministrator: typeof import("./serverAzureADAdministrator").ServerAzureADAdministrator = null as any;
utilities.lazyLoad(exports, ["ServerAzureADAdministrator"], () => require("./serverAzureADAdministrator"));

export { ServerCommunicationLinkArgs } from "./serverCommunicationLink";
export type ServerCommunicationLink = import("./serverCommunicationLink").ServerCommunicationLink;
export const ServerCommunicationLink: typeof import("./serverCommunicationLink").ServerCommunicationLink = null as any;
utilities.lazyLoad(exports, ["ServerCommunicationLink"], () => require("./serverCommunicationLink"));

export { TransparentDataEncryptionArgs } from "./transparentDataEncryption";
export type TransparentDataEncryption = import("./transparentDataEncryption").TransparentDataEncryption;
export const TransparentDataEncryption: typeof import("./transparentDataEncryption").TransparentDataEncryption = null as any;
utilities.lazyLoad(exports, ["TransparentDataEncryption"], () => require("./transparentDataEncryption"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:sql/v20140401:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:DatabaseAdvisor":
                return new DatabaseAdvisor(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:DatabaseThreatDetectionPolicy":
                return new DatabaseThreatDetectionPolicy(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:DisasterRecoveryConfiguration":
                return new DisasterRecoveryConfiguration(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:ElasticPool":
                return new ElasticPool(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:Server":
                return new Server(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:ServerAdvisor":
                return new ServerAdvisor(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:ServerAzureADAdministrator":
                return new ServerAzureADAdministrator(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:ServerCommunicationLink":
                return new ServerCommunicationLink(name, <any>undefined, { urn })
            case "azure-native:sql/v20140401:TransparentDataEncryption":
                return new TransparentDataEncryption(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "sql/v20140401", _module)
