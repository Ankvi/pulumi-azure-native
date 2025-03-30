import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Company information of the user to be passed to partners.
 */
export interface CompanyInfoArgs {
    /**
     * Business of the company
     */
    business?: pulumi.Input<string>;
    /**
     * Country of the company location.
     */
    country?: pulumi.Input<string>;
    /**
     * Domain of the company
     */
    domain?: pulumi.Input<string>;
    /**
     * Number of employees in the company
     */
    employeesNumber?: pulumi.Input<string>;
    /**
     * State of the company location.
     */
    state?: pulumi.Input<string>;
}

/**
 * The definition of a filtering tag. Filtering tags are used for capturing resources and include/exclude them from being monitored.
 */
export interface FilteringTagArgs {
    /**
     * Valid actions for a filtering tag.
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

/**
 * Identity properties.
 */
export interface IdentityPropertiesArgs {
    /**
     * Managed identity type.
     */
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

/**
 * Properties specific to the monitor resource.
 */
export interface MonitorPropertiesArgs {
    /**
     * Flag to determine if User API Key has to be generated and shared.
     */
    generateApiKey?: pulumi.Input<boolean>;
    /**
     * Flag specifying if the resource monitoring is enabled or disabled.
     */
    monitoringStatus?: pulumi.Input<string | enums.MonitoringStatus>;
    /**
     * Provisioning state of the monitor resource.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
    /**
     * User information.
     */
    userInfo?: pulumi.Input<UserInfoArgs>;
    /**
     * Version of elastic of the monitor resource
     */
    version?: pulumi.Input<string>;
}

/**
 * The list of subscriptions and it's monitoring status by current Elastic monitor.
 */
export interface MonitoredSubscriptionArgs {
    /**
     * The reason of not monitoring the subscription.
     */
    error?: pulumi.Input<string>;
    /**
     * The state of monitoring.
     */
    status?: pulumi.Input<string | enums.Status>;
    /**
     * The subscriptionId to be monitored.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Definition of the properties for a TagRules resource.
     */
    tagRules?: pulumi.Input<MonitoringTagRulesPropertiesArgs>;
}

/**
 * Definition of the properties for a TagRules resource.
 */
export interface MonitoringTagRulesPropertiesArgs {
    /**
     * Rules for sending logs.
     */
    logRules?: pulumi.Input<LogRulesArgs>;
    /**
     * Provisioning state of the monitoring tag rules.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
}

/**
 * Open AI Integration details.
 */
export interface OpenAIIntegrationPropertiesArgs {
    /**
     * Value of API key for Open AI resource
     */
    key?: pulumi.Input<string>;
    /**
     * The API endpoint for Open AI resource
     */
    openAIResourceEndpoint?: pulumi.Input<string>;
    /**
     * The resource name of Open AI resource
     */
    openAIResourceId?: pulumi.Input<string>;
}

/**
 * Microsoft.Elastic SKU.
 */
export interface ResourceSkuArgs {
    /**
     * Name of the SKU.
     */
    name: pulumi.Input<string>;
}

/**
 * The request to update subscriptions needed to be monitored by the Elastic monitor resource.
 */
export interface SubscriptionListArgs {
    /**
     * List of subscriptions and the state of the monitoring.
     */
    monitoredSubscriptionList?: pulumi.Input<pulumi.Input<MonitoredSubscriptionArgs>[]>;
    /**
     * The operation for the patch on the resource.
     */
    operation?: pulumi.Input<string | enums.Operation>;
}

/**
 * User Information to be passed to partners.
 */
export interface UserInfoArgs {
    /**
     * Company information of the user to be passed to partners.
     */
    companyInfo?: pulumi.Input<CompanyInfoArgs>;
    /**
     * Company name of the user
     */
    companyName?: pulumi.Input<string>;
    /**
     * Email of the user used by Elastic for contacting them if needed
     */
    emailAddress?: pulumi.Input<string>;
    /**
     * First name of the user
     */
    firstName?: pulumi.Input<string>;
    /**
     * Last name of the user
     */
    lastName?: pulumi.Input<string>;
}












