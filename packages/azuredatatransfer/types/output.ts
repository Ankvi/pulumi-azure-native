import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties of connection
 */
export interface ConnectionPropertiesResponse {
    /**
     * Approver of this connection request
     */
    approver: string;
    /**
     * The timestamp that this connection request was submitted at
     */
    dateSubmitted: string;
    /**
     * Direction of data movement
     */
    direction?: string;
    /**
     * The flow types being requested for this connection
     */
    flowTypes?: string[];
    /**
     * Justification for the connection request
     */
    justification?: string;
    /**
     * Link status of the current connection
     */
    linkStatus: string;
    /**
     * Resource ID of the linked connection
     */
    linkedConnectionId: string;
    /**
     * PIN to link requests together
     */
    pin?: string;
    /**
     * Pipeline to use to transfer data
     */
    pipeline: string;
    /**
     * The policies for this connection
     */
    policies?: string[];
    /**
     * The primary contact for this connection request
     */
    primaryContact?: string;
    /**
     * Provisioning state of the connection
     */
    provisioningState: string;
    /**
     * Subscription ID to link cloud subscriptions together
     */
    remoteSubscriptionId?: string;
    /**
     * Requirement ID of the connection
     */
    requirementId?: string;
    /**
     * The schemas for this connection
     */
    schemas?: SchemaResponse[];
    /**
     * The secondary contacts for this connection request
     */
    secondaryContacts?: string[];
    /**
     * Status of the connection
     */
    status: string;
    /**
     * Reason for status
     */
    statusReason: string;
}

/**
 * Properties of flow
 */
export interface FlowPropertiesResponse {
    /**
     * The connection associated with this flow
     */
    connection?: SelectedResourceResponse;
    /**
     * Transfer Storage Blobs or Tables
     */
    dataType?: string;
    /**
     * Dataflow GUID associated with this flow
     */
    flowId: string;
    /**
     * The flow type for this flow
     */
    flowType?: string;
    /**
     * AME, PME, or TORUS only! AKV Chain Containing SAS Token
     */
    keyVaultUri?: string;
    /**
     * Link status of the current flow
     */
    linkStatus: string;
    /**
     * Resource ID of the linked flow
     */
    linkedFlowId: string;
    /**
     * The policies for this flow
     */
    policies?: string[];
    /**
     * Provisioning state of the flow
     */
    provisioningState: string;
    /**
     * The selected schema for this flow
     */
    schema?: SchemaResponse;
    /**
     * Service Bus Queue ID
     */
    serviceBusQueueId?: string;
    /**
     * Status of the current flow
     */
    status?: string;
    /**
     * Storage Account ID
     */
    storageAccountId?: string;
    /**
     * Storage Account
     */
    storageAccountName?: string;
    /**
     * Storage Container Name
     */
    storageContainerName?: string;
}

/**
 * Internal metadata of the connection inside pipeline.
 */
