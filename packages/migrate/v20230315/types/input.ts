import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Collector agent property class.
     */
    export interface CollectorAgentPropertiesBaseArgs {
        /**
         * Gets the collector agent id.
         */
        id?: pulumi.Input<string>;
        /**
         * Gets the collector last heartbeat time.
         */
        lastHeartbeatUtc?: pulumi.Input<string>;
        /**
         * Gets or sets the SPN details.
         */
        spnDetails?: pulumi.Input<CollectorAgentSpnPropertiesBaseArgs>;
        /**
         * Gets the collector agent version.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Collector agent SPN details class.
     */
    export interface CollectorAgentSpnPropertiesBaseArgs {
        /**
         * Gets the AAD application id.
         */
        applicationId?: pulumi.Input<string>;
        /**
         * Gets the AAD audience url.
         */
        audience?: pulumi.Input<string>;
        /**
         * Gets the AAD authority endpoint.
         */
        authority?: pulumi.Input<string>;
        /**
         * Gets the object id of the AAD application.
         */
        objectId?: pulumi.Input<string>;
        /**
         * Gets the tenant id of the AAD application.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Entity Uptime.
     */
    export interface EntityUptimeArgs {
        /**
         * Gets the days per month.
         */
        daysPerMonth?: pulumi.Input<number>;
        /**
         * Gets the hours per day.
         */
        hoursPerDay?: pulumi.Input<number>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * SQL database assessment settings.
     */
    export interface SqlDbSettingsArgs {
        /**
         * Gets or sets the azure SQL compute tier.
         */
        azureSqlComputeTier?: pulumi.Input<string | enums.ComputeTier>;
        /**
         * Gets or sets the azure PAAS SQL instance type.
         */
        azureSqlDataBaseType?: pulumi.Input<string | enums.AzureSqlDataBaseType>;
        /**
         * Gets or sets the azure SQL purchase model.
         */
        azureSqlPurchaseModel?: pulumi.Input<string | enums.AzureSqlPurchaseModel>;
        /**
         * Gets or sets the azure SQL service tier.
         */
        azureSqlServiceTier?: pulumi.Input<string | enums.AzureSqlServiceTier>;
    }

    /**
     * SQL managed instance assessment settings.
     */
    export interface SqlMiSettingsArgs {
        /**
         * Gets or sets the azure PAAS SQL instance type.
         */
        azureSqlInstanceType?: pulumi.Input<string | enums.AzureSqlInstanceType>;
        /**
         * Gets or sets the azure SQL service tier.
         */
        azureSqlServiceTier?: pulumi.Input<string | enums.AzureSqlServiceTier>;
    }

    /**
     * SQL VM assessment settings.
     */
    export interface SqlVmSettingsArgs {
        /**
         * Gets or sets the Azure VM families (calling instance series to keep it
         * consistent with other targets).
         */
        instanceSeries?: pulumi.Input<pulumi.Input<string | enums.AzureVmFamily>[]>;
    }

    /**
     * Details on the total up-time for the VM.
     */
    export interface VmUptimeArgs {
        /**
         * Number of days in a month for VM uptime.
         */
        daysPerMonth?: pulumi.Input<number>;
        /**
         * Number of hours per day for VM uptime.
         */
        hoursPerDay?: pulumi.Input<number>;
    }
