import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Antivirus scanning rules for replicating data. By default, all antivirus scanning solutions are disabled.
 */
export interface AntivirusRulesetResponse {
    /**
     * Optional. The list of antiviruses to be used as a scanning solution for replicating data.
     */
    avSolutions?: string[];
}

/**
 * Properties specific to API Flow Type
 */
export interface ApiFlowOptionsResponse {
    /**
     * Remote Calling Mode in the Azure Data Transfer API Flow, which describes how the API Flow will be invoked
     */
    apiMode?: string;
    /**
     * Optional field to override the audience of the remote endpoint. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the authentication property instead.
     */
    audienceOverride?: string;
    /**
     * Unique CNAME to represent the Azure Data Transfer API Flow instance
     */
    cname?: string;
    /**
     * Determines which identity to use for extracting the user token for Azure Data Transfer API Flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the authentication property instead.
     */
    identityTranslation?: string;
    /**
     * Remote stub app registration Client ID. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the authentication property instead.
     */
    remoteCallingModeClientId?: string;
    /**
     * Remote host to which communication needs to be made. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the remoteEndpointSettings.endpoint property instead.
     */
    remoteEndpoint?: string;
    /**
     * Sender's app user assigned Manage Identity client ID. The property has reached end of life support starting version 2025-05-30-preview. Please create and use the authentication property instead.
     */
    senderClientId?: string;
}

/**
 * Rules for regulating supported archive files (BZip2, Cpio, Deb, GZip, Rpm, Tar, Zip) during data replication. All properties are optional and only the configured options will be applied against archives. As an example, suppose minimumSizeForExpansion is 10 MiB and maximumExpansionSizeLimit is 1 GiB. Then all archives smaller than 10 MiB will be treated as though the archive ruleset is disabled, although other rulesets will apply as usual. Furthermore, all archives at least 10 MiB in size but with a decompressed size greater than 1 GiB will fail the ruleset. All other archives will have their contents extracted and each extracted element will be applied to all rulesets.
 */
export interface ArchiveRulesetResponse {
    /**
     * Optional. Provides the multiplication value for an archive in total based on the initial object being validated. This value takes the root object size and multiplies it by this value to create a maximum. Once this maximum is exceeded, the archive is failed. Used to detect and block archives with suspiciously high compression (e.g., zip bombs).
     */
    maximumCompressionRatioLimit?: number;
    /**
     * Optional. The maximum depth of nested archives that can be expanded. Limits how many layers of embedded archives will be processed. Archives exceeding the max limit will be denied for replication.
     */
    maximumDepthLimit?: number;
    /**
     * Optional. The combined maximum size (in bytes) of all extracted files that an expanded archive is allowed to reach. Archives exceeding the max limit will be denied for replication.
     */
    maximumExpansionSizeLimit?: number;
    /**
     * Optional. Default is 0. The minimum archive file size (in bytes) required to trigger expansion during replication. Any archive file size below the configured threshold will skip the rest of the configured rulesets for archives.
     */
    minimumSizeForExpansion?: number;
}
/**
 * archiveRulesetResponseProvideDefaults sets the appropriate defaults for ArchiveRulesetResponse
 */
export function archiveRulesetResponseProvideDefaults(val: ArchiveRulesetResponse): ArchiveRulesetResponse {
    return {
        ...val,
        minimumSizeForExpansion: (val.minimumSizeForExpansion) ?? 0,
    };
}

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
     * The schema URIs for this connection
     */
    schemaUris?: string[];
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
 * Defines rules that enforce minimum and maximum file size limits for data replication.
 */
export interface DataSizeRulesetResponse {
    /**
     * Optional. Specifies the maximum allowed size (in bytes) for files to be replicated. Any file size greater than maximum will be denied replication.
     */
    maximum?: number;
    /**
     * Optional. Default is 0. Specifies the minimum required size (in bytes) for a file to be eligible for replication. Any file size less than minimum will be denied replication.
     */
    minimum?: number;
}
/**
 * dataSizeRulesetResponseProvideDefaults sets the appropriate defaults for DataSizeRulesetResponse
 */
export function dataSizeRulesetResponseProvideDefaults(val: DataSizeRulesetResponse): DataSizeRulesetResponse {
    return {
        ...val,
        minimum: (val.minimum) ?? 0,
    };
}

/**
 * Defines the full set of properties for a FlowProfile resource.
 */
