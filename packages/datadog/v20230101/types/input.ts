import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Specify the Datadog organization name. In the case of linking to existing organizations, Id, ApiKey, and Applicationkey is required as well.
     */
    export interface DatadogOrganizationPropertiesArgs {
        /**
         * Api key associated to the Datadog organization.
         */
        apiKey?: pulumi.Input<string>;
        /**
         * Application key associated to the Datadog organization.
         */
        applicationKey?: pulumi.Input<string>;
        /**
         * The configuration which describes the state of cloud security posture management. This collects configuration information for all resources in a subscription and track conformance to industry benchmarks.
         */
        cspm?: pulumi.Input<boolean>;
        /**
         * The Id of the Enterprise App used for Single sign on.
         */
        enterpriseAppId?: pulumi.Input<string>;
        /**
         * Id of the Datadog organization.
         */
        id?: pulumi.Input<string>;
        /**
         * The auth code used to linking to an existing Datadog organization.
         */
        linkingAuthCode?: pulumi.Input<string>;
        /**
         * The client_id from an existing in exchange for an auth token to link organization.
         */
        linkingClientId?: pulumi.Input<string>;
        /**
         * Name of the Datadog organization.
         */
        name?: pulumi.Input<string>;
        /**
         * The redirect URI for linking.
         */
        redirectUri?: pulumi.Input<string>;
    }

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
        /**
         * Specifies the identity type of the Datadog Monitor. At this time the only allowed value is 'SystemAssigned'.
         */
        type?: pulumi.Input<string | enums.ManagedIdentityTypes>;
    }

    /**
     * Set of rules for sending logs for the Monitor resource.
     */
    export interface LogRulesArgs {
        /**
         * List of filtering tags to be used for capturing logs. This only takes effect if SendResourceLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
         */
        filteringTags?: pulumi.Input<pulumi.Input<FilteringTagArgs>[]>;
        /**
         * Flag specifying if AAD logs should be sent for the Monitor resource.
         */
        sendAadLogs?: pulumi.Input<boolean>;
        /**
         * Flag specifying if Azure resource logs should be sent for the Monitor resource.
         */
        sendResourceLogs?: pulumi.Input<boolean>;
        /**
         * Flag specifying if Azure subscription logs should be sent for the Monitor resource.
         */
        sendSubscriptionLogs?: pulumi.Input<boolean>;
    }

    /**
     * Set of rules for sending metrics for the Monitor resource.
     */
    export interface MetricRulesArgs {
        /**
         * List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
         */
        filteringTags?: pulumi.Input<pulumi.Input<FilteringTagArgs>[]>;
    }

    /**
     * Properties specific to the monitor resource.
     */
    export interface MonitorPropertiesArgs {
        /**
         * Specify the Datadog organization name. In the case of linking to existing organizations, Id, ApiKey, and Applicationkey is required as well.
         */
        datadogOrganizationProperties?: pulumi.Input<DatadogOrganizationPropertiesArgs>;
        /**
         * Flag specifying if the resource monitoring is enabled or disabled.
         */
        monitoringStatus?: pulumi.Input<string | enums.MonitoringStatus>;
        /**
         * Includes name, email and optionally, phone number. User Information can't be null.
         */
        userInfo?: pulumi.Input<UserInfoArgs>;
    }

    /**
     * The list of subscriptions and it's monitoring status by current Datadog monitor.
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
         * Configuration to enable/disable auto-muting flag
         */
        automuting?: pulumi.Input<boolean>;
        /**
         * Set of rules for sending logs for the Monitor resource.
         */
        logRules?: pulumi.Input<LogRulesArgs>;
        /**
         * Set of rules for sending metrics for the Monitor resource.
         */
        metricRules?: pulumi.Input<MetricRulesArgs>;
    }

    export interface ResourceSkuArgs {
        /**
         * Name of the SKU in {PlanId} format. For Terraform, the only allowed value is 'linking'.
         */
        name: pulumi.Input<string>;
    }

    /**
     * The request to update subscriptions needed to be monitored by the Datadog monitor resource.
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
     * Includes name, email and optionally, phone number. User Information can't be null.
     */
    export interface UserInfoArgs {
        /**
         * Email of the user used by Datadog for contacting them if needed
         */
        emailAddress?: pulumi.Input<string>;
        /**
         * Name of the user
         */
        name?: pulumi.Input<string>;
        /**
         * Phone number of the user used by Datadog for contacting them if needed
         */
        phoneNumber?: pulumi.Input<string>;
    }
