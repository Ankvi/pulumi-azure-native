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
         * The aliases for the host.
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

    export interface ResourceSkuResponse {
        /**
         * Name of the SKU in {PlanId} format. For Terraform, the only allowed value is 'linking'.
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
