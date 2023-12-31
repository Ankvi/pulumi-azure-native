import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Information about the azure function destination for an event subscription.
     */
    export interface AzureFunctionEventSubscriptionDestinationArgs {
        /**
         * Delivery attribute details.
         */
        deliveryAttributeMappings?: pulumi.Input<pulumi.Input<DynamicDeliveryAttributeMappingArgs | StaticDeliveryAttributeMappingArgs>[]>;
        /**
         * Type of the endpoint for the event subscription destination.
         * Expected value is 'AzureFunction'.
         */
        endpointType: pulumi.Input<"AzureFunction">;
        /**
         * Maximum number of events per batch.
         */
        maxEventsPerBatch?: pulumi.Input<number>;
        /**
         * Preferred batch size in Kilobytes.
         */
        preferredBatchSizeInKilobytes?: pulumi.Input<number>;
        /**
         * The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription.
         */
        resourceId?: pulumi.Input<string>;
    }
    /**
     * azureFunctionEventSubscriptionDestinationArgsProvideDefaults sets the appropriate defaults for AzureFunctionEventSubscriptionDestinationArgs
     */
    export function azureFunctionEventSubscriptionDestinationArgsProvideDefaults(val: AzureFunctionEventSubscriptionDestinationArgs): AzureFunctionEventSubscriptionDestinationArgs {
        return {
            ...val,
            maxEventsPerBatch: (val.maxEventsPerBatch) ?? 1,
            preferredBatchSizeInKilobytes: (val.preferredBatchSizeInKilobytes) ?? 64,
        };
    }

    /**
     * BoolEquals Advanced Filter.
     */
    export interface BoolEqualsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'BoolEquals'.
         */
        operatorType: pulumi.Input<"BoolEquals">;
        /**
         * The boolean filter value.
         */
        value?: pulumi.Input<boolean>;
    }

    /**
     * ConnectionState information.
     */
    export interface ConnectionStateArgs {
        /**
         * Actions required (if any).
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * Description of the connection state.
         */
        description?: pulumi.Input<string>;
        /**
         * Status of the connection.
         */
        status?: pulumi.Input<string | enums.PersistedConnectionStatus>;
    }

    /**
     * Information about the deadletter destination with resource identity.
     */
    export interface DeadLetterWithResourceIdentityArgs {
        /**
         * Information about the destination where events have to be delivered for the event subscription.
         * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
         */
        deadLetterDestination?: pulumi.Input<StorageBlobDeadLetterDestinationArgs>;
        /**
         * The identity to use when dead-lettering events.
         */
        identity?: pulumi.Input<EventSubscriptionIdentityArgs>;
    }

    /**
     * Information about the delivery for an event subscription with resource identity.
     */
    export interface DeliveryWithResourceIdentityArgs {
        /**
         * Information about the destination where events have to be delivered for the event subscription.
         * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
         */
        destination?: pulumi.Input<AzureFunctionEventSubscriptionDestinationArgs | EventHubEventSubscriptionDestinationArgs | HybridConnectionEventSubscriptionDestinationArgs | ServiceBusQueueEventSubscriptionDestinationArgs | ServiceBusTopicEventSubscriptionDestinationArgs | StorageQueueEventSubscriptionDestinationArgs | WebHookEventSubscriptionDestinationArgs>;
        /**
         * The identity to use when delivering events.
         */
        identity?: pulumi.Input<EventSubscriptionIdentityArgs>;
    }

    /**
     * Dynamic delivery attribute mapping details.
     */
    export interface DynamicDeliveryAttributeMappingArgs {
        /**
         * Name of the delivery attribute or header.
         */
        name?: pulumi.Input<string>;
        /**
         * JSON path in the event which contains attribute value.
         */
        sourceField?: pulumi.Input<string>;
        /**
         * Type of the delivery attribute or header name.
         * Expected value is 'Dynamic'.
         */
        type: pulumi.Input<"Dynamic">;
    }

    /**
     * Information about the event hub destination for an event subscription.
     */
    export interface EventHubEventSubscriptionDestinationArgs {
        /**
         * Delivery attribute details.
         */
        deliveryAttributeMappings?: pulumi.Input<pulumi.Input<DynamicDeliveryAttributeMappingArgs | StaticDeliveryAttributeMappingArgs>[]>;
        /**
         * Type of the endpoint for the event subscription destination.
         * Expected value is 'EventHub'.
         */
        endpointType: pulumi.Input<"EventHub">;
        /**
         * The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Filter for the Event Subscription.
     */
    export interface EventSubscriptionFilterArgs {
        /**
         * An array of advanced filters that are used for filtering event subscriptions.
         */
        advancedFilters?: pulumi.Input<pulumi.Input<BoolEqualsAdvancedFilterArgs | IsNotNullAdvancedFilterArgs | IsNullOrUndefinedAdvancedFilterArgs | NumberGreaterThanAdvancedFilterArgs | NumberGreaterThanOrEqualsAdvancedFilterArgs | NumberInAdvancedFilterArgs | NumberInRangeAdvancedFilterArgs | NumberLessThanAdvancedFilterArgs | NumberLessThanOrEqualsAdvancedFilterArgs | NumberNotInAdvancedFilterArgs | NumberNotInRangeAdvancedFilterArgs | StringBeginsWithAdvancedFilterArgs | StringContainsAdvancedFilterArgs | StringEndsWithAdvancedFilterArgs | StringInAdvancedFilterArgs | StringNotBeginsWithAdvancedFilterArgs | StringNotContainsAdvancedFilterArgs | StringNotEndsWithAdvancedFilterArgs | StringNotInAdvancedFilterArgs>[]>;
        /**
         * Allows advanced filters to be evaluated against an array of values instead of expecting a singular value.
         */
        enableAdvancedFilteringOnArrays?: pulumi.Input<boolean>;
        /**
         * A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.
         */
        includedEventTypes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter
         * should be compared in a case sensitive manner.
         */
        isSubjectCaseSensitive?: pulumi.Input<boolean>;
        /**
         * An optional string to filter events for an event subscription based on a resource path prefix.
         * The format of this depends on the publisher of the events.
         * Wildcard characters are not supported in this path.
         */
        subjectBeginsWith?: pulumi.Input<string>;
        /**
         * An optional string to filter events for an event subscription based on a resource path suffix.
         * Wildcard characters are not supported in this path.
         */
        subjectEndsWith?: pulumi.Input<string>;
    }
    /**
     * eventSubscriptionFilterArgsProvideDefaults sets the appropriate defaults for EventSubscriptionFilterArgs
     */
    export function eventSubscriptionFilterArgsProvideDefaults(val: EventSubscriptionFilterArgs): EventSubscriptionFilterArgs {
        return {
            ...val,
            isSubjectCaseSensitive: (val.isSubjectCaseSensitive) ?? false,
        };
    }

    /**
     * The identity information with the event subscription.
     */
    export interface EventSubscriptionIdentityArgs {
        /**
         * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
         */
        type?: pulumi.Input<string | enums.EventSubscriptionIdentityType>;
        /**
         * The user identity associated with the resource.
         */
        userAssignedIdentity?: pulumi.Input<string>;
    }

    /**
     * The event type information for Channels.
     */
    export interface EventTypeInfoArgs {
        /**
         * A collection of inline event types for the resource. The inline event type keys are of type string which represents the name of the event.
         * An example of a valid inline event name is "Contoso.OrderCreated".
         * The inline event type values are of type InlineEventProperties and will contain additional information for every inline event type.
         */
        inlineEventTypes?: pulumi.Input<{[key: string]: pulumi.Input<InlineEventPropertiesArgs>}>;
        /**
         * The kind of event type used.
         */
        kind?: pulumi.Input<string | enums.EventDefinitionKind>;
    }

    /**
     * Information about the HybridConnection destination for an event subscription.
     */
    export interface HybridConnectionEventSubscriptionDestinationArgs {
        /**
         * Delivery attribute details.
         */
        deliveryAttributeMappings?: pulumi.Input<pulumi.Input<DynamicDeliveryAttributeMappingArgs | StaticDeliveryAttributeMappingArgs>[]>;
        /**
         * Type of the endpoint for the event subscription destination.
         * Expected value is 'HybridConnection'.
         */
        endpointType: pulumi.Input<"HybridConnection">;
        /**
         * The Azure Resource ID of an hybrid connection that is the destination of an event subscription.
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * The identity information for the resource.
     */
    export interface IdentityInfoArgs {
        /**
         * The principal ID of resource identity.
         */
        principalId?: pulumi.Input<string>;
        /**
         * The tenant ID of resource.
         */
        tenantId?: pulumi.Input<string>;
        /**
         * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
         */
        type?: pulumi.Input<string | enums.IdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         * This property is currently not used and reserved for future usage.
         */
        userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserIdentityPropertiesArgs>}>;
    }

    export interface InboundIpRuleArgs {
        /**
         * Action to perform based on the match or no match of the IpMask.
         */
        action?: pulumi.Input<string | enums.IpActionType>;
        /**
         * IP Address in CIDR notation e.g., 10.0.0.0/8.
         */
        ipMask?: pulumi.Input<string>;
    }

    /**
     * Additional information about every inline event.
     */
    export interface InlineEventPropertiesArgs {
        /**
         * The dataSchemaUrl for the inline event.
         */
        dataSchemaUrl?: pulumi.Input<string>;
        /**
         * The description for the inline event.
         */
        description?: pulumi.Input<string>;
        /**
         * The displayName for the inline event.
         */
        displayName?: pulumi.Input<string>;
        /**
         * The documentationUrl for the inline event.
         */
        documentationUrl?: pulumi.Input<string>;
    }

    /**
     * IsNotNull Advanced Filter.
     */
    export interface IsNotNullAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'IsNotNull'.
         */
        operatorType: pulumi.Input<"IsNotNull">;
    }

    /**
     * IsNullOrUndefined Advanced Filter.
     */
    export interface IsNullOrUndefinedAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'IsNullOrUndefined'.
         */
        operatorType: pulumi.Input<"IsNullOrUndefined">;
    }

    /**
     * This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema.
     */
    export interface JsonFieldArgs {
        /**
         * Name of a field in the input event schema that's to be used as the source of a mapping.
         */
        sourceField?: pulumi.Input<string>;
    }

    /**
     * This is used to express the source of an input schema mapping for a single target field
     * in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
     * 'eventtype' and 'dataversion' properties. This represents a field in the input event schema
     * along with a default value to be used, and at least one of these two properties should be provided.
     */
    export interface JsonFieldWithDefaultArgs {
        /**
         * The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
         */
        defaultValue?: pulumi.Input<string>;
        /**
         * Name of a field in the input event schema that's to be used as the source of a mapping.
         */
        sourceField?: pulumi.Input<string>;
    }

    /**
     * This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema.
     */
    export interface JsonInputSchemaMappingArgs {
        /**
         * The mapping information for the DataVersion property of the Event Grid Event.
         */
        dataVersion?: pulumi.Input<JsonFieldWithDefaultArgs>;
        /**
         * The mapping information for the EventTime property of the Event Grid Event.
         */
        eventTime?: pulumi.Input<JsonFieldArgs>;
        /**
         * The mapping information for the EventType property of the Event Grid Event.
         */
        eventType?: pulumi.Input<JsonFieldWithDefaultArgs>;
        /**
         * The mapping information for the Id property of the Event Grid Event.
         */
        id?: pulumi.Input<JsonFieldArgs>;
        /**
         * Type of the custom mapping
         * Expected value is 'Json'.
         */
        inputSchemaMappingType: pulumi.Input<"Json">;
        /**
         * The mapping information for the Subject property of the Event Grid Event.
         */
        subject?: pulumi.Input<JsonFieldWithDefaultArgs>;
        /**
         * The mapping information for the Topic property of the Event Grid Event.
         */
        topic?: pulumi.Input<JsonFieldArgs>;
    }

    /**
     * NumberGreaterThan Advanced Filter.
     */
    export interface NumberGreaterThanAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberGreaterThan'.
         */
        operatorType: pulumi.Input<"NumberGreaterThan">;
        /**
         * The filter value.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * NumberGreaterThanOrEquals Advanced Filter.
     */
    export interface NumberGreaterThanOrEqualsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberGreaterThanOrEquals'.
         */
        operatorType: pulumi.Input<"NumberGreaterThanOrEquals">;
        /**
         * The filter value.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * NumberIn Advanced Filter.
     */
    export interface NumberInAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberIn'.
         */
        operatorType: pulumi.Input<"NumberIn">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<number>[]>;
    }

    /**
     * NumberInRange Advanced Filter.
     */
    export interface NumberInRangeAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberInRange'.
         */
        operatorType: pulumi.Input<"NumberInRange">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<pulumi.Input<number>[]>[]>;
    }

    /**
     * NumberLessThan Advanced Filter.
     */
    export interface NumberLessThanAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberLessThan'.
         */
        operatorType: pulumi.Input<"NumberLessThan">;
        /**
         * The filter value.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * NumberLessThanOrEquals Advanced Filter.
     */
    export interface NumberLessThanOrEqualsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberLessThanOrEquals'.
         */
        operatorType: pulumi.Input<"NumberLessThanOrEquals">;
        /**
         * The filter value.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * NumberNotIn Advanced Filter.
     */
    export interface NumberNotInAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberNotIn'.
         */
        operatorType: pulumi.Input<"NumberNotIn">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<number>[]>;
    }

    /**
     * NumberNotInRange Advanced Filter.
     */
    export interface NumberNotInRangeAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberNotInRange'.
         */
        operatorType: pulumi.Input<"NumberNotInRange">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<pulumi.Input<number>[]>[]>;
    }

    /**
     * Information about the partner.
     */
    export interface PartnerArgs {
        /**
         * Expiration time of the partner authorization. If this timer expires, any request from this partner to create, update or delete resources in subscriber's
         * context will fail. If specified, the allowed values are between 1 to the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration.
         * If not specified, the default value will be the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration or 7 if this value is not specified.
         */
        authorizationExpirationTimeInUtc?: pulumi.Input<string>;
        /**
         * The partner name.
         */
        partnerName?: pulumi.Input<string>;
        /**
         * The immutableId of the corresponding partner registration.
         */
        partnerRegistrationImmutableId?: pulumi.Input<string>;
    }

    /**
     * The partner authorization details.
     */
    export interface PartnerAuthorizationArgs {
        /**
         * The list of authorized partners.
         */
        authorizedPartnersList?: pulumi.Input<pulumi.Input<PartnerArgs>[]>;
        /**
         * Time used to validate the authorization expiration time for each authorized partner. If DefaultMaximumExpirationTimeInDays is
         * not specified, the default is 7 days. Otherwise, allowed values are between 1 and 365 days.
         */
        defaultMaximumExpirationTimeInDays?: pulumi.Input<number>;
    }

    /**
     * Properties of the corresponding partner topic of a Channel.
     */
    export interface PartnerTopicInfoArgs {
        /**
         * Azure subscription ID of the subscriber. The partner topic associated with the channel will be
         * created under this Azure subscription.
         */
        azureSubscriptionId?: pulumi.Input<string>;
        /**
         * Event Type Information for the partner topic. This information is provided by the publisher and can be used by the 
         * subscriber to view different types of events that are published.
         */
        eventTypeInfo?: pulumi.Input<EventTypeInfoArgs>;
        /**
         * Name of the partner topic associated with the channel.
         */
        name?: pulumi.Input<string>;
        /**
         * Azure Resource Group of the subscriber. The partner topic associated with the channel will be
         * created under this resource group.
         */
        resourceGroupName?: pulumi.Input<string>;
        /**
         * The source information is provided by the publisher to determine the scope or context from which the events
         * are originating. This information can be used by the subscriber during the approval process of the
         * created partner topic.
         */
        source?: pulumi.Input<string>;
    }

    /**
     * PrivateEndpoint information.
     */
    export interface PrivateEndpointArgs {
        /**
         * The ARM identifier for Private Endpoint.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Information about the retry policy for an event subscription.
     */
    export interface RetryPolicyArgs {
        /**
         * Time To Live (in minutes) for events.
         */
        eventTimeToLiveInMinutes?: pulumi.Input<number>;
        /**
         * Maximum number of delivery retry attempts for events.
         */
        maxDeliveryAttempts?: pulumi.Input<number>;
    }
    /**
     * retryPolicyArgsProvideDefaults sets the appropriate defaults for RetryPolicyArgs
     */
    export function retryPolicyArgsProvideDefaults(val: RetryPolicyArgs): RetryPolicyArgs {
        return {
            ...val,
            eventTimeToLiveInMinutes: (val.eventTimeToLiveInMinutes) ?? 1440,
            maxDeliveryAttempts: (val.maxDeliveryAttempts) ?? 30,
        };
    }

    /**
     * Information about the service bus destination for an event subscription.
     */
    export interface ServiceBusQueueEventSubscriptionDestinationArgs {
        /**
         * Delivery attribute details.
         */
        deliveryAttributeMappings?: pulumi.Input<pulumi.Input<DynamicDeliveryAttributeMappingArgs | StaticDeliveryAttributeMappingArgs>[]>;
        /**
         * Type of the endpoint for the event subscription destination.
         * Expected value is 'ServiceBusQueue'.
         */
        endpointType: pulumi.Input<"ServiceBusQueue">;
        /**
         * The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription.
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Information about the service bus topic destination for an event subscription.
     */
    export interface ServiceBusTopicEventSubscriptionDestinationArgs {
        /**
         * Delivery attribute details.
         */
        deliveryAttributeMappings?: pulumi.Input<pulumi.Input<DynamicDeliveryAttributeMappingArgs | StaticDeliveryAttributeMappingArgs>[]>;
        /**
         * Type of the endpoint for the event subscription destination.
         * Expected value is 'ServiceBusTopic'.
         */
        endpointType: pulumi.Input<"ServiceBusTopic">;
        /**
         * The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription.
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Static delivery attribute mapping details.
     */
    export interface StaticDeliveryAttributeMappingArgs {
        /**
         * Boolean flag to tell if the attribute contains sensitive information .
         */
        isSecret?: pulumi.Input<boolean>;
        /**
         * Name of the delivery attribute or header.
         */
        name?: pulumi.Input<string>;
        /**
         * Type of the delivery attribute or header name.
         * Expected value is 'Static'.
         */
        type: pulumi.Input<"Static">;
        /**
         * Value of the delivery attribute.
         */
        value?: pulumi.Input<string>;
    }
    /**
     * staticDeliveryAttributeMappingArgsProvideDefaults sets the appropriate defaults for StaticDeliveryAttributeMappingArgs
     */
    export function staticDeliveryAttributeMappingArgsProvideDefaults(val: StaticDeliveryAttributeMappingArgs): StaticDeliveryAttributeMappingArgs {
        return {
            ...val,
            isSecret: (val.isSecret) ?? false,
        };
    }

    /**
     * Information about the storage blob based dead letter destination.
     */
    export interface StorageBlobDeadLetterDestinationArgs {
        /**
         * The name of the Storage blob container that is the destination of the deadletter events
         */
        blobContainerName?: pulumi.Input<string>;
        /**
         * Type of the endpoint for the dead letter destination
         * Expected value is 'StorageBlob'.
         */
        endpointType: pulumi.Input<"StorageBlob">;
        /**
         * The Azure Resource ID of the storage account that is the destination of the deadletter events
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Information about the storage queue destination for an event subscription.
     */
    export interface StorageQueueEventSubscriptionDestinationArgs {
        /**
         * Type of the endpoint for the event subscription destination.
         * Expected value is 'StorageQueue'.
         */
        endpointType: pulumi.Input<"StorageQueue">;
        /**
         * Storage queue message time to live in seconds.
         */
        queueMessageTimeToLiveInSeconds?: pulumi.Input<number>;
        /**
         * The name of the Storage queue under a storage account that is the destination of an event subscription.
         */
        queueName?: pulumi.Input<string>;
        /**
         * The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * StringBeginsWith Advanced Filter.
     */
    export interface StringBeginsWithAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringBeginsWith'.
         */
        operatorType: pulumi.Input<"StringBeginsWith">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringContains Advanced Filter.
     */
    export interface StringContainsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringContains'.
         */
        operatorType: pulumi.Input<"StringContains">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringEndsWith Advanced Filter.
     */
    export interface StringEndsWithAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringEndsWith'.
         */
        operatorType: pulumi.Input<"StringEndsWith">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringIn Advanced Filter.
     */
    export interface StringInAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringIn'.
         */
        operatorType: pulumi.Input<"StringIn">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringNotBeginsWith Advanced Filter.
     */
    export interface StringNotBeginsWithAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotBeginsWith'.
         */
        operatorType: pulumi.Input<"StringNotBeginsWith">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringNotContains Advanced Filter.
     */
    export interface StringNotContainsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotContains'.
         */
        operatorType: pulumi.Input<"StringNotContains">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringNotEndsWith Advanced Filter.
     */
    export interface StringNotEndsWithAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotEndsWith'.
         */
        operatorType: pulumi.Input<"StringNotEndsWith">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringNotIn Advanced Filter.
     */
    export interface StringNotInAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotIn'.
         */
        operatorType: pulumi.Input<"StringNotIn">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The information about the user identity.
     */
    export interface UserIdentityPropertiesArgs {
        /**
         * The client id of user assigned identity.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The principal id of user assigned identity.
         */
        principalId?: pulumi.Input<string>;
    }

    /**
     * Information about the webhook destination for an event subscription.
     */
    export interface WebHookEventSubscriptionDestinationArgs {
        /**
         * The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
         */
        azureActiveDirectoryApplicationIdOrUri?: pulumi.Input<string>;
        /**
         * The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
         */
        azureActiveDirectoryTenantId?: pulumi.Input<string>;
        /**
         * Delivery attribute details.
         */
        deliveryAttributeMappings?: pulumi.Input<pulumi.Input<DynamicDeliveryAttributeMappingArgs | StaticDeliveryAttributeMappingArgs>[]>;
        /**
         * Type of the endpoint for the event subscription destination.
         * Expected value is 'WebHook'.
         */
        endpointType: pulumi.Input<"WebHook">;
        /**
         * The URL that represents the endpoint of the destination of an event subscription.
         */
        endpointUrl?: pulumi.Input<string>;
        /**
         * Maximum number of events per batch.
         */
        maxEventsPerBatch?: pulumi.Input<number>;
        /**
         * Preferred batch size in Kilobytes.
         */
        preferredBatchSizeInKilobytes?: pulumi.Input<number>;
    }
    /**
     * webHookEventSubscriptionDestinationArgsProvideDefaults sets the appropriate defaults for WebHookEventSubscriptionDestinationArgs
     */
    export function webHookEventSubscriptionDestinationArgsProvideDefaults(val: WebHookEventSubscriptionDestinationArgs): WebHookEventSubscriptionDestinationArgs {
        return {
            ...val,
            maxEventsPerBatch: (val.maxEventsPerBatch) ?? 1,
            preferredBatchSizeInKilobytes: (val.preferredBatchSizeInKilobytes) ?? 64,
        };
    }
