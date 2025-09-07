import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AdditionalAuthorizationResponse {
    applicationId?: string;
    roleDefinitionId?: string;
}

export interface AllowedResourceNameResponse {
    /**
     * Get action verb.
     */
    getActionVerb?: string;
    /**
     * Resource name.
     */
    name?: string;
}

export interface AllowedUnauthorizedActionsExtensionResponse {
    /**
     * The action.
     */
    action?: string;
    /**
     * The intent.
     */
    intent?: string;
}

export interface ApiProfileResponse {
    /**
     * Api version.
     */
    apiVersion?: string;
    /**
     * Profile version.
     */
    profileVersion?: string;
}

export interface ApplicationDataAuthorizationResponse {
    /**
     * The resource types from the defined resource types in the provider namespace that the application can access. If no resource types are specified and the role is service owner, the default is * which is all resource types
     */
    resourceTypes?: string[];
    /**
     * The ownership role the application has on the resource types. The service owner role gives the application owner permissions. The limited owner role gives elevated permissions but does not allow all the permissions of a service owner, such as read/write on internal metadata.
     */
    role: string;
}

export interface ApplicationProviderAuthorizationResponse {
    /**
     * The managed by role definition ID for the application.
     */
    managedByRoleDefinitionId?: string;
    /**
     * The role definition ID for the application.
     */
    roleDefinitionId?: string;
}

export interface AsyncOperationPollingRulesResponse {
    /**
     * The additional options.
     */
    additionalOptions?: string;
    /**
     * The authorization actions.
     */
    authorizationActions?: string[];
}

export interface AsyncTimeoutRuleResponse {
    actionName?: string;
    /**
     * This is a TimeSpan property
     */
    timeout?: string;
}

export interface AuthorizationActionMappingResponse {
    /**
     * The desired action name.
     */
    desired?: string;
    /**
     * The original action name.
     */
    original?: string;
}

export interface AuthorizedApplicationPropertiesResponse {
    /**
     * The authorizations that determine the level of data access permissions on the specified resource types.
     */
    dataAuthorizations?: ApplicationDataAuthorizationResponse[];
    providerAuthorization?: ApplicationProviderAuthorizationResponse;
    /**
     * The provisioning state.
     */
    provisioningState: string;
}

export interface CustomRolloutPropertiesResponse {
    /**
     * The provisioned state of the resource.
     */
    provisioningState: string;
    /**
     * The specification.
     */
    specification: CustomRolloutPropertiesResponseSpecification;
    /**
     * The status.
     */
    status?: CustomRolloutPropertiesResponseStatus;
}
/**
 * customRolloutPropertiesResponseProvideDefaults sets the appropriate defaults for CustomRolloutPropertiesResponse
 */
export function customRolloutPropertiesResponseProvideDefaults(val: CustomRolloutPropertiesResponse): CustomRolloutPropertiesResponse {
    return {
        ...val,
        specification: customRolloutPropertiesResponseSpecificationProvideDefaults(val.specification),
    };
}

/**
 * The specification.
 */
export interface CustomRolloutPropertiesResponseSpecification {
    /**
     * The auto provisioning configuration.
     */
    autoProvisionConfig?: CustomRolloutSpecificationResponseAutoProvisionConfig;
    /**
     * The canary region configuration.
     */
    canary?: CustomRolloutSpecificationResponseCanary;
    /**
     * The provider registration.
     */
    providerRegistration?: CustomRolloutSpecificationResponseProviderRegistration;
    /**
     * Whether refreshing subscription registration is enabled or disabled.
     */
    refreshSubscriptionRegistration?: boolean;
    /**
     * The list of ARM regions scoped for the release.
     */
    releaseScopes?: string[];
    /**
     * The resource type registrations.
     */
    resourceTypeRegistrations?: ResourceTypeRegistrationResponse[];
    /**
     * Whether release scope validation should be skipped.
     */
    skipReleaseScopeValidation?: boolean;
}
/**
 * customRolloutPropertiesResponseSpecificationProvideDefaults sets the appropriate defaults for CustomRolloutPropertiesResponseSpecification
 */
export function customRolloutPropertiesResponseSpecificationProvideDefaults(val: CustomRolloutPropertiesResponseSpecification): CustomRolloutPropertiesResponseSpecification {
    return {
        ...val,
        providerRegistration: (val.providerRegistration ? customRolloutSpecificationResponseProviderRegistrationProvideDefaults(val.providerRegistration) : undefined),
    };
}

/**
 * The status.
 */
export interface CustomRolloutPropertiesResponseStatus {
    /**
     * The completed regions.
     */
    completedRegions?: string[];
    /**
     * The failed or skipped regions.
     */
    failedOrSkippedRegions?: {[key: string]: ExtendedErrorInfoResponse};
    /**
     * The manifest checkin status.
     */
    manifestCheckinStatus?: CustomRolloutStatusResponseManifestCheckinStatus;
}

/**
 * The auto provisioning configuration.
 */
export interface CustomRolloutSpecificationResponseAutoProvisionConfig {
    resourceGraph?: boolean;
    storage?: boolean;
}

/**
 * The canary region configuration.
 */
export interface CustomRolloutSpecificationResponseCanary {
    regions?: string[];
}

/**
 * The provider registration.
 */
export interface CustomRolloutSpecificationResponseProviderRegistration {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * Provider registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: string;
    /**
     * The name of the resource
     */
    name: string;
    properties?: ProviderRegistrationPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}
/**
 * customRolloutSpecificationResponseProviderRegistrationProvideDefaults sets the appropriate defaults for CustomRolloutSpecificationResponseProviderRegistration
 */
export function customRolloutSpecificationResponseProviderRegistrationProvideDefaults(val: CustomRolloutSpecificationResponseProviderRegistration): CustomRolloutSpecificationResponseProviderRegistration {
    return {
        ...val,
        kind: (val.kind) ?? "Managed",
    };
}

/**
 * The manifest checkin status.
 */
export interface CustomRolloutStatusResponseManifestCheckinStatus {
    /**
     * The commit id.
     */
    commitId?: string;
    /**
     * Whether the manifest is checked in.
     */
    isCheckedIn: boolean;
    /**
     * The pull request.
     */
    pullRequest?: string;
    /**
     * The status message.
     */
    statusMessage: string;
}

export interface DefaultRolloutPropertiesResponse {
    /**
     * The provisioned state of the resource.
     */
    provisioningState: string;
    /**
     * The default rollout specification.
     */
    specification?: DefaultRolloutPropertiesResponseSpecification;
    /**
     * The default rollout status.
     */
    status?: DefaultRolloutPropertiesResponseStatus;
}
/**
 * defaultRolloutPropertiesResponseProvideDefaults sets the appropriate defaults for DefaultRolloutPropertiesResponse
 */
