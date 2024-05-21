import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information about the azure function destination for an event subscription.
 */
export interface AzureFunctionEventSubscriptionDestinationResponse {
    /**
     * Delivery attribute details.
     */
    deliveryAttributeMappings?: (DynamicDeliveryAttributeMappingResponse | StaticDeliveryAttributeMappingResponse)[];
    /**
     * Type of the endpoint for the event subscription destination.
     * Expected value is 'AzureFunction'.
     */
    endpointType: "AzureFunction";
    /**
     * Maximum number of events per batch.
     */
    maxEventsPerBatch?: number;
    /**
     * Preferred batch size in Kilobytes.
     */
    preferredBatchSizeInKilobytes?: number;
    /**
     * The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription.
     */
    resourceId?: string;
}
/**
 * azureFunctionEventSubscriptionDestinationResponseProvideDefaults sets the appropriate defaults for AzureFunctionEventSubscriptionDestinationResponse
 */
export function azureFunctionEventSubscriptionDestinationResponseProvideDefaults(val: AzureFunctionEventSubscriptionDestinationResponse): AzureFunctionEventSubscriptionDestinationResponse {
    return {
        ...val,
        maxEventsPerBatch: (val.maxEventsPerBatch) ?? 1,
        preferredBatchSizeInKilobytes: (val.preferredBatchSizeInKilobytes) ?? 64,
    };
}

/**
 * BoolEquals Advanced Filter.
 */
export interface BoolEqualsAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'BoolEquals'.
     */
    operatorType: "BoolEquals";
    /**
     * The boolean filter value.
     */
    value?: boolean;
}

/**
 * BoolEquals Filter.
 */
export interface BoolEqualsFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'BoolEquals'.
     */
    operatorType: "BoolEquals";
    /**
     * The boolean filter value.
     */
    value?: boolean;
}

/**
 * The Authentication properties for the client.
 */
export interface ClientAuthenticationResponse {
    /**
     * The CA certificate subject name used for authentication.
     */
    certificateSubject?: ClientCertificateSubjectDistinguishedNameResponse;
    /**
     * The self signed certificate's thumbprints data used for authentication.
     */
    certificateThumbprint?: ClientCertificateThumbprintResponse;
}

/**
 * Client authentication settings for namespace resource.
 */
export interface ClientAuthenticationSettingsResponse {
    /**
     * Alternative authentication name sources related to client authentication settings for namespace resource.
     */
    alternativeAuthenticationNameSources?: string[];
}

/**
 * The certificate authentication properties for the client.
 */
export interface ClientCertificateAuthenticationResponse {
    /**
     * The list of thumbprints that are allowed during client authentication. This property is required only if the validationScheme is 'ThumbprintMatch'.
     */
    allowedThumbprints?: string[];
    /**
     * The validation scheme used to authenticate the client. Default value is SubjectMatchesAuthenticationName.
     */
    validationScheme?: string;
}

/**
 * CA certificate subject distinguished name information used by service to authenticate clients.
 * For more information, see https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.x509certificates.x500distinguishedname?view=net-6.0#remarks
 */
export interface ClientCertificateSubjectDistinguishedNameResponse {
    /**
     * The common name field in the subject name. The allowed limit is 64 characters and it should be specified.
     */
    commonName?: string;
    /**
     * The country code field in the subject name. If present, the country code should be represented by two-letter code defined in ISO 2166-1 (alpha-2). For example: 'US'.
     */
    countryCode?: string;
    /**
     * The organization field in the subject name. If present, the allowed limit is 64 characters.
     */
    organization?: string;
    /**
     * The organization unit field in the subject name. If present, the allowed limit is 32 characters.
     */
    organizationUnit?: string;
}

/**
 * Thumbprints are used by the service to validate the device permission when authentication is done using self signed certificate.
 */
export interface ClientCertificateThumbprintResponse {
    /**
     * The primary thumbprint used for validation.
     */
    primary?: string;
    /**
     * The secondary thumbprint used for validation.
     */
    secondary?: string;
}

/**
 * ConnectionState information.
 */
export interface ConnectionStateResponse {
    /**
     * Actions required (if any).
     */
    actionsRequired?: string;
    /**
     * Description of the connection state.
     */
    description?: string;
    /**
     * Status of the connection.
     */
    status?: string;
}

/**
 * Information about the deadletter destination with resource identity.
 */
