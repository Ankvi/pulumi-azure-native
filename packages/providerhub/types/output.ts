import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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

