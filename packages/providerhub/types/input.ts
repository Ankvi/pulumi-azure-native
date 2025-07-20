import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AdditionalAuthorizationArgs {
    applicationId?: pulumi.Input<string>;
    roleDefinitionId?: pulumi.Input<string>;
}

export interface AllowedResourceNameArgs {
    /**
     * Get action verb.
     */
    getActionVerb?: pulumi.Input<string>;
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
}

export interface AllowedUnauthorizedActionsExtensionArgs {
    /**
     * The action.
     */
    action?: pulumi.Input<string>;
    /**
     * The intent.
     */
    intent?: pulumi.Input<string | enums.Intent>;
}

export interface ApiProfileArgs {
    /**
     * Api version.
     */
    apiVersion?: pulumi.Input<string>;
    /**
     * Profile version.
     */
    profileVersion?: pulumi.Input<string>;
}

export interface ApplicationDataAuthorizationArgs {
    /**
     * The resource types from the defined resource types in the provider namespace that the application can access. If no resource types are specified and the role is service owner, the default is * which is all resource types
     */
    resourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ownership role the application has on the resource types. The service owner role gives the application owner permissions. The limited owner role gives elevated permissions but does not allow all the permissions of a service owner, such as read/write on internal metadata.
     */
    role: pulumi.Input<string | enums.Role>;
}

export interface ApplicationProviderAuthorizationArgs {
    /**
     * The managed by role definition ID for the application.
     */
    managedByRoleDefinitionId?: pulumi.Input<string>;
    /**
     * The role definition ID for the application.
     */
    roleDefinitionId?: pulumi.Input<string>;
}

