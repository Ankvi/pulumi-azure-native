import * as pulumi from "@pulumi/pulumi";
    /**
     * Data source object contains configuration to collect telemetry and one or more sinks to send that telemetry data to
     */
    export interface DataSourceArgs {
        configuration: pulumi.Input<DataSourceConfigurationArgs>;
        /**
         * Datasource kind
         */
        kind: pulumi.Input<string>;
        sinks: pulumi.Input<pulumi.Input<SinkConfigurationArgs>[]>;
    }

    export interface DataSourceConfigurationArgs {
        /**
         * Windows event logs configuration.
         */
        eventLogs?: pulumi.Input<pulumi.Input<EventLogConfigurationArgs>[]>;
        /**
         * Performance counter configuration
         */
        perfCounters?: pulumi.Input<pulumi.Input<PerformanceCounterConfigurationArgs>[]>;
        /**
         * ETW providers configuration
         */
        providers?: pulumi.Input<pulumi.Input<EtwProviderConfigurationArgs>[]>;
    }

    export interface EtwEventConfigurationArgs {
        filter?: pulumi.Input<string>;
        id: pulumi.Input<number>;
        name: pulumi.Input<string>;
    }

    export interface EtwProviderConfigurationArgs {
        events: pulumi.Input<pulumi.Input<EtwEventConfigurationArgs>[]>;
        id: pulumi.Input<string>;
    }

    export interface EventLogConfigurationArgs {
        filter?: pulumi.Input<string>;
        logName: pulumi.Input<string>;
    }

    export interface PerformanceCounterConfigurationArgs {
        instance?: pulumi.Input<string>;
        name: pulumi.Input<string>;
        samplingPeriod: pulumi.Input<string>;
    }

    export interface SinkConfigurationArgs {
        kind: pulumi.Input<string>;
    }
