import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for the managed cluster.
     */
    export interface ConfigurationIdentityResponse {
        /**
         * The principal id of the system assigned identity which is used by the configuration.
         */
        principalId: string;
        /**
         * The tenant id of the system assigned identity which is used by the configuration.
         */
        tenantId: string;
        /**
         * The type of identity used for the configuration. Type 'SystemAssigned' will use an implicitly created identity. Type 'None' will not use Managed Identity for the configuration.
         */
        type?: string;
    }

    /**
     * Error definition.
     */
    export interface ErrorDefinitionResponse {
        /**
         * Service specific error code which serves as the substatus for the HTTP error code.
         */
        code: string;
        /**
         * Description of the error.
         */
        message: string;
    }

    /**
     * Status from this instance of the extension.
     */
    export interface ExtensionStatusResponse {
        /**
         * Status code provided by the Extension
         */
        code?: string;
        /**
         * Short description of status of this instance of the extension.
         */
        displayStatus?: string;
        /**
         * Level of the status.
         */
        level?: string;
        /**
         * Detailed message of the status from the Extension instance.
         */
        message?: string;
        /**
         * DateLiteral (per ISO8601) noting the time of installation status.
         */
        time?: string;
    }
    /**
     * extensionStatusResponseProvideDefaults sets the appropriate defaults for ExtensionStatusResponse
     */
    export function extensionStatusResponseProvideDefaults(val: ExtensionStatusResponse): ExtensionStatusResponse {
        return {
            ...val,
            level: (val.level) ?? "Information",
        };
    }

    /**
     * Specifies that the scope of the extensionInstance is Cluster
     */
    export interface ScopeClusterResponse {
        /**
         * Namespace where the extension Release must be placed, for a Cluster scoped extensionInstance.  If this namespace does not exist, it will be created
         */
        releaseNamespace?: string;
    }

    /**
     * Specifies that the scope of the extensionInstance is Namespace
     */
    export interface ScopeNamespaceResponse {
        /**
         * Namespace where the extensionInstance will be created for an Namespace scoped extensionInstance.  If this namespace does not exist, it will be created
         */
        targetNamespace?: string;
    }

    /**
     * Scope of the extensionInstance. It can be either Cluster or Namespace; but not both.
     */
    export interface ScopeResponse {
        /**
         * Specifies that the scope of the extensionInstance is Cluster
         */
        cluster?: ScopeClusterResponse;
        /**
         * Specifies that the scope of the extensionInstance is Namespace
         */
        namespace?: ScopeNamespaceResponse;
    }

    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC)
         */
        createdAt: string;
        /**
         * A string identifier for the identity that created the resource
         */
        createdBy: string;
        /**
         * The type of identity that created the resource: user, application, managedIdentity, key
         */
        createdByType: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt: string;
        /**
         * A string identifier for the identity that last modified the resource
         */
        lastModifiedBy: string;
        /**
         * The type of identity that last modified the resource: user, application, managedIdentity, key
         */
        lastModifiedByType: string;
    }
