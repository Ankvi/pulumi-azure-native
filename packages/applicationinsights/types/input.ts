import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
 */
export interface ApplicationInsightsComponentAnalyticsItemPropertiesArgs {
    /**
     * A function alias, used when the type of the item is Function
     */
    functionAlias?: pulumi.Input<string>;
}

/**
 * An Application Insights component daily data volume cap
 */
export interface ApplicationInsightsComponentDataVolumeCapArgs {
    /**
     * Daily data volume cap in GB.
     */
    cap?: pulumi.Input<number>;
    /**
     * Do not send a notification email when the daily data volume cap is met.
     */
    stopSendNotificationWhenHitCap?: pulumi.Input<boolean>;
    /**
     * Reserved, not used for now.
     */
    stopSendNotificationWhenHitThreshold?: pulumi.Input<boolean>;
    /**
     * Reserved, not used for now.
     */
    warningThreshold?: pulumi.Input<number>;
}

/**
 * Static definitions of the ProactiveDetection configuration rule (same values for all components).
 */
export interface ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitionsArgs {
    /**
     * The rule description
     */
    description?: pulumi.Input<string>;
    /**
     * The rule name as it is displayed in UI
     */
    displayName?: pulumi.Input<string>;
    /**
     * URL which displays additional info about the proactive detection rule
     */
    helpUrl?: pulumi.Input<string>;
    /**
     * A flag indicating whether the rule is enabled by default
     */
    isEnabledByDefault?: pulumi.Input<boolean>;
    /**
     * A flag indicating whether the rule is hidden (from the UI)
     */
    isHidden?: pulumi.Input<boolean>;
    /**
     * A flag indicating whether the rule is in preview
     */
    isInPreview?: pulumi.Input<boolean>;
    /**
     * The rule name
     */
    name?: pulumi.Input<string>;
    /**
     * A flag indicating whether email notifications are supported for detections for this rule
     */
    supportsEmailNotifications?: pulumi.Input<boolean>;
}

/**
 * A header to add to the WebTest.
 */
export interface HeaderFieldArgs {
    /**
     * The name of the header.
     */
    headerFieldName?: pulumi.Input<string>;
    /**
     * The value of the header.
     */
    headerFieldValue?: pulumi.Input<string>;
}

/**
 * Customer Managed Identity
 */
export interface MyWorkbookManagedIdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<string>;
}

/**
 * Geo-physical location to run a WebTest from. You must specify one or more locations for the test to run from.
 */
export interface WebTestGeolocationArgs {
    /**
     * Location ID for the WebTest to run from.
     */
    location?: pulumi.Input<string>;
}

/**
 * An XML configuration specification for a WebTest.
 */
export interface WebTestPropertiesConfigurationArgs {
    /**
     * The XML specification of a WebTest to run against an application.
     */
    webTest?: pulumi.Input<string>;
}

/**
 * The collection of content validation properties
 */
export interface WebTestPropertiesContentValidationArgs {
    /**
     * Content to look for in the return of the WebTest.  Must not be null or empty.
     */
    contentMatch?: pulumi.Input<string>;
    /**
     * When set, this value makes the ContentMatch validation case insensitive.
     */
    ignoreCase?: pulumi.Input<boolean>;
    /**
     * When true, validation will pass if there is a match for the ContentMatch string.  If false, validation will fail if there is a match
     */
    passIfTextFound?: pulumi.Input<boolean>;
}

/**
 * The collection of request properties
 */
export interface WebTestPropertiesRequestArgs {
    /**
     * Follow redirects for this web test.
     */
    followRedirects?: pulumi.Input<boolean>;
    /**
     * List of headers and their values to add to the WebTest call.
     */
    headers?: pulumi.Input<pulumi.Input<HeaderFieldArgs>[]>;
    /**
     * Http verb to use for this web test.
     */
    httpVerb?: pulumi.Input<string>;
    /**
     * Parse Dependent request for this WebTest.
     */
    parseDependentRequests?: pulumi.Input<boolean>;
    /**
     * Base64 encoded string body to send with this web test.
     */
    requestBody?: pulumi.Input<string>;
    /**
     * Url location to test.
     */
    requestUrl?: pulumi.Input<string>;
}

/**
 * The collection of validation rule properties
 */
export interface WebTestPropertiesValidationRulesArgs {
    /**
     * The collection of content validation properties
     */
    contentValidation?: pulumi.Input<WebTestPropertiesContentValidationArgs>;
    /**
     * Validate that the WebTest returns the http status code provided.
     */
    expectedHttpStatusCode?: pulumi.Input<number>;
    /**
     * When set, validation will ignore the status code.
     */
    ignoreHttpStatusCode?: pulumi.Input<boolean>;
    /**
     * A number of days to check still remain before the the existing SSL cert expires.  Value must be positive and the SSLCheck must be set to true.
     */
    sSLCertRemainingLifetimeCheck?: pulumi.Input<number>;
    /**
     * Checks to see if the SSL cert is still valid.
     */
    sSLCheck?: pulumi.Input<boolean>;
}

/**
 * Identity used for BYOS
 */
export interface WorkbookResourceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Gallery information for a workbook template.
 */
export interface WorkbookTemplateGalleryArgs {
    /**
     * Category for the gallery.
     */
    category?: pulumi.Input<string>;
    /**
     * Name of the workbook template in the gallery.
     */
    name?: pulumi.Input<string>;
    /**
     * Order of the template within the gallery.
     */
    order?: pulumi.Input<number>;
    /**
     * Azure resource type supported by the gallery.
     */
    resourceType?: pulumi.Input<string>;
    /**
     * Type of workbook supported by the workbook template.
     */
    type?: pulumi.Input<string>;
}

/**
 * Localized template data and gallery information.
 */
export interface WorkbookTemplateLocalizedGalleryArgs {
    /**
     * Workbook galleries supported by the template.
     */
    galleries?: pulumi.Input<pulumi.Input<WorkbookTemplateGalleryArgs>[]>;
    /**
     * Valid JSON object containing workbook template payload.
     */
    templateData?: any;
}