export function defaultRolloutPropertiesResponseProvideDefaults(val: DefaultRolloutPropertiesResponse): DefaultRolloutPropertiesResponse {
    return {
        ...val,
        specification: (val.specification ? defaultRolloutPropertiesResponseSpecificationProvideDefaults(val.specification) : undefined),
    };
}

/**
 * The default rollout specification.
 */
export interface DefaultRolloutPropertiesResponseSpecification {
    /**
     * The auto provisioning config.
     */
    autoProvisionConfig?: DefaultRolloutSpecificationResponseAutoProvisionConfig;
    /**
     * The canary traffic region configuration.
     */
    canary?: DefaultRolloutSpecificationResponseCanary;
    /**
     * The expedited rollout definition.
     */
    expeditedRollout?: DefaultRolloutSpecificationResponseExpeditedRollout;
    /**
     * The high traffic region configuration.
     */
    highTraffic?: DefaultRolloutSpecificationResponseHighTraffic;
    /**
     * The low traffic region configuration.
     */
    lowTraffic?: DefaultRolloutSpecificationResponseLowTraffic;
    /**
     * The medium traffic region configuration.
     */
    mediumTraffic?: DefaultRolloutSpecificationResponseMediumTraffic;
    /**
     * The provider registration.
     */
    providerRegistration?: DefaultRolloutSpecificationResponseProviderRegistration;
    /**
     * The resource type registrations.
     */
    resourceTypeRegistrations?: ResourceTypeRegistrationResponse[];
    /**
     * The rest of the world group one region configuration.
     */
    restOfTheWorldGroupOne?: DefaultRolloutSpecificationResponseRestOfTheWorldGroupOne;
    /**
     * The rest of the world group two region configuration.
     */
    restOfTheWorldGroupTwo?: DefaultRolloutSpecificationResponseRestOfTheWorldGroupTwo;
}
/**
 * defaultRolloutPropertiesResponseSpecificationProvideDefaults sets the appropriate defaults for DefaultRolloutPropertiesResponseSpecification
 */
export function defaultRolloutPropertiesResponseSpecificationProvideDefaults(val: DefaultRolloutPropertiesResponseSpecification): DefaultRolloutPropertiesResponseSpecification {
    return {
        ...val,
        providerRegistration: (val.providerRegistration ? defaultRolloutSpecificationResponseProviderRegistrationProvideDefaults(val.providerRegistration) : undefined),
    };
}

/**
 * The default rollout status.
 */
export interface DefaultRolloutPropertiesResponseStatus {
    /**
     * The completed regions.
     */
    completedRegions?: string[];
    /**
     * The failed or skipped regions.
     */
    failedOrSkippedRegions?: {[key: string]: ExtendedErrorInfoResponse};
    /**
     * The manifest checkin status.
     */
    manifestCheckinStatus?: DefaultRolloutStatusResponseManifestCheckinStatus;
    /**
     * The next traffic region.
     */
    nextTrafficRegion?: string;
    /**
     * The next traffic region scheduled time.
     */
    nextTrafficRegionScheduledTime?: string;
    /**
     * The subscription reregistration result.
     */
    subscriptionReregistrationResult?: string;
}

/**
 * The auto provisioning config.
 */
export interface DefaultRolloutSpecificationResponseAutoProvisionConfig {
    /**
     * Whether auto provisioning for resource graph is enabled.
     */
    resourceGraph?: boolean;
    /**
     * Whether auto provisioning for storage is enabled.
     */
    storage?: boolean;
}

/**
 * The canary traffic region configuration.
 */
export interface DefaultRolloutSpecificationResponseCanary {
    /**
     * The regions.
     */
    regions?: string[];
    /**
     * The skip regions.
     */
    skipRegions?: string[];
}

/**
 * The expedited rollout definition.
 */
export interface DefaultRolloutSpecificationResponseExpeditedRollout {
    /**
     * Indicates whether expedited rollout is enabled/disabled
     */
    enabled?: boolean;
}

/**
 * The high traffic region configuration.
 */
export interface DefaultRolloutSpecificationResponseHighTraffic {
    regions?: string[];
    /**
     * The wait duration.
     */
    waitDuration?: string;
}

/**
 * The low traffic region configuration.
 */
export interface DefaultRolloutSpecificationResponseLowTraffic {
    regions?: string[];
    /**
     * The wait duration.
     */
    waitDuration?: string;
}

/**
 * The medium traffic region configuration.
 */
export interface DefaultRolloutSpecificationResponseMediumTraffic {
    regions?: string[];
    /**
     * The wait duration.
     */
    waitDuration?: string;
}

/**
 * The provider registration.
 */
export interface DefaultRolloutSpecificationResponseProviderRegistration {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * Provider registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: string;
    /**
     * The name of the resource
     */
    name: string;
    properties?: ProviderRegistrationPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}
/**
 * defaultRolloutSpecificationResponseProviderRegistrationProvideDefaults sets the appropriate defaults for DefaultRolloutSpecificationResponseProviderRegistration
 */
export function defaultRolloutSpecificationResponseProviderRegistrationProvideDefaults(val: DefaultRolloutSpecificationResponseProviderRegistration): DefaultRolloutSpecificationResponseProviderRegistration {
    return {
        ...val,
        kind: (val.kind) ?? "Managed",
    };
}

/**
 * The rest of the world group one region configuration.
 */
export interface DefaultRolloutSpecificationResponseRestOfTheWorldGroupOne {
    regions?: string[];
    /**
     * The wait duration.
     */
    waitDuration?: string;
}

/**
 * The rest of the world group two region configuration.
 */
export interface DefaultRolloutSpecificationResponseRestOfTheWorldGroupTwo {
    regions?: string[];
    /**
     * The wait duration.
     */
    waitDuration?: string;
}

/**
 * The manifest checkin status.
 */
export interface DefaultRolloutStatusResponseManifestCheckinStatus {
    /**
     * The commit id.
     */
    commitId?: string;
    /**
     * Whether the manifest is checked in.
     */
    isCheckedIn: boolean;
    /**
     * The pull request.
     */
    pullRequest?: string;
    /**
     * The status message.
     */
    statusMessage: string;
}

export interface DeleteDependencyResponse {
    /**
     * Linked property.
     */
    linkedProperty?: string;
    /**
     * Linked type.
     */
    linkedType?: string;
    /**
     * Required features.
     */
    requiredFeatures?: string[];
}

export interface EndpointInformationResponse {
    /**
     * The endpoint.
     */
    endpoint?: string;
    /**
     * The endpoint type.
     */
    endpointType?: string;
    /**
     * The schema version.
     */
    schemaVersion?: string;
}

/**
 * Error information.
 */
export interface ExtendedErrorInfoResponse {
    /**
     * The additional error information.
     */
    additionalInfo?: TypedErrorInfoResponse[];
    /**
     * The error code.
     */
    code?: string;
    /**
     * The error details.
     */
    details?: ExtendedErrorInfoResponse[];
    /**
     * The error message.
     */
    message?: string;
    /**
     * The target of the error.
     */
    target?: string;
}