export interface InternalMetadataPropertiesResponse {
    /**
     * Operation status associated with the last patch request
     */
    operationStatus?: OperationStatusPropertiesResponse;
    /**
     * User that last set the approved status for this connection
     */
    statusSetBy: string;
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
 * Operation status associated with the last patch request
 */
export interface OperationStatusPropertiesResponse {
    /**
     * Operation status ID of the last patch request for this connection.
     */
    id: string;
    /**
     * Message for the operation for the last patch request for this connection.
     */
    message: string;
    /**
     * Operation status for the last patch request for this connection.
     */
    status: string;
}

/**
 * Pending connection object
 */
export interface PendingConnectionResponse {
    /**
     * Approver of this connection request
     */
    approver: string;
    /**
     * The timestamp that this connection request was submitted at
     */
    dateSubmitted: string;
    /**
     * Direction of data movement
     */
    direction?: string;
    /**
     * The flow types being requested for this connection
     */
    flowTypes?: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * Justification for the connection request
     */
    justification?: string;
    /**
     * Link status of the current connection
     */
    linkStatus: string;
    /**
     * Resource ID of the linked connection
     */
    linkedConnectionId: string;
    /**
     * The geo-location where the resource lives
     */
    location: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * PIN to link requests together
     */
    pin?: string;
    /**
     * Pipeline to use to transfer data
     */
    pipeline: string;
    /**
     * The policies for this connection
     */
    policies?: string[];
    /**
     * The primary contact for this connection request
     */
    primaryContact?: string;
    /**
     * Provisioning state of the connection
     */
    provisioningState: string;
    /**
     * Subscription ID to link cloud subscriptions together
     */
    remoteSubscriptionId?: string;
    /**
     * Requirement ID of the connection
     */
    requirementId?: string;
    /**
     * The schemas for this connection
     */
    schemas?: SchemaResponse[];
    /**
     * The secondary contacts for this connection request
     */
    secondaryContacts?: string[];
    /**
     * Status of the connection
     */
    status: string;
    /**
     * Reason for status
     */
    statusReason: string;
    /**
     * Subscription ID of the pending connection.
     */
    subscriptionId: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Pending flow object
 */
export interface PendingFlowResponse {
    /**
     * The connection associated with this flow
     */
    connection?: SelectedResourceResponse;
    /**
     * Connection ID of the pending flow.
     */
    connectionId: string;
    /**
     * Transfer Storage Blobs or Tables
     */
    dataType?: string;
    /**
     * Dataflow GUID associated with this flow
     */
    flowId: string;
    /**
     * The flow type for this flow
     */
    flowType?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * AME, PME, or TORUS only! AKV Chain Containing SAS Token
     */
    keyVaultUri?: string;
    /**
     * Link status of the current flow
     */
    linkStatus: string;
    /**
     * Resource ID of the linked flow
     */
    linkedFlowId: string;
    /**
     * The geo-location where the resource lives
     */
    location: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The policies for this flow
     */
    policies?: string[];
    /**
     * Provisioning state of the flow
     */
    provisioningState: string;
    /**
     * The selected schema for this flow
     */
    schema?: SchemaResponse;
    /**
     * Service Bus Queue ID
     */
    serviceBusQueueId?: string;
    /**
     * Status of the current flow
     */
    status?: string;
    /**
     * Storage Account ID
     */
    storageAccountId?: string;
    /**
     * Storage Account
     */
    storageAccountName?: string;
    /**
     * Storage Container Name
     */
    storageContainerName?: string;
    /**
     * Subscription ID of the pending flow.
     */
    subscriptionId: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Connection body inside a pipeline
 */
export interface PipelineConnectionResponse {
    /**
     * Connection etag inside pipeline
     */
    etag: string;
    /**
     * Connection id inside pipeline
     */
    id: string;
    /**
     * Connection location inside pipeline
     */
    location: string;
    /**
     * Connection name inside pipeline
     */
    name: string;
    /**
     * Connection properties inside pipeline
     */
    properties?: PipelineConnectionResponseProperties;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
    /**
     * Connection type inside pipeline
     */
    type: string;
}

/**
 * Connection properties inside pipeline
 */
export interface PipelineConnectionResponseProperties {
    /**
     * Internal metadata of the connection inside pipeline.
     */
    internalMetadata?: InternalMetadataPropertiesResponse;
}

/**
 * Properties of pipeline
 */
export interface PipelinePropertiesResponse {
    /**
     * Connections associated with pipeline
     */
    connections: PipelineConnectionResponse[];
    /**
     * Display name of this pipeline
     */
    displayName?: string;
    /**
     * The flow types allowed for this pipeline
     */
    flowTypes?: string[];
    /**
     * The policies for this pipeline
     */
    policies?: string[];
    /**
     * Provisioning state of the pipeline
     */
    provisioningState: string;
    /**
     * Remote cloud of the data to be transferred or received
     */
    remoteCloud: string;
    /**
     * Subscribers of this resource
     */
    subscribers?: SubscriberResponse[];
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
 * The schema object.
 */
export interface SchemaResponse {
    /**
     * Connection ID associated with this schema
     */
    connectionId?: string;
    /**
     * Content of the schema
     */
    content?: string;
    /**
     * ID associated with this schema
     */
    id?: string;
    /**
     * Name of the schema
     */
    name?: string;
    /**
     * Status of the schema
     */
    status?: string;
}

/**
 * A resource selected from ARM
 */
export interface SelectedResourceResponse {
    /**
     * Id of the connection
     */
    id: string;
    /**
     * Location of the connection
     */
    location?: string;
    /**
     * Name of the connection
     */
    name?: string;
    /**
     * Name of the subscription with the connection
     */
    subscriptionName?: string;
}

export interface SubscriberResponse {
    /**
     * Email of the subscriber
     */
    email?: string;
    /**
     * Number specifying what notifications to receive
     */
    notifications?: number;
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

