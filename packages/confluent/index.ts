import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectorArgs } from "./connector";
export type Connector = import("./connector").Connector;
export const Connector: typeof import("./connector").Connector = null as any;
utilities.lazyLoad(exports, ["Connector"], () => require("./connector"));

export { GetConnectorArgs, GetConnectorResult, GetConnectorOutputArgs } from "./getConnector";
export const getConnector: typeof import("./getConnector").getConnector = null as any;
export const getConnectorOutput: typeof import("./getConnector").getConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getConnector","getConnectorOutput"], () => require("./getConnector"));

export { GetOrganizationArgs, GetOrganizationResult, GetOrganizationOutputArgs } from "./getOrganization";
export const getOrganization: typeof import("./getOrganization").getOrganization = null as any;
export const getOrganizationOutput: typeof import("./getOrganization").getOrganizationOutput = null as any;
utilities.lazyLoad(exports, ["getOrganization","getOrganizationOutput"], () => require("./getOrganization"));

export { GetOrganizationClusterByIdArgs, GetOrganizationClusterByIdResult, GetOrganizationClusterByIdOutputArgs } from "./getOrganizationClusterById";
export const getOrganizationClusterById: typeof import("./getOrganizationClusterById").getOrganizationClusterById = null as any;
export const getOrganizationClusterByIdOutput: typeof import("./getOrganizationClusterById").getOrganizationClusterByIdOutput = null as any;
utilities.lazyLoad(exports, ["getOrganizationClusterById","getOrganizationClusterByIdOutput"], () => require("./getOrganizationClusterById"));

export { GetOrganizationEnvironmentByIdArgs, GetOrganizationEnvironmentByIdResult, GetOrganizationEnvironmentByIdOutputArgs } from "./getOrganizationEnvironmentById";
export const getOrganizationEnvironmentById: typeof import("./getOrganizationEnvironmentById").getOrganizationEnvironmentById = null as any;
export const getOrganizationEnvironmentByIdOutput: typeof import("./getOrganizationEnvironmentById").getOrganizationEnvironmentByIdOutput = null as any;
utilities.lazyLoad(exports, ["getOrganizationEnvironmentById","getOrganizationEnvironmentByIdOutput"], () => require("./getOrganizationEnvironmentById"));

export { GetTopicArgs, GetTopicResult, GetTopicOutputArgs } from "./getTopic";
export const getTopic: typeof import("./getTopic").getTopic = null as any;
export const getTopicOutput: typeof import("./getTopic").getTopicOutput = null as any;
utilities.lazyLoad(exports, ["getTopic","getTopicOutput"], () => require("./getTopic"));

export { ListAccessClustersArgs, ListAccessClustersResult, ListAccessClustersOutputArgs } from "./listAccessClusters";
export const listAccessClusters: typeof import("./listAccessClusters").listAccessClusters = null as any;
export const listAccessClustersOutput: typeof import("./listAccessClusters").listAccessClustersOutput = null as any;
utilities.lazyLoad(exports, ["listAccessClusters","listAccessClustersOutput"], () => require("./listAccessClusters"));

export { ListAccessEnvironmentsArgs, ListAccessEnvironmentsResult, ListAccessEnvironmentsOutputArgs } from "./listAccessEnvironments";
export const listAccessEnvironments: typeof import("./listAccessEnvironments").listAccessEnvironments = null as any;
export const listAccessEnvironmentsOutput: typeof import("./listAccessEnvironments").listAccessEnvironmentsOutput = null as any;
utilities.lazyLoad(exports, ["listAccessEnvironments","listAccessEnvironmentsOutput"], () => require("./listAccessEnvironments"));

export { ListAccessInvitationsArgs, ListAccessInvitationsResult, ListAccessInvitationsOutputArgs } from "./listAccessInvitations";
export const listAccessInvitations: typeof import("./listAccessInvitations").listAccessInvitations = null as any;
export const listAccessInvitationsOutput: typeof import("./listAccessInvitations").listAccessInvitationsOutput = null as any;
utilities.lazyLoad(exports, ["listAccessInvitations","listAccessInvitationsOutput"], () => require("./listAccessInvitations"));

