import * as pulumi from "@pulumi/pulumi";
    export interface DataSourceConfigurationResponse {
        /**
         * Windows event logs configuration.
         */
        eventLogs?: EventLogConfigurationResponse[];
        /**
         * Performance counter configuration
         */
        perfCounters?: PerformanceCounterConfigurationResponse[];
        /**
         * ETW providers configuration
         */
        providers?: EtwProviderConfigurationResponse[];
    }

    /**
     * Data source object contains configuration to collect telemetry and one or more sinks to send that telemetry data to
     */
    export interface DataSourceResponse {
        configuration: DataSourceConfigurationResponse;
        /**
         * Datasource kind
         */
        kind: string;
        sinks: SinkConfigurationResponse[];
    }

    export interface EtwEventConfigurationResponse {
        filter?: string;
        id: number;
        name: string;
    }

    export interface EtwProviderConfigurationResponse {
        events: EtwEventConfigurationResponse[];
        id: string;
    }

    export interface EventLogConfigurationResponse {
        filter?: string;
        logName: string;
    }

    export interface PerformanceCounterConfigurationResponse {
        instance?: string;
        name: string;
        samplingPeriod: string;
    }

    export interface SinkConfigurationResponse {
        kind: string;
    }