export interface DeadLetterWithResourceIdentityResponse {
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    deadLetterDestination?: StorageBlobDeadLetterDestinationResponse;
    /**
     * The identity to use when dead-lettering events.
     */
    identity?: EventSubscriptionIdentityResponse;
}

/**
 * Properties of the delivery configuration information of the event subscription.
 */
export interface DeliveryConfigurationResponse {
    /**
     * Delivery mode of the event subscription.
     */
    deliveryMode?: string;
    /**
     * This property should be populated when deliveryMode is queue and represents information about the queue subscription.
     */
    queue?: QueueInfoResponse;
}

/**
 * Information about the delivery for an event subscription with resource identity.
 */
export interface DeliveryWithResourceIdentityResponse {
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    destination?: AzureFunctionEventSubscriptionDestinationResponse | EventHubEventSubscriptionDestinationResponse | HybridConnectionEventSubscriptionDestinationResponse | ServiceBusQueueEventSubscriptionDestinationResponse | ServiceBusTopicEventSubscriptionDestinationResponse | StorageQueueEventSubscriptionDestinationResponse | WebHookEventSubscriptionDestinationResponse;
    /**
     * The identity to use when delivering events.
     */
    identity?: EventSubscriptionIdentityResponse;
}

/**
 * Dynamic delivery attribute mapping details.
 */
export interface DynamicDeliveryAttributeMappingResponse {
    /**
     * Name of the delivery attribute or header.
     */
    name?: string;
    /**
     * JSON path in the event which contains attribute value.
     */
    sourceField?: string;
    /**
     * Type of the delivery attribute or header name.
     * Expected value is 'Dynamic'.
     */
    type: "Dynamic";
}

export interface DynamicRoutingEnrichmentResponse {
    /**
     * Dynamic routing enrichment key.
     */
    key?: string;
    /**
     * Dynamic routing enrichment value.
     */
    value?: string;
}

/**
 * Information about the event hub destination for an event subscription.
 */
export interface EventHubEventSubscriptionDestinationResponse {
    /**
     * Delivery attribute details.
     */
    deliveryAttributeMappings?: (DynamicDeliveryAttributeMappingResponse | StaticDeliveryAttributeMappingResponse)[];
    /**
     * Type of the endpoint for the event subscription destination.
     * Expected value is 'EventHub'.
     */
    endpointType: "EventHub";
    /**
     * The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.
     */
    resourceId?: string;
}

/**
 * Filter for the Event Subscription.
 */
export interface EventSubscriptionFilterResponse {
    /**
     * An array of advanced filters that are used for filtering event subscriptions.
     */
    advancedFilters?: (BoolEqualsAdvancedFilterResponse | IsNotNullAdvancedFilterResponse | IsNullOrUndefinedAdvancedFilterResponse | NumberGreaterThanAdvancedFilterResponse | NumberGreaterThanOrEqualsAdvancedFilterResponse | NumberInAdvancedFilterResponse | NumberInRangeAdvancedFilterResponse | NumberLessThanAdvancedFilterResponse | NumberLessThanOrEqualsAdvancedFilterResponse | NumberNotInAdvancedFilterResponse | NumberNotInRangeAdvancedFilterResponse | StringBeginsWithAdvancedFilterResponse | StringContainsAdvancedFilterResponse | StringEndsWithAdvancedFilterResponse | StringInAdvancedFilterResponse | StringNotBeginsWithAdvancedFilterResponse | StringNotContainsAdvancedFilterResponse | StringNotEndsWithAdvancedFilterResponse | StringNotInAdvancedFilterResponse)[];
    /**
     * Allows advanced filters to be evaluated against an array of values instead of expecting a singular value.
     */
    enableAdvancedFilteringOnArrays?: boolean;
    /**
     * A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.
     */
    includedEventTypes?: string[];
    /**
     * Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter
     * should be compared in a case sensitive manner.
     */
    isSubjectCaseSensitive?: boolean;
    /**
     * An optional string to filter events for an event subscription based on a resource path prefix.
     * The format of this depends on the publisher of the events.
     * Wildcard characters are not supported in this path.
     */
    subjectBeginsWith?: string;
    /**
     * An optional string to filter events for an event subscription based on a resource path suffix.
     * Wildcard characters are not supported in this path.
     */
    subjectEndsWith?: string;
}
/**
 * eventSubscriptionFilterResponseProvideDefaults sets the appropriate defaults for EventSubscriptionFilterResponse
 */
