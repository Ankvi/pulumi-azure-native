import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace eventgrid {
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
     * BoolEquals Filter.
     */
    export interface BoolEqualsFilterArgs {
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
     * The Authentication properties for the client.
     */
    export interface ClientAuthenticationArgs {
        /**
         * The CA certificate subject name used for authentication.
         */
        certificateSubject?: pulumi.Input<ClientCertificateSubjectDistinguishedNameArgs>;
        /**
         * The self signed certificate's thumbprints data used for authentication.
         */
        certificateThumbprint?: pulumi.Input<ClientCertificateThumbprintArgs>;
    }

    /**
     * Client authentication settings for namespace resource.
     */
    export interface ClientAuthenticationSettingsArgs {
        /**
         * Alternative authentication name sources related to client authentication settings for namespace resource.
         */
        alternativeAuthenticationNameSources?: pulumi.Input<pulumi.Input<string | enums.AlternativeAuthenticationNameSource>[]>;
    }

    /**
     * The certificate authentication properties for the client.
     */
    export interface ClientCertificateAuthenticationArgs {
        /**
         * The list of thumbprints that are allowed during client authentication. This property is required only if the validationScheme is 'ThumbprintMatch'.
         */
        allowedThumbprints?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The validation scheme used to authenticate the client. Default value is SubjectMatchesAuthenticationName.
         */
        validationScheme?: pulumi.Input<string | enums.ClientCertificateValidationScheme>;
    }

    /**
     * CA certificate subject distinguished name information used by service to authenticate clients.
     * For more information, see https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.x509certificates.x500distinguishedname?view=net-6.0#remarks
     */
    export interface ClientCertificateSubjectDistinguishedNameArgs {
        /**
         * The common name field in the subject name. The allowed limit is 64 characters and it should be specified.
         */
        commonName?: pulumi.Input<string>;
        /**
         * The country code field in the subject name. If present, the country code should be represented by two-letter code defined in ISO 2166-1 (alpha-2). For example: 'US'.
         */
        countryCode?: pulumi.Input<string>;
        /**
         * The organization field in the subject name. If present, the allowed limit is 64 characters.
         */
        organization?: pulumi.Input<string>;
        /**
         * The organization unit field in the subject name. If present, the allowed limit is 32 characters.
         */
        organizationUnit?: pulumi.Input<string>;
    }

    /**
     * Thumbprints are used by the service to validate the device permission when authentication is done using self signed certificate.
     */
    export interface ClientCertificateThumbprintArgs {
        /**
         * The primary thumbprint used for validation.
         */
        primary?: pulumi.Input<string>;
        /**
         * The secondary thumbprint used for validation.
         */
        secondary?: pulumi.Input<string>;
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
     * Properties of the delivery configuration information of the event subscription.
     */
    export interface DeliveryConfigurationArgs {
        /**
         * Delivery mode of the event subscription.
         */
        deliveryMode?: pulumi.Input<string | enums.DeliveryMode>;
        /**
         * This property should be populated when deliveryMode is queue and represents information about the queue subscription.
         */
        queue?: pulumi.Input<QueueInfoArgs>;
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

    export interface DynamicRoutingEnrichmentArgs {
        /**
         * Dynamic routing enrichment key.
         */
        key?: pulumi.Input<string>;
        /**
         * Dynamic routing enrichment value.
         */
        value?: pulumi.Input<string>;
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
     * Filters configuration for the Event Subscription.
     */
    export interface FiltersConfigurationArgs {
        /**
         * An array of filters that are used for filtering event subscriptions.
         */
        filters?: pulumi.Input<pulumi.Input<BoolEqualsFilterArgs | IsNotNullFilterArgs | IsNullOrUndefinedFilterArgs | NumberGreaterThanFilterArgs | NumberGreaterThanOrEqualsFilterArgs | NumberInFilterArgs | NumberInRangeFilterArgs | NumberLessThanFilterArgs | NumberLessThanOrEqualsFilterArgs | NumberNotInFilterArgs | NumberNotInRangeFilterArgs | StringBeginsWithFilterArgs | StringContainsFilterArgs | StringEndsWithFilterArgs | StringInFilterArgs | StringNotBeginsWithFilterArgs | StringNotContainsFilterArgs | StringNotEndsWithFilterArgs | StringNotInFilterArgs>[]>;
        /**
         * A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.
         */
        includedEventTypes?: pulumi.Input<pulumi.Input<string>[]>;
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
     * IsNotNull Filter.
     */
    export interface IsNotNullFilterArgs {
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
     * IsNullOrUndefined Filter.
     */
    export interface IsNullOrUndefinedFilterArgs {
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
     * Represents available Sku pricing tiers.
     */
    export interface NamespaceSkuArgs {
        /**
         * Specifies the number of Throughput Units that defines the capacity for the namespace. The property default value is
         * 1 which signifies 1 Throughput Unit = 1MB/s ingress and 2MB/s egress per namespace. Min capacity is 1 and
         * max allowed capacity is 20.
         */
        capacity?: pulumi.Input<number>;
        /**
         * The name of the SKU.
         */
        name?: pulumi.Input<string | enums.SkuName>;
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
     * NumberGreaterThan Filter.
     */
    export interface NumberGreaterThanFilterArgs {
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
     * NumberGreaterThanOrEquals Filter.
     */
    export interface NumberGreaterThanOrEqualsFilterArgs {
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
     * NumberIn Filter.
     */
    export interface NumberInFilterArgs {
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
     * NumberInRange Filter.
     */
    export interface NumberInRangeFilterArgs {
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
     * NumberLessThan Filter.
     */
    export interface NumberLessThanFilterArgs {
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
     * NumberLessThanOrEquals Filter.
     */
    export interface NumberLessThanOrEqualsFilterArgs {
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
     * NumberNotIn Filter.
     */
    export interface NumberNotInFilterArgs {
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
     * NumberNotInRange Filter.
     */
    export interface NumberNotInRangeFilterArgs {
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

    export interface PrivateEndpointConnectionArgs {
        /**
         * GroupIds from the private link service resource.
         */
        groupIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The Private Endpoint resource for this Connection.
         */
        privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
        /**
         * Details about the state of the connection.
         */
        privateLinkServiceConnectionState?: pulumi.Input<ConnectionStateArgs>;
        /**
         * Provisioning state of the Private Endpoint Connection.
         */
        provisioningState?: pulumi.Input<string | enums.ResourceProvisioningState>;
    }

    /**
     * Properties of the Queue info for event subscription.
     */
    export interface QueueInfoArgs {
        /**
         * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
         * Uses the managed identity setup on the parent resource (namely, topic) to acquire the authentication tokens being used during delivery / dead-lettering.
         */
        deadLetterDestinationWithResourceIdentity?: pulumi.Input<DeadLetterWithResourceIdentityArgs>;
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
        eventTimeToLive?: pulumi.Input<string>;
        /**
         * The maximum delivery count of the events.
         */
        maxDeliveryCount?: pulumi.Input<number>;
        /**
         * Maximum period in seconds in which once the message is in received (by the client) state and waiting to be accepted, released or rejected.
         * If this time elapsed after a message has been received by the client and not transitioned into accepted (not processed), released or rejected,
         * the message is available for redelivery. This is an optional field, where default is 60 seconds, minimum is 60 seconds and maximum is 300 seconds.
         */
        receiveLockDurationInSeconds?: pulumi.Input<number>;
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

    export interface RoutingEnrichmentsArgs {
        dynamic?: pulumi.Input<pulumi.Input<DynamicRoutingEnrichmentArgs>[]>;
        static?: pulumi.Input<pulumi.Input<StaticRoutingEnrichmentArgs>[]>;
    }

    /**
     * Routing identity info for topic spaces configuration.
     */
    export interface RoutingIdentityInfoArgs {
        type?: pulumi.Input<string | enums.RoutingIdentityType>;
        userAssignedIdentity?: pulumi.Input<string>;
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

    export interface StaticRoutingEnrichmentArgs {
        /**
         * Static routing enrichment key.
         */
        key?: pulumi.Input<string>;
        /**
         * Static routing enrichment value type. For e.g. this property value can be 'String'.
         */
        valueType?: pulumi.Input<string | enums.StaticRoutingEnrichmentType>;
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
     * StringBeginsWith Filter.
     */
    export interface StringBeginsWithFilterArgs {
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
     * StringContains Filter.
     */
    export interface StringContainsFilterArgs {
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
     * StringEndsWith Filter.
     */
    export interface StringEndsWithFilterArgs {
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
     * StringIn Filter.
     */
    export interface StringInFilterArgs {
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
     * StringNotBeginsWith Filter.
     */
    export interface StringNotBeginsWithFilterArgs {
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
     * StringNotContains Filter.
     */
    export interface StringNotContainsFilterArgs {
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
     * StringNotEndsWith Filter.
     */
    export interface StringNotEndsWithFilterArgs {
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
     * StringNotIn Filter.
     */
    export interface StringNotInFilterArgs {
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
     * Properties of the Topic Spaces Configuration.
     */
    export interface TopicSpacesConfigurationArgs {
        /**
         * Client authentication settings for topic spaces configuration.
         */
        clientAuthentication?: pulumi.Input<ClientAuthenticationSettingsArgs>;
        /**
         * The maximum number of sessions per authentication name. The property default value is 1.
         * Min allowed value is 1 and max allowed value is 100.
         */
        maximumClientSessionsPerAuthenticationName?: pulumi.Input<number>;
        /**
         * The maximum session expiry in hours. The property default value is 1 hour.
         * Min allowed value is 1 hour and max allowed value is 8 hours.
         */
        maximumSessionExpiryInHours?: pulumi.Input<number>;
        /**
         * Fully qualified Azure Resource Id for the Event Grid Topic to which events will be routed to from TopicSpaces under a namespace.
         * This property should be in the following format '/subscriptions/{subId}/resourcegroups/{resourceGroupName}/providers/microsoft.EventGrid/topics/{topicName}'.
         * This topic should reside in the same region where namespace is located.
         */
        routeTopicResourceId?: pulumi.Input<string>;
        /**
         * Routing enrichments for topic spaces configuration
         */
        routingEnrichments?: pulumi.Input<RoutingEnrichmentsArgs>;
        /**
         * Routing identity info for topic spaces configuration.
         */
        routingIdentityInfo?: pulumi.Input<RoutingIdentityInfoArgs>;
        /**
         * Indicate if Topic Spaces Configuration is enabled for the namespace. Default is Disabled.
         */
        state?: pulumi.Input<string | enums.TopicSpacesConfigurationState>;
    }
    /**
     * topicSpacesConfigurationArgsProvideDefaults sets the appropriate defaults for TopicSpacesConfigurationArgs
     */
    export function topicSpacesConfigurationArgsProvideDefaults(val: TopicSpacesConfigurationArgs): TopicSpacesConfigurationArgs {
        return {
            ...val,
            state: (val.state) ?? "Disabled",
        };
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

    export namespace v20200401preview {
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
            status?: pulumi.Input<string | enums.v20200401preview.PersistedConnectionStatus>;
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
            type?: pulumi.Input<string | enums.v20200401preview.IdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             * This property is currently not used and reserved for future usage.
             */
            userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<v20200401preview.UserIdentityPropertiesArgs>}>;
        }

        export interface InboundIpRuleArgs {
            /**
             * Action to perform based on the match or no match of the IpMask.
             */
            action?: pulumi.Input<string | enums.v20200401preview.IpActionType>;
            /**
             * IP Address in CIDR notation e.g., 10.0.0.0/8.
             */
            ipMask?: pulumi.Input<string>;
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
            dataVersion?: pulumi.Input<v20200401preview.JsonFieldWithDefaultArgs>;
            /**
             * The mapping information for the EventTime property of the Event Grid Event.
             */
            eventTime?: pulumi.Input<v20200401preview.JsonFieldArgs>;
            /**
             * The mapping information for the EventType property of the Event Grid Event.
             */
            eventType?: pulumi.Input<v20200401preview.JsonFieldWithDefaultArgs>;
            /**
             * The mapping information for the Id property of the Event Grid Event.
             */
            id?: pulumi.Input<v20200401preview.JsonFieldArgs>;
            /**
             * Type of the custom mapping
             * Expected value is 'Json'.
             */
            inputSchemaMappingType: pulumi.Input<"Json">;
            /**
             * The mapping information for the Subject property of the Event Grid Event.
             */
            subject?: pulumi.Input<v20200401preview.JsonFieldWithDefaultArgs>;
            /**
             * The mapping information for the Topic property of the Event Grid Event.
             */
            topic?: pulumi.Input<v20200401preview.JsonFieldArgs>;
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

        export interface PrivateEndpointConnectionArgs {
            /**
             * GroupIds from the private link service resource.
             */
            groupIds?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The Private Endpoint resource for this Connection.
             */
            privateEndpoint?: pulumi.Input<v20200401preview.PrivateEndpointArgs>;
            /**
             * Details about the state of the connection.
             */
            privateLinkServiceConnectionState?: pulumi.Input<v20200401preview.ConnectionStateArgs>;
            /**
             * Provisioning state of the Private Endpoint Connection.
             */
            provisioningState?: pulumi.Input<string | enums.v20200401preview.ResourceProvisioningState>;
        }

        /**
         * Describes an EventGrid Resource Sku.
         */
        export interface ResourceSkuArgs {
            /**
             * The Sku name of the resource. The possible values are: Basic or Premium.
             */
            name?: pulumi.Input<string | enums.v20200401preview.Sku>;
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

    }

    export namespace v20211015preview {
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
         * Properties of the destination of an event channel.
         */
        export interface EventChannelDestinationArgs {
            /**
             * Azure subscription ID of the customer creating the event channel. The partner topic
             * associated with the event channel will be created under this Azure subscription.
             */
            azureSubscriptionId?: pulumi.Input<string>;
            /**
             * Name of the partner topic associated with the event channel.
             */
            partnerTopicName?: pulumi.Input<string>;
            /**
             * Azure Resource Group of the customer creating the event channel. The partner topic
             * associated with the event channel will be created under this resource group.
             */
            resourceGroup?: pulumi.Input<string>;
        }

        /**
         * Filter for the Event Channel.
         */
        export interface EventChannelFilterArgs {
            /**
             * An array of advanced filters that are used for filtering event channels.
             */
            advancedFilters?: pulumi.Input<pulumi.Input<v20211015preview.BoolEqualsAdvancedFilterArgs | v20211015preview.IsNotNullAdvancedFilterArgs | v20211015preview.IsNullOrUndefinedAdvancedFilterArgs | v20211015preview.NumberGreaterThanAdvancedFilterArgs | v20211015preview.NumberGreaterThanOrEqualsAdvancedFilterArgs | v20211015preview.NumberInAdvancedFilterArgs | v20211015preview.NumberInRangeAdvancedFilterArgs | v20211015preview.NumberLessThanAdvancedFilterArgs | v20211015preview.NumberLessThanOrEqualsAdvancedFilterArgs | v20211015preview.NumberNotInAdvancedFilterArgs | v20211015preview.NumberNotInRangeAdvancedFilterArgs | v20211015preview.StringBeginsWithAdvancedFilterArgs | v20211015preview.StringContainsAdvancedFilterArgs | v20211015preview.StringEndsWithAdvancedFilterArgs | v20211015preview.StringInAdvancedFilterArgs | v20211015preview.StringNotBeginsWithAdvancedFilterArgs | v20211015preview.StringNotContainsAdvancedFilterArgs | v20211015preview.StringNotEndsWithAdvancedFilterArgs | v20211015preview.StringNotInAdvancedFilterArgs>[]>;
            /**
             * Allows advanced filters to be evaluated against an array of values instead of expecting a singular value. The default value is either false or null.
             */
            enableAdvancedFilteringOnArrays?: pulumi.Input<boolean>;
        }
        /**
         * eventChannelFilterArgsProvideDefaults sets the appropriate defaults for EventChannelFilterArgs
         */
        export function eventChannelFilterArgsProvideDefaults(val: EventChannelFilterArgs): EventChannelFilterArgs {
            return {
                ...val,
                enableAdvancedFilteringOnArrays: (val.enableAdvancedFilteringOnArrays) ?? false,
            };
        }

        /**
         * Properties of the source of an event channel.
         */
        export interface EventChannelSourceArgs {
            /**
             * The identifier of the resource that's the source of the events.
             * This represents a unique resource in the partner's resource model.
             */
            source?: pulumi.Input<string>;
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

    }

    export namespace v20220615 {
        /**
         * Information about the azure function destination for an event subscription.
         */
        export interface AzureFunctionEventSubscriptionDestinationArgs {
            /**
             * Delivery attribute details.
             */
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20220615.DynamicDeliveryAttributeMappingArgs | v20220615.StaticDeliveryAttributeMappingArgs>[]>;
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
            status?: pulumi.Input<string | enums.v20220615.PersistedConnectionStatus>;
        }

        /**
         * Information about the deadletter destination with resource identity.
         */
        export interface DeadLetterWithResourceIdentityArgs {
            /**
             * Information about the destination where events have to be delivered for the event subscription.
             * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
             */
            deadLetterDestination?: pulumi.Input<v20220615.StorageBlobDeadLetterDestinationArgs>;
            /**
             * The identity to use when dead-lettering events.
             */
            identity?: pulumi.Input<v20220615.EventSubscriptionIdentityArgs>;
        }

        /**
         * Information about the delivery for an event subscription with resource identity.
         */
        export interface DeliveryWithResourceIdentityArgs {
            /**
             * Information about the destination where events have to be delivered for the event subscription.
             * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
             */
            destination?: pulumi.Input<v20220615.AzureFunctionEventSubscriptionDestinationArgs | v20220615.EventHubEventSubscriptionDestinationArgs | v20220615.HybridConnectionEventSubscriptionDestinationArgs | v20220615.ServiceBusQueueEventSubscriptionDestinationArgs | v20220615.ServiceBusTopicEventSubscriptionDestinationArgs | v20220615.StorageQueueEventSubscriptionDestinationArgs | v20220615.WebHookEventSubscriptionDestinationArgs>;
            /**
             * The identity to use when delivering events.
             */
            identity?: pulumi.Input<v20220615.EventSubscriptionIdentityArgs>;
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
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20220615.DynamicDeliveryAttributeMappingArgs | v20220615.StaticDeliveryAttributeMappingArgs>[]>;
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
            advancedFilters?: pulumi.Input<pulumi.Input<v20220615.BoolEqualsAdvancedFilterArgs | v20220615.IsNotNullAdvancedFilterArgs | v20220615.IsNullOrUndefinedAdvancedFilterArgs | v20220615.NumberGreaterThanAdvancedFilterArgs | v20220615.NumberGreaterThanOrEqualsAdvancedFilterArgs | v20220615.NumberInAdvancedFilterArgs | v20220615.NumberInRangeAdvancedFilterArgs | v20220615.NumberLessThanAdvancedFilterArgs | v20220615.NumberLessThanOrEqualsAdvancedFilterArgs | v20220615.NumberNotInAdvancedFilterArgs | v20220615.NumberNotInRangeAdvancedFilterArgs | v20220615.StringBeginsWithAdvancedFilterArgs | v20220615.StringContainsAdvancedFilterArgs | v20220615.StringEndsWithAdvancedFilterArgs | v20220615.StringInAdvancedFilterArgs | v20220615.StringNotBeginsWithAdvancedFilterArgs | v20220615.StringNotContainsAdvancedFilterArgs | v20220615.StringNotEndsWithAdvancedFilterArgs | v20220615.StringNotInAdvancedFilterArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20220615.EventSubscriptionIdentityType>;
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
            inlineEventTypes?: pulumi.Input<{[key: string]: pulumi.Input<v20220615.InlineEventPropertiesArgs>}>;
            /**
             * The kind of event type used.
             */
            kind?: pulumi.Input<string | enums.v20220615.EventDefinitionKind>;
        }

        /**
         * Information about the HybridConnection destination for an event subscription.
         */
        export interface HybridConnectionEventSubscriptionDestinationArgs {
            /**
             * Delivery attribute details.
             */
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20220615.DynamicDeliveryAttributeMappingArgs | v20220615.StaticDeliveryAttributeMappingArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20220615.IdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             * This property is currently not used and reserved for future usage.
             */
            userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<v20220615.UserIdentityPropertiesArgs>}>;
        }

        export interface InboundIpRuleArgs {
            /**
             * Action to perform based on the match or no match of the IpMask.
             */
            action?: pulumi.Input<string | enums.v20220615.IpActionType>;
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
            dataVersion?: pulumi.Input<v20220615.JsonFieldWithDefaultArgs>;
            /**
             * The mapping information for the EventTime property of the Event Grid Event.
             */
            eventTime?: pulumi.Input<v20220615.JsonFieldArgs>;
            /**
             * The mapping information for the EventType property of the Event Grid Event.
             */
            eventType?: pulumi.Input<v20220615.JsonFieldWithDefaultArgs>;
            /**
             * The mapping information for the Id property of the Event Grid Event.
             */
            id?: pulumi.Input<v20220615.JsonFieldArgs>;
            /**
             * Type of the custom mapping
             * Expected value is 'Json'.
             */
            inputSchemaMappingType: pulumi.Input<"Json">;
            /**
             * The mapping information for the Subject property of the Event Grid Event.
             */
            subject?: pulumi.Input<v20220615.JsonFieldWithDefaultArgs>;
            /**
             * The mapping information for the Topic property of the Event Grid Event.
             */
            topic?: pulumi.Input<v20220615.JsonFieldArgs>;
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
            authorizedPartnersList?: pulumi.Input<pulumi.Input<v20220615.PartnerArgs>[]>;
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
            eventTypeInfo?: pulumi.Input<v20220615.EventTypeInfoArgs>;
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
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20220615.DynamicDeliveryAttributeMappingArgs | v20220615.StaticDeliveryAttributeMappingArgs>[]>;
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
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20220615.DynamicDeliveryAttributeMappingArgs | v20220615.StaticDeliveryAttributeMappingArgs>[]>;
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
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20220615.DynamicDeliveryAttributeMappingArgs | v20220615.StaticDeliveryAttributeMappingArgs>[]>;
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

    }

    export namespace v20230601preview {
        /**
         * Azure Active Directory Partner Client Authentication
         */
        export interface AzureADPartnerClientAuthenticationArgs {
            /**
             * The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
             */
            azureActiveDirectoryApplicationIdOrUri?: pulumi.Input<string>;
            /**
             * The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
             */
            azureActiveDirectoryTenantId?: pulumi.Input<string>;
            /**
             * Type of client authentication
             * Expected value is 'AzureAD'.
             */
            clientAuthenticationType: pulumi.Input<"AzureAD">;
        }
        /**
         * azureADPartnerClientAuthenticationArgsProvideDefaults sets the appropriate defaults for AzureADPartnerClientAuthenticationArgs
         */
        export function azureADPartnerClientAuthenticationArgsProvideDefaults(val: AzureADPartnerClientAuthenticationArgs): AzureADPartnerClientAuthenticationArgs {
            return {
                ...val,
                clientAuthenticationType: (val.clientAuthenticationType) ?? "AzureAD",
            };
        }

        /**
         * Information about the azure function destination for an event subscription.
         */
        export interface AzureFunctionEventSubscriptionDestinationArgs {
            /**
             * Delivery attribute details.
             */
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20230601preview.DynamicDeliveryAttributeMappingArgs | v20230601preview.StaticDeliveryAttributeMappingArgs>[]>;
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
         * BoolEquals Filter.
         */
        export interface BoolEqualsFilterArgs {
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
         * The Authentication properties for the client.
         */
        export interface ClientAuthenticationArgs {
            /**
             * The CA certificate subject name used for authentication.
             */
            certificateSubject?: pulumi.Input<v20230601preview.ClientCertificateSubjectDistinguishedNameArgs>;
            /**
             * The self signed certificate's thumbprints data used for authentication.
             */
            certificateThumbprint?: pulumi.Input<v20230601preview.ClientCertificateThumbprintArgs>;
        }

        /**
         * Client authentication settings for namespace resource.
         */
        export interface ClientAuthenticationSettingsArgs {
            /**
             * Alternative authentication name sources related to client authentication settings for namespace resource.
             */
            alternativeAuthenticationNameSources?: pulumi.Input<pulumi.Input<string | enums.v20230601preview.AlternativeAuthenticationNameSource>[]>;
        }

        /**
         * The certificate authentication properties for the client.
         */
        export interface ClientCertificateAuthenticationArgs {
            /**
             * The list of thumbprints that are allowed during client authentication. This property is required only if the validationScheme is 'ThumbprintMatch'.
             */
            allowedThumbprints?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The validation scheme used to authenticate the client. Default value is SubjectMatchesAuthenticationName.
             */
            validationScheme?: pulumi.Input<string | enums.v20230601preview.ClientCertificateValidationScheme>;
        }

        /**
         * CA certificate subject distinguished name information used by service to authenticate clients.
         * For more information, see https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.x509certificates.x500distinguishedname?view=net-6.0#remarks
         */
        export interface ClientCertificateSubjectDistinguishedNameArgs {
            /**
             * The common name field in the subject name. The allowed limit is 64 characters and it should be specified.
             */
            commonName?: pulumi.Input<string>;
            /**
             * The country code field in the subject name. If present, the country code should be represented by two-letter code defined in ISO 2166-1 (alpha-2). For example: 'US'.
             */
            countryCode?: pulumi.Input<string>;
            /**
             * The organization field in the subject name. If present, the allowed limit is 64 characters.
             */
            organization?: pulumi.Input<string>;
            /**
             * The organization unit field in the subject name. If present, the allowed limit is 32 characters.
             */
            organizationUnit?: pulumi.Input<string>;
        }

        /**
         * Thumbprints are used by the service to validate the device permission when authentication is done using self signed certificate.
         */
        export interface ClientCertificateThumbprintArgs {
            /**
             * The primary thumbprint used for validation.
             */
            primary?: pulumi.Input<string>;
            /**
             * The secondary thumbprint used for validation.
             */
            secondary?: pulumi.Input<string>;
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
            status?: pulumi.Input<string | enums.v20230601preview.PersistedConnectionStatus>;
        }

        /**
         * Information about the deadletter destination with resource identity.
         */
        export interface DeadLetterWithResourceIdentityArgs {
            /**
             * Information about the destination where events have to be delivered for the event subscription.
             * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
             */
            deadLetterDestination?: pulumi.Input<v20230601preview.StorageBlobDeadLetterDestinationArgs>;
            /**
             * The identity to use when dead-lettering events.
             */
            identity?: pulumi.Input<v20230601preview.EventSubscriptionIdentityArgs>;
        }

        /**
         * Properties of the delivery configuration information of the event subscription.
         */
        export interface DeliveryConfigurationArgs {
            /**
             * Delivery mode of the event subscription.
             */
            deliveryMode?: pulumi.Input<string | enums.v20230601preview.DeliveryMode>;
            /**
             * This property should be populated when deliveryMode is queue and represents information about the queue subscription.
             */
            queue?: pulumi.Input<v20230601preview.QueueInfoArgs>;
        }

        /**
         * Information about the delivery for an event subscription with resource identity.
         */
        export interface DeliveryWithResourceIdentityArgs {
            /**
             * Information about the destination where events have to be delivered for the event subscription.
             * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
             */
            destination?: pulumi.Input<v20230601preview.AzureFunctionEventSubscriptionDestinationArgs | v20230601preview.EventHubEventSubscriptionDestinationArgs | v20230601preview.HybridConnectionEventSubscriptionDestinationArgs | v20230601preview.PartnerEventSubscriptionDestinationArgs | v20230601preview.ServiceBusQueueEventSubscriptionDestinationArgs | v20230601preview.ServiceBusTopicEventSubscriptionDestinationArgs | v20230601preview.StorageQueueEventSubscriptionDestinationArgs | v20230601preview.WebHookEventSubscriptionDestinationArgs>;
            /**
             * The identity to use when delivering events.
             */
            identity?: pulumi.Input<v20230601preview.EventSubscriptionIdentityArgs>;
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

        export interface DynamicRoutingEnrichmentArgs {
            /**
             * Dynamic routing enrichment key.
             */
            key?: pulumi.Input<string>;
            /**
             * Dynamic routing enrichment value.
             */
            value?: pulumi.Input<string>;
        }

        /**
         * Information about the event hub destination for an event subscription.
         */
        export interface EventHubEventSubscriptionDestinationArgs {
            /**
             * Delivery attribute details.
             */
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20230601preview.DynamicDeliveryAttributeMappingArgs | v20230601preview.StaticDeliveryAttributeMappingArgs>[]>;
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
            advancedFilters?: pulumi.Input<pulumi.Input<v20230601preview.BoolEqualsAdvancedFilterArgs | v20230601preview.IsNotNullAdvancedFilterArgs | v20230601preview.IsNullOrUndefinedAdvancedFilterArgs | v20230601preview.NumberGreaterThanAdvancedFilterArgs | v20230601preview.NumberGreaterThanOrEqualsAdvancedFilterArgs | v20230601preview.NumberInAdvancedFilterArgs | v20230601preview.NumberInRangeAdvancedFilterArgs | v20230601preview.NumberLessThanAdvancedFilterArgs | v20230601preview.NumberLessThanOrEqualsAdvancedFilterArgs | v20230601preview.NumberNotInAdvancedFilterArgs | v20230601preview.NumberNotInRangeAdvancedFilterArgs | v20230601preview.StringBeginsWithAdvancedFilterArgs | v20230601preview.StringContainsAdvancedFilterArgs | v20230601preview.StringEndsWithAdvancedFilterArgs | v20230601preview.StringInAdvancedFilterArgs | v20230601preview.StringNotBeginsWithAdvancedFilterArgs | v20230601preview.StringNotContainsAdvancedFilterArgs | v20230601preview.StringNotEndsWithAdvancedFilterArgs | v20230601preview.StringNotInAdvancedFilterArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20230601preview.EventSubscriptionIdentityType>;
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
            inlineEventTypes?: pulumi.Input<{[key: string]: pulumi.Input<v20230601preview.InlineEventPropertiesArgs>}>;
            /**
             * The kind of event type used.
             */
            kind?: pulumi.Input<string | enums.v20230601preview.EventDefinitionKind>;
        }

        /**
         * Definition of an Extended Location
         */
        export interface ExtendedLocationArgs {
            /**
             * Fully qualified name of the extended location.
             */
            name?: pulumi.Input<string>;
            /**
             * Type of the extended location.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Filters configuration for the Event Subscription.
         */
        export interface FiltersConfigurationArgs {
            /**
             * An array of filters that are used for filtering event subscriptions.
             */
            filters?: pulumi.Input<pulumi.Input<v20230601preview.BoolEqualsFilterArgs | v20230601preview.IsNotNullFilterArgs | v20230601preview.IsNullOrUndefinedFilterArgs | v20230601preview.NumberGreaterThanFilterArgs | v20230601preview.NumberGreaterThanOrEqualsFilterArgs | v20230601preview.NumberInFilterArgs | v20230601preview.NumberInRangeFilterArgs | v20230601preview.NumberLessThanFilterArgs | v20230601preview.NumberLessThanOrEqualsFilterArgs | v20230601preview.NumberNotInFilterArgs | v20230601preview.NumberNotInRangeFilterArgs | v20230601preview.StringBeginsWithFilterArgs | v20230601preview.StringContainsFilterArgs | v20230601preview.StringEndsWithFilterArgs | v20230601preview.StringInFilterArgs | v20230601preview.StringNotBeginsWithFilterArgs | v20230601preview.StringNotContainsFilterArgs | v20230601preview.StringNotEndsWithFilterArgs | v20230601preview.StringNotInFilterArgs>[]>;
            /**
             * A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.
             */
            includedEventTypes?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Information about the HybridConnection destination for an event subscription.
         */
        export interface HybridConnectionEventSubscriptionDestinationArgs {
            /**
             * Delivery attribute details.
             */
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20230601preview.DynamicDeliveryAttributeMappingArgs | v20230601preview.StaticDeliveryAttributeMappingArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20230601preview.IdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             * This property is currently not used and reserved for future usage.
             */
            userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<v20230601preview.UserIdentityPropertiesArgs>}>;
        }

        export interface InboundIpRuleArgs {
            /**
             * Action to perform based on the match or no match of the IpMask.
             */
            action?: pulumi.Input<string | enums.v20230601preview.IpActionType>;
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
         * IsNotNull Filter.
         */
        export interface IsNotNullFilterArgs {
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
         * IsNullOrUndefined Filter.
         */
        export interface IsNullOrUndefinedFilterArgs {
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
            dataVersion?: pulumi.Input<v20230601preview.JsonFieldWithDefaultArgs>;
            /**
             * The mapping information for the EventTime property of the Event Grid Event.
             */
            eventTime?: pulumi.Input<v20230601preview.JsonFieldArgs>;
            /**
             * The mapping information for the EventType property of the Event Grid Event.
             */
            eventType?: pulumi.Input<v20230601preview.JsonFieldWithDefaultArgs>;
            /**
             * The mapping information for the Id property of the Event Grid Event.
             */
            id?: pulumi.Input<v20230601preview.JsonFieldArgs>;
            /**
             * Type of the custom mapping
             * Expected value is 'Json'.
             */
            inputSchemaMappingType: pulumi.Input<"Json">;
            /**
             * The mapping information for the Subject property of the Event Grid Event.
             */
            subject?: pulumi.Input<v20230601preview.JsonFieldWithDefaultArgs>;
            /**
             * The mapping information for the Topic property of the Event Grid Event.
             */
            topic?: pulumi.Input<v20230601preview.JsonFieldArgs>;
        }

        /**
         * Represents available Sku pricing tiers.
         */
        export interface NamespaceSkuArgs {
            /**
             * Specifies the number of Throughput Units that defines the capacity for the namespace. The property default value is
             * 1 which signifies 1 Throughput Unit = 1MB/s ingress and 2MB/s egress per namespace. Min capacity is 1 and
             * max allowed capacity is 20.
             */
            capacity?: pulumi.Input<number>;
            /**
             * The name of the SKU.
             */
            name?: pulumi.Input<string | enums.v20230601preview.SkuName>;
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
         * NumberGreaterThan Filter.
         */
        export interface NumberGreaterThanFilterArgs {
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
         * NumberGreaterThanOrEquals Filter.
         */
        export interface NumberGreaterThanOrEqualsFilterArgs {
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
         * NumberIn Filter.
         */
        export interface NumberInFilterArgs {
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
         * NumberInRange Filter.
         */
        export interface NumberInRangeFilterArgs {
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
         * NumberLessThan Filter.
         */
        export interface NumberLessThanFilterArgs {
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
         * NumberLessThanOrEquals Filter.
         */
        export interface NumberLessThanOrEqualsFilterArgs {
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
         * NumberNotIn Filter.
         */
        export interface NumberNotInFilterArgs {
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
         * NumberNotInRange Filter.
         */
        export interface NumberNotInRangeFilterArgs {
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
            authorizedPartnersList?: pulumi.Input<pulumi.Input<v20230601preview.PartnerArgs>[]>;
            /**
             * Time used to validate the authorization expiration time for each authorized partner. If DefaultMaximumExpirationTimeInDays is
             * not specified, the default is 7 days. Otherwise, allowed values are between 1 and 365 days.
             */
            defaultMaximumExpirationTimeInDays?: pulumi.Input<number>;
        }

        export interface PartnerEventSubscriptionDestinationArgs {
            /**
             * Type of the endpoint for the event subscription destination.
             * Expected value is 'PartnerDestination'.
             */
            endpointType: pulumi.Input<"PartnerDestination">;
            /**
             * The Azure Resource Id that represents the endpoint of a Partner Destination of an event subscription.
             */
            resourceId?: pulumi.Input<string>;
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
            eventTypeInfo?: pulumi.Input<v20230601preview.EventTypeInfoArgs>;
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

        export interface PrivateEndpointConnectionArgs {
            /**
             * GroupIds from the private link service resource.
             */
            groupIds?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The Private Endpoint resource for this Connection.
             */
            privateEndpoint?: pulumi.Input<v20230601preview.PrivateEndpointArgs>;
            /**
             * Details about the state of the connection.
             */
            privateLinkServiceConnectionState?: pulumi.Input<v20230601preview.ConnectionStateArgs>;
            /**
             * Provisioning state of the Private Endpoint Connection.
             */
            provisioningState?: pulumi.Input<string | enums.v20230601preview.ResourceProvisioningState>;
        }

        /**
         * Properties of the Queue info for event subscription.
         */
        export interface QueueInfoArgs {
            /**
             * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
             * Uses the managed identity setup on the parent resource (namely, topic) to acquire the authentication tokens being used during delivery / dead-lettering.
             */
            deadLetterDestinationWithResourceIdentity?: pulumi.Input<v20230601preview.DeadLetterWithResourceIdentityArgs>;
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
            eventTimeToLive?: pulumi.Input<string>;
            /**
             * The maximum delivery count of the events.
             */
            maxDeliveryCount?: pulumi.Input<number>;
            /**
             * Maximum period in seconds in which once the message is in received (by the client) state and waiting to be accepted, released or rejected.
             * If this time elapsed after a message has been received by the client and not transitioned into accepted (not processed), released or rejected,
             * the message is available for redelivery. This is an optional field, where default is 60 seconds, minimum is 60 seconds and maximum is 300 seconds.
             */
            receiveLockDurationInSeconds?: pulumi.Input<number>;
        }

        /**
         * The change history of the resource move.
         */
        export interface ResourceMoveChangeHistoryArgs {
            /**
             * Azure subscription ID of the resource.
             */
            azureSubscriptionId?: pulumi.Input<string>;
            /**
             * UTC timestamp of when the resource was changed.
             */
            changedTimeUtc?: pulumi.Input<string>;
            /**
             * Azure Resource Group of the resource.
             */
            resourceGroupName?: pulumi.Input<string>;
        }

        /**
         * Describes an EventGrid Resource Sku.
         */
        export interface ResourceSkuArgs {
            /**
             * The Sku name of the resource. The possible values are: Basic or Premium.
             */
            name?: pulumi.Input<string | enums.v20230601preview.Sku>;
        }
        /**
         * resourceSkuArgsProvideDefaults sets the appropriate defaults for ResourceSkuArgs
         */
        export function resourceSkuArgsProvideDefaults(val: ResourceSkuArgs): ResourceSkuArgs {
            return {
                ...val,
                name: (val.name) ?? "Basic",
            };
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

        export interface RoutingEnrichmentsArgs {
            dynamic?: pulumi.Input<pulumi.Input<v20230601preview.DynamicRoutingEnrichmentArgs>[]>;
            static?: pulumi.Input<pulumi.Input<v20230601preview.StaticRoutingEnrichmentArgs>[]>;
        }

        /**
         * Routing identity info for topic spaces configuration.
         */
        export interface RoutingIdentityInfoArgs {
            type?: pulumi.Input<string | enums.v20230601preview.RoutingIdentityType>;
            userAssignedIdentity?: pulumi.Input<string>;
        }

        /**
         * Information about the service bus destination for an event subscription.
         */
        export interface ServiceBusQueueEventSubscriptionDestinationArgs {
            /**
             * Delivery attribute details.
             */
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20230601preview.DynamicDeliveryAttributeMappingArgs | v20230601preview.StaticDeliveryAttributeMappingArgs>[]>;
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
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20230601preview.DynamicDeliveryAttributeMappingArgs | v20230601preview.StaticDeliveryAttributeMappingArgs>[]>;
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

        export interface StaticRoutingEnrichmentArgs {
            /**
             * Static routing enrichment key.
             */
            key?: pulumi.Input<string>;
            /**
             * Static routing enrichment value type. For e.g. this property value can be 'String'.
             */
            valueType?: pulumi.Input<string | enums.v20230601preview.StaticRoutingEnrichmentType>;
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
             * Storage queue message time to live in seconds. This value cannot be zero or negative with the exception of using -1 to indicate that the Time To Live of the message is Infinite.
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
         * StringBeginsWith Filter.
         */
        export interface StringBeginsWithFilterArgs {
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
         * StringContains Filter.
         */
        export interface StringContainsFilterArgs {
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
         * StringEndsWith Filter.
         */
        export interface StringEndsWithFilterArgs {
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
         * StringIn Filter.
         */
        export interface StringInFilterArgs {
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
         * StringNotBeginsWith Filter.
         */
        export interface StringNotBeginsWithFilterArgs {
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
         * StringNotContains Filter.
         */
        export interface StringNotContainsFilterArgs {
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
         * StringNotEndsWith Filter.
         */
        export interface StringNotEndsWithFilterArgs {
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
         * StringNotIn Filter.
         */
        export interface StringNotInFilterArgs {
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
         * Properties of the Topic Spaces Configuration.
         */
        export interface TopicSpacesConfigurationArgs {
            /**
             * Client authentication settings for topic spaces configuration.
             */
            clientAuthentication?: pulumi.Input<v20230601preview.ClientAuthenticationSettingsArgs>;
            /**
             * The maximum number of sessions per authentication name. The property default value is 1.
             * Min allowed value is 1 and max allowed value is 100.
             */
            maximumClientSessionsPerAuthenticationName?: pulumi.Input<number>;
            /**
             * The maximum session expiry in hours. The property default value is 1 hour.
             * Min allowed value is 1 hour and max allowed value is 8 hours.
             */
            maximumSessionExpiryInHours?: pulumi.Input<number>;
            /**
             * Fully qualified Azure Resource Id for the Event Grid Topic to which events will be routed to from TopicSpaces under a namespace.
             * This property should be in the following format '/subscriptions/{subId}/resourcegroups/{resourceGroupName}/providers/microsoft.EventGrid/topics/{topicName}'.
             * This topic should reside in the same region where namespace is located.
             */
            routeTopicResourceId?: pulumi.Input<string>;
            /**
             * Routing enrichments for topic spaces configuration
             */
            routingEnrichments?: pulumi.Input<v20230601preview.RoutingEnrichmentsArgs>;
            /**
             * Routing identity info for topic spaces configuration.
             */
            routingIdentityInfo?: pulumi.Input<v20230601preview.RoutingIdentityInfoArgs>;
            /**
             * Indicate if Topic Spaces Configuration is enabled for the namespace. Default is Disabled.
             */
            state?: pulumi.Input<string | enums.v20230601preview.TopicSpacesConfigurationState>;
        }
        /**
         * topicSpacesConfigurationArgsProvideDefaults sets the appropriate defaults for TopicSpacesConfigurationArgs
         */
        export function topicSpacesConfigurationArgsProvideDefaults(val: TopicSpacesConfigurationArgs): TopicSpacesConfigurationArgs {
            return {
                ...val,
                state: (val.state) ?? "Disabled",
            };
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
            deliveryAttributeMappings?: pulumi.Input<pulumi.Input<v20230601preview.DynamicDeliveryAttributeMappingArgs | v20230601preview.StaticDeliveryAttributeMappingArgs>[]>;
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
             * Minimum TLS version that should be supported by webhook endpoint
             */
            minimumTlsVersionAllowed?: pulumi.Input<string | enums.v20230601preview.TlsVersion>;
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

        /**
         * Information about the WebHook of the partner destination.
         */
        export interface WebhookPartnerDestinationInfoArgs {
            /**
             * Azure subscription ID of the subscriber. The partner destination associated with the channel will be
             * created under this Azure subscription.
             */
            azureSubscriptionId?: pulumi.Input<string>;
            /**
             * Partner client authentication
             */
            clientAuthentication?: pulumi.Input<v20230601preview.AzureADPartnerClientAuthenticationArgs>;
            /**
             * The base URL that represents the endpoint of the partner destination.
             */
            endpointBaseUrl?: pulumi.Input<string>;
            /**
             * Additional context of the partner destination endpoint.
             */
            endpointServiceContext?: pulumi.Input<string>;
            /**
             * Type of the endpoint for the partner destination
             * Expected value is 'WebHook'.
             */
            endpointType: pulumi.Input<"WebHook">;
            /**
             * The URL that represents the endpoint of the partner destination.
             */
            endpointUrl?: pulumi.Input<string>;
            /**
             * Name of the partner destination associated with the channel.
             */
            name?: pulumi.Input<string>;
            /**
             * Azure Resource Group of the subscriber. The partner destination associated with the channel will be
             * created under this resource group.
             */
            resourceGroupName?: pulumi.Input<string>;
            /**
             * Change history of the resource move.
             */
            resourceMoveChangeHistory?: pulumi.Input<pulumi.Input<v20230601preview.ResourceMoveChangeHistoryArgs>[]>;
        }
        /**
         * webhookPartnerDestinationInfoArgsProvideDefaults sets the appropriate defaults for WebhookPartnerDestinationInfoArgs
         */
        export function webhookPartnerDestinationInfoArgsProvideDefaults(val: WebhookPartnerDestinationInfoArgs): WebhookPartnerDestinationInfoArgs {
            return {
                ...val,
                clientAuthentication: (val.clientAuthentication ? pulumi.output(val.clientAuthentication).apply(v20230601preview.azureADPartnerClientAuthenticationArgsProvideDefaults) : undefined),
                endpointType: (val.endpointType) ?? "WebHook",
            };
        }

    }
}
