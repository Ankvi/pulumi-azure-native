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
         * The auth code used to linking to an existing datadog organization.
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
         * The redirect uri for linking.
         */
        redirectUri?: pulumi.Input<string>;
    }

    export interface IdentityPropertiesArgs {
        /**
         * Specifies the identity type of the Datadog Monitor. At this time the only allowed value is 'SystemAssigned'.
         */
        type?: pulumi.Input<string | enums.ManagedIdentityTypes>;
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

    export interface ResourceSkuArgs {
        /**
         * Name of the SKU in {PlanId} format. For Terraform, the only allowed value is 'linking'.
         */
        name: pulumi.Input<string>;
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