export interface FlowProfilePropertiesResponse {
    /**
     * A user-defined description of the FlowProfile.
     */
    description: string;
    /**
     * A guid represented as a string for the FlowProfile resource, assigned by the system.
     */
    flowProfileId: string;
    /**
     * The current provisioning state of the FlowProfile.
     */
    provisioningState: string;
    /**
     * The data replication scenario handled by this FlowProfile. Please not, that this value cannot be updated after creation.
     */
    replicationScenario: string;
    /**
     * A set of configurable rulesets applied to this FlowProfile.
     */
    rulesets?: FlowProfileRulesetsResponse;
    /**
     * The operational status of the FlowProfile.
     */
    status: string;
}
/**
 * flowProfilePropertiesResponseProvideDefaults sets the appropriate defaults for FlowProfilePropertiesResponse
 */
export function flowProfilePropertiesResponseProvideDefaults(val: FlowProfilePropertiesResponse): FlowProfilePropertiesResponse {
    return {
        ...val,
        rulesets: (val.rulesets ? flowProfileRulesetsResponseProvideDefaults(val.rulesets) : undefined),
    };
}

/**
 * The allowed set of configurable rulesets for a FlowProfile resource, used during data replication. All rulesets are optional, and any ruleset configured will be applied to every applicable replicating data. Any data that fails a ruleset will be denied replication. If a ruleset is not configured then the ruleset is considered disabled and will not apply towards replicating data.
 */
export interface FlowProfileRulesetsResponse {
    /**
     * Antivirus scanning rules for replicated data.
     */
    antivirus?: AntivirusRulesetResponse;
    /**
     * Rules for handling archive files during replication.
     */
    archives?: ArchiveRulesetResponse;
    /**
     * Rules that enforce minimum and maximum data size limits.
     */
    dataSize?: DataSizeRulesetResponse;
    /**
     * Rules for filtering files based on MIME types.
     */
    mimeFilters?: MimeFilterRulesetResponse;
    /**
     * Rules for detecting and blocking specific text patterns.
     */
    textMatching?: TextMatchingRulesetResponse;
    /**
     * Rules for filtering XML content using XSD schemas.
     */
    xmlFilters?: XmlFilterRulesetResponse;
}
/**
 * flowProfileRulesetsResponseProvideDefaults sets the appropriate defaults for FlowProfileRulesetsResponse
 */
export function flowProfileRulesetsResponseProvideDefaults(val: FlowProfileRulesetsResponse): FlowProfileRulesetsResponse {
    return {
        ...val,
        archives: (val.archives ? archiveRulesetResponseProvideDefaults(val.archives) : undefined),
        dataSize: (val.dataSize ? dataSizeRulesetResponseProvideDefaults(val.dataSize) : undefined),
    };
}

/**
 * Properties of flow
 */
export interface FlowPropertiesResponse {
    /**
     * The API Flow configuration options for Azure Data Transfer API Flow type.
     */
    apiFlowOptions?: ApiFlowOptionsResponse;
    /**
     * The connection associated with this flow
     */
    connection?: SelectedResourceResponse;
    /**
     * Event Hub Consumer Group
     */
    consumerGroup?: string;
    /**
     * The URI to the customer managed key for this flow
     */
    customerManagedKeyVaultUri?: string;
    /**
     * Type of data to transfer via the flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
     */
    dataType?: string;
    /**
     * The destination endpoint ports of the stream
     */
    destinationEndpointPorts?: number[];
    /**
     * The destination endpoints of the stream
     */
    destinationEndpoints?: string[];
    /**
     * Event Hub ID
     */
    eventHubId?: string;
    /**
     * Dataflow GUID associated with this flow
     */
    flowId: string;
    /**
     * The flow type for this flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
     */
    flowType?: string;
    /**
     * Force disablement status of the current flow
     */
    forceDisabledStatus: string[];
    /**
     * URI to a Key Vault Secret containing a SAS token.
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
     * The messaging options for this flow
     */
    messagingOptions?: MessagingOptionsResponse;
    /**
     * The passphrase used for SRT streams
     */
    passphrase?: string;
    /**
     * The policies for this flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
     */
    policies?: string[];
    /**
     * Provisioning state of the flow
     */
    provisioningState: string;
    /**
     * The selected schema for this flow. The property has reached end of life support starting version 2025-05-30-preview. Please create and use a FlowProfile resource instead.
     */
    schema?: SchemaResponse;
    /**
     * Service Bus Queue ID
     */
    serviceBusQueueId?: string;
    /**
     * The source IP address and CIDR ranges of the stream
     */
    sourceAddresses?: StreamSourceAddressesResponse;
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
     * Storage Table Name
     */
    storageTableName?: string;
    /**
     * The flow stream identifier
     */
    streamId?: string;
    /**
     * The latency of the stream in milliseconds
     */
    streamLatency?: number;
    /**
     * The protocol of the stream
     */
    streamProtocol?: string;
}

/**
 * The flow resource definition.
 */