export function eventSubscriptionFilterResponseProvideDefaults(val: EventSubscriptionFilterResponse): EventSubscriptionFilterResponse {
    return {
        ...val,
        isSubjectCaseSensitive: (val.isSubjectCaseSensitive) ?? false,
    };
}

/**
 * The identity information with the event subscription.
 */
export interface EventSubscriptionIdentityResponse {
    /**
     * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
     */
    type?: string;
    /**
     * The user identity associated with the resource.
     */
    userAssignedIdentity?: string;
}

/**
 * The event type information for Channels.
 */
export interface EventTypeInfoResponse {
    /**
     * A collection of inline event types for the resource. The inline event type keys are of type string which represents the name of the event.
     * An example of a valid inline event name is "Contoso.OrderCreated".
     * The inline event type values are of type InlineEventProperties and will contain additional information for every inline event type.
     */
    inlineEventTypes?: {[key: string]: InlineEventPropertiesResponse};
    /**
     * The kind of event type used.
     */
    kind?: string;
}

/**
 * Filters configuration for the Event Subscription.
 */
export interface FiltersConfigurationResponse {
    /**
     * An array of filters that are used for filtering event subscriptions.
     */
    filters?: (BoolEqualsFilterResponse | IsNotNullFilterResponse | IsNullOrUndefinedFilterResponse | NumberGreaterThanFilterResponse | NumberGreaterThanOrEqualsFilterResponse | NumberInFilterResponse | NumberInRangeFilterResponse | NumberLessThanFilterResponse | NumberLessThanOrEqualsFilterResponse | NumberNotInFilterResponse | NumberNotInRangeFilterResponse | StringBeginsWithFilterResponse | StringContainsFilterResponse | StringEndsWithFilterResponse | StringInFilterResponse | StringNotBeginsWithFilterResponse | StringNotContainsFilterResponse | StringNotEndsWithFilterResponse | StringNotInFilterResponse)[];
    /**
     * A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.
     */
    includedEventTypes?: string[];
}

/**
 * Information about the HybridConnection destination for an event subscription.
 */
export interface HybridConnectionEventSubscriptionDestinationResponse {
    /**
     * Delivery attribute details.
     */
    deliveryAttributeMappings?: (DynamicDeliveryAttributeMappingResponse | StaticDeliveryAttributeMappingResponse)[];
    /**
     * Type of the endpoint for the event subscription destination.
     * Expected value is 'HybridConnection'.
     */
    endpointType: "HybridConnection";
    /**
     * The Azure Resource ID of an hybrid connection that is the destination of an event subscription.
     */
    resourceId?: string;
}

/**
 * The identity information for the resource.
 */
export interface IdentityInfoResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId?: string;
    /**
     * The tenant ID of resource.
     */
    tenantId?: string;
    /**
     * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
     */
    type?: string;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     * This property is currently not used and reserved for future usage.
     */
    userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
}

export interface InboundIpRuleResponse {
    /**
     * Action to perform based on the match or no match of the IpMask.
     */
    action?: string;
    /**
     * IP Address in CIDR notation e.g., 10.0.0.0/8.
     */
    ipMask?: string;
}

/**
 * Additional information about every inline event.
 */
export interface InlineEventPropertiesResponse {
    /**
     * The dataSchemaUrl for the inline event.
     */
    dataSchemaUrl?: string;
    /**
     * The description for the inline event.
     */
    description?: string;
    /**
     * The displayName for the inline event.
     */
    displayName?: string;
    /**
     * The documentationUrl for the inline event.
     */
    documentationUrl?: string;
}

/**
 * IsNotNull Advanced Filter.
 */
export interface IsNotNullAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'IsNotNull'.
     */
    operatorType: "IsNotNull";
}

/**
 * IsNotNull Filter.
 */
export interface IsNotNullFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'IsNotNull'.
     */
    operatorType: "IsNotNull";
}

/**
 * IsNullOrUndefined Advanced Filter.
 */
export interface IsNullOrUndefinedAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'IsNullOrUndefined'.
     */
    operatorType: "IsNullOrUndefined";
}

/**
 * IsNullOrUndefined Filter.
 */
