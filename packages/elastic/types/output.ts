import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Connected Partner Resource Properties
 */
export interface ConnectedPartnerResourcePropertiesResponse {
    /**
     * The azure resource Id of the deployment.
     */
    azureResourceId?: string;
    /**
     * The location of the deployment.
     */
    location?: string;
    /**
     * Elastic deployment name
     */
    partnerDeploymentName?: string;
    /**
     * Deployment URL of the elasticsearch in Elastic cloud deployment.
     */
    partnerDeploymentUri?: string;
}

/**
 * Connected Partner Resources List Format
 */
export interface ConnectedPartnerResourcesListFormatResponse {
    /**
     * Connected Partner Resource Properties
     */
    properties?: ConnectedPartnerResourcePropertiesResponse;
}

/**
 * Details of the user's elastic deployment associated with the monitor resource.
 */
export interface ElasticCloudDeploymentResponse {
    /**
     * Associated Azure subscription Id for the elastic deployment.
     */
    azureSubscriptionId: string;
    /**
     * Elastic deployment Id
     */
    deploymentId: string;
    /**
     * Region where Deployment at Elastic side took place.
     */
    elasticsearchRegion: string;
    /**
     * Elasticsearch ingestion endpoint of the Elastic deployment.
     */
    elasticsearchServiceUrl: string;
    /**
     * Kibana endpoint of the Elastic deployment.
     */
    kibanaServiceUrl: string;
    /**
     * Kibana dashboard sso URL of the Elastic deployment.
     */
    kibanaSsoUrl: string;
    /**
     * Elastic deployment name
     */
    name: string;
}

/**
 * Details of the user's elastic account.
 */
export interface ElasticCloudUserResponse {
    /**
     * Elastic cloud default dashboard sso URL of the Elastic user account.
     */
    elasticCloudSsoDefaultUrl: string;
    /**
     * Email of the Elastic User Account.
     */
    emailAddress: string;
    /**
     * User Id of the elastic account of the User.
     */
    id: string;
}

/**
 * The properties of Azure Subscription ID to which the Organization of the logged in user belongs and gets billed into.
 */
export interface ElasticOrganizationToAzureSubscriptionMappingResponsePropertiesResponse {
    /**
     * The Azure Subscription ID to which the Organization belongs and gets billed into. This is empty for a new user OR a user without an Elastic Organization.
     */
    billedAzureSubscriptionId?: string;
    /**
     * The Elastic Organization Id.
     */
    elasticOrganizationId?: string;
    /**
     * The Elastic Organization Name.
     */
    elasticOrganizationName?: string;
    /**
     * Marketplace SaaS Info of the resource.
     */
    marketplaceSaasInfo: MarketplaceSaaSInfoResponse;
}

/**
 * Elastic Resource Properties.
 */
export interface ElasticPropertiesResponse {
    /**
     * Details of the elastic cloud deployment.
     */
    elasticCloudDeployment?: ElasticCloudDeploymentResponse;
    /**
     * Details of the user's elastic account.
     */
    elasticCloudUser?: ElasticCloudUserResponse;
}

/**
 * Elastic traffic filter object
 */
export interface ElasticTrafficFilterResponse {
    /**
     * Description of the elastic filter
     */
    description?: string;
    /**
     * Id of the elastic filter
     */
    id?: string;
    /**
     * IncludeByDefault for the elastic filter
     */
    includeByDefault?: boolean;
    /**
     * Name of the elastic filter
     */
    name?: string;
    /**
     * Region of the elastic filter
     */
    region?: string;
    /**
     * Rules in the elastic filter
     */
    rules?: ElasticTrafficFilterRuleResponse[];
    /**
     * Type of the elastic filter
     */
    type?: string;
}

/**
 * Elastic traffic filter rule object
 */
