import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace providerhub {
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

    export namespace v20210501preview {
        /**
         * Properties of an Operation.
         */
        export interface OperationsDefinitionArgs {
            actionType?: pulumi.Input<string>;
            /**
             * Display information of the operation.
             */
            display: pulumi.Input<v20210501preview.OperationsDefinitionDisplayArgs>;
            /**
             * Indicates whether the operation applies to data-plane.
             */
            isDataAction?: pulumi.Input<boolean>;
            /**
             * Name of the operation.
             */
            name: pulumi.Input<string>;
            origin?: pulumi.Input<string>;
            properties?: any;
        }

        /**
         * Display information of the operation.
         */
        export interface OperationsDefinitionDisplayArgs {
            description: pulumi.Input<string>;
            operation: pulumi.Input<string>;
            provider: pulumi.Input<string>;
            resource: pulumi.Input<string>;
        }

    }

    export namespace v20210901preview {
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
            provisioningState?: pulumi.Input<string | enums.v20210901preview.ProvisioningState>;
            specification?: pulumi.Input<v20210901preview.DefaultRolloutPropertiesSpecificationArgs>;
            status?: pulumi.Input<v20210901preview.DefaultRolloutPropertiesStatusArgs>;
        }

        export interface DefaultRolloutPropertiesSpecificationArgs {
            canary?: pulumi.Input<v20210901preview.DefaultRolloutSpecificationCanaryArgs>;
            expeditedRollout?: pulumi.Input<v20210901preview.DefaultRolloutSpecificationExpeditedRolloutArgs>;
            highTraffic?: pulumi.Input<v20210901preview.DefaultRolloutSpecificationHighTrafficArgs>;
            lowTraffic?: pulumi.Input<v20210901preview.DefaultRolloutSpecificationLowTrafficArgs>;
            mediumTraffic?: pulumi.Input<v20210901preview.DefaultRolloutSpecificationMediumTrafficArgs>;
            providerRegistration?: pulumi.Input<v20210901preview.DefaultRolloutSpecificationProviderRegistrationArgs>;
            resourceTypeRegistrations?: pulumi.Input<pulumi.Input<v20210901preview.ResourceTypeRegistrationArgs>[]>;
            restOfTheWorldGroupOne?: pulumi.Input<v20210901preview.DefaultRolloutSpecificationRestOfTheWorldGroupOneArgs>;
            restOfTheWorldGroupTwo?: pulumi.Input<v20210901preview.DefaultRolloutSpecificationRestOfTheWorldGroupTwoArgs>;
        }

        export interface DefaultRolloutPropertiesStatusArgs {
            completedRegions?: pulumi.Input<pulumi.Input<string>[]>;
            failedOrSkippedRegions?: pulumi.Input<{[key: string]: pulumi.Input<v20210901preview.ExtendedErrorInfoArgs>}>;
            nextTrafficRegion?: pulumi.Input<string | enums.v20210901preview.TrafficRegionCategory>;
            nextTrafficRegionScheduledTime?: pulumi.Input<string>;
            subscriptionReregistrationResult?: pulumi.Input<string | enums.v20210901preview.SubscriptionReregistrationResult>;
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
            properties?: pulumi.Input<v20210901preview.ProviderRegistrationPropertiesArgs>;
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
            additionalInfo?: pulumi.Input<pulumi.Input<v20210901preview.TypedErrorInfoArgs>[]>;
            code?: pulumi.Input<string>;
            details?: pulumi.Input<pulumi.Input<v20210901preview.ExtendedErrorInfoArgs>[]>;
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
            detailLevel: pulumi.Input<string | enums.v20210901preview.LoggingDetails>;
            direction: pulumi.Input<string | enums.v20210901preview.LoggingDirections>;
            hiddenPropertyPaths?: pulumi.Input<v20210901preview.LoggingRuleHiddenPropertyPathsArgs>;
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
            messageScope?: pulumi.Input<string | enums.v20210901preview.MessageScope>;
            notificationEndpoints?: pulumi.Input<pulumi.Input<v20210901preview.NotificationEndpointArgs>[]>;
            notificationMode?: pulumi.Input<string | enums.v20210901preview.NotificationMode>;
            /**
             * The provisioned state of the resource.
             */
            provisioningState?: pulumi.Input<string | enums.v20210901preview.ProvisioningState>;
        }

        export interface OpenApiConfigurationArgs {
            validation?: pulumi.Input<v20210901preview.OpenApiValidationArgs>;
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
            authorizations?: pulumi.Input<pulumi.Input<v20210901preview.LightHouseAuthorizationArgs>[]>;
            managedByTenantId?: pulumi.Input<string>;
        }

        export interface ProviderRegistrationPropertiesArgs {
            capabilities?: pulumi.Input<pulumi.Input<v20210901preview.ResourceProviderCapabilitiesArgs>[]>;
            featuresRule?: pulumi.Input<v20210901preview.ResourceProviderManifestPropertiesFeaturesRuleArgs>;
            management?: pulumi.Input<v20210901preview.ResourceProviderManifestPropertiesManagementArgs>;
            metadata?: any;
            namespace?: pulumi.Input<string>;
            providerAuthentication?: pulumi.Input<v20210901preview.ResourceProviderManifestPropertiesProviderAuthenticationArgs>;
            providerAuthorizations?: pulumi.Input<pulumi.Input<v20210901preview.ResourceProviderAuthorizationArgs>[]>;
            providerHubMetadata?: pulumi.Input<v20210901preview.ProviderRegistrationPropertiesProviderHubMetadataArgs>;
            providerType?: pulumi.Input<string | enums.v20210901preview.ResourceProviderType>;
            providerVersion?: pulumi.Input<string>;
            /**
             * The provisioned state of the resource.
             */
            provisioningState?: pulumi.Input<string | enums.v20210901preview.ProvisioningState>;
            requestHeaderOptions?: pulumi.Input<v20210901preview.ResourceProviderManifestPropertiesRequestHeaderOptionsArgs>;
            requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
            subscriptionLifecycleNotificationSpecifications?: pulumi.Input<v20210901preview.ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs>;
            templateDeploymentOptions?: pulumi.Input<v20210901preview.ResourceProviderManifestPropertiesTemplateDeploymentOptionsArgs>;
        }

        export interface ProviderRegistrationPropertiesProviderHubMetadataArgs {
            providerAuthentication?: pulumi.Input<v20210901preview.ProviderHubMetadataProviderAuthenticationArgs>;
            providerAuthorizations?: pulumi.Input<pulumi.Input<v20210901preview.ResourceProviderAuthorizationArgs>[]>;
            thirdPartyProviderAuthorization?: pulumi.Input<v20210901preview.ProviderHubMetadataThirdPartyProviderAuthorizationArgs>;
        }

        export interface ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs {
            softDeleteTTL?: pulumi.Input<string>;
            subscriptionStateOverrideActions?: pulumi.Input<pulumi.Input<v20210901preview.SubscriptionStateOverrideActionArgs>[]>;
        }

        export interface ResourceConcurrencyControlOptionArgs {
            policy?: pulumi.Input<string | enums.v20210901preview.Policy>;
        }

        export interface ResourceProviderAuthorizationArgs {
            applicationId?: pulumi.Input<string>;
            managedByRoleDefinitionId?: pulumi.Input<string>;
            roleDefinitionId?: pulumi.Input<string>;
        }

        export interface ResourceProviderCapabilitiesArgs {
            effect: pulumi.Input<string | enums.v20210901preview.ResourceProviderCapabilitiesEffect>;
            quotaId: pulumi.Input<string>;
            requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
        }

        export interface ResourceProviderManifestPropertiesFeaturesRuleArgs {
            requiredFeaturesPolicy: pulumi.Input<string | enums.v20210901preview.FeaturesPolicy>;
        }

        export interface ResourceProviderManifestPropertiesManagementArgs {
            incidentContactEmail?: pulumi.Input<string>;
            incidentRoutingService?: pulumi.Input<string>;
            incidentRoutingTeam?: pulumi.Input<string>;
            manifestOwners?: pulumi.Input<pulumi.Input<string>[]>;
            resourceAccessPolicy?: pulumi.Input<string>;
            resourceAccessRoles?: pulumi.Input<any[]>;
            schemaOwners?: pulumi.Input<pulumi.Input<string>[]>;
            serviceTreeInfos?: pulumi.Input<pulumi.Input<v20210901preview.ServiceTreeInfoArgs>[]>;
        }

        export interface ResourceProviderManifestPropertiesProviderAuthenticationArgs {
            allowedAudiences: pulumi.Input<pulumi.Input<string>[]>;
        }

        export interface ResourceProviderManifestPropertiesRequestHeaderOptionsArgs {
            optInHeaders?: pulumi.Input<string | enums.v20210901preview.OptInHeaderType>;
        }

        export interface ResourceProviderManifestPropertiesTemplateDeploymentOptionsArgs {
            preflightOptions?: pulumi.Input<pulumi.Input<string | enums.v20210901preview.PreflightOption>[]>;
            preflightSupported?: pulumi.Input<boolean>;
        }

        export interface ResourceTypeEndpointArgs {
            apiVersions?: pulumi.Input<pulumi.Input<string>[]>;
            enabled?: pulumi.Input<boolean>;
            endpointType?: pulumi.Input<string | enums.v20210901preview.EndpointType>;
            extensions?: pulumi.Input<pulumi.Input<v20210901preview.ResourceTypeExtensionArgs>[]>;
            featuresRule?: pulumi.Input<v20210901preview.ResourceTypeEndpointFeaturesRuleArgs>;
            locations?: pulumi.Input<pulumi.Input<string>[]>;
            requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
            timeout?: pulumi.Input<string>;
        }

        export interface ResourceTypeEndpointFeaturesRuleArgs {
            requiredFeaturesPolicy: pulumi.Input<string | enums.v20210901preview.FeaturesPolicy>;
        }

        export interface ResourceTypeExtensionArgs {
            endpointUri?: pulumi.Input<string>;
            extensionCategories?: pulumi.Input<pulumi.Input<string | enums.v20210901preview.ExtensionCategory>[]>;
            timeout?: pulumi.Input<string>;
        }

        export interface ResourceTypeExtensionOptionsResourceCreationBeginArgs {
            request?: pulumi.Input<pulumi.Input<string | enums.v20210901preview.ExtensionOptionType>[]>;
            response?: pulumi.Input<pulumi.Input<string | enums.v20210901preview.ExtensionOptionType>[]>;
        }

        export interface ResourceTypeRegistrationArgs {
            properties?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesArgs>;
        }

        export interface ResourceTypeRegistrationPropertiesArgs {
            allowedUnauthorizedActions?: pulumi.Input<pulumi.Input<string>[]>;
            authorizationActionMappings?: pulumi.Input<pulumi.Input<v20210901preview.AuthorizationActionMappingArgs>[]>;
            checkNameAvailabilitySpecifications?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecificationsArgs>;
            defaultApiVersion?: pulumi.Input<string>;
            disallowedActionVerbs?: pulumi.Input<pulumi.Input<string>[]>;
            enableAsyncOperation?: pulumi.Input<boolean>;
            enableThirdPartyS2S?: pulumi.Input<boolean>;
            endpoints?: pulumi.Input<pulumi.Input<v20210901preview.ResourceTypeEndpointArgs>[]>;
            extendedLocations?: pulumi.Input<pulumi.Input<v20210901preview.ExtendedLocationOptionsArgs>[]>;
            extensionOptions?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesExtensionOptionsArgs>;
            featuresRule?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesFeaturesRuleArgs>;
            identityManagement?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesIdentityManagementArgs>;
            isPureProxy?: pulumi.Input<boolean>;
            linkedAccessChecks?: pulumi.Input<pulumi.Input<v20210901preview.LinkedAccessCheckArgs>[]>;
            loggingRules?: pulumi.Input<pulumi.Input<v20210901preview.LoggingRuleArgs>[]>;
            management?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesManagementArgs>;
            marketplaceType?: pulumi.Input<string>;
            openApiConfiguration?: pulumi.Input<v20210901preview.OpenApiConfigurationArgs>;
            /**
             * The provisioned state of the resource.
             */
            provisioningState?: pulumi.Input<string | enums.v20210901preview.ProvisioningState>;
            regionality?: pulumi.Input<string | enums.v20210901preview.Regionality>;
            requestHeaderOptions?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesRequestHeaderOptionsArgs>;
            requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
            resourceConcurrencyControlOptions?: pulumi.Input<{[key: string]: pulumi.Input<v20210901preview.ResourceConcurrencyControlOptionArgs>}>;
            resourceDeletionPolicy?: pulumi.Input<string | enums.v20210901preview.ResourceDeletionPolicy>;
            resourceGraphConfiguration?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesResourceGraphConfigurationArgs>;
            resourceMovePolicy?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesResourceMovePolicyArgs>;
            routingType?: pulumi.Input<string | enums.v20210901preview.RoutingType>;
            serviceTreeInfos?: pulumi.Input<pulumi.Input<v20210901preview.ServiceTreeInfoArgs>[]>;
            subscriptionLifecycleNotificationSpecifications?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs>;
            subscriptionStateRules?: pulumi.Input<pulumi.Input<v20210901preview.SubscriptionStateRuleArgs>[]>;
            swaggerSpecifications?: pulumi.Input<pulumi.Input<v20210901preview.SwaggerSpecificationArgs>[]>;
            templateDeploymentOptions?: pulumi.Input<v20210901preview.ResourceTypeRegistrationPropertiesTemplateDeploymentOptionsArgs>;
            throttlingRules?: pulumi.Input<pulumi.Input<v20210901preview.ThrottlingRuleArgs>[]>;
        }

        export interface ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecificationsArgs {
            enableDefaultValidation?: pulumi.Input<boolean>;
            resourceTypesWithCustomValidation?: pulumi.Input<pulumi.Input<string>[]>;
        }

        export interface ResourceTypeRegistrationPropertiesExtensionOptionsArgs {
            resourceCreationBegin?: pulumi.Input<v20210901preview.ResourceTypeExtensionOptionsResourceCreationBeginArgs>;
        }

        export interface ResourceTypeRegistrationPropertiesFeaturesRuleArgs {
            requiredFeaturesPolicy: pulumi.Input<string | enums.v20210901preview.FeaturesPolicy>;
        }

        export interface ResourceTypeRegistrationPropertiesIdentityManagementArgs {
            applicationId?: pulumi.Input<string>;
            type?: pulumi.Input<string | enums.v20210901preview.IdentityManagementTypes>;
        }

        export interface ResourceTypeRegistrationPropertiesManagementArgs {
            incidentContactEmail?: pulumi.Input<string>;
            incidentRoutingService?: pulumi.Input<string>;
            incidentRoutingTeam?: pulumi.Input<string>;
            manifestOwners?: pulumi.Input<pulumi.Input<string>[]>;
            resourceAccessPolicy?: pulumi.Input<string>;
            resourceAccessRoles?: pulumi.Input<any[]>;
            schemaOwners?: pulumi.Input<pulumi.Input<string>[]>;
            serviceTreeInfos?: pulumi.Input<pulumi.Input<v20210901preview.ServiceTreeInfoArgs>[]>;
        }

        export interface ResourceTypeRegistrationPropertiesRequestHeaderOptionsArgs {
            optInHeaders?: pulumi.Input<string | enums.v20210901preview.OptInHeaderType>;
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
            subscriptionStateOverrideActions?: pulumi.Input<pulumi.Input<v20210901preview.SubscriptionStateOverrideActionArgs>[]>;
        }

        export interface ResourceTypeRegistrationPropertiesTemplateDeploymentOptionsArgs {
            preflightOptions?: pulumi.Input<pulumi.Input<string | enums.v20210901preview.PreflightOption>[]>;
            preflightSupported?: pulumi.Input<boolean>;
        }

        export interface ServiceTreeInfoArgs {
            componentId?: pulumi.Input<string>;
            readiness?: pulumi.Input<string | enums.v20210901preview.Readiness>;
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
            zoneDetails?: pulumi.Input<pulumi.Input<v20210901preview.SkuZoneDetailArgs>[]>;
            zones?: pulumi.Input<pulumi.Input<string>[]>;
        }

        export interface SkuResourcePropertiesArgs {
            /**
             * The provisioned state of the resource.
             */
            provisioningState?: pulumi.Input<string | enums.v20210901preview.ProvisioningState>;
            skuSettings: pulumi.Input<pulumi.Input<v20210901preview.SkuSettingArgs>[]>;
        }

        export interface SkuSettingArgs {
            capabilities?: pulumi.Input<pulumi.Input<v20210901preview.SkuCapabilityArgs>[]>;
            capacity?: pulumi.Input<v20210901preview.SkuSettingCapacityArgs>;
            costs?: pulumi.Input<pulumi.Input<v20210901preview.SkuCostArgs>[]>;
            family?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            locationInfo?: pulumi.Input<pulumi.Input<v20210901preview.SkuLocationInfoArgs>[]>;
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
            scaleType?: pulumi.Input<string | enums.v20210901preview.SkuScaleType>;
        }

        export interface SkuZoneDetailArgs {
            capabilities?: pulumi.Input<pulumi.Input<v20210901preview.SkuCapabilityArgs>[]>;
            name?: pulumi.Input<pulumi.Input<string>[]>;
        }

        export interface SubscriptionStateOverrideActionArgs {
            action: pulumi.Input<string | enums.v20210901preview.SubscriptionNotificationOperation>;
            state: pulumi.Input<string | enums.v20210901preview.SubscriptionTransitioningState>;
        }

        export interface SubscriptionStateRuleArgs {
            allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
            state?: pulumi.Input<string | enums.v20210901preview.SubscriptionState>;
        }

        export interface SwaggerSpecificationArgs {
            apiVersions?: pulumi.Input<pulumi.Input<string>[]>;
            swaggerSpecFolderUri?: pulumi.Input<string>;
        }

        export interface ThrottlingMetricArgs {
            interval?: pulumi.Input<string>;
            limit: pulumi.Input<number>;
            type: pulumi.Input<string | enums.v20210901preview.ThrottlingMetricType>;
        }

        export interface ThrottlingRuleArgs {
            action: pulumi.Input<string>;
            metrics: pulumi.Input<pulumi.Input<v20210901preview.ThrottlingMetricArgs>[]>;
            requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
        }

        export interface TypedErrorInfoArgs {
            type: pulumi.Input<string>;
        }

    }
}
