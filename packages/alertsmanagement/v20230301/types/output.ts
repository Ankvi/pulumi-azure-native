import * as pulumi from "@pulumi/pulumi";
    /**
     * An alert action. Only relevant for alerts.
     */
    export interface PrometheusRuleGroupActionResponse {
        /**
         * The resource id of the action group to use.
         */
        actionGroupId?: string;
        /**
         * The properties of an action group object.
         */
        actionProperties?: {[key: string]: string};
    }

    /**
     * Specifies the Prometheus alert rule configuration.
     */
    export interface PrometheusRuleResolveConfigurationResponse {
        /**
         * Enable alert auto-resolution.
         */
        autoResolved?: boolean;
        /**
         * Alert auto-resolution timeout.
         */
        timeToResolve?: string;
    }

    /**
     * An Azure Prometheus alerting or recording rule.
     */
    export interface PrometheusRuleResponse {
        /**
         * Actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
         */
        actions?: PrometheusRuleGroupActionResponse[];
        /**
         * Alert rule name.
         */
        alert?: string;
        /**
         * The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links. The annotation values can be templated.
         */
        annotations?: {[key: string]: string};
        /**
         * Enable/disable rule.
         */
        enabled?: boolean;
        /**
         * The PromQL expression to evaluate. https://prometheus.io/docs/prometheus/latest/querying/basics/. Evaluated periodically as given by 'interval', and the result recorded as a new set of time series with the metric name as given by 'record'.
         */
        expression: string;
        /**
         * The amount of time alert must be active before firing.
         */
        for?: string;
        /**
         * Labels to add or overwrite before storing the result.
         */
        labels?: {[key: string]: string};
        /**
         * Recorded metrics name.
         */
        record?: string;
        /**
         * Defines the configuration for resolving fired alerts. Only relevant for alerts.
         */
        resolveConfiguration?: PrometheusRuleResolveConfigurationResponse;
        /**
         * The severity of the alerts fired by the rule. Must be between 0 and 4.
         */
        severity?: number;
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