export { ListAccessRoleBindingNameArgs, ListAccessRoleBindingNameResult, ListAccessRoleBindingNameOutputArgs } from "./listAccessRoleBindingName";
export const listAccessRoleBindingName: typeof import("./listAccessRoleBindingName").listAccessRoleBindingName = null as any;
export const listAccessRoleBindingNameOutput: typeof import("./listAccessRoleBindingName").listAccessRoleBindingNameOutput = null as any;
utilities.lazyLoad(exports, ["listAccessRoleBindingName","listAccessRoleBindingNameOutput"], () => require("./listAccessRoleBindingName"));

export { ListAccessRoleBindingsArgs, ListAccessRoleBindingsResult, ListAccessRoleBindingsOutputArgs } from "./listAccessRoleBindings";
export const listAccessRoleBindings: typeof import("./listAccessRoleBindings").listAccessRoleBindings = null as any;
export const listAccessRoleBindingsOutput: typeof import("./listAccessRoleBindings").listAccessRoleBindingsOutput = null as any;
utilities.lazyLoad(exports, ["listAccessRoleBindings","listAccessRoleBindingsOutput"], () => require("./listAccessRoleBindings"));

export { ListAccessServiceAccountsArgs, ListAccessServiceAccountsResult, ListAccessServiceAccountsOutputArgs } from "./listAccessServiceAccounts";
export const listAccessServiceAccounts: typeof import("./listAccessServiceAccounts").listAccessServiceAccounts = null as any;
export const listAccessServiceAccountsOutput: typeof import("./listAccessServiceAccounts").listAccessServiceAccountsOutput = null as any;
utilities.lazyLoad(exports, ["listAccessServiceAccounts","listAccessServiceAccountsOutput"], () => require("./listAccessServiceAccounts"));

export { ListAccessUsersArgs, ListAccessUsersResult, ListAccessUsersOutputArgs } from "./listAccessUsers";
export const listAccessUsers: typeof import("./listAccessUsers").listAccessUsers = null as any;
export const listAccessUsersOutput: typeof import("./listAccessUsers").listAccessUsersOutput = null as any;
utilities.lazyLoad(exports, ["listAccessUsers","listAccessUsersOutput"], () => require("./listAccessUsers"));

export { ListOrganizationRegionsArgs, ListOrganizationRegionsResult, ListOrganizationRegionsOutputArgs } from "./listOrganizationRegions";
export const listOrganizationRegions: typeof import("./listOrganizationRegions").listOrganizationRegions = null as any;
export const listOrganizationRegionsOutput: typeof import("./listOrganizationRegions").listOrganizationRegionsOutput = null as any;
utilities.lazyLoad(exports, ["listOrganizationRegions","listOrganizationRegionsOutput"], () => require("./listOrganizationRegions"));

export { OrganizationArgs } from "./organization";
export type Organization = import("./organization").Organization;
export const Organization: typeof import("./organization").Organization = null as any;
utilities.lazyLoad(exports, ["Organization"], () => require("./organization"));

export { OrganizationClusterByIdArgs } from "./organizationClusterById";
export type OrganizationClusterById = import("./organizationClusterById").OrganizationClusterById;
export const OrganizationClusterById: typeof import("./organizationClusterById").OrganizationClusterById = null as any;
utilities.lazyLoad(exports, ["OrganizationClusterById"], () => require("./organizationClusterById"));

export { OrganizationEnvironmentByIdArgs } from "./organizationEnvironmentById";
export type OrganizationEnvironmentById = import("./organizationEnvironmentById").OrganizationEnvironmentById;
export const OrganizationEnvironmentById: typeof import("./organizationEnvironmentById").OrganizationEnvironmentById = null as any;
utilities.lazyLoad(exports, ["OrganizationEnvironmentById"], () => require("./organizationEnvironmentById"));

export { TopicArgs } from "./topic";
export type Topic = import("./topic").Topic;
export const Topic: typeof import("./topic").Topic = null as any;
utilities.lazyLoad(exports, ["Topic"], () => require("./topic"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:confluent:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-native:confluent:Organization":
                return new Organization(name, <any>undefined, { urn })
            case "azure-native:confluent:OrganizationClusterById":
                return new OrganizationClusterById(name, <any>undefined, { urn })
            case "azure-native:confluent:OrganizationEnvironmentById":
                return new OrganizationEnvironmentById(name, <any>undefined, { urn })
            case "azure-native:confluent:Topic":
                return new Topic(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "confluent", _module)