export interface IsNullOrUndefinedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'IsNullOrUndefined'.
     */
    operatorType: "IsNullOrUndefined";
}

/**
 * This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema.
 */
export interface JsonFieldResponse {
    /**
     * Name of a field in the input event schema that's to be used as the source of a mapping.
     */
    sourceField?: string;
}

/**
 * This is used to express the source of an input schema mapping for a single target field
 * in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
 * 'eventtype' and 'dataversion' properties. This represents a field in the input event schema
 * along with a default value to be used, and at least one of these two properties should be provided.
 */
export interface JsonFieldWithDefaultResponse {
    /**
     * The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
     */
    defaultValue?: string;
    /**
     * Name of a field in the input event schema that's to be used as the source of a mapping.
     */
    sourceField?: string;
}

/**
 * This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema.
 */
export interface JsonInputSchemaMappingResponse {
    /**
     * The mapping information for the DataVersion property of the Event Grid Event.
     */
    dataVersion?: JsonFieldWithDefaultResponse;
    /**
     * The mapping information for the EventTime property of the Event Grid Event.
     */
    eventTime?: JsonFieldResponse;
    /**
     * The mapping information for the EventType property of the Event Grid Event.
     */
    eventType?: JsonFieldWithDefaultResponse;
    /**
     * The mapping information for the Id property of the Event Grid Event.
     */
    id?: JsonFieldResponse;
    /**
     * Type of the custom mapping
     * Expected value is 'Json'.
     */
    inputSchemaMappingType: "Json";
    /**
     * The mapping information for the Subject property of the Event Grid Event.
     */
    subject?: JsonFieldWithDefaultResponse;
    /**
     * The mapping information for the Topic property of the Event Grid Event.
     */
    topic?: JsonFieldResponse;
}

/**
 * Represents available Sku pricing tiers.
 */
export interface NamespaceSkuResponse {
    /**
     * Specifies the number of Throughput Units that defines the capacity for the namespace. The property default value is
     * 1 which signifies 1 Throughput Unit = 1MB/s ingress and 2MB/s egress per namespace. Min capacity is 1 and
     * max allowed capacity is 20.
     */
    capacity?: number;
    /**
     * The name of the SKU.
     */
    name?: string;
}

/**
 * NumberGreaterThan Advanced Filter.
 */
export interface NumberGreaterThanAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberGreaterThan'.
     */
    operatorType: "NumberGreaterThan";
    /**
     * The filter value.
     */
    value?: number;
}

/**
 * NumberGreaterThan Filter.
 */
export interface NumberGreaterThanFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberGreaterThan'.
     */
    operatorType: "NumberGreaterThan";
    /**
     * The filter value.
     */
    value?: number;
}

/**
 * NumberGreaterThanOrEquals Advanced Filter.
 */
export interface NumberGreaterThanOrEqualsAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberGreaterThanOrEquals'.
     */
    operatorType: "NumberGreaterThanOrEquals";
    /**
     * The filter value.
     */
    value?: number;
}

/**
 * NumberGreaterThanOrEquals Filter.
 */
export interface NumberGreaterThanOrEqualsFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberGreaterThanOrEquals'.
     */
    operatorType: "NumberGreaterThanOrEquals";
    /**
     * The filter value.
     */
    value?: number;
}

/**
 * NumberIn Advanced Filter.
 */
export interface NumberInAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberIn'.
     */
    operatorType: "NumberIn";
    /**
     * The set of filter values.
     */
    values?: number[];
}

/**
 * NumberIn Filter.
 */
export interface NumberInFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberIn'.
     */
    operatorType: "NumberIn";
    /**
     * The set of filter values.
     */
    values?: number[];
}

/**
 * NumberInRange Advanced Filter.
 */
export interface NumberInRangeAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberInRange'.
     */
    operatorType: "NumberInRange";
    /**
     * The set of filter values.
     */
    values?: number[][];
}

/**
 * NumberInRange Filter.
 */
export interface NumberInRangeFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberInRange'.
     */
    operatorType: "NumberInRange";
    /**
     * The set of filter values.
     */
    values?: number[][];
}

/**
 * NumberLessThan Advanced Filter.
 */
export interface NumberLessThanAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberLessThan'.
     */
    operatorType: "NumberLessThan";
    /**
     * The filter value.
     */
    value?: number;
}

/**
 * NumberLessThan Filter.
 */