export interface ExtendedLocationOptionsResponse {
    supportedPolicy?: string;
    /**
     * The type.
     */
    type?: string;
}

export interface FanoutLinkedNotificationRuleResponse {
    /**
     * The actions.
     */
    actions?: string[];
    /**
     * The dsts configuration.
     */
    dstsConfiguration?: FanoutLinkedNotificationRuleResponseDstsConfiguration;
    /**
     * The endpoints.
     */
    endpoints?: ResourceProviderEndpointResponse[];
    /**
     * The token auth configuration.
     */
    tokenAuthConfiguration?: TokenAuthConfigurationResponse;
}

/**
 * The dsts configuration.
 */
export interface FanoutLinkedNotificationRuleResponseDstsConfiguration {
    /**
     * This is a URI property.
     */
    serviceDnsName?: string;
    /**
     * The service name.
     */
    serviceName: string;
}

export interface FilterRuleResponse {
    /**
     * The endpoint information.
     */
    endpointInformation?: EndpointInformationResponse[];
    /**
     * The filter query.
     */
    filterQuery?: string;
}

export interface LegacyDisallowedConditionResponse {
    /**
     * The disallowed legacy operations.
     */
    disallowedLegacyOperations?: string[];
    /**
     * Feature string.
     */
    feature?: string;
}

export interface LightHouseAuthorizationResponse {
    /**
     * The principal id.
     */
    principalId: string;
    /**
     * The role definition id.
     */
    roleDefinitionId: string;
}

export interface LinkedAccessCheckResponse {
    /**
     * The action name.
     */
    actionName?: string;
    /**
     * The linked action.
     */
    linkedAction?: string;
    /**
     * The linked action verb.
     */
    linkedActionVerb?: string;
    /**
     * The linked property.
     */
    linkedProperty?: string;
    /**
     * The linked type.
     */
    linkedType?: string;
}

export interface LinkedNotificationRuleResponse {
    /**
     * The actions.
     */
    actions?: string[];
    /**
     * The actions on failed operation.
     */
    actionsOnFailedOperation?: string[];
    /**
     * The fast path actions.
     */
    fastPathActions?: string[];
    /**
     * The fast path action on failed operation.
     */
    fastPathActionsOnFailedOperation?: string[];
    /**
     * This is a TimeSpan property.
     */
    linkedNotificationTimeout?: string;
}

export interface LinkedOperationRuleResponse {
    /**
     * Depends on types.
     */
    dependsOnTypes?: string[];
    /**
     * The linked action.
     */
    linkedAction: string;
    /**
     * The linked operation.
     */
    linkedOperation: string;
}

export interface LocationQuotaRuleResponse {
    /**
     * The location.
     */
    location?: string;
    /**
     * The policy.
     */
    policy?: string;
    /**
     * The quota id.
     */
    quotaId?: string;
}

export interface LoggingRuleResponse {
    /**
     * The action.
     */
    action: string;
    /**
     * The detail level.
     */
    detailLevel: string;
    /**
     * The direction.
     */
    direction: string;
    /**
     * The hidden property paths.
     */
    hiddenPropertyPaths?: LoggingRuleResponseHiddenPropertyPaths;
}

/**
 * The hidden property paths.
 */
export interface LoggingRuleResponseHiddenPropertyPaths {
    /**
     * The hidden paths on request.
     */
    hiddenPathsOnRequest?: string[];
    /**
     * The hidden paths on response.
     */
    hiddenPathsOnResponse?: string[];
}

export interface NotificationEndpointResponse {
    /**
     * The locations.
     */
    locations?: string[];
    /**
     * The notification destination.
     */
    notificationDestination?: string;
}

export interface NotificationRegistrationPropertiesResponse {
    /**
     * The included events.
     */
    includedEvents?: string[];
    /**
     * The message scope.
     */
    messageScope?: string;
    /**
     * The notification endpoints.
     */
    notificationEndpoints?: NotificationEndpointResponse[];
    /**
     * The notification mode.
     */
    notificationMode?: string;
    /**
     * The provisioned state of the resource.
     */
    provisioningState: string;
}

export interface NotificationResponse {
    /**
     * The notification type.
     */
    notificationType?: string;
    /**
     * Whether notifications should be skipped.
     */
    skipNotifications?: string;
}

export interface OpenApiConfigurationResponse {
    /**
     * The open api validation.
     */
    validation?: OpenApiValidationResponse;
}

export interface OpenApiValidationResponse {
    /**
     * Indicates whether a non compliance response is allowed for a LIST call
     */
    allowNoncompliantCollectionResponse?: boolean;
}

/**
 * The provider authentication.
 */
export interface ProviderHubMetadataResponseProviderAuthentication {
    /**
     * The allowed audiences.
     */
    allowedAudiences: string[];
}

/**
 * The third party provider authorization.
 */
export interface ProviderHubMetadataResponseThirdPartyProviderAuthorization {
    /**
     * The authorizations.
     */
    authorizations?: LightHouseAuthorizationResponse[];
    /**
     * The managed by tenant id.
     */
    managedByTenantId?: string;
}

export interface ProviderMonitorSettingPropertiesResponse {
    /**
     * The provisioning state.
     */
    provisioningState: string;
}

