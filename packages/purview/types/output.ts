import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Gets or sets the status of the account.
 */
export interface AccountPropertiesResponseAccountStatus {
    /**
     * Gets the account status code.
     */
    accountProvisioningState: string;
    /**
     * Gets the account error details.
     */
    errorDetails: AccountStatusResponseErrorDetails;
}

/**
 * The URIs that are the public endpoints of the account.
 */
export interface AccountPropertiesResponseEndpoints {
    /**
     * Gets the catalog endpoint.
     */
    catalog: string;
    /**
     * Gets the guardian endpoint.
     */
    guardian: string;
    /**
     * Gets the scan endpoint.
     */
    scan: string;
}

/**
 * Gets the resource identifiers of the managed resources.
 */
export interface AccountPropertiesResponseManagedResources {
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
 * Gets or sets the Sku.
 */
export interface AccountResponseSku {
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
export interface AccountStatusResponseErrorDetails {
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
 * A private endpoint connection class.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Gets or sets the identifier.
     */
    id: string;
    /**
     * Gets or sets the name.
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
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: ProxyResourceResponseSystemData;
    /**
     * Gets or sets the type.
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
export interface ProxyResourceResponseSystemData {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt: string;
    /**
     * The identity that created the resource.
     */
    createdBy: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType: string;
    /**
     * The timestamp of the last modification the resource (UTC).
     */
    lastModifiedAt: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface TrackedResourceResponseSystemData {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt: string;
    /**
     * The identity that created the resource.
     */
    createdBy: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType: string;
    /**
     * The timestamp of the last modification the resource (UTC).
     */
    lastModifiedAt: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType: string;
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