export interface NumberLessThanFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberLessThan'.
     */
    operatorType: "NumberLessThan";
    /**
     * The filter value.
     */
    value?: number;
}

/**
 * NumberLessThanOrEquals Advanced Filter.
 */
export interface NumberLessThanOrEqualsAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberLessThanOrEquals'.
     */
    operatorType: "NumberLessThanOrEquals";
    /**
     * The filter value.
     */
    value?: number;
}

/**
 * NumberLessThanOrEquals Filter.
 */
export interface NumberLessThanOrEqualsFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberLessThanOrEquals'.
     */
    operatorType: "NumberLessThanOrEquals";
    /**
     * The filter value.
     */
    value?: number;
}

/**
 * NumberNotIn Advanced Filter.
 */
export interface NumberNotInAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberNotIn'.
     */
    operatorType: "NumberNotIn";
    /**
     * The set of filter values.
     */
    values?: number[];
}

/**
 * NumberNotIn Filter.
 */
export interface NumberNotInFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberNotIn'.
     */
    operatorType: "NumberNotIn";
    /**
     * The set of filter values.
     */
    values?: number[];
}

/**
 * NumberNotInRange Advanced Filter.
 */
export interface NumberNotInRangeAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberNotInRange'.
     */
    operatorType: "NumberNotInRange";
    /**
     * The set of filter values.
     */
    values?: number[][];
}

/**
 * NumberNotInRange Filter.
 */
export interface NumberNotInRangeFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'NumberNotInRange'.
     */
    operatorType: "NumberNotInRange";
    /**
     * The set of filter values.
     */
    values?: number[][];
}

/**
 * The partner authorization details.
 */
export interface PartnerAuthorizationResponse {
    /**
     * The list of authorized partners.
     */
    authorizedPartnersList?: PartnerResponse[];
    /**
     * Time used to validate the authorization expiration time for each authorized partner. If DefaultMaximumExpirationTimeInDays is
     * not specified, the default is 7 days. Otherwise, allowed values are between 1 and 365 days.
     */
    defaultMaximumExpirationTimeInDays?: number;
}

/**
 * Information about the partner.
 */
export interface PartnerResponse {
    /**
     * Expiration time of the partner authorization. If this timer expires, any request from this partner to create, update or delete resources in subscriber's
     * context will fail. If specified, the allowed values are between 1 to the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration.
     * If not specified, the default value will be the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration or 7 if this value is not specified.
     */
    authorizationExpirationTimeInUtc?: string;
    /**
     * The partner name.
     */
    partnerName?: string;
    /**
     * The immutableId of the corresponding partner registration.
     */
    partnerRegistrationImmutableId?: string;
}

/**
 * Properties of the corresponding partner topic of a Channel.
 */
export interface PartnerTopicInfoResponse {
    /**
     * Azure subscription ID of the subscriber. The partner topic associated with the channel will be
     * created under this Azure subscription.
     */
    azureSubscriptionId?: string;
    /**
     * Event Type Information for the partner topic. This information is provided by the publisher and can be used by the 
     * subscriber to view different types of events that are published.
     */
    eventTypeInfo?: EventTypeInfoResponse;
    /**
     * Name of the partner topic associated with the channel.
     */
    name?: string;
    /**
     * Azure Resource Group of the subscriber. The partner topic associated with the channel will be
     * created under this resource group.
     */
    resourceGroupName?: string;
    /**
     * The source information is provided by the publisher to determine the scope or context from which the events
     * are originating. This information can be used by the subscriber during the approval process of the
     * created partner topic.
     */
    source?: string;
}

export interface PrivateEndpointConnectionResponse {
    /**
     * GroupIds from the private link service resource.
     */
    groupIds?: string[];
    /**
     * Fully qualified identifier of the resource.
     */
    id: string;
    /**
     * Name of the resource.
     */
    name: string;
    /**
     * The Private Endpoint resource for this Connection.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * Details about the state of the connection.
     */
    privateLinkServiceConnectionState?: ConnectionStateResponse;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    provisioningState?: string;
    /**
     * Type of the resource.
     */
    type: string;
}

/**
 * PrivateEndpoint information.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint.
     */
    id?: string;
}

/**
 * Properties of the Queue info for event subscription.
 */