export interface AsyncOperationPollingRulesArgs {
    /**
     * The additional options.
     */
    additionalOptions?: pulumi.Input<string | enums.AdditionalOptionsAsyncOperation>;
    /**
     * The authorization actions.
     */
    authorizationActions?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface AsyncTimeoutRuleArgs {
    actionName?: pulumi.Input<string>;
    /**
     * This is a TimeSpan property
     */
    timeout?: pulumi.Input<string>;
}

export interface AuthorizationActionMappingArgs {
    /**
     * The desired action name.
     */
    desired?: pulumi.Input<string>;
    /**
     * The original action name.
     */
    original?: pulumi.Input<string>;
}

export interface AuthorizedApplicationPropertiesArgs {
    /**
     * The authorizations that determine the level of data access permissions on the specified resource types.
     */
    dataAuthorizations?: pulumi.Input<pulumi.Input<ApplicationDataAuthorizationArgs>[]>;
    providerAuthorization?: pulumi.Input<ApplicationProviderAuthorizationArgs>;
}

export interface CustomRolloutPropertiesArgs {
    /**
     * The specification.
     */
    specification: pulumi.Input<CustomRolloutPropertiesSpecificationArgs>;
    /**
     * The status.
     */
    status?: pulumi.Input<CustomRolloutPropertiesStatusArgs>;
}
/**
 * customRolloutPropertiesArgsProvideDefaults sets the appropriate defaults for CustomRolloutPropertiesArgs
 */
export function customRolloutPropertiesArgsProvideDefaults(val: CustomRolloutPropertiesArgs): CustomRolloutPropertiesArgs {
    return {
        ...val,
        specification: pulumi.output(val.specification).apply(customRolloutPropertiesSpecificationArgsProvideDefaults),
    };
}

/**
 * The specification.
 */
export interface CustomRolloutPropertiesSpecificationArgs {
    /**
     * The auto provisioning configuration.
     */
    autoProvisionConfig?: pulumi.Input<CustomRolloutSpecificationAutoProvisionConfigArgs>;
    /**
     * The canary region configuration.
     */
    canary?: pulumi.Input<CustomRolloutSpecificationCanaryArgs>;
    /**
     * The provider registration.
     */
    providerRegistration?: pulumi.Input<CustomRolloutSpecificationProviderRegistrationArgs>;
    /**
     * Whether refreshing subscription registration is enabled or disabled.
     */
    refreshSubscriptionRegistration?: pulumi.Input<boolean>;
    /**
     * The list of ARM regions scoped for the release.
     */
    releaseScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource type registrations.
     */
    resourceTypeRegistrations?: pulumi.Input<pulumi.Input<ResourceTypeRegistrationArgs>[]>;
    /**
     * Whether release scope validation should be skipped.
     */
    skipReleaseScopeValidation?: pulumi.Input<boolean>;
}
/**
 * customRolloutPropertiesSpecificationArgsProvideDefaults sets the appropriate defaults for CustomRolloutPropertiesSpecificationArgs
 */
export function customRolloutPropertiesSpecificationArgsProvideDefaults(val: CustomRolloutPropertiesSpecificationArgs): CustomRolloutPropertiesSpecificationArgs {
    return {
        ...val,
        providerRegistration: (val.providerRegistration ? pulumi.output(val.providerRegistration).apply(customRolloutSpecificationProviderRegistrationArgsProvideDefaults) : undefined),
    };
}

/**
 * The status.
 */
export interface CustomRolloutPropertiesStatusArgs {
    /**
     * The completed regions.
     */
    completedRegions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The failed or skipped regions.
     */
    failedOrSkippedRegions?: pulumi.Input<{[key: string]: pulumi.Input<ExtendedErrorInfoArgs>}>;
    /**
     * The manifest checkin status.
     */
    manifestCheckinStatus?: pulumi.Input<CustomRolloutStatusManifestCheckinStatusArgs>;
}

/**
 * The auto provisioning configuration.
 */
export interface CustomRolloutSpecificationAutoProvisionConfigArgs {
    resourceGraph?: pulumi.Input<boolean>;
    storage?: pulumi.Input<boolean>;
}

/**
 * The canary region configuration.
 */
export interface CustomRolloutSpecificationCanaryArgs {
    regions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The provider registration.
 */
export interface CustomRolloutSpecificationProviderRegistrationArgs {
    /**
     * Provider registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: pulumi.Input<string | enums.ProviderRegistrationKind>;
    properties?: pulumi.Input<ProviderRegistrationPropertiesArgs>;
}
/**
 * customRolloutSpecificationProviderRegistrationArgsProvideDefaults sets the appropriate defaults for CustomRolloutSpecificationProviderRegistrationArgs
 */
export function customRolloutSpecificationProviderRegistrationArgsProvideDefaults(val: CustomRolloutSpecificationProviderRegistrationArgs): CustomRolloutSpecificationProviderRegistrationArgs {
    return {
        ...val,
        kind: (val.kind) ?? "Managed",
    };
}

/**
 * The manifest checkin status.
 */
export interface CustomRolloutStatusManifestCheckinStatusArgs {
    /**
     * The commit id.
     */
    commitId?: pulumi.Input<string>;
    /**
     * Whether the manifest is checked in.
     */
    isCheckedIn: pulumi.Input<boolean>;
    /**
     * The pull request.
     */
    pullRequest?: pulumi.Input<string>;
    /**
     * The status message.
     */
    statusMessage: pulumi.Input<string>;
}

export interface DefaultRolloutPropertiesArgs {
    /**
     * The default rollout specification.
     */
    specification?: pulumi.Input<DefaultRolloutPropertiesSpecificationArgs>;
    /**
     * The default rollout status.
     */
    status?: pulumi.Input<DefaultRolloutPropertiesStatusArgs>;
}
/**
 * defaultRolloutPropertiesArgsProvideDefaults sets the appropriate defaults for DefaultRolloutPropertiesArgs
 */
export function defaultRolloutPropertiesArgsProvideDefaults(val: DefaultRolloutPropertiesArgs): DefaultRolloutPropertiesArgs {
    return {
        ...val,
        specification: (val.specification ? pulumi.output(val.specification).apply(defaultRolloutPropertiesSpecificationArgsProvideDefaults) : undefined),
    };
}

/**
 * The default rollout specification.
 */
export interface DefaultRolloutPropertiesSpecificationArgs {
    /**
     * The auto provisioning config.
     */
    autoProvisionConfig?: pulumi.Input<DefaultRolloutSpecificationAutoProvisionConfigArgs>;
    /**
     * The canary traffic region configuration.
     */
    canary?: pulumi.Input<DefaultRolloutSpecificationCanaryArgs>;
    /**
     * The expedited rollout definition.
     */
    expeditedRollout?: pulumi.Input<DefaultRolloutSpecificationExpeditedRolloutArgs>;
    /**
     * The high traffic region configuration.
     */
    highTraffic?: pulumi.Input<DefaultRolloutSpecificationHighTrafficArgs>;
    /**
     * The low traffic region configuration.
     */
    lowTraffic?: pulumi.Input<DefaultRolloutSpecificationLowTrafficArgs>;
    /**
     * The medium traffic region configuration.
     */
    mediumTraffic?: pulumi.Input<DefaultRolloutSpecificationMediumTrafficArgs>;
    /**
     * The provider registration.
     */
    providerRegistration?: pulumi.Input<DefaultRolloutSpecificationProviderRegistrationArgs>;
    /**
     * The resource type registrations.
     */
    resourceTypeRegistrations?: pulumi.Input<pulumi.Input<ResourceTypeRegistrationArgs>[]>;
    /**
     * The rest of the world group one region configuration.
     */
    restOfTheWorldGroupOne?: pulumi.Input<DefaultRolloutSpecificationRestOfTheWorldGroupOneArgs>;
    /**
     * The rest of the world group two region configuration.
     */
    restOfTheWorldGroupTwo?: pulumi.Input<DefaultRolloutSpecificationRestOfTheWorldGroupTwoArgs>;
}
/**
 * defaultRolloutPropertiesSpecificationArgsProvideDefaults sets the appropriate defaults for DefaultRolloutPropertiesSpecificationArgs
 */
export function defaultRolloutPropertiesSpecificationArgsProvideDefaults(val: DefaultRolloutPropertiesSpecificationArgs): DefaultRolloutPropertiesSpecificationArgs {
    return {
        ...val,
        providerRegistration: (val.providerRegistration ? pulumi.output(val.providerRegistration).apply(defaultRolloutSpecificationProviderRegistrationArgsProvideDefaults) : undefined),
    };
}

/**
 * The default rollout status.
 */
export interface DefaultRolloutPropertiesStatusArgs {
    /**
     * The completed regions.
     */
    completedRegions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The failed or skipped regions.
     */
    failedOrSkippedRegions?: pulumi.Input<{[key: string]: pulumi.Input<ExtendedErrorInfoArgs>}>;
    /**
     * The manifest checkin status.
     */
    manifestCheckinStatus?: pulumi.Input<DefaultRolloutStatusManifestCheckinStatusArgs>;
    /**
     * The next traffic region.
     */
    nextTrafficRegion?: pulumi.Input<string | enums.TrafficRegionCategory>;
    /**
     * The next traffic region scheduled time.
     */
    nextTrafficRegionScheduledTime?: pulumi.Input<string>;
    /**
     * The subscription reregistration result.
     */
    subscriptionReregistrationResult?: pulumi.Input<string | enums.SubscriptionReregistrationResult>;
}

/**
 * The auto provisioning config.
 */
export interface DefaultRolloutSpecificationAutoProvisionConfigArgs {
    /**
     * Whether auto provisioning for resource graph is enabled.
     */
    resourceGraph?: pulumi.Input<boolean>;
    /**
     * Whether auto provisioning for storage is enabled.
     */
    storage?: pulumi.Input<boolean>;
}

/**
 * The canary traffic region configuration.
 */
export interface DefaultRolloutSpecificationCanaryArgs {
    /**
     * The regions.
     */
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The skip regions.
     */
    skipRegions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The expedited rollout definition.
 */
export interface DefaultRolloutSpecificationExpeditedRolloutArgs {
    /**
     * Indicates whether expedited rollout is enabled/disabled
     */
    enabled?: pulumi.Input<boolean>;
}

/**
 * The high traffic region configuration.
 */
export interface DefaultRolloutSpecificationHighTrafficArgs {
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The wait duration.
     */
    waitDuration?: pulumi.Input<string>;
}

/**
 * The low traffic region configuration.
 */
export interface DefaultRolloutSpecificationLowTrafficArgs {
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The wait duration.
     */
    waitDuration?: pulumi.Input<string>;
}

/**
 * The medium traffic region configuration.
 */
export interface DefaultRolloutSpecificationMediumTrafficArgs {
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The wait duration.
     */
    waitDuration?: pulumi.Input<string>;
}

/**
 * The provider registration.
 */
export interface DefaultRolloutSpecificationProviderRegistrationArgs {
    /**
     * Provider registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: pulumi.Input<string | enums.ProviderRegistrationKind>;
    properties?: pulumi.Input<ProviderRegistrationPropertiesArgs>;
}
/**
 * defaultRolloutSpecificationProviderRegistrationArgsProvideDefaults sets the appropriate defaults for DefaultRolloutSpecificationProviderRegistrationArgs
 */
export function defaultRolloutSpecificationProviderRegistrationArgsProvideDefaults(val: DefaultRolloutSpecificationProviderRegistrationArgs): DefaultRolloutSpecificationProviderRegistrationArgs {
    return {
        ...val,
        kind: (val.kind) ?? "Managed",
    };
}

/**
 * The rest of the world group one region configuration.
 */
export interface DefaultRolloutSpecificationRestOfTheWorldGroupOneArgs {
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The wait duration.
     */
    waitDuration?: pulumi.Input<string>;
}

/**
 * The rest of the world group two region configuration.
 */
export interface DefaultRolloutSpecificationRestOfTheWorldGroupTwoArgs {
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The wait duration.
     */
    waitDuration?: pulumi.Input<string>;
}

/**
 * The manifest checkin status.
 */
export interface DefaultRolloutStatusManifestCheckinStatusArgs {
    /**
     * The commit id.
     */
    commitId?: pulumi.Input<string>;
    /**
     * Whether the manifest is checked in.
     */
    isCheckedIn: pulumi.Input<boolean>;
    /**
     * The pull request.
     */
    pullRequest?: pulumi.Input<string>;
    /**
     * The status message.
     */
    statusMessage: pulumi.Input<string>;
}

export interface DeleteDependencyArgs {
    /**
     * Linked property.
     */
    linkedProperty?: pulumi.Input<string>;
    /**
     * Linked type.
     */
    linkedType?: pulumi.Input<string>;
    /**
     * Required features.
     */
    requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface EndpointInformationArgs {
    /**
     * The endpoint.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The endpoint type.
     */
    endpointType?: pulumi.Input<string | enums.NotificationEndpointType>;
    /**
     * The schema version.
     */
    schemaVersion?: pulumi.Input<string>;
}

/**
 * Error information.
 */
export interface ExtendedErrorInfoArgs {
    /**
     * The additional error information.
     */
    additionalInfo?: pulumi.Input<pulumi.Input<TypedErrorInfoArgs>[]>;
    /**
     * The error code.
     */
    code?: pulumi.Input<string>;
    /**
     * The error details.
     */
    details?: pulumi.Input<pulumi.Input<ExtendedErrorInfoArgs>[]>;
    /**
     * The error message.
     */
    message?: pulumi.Input<string>;
    /**
     * The target of the error.
     */
    target?: pulumi.Input<string>;
}

export interface ExtendedLocationOptionsArgs {
    supportedPolicy?: pulumi.Input<string | enums.ResourceTypeExtendedLocationPolicy>;
    /**
     * The type.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationType>;
}

export interface FanoutLinkedNotificationRuleArgs {
    /**
     * The actions.
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The dsts configuration.
     */
    dstsConfiguration?: pulumi.Input<FanoutLinkedNotificationRuleDstsConfigurationArgs>;
    /**
     * The endpoints.
     */
    endpoints?: pulumi.Input<pulumi.Input<ResourceProviderEndpointArgs>[]>;
    /**
     * The token auth configuration.
     */
    tokenAuthConfiguration?: pulumi.Input<TokenAuthConfigurationArgs>;
}

/**
 * The dsts configuration.
 */
export interface FanoutLinkedNotificationRuleDstsConfigurationArgs {
    /**
     * This is a URI property.
     */
    serviceDnsName?: pulumi.Input<string>;
    /**
     * The service name.
     */
    serviceName: pulumi.Input<string>;
}

export interface FilterRuleArgs {
    /**
     * The endpoint information.
     */
    endpointInformation?: pulumi.Input<pulumi.Input<EndpointInformationArgs>[]>;
    /**
     * The filter query.
     */
    filterQuery?: pulumi.Input<string>;
}

export interface LegacyDisallowedConditionArgs {
    /**
     * The disallowed legacy operations.
     */
    disallowedLegacyOperations?: pulumi.Input<pulumi.Input<string | enums.LegacyOperation>[]>;
    /**
     * Feature string.
     */
    feature?: pulumi.Input<string>;
}

export interface LightHouseAuthorizationArgs {
    /**
     * The principal id.
     */
    principalId: pulumi.Input<string>;
    /**
     * The role definition id.
     */
    roleDefinitionId: pulumi.Input<string>;
}

export interface LinkedAccessCheckArgs {
    /**
     * The action name.
     */
    actionName?: pulumi.Input<string>;
    /**
     * The linked action.
     */
    linkedAction?: pulumi.Input<string>;
    /**
     * The linked action verb.
     */
    linkedActionVerb?: pulumi.Input<string>;
    /**
     * The linked property.
     */
    linkedProperty?: pulumi.Input<string>;
    /**
     * The linked type.
     */
    linkedType?: pulumi.Input<string>;
}

export interface LinkedNotificationRuleArgs {
    /**
     * The actions.
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The actions on failed operation.
     */
    actionsOnFailedOperation?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fast path actions.
     */
    fastPathActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fast path action on failed operation.
     */
    fastPathActionsOnFailedOperation?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This is a TimeSpan property.
     */
    linkedNotificationTimeout?: pulumi.Input<string>;
}

export interface LinkedOperationRuleArgs {
    /**
     * Depends on types.
     */
    dependsOnTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The linked action.
     */
    linkedAction: pulumi.Input<string | enums.LinkedAction>;
    /**
     * The linked operation.
     */
    linkedOperation: pulumi.Input<string | enums.LinkedOperation>;
}

export interface LocationQuotaRuleArgs {
    /**
     * The location.
     */
    location?: pulumi.Input<string>;
    /**
     * The policy.
     */
    policy?: pulumi.Input<string | enums.QuotaPolicy>;
    /**
     * The quota id.
     */
    quotaId?: pulumi.Input<string>;
}

export interface LoggingRuleArgs {
    /**
     * The action.
     */
    action: pulumi.Input<string>;
    /**
     * The detail level.
     */
    detailLevel: pulumi.Input<string | enums.LoggingDetails>;
    /**
     * The direction.
     */
    direction: pulumi.Input<string | enums.LoggingDirections>;
    /**
     * The hidden property paths.
     */
    hiddenPropertyPaths?: pulumi.Input<LoggingRuleHiddenPropertyPathsArgs>;
}

/**
 * The hidden property paths.
 */
export interface LoggingRuleHiddenPropertyPathsArgs {
    /**
     * The hidden paths on request.
     */
    hiddenPathsOnRequest?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The hidden paths on response.
     */
    hiddenPathsOnResponse?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface NotificationArgs {
    /**
     * The notification type.
     */
    notificationType?: pulumi.Input<string | enums.NotificationType>;
    /**
     * Whether notifications should be skipped.
     */
    skipNotifications?: pulumi.Input<string | enums.SkipNotifications>;
}

export interface NotificationEndpointArgs {
    /**
     * The locations.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The notification destination.
     */
    notificationDestination?: pulumi.Input<string>;
}

export interface NotificationRegistrationPropertiesArgs {
    /**
     * The included events.
     */
    includedEvents?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The message scope.
     */
    messageScope?: pulumi.Input<string | enums.MessageScope>;
    /**
     * The notification endpoints.
     */
    notificationEndpoints?: pulumi.Input<pulumi.Input<NotificationEndpointArgs>[]>;
    /**
     * The notification mode.
     */
    notificationMode?: pulumi.Input<string | enums.NotificationMode>;
}

export interface OpenApiConfigurationArgs {
    /**
     * The open api validation.
     */
    validation?: pulumi.Input<OpenApiValidationArgs>;
}

export interface OpenApiValidationArgs {
    /**
     * Indicates whether a non compliance response is allowed for a LIST call
     */
    allowNoncompliantCollectionResponse?: pulumi.Input<boolean>;
}

/**
 * The provider authentication.
 */
export interface ProviderHubMetadataProviderAuthenticationArgs {
    /**
     * The allowed audiences.
     */
    allowedAudiences: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The third party provider authorization.
 */
export interface ProviderHubMetadataThirdPartyProviderAuthorizationArgs {
    /**
     * The authorizations.
     */
    authorizations?: pulumi.Input<pulumi.Input<LightHouseAuthorizationArgs>[]>;
    /**
     * The managed by tenant id.
     */
    managedByTenantId?: pulumi.Input<string>;
}

export interface ProviderRegistrationPropertiesArgs {
    /**
     * The capabilities.
     */
    capabilities?: pulumi.Input<pulumi.Input<ResourceProviderCapabilitiesArgs>[]>;
    /**
     * The cross tenant token validation.
     */
    crossTenantTokenValidation?: pulumi.Input<string | enums.CrossTenantTokenValidation>;
    /**
     * Custom manifest version.
     */
    customManifestVersion?: pulumi.Input<string>;
    /**
     * The dsts configuration.
     */
    dstsConfiguration?: pulumi.Input<ResourceProviderManifestPropertiesDstsConfigurationArgs>;
    /**
     * The enable tenant linked notification.
     */
    enableTenantLinkedNotification?: pulumi.Input<boolean>;
    /**
     * The features rule.
     */
    featuresRule?: pulumi.Input<ResourceProviderManifestPropertiesFeaturesRuleArgs>;
    /**
     * The global notification endpoints.
     */
    globalNotificationEndpoints?: pulumi.Input<pulumi.Input<ResourceProviderEndpointArgs>[]>;
    /**
     * Legacy namespace.
     */
    legacyNamespace?: pulumi.Input<string>;
    /**
     * Legacy registrations.
     */
    legacyRegistrations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The linked notification rules.
     */
    linkedNotificationRules?: pulumi.Input<pulumi.Input<FanoutLinkedNotificationRuleArgs>[]>;
    /**
     * The resource provider management.
     */
    management?: pulumi.Input<ResourceProviderManifestPropertiesManagementArgs>;
    /**
     * Management groups global notification endpoints.
     */
    managementGroupGlobalNotificationEndpoints?: pulumi.Input<pulumi.Input<ResourceProviderEndpointArgs>[]>;
    /**
     * The metadata.
     */
    metadata?: any;
    /**
     * The namespace.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Notification options.
     */
    notificationOptions?: pulumi.Input<string | enums.NotificationOptions>;
    /**
     * Notification settings.
     */
    notificationSettings?: pulumi.Input<ResourceProviderManifestPropertiesNotificationSettingsArgs>;
    /**
     * The notifications.
     */
    notifications?: pulumi.Input<pulumi.Input<NotificationArgs>[]>;
    /**
     * Optional features.
     */
    optionalFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The private resource provider configuration.
     */
    privateResourceProviderConfiguration?: pulumi.Input<ProviderRegistrationPropertiesPrivateResourceProviderConfigurationArgs>;
    /**
     * The provider authentication.
     */
    providerAuthentication?: pulumi.Input<ResourceProviderManifestPropertiesProviderAuthenticationArgs>;
    /**
     * The provider authorizations.
     */
    providerAuthorizations?: pulumi.Input<pulumi.Input<ResourceProviderAuthorizationArgs>[]>;
    /**
     * The provider hub metadata.
     */
    providerHubMetadata?: pulumi.Input<ProviderRegistrationPropertiesProviderHubMetadataArgs>;
    /**
     * The provider type.
     */
    providerType?: pulumi.Input<string | enums.ResourceProviderType>;
    /**
     * The provider version.
     */
    providerVersion?: pulumi.Input<string>;
    /**
     * The request header options.
     */
    requestHeaderOptions?: pulumi.Input<ResourceProviderManifestPropertiesRequestHeaderOptionsArgs>;
    /**
     * The required features.
     */
    requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource group lock option during move.
     */
    resourceGroupLockOptionDuringMove?: pulumi.Input<ResourceProviderManifestPropertiesResourceGroupLockOptionDuringMoveArgs>;
    /**
     * resource hydration accounts
     */
    resourceHydrationAccounts?: pulumi.Input<pulumi.Input<ResourceHydrationAccountArgs>[]>;
    /**
     * The resource provider authorization rules.
     */
    resourceProviderAuthorizationRules?: pulumi.Input<ResourceProviderAuthorizationRulesArgs>;
    /**
     * Response options.
     */
    responseOptions?: pulumi.Input<ResourceProviderManifestPropertiesResponseOptionsArgs>;
    /**
     * The service name.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * The services.
     */
    services?: pulumi.Input<pulumi.Input<ResourceProviderServiceArgs>[]>;
    /**
     * The subscription lifecycle notification specifications.
     */
    subscriptionLifecycleNotificationSpecifications?: pulumi.Input<ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs>;
    /**
     * The template deployment options.
     */
    templateDeploymentOptions?: pulumi.Input<ResourceProviderManifestPropertiesTemplateDeploymentOptionsArgs>;
    /**
     * The token auth configuration.
     */
    tokenAuthConfiguration?: pulumi.Input<TokenAuthConfigurationArgs>;
}

/**
 * The private resource provider configuration.
 */
export interface ProviderRegistrationPropertiesPrivateResourceProviderConfigurationArgs {
    /**
     * The allowed subscriptions.
     */
    allowedSubscriptions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The provider hub metadata.
 */
export interface ProviderRegistrationPropertiesProviderHubMetadataArgs {
    /**
     * The direct RP role definition id.
     */
    directRpRoleDefinitionId?: pulumi.Input<string>;
    /**
     * The global async operation resource type name.
     */
    globalAsyncOperationResourceTypeName?: pulumi.Input<string>;
    /**
     * The provider authentication.
     */
    providerAuthentication?: pulumi.Input<ProviderHubMetadataProviderAuthenticationArgs>;
    /**
     * The provider authorizations.
     */
    providerAuthorizations?: pulumi.Input<pulumi.Input<ResourceProviderAuthorizationArgs>[]>;
    /**
     * The regional async operation resource type name.
     */
    regionalAsyncOperationResourceTypeName?: pulumi.Input<string>;
    /**
     * The third party provider authorization.
     */
    thirdPartyProviderAuthorization?: pulumi.Input<ProviderHubMetadataThirdPartyProviderAuthorizationArgs>;
}

/**
 * The subscription lifecycle notification specifications.
 */
export interface ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs {
    /**
     * The soft delete TTL.
     */
    softDeleteTTL?: pulumi.Input<string>;
    /**
     * The subscription state override actions.
     */
    subscriptionStateOverrideActions?: pulumi.Input<pulumi.Input<SubscriptionStateOverrideActionArgs>[]>;
}

export interface QuotaRuleArgs {
    /**
     * The location rules.
     */
    locationRules?: pulumi.Input<pulumi.Input<LocationQuotaRuleArgs>[]>;
    /**
     * The quota policy.
     */
    quotaPolicy?: pulumi.Input<string | enums.QuotaPolicy>;
    /**
     * The required features.
     */
    requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ResourceAccessRoleArgs {
    /**
     * The actions.
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The allowed group claims.
     */
    allowedGroupClaims?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ResourceConcurrencyControlOptionArgs {
    /**
     * The policy.
     */
    policy?: pulumi.Input<string | enums.Policy>;
}

export interface ResourceHydrationAccountArgs {
    /**
     * The account name.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The encrypted key.
     */
    encryptedKey?: pulumi.Input<string>;
    /**
     * The max child resource consistency job limit.
     */
    maxChildResourceConsistencyJobLimit?: pulumi.Input<number>;
    /**
     * The subscription id.
     */
    subscriptionId?: pulumi.Input<string>;
}

export interface ResourceProviderAuthorizationArgs {
    /**
     * The allowed third party extensions.
     */
    allowedThirdPartyExtensions?: pulumi.Input<pulumi.Input<ThirdPartyExtensionArgs>[]>;
    /**
     * The application id.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The grouping tag.
     */
    groupingTag?: pulumi.Input<string>;
    /**
     * Managed by authorization.
     */
    managedByAuthorization?: pulumi.Input<ResourceProviderAuthorizationManagedByAuthorizationArgs>;
    /**
     * The managed by role definition id.
     */
    managedByRoleDefinitionId?: pulumi.Input<string>;
    /**
     * The role definition id.
     */
    roleDefinitionId?: pulumi.Input<string>;
}

/**
 * Managed by authorization.
 */
export interface ResourceProviderAuthorizationManagedByAuthorizationArgs {
    additionalAuthorizations?: pulumi.Input<pulumi.Input<AdditionalAuthorizationArgs>[]>;
    /**
     * Indicates whether the managed by resource role definition ID should be inherited.
     */
    allowManagedByInheritance?: pulumi.Input<boolean>;
    /**
     * The managed by resource role definition ID for the application.
     */
    managedByResourceRoleDefinitionId?: pulumi.Input<string>;
}

export interface ResourceProviderAuthorizationRulesArgs {
    /**
     * The async operation polling rules.
     */
    asyncOperationPollingRules?: pulumi.Input<AsyncOperationPollingRulesArgs>;
}

export interface ResourceProviderCapabilitiesArgs {
    /**
     * The effect.
     */
    effect: pulumi.Input<string | enums.ResourceProviderCapabilitiesEffect>;
    /**
     * The quota id.
     */
    quotaId: pulumi.Input<string>;
    /**
     * The required features.
     */
    requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ResourceProviderEndpointArgs {
    /**
     * The api versions.
     */
    apiVersions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the endpoint is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The endpoint type.
     */
    endpointType?: pulumi.Input<string | enums.EndpointType>;
    /**
     * The endpoint uri.
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * The feature rules.
     */
    featuresRule?: pulumi.Input<ResourceProviderEndpointFeaturesRuleArgs>;
    /**
     * The locations.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The required features.
     */
    requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The sku link.
     */
    skuLink?: pulumi.Input<string>;
    /**
     * The timeout.
     */
    timeout?: pulumi.Input<string>;
}

/**
 * The feature rules.
 */
export interface ResourceProviderEndpointFeaturesRuleArgs {
    /**
     * The required feature policy.
     */
    requiredFeaturesPolicy: pulumi.Input<string | enums.FeaturesPolicy>;
}

/**
 * Options for error response messages.
 */
export interface ResourceProviderManagementErrorResponseMessageOptionsArgs {
    /**
     * Type of server failure response message.
     */
    serverFailureResponseMessageType?: pulumi.Input<string | enums.ServerFailureResponseMessageType>;
}

/**
 * Metadata for expedited rollout.
 */
export interface ResourceProviderManagementExpeditedRolloutMetadataArgs {
    /**
     * Expedited rollout enabled?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Expedited rollout intent.
     */
    expeditedRolloutIntent?: pulumi.Input<string | enums.ExpeditedRolloutIntent>;
}

/**
 * The dsts configuration.
 */
export interface ResourceProviderManifestPropertiesDstsConfigurationArgs {
    /**
     * This is a URI property.
     */
    serviceDnsName?: pulumi.Input<string>;
    /**
     * The service name.
     */
    serviceName: pulumi.Input<string>;
}

/**
 * The features rule.
 */
export interface ResourceProviderManifestPropertiesFeaturesRuleArgs {
    /**
     * The required feature policy.
     */
    requiredFeaturesPolicy: pulumi.Input<string | enums.FeaturesPolicy>;
}

/**
 * The resource provider management.
 */
export interface ResourceProviderManifestPropertiesManagementArgs {
    /**
     * The authorization owners.
     */
    authorizationOwners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of manifest owners for canary.
     */
    canaryManifestOwners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Options for error response messages.
     */
    errorResponseMessageOptions?: pulumi.Input<ResourceProviderManagementErrorResponseMessageOptionsArgs>;
    /**
     * Metadata for expedited rollout.
     */
    expeditedRolloutMetadata?: pulumi.Input<ResourceProviderManagementExpeditedRolloutMetadataArgs>;
    /**
     * List of expedited rollout submitters.
     */
    expeditedRolloutSubmitters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The incident contact email.
     */
    incidentContactEmail?: pulumi.Input<string>;
    /**
     * The incident routing service.
     */
    incidentRoutingService?: pulumi.Input<string>;
    /**
     * The incident routing team.
     */
    incidentRoutingTeam?: pulumi.Input<string>;
    /**
     * The manifest owners.
     */
    manifestOwners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The profit center code for the subscription.
     */
    pcCode?: pulumi.Input<string>;
    /**
     * The profit center program id for the subscription.
     */
    profitCenterProgramId?: pulumi.Input<string>;
    /**
     * The resource access policy.
     */
    resourceAccessPolicy?: pulumi.Input<string | enums.ResourceAccessPolicy>;
    /**
     * The resource access roles.
     */
    resourceAccessRoles?: pulumi.Input<pulumi.Input<ResourceAccessRoleArgs>[]>;
    /**
     * The schema owners.
     */
    schemaOwners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The service tree infos.
     */
    serviceTreeInfos?: pulumi.Input<pulumi.Input<ServiceTreeInfoArgs>[]>;
}

/**
 * Notification settings.
 */
export interface ResourceProviderManifestPropertiesNotificationSettingsArgs {
    subscriberSettings?: pulumi.Input<pulumi.Input<SubscriberSettingArgs>[]>;
}

/**
 * The provider authentication.
 */
export interface ResourceProviderManifestPropertiesProviderAuthenticationArgs {
    /**
     * The allowed audiences.
     */
    allowedAudiences: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The request header options.
 */
export interface ResourceProviderManifestPropertiesRequestHeaderOptionsArgs {
    /**
     * The opt in headers.
     */
    optInHeaders?: pulumi.Input<string | enums.OptInHeaderType>;
    /**
     * The opt out headers.
     */
    optOutHeaders?: pulumi.Input<string | enums.OptOutHeaderType>;
}

/**
 * Resource group lock option during move.
 */
export interface ResourceProviderManifestPropertiesResourceGroupLockOptionDuringMoveArgs {
    /**
     * The action verb that will be blocked when the resource group is locked during move.
     */
    blockActionVerb?: pulumi.Input<string | enums.BlockActionVerb>;
}

/**
 * Response options.
 */
export interface ResourceProviderManifestPropertiesResponseOptionsArgs {
    serviceClientOptionsType?: pulumi.Input<string | enums.ServiceClientOptionsType>;
}

/**
 * The template deployment options.
 */
export interface ResourceProviderManifestPropertiesTemplateDeploymentOptionsArgs {
    /**
     * The preflight options.
     */
    preflightOptions?: pulumi.Input<pulumi.Input<string | enums.PreflightOption>[]>;
    /**
     * Whether preflight is supported.
     */
    preflightSupported?: pulumi.Input<boolean>;
}

/**
 * Resource provider service.
 */
export interface ResourceProviderServiceArgs {
    /**
     * The service name.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * The status.
     */
    status?: pulumi.Input<string | enums.ServiceStatus>;
}

export interface ResourceTypeEndpointArgs {
    /**
     * Api version.
     */
    apiVersion?: pulumi.Input<string>;
    /**
     * The api versions.
     */
    apiVersions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The data boundary.
     */
    dataBoundary?: pulumi.Input<string | enums.DataBoundary>;
    /**
     * The dsts configuration.
     */
    dstsConfiguration?: pulumi.Input<ResourceTypeEndpointDstsConfigurationArgs>;
    /**
     * Whether the endpoint is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The endpoint type.
     */
    endpointType?: pulumi.Input<string | enums.EndpointTypeResourceType>;
    /**
     * The endpoint uri.
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * The extensions.
     */
    extensions?: pulumi.Input<pulumi.Input<ResourceTypeExtensionArgs>[]>;
    /**
     * The features rule.
     */
    featuresRule?: pulumi.Input<ResourceTypeEndpointFeaturesRuleArgs>;
    /**
     * Resource type endpoint kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: pulumi.Input<string | enums.ResourceTypeEndpointKind>;
    /**
     * The locations.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The required features.
     */
    requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The sku link.
     */
    skuLink?: pulumi.Input<string>;
    /**
     * The timeout.
     */
    timeout?: pulumi.Input<string>;
    /**
     * The token auth configuration.
     */
    tokenAuthConfiguration?: pulumi.Input<TokenAuthConfigurationArgs>;
    /**
     * List of zones.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * resourceTypeEndpointArgsProvideDefaults sets the appropriate defaults for ResourceTypeEndpointArgs
 */
export function resourceTypeEndpointArgsProvideDefaults(val: ResourceTypeEndpointArgs): ResourceTypeEndpointArgs {
    return {
        ...val,
        kind: (val.kind) ?? "Managed",
    };
}

/**
 * The dsts configuration.
 */
export interface ResourceTypeEndpointDstsConfigurationArgs {
    /**
     * This is a URI property.
     */
    serviceDnsName?: pulumi.Input<string>;
    /**
     * The service name.
     */
    serviceName: pulumi.Input<string>;
}

/**
 * The features rule.
 */
export interface ResourceTypeEndpointFeaturesRuleArgs {
    /**
     * The required feature policy.
     */
    requiredFeaturesPolicy: pulumi.Input<string | enums.FeaturesPolicy>;
}

export interface ResourceTypeExtensionArgs {
    /**
     * The endpoint uri.
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * The extension categories.
     */
    extensionCategories?: pulumi.Input<pulumi.Input<string | enums.ExtensionCategory>[]>;
    /**
     * The timeout.
     */
    timeout?: pulumi.Input<string>;
}

/**
 * Resource creation begin.
 */
export interface ResourceTypeExtensionOptionsResourceCreationBeginArgs {
    /**
     * The request.
     */
    request?: pulumi.Input<pulumi.Input<string | enums.ExtensionOptionType>[]>;
    /**
     * The response.
     */
    response?: pulumi.Input<pulumi.Input<string | enums.ExtensionOptionType>[]>;
}

export interface ResourceTypeOnBehalfOfTokenArgs {
    /**
     * The action name.
     */
    actionName?: pulumi.Input<string>;
    /**
     * This is a TimeSpan property.
     */
    lifeTime?: pulumi.Input<string>;
}

export interface ResourceTypeRegistrationArgs {
    /**
     * Resource type registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: pulumi.Input<string | enums.ResourceTypeRegistrationKind>;
    properties?: pulumi.Input<ResourceTypeRegistrationPropertiesArgs>;
}
/**
 * resourceTypeRegistrationArgsProvideDefaults sets the appropriate defaults for ResourceTypeRegistrationArgs
 */
export function resourceTypeRegistrationArgsProvideDefaults(val: ResourceTypeRegistrationArgs): ResourceTypeRegistrationArgs {
    return {
        ...val,
        kind: (val.kind) ?? "Managed",
    };
}

export interface ResourceTypeRegistrationPropertiesArgs {
    /**
     * Add resource list target locations?
     */
    addResourceListTargetLocations?: pulumi.Input<boolean>;
    /**
     * The additional options.
     */
    additionalOptions?: pulumi.Input<string | enums.AdditionalOptionsResourceTypeRegistration>;
    /**
     * The allow empty role assignments.
     */
    allowEmptyRoleAssignments?: pulumi.Input<boolean>;
    /**
     * The allowed resource names.
     */
    allowedResourceNames?: pulumi.Input<pulumi.Input<AllowedResourceNameArgs>[]>;
    /**
     * Allowed template deployment reference actions.
     */
    allowedTemplateDeploymentReferenceActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The allowed unauthorized actions.
     */
    allowedUnauthorizedActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The allowed unauthorized actions extensions.
     */
    allowedUnauthorizedActionsExtensions?: pulumi.Input<pulumi.Input<AllowedUnauthorizedActionsExtensionArgs>[]>;
    /**
     * The api profiles.
     */
    apiProfiles?: pulumi.Input<pulumi.Input<ApiProfileArgs>[]>;
    /**
     * The async operation resource type name.
     */
    asyncOperationResourceTypeName?: pulumi.Input<string>;
    /**
     * Async timeout rules
     */
    asyncTimeoutRules?: pulumi.Input<pulumi.Input<AsyncTimeoutRuleArgs>[]>;
    /**
     * The authorization action mappings
     */
    authorizationActionMappings?: pulumi.Input<pulumi.Input<AuthorizationActionMappingArgs>[]>;
    /**
     * The availability zone rule.
     */
    availabilityZoneRule?: pulumi.Input<ResourceTypeRegistrationPropertiesAvailabilityZoneRuleArgs>;
    /**
     * Capacity rule.
     */
    capacityRule?: pulumi.Input<ResourceTypeRegistrationPropertiesCapacityRuleArgs>;
    /**
     * The category.
     */
    category?: pulumi.Input<string | enums.ResourceTypeCategory>;
    /**
     * The check name availability specifications.
     */
    checkNameAvailabilitySpecifications?: pulumi.Input<ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecificationsArgs>;
    /**
     * Common API versions for the resource type.
     */
    commonApiVersions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The cross tenant token validation.
     */
    crossTenantTokenValidation?: pulumi.Input<string | enums.CrossTenantTokenValidation>;
    /**
     * The default api version.
     */
    defaultApiVersion?: pulumi.Input<string>;
    /**
     * The disallowed action verbs.
     */
    disallowedActionVerbs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The disallowed end user operations.
     */
    disallowedEndUserOperations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The dsts configuration.
     */
    dstsConfiguration?: pulumi.Input<ResourceTypeRegistrationPropertiesDstsConfigurationArgs>;
    /**
     * Whether async operation is enabled.
     */
    enableAsyncOperation?: pulumi.Input<boolean>;
    /**
     * Whether third party S2S is enabled.
     */
    enableThirdPartyS2S?: pulumi.Input<boolean>;
    /**
     * The extensions.
     */
    endpoints?: pulumi.Input<pulumi.Input<ResourceTypeEndpointArgs>[]>;
    /**
     * The extended locations.
     */
    extendedLocations?: pulumi.Input<pulumi.Input<ExtendedLocationOptionsArgs>[]>;
    /**
     * The extension options.
     */
    extensionOptions?: pulumi.Input<ResourceTypeRegistrationPropertiesExtensionOptionsArgs>;
    /**
     * The features rule.
     */
    featuresRule?: pulumi.Input<ResourceTypeRegistrationPropertiesFeaturesRuleArgs>;
    /**
     * The frontdoor request mode.
     */
    frontdoorRequestMode?: pulumi.Input<string | enums.FrontdoorRequestMode>;
    /**
     * Grouping tag.
     */
    groupingTag?: pulumi.Input<string>;
    /**
     * The identity management.
     */
    identityManagement?: pulumi.Input<ResourceTypeRegistrationPropertiesIdentityManagementArgs>;
    /**
     * Whether it is pure proxy.
     */
    isPureProxy?: pulumi.Input<boolean>;
    /**
     * The legacy name.
     */
    legacyName?: pulumi.Input<string>;
    /**
     * The legacy names.
     */
    legacyNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The legacy policy.
     */
    legacyPolicy?: pulumi.Input<ResourceTypeRegistrationPropertiesLegacyPolicyArgs>;
    /**
     * The linked access checks.
     */
    linkedAccessChecks?: pulumi.Input<pulumi.Input<LinkedAccessCheckArgs>[]>;
    /**
     * The linked notification rules.
     */
    linkedNotificationRules?: pulumi.Input<pulumi.Input<LinkedNotificationRuleArgs>[]>;
    /**
     * The linked operation rules.
     */
    linkedOperationRules?: pulumi.Input<pulumi.Input<LinkedOperationRuleArgs>[]>;
    /**
     * The logging rules.
     */
    loggingRules?: pulumi.Input<pulumi.Input<LoggingRuleArgs>[]>;
    /**
     * The resource provider management.
     */
    management?: pulumi.Input<ResourceTypeRegistrationPropertiesManagementArgs>;
    /**
     * Manifest link.
     */
    manifestLink?: pulumi.Input<string>;
    /**
     * Marketplace options.
     */
    marketplaceOptions?: pulumi.Input<ResourceTypeRegistrationPropertiesMarketplaceOptionsArgs>;
    /**
     * The marketplace type.
     */
    marketplaceType?: pulumi.Input<string | enums.MarketplaceType>;
    /**
     * The metadata.
     */
    metadata?: pulumi.Input<{[key: string]: any}>;
    /**
     * The notifications.
     */
    notifications?: pulumi.Input<pulumi.Input<NotificationArgs>[]>;
    /**
     * The on behalf of tokens.
     */
    onBehalfOfTokens?: pulumi.Input<ResourceTypeOnBehalfOfTokenArgs>;
    /**
     * The open api configuration.
     */
    openApiConfiguration?: pulumi.Input<OpenApiConfigurationArgs>;
    /**
     * The policy execution type.
     */
    policyExecutionType?: pulumi.Input<string | enums.PolicyExecutionType>;
    /**
     * The quota rule.
     */
    quotaRule?: pulumi.Input<QuotaRuleArgs>;
    /**
     * The regionality.
     */
    regionality?: pulumi.Input<string | enums.Regionality>;
    /**
     * The request header options.
     */
    requestHeaderOptions?: pulumi.Input<ResourceTypeRegistrationPropertiesRequestHeaderOptionsArgs>;
    /**
     * The required features.
     */
    requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource cache options.
     */
    resourceCache?: pulumi.Input<ResourceTypeRegistrationPropertiesResourceCacheArgs>;
    /**
     * The resource concurrency control options.
     */
    resourceConcurrencyControlOptions?: pulumi.Input<{[key: string]: pulumi.Input<ResourceConcurrencyControlOptionArgs>}>;
    /**
     * The resource deletion policy.
     */
    resourceDeletionPolicy?: pulumi.Input<string | enums.ResourceDeletionPolicy>;
    /**
     * The resource graph configuration.
     */
    resourceGraphConfiguration?: pulumi.Input<ResourceTypeRegistrationPropertiesResourceGraphConfigurationArgs>;
    /**
     * Resource management options.
     */
    resourceManagementOptions?: pulumi.Input<ResourceTypeRegistrationPropertiesResourceManagementOptionsArgs>;
    /**
     * The resource move policy.
     */
    resourceMovePolicy?: pulumi.Input<ResourceTypeRegistrationPropertiesResourceMovePolicyArgs>;
    /**
     * The resource provider authorization rules.
     */
    resourceProviderAuthorizationRules?: pulumi.Input<ResourceProviderAuthorizationRulesArgs>;
    /**
     * Resource query management options.
     */
    resourceQueryManagement?: pulumi.Input<ResourceTypeRegistrationPropertiesResourceQueryManagementArgs>;
    /**
     * The resource sub type.
     */
    resourceSubType?: pulumi.Input<string | enums.ResourceSubType>;
    /**
     * Resource type common attribute management.
     */
    resourceTypeCommonAttributeManagement?: pulumi.Input<ResourceTypeRegistrationPropertiesResourceTypeCommonAttributeManagementArgs>;
    /**
     * The resource validation.
     */
    resourceValidation?: pulumi.Input<string | enums.ResourceValidation>;
    /**
     * Routing rule.
     */
    routingRule?: pulumi.Input<ResourceTypeRegistrationPropertiesRoutingRuleArgs>;
    /**
     * The resource routing type.
     */
    routingType?: pulumi.Input<string | enums.RoutingType>;
    /**
     * The service tree infos.
     */
    serviceTreeInfos?: pulumi.Input<pulumi.Input<ServiceTreeInfoArgs>[]>;
    /**
     * The sku link.
     */
    skuLink?: pulumi.Input<string>;
    /**
     * The subscription lifecycle notification specifications.
     */
    subscriptionLifecycleNotificationSpecifications?: pulumi.Input<ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs>;
    /**
     * The subscription state rules.
     */
    subscriptionStateRules?: pulumi.Input<pulumi.Input<SubscriptionStateRuleArgs>[]>;
    /**
     * Whether tags are supported.
     */
    supportsTags?: pulumi.Input<boolean>;
    /**
     * The swagger specifications.
     */
    swaggerSpecifications?: pulumi.Input<pulumi.Input<SwaggerSpecificationArgs>[]>;
    /**
     * The template deployment options.
     */
    templateDeploymentOptions?: pulumi.Input<ResourceTypeRegistrationPropertiesTemplateDeploymentOptionsArgs>;
    /**
     * The template deployment policy.
     */
    templateDeploymentPolicy?: pulumi.Input<ResourceTypeRegistrationPropertiesTemplateDeploymentPolicyArgs>;
    /**
     * The throttling rules.
     */
    throttlingRules?: pulumi.Input<pulumi.Input<ThrottlingRuleArgs>[]>;
    /**
     * The token auth configuration.
     */
    tokenAuthConfiguration?: pulumi.Input<TokenAuthConfigurationArgs>;
}

/**
 * The availability zone rule.
 */
export interface ResourceTypeRegistrationPropertiesAvailabilityZoneRuleArgs {
    availabilityZonePolicy?: pulumi.Input<string | enums.AvailabilityZonePolicy>;
}

/**
 * Batch provisioning support.
 */
export interface ResourceTypeRegistrationPropertiesBatchProvisioningSupportArgs {
    /**
     * Supported operations.
     */
    supportedOperations?: pulumi.Input<string | enums.SupportedOperations>;
}

/**
 * Capacity rule.
 */
export interface ResourceTypeRegistrationPropertiesCapacityRuleArgs {
    /**
     * Capacity policy.
     */
    capacityPolicy?: pulumi.Input<string | enums.CapacityPolicy>;
    /**
     * Sku alias
     */
    skuAlias?: pulumi.Input<string>;
}

/**
 * The check name availability specifications.
 */
export interface ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecificationsArgs {
    /**
     * Whether default validation is enabled.
     */
    enableDefaultValidation?: pulumi.Input<boolean>;
    /**
     * The resource types with custom validation.
     */
    resourceTypesWithCustomValidation?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The dsts configuration.
 */
export interface ResourceTypeRegistrationPropertiesDstsConfigurationArgs {
    /**
     * This is a URI property.
     */
    serviceDnsName?: pulumi.Input<string>;
    /**
     * The service name.
     */
    serviceName: pulumi.Input<string>;
}

/**
 * The extension options.
 */
export interface ResourceTypeRegistrationPropertiesExtensionOptionsArgs {
    /**
     * Resource creation begin.
     */
    resourceCreationBegin?: pulumi.Input<ResourceTypeExtensionOptionsResourceCreationBeginArgs>;
}

/**
 * The features rule.
 */
export interface ResourceTypeRegistrationPropertiesFeaturesRuleArgs {
    /**
     * The required feature policy.
     */
    requiredFeaturesPolicy: pulumi.Input<string | enums.FeaturesPolicy>;
}

/**
 * The identity management.
 */
export interface ResourceTypeRegistrationPropertiesIdentityManagementArgs {
    /**
     * The application id.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The application ids.
     */
    applicationIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The delegation app ids.
     */
    delegationAppIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type.
     */
    type?: pulumi.Input<string | enums.IdentityManagementTypes>;
}

/**
 * The legacy policy.
 */
export interface ResourceTypeRegistrationPropertiesLegacyPolicyArgs {
    disallowedConditions?: pulumi.Input<pulumi.Input<LegacyDisallowedConditionArgs>[]>;
    disallowedLegacyOperations?: pulumi.Input<pulumi.Input<string | enums.LegacyOperation>[]>;
}

/**
 * The resource provider management.
 */
export interface ResourceTypeRegistrationPropertiesManagementArgs {
    /**
     * The authorization owners.
     */
    authorizationOwners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of manifest owners for canary.
     */
    canaryManifestOwners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Options for error response messages.
     */
    errorResponseMessageOptions?: pulumi.Input<ResourceProviderManagementErrorResponseMessageOptionsArgs>;
    /**
     * Metadata for expedited rollout.
     */
    expeditedRolloutMetadata?: pulumi.Input<ResourceProviderManagementExpeditedRolloutMetadataArgs>;
    /**
     * List of expedited rollout submitters.
     */
    expeditedRolloutSubmitters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The incident contact email.
     */
    incidentContactEmail?: pulumi.Input<string>;
    /**
     * The incident routing service.
     */
    incidentRoutingService?: pulumi.Input<string>;
    /**
     * The incident routing team.
     */
    incidentRoutingTeam?: pulumi.Input<string>;
    /**
     * The manifest owners.
     */
    manifestOwners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The profit center code for the subscription.
     */
    pcCode?: pulumi.Input<string>;
    /**
     * The profit center program id for the subscription.
     */
    profitCenterProgramId?: pulumi.Input<string>;
    /**
     * The resource access policy.
     */
    resourceAccessPolicy?: pulumi.Input<string | enums.ResourceAccessPolicy>;
    /**
     * The resource access roles.
     */
    resourceAccessRoles?: pulumi.Input<pulumi.Input<ResourceAccessRoleArgs>[]>;
    /**
     * The schema owners.
     */
    schemaOwners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The service tree infos.
     */
    serviceTreeInfos?: pulumi.Input<pulumi.Input<ServiceTreeInfoArgs>[]>;
}

/**
 * Marketplace options.
 */
export interface ResourceTypeRegistrationPropertiesMarketplaceOptionsArgs {
    /**
     * Add-on plan conversion allowed.
     */
    addOnPlanConversionAllowed?: pulumi.Input<boolean>;
}

/**
 * Nested provisioning support.
 */
export interface ResourceTypeRegistrationPropertiesNestedProvisioningSupportArgs {
    /**
     * Minimum API version.
     */
    minimumApiVersion?: pulumi.Input<string>;
}

/**
 * The request header options.
 */
export interface ResourceTypeRegistrationPropertiesRequestHeaderOptionsArgs {
    /**
     * The opt in headers.
     */
    optInHeaders?: pulumi.Input<string | enums.OptInHeaderType>;
    /**
     * The opt out headers.
     */
    optOutHeaders?: pulumi.Input<string | enums.OptOutHeaderType>;
}

/**
 * Resource cache options.
 */
export interface ResourceTypeRegistrationPropertiesResourceCacheArgs {
    /**
     * Enable resource cache.
     */
    enableResourceCache?: pulumi.Input<boolean>;
    /**
     * Resource cache expiration timespan. This is a TimeSpan property.
     */
    resourceCacheExpirationTimespan?: pulumi.Input<string>;
}

/**
 * The resource graph configuration.
 */
export interface ResourceTypeRegistrationPropertiesResourceGraphConfigurationArgs {
    /**
     * The api version.
     */
    apiVersion?: pulumi.Input<string>;
    /**
     * Whether it's enabled.
     */
    enabled?: pulumi.Input<boolean>;
}

/**
 * Resource management options.
 */
export interface ResourceTypeRegistrationPropertiesResourceManagementOptionsArgs {
    /**
     * Batch provisioning support.
     */
    batchProvisioningSupport?: pulumi.Input<ResourceTypeRegistrationPropertiesBatchProvisioningSupportArgs>;
    /**
     * Delete dependencies.
     */
    deleteDependencies?: pulumi.Input<pulumi.Input<DeleteDependencyArgs>[]>;
    /**
     * Nested provisioning support.
     */
    nestedProvisioningSupport?: pulumi.Input<ResourceTypeRegistrationPropertiesNestedProvisioningSupportArgs>;
}

/**
 * The resource move policy.
 */
export interface ResourceTypeRegistrationPropertiesResourceMovePolicyArgs {
    /**
     * Whether cross resource group move is enabled.
     */
    crossResourceGroupMoveEnabled?: pulumi.Input<boolean>;
    /**
     * Whether cross subscription move is enabled.
     */
    crossSubscriptionMoveEnabled?: pulumi.Input<boolean>;
    /**
     * Whether validation is required.
     */
    validationRequired?: pulumi.Input<boolean>;
}

/**
 * Resource query management options.
 */
export interface ResourceTypeRegistrationPropertiesResourceQueryManagementArgs {
    /**
     * Filter option.
     */
    filterOption?: pulumi.Input<string | enums.FilterOption>;
}

/**
 * Resource type common attribute management.
 */
export interface ResourceTypeRegistrationPropertiesResourceTypeCommonAttributeManagementArgs {
    /**
     * Common api versions merge mode.
     */
    commonApiVersionsMergeMode?: pulumi.Input<string | enums.CommonApiVersionsMergeMode>;
}

/**
 * Routing rule.
 */
export interface ResourceTypeRegistrationPropertiesRoutingRuleArgs {
    /**
     * Hosted resource type.
     */
    hostResourceType?: pulumi.Input<string>;
}

/**
 * The subscription lifecycle notification specifications.
 */
export interface ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecificationsArgs {
    /**
     * The soft delete TTL.
     */
    softDeleteTTL?: pulumi.Input<string>;
    /**
     * The subscription state override actions.
     */
    subscriptionStateOverrideActions?: pulumi.Input<pulumi.Input<SubscriptionStateOverrideActionArgs>[]>;
}

/**
 * The template deployment options.
 */
export interface ResourceTypeRegistrationPropertiesTemplateDeploymentOptionsArgs {
    /**
     * The preflight options.
     */
    preflightOptions?: pulumi.Input<pulumi.Input<string | enums.PreflightOption>[]>;
    /**
     * Whether preflight is supported.
     */
    preflightSupported?: pulumi.Input<boolean>;
}

/**
 * The template deployment policy.
 */
export interface ResourceTypeRegistrationPropertiesTemplateDeploymentPolicyArgs {
    /**
     * The capabilities.
     */
    capabilities: pulumi.Input<string | enums.TemplateDeploymentCapabilities>;
    /**
     * The preflight notifications.
     */
    preflightNotifications?: pulumi.Input<string | enums.TemplateDeploymentPreflightNotifications>;
    /**
     * The preflight options.
     */
    preflightOptions: pulumi.Input<string | enums.TemplateDeploymentPreflightOptions>;
}

export interface ServiceTreeInfoArgs {
    /**
     * The component id.
     */
    componentId?: pulumi.Input<string>;
    /**
     * The readiness.
     */
    readiness?: pulumi.Input<string | enums.Readiness>;
    /**
     * The service id.
     */
    serviceId?: pulumi.Input<string>;
}

export interface SkuCapabilityArgs {
    /**
     * The name.
     */
    name: pulumi.Input<string>;
    /**
     * The value.
     */
    value: pulumi.Input<string>;
}

export interface SkuCostArgs {
    /**
     * The extended unit.
     */
    extendedUnit?: pulumi.Input<string>;
    /**
     * The meter id.
     */
    meterId: pulumi.Input<string>;
    /**
     * The quantity.
     */
    quantity?: pulumi.Input<number>;
}

export interface SkuLocationInfoArgs {
    /**
     * The extended locations.
     */
    extendedLocations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The location.
     */
    location: pulumi.Input<string>;
    /**
     * The type.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationType>;
    /**
     * The zone details.
     */
    zoneDetails?: pulumi.Input<pulumi.Input<SkuZoneDetailArgs>[]>;
    /**
     * The zones.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SkuResourcePropertiesArgs {
    /**
     * The sku settings.
     */
    skuSettings: pulumi.Input<pulumi.Input<SkuSettingArgs>[]>;
}

export interface SkuSettingArgs {
    /**
     * The capabilities.
     */
    capabilities?: pulumi.Input<pulumi.Input<SkuCapabilityArgs>[]>;
    /**
     * The capacity.
     */
    capacity?: pulumi.Input<SkuSettingCapacityArgs>;
    /**
     * The costs.
     */
    costs?: pulumi.Input<pulumi.Input<SkuCostArgs>[]>;
    /**
     * The family.
     */
    family?: pulumi.Input<string>;
    /**
     * The kind.
     */
    kind?: pulumi.Input<string>;
    /**
     * The location info.
     */
    locationInfo?: pulumi.Input<pulumi.Input<SkuLocationInfoArgs>[]>;
    /**
     * The locations.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name.
     */
    name: pulumi.Input<string>;
    /**
     * The required features.
     */
    requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The required quota ids.
     */
    requiredQuotaIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The size.
     */
    size?: pulumi.Input<string>;
    /**
     * The tier.
     */
    tier?: pulumi.Input<string>;
}

/**
 * The capacity.
 */
export interface SkuSettingCapacityArgs {
    /**
     * The default.
     */
    default?: pulumi.Input<number>;
    /**
     * The maximum.
     */
    maximum?: pulumi.Input<number>;
    /**
     * The minimum.
     */
    minimum: pulumi.Input<number>;
    /**
     * The scale type.
     */
    scaleType?: pulumi.Input<string | enums.SkuScaleType>;
}

export interface SkuZoneDetailArgs {
    /**
     * The capabilities.
     */
    capabilities?: pulumi.Input<pulumi.Input<SkuCapabilityArgs>[]>;
    /**
     * The name.
     */
    name?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SubscriberSettingArgs {
    /**
     * The filter rules.
     */
    filterRules?: pulumi.Input<pulumi.Input<FilterRuleArgs>[]>;
}

export interface SubscriptionStateOverrideActionArgs {
    /**
     * The action.
     */
    action: pulumi.Input<string | enums.SubscriptionNotificationOperation>;
    /**
     * The state.
     */
    state: pulumi.Input<string | enums.SubscriptionTransitioningState>;
}

export interface SubscriptionStateRuleArgs {
    /**
     * The allowed actions.
     */
    allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The subscription state.
     */
    state?: pulumi.Input<string | enums.SubscriptionState>;
}

export interface SwaggerSpecificationArgs {
    /**
     * The api versions.
     */
    apiVersions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The swagger spec folder uri.
     */
    swaggerSpecFolderUri?: pulumi.Input<string>;
}

export interface ThirdPartyExtensionArgs {
    /**
     * Name of third party extension.
     */
    name?: pulumi.Input<string>;
}

export interface ThrottlingMetricArgs {
    /**
     * The interval.
     */
    interval?: pulumi.Input<string>;
    /**
     * The limit.
     */
    limit: pulumi.Input<number>;
    /**
     * The throttling metric type
     */
    type: pulumi.Input<string | enums.ThrottlingMetricType>;
}

export interface ThrottlingRuleArgs {
    /**
     * The action.
     */
    action: pulumi.Input<string>;
    /**
     * The application id.
     */
    applicationId?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The metrics.
     */
    metrics: pulumi.Input<pulumi.Input<ThrottlingMetricArgs>[]>;
    /**
     * The required features.
     */
    requiredFeatures?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface TokenAuthConfigurationArgs {
    /**
     * The authentication scheme.
     */
    authenticationScheme?: pulumi.Input<string | enums.AuthenticationScheme>;
    /**
     * Whether certification authentication fallback is disabled.
     */
    disableCertificateAuthenticationFallback?: pulumi.Input<boolean>;
    /**
     * The signed request scope.
     */
    signedRequestScope?: pulumi.Input<string | enums.SignedRequestScope>;
}

/**
 * Error information.
 */
export interface TypedErrorInfoArgs {
    /**
     * The type of the error.
     */
    type: pulumi.Input<string>;
}