export interface ProviderRegistrationPropertiesResponse {
    /**
     * The capabilities.
     */
    capabilities?: ResourceProviderCapabilitiesResponse[];
    /**
     * The cross tenant token validation.
     */
    crossTenantTokenValidation?: string;
    /**
     * Custom manifest version.
     */
    customManifestVersion?: string;
    /**
     * The dsts configuration.
     */
    dstsConfiguration?: ResourceProviderManifestPropertiesResponseDstsConfiguration;
    /**
     * The enable tenant linked notification.
     */
    enableTenantLinkedNotification?: boolean;
    /**
     * The features rule.
     */
    featuresRule?: ResourceProviderManifestPropertiesResponseFeaturesRule;
    /**
     * The global notification endpoints.
     */
    globalNotificationEndpoints?: ResourceProviderEndpointResponse[];
    /**
     * Legacy namespace.
     */
    legacyNamespace?: string;
    /**
     * Legacy registrations.
     */
    legacyRegistrations?: string[];
    /**
     * The linked notification rules.
     */
    linkedNotificationRules?: FanoutLinkedNotificationRuleResponse[];
    /**
     * The resource provider management.
     */
    management?: ResourceProviderManifestPropertiesResponseManagement;
    /**
     * Management groups global notification endpoints.
     */
    managementGroupGlobalNotificationEndpoints?: ResourceProviderEndpointResponse[];
    /**
     * The metadata.
     */
    metadata?: any;
    /**
     * The namespace.
     */
    namespace?: string;
    /**
     * Notification options.
     */
    notificationOptions?: string;
    /**
     * Notification settings.
     */
    notificationSettings?: ResourceProviderManifestPropertiesResponseNotificationSettings;
    /**
     * The notifications.
     */
    notifications?: NotificationResponse[];
    /**
     * Optional features.
     */
    optionalFeatures?: string[];
    /**
     * The private resource provider configuration.
     */
    privateResourceProviderConfiguration?: ProviderRegistrationPropertiesResponsePrivateResourceProviderConfiguration;
    /**
     * The provider authentication.
     */
    providerAuthentication?: ResourceProviderManifestPropertiesResponseProviderAuthentication;
    /**
     * The provider authorizations.
     */
    providerAuthorizations?: ResourceProviderAuthorizationResponse[];
    /**
     * The provider hub metadata.
     */
    providerHubMetadata?: ProviderRegistrationPropertiesResponseProviderHubMetadata;
    /**
     * The provider type.
     */
    providerType?: string;
    /**
     * The provider version.
     */
    providerVersion?: string;
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * The request header options.
     */
    requestHeaderOptions?: ResourceProviderManifestPropertiesResponseRequestHeaderOptions;
    /**
     * The required features.
     */
    requiredFeatures?: string[];
    /**
     * Resource group lock option during move.
     */
    resourceGroupLockOptionDuringMove?: ResourceProviderManifestPropertiesResponseResourceGroupLockOptionDuringMove;
    /**
     * resource hydration accounts
     */
    resourceHydrationAccounts?: ResourceHydrationAccountResponse[];
    /**
     * The resource provider authorization rules.
     */
    resourceProviderAuthorizationRules?: ResourceProviderAuthorizationRulesResponse;
    /**
     * Response options.
     */
    responseOptions?: ResourceProviderManifestPropertiesResponseResponseOptions;
    /**
     * The service name.
     */
    serviceName?: string;
    /**
     * The services.
     */
    services?: ResourceProviderServiceResponse[];
    /**
     * The subscription lifecycle notification specifications.
     */
    subscriptionLifecycleNotificationSpecifications?: ProviderRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications;
    /**
     * The template deployment options.
     */
    templateDeploymentOptions?: ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions;
    /**
     * The token auth configuration.
     */
    tokenAuthConfiguration?: TokenAuthConfigurationResponse;
}

/**
 * The private resource provider configuration.
 */
export interface ProviderRegistrationPropertiesResponsePrivateResourceProviderConfiguration {
    /**
     * The allowed subscriptions.
     */
    allowedSubscriptions?: string[];
}

/**
 * The provider hub metadata.
 */
export interface ProviderRegistrationPropertiesResponseProviderHubMetadata {
    /**
     * The direct RP role definition id.
     */
    directRpRoleDefinitionId?: string;
    /**
     * The global async operation resource type name.
     */
    globalAsyncOperationResourceTypeName?: string;
    /**
     * The provider authentication.
     */
    providerAuthentication?: ProviderHubMetadataResponseProviderAuthentication;
    /**
     * The provider authorizations.
     */
    providerAuthorizations?: ResourceProviderAuthorizationResponse[];
    /**
     * The regional async operation resource type name.
     */
    regionalAsyncOperationResourceTypeName?: string;
    /**
     * The third party provider authorization.
     */
    thirdPartyProviderAuthorization?: ProviderHubMetadataResponseThirdPartyProviderAuthorization;
}

/**
 * The subscription lifecycle notification specifications.
 */
export interface ProviderRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications {
    /**
     * The soft delete TTL.
     */
    softDeleteTTL?: string;
    /**
     * The subscription state override actions.
     */
    subscriptionStateOverrideActions?: SubscriptionStateOverrideActionResponse[];
}

export interface QuotaRuleResponse {
    /**
     * The location rules.
     */
    locationRules?: LocationQuotaRuleResponse[];
    /**
     * The quota policy.
     */
    quotaPolicy?: string;
    /**
     * The required features.
     */
    requiredFeatures?: string[];
}

export interface ResourceAccessRoleResponse {
    /**
     * The actions.
     */
    actions?: string[];
    /**
     * The allowed group claims.
     */
    allowedGroupClaims?: string[];
}

export interface ResourceConcurrencyControlOptionResponse {
    /**
     * The policy.
     */
    policy?: string;
}

export interface ResourceHydrationAccountResponse {
    /**
     * The account name.
     */
    accountName?: string;
    /**
     * The encrypted key.
     */
    encryptedKey?: string;
    /**
     * The max child resource consistency job limit.
     */
    maxChildResourceConsistencyJobLimit?: number;
    /**
     * The subscription id.
     */
    subscriptionId?: string;
}

export interface ResourceProviderAuthorizationResponse {
    /**
     * The allowed third party extensions.
     */
    allowedThirdPartyExtensions?: ThirdPartyExtensionResponse[];
    /**
     * The application id.
     */
    applicationId?: string;
    /**
     * The grouping tag.
     */
    groupingTag?: string;
    /**
     * Managed by authorization.
     */
    managedByAuthorization?: ResourceProviderAuthorizationResponseManagedByAuthorization;
    /**
     * The managed by role definition id.
     */
    managedByRoleDefinitionId?: string;
    /**
     * The role definition id.
     */
    roleDefinitionId?: string;
}

/**
 * Managed by authorization.
 */
export interface ResourceProviderAuthorizationResponseManagedByAuthorization {
    additionalAuthorizations?: AdditionalAuthorizationResponse[];
    /**
     * Indicates whether the managed by resource role definition ID should be inherited.
     */
    allowManagedByInheritance?: boolean;
    /**
     * The managed by resource role definition ID for the application.
     */
    managedByResourceRoleDefinitionId?: string;
}

export interface ResourceProviderAuthorizationRulesResponse {
    /**
     * The async operation polling rules.
     */
    asyncOperationPollingRules?: AsyncOperationPollingRulesResponse;
}

export interface ResourceProviderCapabilitiesResponse {
    /**
     * The effect.
     */
    effect: string;
    /**
     * The quota id.
     */
    quotaId: string;
    /**
     * The required features.
     */
    requiredFeatures?: string[];
}

export interface ResourceProviderEndpointResponse {
    /**
     * The api versions.
     */
    apiVersions?: string[];
    /**
     * Whether the endpoint is enabled.
     */
    enabled?: boolean;
    /**
     * The endpoint type.
     */
    endpointType?: string;
    /**
     * The endpoint uri.
     */
    endpointUri?: string;
    /**
     * The feature rules.
     */
    featuresRule?: ResourceProviderEndpointResponseFeaturesRule;
    /**
     * The locations.
     */
    locations?: string[];
    /**
     * The required features.
     */
    requiredFeatures?: string[];
    /**
     * The sku link.
     */
    skuLink?: string;
    /**
     * The timeout.
     */
    timeout?: string;
}

/**
 * The feature rules.
 */
export interface ResourceProviderEndpointResponseFeaturesRule {
    /**
     * The required feature policy.
     */
    requiredFeaturesPolicy: string;
}

/**
 * Options for error response messages.
 */