export interface QueueInfoResponse {
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses the managed identity setup on the parent resource (namely, topic) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    deadLetterDestinationWithResourceIdentity?: DeadLetterWithResourceIdentityResponse;
    /**
     * Time span duration in ISO 8601 format that determines how long messages are available to the subscription from the time the message was published.
     * This duration value is expressed using the following format: \'P(n)Y(n)M(n)DT(n)H(n)M(n)S\', where:
     *     - (n) is replaced by the value of each time element that follows the (n).
     *     - P is the duration (or Period) designator and is always placed at the beginning of the duration.
     *     - Y is the year designator, and it follows the value for the number of years.
     *     - M is the month designator, and it follows the value for the number of months.
     *     - W is the week designator, and it follows the value for the number of weeks.
     *     - D is the day designator, and it follows the value for the number of days.
     *     - T is the time designator, and it precedes the time components.
     *     - H is the hour designator, and it follows the value for the number of hours.
     *     - M is the minute designator, and it follows the value for the number of minutes.
     *     - S is the second designator, and it follows the value for the number of seconds.
     * This duration value cannot be set greater than the topic’s EventRetentionInDays. It is is an optional field where its minimum value is 1 minute, and its maximum is determined
     * by topic’s EventRetentionInDays value. The followings are examples of valid values:
     *     - \'P0DT23H12M\' or \'PT23H12M\': for duration of 23 hours and 12 minutes.
     *     - \'P1D\' or \'P1DT0H0M0S\': for duration of 1 day.
     */
    eventTimeToLive?: string;
    /**
     * The maximum delivery count of the events.
     */
    maxDeliveryCount?: number;
    /**
     * Maximum period in seconds in which once the message is in received (by the client) state and waiting to be accepted, released or rejected.
     * If this time elapsed after a message has been received by the client and not transitioned into accepted (not processed), released or rejected,
     * the message is available for redelivery. This is an optional field, where default is 60 seconds, minimum is 60 seconds and maximum is 300 seconds.
     */
    receiveLockDurationInSeconds?: number;
}

/**
 * Information about the retry policy for an event subscription.
 */
export interface RetryPolicyResponse {
    /**
     * Time To Live (in minutes) for events.
     */
    eventTimeToLiveInMinutes?: number;
    /**
     * Maximum number of delivery retry attempts for events.
     */
    maxDeliveryAttempts?: number;
}
/**
 * retryPolicyResponseProvideDefaults sets the appropriate defaults for RetryPolicyResponse
 */
export function retryPolicyResponseProvideDefaults(val: RetryPolicyResponse): RetryPolicyResponse {
    return {
        ...val,
        eventTimeToLiveInMinutes: (val.eventTimeToLiveInMinutes) ?? 1440,
        maxDeliveryAttempts: (val.maxDeliveryAttempts) ?? 30,
    };
}

export interface RoutingEnrichmentsResponse {
    dynamic?: DynamicRoutingEnrichmentResponse[];
    static?: StaticRoutingEnrichmentResponse[];
}

/**
 * Routing identity info for topic spaces configuration.
 */
export interface RoutingIdentityInfoResponse {
    type?: string;
    userAssignedIdentity?: string;
}

/**
 * Information about the service bus destination for an event subscription.
 */
export interface ServiceBusQueueEventSubscriptionDestinationResponse {
    /**
     * Delivery attribute details.
     */
    deliveryAttributeMappings?: (DynamicDeliveryAttributeMappingResponse | StaticDeliveryAttributeMappingResponse)[];
    /**
     * Type of the endpoint for the event subscription destination.
     * Expected value is 'ServiceBusQueue'.
     */
    endpointType: "ServiceBusQueue";
    /**
     * The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription.
     */
    resourceId?: string;
}

/**
 * Information about the service bus topic destination for an event subscription.
 */
export interface ServiceBusTopicEventSubscriptionDestinationResponse {
    /**
     * Delivery attribute details.
     */
    deliveryAttributeMappings?: (DynamicDeliveryAttributeMappingResponse | StaticDeliveryAttributeMappingResponse)[];
    /**
     * Type of the endpoint for the event subscription destination.
     * Expected value is 'ServiceBusTopic'.
     */
    endpointType: "ServiceBusTopic";
    /**
     * The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription.
     */
    resourceId?: string;
}

/**
 * Static delivery attribute mapping details.
 */
