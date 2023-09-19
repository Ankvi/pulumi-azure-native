import * as pulumi from "@pulumi/pulumi";
    /**
     * An Azure Prometheus alerting or recording rule.
     */
    export interface PrometheusRuleArgs {
        /**
         * Actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
         */
        actions?: pulumi.Input<pulumi.Input<PrometheusRuleGroupActionArgs>[]>;
        /**
         * Alert rule name.
         */
        alert?: pulumi.Input<string>;
        /**
         * The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links. The annotation values can be templated.
         */
        annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Enable/disable rule.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The PromQL expression to evaluate. https://prometheus.io/docs/prometheus/latest/querying/basics/. Evaluated periodically as given by 'interval', and the result recorded as a new set of time series with the metric name as given by 'record'.
         */
        expression: pulumi.Input<string>;
        /**
         * The amount of time alert must be active before firing.
         */
        for?: pulumi.Input<string>;
        /**
         * Labels to add or overwrite before storing the result.
         */
        labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Recorded metrics name.
         */
        record?: pulumi.Input<string>;
        /**
         * Defines the configuration for resolving fired alerts. Only relevant for alerts.
         */
        resolveConfiguration?: pulumi.Input<PrometheusRuleResolveConfigurationArgs>;
        /**
         * The severity of the alerts fired by the rule. Must be between 0 and 4.
         */
        severity?: pulumi.Input<number>;
    }

    /**
     * An alert action. Only relevant for alerts.
     */
    export interface PrometheusRuleGroupActionArgs {
        /**
         * The resource id of the action group to use.
         */
        actionGroupId?: pulumi.Input<string>;
        /**
         * The properties of an action group object.
         */
        actionProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Specifies the Prometheus alert rule configuration.
     */
    export interface PrometheusRuleResolveConfigurationArgs {
        /**
         * Enable alert auto-resolution.
         */
        autoResolved?: pulumi.Input<boolean>;
        /**
         * Alert auto-resolution timeout.
         */
        timeToResolve?: pulumi.Input<string>;
    }