export interface ResourceProviderManagementResponseErrorResponseMessageOptions {
    /**
     * Type of server failure response message.
     */
    serverFailureResponseMessageType?: string;
}

/**
 * Metadata for expedited rollout.
 */
export interface ResourceProviderManagementResponseExpeditedRolloutMetadata {
    /**
     * Expedited rollout enabled?
     */
    enabled?: boolean;
    /**
     * Expedited rollout intent.
     */
    expeditedRolloutIntent?: string;
}

/**
 * The dsts configuration.
 */
export interface ResourceProviderManifestPropertiesResponseDstsConfiguration {
    /**
     * This is a URI property.
     */
    serviceDnsName?: string;
    /**
     * The service name.
     */
    serviceName: string;
}

/**
 * The features rule.
 */
export interface ResourceProviderManifestPropertiesResponseFeaturesRule {
    /**
     * The required feature policy.
     */
    requiredFeaturesPolicy: string;
}

/**
 * The resource provider management.
 */
export interface ResourceProviderManifestPropertiesResponseManagement {
    /**
     * The authorization owners.
     */
    authorizationOwners?: string[];
    /**
     * List of manifest owners for canary.
     */
    canaryManifestOwners?: string[];
    /**
     * Options for error response messages.
     */
    errorResponseMessageOptions?: ResourceProviderManagementResponseErrorResponseMessageOptions;
    /**
     * Metadata for expedited rollout.
     */
    expeditedRolloutMetadata?: ResourceProviderManagementResponseExpeditedRolloutMetadata;
    /**
     * List of expedited rollout submitters.
     */
    expeditedRolloutSubmitters?: string[];
    /**
     * The incident contact email.
     */
    incidentContactEmail?: string;
    /**
     * The incident routing service.
     */
    incidentRoutingService?: string;
    /**
     * The incident routing team.
     */
    incidentRoutingTeam?: string;
    /**
     * The manifest owners.
     */
    manifestOwners?: string[];
    /**
     * The profit center code for the subscription.
     */
    pcCode?: string;
    /**
     * The profit center program id for the subscription.
     */
    profitCenterProgramId?: string;
    /**
     * The resource access policy.
     */
    resourceAccessPolicy?: string;
    /**
     * The resource access roles.
     */
    resourceAccessRoles?: ResourceAccessRoleResponse[];
    /**
     * The schema owners.
     */
    schemaOwners?: string[];
    /**
     * The service tree infos.
     */
    serviceTreeInfos?: ServiceTreeInfoResponse[];
}

/**
 * Notification settings.
 */
export interface ResourceProviderManifestPropertiesResponseNotificationSettings {
    subscriberSettings?: SubscriberSettingResponse[];
}

/**
 * The provider authentication.
 */
export interface ResourceProviderManifestPropertiesResponseProviderAuthentication {
    /**
     * The allowed audiences.
     */
    allowedAudiences: string[];
}

/**
 * The request header options.
 */
export interface ResourceProviderManifestPropertiesResponseRequestHeaderOptions {
    /**
     * The opt in headers.
     */
    optInHeaders?: string;
    /**
     * The opt out headers.
     */
    optOutHeaders?: string;
}

/**
 * Resource group lock option during move.
 */
export interface ResourceProviderManifestPropertiesResponseResourceGroupLockOptionDuringMove {
    /**
     * The action verb that will be blocked when the resource group is locked during move.
     */
    blockActionVerb?: string;
}

/**
 * Response options.
 */
export interface ResourceProviderManifestPropertiesResponseResponseOptions {
    serviceClientOptionsType?: string;
}

/**
 * The template deployment options.
 */
export interface ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions {
    /**
     * The preflight options.
     */
    preflightOptions?: string[];
    /**
     * Whether preflight is supported.
     */
    preflightSupported?: boolean;
}

/**
 * Resource provider service.
 */
export interface ResourceProviderServiceResponse {
    /**
     * The service name.
     */
    serviceName?: string;
    /**
     * The status.
     */
    status?: string;
}

export interface ResourceTypeEndpointResponse {
    /**
     * Api version.
     */
    apiVersion?: string;
    /**
     * The api versions.
     */
    apiVersions?: string[];
    /**
     * The data boundary.
     */
    dataBoundary?: string;
    /**
     * The dsts configuration.
     */
    dstsConfiguration?: ResourceTypeEndpointResponseDstsConfiguration;
    /**
     * Whether the endpoint is enabled.
     */
    enabled?: boolean;
    /**
     * The endpoint type.
     */
    endpointType?: string;
    /**
     * The endpoint uri.
     */
    endpointUri?: string;
    /**
     * The extensions.
     */
    extensions?: ResourceTypeExtensionResponse[];
    /**
     * The features rule.
     */
    featuresRule?: ResourceTypeEndpointResponseFeaturesRule;
    /**
     * Resource type endpoint kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: string;
    /**
     * The locations.
     */
    locations?: string[];
    /**
     * The required features.
     */
    requiredFeatures?: string[];
    /**
     * The sku link.
     */
    skuLink?: string;
    /**
     * The timeout.
     */
    timeout?: string;
    /**
     * The token auth configuration.
     */
    tokenAuthConfiguration?: TokenAuthConfigurationResponse;
    /**
     * List of zones.
     */
    zones?: string[];
}
/**
 * resourceTypeEndpointResponseProvideDefaults sets the appropriate defaults for ResourceTypeEndpointResponse
 */
export function resourceTypeEndpointResponseProvideDefaults(val: ResourceTypeEndpointResponse): ResourceTypeEndpointResponse {
    return {
        ...val,
        kind: (val.kind) ?? "Managed",
    };
}

/**
 * The dsts configuration.
 */
export interface ResourceTypeEndpointResponseDstsConfiguration {
    /**
     * This is a URI property.
     */
    serviceDnsName?: string;
    /**
     * The service name.
     */
    serviceName: string;
}

/**
 * The features rule.
 */
export interface ResourceTypeEndpointResponseFeaturesRule {
    /**
     * The required feature policy.
     */
    requiredFeaturesPolicy: string;
}

/**
 * Resource creation begin.
 */
export interface ResourceTypeExtensionOptionsResponseResourceCreationBegin {
    /**
     * The request.
     */
    request?: string[];
    /**
     * The response.
     */
    response?: string[];
}

export interface ResourceTypeExtensionResponse {
    /**
     * The endpoint uri.
     */
    endpointUri?: string;
    /**
     * The extension categories.
     */
    extensionCategories?: string[];
    /**
     * The timeout.
     */
    timeout?: string;
}

export interface ResourceTypeOnBehalfOfTokenResponse {
    /**
     * The action name.
     */
    actionName?: string;
    /**
     * This is a TimeSpan property.
     */
    lifeTime?: string;
}

