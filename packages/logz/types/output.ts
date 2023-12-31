import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The definition of a filtering tag. Filtering tags are used for capturing resources and include/exclude them from being monitored.
 */
export interface FilteringTagResponse {
    /**
     * Valid actions for a filtering tag. Exclusion takes priority over inclusion.
     */
    action?: string;
    /**
     * The name (also known as the key) of the tag.
     */
    name?: string;
    /**
     * The value of the tag.
     */
    value?: string;
}

export interface IdentityPropertiesResponse {
    /**
     * The identity ID.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    type?: string;
}

/**
 * Set of rules for sending logs for the Monitor resource.
 */
export interface LogRulesResponse {
    /**
     * List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
     */
    filteringTags?: FilteringTagResponse[];
    /**
     * Flag specifying if AAD logs should be sent for the Monitor resource.
     */
    sendAadLogs?: boolean;
    /**
     * Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
     */
    sendActivityLogs?: boolean;
    /**
     * Flag specifying if subscription logs should be sent for the Monitor resource.
     */
    sendSubscriptionLogs?: boolean;
}

export interface LogzOrganizationPropertiesResponse {
    /**
     * Name of the Logz organization.
     */
    companyName?: string;
    /**
     * The Id of the Enterprise App used for Single sign on.
     */
    enterpriseAppId?: string;
    /**
     * Id of the Logz organization.
     */
    id: string;
    /**
     * The login URL specific to this Logz Organization.
     */
    singleSignOnUrl?: string;
}

/**
 * Set of rules for sending metrics for the Monitor resource.
 */
export interface MetricRulesResponse {
    /**
     * List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
     */
    filteringTags?: FilteringTagResponse[];
    /**
     * Subscription Id for which filtering tags are applicable
     */
    subscriptionId?: string;
}

/**
 * Definition of the properties for a TagRules resource.
 */
export interface MetricsTagRulesPropertiesResponse {
    metricRules?: MetricRulesResponse[];
    /**
     * Flag specifying if the resource provisioning state as tracked by ARM.
     */
    provisioningState: string;
    /**
     * Flag specifying if metrics from Azure resources should be sent for the Monitor resource.
     */
    sendMetrics?: boolean;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
}

/**
 * Properties specific to the monitor resource.
 */
export interface MonitorPropertiesResponse {
    liftrResourceCategory: string;
    /**
     * The priority of the resource.
     */
    liftrResourcePreference: number;
    logzOrganizationProperties?: LogzOrganizationPropertiesResponse;
    /**
     * Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state.
     */
    marketplaceSubscriptionStatus?: string;
    /**
     * Flag specifying if the resource monitoring is enabled or disabled.
     */
    monitoringStatus?: string;
    planData?: PlanDataResponse;
    /**
     * Flag specifying if the resource provisioning state as tracked by ARM.
     */
    provisioningState: string;
    userInfo?: UserInfoResponse;
}

/**
 * The properties of a resource currently being monitored by the Logz monitor resource.
 */
export interface MonitoredResourceResponse {
    /**
     * The ARM id of the resource.
     */
    id?: string;
    /**
     * Reason for why the resource is sending logs (or why it is not sending).
     */
    reasonForLogsStatus?: string;
    /**
     * Reason for why the resource is sending metrics (or why it is not sending).
     */
    reasonForMetricsStatus?: string;
    /**
     * Flag indicating if resource is sending logs to Logz.
     */
    sendingLogs?: boolean;
    /**
     * Flag indicating if resource is sending metrics to Logz.
     */
    sendingMetrics?: boolean;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
}

/**
 * Definition of the properties for a TagRules resource.
 */
export interface MonitoringTagRulesPropertiesResponse {
    /**
     * Set of rules for sending logs for the Monitor resource.
     */
    logRules?: LogRulesResponse;
    /**
     * Flag specifying if the resource provisioning state as tracked by ARM.
     */
    provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
}

export interface PlanDataResponse {
    /**
     * different billing cycles like MONTHLY/WEEKLY. this could be enum
     */
    billingCycle?: string;
    /**
     * date when plan was applied
     */
    effectiveDate?: string;
    /**
     * plan id as published by Logz
     */
    planDetails?: string;
    /**
     * different usage type like PAYG/COMMITTED. this could be enum
     */
    usageType?: string;
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

export interface UserInfoResponse {
    /**
     * Email of the user used by Logz for contacting them if needed
     */
    emailAddress?: string;
    /**
     * First Name of the user
     */
    firstName?: string;
    /**
     * Last Name of the user
     */
    lastName?: string;
    /**
     * Phone number of the user used by Logz for contacting them if needed
     */
    phoneNumber?: string;
}

/**
 * Response for checking user's role for Logz.io account.
 */
export interface UserRoleResponseResponse {
    /**
     * User roles on configured in Logz.io account.
     */
    role?: string;
}

/**
 * VM Resource Ids
 */
export interface VMResourcesResponse {
    /**
     * Version of the Logz agent installed on the VM.
     */
    agentVersion?: string;
    /**
     * Request of a list vm host update operation.
     */
    id?: string;
}
