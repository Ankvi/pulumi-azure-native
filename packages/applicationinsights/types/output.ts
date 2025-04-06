import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
 */
export interface ApplicationInsightsComponentAnalyticsItemPropertiesResponse {
    /**
     * A function alias, used when the type of the item is Function
     */
    functionAlias?: string;
}

/**
 * An Application Insights component daily data volume cap
 */
export interface ApplicationInsightsComponentDataVolumeCapResponse {
    /**
     * Daily data volume cap in GB.
     */
    cap?: number;
    /**
     * Maximum daily data volume cap that the user can set for this component.
     */
    maxHistoryCap: number;
    /**
     * Daily data volume cap UTC reset hour.
     */
    resetTime: number;
    /**
     * Do not send a notification email when the daily data volume cap is met.
     */
    stopSendNotificationWhenHitCap?: boolean;
    /**
     * Reserved, not used for now.
     */
    stopSendNotificationWhenHitThreshold?: boolean;
    /**
     * Reserved, not used for now.
     */
    warningThreshold?: number;
}

/**
 * Properties that define a ProactiveDetection configuration.
 */
export interface ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesResponse {
    /**
     * Custom email addresses for this rule notifications
     */
    customEmails?: string[];
    /**
     * A flag that indicates whether this rule is enabled by the user
     */
    enabled?: boolean;
    /**
     * The last time this rule was updated
     */
    lastUpdatedTime: string;
    /**
     * The rule name
     */
    name: string;
    /**
     * Static definitions of the ProactiveDetection configuration rule (same values for all components).
     */
    ruleDefinitions?: ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesResponseRuleDefinitions;
    /**
     * A flag that indicated whether notifications on this rule should be sent to subscription owners
     */
    sendEmailsToSubscriptionOwners?: boolean;
}

/**
 * Static definitions of the ProactiveDetection configuration rule (same values for all components).
 */
export interface ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesResponseRuleDefinitions {
    /**
     * The rule description
     */
    description?: string;
    /**
     * The rule name as it is displayed in UI
     */
    displayName?: string;
    /**
     * URL which displays additional info about the proactive detection rule
     */
    helpUrl?: string;
    /**
     * A flag indicating whether the rule is enabled by default
     */
    isEnabledByDefault?: boolean;
    /**
     * A flag indicating whether the rule is hidden (from the UI)
     */
    isHidden?: boolean;
    /**
     * A flag indicating whether the rule is in preview
     */
    isInPreview?: boolean;
    /**
     * The rule name
     */
    name?: string;
    /**
     * A flag indicating whether email notifications are supported for detections for this rule
     */
    supportsEmailNotifications?: boolean;
}

/**
 * A header to add to the WebTest.
 */
export interface HeaderFieldResponse {
    /**
     * The name of the header.
     */
    headerFieldName?: string;
    /**
     * The value of the header.
     */
    headerFieldValue?: string;
}

/**
 * Customer Managed Identity
 */
export interface MyWorkbookManagedIdentityResponse {
    /**
     * The identity type.
     */
    type?: string;
    /**
     * Customer Managed Identity
     */
    userAssignedIdentities?: MyWorkbookUserAssignedIdentitiesResponse;
}

/**
 * Customer Managed Identity
 */
export interface MyWorkbookUserAssignedIdentitiesResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
}

/**
 * The private link scope resource reference.
 */
export interface PrivateLinkScopedResourceResponse {
    /**
     * The full resource Id of the private link scope resource.
     */
    resourceId?: string;
    /**
     * The private link scope unique Identifier.
     */
    scopeId?: string;
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
 * Geo-physical location to run a WebTest from. You must specify one or more locations for the test to run from.
 */
export interface WebTestGeolocationResponse {
    /**
     * Location ID for the WebTest to run from.
     */
    location?: string;
}

/**
 * An XML configuration specification for a WebTest.
 */
export interface WebTestPropertiesResponseConfiguration {
    /**
     * The XML specification of a WebTest to run against an application.
     */
    webTest?: string;
}

/**
 * The collection of content validation properties
 */
export interface WebTestPropertiesResponseContentValidation {
    /**
     * Content to look for in the return of the WebTest.  Must not be null or empty.
     */
    contentMatch?: string;
    /**
     * When set, this value makes the ContentMatch validation case insensitive.
     */
    ignoreCase?: boolean;
    /**
     * When true, validation will pass if there is a match for the ContentMatch string.  If false, validation will fail if there is a match
     */
    passIfTextFound?: boolean;
}

/**
 * The collection of request properties
 */
export interface WebTestPropertiesResponseRequest {
    /**
     * Follow redirects for this web test.
     */
    followRedirects?: boolean;
    /**
     * List of headers and their values to add to the WebTest call.
     */
    headers?: HeaderFieldResponse[];
    /**
     * Http verb to use for this web test.
     */
    httpVerb?: string;
    /**
     * Parse Dependent request for this WebTest.
     */
    parseDependentRequests?: boolean;
    /**
     * Base64 encoded string body to send with this web test.
     */
    requestBody?: string;
    /**
     * Url location to test.
     */
    requestUrl?: string;
}

/**
 * The collection of validation rule properties
 */
export interface WebTestPropertiesResponseValidationRules {
    /**
     * The collection of content validation properties
     */
    contentValidation?: WebTestPropertiesResponseContentValidation;
    /**
     * Validate that the WebTest returns the http status code provided.
     */
    expectedHttpStatusCode?: number;
    /**
     * When set, validation will ignore the status code.
     */
    ignoreHttpStatusCode?: boolean;
    /**
     * A number of days to check still remain before the the existing SSL cert expires.  Value must be positive and the SSLCheck must be set to true.
     */
    sSLCertRemainingLifetimeCheck?: number;
    /**
     * Checks to see if the SSL cert is still valid.
     */
    sSLCheck?: boolean;
}

/**
 * Identity used for BYOS
 */
export interface WorkbookResourceResponseIdentity {
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
 * Gallery information for a workbook template.
 */
export interface WorkbookTemplateGalleryResponse {
    /**
     * Category for the gallery.
     */
    category?: string;
    /**
     * Name of the workbook template in the gallery.
     */
    name?: string;
    /**
     * Order of the template within the gallery.
     */
    order?: number;
    /**
     * Azure resource type supported by the gallery.
     */
    resourceType?: string;
    /**
     * Type of workbook supported by the workbook template.
     */
    type?: string;
}

/**
 * Localized template data and gallery information.
 */
export interface WorkbookTemplateLocalizedGalleryResponse {
    /**
     * Workbook galleries supported by the template.
     */
    galleries?: WorkbookTemplateGalleryResponse[];
    /**
     * Valid JSON object containing workbook template payload.
     */
    templateData?: any;
}