export interface ResourceTypeRegistrationPropertiesResponse {
    /**
     * Add resource list target locations?
     */
    addResourceListTargetLocations?: boolean;
    /**
     * The additional options.
     */
    additionalOptions?: string;
    /**
     * The allow empty role assignments.
     */
    allowEmptyRoleAssignments?: boolean;
    /**
     * The allowed resource names.
     */
    allowedResourceNames?: AllowedResourceNameResponse[];
    /**
     * Allowed template deployment reference actions.
     */
    allowedTemplateDeploymentReferenceActions?: string[];
    /**
     * The allowed unauthorized actions.
     */
    allowedUnauthorizedActions?: string[];
    /**
     * The allowed unauthorized actions extensions.
     */
    allowedUnauthorizedActionsExtensions?: AllowedUnauthorizedActionsExtensionResponse[];
    /**
     * The api profiles.
     */
    apiProfiles?: ApiProfileResponse[];
    /**
     * The async operation resource type name.
     */
    asyncOperationResourceTypeName?: string;
    /**
     * Async timeout rules
     */
    asyncTimeoutRules?: AsyncTimeoutRuleResponse[];
    /**
     * The authorization action mappings
     */
    authorizationActionMappings?: AuthorizationActionMappingResponse[];
    /**
     * The availability zone rule.
     */
    availabilityZoneRule?: ResourceTypeRegistrationPropertiesResponseAvailabilityZoneRule;
    /**
     * Capacity rule.
     */
    capacityRule?: ResourceTypeRegistrationPropertiesResponseCapacityRule;
    /**
     * The category.
     */
    category?: string;
    /**
     * The check name availability specifications.
     */
    checkNameAvailabilitySpecifications?: ResourceTypeRegistrationPropertiesResponseCheckNameAvailabilitySpecifications;
    /**
     * Common API versions for the resource type.
     */
    commonApiVersions?: string[];
    /**
     * The cross tenant token validation.
     */
    crossTenantTokenValidation?: string;
    /**
     * The default api version.
     */
    defaultApiVersion?: string;
    /**
     * The disallowed action verbs.
     */
    disallowedActionVerbs?: string[];
    /**
     * The disallowed end user operations.
     */
    disallowedEndUserOperations?: string[];
    /**
     * The dsts configuration.
     */
    dstsConfiguration?: ResourceTypeRegistrationPropertiesResponseDstsConfiguration;
    /**
     * Whether async operation is enabled.
     */
    enableAsyncOperation?: boolean;
    /**
     * Whether third party S2S is enabled.
     */
    enableThirdPartyS2S?: boolean;
    /**
     * The extensions.
     */
    endpoints?: ResourceTypeEndpointResponse[];
    /**
     * The extended locations.
     */
    extendedLocations?: ExtendedLocationOptionsResponse[];
    /**
     * The extension options.
     */
    extensionOptions?: ResourceTypeRegistrationPropertiesResponseExtensionOptions;
    /**
     * The features rule.
     */
    featuresRule?: ResourceTypeRegistrationPropertiesResponseFeaturesRule;
    /**
     * The frontdoor request mode.
     */
    frontdoorRequestMode?: string;
    /**
     * Grouping tag.
     */
    groupingTag?: string;
    /**
     * The identity management.
     */
    identityManagement?: ResourceTypeRegistrationPropertiesResponseIdentityManagement;
    /**
     * Whether it is pure proxy.
     */
    isPureProxy?: boolean;
    /**
     * The legacy name.
     */
    legacyName?: string;
    /**
     * The legacy names.
     */
    legacyNames?: string[];
    /**
     * The legacy policy.
     */
    legacyPolicy?: ResourceTypeRegistrationPropertiesResponseLegacyPolicy;
    /**
     * The linked access checks.
     */
    linkedAccessChecks?: LinkedAccessCheckResponse[];
    /**
     * The linked notification rules.
     */
    linkedNotificationRules?: LinkedNotificationRuleResponse[];
    /**
     * The linked operation rules.
     */
    linkedOperationRules?: LinkedOperationRuleResponse[];
    /**
     * The logging rules.
     */
    loggingRules?: LoggingRuleResponse[];
    /**
     * The resource provider management.
     */
    management?: ResourceTypeRegistrationPropertiesResponseManagement;
    /**
     * Manifest link.
     */
    manifestLink?: string;
    /**
     * Marketplace options.
     */
    marketplaceOptions?: ResourceTypeRegistrationPropertiesResponseMarketplaceOptions;
    /**
     * The marketplace type.
     */
    marketplaceType?: string;
    /**
     * The metadata.
     */
    metadata?: {[key: string]: any};
    /**
     * The notifications.
     */
    notifications?: NotificationResponse[];
    /**
     * The on behalf of tokens.
     */
    onBehalfOfTokens?: ResourceTypeOnBehalfOfTokenResponse;
    /**
     * The open api configuration.
     */
    openApiConfiguration?: OpenApiConfigurationResponse;
    /**
     * The policy execution type.
     */
    policyExecutionType?: string;
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * The quota rule.
     */
    quotaRule?: QuotaRuleResponse;
    /**
     * The regionality.
     */
    regionality?: string;
    /**
     * The request header options.
     */
    requestHeaderOptions?: ResourceTypeRegistrationPropertiesResponseRequestHeaderOptions;
    /**
     * The required features.
     */
    requiredFeatures?: string[];
    /**
     * Resource cache options.
     */
    resourceCache?: ResourceTypeRegistrationPropertiesResponseResourceCache;
    /**
     * The resource concurrency control options.
     */
    resourceConcurrencyControlOptions?: {[key: string]: ResourceConcurrencyControlOptionResponse};
    /**
     * The resource deletion policy.
     */
    resourceDeletionPolicy?: string;
    /**
     * The resource graph configuration.
     */
    resourceGraphConfiguration?: ResourceTypeRegistrationPropertiesResponseResourceGraphConfiguration;
    /**
     * Resource management options.
     */
    resourceManagementOptions?: ResourceTypeRegistrationPropertiesResponseResourceManagementOptions;
    /**
     * The resource move policy.
     */
    resourceMovePolicy?: ResourceTypeRegistrationPropertiesResponseResourceMovePolicy;
    /**
     * The resource provider authorization rules.
     */
    resourceProviderAuthorizationRules?: ResourceProviderAuthorizationRulesResponse;
    /**
     * Resource query management options.
     */
    resourceQueryManagement?: ResourceTypeRegistrationPropertiesResponseResourceQueryManagement;
    /**
     * The resource sub type.
     */
    resourceSubType?: string;
    /**
     * Resource type common attribute management.
     */
    resourceTypeCommonAttributeManagement?: ResourceTypeRegistrationPropertiesResponseResourceTypeCommonAttributeManagement;
    /**
     * The resource validation.
     */
    resourceValidation?: string;
    /**
     * Routing rule.
     */
    routingRule?: ResourceTypeRegistrationPropertiesResponseRoutingRule;
    /**
     * The resource routing type.
     */
    routingType?: string;
    /**
     * The service tree infos.
     */
    serviceTreeInfos?: ServiceTreeInfoResponse[];
    /**
     * The sku link.
     */
    skuLink?: string;
    /**
     * The subscription lifecycle notification specifications.
     */
    subscriptionLifecycleNotificationSpecifications?: ResourceTypeRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications;
    /**
     * The subscription state rules.
     */
    subscriptionStateRules?: SubscriptionStateRuleResponse[];
    /**
     * Whether tags are supported.
     */
    supportsTags?: boolean;
    /**
     * The swagger specifications.
     */
    swaggerSpecifications?: SwaggerSpecificationResponse[];
    /**
     * The template deployment options.
     */
    templateDeploymentOptions?: ResourceTypeRegistrationPropertiesResponseTemplateDeploymentOptions;
    /**
     * The template deployment policy.
     */
    templateDeploymentPolicy?: ResourceTypeRegistrationPropertiesResponseTemplateDeploymentPolicy;
    /**
     * The throttling rules.
     */
    throttlingRules?: ThrottlingRuleResponse[];
    /**
     * The token auth configuration.
     */
    tokenAuthConfiguration?: TokenAuthConfigurationResponse;
}

