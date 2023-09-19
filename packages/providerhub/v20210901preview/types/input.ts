import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AuthorizationActionMappingArgs {
        desired?: pulumi.Input<string>;
        original?: pulumi.Input<string>;
    }

    /**
     * Properties of the rollout.
     */
    export interface DefaultRolloutPropertiesArgs {
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
        specification?: pulumi.Input<DefaultRolloutPropertiesSpecificationArgs>;
        status?: pulumi.Input<DefaultRolloutPropertiesStatusArgs>;
    }

    export interface DefaultRolloutPropertiesSpecificationArgs {
        canary?: pulumi.Input<DefaultRolloutSpecificationCanaryArgs>;
        expeditedRollout?: pulumi.Input<DefaultRolloutSpecificationExpeditedRolloutArgs>;
        highTraffic?: pulumi.Input<DefaultRolloutSpecificationHighTrafficArgs>;
        lowTraffic?: pulumi.Input<DefaultRolloutSpecificationLowTrafficArgs>;
        mediumTraffic?: pulumi.Input<DefaultRolloutSpecificationMediumTrafficArgs>;
        providerRegistration?: pulumi.Input<DefaultRolloutSpecificationProviderRegistrationArgs>;
        resourceTypeRegistrations?: pulumi.Input<pulumi.Input<ResourceTypeRegistrationArgs>[]>;
        restOfTheWorldGroupOne?: pulumi.Input<DefaultRolloutSpecificationRestOfTheWorldGroupOneArgs>;
        restOfTheWorldGroupTwo?: pulumi.Input<DefaultRolloutSpecificationRestOfTheWorldGroupTwoArgs>;
    }

    export interface DefaultRolloutPropertiesStatusArgs {
        completedRegions?: pulumi.Input<pulumi.Input<string>[]>;
        failedOrSkippedRegions?: pulumi.Input<{[key: string]: pulumi.Input<ExtendedErrorInfoArgs>}>;
        nextTrafficRegion?: pulumi.Input<string | enums.TrafficRegionCategory>;
        nextTrafficRegionScheduledTime?: pulumi.Input<string>;
        subscriptionReregistrationResult?: pulumi.Input<string | enums.SubscriptionReregistrationResult>;
    }

    export interface DefaultRolloutSpecificationCanaryArgs {
        regions?: pulumi.Input<pulumi.Input<string>[]>;
        skipRegions?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface DefaultRolloutSpecificationExpeditedRolloutArgs {
        /**
         * Indicates whether expedited rollout is enabled/disabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    export interface DefaultRolloutSpecificationHighTrafficArgs {
        regions?: pulumi.Input<pulumi.Input<string>[]>;
        waitDuration?: pulumi.Input<string>;
    }

    export interface DefaultRolloutSpecificationLowTrafficArgs {
        regions?: pulumi.Input<pulumi.Input<string>[]>;
        waitDuration?: pulumi.Input<string>;
    }

    export interface DefaultRolloutSpecificationMediumTrafficArgs {
        regions?: pulumi.Input<pulumi.Input<string>[]>;
        waitDuration?: pulumi.Input<string>;
    }

    export interface DefaultRolloutSpecificationProviderRegistrationArgs {
        properties?: pulumi.Input<ProviderRegistrationPropertiesArgs>;
    }

    export interface DefaultRolloutSpecificationRestOfTheWorldGroupOneArgs {
        regions?: pulumi.Input<pulumi.Input<string>[]>;
        waitDuration?: pulumi.Input<string>;
    }

    export interface DefaultRolloutSpecificationRestOfTheWorldGroupTwoArgs {
        regions?: pulumi.Input<pulumi.Input<string>[]>;
        waitDuration?: pulumi.Input<string>;
    }

    export interface ExtendedErrorInfoArgs {
        additionalInfo?: pulumi.Input<pulumi.Input<TypedErrorInfoArgs>[]>;
        code?: pulumi.Input<string>;
        details?: pulumi.Input<pulumi.Input<ExtendedErrorInfoArgs>[]>;
        message?: pulumi.Input<string>;
        target?: pulumi.Input<string>;
    }

    export interface ExtendedLocationOptionsArgs {
        supportedPolicy?: pulumi.Input<string>;
        type?: pulumi.Input<string>;
    }

    export interface LightHouseAuthorizationArgs {
        principalId: pulumi.Input<string>;
        roleDefinitionId: pulumi.Input<string>;
    }

    export interface LinkedAccessCheckArgs {
        actionName?: pulumi.Input<string>;
        linkedAction?: pulumi.Input<string>;
        linkedActionVerb?: pulumi.Input<string>;
        linkedProperty?: pulumi.Input<string>;
        linkedType?: pulumi.Input<string>;
    }

    export interface LoggingRuleArgs {
        action: pulumi.Input<string>;
        detailLevel: pulumi.Input<string | enums.LoggingDetails>;
        direction: pulumi.Input<string | enums.LoggingDirections>;
        hiddenPropertyPaths?: pulumi.Input<LoggingRuleHiddenPropertyPathsArgs>;
    }

    export interface LoggingRuleHiddenPropertyPathsArgs {
        hiddenPathsOnRequest?: pulumi.Input<pulumi.Input<string>[]>;
        hiddenPathsOnResponse?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface NotificationEndpointArgs {
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        notificationDestination?: pulumi.Input<string>;
    }

    export interface NotificationRegistrationPropertiesArgs {
        includedEvents?: pulumi.Input<pulumi.Input<string>[]>;
        messageScope?: pulumi.Input<string | enums.MessageScope>;
        notificationEndpoints?: pulumi.Input<pulumi.Input<NotificationEndpointArgs>[]>;
        notificationMode?: pulumi.Input<string | enums.NotificationMode>;
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
    }

    export interface OpenApiConfigurationArgs {
        validation?: pulumi.Input<OpenApiValidationArgs>;
    }

    export interface OpenApiValidationArgs {
        /**
         * Indicates whether a non compliance response is allowed for a LIST call
         */
        allowNoncompliantCollectionResponse?: pulumi.Input<boolean>;
    }

    export interface ProviderHubMetadataProviderAuthenticationArgs {
        allowedAudiences: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface ProviderHubMetadataThirdPartyProviderAuthorizationArgs {
        authorizations?: pulumi.Input<pulumi.Input<LightHouseAuthorizationArgs>[]>;
        managedByTenantId?: pulumi.Input<string>;
    }

    export interface ProviderRegistrationPropertiesArgs {
        capabilities?: pulumi.Input<pulumi.Input<ResourceProviderCapabilitiesArgs>[]>;
        featuresRule?: pulumi.Input<ResourceProviderManifestPropertiesFeaturesRuleArgs>;
        management?: pulumi.Input<ResourceProviderManifestPropertiesManagementArgs>;
        metadata?: any;
        namespace?: pulumi.Input<string>;
        providerAuthentication?: pulumi.Input<ResourceProviderManifestPropertiesProviderAuthenticationArgs>;
        providerAuthorizations?: pulumi.Input<pulumi.Input<ResourceProviderAuthorizationArgs>[]>;
        providerHubMetadata?: pulumi.Input<ProviderRegistrationPropertiesProviderHubMetadataArgs>;
        providerType?: pulumi.Input<string | enums.ResourceProviderType>;
        providerVersion?: pulumi.Input<string>;
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
        requestHeaderOptions?: pulumi.Input<ResourceProviderManifestPropertiesRequestHeaderOptionsArgs>;
        requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
        subscriptionLifecycleNotificationSpecifications?: pulumi.Input<ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs>;
        templateDeploymentOptions?: pulumi.Input<ResourceProviderManifestPropertiesTemplateDeploymentOptionsArgs>;
    }

    export interface ProviderRegistrationPropertiesProviderHubMetadataArgs {
        providerAuthentication?: pulumi.Input<ProviderHubMetadataProviderAuthenticationArgs>;
        providerAuthorizations?: pulumi.Input<pulumi.Input<ResourceProviderAuthorizationArgs>[]>;
        thirdPartyProviderAuthorization?: pulumi.Input<ProviderHubMetadataThirdPartyProviderAuthorizationArgs>;
    }

    export interface ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs {
        softDeleteTTL?: pulumi.Input<string>;
        subscriptionStateOverrideActions?: pulumi.Input<pulumi.Input<SubscriptionStateOverrideActionArgs>[]>;
    }

    export interface ResourceConcurrencyControlOptionArgs {
        policy?: pulumi.Input<string | enums.Policy>;
    }

    export interface ResourceProviderAuthorizationArgs {
        applicationId?: pulumi.Input<string>;
        managedByRoleDefinitionId?: pulumi.Input<string>;
        roleDefinitionId?: pulumi.Input<string>;
    }

    export interface ResourceProviderCapabilitiesArgs {
        effect: pulumi.Input<string | enums.ResourceProviderCapabilitiesEffect>;
        quotaId: pulumi.Input<string>;
        requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface ResourceProviderManifestPropertiesFeaturesRuleArgs {
        requiredFeaturesPolicy: pulumi.Input<string | enums.FeaturesPolicy>;
    }

    export interface ResourceProviderManifestPropertiesManagementArgs {
        incidentContactEmail?: pulumi.Input<string>;
        incidentRoutingService?: pulumi.Input<string>;
        incidentRoutingTeam?: pulumi.Input<string>;
        manifestOwners?: pulumi.Input<pulumi.Input<string>[]>;
        resourceAccessPolicy?: pulumi.Input<string>;
        resourceAccessRoles?: pulumi.Input<any[]>;
        schemaOwners?: pulumi.Input<pulumi.Input<string>[]>;
        serviceTreeInfos?: pulumi.Input<pulumi.Input<ServiceTreeInfoArgs>[]>;
    }

    export interface ResourceProviderManifestPropertiesProviderAuthenticationArgs {
        allowedAudiences: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface ResourceProviderManifestPropertiesRequestHeaderOptionsArgs {
        optInHeaders?: pulumi.Input<string | enums.OptInHeaderType>;
    }

    export interface ResourceProviderManifestPropertiesTemplateDeploymentOptionsArgs {
        preflightOptions?: pulumi.Input<pulumi.Input<string | enums.PreflightOption>[]>;
        preflightSupported?: pulumi.Input<boolean>;
    }

    export interface ResourceTypeEndpointArgs {
        apiVersions?: pulumi.Input<pulumi.Input<string>[]>;
        enabled?: pulumi.Input<boolean>;
        endpointType?: pulumi.Input<string | enums.EndpointType>;
        extensions?: pulumi.Input<pulumi.Input<ResourceTypeExtensionArgs>[]>;
        featuresRule?: pulumi.Input<ResourceTypeEndpointFeaturesRuleArgs>;
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
        timeout?: pulumi.Input<string>;
    }

    export interface ResourceTypeEndpointFeaturesRuleArgs {
        requiredFeaturesPolicy: pulumi.Input<string | enums.FeaturesPolicy>;
    }

    export interface ResourceTypeExtensionArgs {
        endpointUri?: pulumi.Input<string>;
        extensionCategories?: pulumi.Input<pulumi.Input<string | enums.ExtensionCategory>[]>;
        timeout?: pulumi.Input<string>;
    }

    export interface ResourceTypeExtensionOptionsResourceCreationBeginArgs {
        request?: pulumi.Input<pulumi.Input<string | enums.ExtensionOptionType>[]>;
        response?: pulumi.Input<pulumi.Input<string | enums.ExtensionOptionType>[]>;
    }

    export interface ResourceTypeRegistrationArgs {
        properties?: pulumi.Input<ResourceTypeRegistrationPropertiesArgs>;
    }

    export interface ResourceTypeRegistrationPropertiesArgs {
        allowedUnauthorizedActions?: pulumi.Input<pulumi.Input<string>[]>;
        authorizationActionMappings?: pulumi.Input<pulumi.Input<AuthorizationActionMappingArgs>[]>;
        checkNameAvailabilitySpecifications?: pulumi.Input<ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecificationsArgs>;
        defaultApiVersion?: pulumi.Input<string>;
        disallowedActionVerbs?: pulumi.Input<pulumi.Input<string>[]>;
        enableAsyncOperation?: pulumi.Input<boolean>;
        enableThirdPartyS2S?: pulumi.Input<boolean>;
        endpoints?: pulumi.Input<pulumi.Input<ResourceTypeEndpointArgs>[]>;
        extendedLocations?: pulumi.Input<pulumi.Input<ExtendedLocationOptionsArgs>[]>;
        extensionOptions?: pulumi.Input<ResourceTypeRegistrationPropertiesExtensionOptionsArgs>;
        featuresRule?: pulumi.Input<ResourceTypeRegistrationPropertiesFeaturesRuleArgs>;
        identityManagement?: pulumi.Input<ResourceTypeRegistrationPropertiesIdentityManagementArgs>;
        isPureProxy?: pulumi.Input<boolean>;
        linkedAccessChecks?: pulumi.Input<pulumi.Input<LinkedAccessCheckArgs>[]>;
        loggingRules?: pulumi.Input<pulumi.Input<LoggingRuleArgs>[]>;
        management?: pulumi.Input<ResourceTypeRegistrationPropertiesManagementArgs>;
        marketplaceType?: pulumi.Input<string>;
        openApiConfiguration?: pulumi.Input<OpenApiConfigurationArgs>;
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
        regionality?: pulumi.Input<string | enums.Regionality>;
        requestHeaderOptions?: pulumi.Input<ResourceTypeRegistrationPropertiesRequestHeaderOptionsArgs>;
        requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
        resourceConcurrencyControlOptions?: pulumi.Input<{[key: string]: pulumi.Input<ResourceConcurrencyControlOptionArgs>}>;
        resourceDeletionPolicy?: pulumi.Input<string | enums.ResourceDeletionPolicy>;
        resourceGraphConfiguration?: pulumi.Input<ResourceTypeRegistrationPropertiesResourceGraphConfigurationArgs>;
        resourceMovePolicy?: pulumi.Input<ResourceTypeRegistrationPropertiesResourceMovePolicyArgs>;
        routingType?: pulumi.Input<string | enums.RoutingType>;
        serviceTreeInfos?: pulumi.Input<pulumi.Input<ServiceTreeInfoArgs>[]>;
        subscriptionLifecycleNotificationSpecifications?: pulumi.Input<ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs>;
        subscriptionStateRules?: pulumi.Input<pulumi.Input<SubscriptionStateRuleArgs>[]>;
        swaggerSpecifications?: pulumi.Input<pulumi.Input<SwaggerSpecificationArgs>[]>;
        templateDeploymentOptions?: pulumi.Input<ResourceTypeRegistrationPropertiesTemplateDeploymentOptionsArgs>;
        throttlingRules?: pulumi.Input<pulumi.Input<ThrottlingRuleArgs>[]>;
    }

    export interface ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecificationsArgs {
        enableDefaultValidation?: pulumi.Input<boolean>;
        resourceTypesWithCustomValidation?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface ResourceTypeRegistrationPropertiesExtensionOptionsArgs {
        resourceCreationBegin?: pulumi.Input<ResourceTypeExtensionOptionsResourceCreationBeginArgs>;
    }

    export interface ResourceTypeRegistrationPropertiesFeaturesRuleArgs {
        requiredFeaturesPolicy: pulumi.Input<string | enums.FeaturesPolicy>;
    }

    export interface ResourceTypeRegistrationPropertiesIdentityManagementArgs {
        applicationId?: pulumi.Input<string>;
        type?: pulumi.Input<string | enums.IdentityManagementTypes>;
    }

    export interface ResourceTypeRegistrationPropertiesManagementArgs {
        incidentContactEmail?: pulumi.Input<string>;
        incidentRoutingService?: pulumi.Input<string>;
        incidentRoutingTeam?: pulumi.Input<string>;
        manifestOwners?: pulumi.Input<pulumi.Input<string>[]>;
        resourceAccessPolicy?: pulumi.Input<string>;
        resourceAccessRoles?: pulumi.Input<any[]>;
        schemaOwners?: pulumi.Input<pulumi.Input<string>[]>;
        serviceTreeInfos?: pulumi.Input<pulumi.Input<ServiceTreeInfoArgs>[]>;
    }

    export interface ResourceTypeRegistrationPropertiesRequestHeaderOptionsArgs {
        optInHeaders?: pulumi.Input<string | enums.OptInHeaderType>;
    }

    export interface ResourceTypeRegistrationPropertiesResourceGraphConfigurationArgs {
        apiVersion?: pulumi.Input<string>;
        enabled?: pulumi.Input<boolean>;
    }

    export interface ResourceTypeRegistrationPropertiesResourceMovePolicyArgs {
        crossResourceGroupMoveEnabled?: pulumi.Input<boolean>;
        crossSubscriptionMoveEnabled?: pulumi.Input<boolean>;
        validationRequired?: pulumi.Input<boolean>;
    }

    export interface ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs {
        softDeleteTTL?: pulumi.Input<string>;
        subscriptionStateOverrideActions?: pulumi.Input<pulumi.Input<SubscriptionStateOverrideActionArgs>[]>;
    }

    export interface ResourceTypeRegistrationPropertiesTemplateDeploymentOptionsArgs {
        preflightOptions?: pulumi.Input<pulumi.Input<string | enums.PreflightOption>[]>;
        preflightSupported?: pulumi.Input<boolean>;
    }

    export interface ServiceTreeInfoArgs {
        componentId?: pulumi.Input<string>;
        readiness?: pulumi.Input<string | enums.Readiness>;
        serviceId?: pulumi.Input<string>;
    }

    export interface SkuCapabilityArgs {
        name: pulumi.Input<string>;
        value: pulumi.Input<string>;
    }

    export interface SkuCostArgs {
        extendedUnit?: pulumi.Input<string>;
        meterId: pulumi.Input<string>;
        quantity?: pulumi.Input<number>;
    }

    export interface SkuLocationInfoArgs {
        extendedLocations?: pulumi.Input<pulumi.Input<string>[]>;
        location: pulumi.Input<string>;
        type?: pulumi.Input<string>;
        zoneDetails?: pulumi.Input<pulumi.Input<SkuZoneDetailArgs>[]>;
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface SkuResourcePropertiesArgs {
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
        skuSettings: pulumi.Input<pulumi.Input<SkuSettingArgs>[]>;
    }

    export interface SkuSettingArgs {
        capabilities?: pulumi.Input<pulumi.Input<SkuCapabilityArgs>[]>;
        capacity?: pulumi.Input<SkuSettingCapacityArgs>;
        costs?: pulumi.Input<pulumi.Input<SkuCostArgs>[]>;
        family?: pulumi.Input<string>;
        kind?: pulumi.Input<string>;
        locationInfo?: pulumi.Input<pulumi.Input<SkuLocationInfoArgs>[]>;
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        name: pulumi.Input<string>;
        requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
        requiredQuotaIds?: pulumi.Input<pulumi.Input<string>[]>;
        size?: pulumi.Input<string>;
        tier?: pulumi.Input<string>;
    }

    export interface SkuSettingCapacityArgs {
        default?: pulumi.Input<number>;
        maximum?: pulumi.Input<number>;
        minimum: pulumi.Input<number>;
        scaleType?: pulumi.Input<string | enums.SkuScaleType>;
    }

    export interface SkuZoneDetailArgs {
        capabilities?: pulumi.Input<pulumi.Input<SkuCapabilityArgs>[]>;
        name?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface SubscriptionStateOverrideActionArgs {
        action: pulumi.Input<string | enums.SubscriptionNotificationOperation>;
        state: pulumi.Input<string | enums.SubscriptionTransitioningState>;
    }

    export interface SubscriptionStateRuleArgs {
        allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
        state?: pulumi.Input<string | enums.SubscriptionState>;
    }

    export interface SwaggerSpecificationArgs {
        apiVersions?: pulumi.Input<pulumi.Input<string>[]>;
        swaggerSpecFolderUri?: pulumi.Input<string>;
    }

    export interface ThrottlingMetricArgs {
        interval?: pulumi.Input<string>;
        limit: pulumi.Input<number>;
        type: pulumi.Input<string | enums.ThrottlingMetricType>;
    }

    export interface ThrottlingRuleArgs {
        action: pulumi.Input<string>;
        metrics: pulumi.Input<pulumi.Input<ThrottlingMetricArgs>[]>;
        requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface TypedErrorInfoArgs {
        type: pulumi.Input<string>;
    }
