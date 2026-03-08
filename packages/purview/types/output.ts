import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The public Account Merge Info model.
 */
export interface AccountMergeInfoResponse {
    /**
     * The account location of the *other* account in the merge operation.
     */
    accountLocation: string;
    /**
     * The account name of the *other* account in the merge operation.
     */
    accountName: string;
    /**
     * The resource group name of the *other* account in the merge operation.
     */
    accountResourceGroupName: string;
    /**
     * The subscription id of the *other* account in the merge operation.
     */
    accountSubscriptionId: string;
    /**
     * The deprovisioned status of the account.
     * Only applicable for the secondary account.
     */
    deprovisioned: boolean;
    /**
     * The status of the merge operation.
     */
    mergeStatus: string;
    /**
     * The account's type for the merge operation.
     */
    typeOfAccount: string;
}

/**
 * Gets or sets the status of the account.
 */
export interface AccountPropertiesAccountStatusResponse {
    /**
     * Gets the account status code.
     */
    accountProvisioningState: string;
    /**
     * Gets the account error details.
     */
    errorDetails: AccountStatusErrorDetailsResponse;
}

/**
 * The URIs that are the public endpoints of the account.
 */
export interface AccountPropertiesEndpointsResponse {
    /**
     * Gets the catalog endpoint.
     */
    catalog: string;
    /**
     * Gets the scan endpoint.
     */
    scan: string;
}

/**
 * Gets the resource identifiers of the managed resources.
 */
export interface AccountPropertiesManagedResourcesResponse {
    /**
     * Gets the managed event hub namespace resource identifier.
     */
    eventHubNamespace: string;
    /**
     * Gets the managed resource group resource identifier. This resource group will host resource dependencies for the account.
     */
    resourceGroup: string;
    /**
     * Gets the managed storage account resource identifier.
     */
    storageAccount: string;
}

/**
 * The Sku
 */
export interface AccountSkuResponse {
    /**
     * Gets or sets the sku capacity.
     */
    capacity?: number;
    /**
     * Gets or sets the sku name.
     */
    name?: string;
}

/**
 * Gets the account error details.
 */
export interface AccountStatusErrorDetailsResponse {
    /**
     * Gets or sets the code.
     */
    code: string;
    /**
     * Gets or sets the details.
     */
    details: ErrorModelResponse[];
    /**
     * Gets or sets the messages.
     */
    message: string;
    /**
     * Gets or sets the target.
     */
    target: string;
}

/**
 * External Cloud Service connectors
 */
export interface CloudConnectorsResponse {
    /**
     * AWS external identifier.
     * Configured in AWS to allow use of the role arn used for scanning
     */
    awsExternalId: string;
}

/**
 * Credentials to access the event streaming service attached to the purview account.
 */
export interface CredentialsResponse {
    /**
     * Identity identifier for UserAssign type.
     */
    identityId?: string;
    /**
     * Identity Type.
     */
    type?: string;
}

/**
 * Default error model
 */
export interface ErrorModelResponse {
    /**
     * Gets or sets the code.
     */
    code: string;
    /**
     * Gets or sets the details.
     */
    details: ErrorModelResponse[];
    /**
     * Gets or sets the messages.
     */
    message: string;
    /**
     * Gets or sets the target.
     */
    target: string;
}

/**
 * The Managed Identity of the resource
 */
export interface IdentityResponse {
    /**
     * Service principal object Id
     */
    principalId: string;
    /**
     * Tenant Id
     */
    tenantId: string;
    /**
     * Identity Type
     */
    type?: string;
    /**
     * User Assigned Identities
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Ingestion Storage Account Info
 */
export interface IngestionStorageResponse {
    /**
     * Gets or sets the Id.
     */
    id: string;
    /**
     * Gets or sets the primary endpoint.
     */
    primaryEndpoint: string;
    /**
     * Gets or sets the public network access setting
     */
    publicNetworkAccess?: string;
}

/**
 * A private endpoint connection class.
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
     * The private endpoint information.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * The private link service connection state.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state.
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
 * A private endpoint class.
 */
export interface PrivateEndpointResponse {
    /**
     * The private endpoint identifier.
     */
    id?: string;
}

/**
 * The private link service connection state.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * The required actions.
     */
    actionsRequired?: string;
    /**
     * The description.
     */
    description?: string;
    /**
     * The status.
     */
    status?: string;
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
 * Uses client ID and Principal ID
 */
export interface UserAssignedIdentityResponse {
    /**
     * Gets or Sets Client ID
     */
    clientId: string;
    /**
     * Gets or Sets Principal ID
     */
    principalId: string;
}