export interface StaticDeliveryAttributeMappingResponse {
    /**
     * Boolean flag to tell if the attribute contains sensitive information .
     */
    isSecret?: boolean;
    /**
     * Name of the delivery attribute or header.
     */
    name?: string;
    /**
     * Type of the delivery attribute or header name.
     * Expected value is 'Static'.
     */
    type: "Static";
    /**
     * Value of the delivery attribute.
     */
    value?: string;
}
/**
 * staticDeliveryAttributeMappingResponseProvideDefaults sets the appropriate defaults for StaticDeliveryAttributeMappingResponse
 */
export function staticDeliveryAttributeMappingResponseProvideDefaults(val: StaticDeliveryAttributeMappingResponse): StaticDeliveryAttributeMappingResponse {
    return {
        ...val,
        isSecret: (val.isSecret) ?? false,
    };
}

export interface StaticRoutingEnrichmentResponse {
    /**
     * Static routing enrichment key.
     */
    key?: string;
    /**
     * Static routing enrichment value type. For e.g. this property value can be 'String'.
     */
    valueType?: string;
}

/**
 * Information about the storage blob based dead letter destination.
 */
export interface StorageBlobDeadLetterDestinationResponse {
    /**
     * The name of the Storage blob container that is the destination of the deadletter events
     */
    blobContainerName?: string;
    /**
     * Type of the endpoint for the dead letter destination
     * Expected value is 'StorageBlob'.
     */
    endpointType: "StorageBlob";
    /**
     * The Azure Resource ID of the storage account that is the destination of the deadletter events
     */
    resourceId?: string;
}

/**
 * Information about the storage queue destination for an event subscription.
 */
export interface StorageQueueEventSubscriptionDestinationResponse {
    /**
     * Type of the endpoint for the event subscription destination.
     * Expected value is 'StorageQueue'.
     */
    endpointType: "StorageQueue";
    /**
     * Storage queue message time to live in seconds.
     */
    queueMessageTimeToLiveInSeconds?: number;
    /**
     * The name of the Storage queue under a storage account that is the destination of an event subscription.
     */
    queueName?: string;
    /**
     * The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.
     */
    resourceId?: string;
}

/**
 * StringBeginsWith Advanced Filter.
 */
export interface StringBeginsWithAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringBeginsWith'.
     */
    operatorType: "StringBeginsWith";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringBeginsWith Filter.
 */
export interface StringBeginsWithFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringBeginsWith'.
     */
    operatorType: "StringBeginsWith";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringContains Advanced Filter.
 */
export interface StringContainsAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringContains'.
     */
    operatorType: "StringContains";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringContains Filter.
 */
export interface StringContainsFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringContains'.
     */
    operatorType: "StringContains";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringEndsWith Advanced Filter.
 */
export interface StringEndsWithAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringEndsWith'.
     */
    operatorType: "StringEndsWith";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringEndsWith Filter.
 */
export interface StringEndsWithFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringEndsWith'.
     */
    operatorType: "StringEndsWith";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringIn Advanced Filter.
 */
export interface StringInAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringIn'.
     */
    operatorType: "StringIn";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringIn Filter.
 */
export interface StringInFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringIn'.
     */
    operatorType: "StringIn";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringNotBeginsWith Advanced Filter.
 */
export interface StringNotBeginsWithAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringNotBeginsWith'.
     */
    operatorType: "StringNotBeginsWith";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringNotBeginsWith Filter.
 */
export interface StringNotBeginsWithFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringNotBeginsWith'.
     */
    operatorType: "StringNotBeginsWith";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringNotContains Advanced Filter.
 */
export interface StringNotContainsAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringNotContains'.
     */
    operatorType: "StringNotContains";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringNotContains Filter.
 */
export interface StringNotContainsFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringNotContains'.
     */
    operatorType: "StringNotContains";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringNotEndsWith Advanced Filter.
 */
export interface StringNotEndsWithAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringNotEndsWith'.
     */
    operatorType: "StringNotEndsWith";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringNotEndsWith Filter.
 */
export interface StringNotEndsWithFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringNotEndsWith'.
     */
    operatorType: "StringNotEndsWith";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringNotIn Advanced Filter.
 */
export interface StringNotInAdvancedFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringNotIn'.
     */
    operatorType: "StringNotIn";
    /**
     * The set of filter values.
     */
    values?: string[];
}

