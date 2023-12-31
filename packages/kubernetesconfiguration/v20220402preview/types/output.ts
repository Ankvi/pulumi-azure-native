import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The resource management error additional info.
     */
    export interface ErrorAdditionalInfoResponse {
        /**
         * The additional info.
         */
        info: any;
        /**
         * The additional info type.
         */
        type: string;
    }

    /**
     * The error detail.
     */
    export interface ErrorDetailResponse {
        /**
         * The error additional info.
         */
        additionalInfo: ErrorAdditionalInfoResponse[];
        /**
         * The error code.
         */
        code: string;
        /**
         * The error details.
         */
        details: ErrorDetailResponse[];
        /**
         * The error message.
         */
        message: string;
        /**
         * The error target.
         */
        target: string;
    }

    /**
     * Identity of the Extension resource in an AKS cluster
     */
    export interface ExtensionResponseAksAssignedIdentity {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
    }

    /**
     * Status from the extension.
     */
    export interface ExtensionStatusResponse {
        /**
         * Status code provided by the Extension
         */
        code?: string;
        /**
         * Short description of status of the extension.
         */
        displayStatus?: string;
        /**
         * Level of the status.
         */
        level?: string;
        /**
         * Detailed message of the status from the Extension.
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
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
    }

    /**
     * Properties that define a Azure Arc PrivateLinkScope resource.
     */
    export interface KubernetesConfigurationPrivateLinkScopePropertiesResponse {
        /**
         * Managed Cluster ARM ID for the private link scope  (Required)
         */
        clusterResourceId: string;
        /**
         * The collection of associated Private Endpoint Connections.
         */
        privateEndpointConnections: PrivateEndpointConnectionResponse[];
        /**
         * The Guid id of the private link scope.
         */
        privateLinkScopeId: string;
        /**
         * Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.
         */
        provisioningState: string;
        /**
         * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
         */
        publicNetworkAccess?: string;
    }

    /**
     * Plan for the resource.
     */
    export interface PlanResponse {
        /**
         * A user defined name of the 3rd Party Artifact that is being procured.
         */
        name: string;
        /**
         * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
         */
        product: string;
        /**
         * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
         */
        promotionCode?: string;
        /**
         * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
         */
        publisher: string;
        /**
         * The version of the desired product/artifact.
         */
        version?: string;
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * Specifies that the scope of the extension is Cluster
     */
    export interface ScopeClusterResponse {
        /**
         * Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created
         */
        releaseNamespace?: string;
    }

    /**
     * Specifies that the scope of the extension is Namespace
     */
    export interface ScopeNamespaceResponse {
        /**
         * Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created
         */
        targetNamespace?: string;
    }

    /**
     * Scope of the extension. It can be either Cluster or Namespace; but not both.
     */
    export interface ScopeResponse {
        /**
         * Specifies that the scope of the extension is Cluster
         */
        cluster?: ScopeClusterResponse;
        /**
         * Specifies that the scope of the extension is Namespace
         */
        namespace?: ScopeNamespaceResponse;
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
