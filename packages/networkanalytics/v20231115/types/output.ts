import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Details of Consumption Properties
     */
    export interface ConsumptionEndpointsPropertiesResponse {
        /**
         * Resource Id of file access endpoint.
         */
        fileAccessResourceId: string;
        /**
         * Url to consume file type.
         */
        fileAccessUrl: string;
        /**
         * Resource Id of ingestion endpoint.
         */
        ingestionResourceId: string;
        /**
         * Ingestion url to upload the data.
         */
        ingestionUrl: string;
        /**
         * Resource Id of query endpoint.
         */
        queryResourceId: string;
        /**
         * Url to consume the processed data.
         */
        queryUrl: string;
    }

    /**
     * Data Product Network rule set
     */
    export interface DataProductNetworkAclsResponse {
        /**
         * The list of query ips in the format of CIDR allowed to connect to query/visualization endpoint.
         */
        allowedQueryIpRangeList: string[];
        /**
         * Default Action
         */
        defaultAction: string;
        /**
         * IP rule with specific IP or IP range in CIDR format.
         */
        ipRules: IPRulesResponse[];
        /**
         * Virtual Network Rule
         */
        virtualNetworkRule: VirtualNetworkRuleResponse[];
    }

    /**
     * Encryption key details.
     */
    export interface EncryptionKeyDetailsResponse {
        /**
         * The name of the key vault key.
         */
        keyName: string;
        /**
         * The Uri of the key vault.
         */
        keyVaultUri: string;
        /**
         * The version of the key vault key.
         */
        keyVersion: string;
    }

    /**
     * IP rule with specific IP or IP range in CIDR format.
     */
    export interface IPRulesResponse {
        /**
         * The action of virtual network rule.
         */
        action: string;
        /**
         * IP Rules Value
         */
        value?: string;
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * The details for role assignment response.
     */
    export interface RoleAssignmentDetailResponse {
        /**
         * Data Type Scope at which the role assignment is created.
         */
        dataTypeScope: string[];
        /**
         * Object ID of the AAD principal or security-group.
         */
        principalId: string;
        /**
         * Type of the principal Id: User, Group or ServicePrincipal
         */
        principalType: string;
        /**
         * Data Product role to be assigned to a user.
         */
        role: string;
        /**
         * Id of role assignment request
         */
        roleAssignmentId: string;
        /**
         * Role Id of the Built-In Role
         */
        roleId: string;
        /**
         * User name.
         */
        userName: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }

    /**
     * Virtual Network Rule
     */
    export interface VirtualNetworkRuleResponse {
        /**
         * The action of virtual network rule.
         */
        action?: string;
        /**
         * Resource ID of a subnet
         */
        id: string;
        /**
         * Gets the state of virtual network rule.
         */
        state?: string;
    }