/**
 * StringNotIn Filter.
 */
export interface StringNotInFilterResponse {
    /**
     * The field/property in the event based on which you want to filter.
     */
    key?: string;
    /**
     * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
     * Expected value is 'StringNotIn'.
     */
    operatorType: "StringNotIn";
    /**
     * The set of filter values.
     */
    values?: string[];
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
 * Properties of the Topic Spaces Configuration.
 */
export interface TopicSpacesConfigurationResponse {
    /**
     * Client authentication settings for topic spaces configuration.
     */
    clientAuthentication?: ClientAuthenticationSettingsResponse;
    /**
     * The endpoint for the topic spaces configuration. This is a read-only property.
     */
    hostname: string;
    /**
     * The maximum number of sessions per authentication name. The property default value is 1.
     * Min allowed value is 1 and max allowed value is 100.
     */
    maximumClientSessionsPerAuthenticationName?: number;
    /**
     * The maximum session expiry in hours. The property default value is 1 hour.
     * Min allowed value is 1 hour and max allowed value is 8 hours.
     */
    maximumSessionExpiryInHours?: number;
    /**
     * Fully qualified Azure Resource Id for the Event Grid Topic to which events will be routed to from TopicSpaces under a namespace.
     * This property should be in the following format '/subscriptions/{subId}/resourcegroups/{resourceGroupName}/providers/microsoft.EventGrid/topics/{topicName}'.
     * This topic should reside in the same region where namespace is located.
     */
    routeTopicResourceId?: string;
    /**
     * Routing enrichments for topic spaces configuration
     */
    routingEnrichments?: RoutingEnrichmentsResponse;
    /**
     * Routing identity info for topic spaces configuration.
     */
    routingIdentityInfo?: RoutingIdentityInfoResponse;
    /**
     * Indicate if Topic Spaces Configuration is enabled for the namespace. Default is Disabled.
     */
    state?: string;
}
/**
 * topicSpacesConfigurationResponseProvideDefaults sets the appropriate defaults for TopicSpacesConfigurationResponse
 */
export function topicSpacesConfigurationResponseProvideDefaults(val: TopicSpacesConfigurationResponse): TopicSpacesConfigurationResponse {
    return {
        ...val,
        state: (val.state) ?? "Disabled",
    };
}

/**
 * Properties of the Topics Configuration.
 */
export interface TopicsConfigurationResponse {
    /**
     * The hostname for the topics configuration. This is a read-only property.
     */
    hostname: string;
}

/**
 * The information about the user identity.
 */
export interface UserIdentityPropertiesResponse {
    /**
     * The client id of user assigned identity.
     */
    clientId?: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId?: string;
}

/**
 * Information about the webhook destination for an event subscription.
 */
export interface WebHookEventSubscriptionDestinationResponse {
    /**
     * The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
     */
    azureActiveDirectoryApplicationIdOrUri?: string;
    /**
     * The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
     */
    azureActiveDirectoryTenantId?: string;
    /**
     * Delivery attribute details.
     */
    deliveryAttributeMappings?: (DynamicDeliveryAttributeMappingResponse | StaticDeliveryAttributeMappingResponse)[];
    /**
     * The base URL that represents the endpoint of the destination of an event subscription.
     */
    endpointBaseUrl: string;
    /**
     * Type of the endpoint for the event subscription destination.
     * Expected value is 'WebHook'.
     */
    endpointType: "WebHook";
    /**
     * The URL that represents the endpoint of the destination of an event subscription.
     */
    endpointUrl?: string;
    /**
     * Maximum number of events per batch.
     */
    maxEventsPerBatch?: number;
    /**
     * Preferred batch size in Kilobytes.
     */
    preferredBatchSizeInKilobytes?: number;
}
/**
 * webHookEventSubscriptionDestinationResponseProvideDefaults sets the appropriate defaults for WebHookEventSubscriptionDestinationResponse
 */
export function webHookEventSubscriptionDestinationResponseProvideDefaults(val: WebHookEventSubscriptionDestinationResponse): WebHookEventSubscriptionDestinationResponse {
    return {
        ...val,
        maxEventsPerBatch: (val.maxEventsPerBatch) ?? 1,
        preferredBatchSizeInKilobytes: (val.preferredBatchSizeInKilobytes) ?? 64,
    };
}





