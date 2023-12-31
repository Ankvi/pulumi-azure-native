import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The definition of a filtering tag. Filtering tags are used for capturing resources and include/exclude them from being monitored.
 */
export interface FilteringTagArgs {
    /**
     * Valid actions for a filtering tag. Exclusion takes priority over inclusion.
     */
    action?: pulumi.Input<string | enums.TagAction>;
    /**
     * The name (also known as the key) of the tag.
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the tag.
     */
    value?: pulumi.Input<string>;
}

export interface IdentityPropertiesArgs {
    type?: pulumi.Input<string | enums.ManagedIdentityTypes>;
}

/**
 * Set of rules for sending logs for the Monitor resource.
 */
export interface LogRulesArgs {
    /**
     * List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
     */
    filteringTags?: pulumi.Input<pulumi.Input<FilteringTagArgs>[]>;
    /**
     * Flag specifying if AAD logs should be sent for the Monitor resource.
     */
    sendAadLogs?: pulumi.Input<boolean>;
    /**
     * Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
     */
    sendActivityLogs?: pulumi.Input<boolean>;
    /**
     * Flag specifying if subscription logs should be sent for the Monitor resource.
     */
    sendSubscriptionLogs?: pulumi.Input<boolean>;
}

export interface LogzOrganizationPropertiesArgs {
    /**
     * Name of the Logz organization.
     */
    companyName?: pulumi.Input<string>;
    /**
     * The Id of the Enterprise App used for Single sign on.
     */
    enterpriseAppId?: pulumi.Input<string>;
    /**
     * The login URL specific to this Logz Organization.
     */
    singleSignOnUrl?: pulumi.Input<string>;
}

/**
 * Set of rules for sending metrics for the Monitor resource.
 */
export interface MetricRulesArgs {
    /**
     * List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
     */
    filteringTags?: pulumi.Input<pulumi.Input<FilteringTagArgs>[]>;
    /**
     * Subscription Id for which filtering tags are applicable
     */
    subscriptionId?: pulumi.Input<string>;
}

/**
 * Definition of the properties for a TagRules resource.
 */
export interface MetricsTagRulesPropertiesArgs {
    metricRules?: pulumi.Input<pulumi.Input<MetricRulesArgs>[]>;
    /**
     * Flag specifying if metrics from Azure resources should be sent for the Monitor resource.
     */
    sendMetrics?: pulumi.Input<boolean>;
}

/**
 * Properties specific to the monitor resource.
 */
export interface MonitorPropertiesArgs {
    logzOrganizationProperties?: pulumi.Input<LogzOrganizationPropertiesArgs>;
    /**
     * Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state.
     */
    marketplaceSubscriptionStatus?: pulumi.Input<string | enums.MarketplaceSubscriptionStatus>;
    /**
     * Flag specifying if the resource monitoring is enabled or disabled.
     */
    monitoringStatus?: pulumi.Input<string | enums.MonitoringStatus>;
    planData?: pulumi.Input<PlanDataArgs>;
    userInfo?: pulumi.Input<UserInfoArgs>;
}

/**
 * Definition of the properties for a TagRules resource.
 */
export interface MonitoringTagRulesPropertiesArgs {
    /**
     * Set of rules for sending logs for the Monitor resource.
     */
    logRules?: pulumi.Input<LogRulesArgs>;
}

export interface PlanDataArgs {
    /**
     * different billing cycles like MONTHLY/WEEKLY. this could be enum
     */
    billingCycle?: pulumi.Input<string>;
    /**
     * date when plan was applied
     */
    effectiveDate?: pulumi.Input<string>;
    /**
     * plan id as published by Logz
     */
    planDetails?: pulumi.Input<string>;
    /**
     * different usage type like PAYG/COMMITTED. this could be enum
     */
    usageType?: pulumi.Input<string>;
}

export interface UserInfoArgs {
    /**
     * Email of the user used by Logz for contacting them if needed
     */
    emailAddress?: pulumi.Input<string>;
    /**
     * First Name of the user
     */
    firstName?: pulumi.Input<string>;
    /**
     * Last Name of the user
     */
    lastName?: pulumi.Input<string>;
    /**
     * Phone number of the user used by Logz for contacting them if needed
     */
    phoneNumber?: pulumi.Input<string>;
}
