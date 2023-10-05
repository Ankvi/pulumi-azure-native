import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface DatadogApiKeyResponse {
        /**
         * The time of creation of the API key.
         */
        created?: string;
        /**
         * The user that created the API key.
         */
        createdBy?: string;
        /**
         * The value of the API key.
         */
        key: string;
        /**
         * The name of the API key.
         */
        name?: string;
    }

    export interface DatadogHostMetadataResponse {
        /**
         * The agent version.
         */
        agentVersion?: string;
        installMethod?: DatadogInstallMethodResponse;
        logsAgent?: DatadogLogsAgentResponse;
    }

    export interface DatadogHostResponse {
        /**
         * The aliases for the host installed via the Datadog agent.
         */
        aliases?: string[];
        /**
         * The Datadog integrations reporting metrics for the host.
         */
        apps?: string[];
        meta?: DatadogHostMetadataResponse;
        /**
         * The name of the host.
         */
        name?: string;
    }

    export interface DatadogInstallMethodResponse {
        /**
         * The installer version.
         */
        installerVersion?: string;
        /**
         * The tool.
         */
        tool?: string;
        /**
         * The tool version.
         */
        toolVersion?: string;
    }

    export interface DatadogLogsAgentResponse {
        /**
         * The transport.
         */
        transport?: string;
    }

    /**
     * Specify the Datadog organization name. In the case of linking to existing organizations, Id, ApiKey, and Applicationkey is required as well.
     */
    export interface DatadogOrganizationPropertiesResponse {
        /**
         * The configuration which describes the state of cloud security posture management. This collects configuration information for all resources in a subscription and track conformance to industry benchmarks.
         */
        cspm?: boolean;
        /**
         * Id of the Datadog organization.
         */
        id?: string;
        /**
         * Name of the Datadog organization.
         */
        name?: string;
    }

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
        /**
         * Specifies the identity type of the Datadog Monitor. At this time the only allowed value is 'SystemAssigned'.
         */
        type?: string;
    }

    /**
     * The definition of a linked resource.
     */
    export interface LinkedResourceResponse {
        /**
         * The ARM id of the linked resource.
         */
        id?: string;
    }

    /**
     * Set of rules for sending logs for the Monitor resource.
     */
    export interface LogRulesResponse {
        /**
         * List of filtering tags to be used for capturing logs. This only takes effect if SendResourceLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
         */
        filteringTags?: FilteringTagResponse[];
        /**
         * Flag specifying if AAD logs should be sent for the Monitor resource.
         */
        sendAadLogs?: boolean;
        /**
         * Flag specifying if Azure resource logs should be sent for the Monitor resource.
         */
        sendResourceLogs?: boolean;
        /**
         * Flag specifying if Azure subscription logs should be sent for the Monitor resource.
         */
        sendSubscriptionLogs?: boolean;
    }

    /**
     * Set of rules for sending metrics for the Monitor resource.
     */
    export interface MetricRulesResponse {
        /**
         * List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
         */
        filteringTags?: FilteringTagResponse[];
    }

    /**
     * Properties specific to the monitor resource.
     */
    export interface MonitorPropertiesResponse {
        /**
         * Specify the Datadog organization name. In the case of linking to existing organizations, Id, ApiKey, and Applicationkey is required as well.
         */
        datadogOrganizationProperties?: DatadogOrganizationPropertiesResponse;
        liftrResourceCategory: string;
        /**
         * The priority of the resource.
         */
        liftrResourcePreference: number;
        /**
         * Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state.
         */
        marketplaceSubscriptionStatus: string;
        /**
         * Flag specifying if the resource monitoring is enabled or disabled.
         */
        monitoringStatus?: string;
        provisioningState: string;
        /**
         * Includes name, email and optionally, phone number. User Information can't be null.
         */
        userInfo?: UserInfoResponse;
    }

    /**
     * The properties of a resource currently being monitored by the Datadog monitor resource.
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
         * Flag indicating if resource is sending logs to Datadog.
         */
        sendingLogs?: boolean;
        /**
         * Flag indicating if resource is sending metrics to Datadog.
         */
        sendingMetrics?: boolean;
    }

    /**
     * The list of subscriptions and it's monitoring status by current Datadog monitor.
     */
    export interface MonitoredSubscriptionResponse {
        /**
         * The reason of not monitoring the subscription.
         */
        error?: string;
        /**
         * The state of monitoring.
         */
        status?: string;
        /**
         * The subscriptionId to be monitored.
         */
        subscriptionId?: string;
        /**
         * Definition of the properties for a TagRules resource.
         */
        tagRules?: MonitoringTagRulesPropertiesResponse;
    }

    /**
     * Definition of the properties for a TagRules resource.
     */
    export interface MonitoringTagRulesPropertiesResponse {
        /**
         * Configuration to enable/disable auto-muting flag
         */
        automuting?: boolean;
        /**
         * Set of rules for sending logs for the Monitor resource.
         */
        logRules?: LogRulesResponse;
        /**
         * Set of rules for sending metrics for the Monitor resource.
         */
        metricRules?: MetricRulesResponse;
        provisioningState: string;
    }

    export interface ResourceSkuResponse {
        /**
         * Name of the SKU in {PlanId} format. For Terraform, the only allowed value is 'linking'.
         */
        name: string;
    }

    /**
     * The request to update subscriptions needed to be monitored by the Datadog monitor resource.
     */
    export interface SubscriptionListResponse {
        /**
         * List of subscriptions and the state of the monitoring.
         */
        monitoredSubscriptionList?: MonitoredSubscriptionResponse[];
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
     * Includes name, email and optionally, phone number. User Information can't be null.
     */
    export interface UserInfoResponse {
        /**
         * Email of the user used by Datadog for contacting them if needed
         */
        emailAddress?: string;
        /**
         * Name of the user
         */
        name?: string;
        /**
         * Phone number of the user used by Datadog for contacting them if needed
         */
        phoneNumber?: string;
    }