/**
 * The availability zone rule.
 */
export interface ResourceTypeRegistrationPropertiesResponseAvailabilityZoneRule {
    availabilityZonePolicy?: string;
}

/**
 * Batch provisioning support.
 */
export interface ResourceTypeRegistrationPropertiesResponseBatchProvisioningSupport {
    /**
     * Supported operations.
     */
    supportedOperations?: string;
}

/**
 * Capacity rule.
 */
export interface ResourceTypeRegistrationPropertiesResponseCapacityRule {
    /**
     * Capacity policy.
     */
    capacityPolicy?: string;
    /**
     * Sku alias
     */
    skuAlias?: string;
}

/**
 * The check name availability specifications.
 */
export interface ResourceTypeRegistrationPropertiesResponseCheckNameAvailabilitySpecifications {
    /**
     * Whether default validation is enabled.
     */
    enableDefaultValidation?: boolean;
    /**
     * The resource types with custom validation.
     */
    resourceTypesWithCustomValidation?: string[];
}

/**
 * The dsts configuration.
 */
export interface ResourceTypeRegistrationPropertiesResponseDstsConfiguration {
    /**
     * This is a URI property.
     */
    serviceDnsName?: string;
    /**
     * The service name.
     */
    serviceName: string;
}

/**
 * The extension options.
 */
export interface ResourceTypeRegistrationPropertiesResponseExtensionOptions {
    /**
     * Resource creation begin.
     */
    resourceCreationBegin?: ResourceTypeExtensionOptionsResponseResourceCreationBegin;
}

/**
 * The features rule.
 */
export interface ResourceTypeRegistrationPropertiesResponseFeaturesRule {
    /**
     * The required feature policy.
     */
    requiredFeaturesPolicy: string;
}

/**
 * The identity management.
 */
export interface ResourceTypeRegistrationPropertiesResponseIdentityManagement {
    /**
     * The application id.
     */
    applicationId?: string;
    /**
     * The application ids.
     */
    applicationIds?: string[];
    /**
     * The delegation app ids.
     */
    delegationAppIds?: string[];
    /**
     * The type.
     */
    type?: string;
}

/**
 * The legacy policy.
 */
export interface ResourceTypeRegistrationPropertiesResponseLegacyPolicy {
    disallowedConditions?: LegacyDisallowedConditionResponse[];
    disallowedLegacyOperations?: string[];
}

/**
 * The resource provider management.
 */
export interface ResourceTypeRegistrationPropertiesResponseManagement {
    /**
     * The authorization owners.
     */
    authorizationOwners?: string[];
    /**
     * List of manifest owners for canary.
     */
    canaryManifestOwners?: string[];
    /**
     * Options for error response messages.
     */
    errorResponseMessageOptions?: ResourceProviderManagementResponseErrorResponseMessageOptions;
    /**
     * Metadata for expedited rollout.
     */
    expeditedRolloutMetadata?: ResourceProviderManagementResponseExpeditedRolloutMetadata;
    /**
     * List of expedited rollout submitters.
     */
    expeditedRolloutSubmitters?: string[];
    /**
     * The incident contact email.
     */
    incidentContactEmail?: string;
    /**
     * The incident routing service.
     */
    incidentRoutingService?: string;
    /**
     * The incident routing team.
     */
    incidentRoutingTeam?: string;
    /**
     * The manifest owners.
     */
    manifestOwners?: string[];
    /**
     * The profit center code for the subscription.
     */
    pcCode?: string;
    /**
     * The profit center program id for the subscription.
     */
    profitCenterProgramId?: string;
    /**
     * The resource access policy.
     */
    resourceAccessPolicy?: string;
    /**
     * The resource access roles.
     */
    resourceAccessRoles?: ResourceAccessRoleResponse[];
    /**
     * The schema owners.
     */
    schemaOwners?: string[];
    /**
     * The service tree infos.
     */
    serviceTreeInfos?: ServiceTreeInfoResponse[];
}

/**
 * Marketplace options.
 */
export interface ResourceTypeRegistrationPropertiesResponseMarketplaceOptions {
    /**
     * Add-on plan conversion allowed.
     */
    addOnPlanConversionAllowed?: boolean;
}

/**
 * Nested provisioning support.
 */
export interface ResourceTypeRegistrationPropertiesResponseNestedProvisioningSupport {
    /**
     * Minimum API version.
     */
    minimumApiVersion?: string;
}

/**
 * The request header options.
 */
export interface ResourceTypeRegistrationPropertiesResponseRequestHeaderOptions {
    /**
     * The opt in headers.
     */
    optInHeaders?: string;
    /**
     * The opt out headers.
     */
    optOutHeaders?: string;
}

/**
 * Resource cache options.
 */
export interface ResourceTypeRegistrationPropertiesResponseResourceCache {
    /**
     * Enable resource cache.
     */
    enableResourceCache?: boolean;
    /**
     * Resource cache expiration timespan. This is a TimeSpan property.
     */
    resourceCacheExpirationTimespan?: string;
}

/**
 * The resource graph configuration.
 */
export interface ResourceTypeRegistrationPropertiesResponseResourceGraphConfiguration {
    /**
     * The api version.
     */
    apiVersion?: string;
    /**
     * Whether it's enabled.
     */
    enabled?: boolean;
}

/**
 * Resource management options.
 */
export interface ResourceTypeRegistrationPropertiesResponseResourceManagementOptions {
    /**
     * Batch provisioning support.
     */
    batchProvisioningSupport?: ResourceTypeRegistrationPropertiesResponseBatchProvisioningSupport;
    /**
     * Delete dependencies.
     */
    deleteDependencies?: DeleteDependencyResponse[];
    /**
     * Nested provisioning support.
     */
    nestedProvisioningSupport?: ResourceTypeRegistrationPropertiesResponseNestedProvisioningSupport;
}

