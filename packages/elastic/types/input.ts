import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Company information of the user to be passed to partners.
 */
export interface CompanyInfoArgs {
    /**
     * Business of the company
     */
    business?: pulumi.Input<string | undefined>;
    /**
     * Country of the company location.
     */
    country?: pulumi.Input<string | undefined>;
    /**
     * Domain of the company
     */
    domain?: pulumi.Input<string | undefined>;
    /**
     * Number of employees in the company
     */
    employeesNumber?: pulumi.Input<string | undefined>;
    /**
     * State of the company location.
     */
    state?: pulumi.Input<string | undefined>;
}

/**
 * The definition of a filtering tag. Filtering tags are used for capturing resources and include/exclude them from being monitored.
 */
export interface FilteringTagArgs {
    /**
     * Valid actions for a filtering tag.
     */
    action?: pulumi.Input<string | enums.TagAction | undefined>;
    /**
     * The name (also known as the key) of the tag.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The value of the tag.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Identity properties.
 */
export interface IdentityPropertiesArgs {
    /**
     * Managed identity type.
     */
    type?: pulumi.Input<string | enums.ManagedIdentityTypes | undefined>;
}

/**
 * Set of rules for sending logs for the Monitor resource.
 */
export interface LogRulesArgs {
    /**
     * List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
     */
    filteringTags?: pulumi.Input<pulumi.Input<FilteringTagArgs>[] | undefined>;
    /**
     * Flag specifying if AAD logs should be sent for the Monitor resource.
     */
    sendAadLogs?: pulumi.Input<boolean | undefined>;
    /**
     * Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
     */
    sendActivityLogs?: pulumi.Input<boolean | undefined>;
    /**
     * Flag specifying if subscription logs should be sent for the Monitor resource.
     */
    sendSubscriptionLogs?: pulumi.Input<boolean | undefined>;
}

/**
 * Properties specific to the monitor resource.
 */
export interface MonitorPropertiesArgs {
    /**
     * Flag to determine if User API Key has to be generated and shared.
     */
    generateApiKey?: pulumi.Input<boolean | undefined>;
    /**
     * Flag specifying if the resource monitoring is enabled or disabled.
     */
    monitoringStatus?: pulumi.Input<string | enums.MonitoringStatus | undefined>;
    /**
     * Plan details of the monitor resource.
     */
    planDetails?: pulumi.Input<PlanDetailsArgs | undefined>;
    /**
     * Provisioning state of the monitor resource.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState | undefined>;
    /**
     * Status of Azure Subscription where Marketplace SaaS is located.
     */
    saaSAzureSubscriptionStatus?: pulumi.Input<string | undefined>;
    /**
     * A unique identifier associated with the campaign.
     */
    sourceCampaignId?: pulumi.Input<string | undefined>;
    /**
     * Name of the marketing campaign.
     */
    sourceCampaignName?: pulumi.Input<string | undefined>;
    /**
     * State of the Azure Subscription containing the monitor resource
     */
    subscriptionState?: pulumi.Input<string | undefined>;
    /**
     * User information.
     */
    userInfo?: pulumi.Input<UserInfoArgs | undefined>;
    /**
     * Version of elastic of the monitor resource
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * The list of subscriptions and it's monitoring status by current Elastic monitor.
 */
export interface MonitoredSubscriptionArgs {
    /**
     * The reason of not monitoring the subscription.
     */
    error?: pulumi.Input<string | undefined>;
    /**
     * The state of monitoring.
     */
    status?: pulumi.Input<string | enums.Status | undefined>;
    /**
     * The subscriptionId to be monitored.
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Definition of the properties for a TagRules resource.
     */
    tagRules?: pulumi.Input<MonitoringTagRulesPropertiesArgs | undefined>;
}

/**
 * Definition of the properties for a TagRules resource.
 */
export interface MonitoringTagRulesPropertiesArgs {
    /**
     * Rules for sending logs.
     */
    logRules?: pulumi.Input<LogRulesArgs | undefined>;
    /**
     * Provisioning state of the monitoring tag rules.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState | undefined>;
}

/**
 * Open AI Integration details.
 */
export interface OpenAIIntegrationPropertiesArgs {
    /**
     * Value of API key for Open AI resource
     */
    key?: pulumi.Input<string | undefined>;
    /**
     * The API endpoint for Open AI resource
     */
    openAIResourceEndpoint?: pulumi.Input<string | undefined>;
    /**
     * The resource name of Open AI resource
     */
    openAIResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Plan details of the monitor resource.
 */
export interface PlanDetailsArgs {
    /**
     * Offer ID of the plan
     */
    offerID?: pulumi.Input<string | undefined>;
    /**
     * Plan ID
     */
    planID?: pulumi.Input<string | undefined>;
    /**
     * Plan Name
     */
    planName?: pulumi.Input<string | undefined>;
    /**
     * Publisher ID of the plan
     */
    publisherID?: pulumi.Input<string | undefined>;
    /**
     * Term ID of the plan
     */
    termID?: pulumi.Input<string | undefined>;
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
    monitoredSubscriptionList?: pulumi.Input<pulumi.Input<MonitoredSubscriptionArgs>[] | undefined>;
    /**
     * The operation for the patch on the resource.
     */
    operation?: pulumi.Input<string | enums.Operation | undefined>;
}

/**
 * User Information to be passed to partners.
 */
export interface UserInfoArgs {
    /**
     * Company information of the user to be passed to partners.
     */
    companyInfo?: pulumi.Input<CompanyInfoArgs | undefined>;
    /**
     * Company name of the user
     */
    companyName?: pulumi.Input<string | undefined>;
    /**
     * Email of the user used by Elastic for contacting them if needed
     */
    emailAddress?: pulumi.Input<string | undefined>;
    /**
     * First name of the user
     */
    firstName?: pulumi.Input<string | undefined>;
    /**
     * Last name of the user
     */
    lastName?: pulumi.Input<string | undefined>;
}