export interface ElasticTrafficFilterRuleResponse {
    /**
     * Guid of Private Endpoint in the elastic filter rule
     */
    azureEndpointGuid?: string;
    /**
     * Name of the Private Endpoint in the elastic filter rule
     */
    azureEndpointName?: string;
    /**
     * Description of the elastic filter rule
     */
    description?: string;
    /**
     * Id of the elastic filter rule
     */
    id?: string;
    /**
     * IP of the elastic filter rule
     */
    source?: string;
}

/**
 * The definition of a filtering tag. Filtering tags are used for capturing resources and include/exclude them from being monitored.
 */
export interface FilteringTagResponse {
    /**
     * Valid actions for a filtering tag.
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

/**
 * Identity properties.
 */
export interface IdentityPropertiesResponse {
    /**
     * The identity ID.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * Managed identity type.
     */
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

/**
 * Marketplace SAAS Info of the resource.
 */
export interface MarketplaceSaaSInfoResponse {
    /**
     * The Azure Subscription ID to which the Marketplace Subscription belongs and gets billed into.
     */
    billedAzureSubscriptionId?: string;
    /**
     * Marketplace Subscription Details: SAAS Name
     */
    marketplaceName?: string;
    /**
     * Marketplace Subscription Details: Resource URI
     */
    marketplaceResourceId?: string;
    /**
     * Marketplace Subscription Details: SaaS Subscription Status
     */
    marketplaceStatus?: string;
    /**
     * Marketplace Subscription
     */
    marketplaceSubscription?: MarketplaceSaaSInfoResponseMarketplaceSubscription;
    /**
     * Flag specifying if the Marketplace status is subscribed or not.
     */
    subscribed?: boolean;
}

/**
 * Marketplace Subscription
 */
export interface MarketplaceSaaSInfoResponseMarketplaceSubscription {
    /**
     * Marketplace Subscription Id. This is a GUID-formatted string.
     */
    id?: string;
}

/**
 * Properties specific to the monitor resource.
 */
export interface MonitorPropertiesResponse {
    /**
     * Elastic cloud properties.
     */
    elasticProperties?: ElasticPropertiesResponse;
    /**
     * Flag to determine if User API Key has to be generated and shared.
     */
    generateApiKey?: boolean;
    liftrResourceCategory: string;
    /**
     * The priority of the resource.
     */
    liftrResourcePreference: number;
    /**
     * Flag specifying if the resource monitoring is enabled or disabled.
     */
    monitoringStatus?: string;
    /**
     * Provisioning state of the monitor resource.
     */
    provisioningState?: string;
    /**
     * Version of elastic of the monitor resource
     */
    version?: string;
}

/**
 * The properties of a resource currently being monitored by the Elastic monitor resource.
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
     * Flag indicating the status of the resource for sending logs operation to Elastic.
     */
    sendingLogs?: string;
}

/**
 * Definition of the properties for a TagRules resource.
 */
export interface MonitoringTagRulesPropertiesResponse {
    /**
     * Rules for sending logs.
     */
    logRules?: LogRulesResponse;
    /**
     * Provisioning state of the monitoring tag rules.
     */
    provisioningState?: string;
}

/**
 * Partner Billing details associated with the resource.
 */
export interface PartnerBillingEntityResponse {
    /**
     * The Elastic Organization Id.
     */
    id?: string;
    /**
     * The Elastic Organization Name.
     */
    name?: string;
    /**
     * Link to the elastic organization page
     */
    partnerEntityUri?: string;
}

/**
 * Microsoft.Elastic SKU.
 */
export interface ResourceSkuResponse {
    /**
     * Name of the SKU.
     */
    name: string;
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

export interface UserApiKeyResponsePropertiesResponse {
    /**
     * The User Api Key Generated based on GenerateApiKey flag. This is applicable for non-Portal clients only.
     */
    apiKey?: string;
}

/**
 * The vm resource properties that is currently being monitored by the Elastic monitor resource.
 */
export interface VMResourcesResponse {
    /**
     * The ARM id of the VM resource.
     */
    vmResourceId?: string;
}





