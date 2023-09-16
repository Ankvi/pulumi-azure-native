import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace providerhub {
    export interface AuthorizationActionMappingResponse {
        desired?: string;
        original?: string;
    }

    export interface DefaultRolloutPropertiesResponseSpecification {
        canary?: DefaultRolloutSpecificationResponseCanary;
        expeditedRollout?: DefaultRolloutSpecificationResponseExpeditedRollout;
        highTraffic?: DefaultRolloutSpecificationResponseHighTraffic;
        lowTraffic?: DefaultRolloutSpecificationResponseLowTraffic;
        mediumTraffic?: DefaultRolloutSpecificationResponseMediumTraffic;
        providerRegistration?: DefaultRolloutSpecificationResponseProviderRegistration;
        resourceTypeRegistrations?: ResourceTypeRegistrationResponse[];
        restOfTheWorldGroupOne?: DefaultRolloutSpecificationResponseRestOfTheWorldGroupOne;
        restOfTheWorldGroupTwo?: DefaultRolloutSpecificationResponseRestOfTheWorldGroupTwo;
    }

    export interface DefaultRolloutPropertiesResponseStatus {
        completedRegions?: string[];
        failedOrSkippedRegions?: {[key: string]: ExtendedErrorInfoResponse};
        nextTrafficRegion?: string;
        nextTrafficRegionScheduledTime?: string;
        subscriptionReregistrationResult?: string;
    }

    /**
     * Properties of the rollout.
     */
    export interface DefaultRolloutResponseProperties {
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: string;
        specification?: DefaultRolloutPropertiesResponseSpecification;
        status?: DefaultRolloutPropertiesResponseStatus;
    }

    export interface DefaultRolloutSpecificationResponseCanary {
        regions?: string[];
        skipRegions?: string[];
    }

    export interface DefaultRolloutSpecificationResponseExpeditedRollout {
        /**
         * Indicates whether expedited rollout is enabled/disabled
         */
        enabled?: boolean;
    }

    export interface DefaultRolloutSpecificationResponseHighTraffic {
        regions?: string[];
        waitDuration?: string;
    }

    export interface DefaultRolloutSpecificationResponseLowTraffic {
        regions?: string[];
        waitDuration?: string;
    }

    export interface DefaultRolloutSpecificationResponseMediumTraffic {
        regions?: string[];
        waitDuration?: string;
    }

    export interface DefaultRolloutSpecificationResponseProviderRegistration {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        properties?: ProviderRegistrationResponseProperties;
        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    export interface DefaultRolloutSpecificationResponseRestOfTheWorldGroupOne {
        regions?: string[];
        waitDuration?: string;
    }

    export interface DefaultRolloutSpecificationResponseRestOfTheWorldGroupTwo {
        regions?: string[];
        waitDuration?: string;
    }

    export interface ExtendedErrorInfoResponse {
        additionalInfo?: TypedErrorInfoResponse[];
        code?: string;
        details?: ExtendedErrorInfoResponse[];
        message?: string;
        target?: string;
    }

    export interface ExtendedLocationOptionsResponse {
        supportedPolicy?: string;
        type?: string;
    }

    export interface LightHouseAuthorizationResponse {
        principalId: string;
        roleDefinitionId: string;
    }

    export interface LinkedAccessCheckResponse {
        actionName?: string;
        linkedAction?: string;
        linkedActionVerb?: string;
        linkedProperty?: string;
        linkedType?: string;
    }

    export interface LoggingRuleResponse {
        action: string;
        detailLevel: string;
        direction: string;
        hiddenPropertyPaths?: LoggingRuleResponseHiddenPropertyPaths;
    }

    export interface LoggingRuleResponseHiddenPropertyPaths {
        hiddenPathsOnRequest?: string[];
        hiddenPathsOnResponse?: string[];
    }

    export interface NotificationEndpointResponse {
        locations?: string[];
        notificationDestination?: string;
    }

    export interface NotificationRegistrationResponseProperties {
        includedEvents?: string[];
        messageScope?: string;
        notificationEndpoints?: NotificationEndpointResponse[];
        notificationMode?: string;
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: string;
    }

    export interface OpenApiConfigurationResponse {
        validation?: OpenApiValidationResponse;
    }

    export interface OpenApiValidationResponse {
        /**
         * Indicates whether a non compliance response is allowed for a LIST call
         */
        allowNoncompliantCollectionResponse?: boolean;
    }

    export interface ProviderHubMetadataResponseProviderAuthentication {
        allowedAudiences: string[];
    }

    export interface ProviderHubMetadataResponseThirdPartyProviderAuthorization {
        authorizations?: LightHouseAuthorizationResponse[];
        managedByTenantId?: string;
    }

    export interface ProviderRegistrationPropertiesResponseProviderHubMetadata {
        providerAuthentication?: ProviderHubMetadataResponseProviderAuthentication;
        providerAuthorizations?: ResourceProviderAuthorizationResponse[];
        thirdPartyProviderAuthorization?: ProviderHubMetadataResponseThirdPartyProviderAuthorization;
    }

    export interface ProviderRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications {
        softDeleteTTL?: string;
        subscriptionStateOverrideActions?: SubscriptionStateOverrideActionResponse[];
    }

    export interface ProviderRegistrationResponseProperties {
        capabilities?: ResourceProviderCapabilitiesResponse[];
        featuresRule?: ResourceProviderManifestPropertiesResponseFeaturesRule;
        management?: ResourceProviderManifestPropertiesResponseManagement;
        metadata?: any;
        namespace?: string;
        providerAuthentication?: ResourceProviderManifestPropertiesResponseProviderAuthentication;
        providerAuthorizations?: ResourceProviderAuthorizationResponse[];
        providerHubMetadata?: ProviderRegistrationPropertiesResponseProviderHubMetadata;
        providerType?: string;
        providerVersion?: string;
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: string;
        requestHeaderOptions?: ResourceProviderManifestPropertiesResponseRequestHeaderOptions;
        requiredFeatures?: string[];
        subscriptionLifecycleNotificationSpecifications?: ProviderRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications;
        templateDeploymentOptions?: ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions;
    }

    export interface ResourceConcurrencyControlOptionResponse {
        policy?: string;
    }

    export interface ResourceProviderAuthorizationResponse {
        applicationId?: string;
        managedByRoleDefinitionId?: string;
        roleDefinitionId?: string;
    }

    export interface ResourceProviderCapabilitiesResponse {
        effect: string;
        quotaId: string;
        requiredFeatures?: string[];
    }

    export interface ResourceProviderManifestPropertiesResponseFeaturesRule {
        requiredFeaturesPolicy: string;
    }

    export interface ResourceProviderManifestPropertiesResponseManagement {
        incidentContactEmail?: string;
        incidentRoutingService?: string;
        incidentRoutingTeam?: string;
        manifestOwners?: string[];
        resourceAccessPolicy?: string;
        resourceAccessRoles?: any[];
        schemaOwners?: string[];
        serviceTreeInfos?: ServiceTreeInfoResponse[];
    }

    export interface ResourceProviderManifestPropertiesResponseProviderAuthentication {
        allowedAudiences: string[];
    }

    export interface ResourceProviderManifestPropertiesResponseRequestHeaderOptions {
        optInHeaders?: string;
    }

    export interface ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions {
        preflightOptions?: string[];
        preflightSupported?: boolean;
    }

    export interface ResourceTypeEndpointResponse {
        apiVersions?: string[];
        enabled?: boolean;
        endpointType?: string;
        extensions?: ResourceTypeExtensionResponse[];
        featuresRule?: ResourceTypeEndpointResponseFeaturesRule;
        locations?: string[];
        requiredFeatures?: string[];
        timeout?: string;
    }

    export interface ResourceTypeEndpointResponseFeaturesRule {
        requiredFeaturesPolicy: string;
    }

    export interface ResourceTypeExtensionOptionsResponseResourceCreationBegin {
        request?: string[];
        response?: string[];
    }

    export interface ResourceTypeExtensionResponse {
        endpointUri?: string;
        extensionCategories?: string[];
        timeout?: string;
    }

    export interface ResourceTypeRegistrationPropertiesResponseCheckNameAvailabilitySpecifications {
        enableDefaultValidation?: boolean;
        resourceTypesWithCustomValidation?: string[];
    }

    export interface ResourceTypeRegistrationPropertiesResponseExtensionOptions {
        resourceCreationBegin?: ResourceTypeExtensionOptionsResponseResourceCreationBegin;
    }

    export interface ResourceTypeRegistrationPropertiesResponseFeaturesRule {
        requiredFeaturesPolicy: string;
    }

    export interface ResourceTypeRegistrationPropertiesResponseIdentityManagement {
        applicationId?: string;
        type?: string;
    }

    export interface ResourceTypeRegistrationPropertiesResponseManagement {
        incidentContactEmail?: string;
        incidentRoutingService?: string;
        incidentRoutingTeam?: string;
        manifestOwners?: string[];
        resourceAccessPolicy?: string;
        resourceAccessRoles?: any[];
        schemaOwners?: string[];
        serviceTreeInfos?: ServiceTreeInfoResponse[];
    }

    export interface ResourceTypeRegistrationPropertiesResponseRequestHeaderOptions {
        optInHeaders?: string;
    }

    export interface ResourceTypeRegistrationPropertiesResponseResourceGraphConfiguration {
        apiVersion?: string;
        enabled?: boolean;
    }

    export interface ResourceTypeRegistrationPropertiesResponseResourceMovePolicy {
        crossResourceGroupMoveEnabled?: boolean;
        crossSubscriptionMoveEnabled?: boolean;
        validationRequired?: boolean;
    }

    export interface ResourceTypeRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications {
        softDeleteTTL?: string;
        subscriptionStateOverrideActions?: SubscriptionStateOverrideActionResponse[];
    }

    export interface ResourceTypeRegistrationPropertiesResponseTemplateDeploymentOptions {
        preflightOptions?: string[];
        preflightSupported?: boolean;
    }

    export interface ResourceTypeRegistrationResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        properties?: ResourceTypeRegistrationResponseProperties;
        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    export interface ResourceTypeRegistrationResponseProperties {
        allowedUnauthorizedActions?: string[];
        authorizationActionMappings?: AuthorizationActionMappingResponse[];
        checkNameAvailabilitySpecifications?: ResourceTypeRegistrationPropertiesResponseCheckNameAvailabilitySpecifications;
        defaultApiVersion?: string;
        disallowedActionVerbs?: string[];
        enableAsyncOperation?: boolean;
        enableThirdPartyS2S?: boolean;
        endpoints?: ResourceTypeEndpointResponse[];
        extendedLocations?: ExtendedLocationOptionsResponse[];
        extensionOptions?: ResourceTypeRegistrationPropertiesResponseExtensionOptions;
        featuresRule?: ResourceTypeRegistrationPropertiesResponseFeaturesRule;
        identityManagement?: ResourceTypeRegistrationPropertiesResponseIdentityManagement;
        isPureProxy?: boolean;
        linkedAccessChecks?: LinkedAccessCheckResponse[];
        loggingRules?: LoggingRuleResponse[];
        management?: ResourceTypeRegistrationPropertiesResponseManagement;
        marketplaceType?: string;
        openApiConfiguration?: OpenApiConfigurationResponse;
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: string;
        regionality?: string;
        requestHeaderOptions?: ResourceTypeRegistrationPropertiesResponseRequestHeaderOptions;
        requiredFeatures?: string[];
        resourceConcurrencyControlOptions?: {[key: string]: ResourceConcurrencyControlOptionResponse};
        resourceDeletionPolicy?: string;
        resourceGraphConfiguration?: ResourceTypeRegistrationPropertiesResponseResourceGraphConfiguration;
        resourceMovePolicy?: ResourceTypeRegistrationPropertiesResponseResourceMovePolicy;
        routingType?: string;
        serviceTreeInfos?: ServiceTreeInfoResponse[];
        subscriptionLifecycleNotificationSpecifications?: ResourceTypeRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications;
        subscriptionStateRules?: SubscriptionStateRuleResponse[];
        swaggerSpecifications?: SwaggerSpecificationResponse[];
        templateDeploymentOptions?: ResourceTypeRegistrationPropertiesResponseTemplateDeploymentOptions;
        throttlingRules?: ThrottlingRuleResponse[];
    }

    export interface ServiceTreeInfoResponse {
        componentId?: string;
        readiness?: string;
        serviceId?: string;
    }

    export interface SkuCapabilityResponse {
        name: string;
        value: string;
    }

    export interface SkuCostResponse {
        extendedUnit?: string;
        meterId: string;
        quantity?: number;
    }

    export interface SkuLocationInfoResponse {
        extendedLocations?: string[];
        location: string;
        type?: string;
        zoneDetails?: SkuZoneDetailResponse[];
        zones?: string[];
    }

    export interface SkuResourceResponseProperties {
        /**
         * The provisioned state of the resource.
         */
        provisioningState?: string;
        skuSettings: SkuSettingResponse[];
    }

    export interface SkuSettingResponse {
        capabilities?: SkuCapabilityResponse[];
        capacity?: SkuSettingResponseCapacity;
        costs?: SkuCostResponse[];
        family?: string;
        kind?: string;
        locationInfo?: SkuLocationInfoResponse[];
        locations?: string[];
        name: string;
        requiredFeatures?: string[];
        requiredQuotaIds?: string[];
        size?: string;
        tier?: string;
    }

    export interface SkuSettingResponseCapacity {
        default?: number;
        maximum?: number;
        minimum: number;
        scaleType?: string;
    }

    export interface SkuZoneDetailResponse {
        capabilities?: SkuCapabilityResponse[];
        name?: string[];
    }

    export interface SubscriptionStateOverrideActionResponse {
        action: string;
        state: string;
    }

    export interface SubscriptionStateRuleResponse {
        allowedActions?: string[];
        state?: string;
    }

    export interface SwaggerSpecificationResponse {
        apiVersions?: string[];
        swaggerSpecFolderUri?: string;
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

    export interface ThrottlingMetricResponse {
        interval?: string;
        limit: number;
        type: string;
    }

    export interface ThrottlingRuleResponse {
        action: string;
        metrics: ThrottlingMetricResponse[];
        requiredFeatures?: string[];
    }

    export interface TypedErrorInfoResponse {
        info: any;
        type: string;
    }

    export namespace v20210501preview {
        /**
         * Display information of the operation.
         */
        export interface OperationsDefinitionResponseDisplay {
            description: string;
            operation: string;
            provider: string;
            resource: string;
        }

    }

    export namespace v20210901preview {
        export interface AuthorizationActionMappingResponse {
            desired?: string;
            original?: string;
        }

        export interface DefaultRolloutPropertiesResponseSpecification {
            canary?: v20210901preview.DefaultRolloutSpecificationResponseCanary;
            expeditedRollout?: v20210901preview.DefaultRolloutSpecificationResponseExpeditedRollout;
            highTraffic?: v20210901preview.DefaultRolloutSpecificationResponseHighTraffic;
            lowTraffic?: v20210901preview.DefaultRolloutSpecificationResponseLowTraffic;
            mediumTraffic?: v20210901preview.DefaultRolloutSpecificationResponseMediumTraffic;
            providerRegistration?: v20210901preview.DefaultRolloutSpecificationResponseProviderRegistration;
            resourceTypeRegistrations?: v20210901preview.ResourceTypeRegistrationResponse[];
            restOfTheWorldGroupOne?: v20210901preview.DefaultRolloutSpecificationResponseRestOfTheWorldGroupOne;
            restOfTheWorldGroupTwo?: v20210901preview.DefaultRolloutSpecificationResponseRestOfTheWorldGroupTwo;
        }

        export interface DefaultRolloutPropertiesResponseStatus {
            completedRegions?: string[];
            failedOrSkippedRegions?: {[key: string]: v20210901preview.ExtendedErrorInfoResponse};
            nextTrafficRegion?: string;
            nextTrafficRegionScheduledTime?: string;
            subscriptionReregistrationResult?: string;
        }

        /**
         * Properties of the rollout.
         */
        export interface DefaultRolloutResponseProperties {
            /**
             * The provisioned state of the resource.
             */
            provisioningState?: string;
            specification?: v20210901preview.DefaultRolloutPropertiesResponseSpecification;
            status?: v20210901preview.DefaultRolloutPropertiesResponseStatus;
        }

        export interface DefaultRolloutSpecificationResponseCanary {
            regions?: string[];
            skipRegions?: string[];
        }

        export interface DefaultRolloutSpecificationResponseExpeditedRollout {
            /**
             * Indicates whether expedited rollout is enabled/disabled
             */
            enabled?: boolean;
        }

        export interface DefaultRolloutSpecificationResponseHighTraffic {
            regions?: string[];
            waitDuration?: string;
        }

        export interface DefaultRolloutSpecificationResponseLowTraffic {
            regions?: string[];
            waitDuration?: string;
        }

        export interface DefaultRolloutSpecificationResponseMediumTraffic {
            regions?: string[];
            waitDuration?: string;
        }

        export interface DefaultRolloutSpecificationResponseProviderRegistration {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            properties?: v20210901preview.ProviderRegistrationResponseProperties;
            /**
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20210901preview.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
        }

        export interface DefaultRolloutSpecificationResponseRestOfTheWorldGroupOne {
            regions?: string[];
            waitDuration?: string;
        }

        export interface DefaultRolloutSpecificationResponseRestOfTheWorldGroupTwo {
            regions?: string[];
            waitDuration?: string;
        }

        export interface ExtendedErrorInfoResponse {
            additionalInfo?: v20210901preview.TypedErrorInfoResponse[];
            code?: string;
            details?: v20210901preview.ExtendedErrorInfoResponse[];
            message?: string;
            target?: string;
        }

        export interface ExtendedLocationOptionsResponse {
            supportedPolicy?: string;
            type?: string;
        }

        export interface LightHouseAuthorizationResponse {
            principalId: string;
            roleDefinitionId: string;
        }

        export interface LinkedAccessCheckResponse {
            actionName?: string;
            linkedAction?: string;
            linkedActionVerb?: string;
            linkedProperty?: string;
            linkedType?: string;
        }

        export interface LoggingRuleResponse {
            action: string;
            detailLevel: string;
            direction: string;
            hiddenPropertyPaths?: v20210901preview.LoggingRuleResponseHiddenPropertyPaths;
        }

        export interface LoggingRuleResponseHiddenPropertyPaths {
            hiddenPathsOnRequest?: string[];
            hiddenPathsOnResponse?: string[];
        }

        export interface NotificationEndpointResponse {
            locations?: string[];
            notificationDestination?: string;
        }

        export interface NotificationRegistrationResponseProperties {
            includedEvents?: string[];
            messageScope?: string;
            notificationEndpoints?: v20210901preview.NotificationEndpointResponse[];
            notificationMode?: string;
            /**
             * The provisioned state of the resource.
             */
            provisioningState?: string;
        }

        export interface OpenApiConfigurationResponse {
            validation?: v20210901preview.OpenApiValidationResponse;
        }

        export interface OpenApiValidationResponse {
            /**
             * Indicates whether a non compliance response is allowed for a LIST call
             */
            allowNoncompliantCollectionResponse?: boolean;
        }

        export interface ProviderHubMetadataResponseProviderAuthentication {
            allowedAudiences: string[];
        }

        export interface ProviderHubMetadataResponseThirdPartyProviderAuthorization {
            authorizations?: v20210901preview.LightHouseAuthorizationResponse[];
            managedByTenantId?: string;
        }

        export interface ProviderRegistrationPropertiesResponseProviderHubMetadata {
            providerAuthentication?: v20210901preview.ProviderHubMetadataResponseProviderAuthentication;
            providerAuthorizations?: v20210901preview.ResourceProviderAuthorizationResponse[];
            thirdPartyProviderAuthorization?: v20210901preview.ProviderHubMetadataResponseThirdPartyProviderAuthorization;
        }

        export interface ProviderRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications {
            softDeleteTTL?: string;
            subscriptionStateOverrideActions?: v20210901preview.SubscriptionStateOverrideActionResponse[];
        }

        export interface ProviderRegistrationResponseProperties {
            capabilities?: v20210901preview.ResourceProviderCapabilitiesResponse[];
            featuresRule?: v20210901preview.ResourceProviderManifestPropertiesResponseFeaturesRule;
            management?: v20210901preview.ResourceProviderManifestPropertiesResponseManagement;
            metadata?: any;
            namespace?: string;
            providerAuthentication?: v20210901preview.ResourceProviderManifestPropertiesResponseProviderAuthentication;
            providerAuthorizations?: v20210901preview.ResourceProviderAuthorizationResponse[];
            providerHubMetadata?: v20210901preview.ProviderRegistrationPropertiesResponseProviderHubMetadata;
            providerType?: string;
            providerVersion?: string;
            /**
             * The provisioned state of the resource.
             */
            provisioningState?: string;
            requestHeaderOptions?: v20210901preview.ResourceProviderManifestPropertiesResponseRequestHeaderOptions;
            requiredFeatures?: string[];
            subscriptionLifecycleNotificationSpecifications?: v20210901preview.ProviderRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications;
            templateDeploymentOptions?: v20210901preview.ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions;
        }

        export interface ResourceConcurrencyControlOptionResponse {
            policy?: string;
        }

        export interface ResourceProviderAuthorizationResponse {
            applicationId?: string;
            managedByRoleDefinitionId?: string;
            roleDefinitionId?: string;
        }

        export interface ResourceProviderCapabilitiesResponse {
            effect: string;
            quotaId: string;
            requiredFeatures?: string[];
        }

        export interface ResourceProviderManifestPropertiesResponseFeaturesRule {
            requiredFeaturesPolicy: string;
        }

        export interface ResourceProviderManifestPropertiesResponseManagement {
            incidentContactEmail?: string;
            incidentRoutingService?: string;
            incidentRoutingTeam?: string;
            manifestOwners?: string[];
            resourceAccessPolicy?: string;
            resourceAccessRoles?: any[];
            schemaOwners?: string[];
            serviceTreeInfos?: v20210901preview.ServiceTreeInfoResponse[];
        }

        export interface ResourceProviderManifestPropertiesResponseProviderAuthentication {
            allowedAudiences: string[];
        }

        export interface ResourceProviderManifestPropertiesResponseRequestHeaderOptions {
            optInHeaders?: string;
        }

        export interface ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions {
            preflightOptions?: string[];
            preflightSupported?: boolean;
        }

        export interface ResourceTypeEndpointResponse {
            apiVersions?: string[];
            enabled?: boolean;
            endpointType?: string;
            extensions?: v20210901preview.ResourceTypeExtensionResponse[];
            featuresRule?: v20210901preview.ResourceTypeEndpointResponseFeaturesRule;
            locations?: string[];
            requiredFeatures?: string[];
            timeout?: string;
        }

        export interface ResourceTypeEndpointResponseFeaturesRule {
            requiredFeaturesPolicy: string;
        }

        export interface ResourceTypeExtensionOptionsResponseResourceCreationBegin {
            request?: string[];
            response?: string[];
        }

        export interface ResourceTypeExtensionResponse {
            endpointUri?: string;
            extensionCategories?: string[];
            timeout?: string;
        }

        export interface ResourceTypeRegistrationPropertiesResponseCheckNameAvailabilitySpecifications {
            enableDefaultValidation?: boolean;
            resourceTypesWithCustomValidation?: string[];
        }

        export interface ResourceTypeRegistrationPropertiesResponseExtensionOptions {
            resourceCreationBegin?: v20210901preview.ResourceTypeExtensionOptionsResponseResourceCreationBegin;
        }

        export interface ResourceTypeRegistrationPropertiesResponseFeaturesRule {
            requiredFeaturesPolicy: string;
        }

        export interface ResourceTypeRegistrationPropertiesResponseIdentityManagement {
            applicationId?: string;
            type?: string;
        }

        export interface ResourceTypeRegistrationPropertiesResponseManagement {
            incidentContactEmail?: string;
            incidentRoutingService?: string;
            incidentRoutingTeam?: string;
            manifestOwners?: string[];
            resourceAccessPolicy?: string;
            resourceAccessRoles?: any[];
            schemaOwners?: string[];
            serviceTreeInfos?: v20210901preview.ServiceTreeInfoResponse[];
        }

        export interface ResourceTypeRegistrationPropertiesResponseRequestHeaderOptions {
            optInHeaders?: string;
        }

        export interface ResourceTypeRegistrationPropertiesResponseResourceGraphConfiguration {
            apiVersion?: string;
            enabled?: boolean;
        }

        export interface ResourceTypeRegistrationPropertiesResponseResourceMovePolicy {
            crossResourceGroupMoveEnabled?: boolean;
            crossSubscriptionMoveEnabled?: boolean;
            validationRequired?: boolean;
        }

        export interface ResourceTypeRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications {
            softDeleteTTL?: string;
            subscriptionStateOverrideActions?: v20210901preview.SubscriptionStateOverrideActionResponse[];
        }

        export interface ResourceTypeRegistrationPropertiesResponseTemplateDeploymentOptions {
            preflightOptions?: string[];
            preflightSupported?: boolean;
        }

        export interface ResourceTypeRegistrationResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            properties?: v20210901preview.ResourceTypeRegistrationResponseProperties;
            /**
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20210901preview.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
        }

        export interface ResourceTypeRegistrationResponseProperties {
            allowedUnauthorizedActions?: string[];
            authorizationActionMappings?: v20210901preview.AuthorizationActionMappingResponse[];
            checkNameAvailabilitySpecifications?: v20210901preview.ResourceTypeRegistrationPropertiesResponseCheckNameAvailabilitySpecifications;
            defaultApiVersion?: string;
            disallowedActionVerbs?: string[];
            enableAsyncOperation?: boolean;
            enableThirdPartyS2S?: boolean;
            endpoints?: v20210901preview.ResourceTypeEndpointResponse[];
            extendedLocations?: v20210901preview.ExtendedLocationOptionsResponse[];
            extensionOptions?: v20210901preview.ResourceTypeRegistrationPropertiesResponseExtensionOptions;
            featuresRule?: v20210901preview.ResourceTypeRegistrationPropertiesResponseFeaturesRule;
            identityManagement?: v20210901preview.ResourceTypeRegistrationPropertiesResponseIdentityManagement;
            isPureProxy?: boolean;
            linkedAccessChecks?: v20210901preview.LinkedAccessCheckResponse[];
            loggingRules?: v20210901preview.LoggingRuleResponse[];
            management?: v20210901preview.ResourceTypeRegistrationPropertiesResponseManagement;
            marketplaceType?: string;
            openApiConfiguration?: v20210901preview.OpenApiConfigurationResponse;
            /**
             * The provisioned state of the resource.
             */
            provisioningState?: string;
            regionality?: string;
            requestHeaderOptions?: v20210901preview.ResourceTypeRegistrationPropertiesResponseRequestHeaderOptions;
            requiredFeatures?: string[];
            resourceConcurrencyControlOptions?: {[key: string]: v20210901preview.ResourceConcurrencyControlOptionResponse};
            resourceDeletionPolicy?: string;
            resourceGraphConfiguration?: v20210901preview.ResourceTypeRegistrationPropertiesResponseResourceGraphConfiguration;
            resourceMovePolicy?: v20210901preview.ResourceTypeRegistrationPropertiesResponseResourceMovePolicy;
            routingType?: string;
            serviceTreeInfos?: v20210901preview.ServiceTreeInfoResponse[];
            subscriptionLifecycleNotificationSpecifications?: v20210901preview.ResourceTypeRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications;
            subscriptionStateRules?: v20210901preview.SubscriptionStateRuleResponse[];
            swaggerSpecifications?: v20210901preview.SwaggerSpecificationResponse[];
            templateDeploymentOptions?: v20210901preview.ResourceTypeRegistrationPropertiesResponseTemplateDeploymentOptions;
            throttlingRules?: v20210901preview.ThrottlingRuleResponse[];
        }

        export interface ServiceTreeInfoResponse {
            componentId?: string;
            readiness?: string;
            serviceId?: string;
        }

        export interface SkuCapabilityResponse {
            name: string;
            value: string;
        }

        export interface SkuCostResponse {
            extendedUnit?: string;
            meterId: string;
            quantity?: number;
        }

        export interface SkuLocationInfoResponse {
            extendedLocations?: string[];
            location: string;
            type?: string;
            zoneDetails?: v20210901preview.SkuZoneDetailResponse[];
            zones?: string[];
        }

        export interface SkuResourceResponseProperties {
            /**
             * The provisioned state of the resource.
             */
            provisioningState?: string;
            skuSettings: v20210901preview.SkuSettingResponse[];
        }

        export interface SkuSettingResponse {
            capabilities?: v20210901preview.SkuCapabilityResponse[];
            capacity?: v20210901preview.SkuSettingResponseCapacity;
            costs?: v20210901preview.SkuCostResponse[];
            family?: string;
            kind?: string;
            locationInfo?: v20210901preview.SkuLocationInfoResponse[];
            locations?: string[];
            name: string;
            requiredFeatures?: string[];
            requiredQuotaIds?: string[];
            size?: string;
            tier?: string;
        }

        export interface SkuSettingResponseCapacity {
            default?: number;
            maximum?: number;
            minimum: number;
            scaleType?: string;
        }

        export interface SkuZoneDetailResponse {
            capabilities?: v20210901preview.SkuCapabilityResponse[];
            name?: string[];
        }

        export interface SubscriptionStateOverrideActionResponse {
            action: string;
            state: string;
        }

        export interface SubscriptionStateRuleResponse {
            allowedActions?: string[];
            state?: string;
        }

        export interface SwaggerSpecificationResponse {
            apiVersions?: string[];
            swaggerSpecFolderUri?: string;
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

        export interface ThrottlingMetricResponse {
            interval?: string;
            limit: number;
            type: string;
        }

        export interface ThrottlingRuleResponse {
            action: string;
            metrics: v20210901preview.ThrottlingMetricResponse[];
            requiredFeatures?: string[];
        }

        export interface TypedErrorInfoResponse {
            info: any;
            type: string;
        }

    }
}