export interface FlowResponse {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    location: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Details of the resource plan.
     */
    plan?: PlanResponse;
    /**
     * Properties of flow
     */
    properties?: FlowPropertiesResponse;
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
 * A connection resource id in addition to all child flow resources under this connection.
 */
export interface ListFlowsByPipelineConnectionResponse {
    /**
     * List of flows associated with the connection.
     */
    flows?: FlowResponse[];
    /**
     * ID of the connection.
     */
    id?: string;
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
 * The option associated with messaging flows.
 */
export interface MessagingOptionsResponse {
    /**
     * Billing tier for this messaging flow
     */
    billingTier?: string;
}

/**
 * Rules for filtering files based on Media types (f.k.a MIME types).
 */
export interface MimeFilterRulesetResponse {
    /**
     * Defines the Media types (f.k.a MIME types) and associated file extensions to be filtered. For more detail, please refer to the MimeTypeFiler model.
     */
    filters?: MimeTypeFilterResponse[];
    /**
     * Specifies whether the filter is an allow list or deny list. For more detail, please refer to the FilterType model.
     */
    type?: string;
}

/**
 * Defines a list of Media types (f.k.a MIME Types) and associated file extensions subject to filtering.
 */
export interface MimeTypeFilterResponse {
    /**
     * A list of file extensions associated with the specified Media type (e.g., .json, .png). To specify files with no extension, use an empty string ""."
     */
    extensions?: string[];
    /**
     * The Media Types (f.k.a MIME types), following IANA standards (e.g., application/json, image/png). For a more detailed list of allowed media types please refer to the Tika documentation: https://github.com/apache/tika/blob/main/tika-core/src/main/resources/org/apache/tika/mime/tika-mimetypes.xml
     */
    media?: string;
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
     * The schema URIs for this connection
     */
    schemaUris?: string[];
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
     * The URI to the customer managed key for this flow
     */
    customerManagedKeyVaultUri?: string;
    /**
     * Transfer Storage Blobs or Tables
     */
    dataType?: string;
    /**
     * The destination endpoint ports of the stream
     */
    destinationEndpointPorts?: number[];
    /**
     * The destination endpoints of the stream
     */
    destinationEndpoints?: string[];
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
     * The messaging options for this flow
     */
    messagingOptions?: MessagingOptionsResponse;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The passphrase used for SRT streams
     */
    passphrase?: string;
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
     * The source IP address and CIDR ranges of the stream
     */
    sourceAddresses?: StreamSourceAddressesResponse;
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
     * The flow stream identifier
     */
    streamId?: string;
    /**
     * The latency of the stream in milliseconds
     */
    streamLatency?: number;
    /**
     * The protocol of the stream
     */
    streamProtocol?: string;
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
     * The direction of the schema.
     */
    direction?: string;
    /**
     * ID associated with this schema
     */
    id?: string;
    /**
     * Name of the schema
     */
    name?: string;
    /**
     * The Schema Type
     */
    schemaType?: string;
    /**
     * Uri containing SAS token for the zipped schema
     */
    schemaUri?: string;
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

/**
 * The source IP address and CIDR ranges of the stream
 */
export interface StreamSourceAddressesResponse {
    /**
     * A source IP address or CIDR range
     */
    sourceAddresses?: string[];
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
 * Configuration options for the text matching ruleset. For example, if the configuration is to deny "hello world" for partial case-insensitive words then "chello worlds" would get detected and the resulting file would be denied.
 */
export interface TextMatchResponse {
    /**
     * Specifies the text matching conditions based on casing. For more detail please refer to the Casing model.
     */
    caseSensitivity: string;
    /**
     * Specifies the text matching condition for text comparison. For more detail please refer to the MatchType model.
     */
    matchType: string;
    /**
     * The word or phrase to match against replicated content. A phrase with spaces will be considered a single substring.
     */
    text: string;
}
/**
 * textMatchResponseProvideDefaults sets the appropriate defaults for TextMatchResponse
 */
export function textMatchResponseProvideDefaults(val: TextMatchResponse): TextMatchResponse {
    return {
        ...val,
        caseSensitivity: (val.caseSensitivity) ?? "Insensitive",
        matchType: (val.matchType) ?? "Partial",
    };
}

/**
 * Rules for detecting and blocking specific text patterns. If a file contains a text pattern that is part of the configured deny list, the file will be denied.
 */
export interface TextMatchingRulesetResponse {
    /**
     * A list of text patterns to block, each with matching rules and case sensitivity options.
     */
    deny?: TextMatchResponse[];
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
 * Rules for filtering XML content using XSD schemas.
 */
export interface XmlFilterRulesetResponse {
    /**
     * The default XML namespace used for schema validation.
     */
    defaultNamespace?: string;
    /**
     * Defines the method for referencing the xml schema.
     */
    reference?: string;
    /**
     * The inline XSD schema to be used for validation.
     */
    schema?: string;
}