/**
 * The resource move policy.
 */
export interface ResourceTypeRegistrationPropertiesResponseResourceMovePolicy {
    /**
     * Whether cross resource group move is enabled.
     */
    crossResourceGroupMoveEnabled?: boolean;
    /**
     * Whether cross subscription move is enabled.
     */
    crossSubscriptionMoveEnabled?: boolean;
    /**
     * Whether validation is required.
     */
    validationRequired?: boolean;
}

/**
 * Resource query management options.
 */
export interface ResourceTypeRegistrationPropertiesResponseResourceQueryManagement {
    /**
     * Filter option.
     */
    filterOption?: string;
}

/**
 * Resource type common attribute management.
 */
export interface ResourceTypeRegistrationPropertiesResponseResourceTypeCommonAttributeManagement {
    /**
     * Common api versions merge mode.
     */
    commonApiVersionsMergeMode?: string;
}

/**
 * Routing rule.
 */
export interface ResourceTypeRegistrationPropertiesResponseRoutingRule {
    /**
     * Hosted resource type.
     */
    hostResourceType?: string;
}

/**
 * The subscription lifecycle notification specifications.
 */
export interface ResourceTypeRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications {
    /**
     * The soft delete TTL.
     */
    softDeleteTTL?: string;
    /**
     * The subscription state override actions.
     */
    subscriptionStateOverrideActions?: SubscriptionStateOverrideActionResponse[];
}

/**
 * The template deployment options.
 */
export interface ResourceTypeRegistrationPropertiesResponseTemplateDeploymentOptions {
    /**
     * The preflight options.
     */
    preflightOptions?: string[];
    /**
     * Whether preflight is supported.
     */
    preflightSupported?: boolean;
}

/**
 * The template deployment policy.
 */
export interface ResourceTypeRegistrationPropertiesResponseTemplateDeploymentPolicy {
    /**
     * The capabilities.
     */
    capabilities: string;
    /**
     * The preflight notifications.
     */
    preflightNotifications?: string;
    /**
     * The preflight options.
     */
    preflightOptions: string;
}

export interface ResourceTypeRegistrationResponse {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * Resource type registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: string;
    /**
     * The name of the resource
     */
    name: string;
    properties?: ResourceTypeRegistrationPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}
/**
 * resourceTypeRegistrationResponseProvideDefaults sets the appropriate defaults for ResourceTypeRegistrationResponse
 */
export function resourceTypeRegistrationResponseProvideDefaults(val: ResourceTypeRegistrationResponse): ResourceTypeRegistrationResponse {
    return {
        ...val,
        kind: (val.kind) ?? "Managed",
    };
}

export interface ServiceTreeInfoResponse {
    /**
     * The component id.
     */
    componentId?: string;
    /**
     * The readiness.
     */
    readiness?: string;
    /**
     * The service id.
     */
    serviceId?: string;
}

export interface SkuCapabilityResponse {
    /**
     * The name.
     */
    name: string;
    /**
     * The value.
     */
    value: string;
}

export interface SkuCostResponse {
    /**
     * The extended unit.
     */
    extendedUnit?: string;
    /**
     * The meter id.
     */
    meterId: string;
    /**
     * The quantity.
     */
    quantity?: number;
}

export interface SkuLocationInfoResponse {
    /**
     * The extended locations.
     */
    extendedLocations?: string[];
    /**
     * The location.
     */
    location: string;
    /**
     * The type.
     */
    type?: string;
    /**
     * The zone details.
     */
    zoneDetails?: SkuZoneDetailResponse[];
    /**
     * The zones.
     */
    zones?: string[];
}

export interface SkuResourceResponseProperties {
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * The sku settings.
     */
    skuSettings: SkuSettingResponse[];
}

export interface SkuSettingResponse {
    /**
     * The capabilities.
     */
    capabilities?: SkuCapabilityResponse[];
    /**
     * The capacity.
     */
    capacity?: SkuSettingResponseCapacity;
    /**
     * The costs.
     */
    costs?: SkuCostResponse[];
    /**
     * The family.
     */
    family?: string;
    /**
     * The kind.
     */
    kind?: string;
    /**
     * The location info.
     */
    locationInfo?: SkuLocationInfoResponse[];
    /**
     * The locations.
     */
    locations?: string[];
    /**
     * The name.
     */
    name: string;
    /**
     * The required features.
     */
    requiredFeatures?: string[];
    /**
     * The required quota ids.
     */
    requiredQuotaIds?: string[];
    /**
     * The size.
     */
    size?: string;
    /**
     * The tier.
     */
    tier?: string;
}

/**
 * The capacity.
 */
export interface SkuSettingResponseCapacity {
    /**
     * The default.
     */
    default?: number;
    /**
     * The maximum.
     */
    maximum?: number;
    /**
     * The minimum.
     */
    minimum: number;
    /**
     * The scale type.
     */
    scaleType?: string;
}

export interface SkuZoneDetailResponse {
    /**
     * The capabilities.
     */
    capabilities?: SkuCapabilityResponse[];
    /**
     * The name.
     */
    name?: string[];
}

export interface SubscriberSettingResponse {
    /**
     * The filter rules.
     */
    filterRules?: FilterRuleResponse[];
}

export interface SubscriptionStateOverrideActionResponse {
    /**
     * The action.
     */
    action: string;
    /**
     * The state.
     */
    state: string;
}

export interface SubscriptionStateRuleResponse {
    /**
     * The allowed actions.
     */
    allowedActions?: string[];
    /**
     * The subscription state.
     */
    state?: string;
}

export interface SwaggerSpecificationResponse {
    /**
     * The api versions.
     */
    apiVersions?: string[];
    /**
     * The swagger spec folder uri.
     */
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

export interface ThirdPartyExtensionResponse {
    /**
     * Name of third party extension.
     */
    name?: string;
}

export interface ThrottlingMetricResponse {
    /**
     * The interval.
     */
    interval?: string;
    /**
     * The limit.
     */
    limit: number;
    /**
     * The throttling metric type
     */
    type: string;
}

export interface ThrottlingRuleResponse {
    /**
     * The action.
     */
    action: string;
    /**
     * The application id.
     */
    applicationId?: string[];
    /**
     * The metrics.
     */
    metrics: ThrottlingMetricResponse[];
    /**
     * The required features.
     */
    requiredFeatures?: string[];
}

export interface TokenAuthConfigurationResponse {
    /**
     * The authentication scheme.
     */
    authenticationScheme?: string;
    /**
     * Whether certification authentication fallback is disabled.
     */
    disableCertificateAuthenticationFallback?: boolean;
    /**
     * The signed request scope.
     */
    signedRequestScope?: string;
}

/**
 * Error information.
 */
export interface TypedErrorInfoResponse {
    /**
     * The error information.
     */
    info: any;
    /**
     * The type of the error.
     */
    type: string;
}
