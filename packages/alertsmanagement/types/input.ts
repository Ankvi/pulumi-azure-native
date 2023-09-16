import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace alertsmanagement {
    /**
     * Action rule with action group configuration
     */
    export interface ActionGroupArgs {
        /**
         * Action group to trigger if action rule matches
         */
        actionGroupId: pulumi.Input<string>;
        /**
         * conditions on which alerts will be filtered
         */
        conditions?: pulumi.Input<ConditionsArgs>;
        /**
         * Description of action rule
         */
        description?: pulumi.Input<string>;
        /**
         * scope on which action rule will apply
         */
        scope?: pulumi.Input<ScopeArgs>;
        /**
         * Indicates if the given action rule is enabled or disabled
         */
        status?: pulumi.Input<string | enums.ActionRuleStatus>;
        /**
         * Indicates type of action rule
         * Expected value is 'ActionGroup'.
         */
        type: pulumi.Input<"ActionGroup">;
    }

    /**
     * The Action Groups information, used by the alert rule.
     */
    export interface ActionGroupsInformationArgs {
        /**
         * An optional custom email subject to use in email notifications.
         */
        customEmailSubject?: pulumi.Input<string>;
        /**
         * An optional custom web-hook payload to use in web-hook notifications.
         */
        customWebhookPayload?: pulumi.Input<string>;
        /**
         * The Action Group resource IDs.
         */
        groupIds: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Add action groups to alert processing rule.
     */
    export interface AddActionGroupsArgs {
        /**
         * List of action group Ids to add to alert processing rule.
         */
        actionGroupIds: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Action that should be applied.
         * Expected value is 'AddActionGroups'.
         */
        actionType: pulumi.Input<"AddActionGroups">;
    }

    /**
     * Alert processing rule properties defining scopes, conditions and scheduling logic for alert processing rule.
     */
    export interface AlertProcessingRulePropertiesArgs {
        /**
         * Actions to be applied.
         */
        actions: pulumi.Input<pulumi.Input<AddActionGroupsArgs | CorrelateAlertsArgs | RemoveAllActionGroupsArgs>[]>;
        /**
         * Conditions on which alerts will be filtered.
         */
        conditions?: pulumi.Input<pulumi.Input<ConditionArgs>[]>;
        /**
         * Description of alert processing rule.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates if the given alert processing rule is enabled or disabled.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Scheduling for alert processing rule.
         */
        schedule?: pulumi.Input<ScheduleArgs>;
        /**
         * Scopes on which alert processing rule will apply.
         */
        scopes: pulumi.Input<pulumi.Input<string>[]>;
    }
    /**
     * alertProcessingRulePropertiesArgsProvideDefaults sets the appropriate defaults for AlertProcessingRulePropertiesArgs
     */
    export function alertProcessingRulePropertiesArgsProvideDefaults(val: AlertProcessingRulePropertiesArgs): AlertProcessingRulePropertiesArgs {
        return {
            ...val,
            enabled: (val.enabled) ?? true,
        };
    }

    /**
     * Condition to trigger an alert processing rule.
     */
    export interface ConditionArgs {
        /**
         * Field for a given condition.
         */
        field?: pulumi.Input<string | enums.Field>;
        /**
         * Operator for a given condition.
         */
        operator?: pulumi.Input<string | enums.Operator>;
        /**
         * List of values to match for a given condition.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
     */
    export interface ConditionsArgs {
        /**
         * filter alerts by alert context (payload)
         */
        alertContext?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by alert rule id
         */
        alertRuleId?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by alert rule name
         */
        alertRuleName?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by alert rule description
         */
        description?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by monitor condition
         */
        monitorCondition?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by monitor service
         */
        monitorService?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by severity
         */
        severity?: pulumi.Input<ConditionArgs>;
        /**
         * filter alerts by target resource type
         */
        targetResourceType?: pulumi.Input<ConditionArgs>;
    }

    /**
     * Add logic for alerts correlation.
     */
    export interface CorrelateAlertsArgs {
        /**
         * Action that should be applied.
         * Expected value is 'CorrelateAlerts'.
         */
        actionType: pulumi.Input<"CorrelateAlerts">;
        /**
         * The list of conditions for the alerts correlations.
         */
        correlateBy: pulumi.Input<pulumi.Input<CorrelateByArgs>[]>;
        /**
         * The required duration (in ISO8601 format) for the alerts correlation.
         */
        correlationInterval: pulumi.Input<string>;
        /**
         * Indicates how to handle child alerts notifications.
         */
        notificationsForCorrelatedAlerts?: pulumi.Input<string | enums.NotificationsForCorrelatedAlerts>;
        /**
         * The priority of this correlation.
         */
        priority: pulumi.Input<number>;
    }
    /**
     * correlateAlertsArgsProvideDefaults sets the appropriate defaults for CorrelateAlertsArgs
     */
    export function correlateAlertsArgsProvideDefaults(val: CorrelateAlertsArgs): CorrelateAlertsArgs {
        return {
            ...val,
            notificationsForCorrelatedAlerts: (val.notificationsForCorrelatedAlerts) ?? "SuppressAlways",
        };
    }

    /**
     * The logic for the correlation.
     */
    export interface CorrelateByArgs {
        /**
         * The JPath of the property that the alerts should be correlated by.
         */
        field?: pulumi.Input<string>;
    }

    /**
     * Daily recurrence object.
     */
    export interface DailyRecurrenceArgs {
        /**
         * End time for recurrence.
         */
        endTime: pulumi.Input<string>;
        /**
         * Specifies when the recurrence should be applied.
         * Expected value is 'Daily'.
         */
        recurrenceType: pulumi.Input<"Daily">;
        /**
         * Start time for recurrence.
         */
        startTime: pulumi.Input<string>;
    }

    /**
     * The detector information. By default this is not populated, unless it's specified in expandDetector
     */
    export interface DetectorArgs {
        /**
         * The detector id.
         */
        id: pulumi.Input<string>;
        /**
         * The detector's parameters.'
         */
        parameters?: pulumi.Input<{[key: string]: any}>;
    }

    /**
     * Action rule with diagnostics configuration
     */
    export interface DiagnosticsArgs {
        /**
         * conditions on which alerts will be filtered
         */
        conditions?: pulumi.Input<ConditionsArgs>;
        /**
         * Description of action rule
         */
        description?: pulumi.Input<string>;
        /**
         * scope on which action rule will apply
         */
        scope?: pulumi.Input<ScopeArgs>;
        /**
         * Indicates if the given action rule is enabled or disabled
         */
        status?: pulumi.Input<string | enums.ActionRuleStatus>;
        /**
         * Indicates type of action rule
         * Expected value is 'Diagnostics'.
         */
        type: pulumi.Input<"Diagnostics">;
    }

    /**
     * Monthly recurrence object.
     */
    export interface MonthlyRecurrenceArgs {
        /**
         * Specifies the values for monthly recurrence pattern.
         */
        daysOfMonth: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * End time for recurrence.
         */
        endTime?: pulumi.Input<string>;
        /**
         * Specifies when the recurrence should be applied.
         * Expected value is 'Monthly'.
         */
        recurrenceType: pulumi.Input<"Monthly">;
        /**
         * Start time for recurrence.
         */
        startTime?: pulumi.Input<string>;
    }

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

    /**
     * Indicates if all action groups should be removed.
     */
    export interface RemoveAllActionGroupsArgs {
        /**
         * Action that should be applied.
         * Expected value is 'RemoveAllActionGroups'.
         */
        actionType: pulumi.Input<"RemoveAllActionGroups">;
    }

    /**
     * Scheduling configuration for a given alert processing rule.
     */
    export interface ScheduleArgs {
        /**
         * Scheduling effective from time. Date-Time in ISO-8601 format without timezone suffix.
         */
        effectiveFrom?: pulumi.Input<string>;
        /**
         * Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix.
         */
        effectiveUntil?: pulumi.Input<string>;
        /**
         * List of recurrences.
         */
        recurrences?: pulumi.Input<pulumi.Input<DailyRecurrenceArgs | MonthlyRecurrenceArgs | WeeklyRecurrenceArgs>[]>;
        /**
         * Scheduling time zone.
         */
        timeZone?: pulumi.Input<string>;
    }

    /**
     * Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
     */
    export interface ScopeArgs {
        /**
         * type of target scope
         */
        scopeType?: pulumi.Input<string | enums.ScopeType>;
        /**
         * list of ARM IDs of the given scope type which will be the target of the given action rule.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Action rule with suppression configuration
     */
    export interface SuppressionArgs {
        /**
         * conditions on which alerts will be filtered
         */
        conditions?: pulumi.Input<ConditionsArgs>;
        /**
         * Description of action rule
         */
        description?: pulumi.Input<string>;
        /**
         * scope on which action rule will apply
         */
        scope?: pulumi.Input<ScopeArgs>;
        /**
         * Indicates if the given action rule is enabled or disabled
         */
        status?: pulumi.Input<string | enums.ActionRuleStatus>;
        /**
         * suppression configuration for the action rule
         */
        suppressionConfig: pulumi.Input<SuppressionConfigArgs>;
        /**
         * Indicates type of action rule
         * Expected value is 'Suppression'.
         */
        type: pulumi.Input<"Suppression">;
    }

    /**
     * Suppression logic for a given action rule
     */
    export interface SuppressionConfigArgs {
        /**
         * Specifies when the suppression should be applied
         */
        recurrenceType: pulumi.Input<string | enums.SuppressionType>;
        /**
         * suppression schedule configuration
         */
        schedule?: pulumi.Input<SuppressionScheduleArgs>;
    }

    /**
     * Schedule for a given suppression configuration.
     */
    export interface SuppressionScheduleArgs {
        /**
         * End date for suppression
         */
        endDate?: pulumi.Input<string>;
        /**
         * End date for suppression
         */
        endTime?: pulumi.Input<string>;
        /**
         * Specifies the values for recurrence pattern
         */
        recurrenceValues?: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * Start date for suppression
         */
        startDate?: pulumi.Input<string>;
        /**
         * Start time for suppression
         */
        startTime?: pulumi.Input<string>;
    }

    /**
     * Optional throttling information for the alert rule.
     */
    export interface ThrottlingInformationArgs {
        /**
         * The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes
         */
        duration?: pulumi.Input<string>;
    }

    /**
     * Weekly recurrence object.
     */
    export interface WeeklyRecurrenceArgs {
        /**
         * Specifies the values for weekly recurrence pattern.
         */
        daysOfWeek: pulumi.Input<pulumi.Input<string | enums.DaysOfWeek>[]>;
        /**
         * End time for recurrence.
         */
        endTime?: pulumi.Input<string>;
        /**
         * Specifies when the recurrence should be applied.
         * Expected value is 'Weekly'.
         */
        recurrenceType: pulumi.Input<"Weekly">;
        /**
         * Start time for recurrence.
         */
        startTime?: pulumi.Input<string>;
    }

    export namespace v20190505preview {
        /**
         * Action rule with action group configuration
         */
        export interface ActionGroupArgs {
            /**
             * Action group to trigger if action rule matches
             */
            actionGroupId: pulumi.Input<string>;
            /**
             * conditions on which alerts will be filtered
             */
            conditions?: pulumi.Input<v20190505preview.ConditionsArgs>;
            /**
             * Description of action rule
             */
            description?: pulumi.Input<string>;
            /**
             * scope on which action rule will apply
             */
            scope?: pulumi.Input<v20190505preview.ScopeArgs>;
            /**
             * Indicates if the given action rule is enabled or disabled
             */
            status?: pulumi.Input<string | enums.v20190505preview.ActionRuleStatus>;
            /**
             * Indicates type of action rule
             * Expected value is 'ActionGroup'.
             */
            type: pulumi.Input<"ActionGroup">;
        }

        /**
         * condition to trigger an action rule
         */
        export interface ConditionArgs {
            /**
             * operator for a given condition
             */
            operator?: pulumi.Input<string | enums.v20190505preview.Operator>;
            /**
             * list of values to match for a given condition.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
         */
        export interface ConditionsArgs {
            /**
             * filter alerts by alert context (payload)
             */
            alertContext?: pulumi.Input<v20190505preview.ConditionArgs>;
            /**
             * filter alerts by alert rule id
             */
            alertRuleId?: pulumi.Input<v20190505preview.ConditionArgs>;
            /**
             * filter alerts by alert rule name
             */
            alertRuleName?: pulumi.Input<v20190505preview.ConditionArgs>;
            /**
             * filter alerts by alert rule description
             */
            description?: pulumi.Input<v20190505preview.ConditionArgs>;
            /**
             * filter alerts by monitor condition
             */
            monitorCondition?: pulumi.Input<v20190505preview.ConditionArgs>;
            /**
             * filter alerts by monitor service
             */
            monitorService?: pulumi.Input<v20190505preview.ConditionArgs>;
            /**
             * filter alerts by severity
             */
            severity?: pulumi.Input<v20190505preview.ConditionArgs>;
            /**
             * filter alerts by target resource type
             */
            targetResourceType?: pulumi.Input<v20190505preview.ConditionArgs>;
        }

        /**
         * Action rule with diagnostics configuration
         */
        export interface DiagnosticsArgs {
            /**
             * conditions on which alerts will be filtered
             */
            conditions?: pulumi.Input<v20190505preview.ConditionsArgs>;
            /**
             * Description of action rule
             */
            description?: pulumi.Input<string>;
            /**
             * scope on which action rule will apply
             */
            scope?: pulumi.Input<v20190505preview.ScopeArgs>;
            /**
             * Indicates if the given action rule is enabled or disabled
             */
            status?: pulumi.Input<string | enums.v20190505preview.ActionRuleStatus>;
            /**
             * Indicates type of action rule
             * Expected value is 'Diagnostics'.
             */
            type: pulumi.Input<"Diagnostics">;
        }

        /**
         * Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
         */
        export interface ScopeArgs {
            /**
             * type of target scope
             */
            scopeType?: pulumi.Input<string | enums.v20190505preview.ScopeType>;
            /**
             * list of ARM IDs of the given scope type which will be the target of the given action rule.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Action rule with suppression configuration
         */
        export interface SuppressionArgs {
            /**
             * conditions on which alerts will be filtered
             */
            conditions?: pulumi.Input<v20190505preview.ConditionsArgs>;
            /**
             * Description of action rule
             */
            description?: pulumi.Input<string>;
            /**
             * scope on which action rule will apply
             */
            scope?: pulumi.Input<v20190505preview.ScopeArgs>;
            /**
             * Indicates if the given action rule is enabled or disabled
             */
            status?: pulumi.Input<string | enums.v20190505preview.ActionRuleStatus>;
            /**
             * suppression configuration for the action rule
             */
            suppressionConfig: pulumi.Input<v20190505preview.SuppressionConfigArgs>;
            /**
             * Indicates type of action rule
             * Expected value is 'Suppression'.
             */
            type: pulumi.Input<"Suppression">;
        }

        /**
         * Suppression logic for a given action rule
         */
        export interface SuppressionConfigArgs {
            /**
             * Specifies when the suppression should be applied
             */
            recurrenceType: pulumi.Input<string | enums.v20190505preview.SuppressionType>;
            /**
             * suppression schedule configuration
             */
            schedule?: pulumi.Input<v20190505preview.SuppressionScheduleArgs>;
        }

        /**
         * Schedule for a given suppression configuration.
         */
        export interface SuppressionScheduleArgs {
            /**
             * End date for suppression
             */
            endDate?: pulumi.Input<string>;
            /**
             * End date for suppression
             */
            endTime?: pulumi.Input<string>;
            /**
             * Specifies the values for recurrence pattern
             */
            recurrenceValues?: pulumi.Input<pulumi.Input<number>[]>;
            /**
             * Start date for suppression
             */
            startDate?: pulumi.Input<string>;
            /**
             * Start time for suppression
             */
            startTime?: pulumi.Input<string>;
        }

    }

    export namespace v20210401 {
        /**
         * The Action Groups information, used by the alert rule.
         */
        export interface ActionGroupsInformationArgs {
            /**
             * An optional custom email subject to use in email notifications.
             */
            customEmailSubject?: pulumi.Input<string>;
            /**
             * An optional custom web-hook payload to use in web-hook notifications.
             */
            customWebhookPayload?: pulumi.Input<string>;
            /**
             * The Action Group resource IDs.
             */
            groupIds: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The detector information. By default this is not populated, unless it's specified in expandDetector
         */
        export interface DetectorArgs {
            /**
             * The detector id.
             */
            id: pulumi.Input<string>;
            /**
             * The detector's parameters.'
             */
            parameters?: pulumi.Input<{[key: string]: any}>;
        }

        /**
         * Optional throttling information for the alert rule.
         */
        export interface ThrottlingInformationArgs {
            /**
             * The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes
             */
            duration?: pulumi.Input<string>;
        }

    }

    export namespace v20230301 {
        /**
         * An Azure Prometheus alerting or recording rule.
         */
        export interface PrometheusRuleArgs {
            /**
             * Actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
             */
            actions?: pulumi.Input<pulumi.Input<v20230301.PrometheusRuleGroupActionArgs>[]>;
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
            resolveConfiguration?: pulumi.Input<v20230301.PrometheusRuleResolveConfigurationArgs>;
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

    }

    export namespace v20230401preview {
        /**
         * A pointer to an Azure Action Group.
         */
        export interface ActionGroupArgs {
            /**
             * The resource ID of the Action Group. This cannot be null or empty.
             */
            actionGroupId: pulumi.Input<string>;
            /**
             * Predefined list of properties and configuration items for the action group.
             */
            actionProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
             */
            webhookProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * A list of Activity Log Alert rule actions.
         */
        export interface ActionListArgs {
            /**
             * The list of the Action Groups.
             */
            actionGroups?: pulumi.Input<pulumi.Input<v20230401preview.ActionGroupArgs>[]>;
        }

        /**
         * An Activity Log Alert rule condition that is met when all its member conditions are met.
         */
        export interface AlertRuleAllOfConditionArgs {
            /**
             * The list of Activity Log Alert rule conditions.
             */
            allOf: pulumi.Input<pulumi.Input<v20230401preview.AlertRuleAnyOfOrLeafConditionArgs>[]>;
        }

        /**
         * An Activity Log Alert rule condition that is met when all its member conditions are met.
         * Each condition can be of one of the following types:
         * __Important__: Each type has its unique subset of properties. Properties from different types CANNOT exist in one condition.
         *    * __Leaf Condition -__ must contain 'field' and either 'equals' or 'containsAny'.
         *   _Please note, 'anyOf' should __not__ be set in a Leaf Condition._
         *   * __AnyOf Condition -__ must contain __only__ 'anyOf' (which is an array of Leaf Conditions).
         *   _Please note, 'field', 'equals' and 'containsAny' should __not__ be set in an AnyOf Condition._
         */
        export interface AlertRuleAnyOfOrLeafConditionArgs {
            /**
             * An Activity Log Alert rule condition that is met when at least one of its member leaf conditions are met.
             */
            anyOf?: pulumi.Input<pulumi.Input<v20230401preview.AlertRuleLeafConditionArgs>[]>;
            /**
             * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
             */
            containsAny?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
             */
            equals?: pulumi.Input<string>;
            /**
             * The name of the Activity Log event's field that this condition will examine.
             * The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
             */
            field?: pulumi.Input<string>;
        }

        /**
         * An Activity Log Alert rule condition that is met by comparing the field and value of an Activity Log event.
         * This condition must contain 'field' and either 'equals' or 'containsAny'.
         */
        export interface AlertRuleLeafConditionArgs {
            /**
             * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
             */
            containsAny?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
             */
            equals?: pulumi.Input<string>;
            /**
             * The name of the Activity Log event's field that this condition will examine.
             * The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
             */
            field?: pulumi.Input<string>;
        }

    }

    export namespace v20230501preview {
        /**
         * Add action groups to alert processing rule.
         */
        export interface AddActionGroupsArgs {
            /**
             * List of action group Ids to add to alert processing rule.
             */
            actionGroupIds: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Action that should be applied.
             * Expected value is 'AddActionGroups'.
             */
            actionType: pulumi.Input<"AddActionGroups">;
        }

        /**
         * Alert processing rule properties defining scopes, conditions and scheduling logic for alert processing rule.
         */
        export interface AlertProcessingRulePropertiesArgs {
            /**
             * Actions to be applied.
             */
            actions: pulumi.Input<pulumi.Input<v20230501preview.AddActionGroupsArgs | v20230501preview.CorrelateAlertsArgs | v20230501preview.RemoveAllActionGroupsArgs>[]>;
            /**
             * Conditions on which alerts will be filtered.
             */
            conditions?: pulumi.Input<pulumi.Input<v20230501preview.ConditionArgs>[]>;
            /**
             * Description of alert processing rule.
             */
            description?: pulumi.Input<string>;
            /**
             * Indicates if the given alert processing rule is enabled or disabled.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Scheduling for alert processing rule.
             */
            schedule?: pulumi.Input<v20230501preview.ScheduleArgs>;
            /**
             * Scopes on which alert processing rule will apply.
             */
            scopes: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * alertProcessingRulePropertiesArgsProvideDefaults sets the appropriate defaults for AlertProcessingRulePropertiesArgs
         */
        export function alertProcessingRulePropertiesArgsProvideDefaults(val: AlertProcessingRulePropertiesArgs): AlertProcessingRulePropertiesArgs {
            return {
                ...val,
                enabled: (val.enabled) ?? true,
            };
        }

        /**
         * Condition to trigger an alert processing rule.
         */
        export interface ConditionArgs {
            /**
             * Field for a given condition.
             */
            field?: pulumi.Input<string | enums.v20230501preview.Field>;
            /**
             * Operator for a given condition.
             */
            operator?: pulumi.Input<string | enums.v20230501preview.Operator>;
            /**
             * List of values to match for a given condition.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Add logic for alerts correlation.
         */
        export interface CorrelateAlertsArgs {
            /**
             * Action that should be applied.
             * Expected value is 'CorrelateAlerts'.
             */
            actionType: pulumi.Input<"CorrelateAlerts">;
            /**
             * The list of conditions for the alerts correlations.
             */
            correlateBy: pulumi.Input<pulumi.Input<v20230501preview.CorrelateByArgs>[]>;
            /**
             * The required duration (in ISO8601 format) for the alerts correlation.
             */
            correlationInterval: pulumi.Input<string>;
            /**
             * Indicates how to handle child alerts notifications.
             */
            notificationsForCorrelatedAlerts?: pulumi.Input<string | enums.v20230501preview.NotificationsForCorrelatedAlerts>;
            /**
             * The priority of this correlation.
             */
            priority: pulumi.Input<number>;
        }
        /**
         * correlateAlertsArgsProvideDefaults sets the appropriate defaults for CorrelateAlertsArgs
         */
        export function correlateAlertsArgsProvideDefaults(val: CorrelateAlertsArgs): CorrelateAlertsArgs {
            return {
                ...val,
                notificationsForCorrelatedAlerts: (val.notificationsForCorrelatedAlerts) ?? "SuppressAlways",
            };
        }

        /**
         * The logic for the correlation.
         */
        export interface CorrelateByArgs {
            /**
             * The JPath of the property that the alerts should be correlated by.
             */
            field?: pulumi.Input<string>;
        }

        /**
         * Daily recurrence object.
         */
        export interface DailyRecurrenceArgs {
            /**
             * End time for recurrence.
             */
            endTime: pulumi.Input<string>;
            /**
             * Specifies when the recurrence should be applied.
             * Expected value is 'Daily'.
             */
            recurrenceType: pulumi.Input<"Daily">;
            /**
             * Start time for recurrence.
             */
            startTime: pulumi.Input<string>;
        }

        /**
         * Monthly recurrence object.
         */
        export interface MonthlyRecurrenceArgs {
            /**
             * Specifies the values for monthly recurrence pattern.
             */
            daysOfMonth: pulumi.Input<pulumi.Input<number>[]>;
            /**
             * End time for recurrence.
             */
            endTime?: pulumi.Input<string>;
            /**
             * Specifies when the recurrence should be applied.
             * Expected value is 'Monthly'.
             */
            recurrenceType: pulumi.Input<"Monthly">;
            /**
             * Start time for recurrence.
             */
            startTime?: pulumi.Input<string>;
        }

        /**
         * Indicates if all action groups should be removed.
         */
        export interface RemoveAllActionGroupsArgs {
            /**
             * Action that should be applied.
             * Expected value is 'RemoveAllActionGroups'.
             */
            actionType: pulumi.Input<"RemoveAllActionGroups">;
        }

        /**
         * Scheduling configuration for a given alert processing rule.
         */
        export interface ScheduleArgs {
            /**
             * Scheduling effective from time. Date-Time in ISO-8601 format without timezone suffix.
             */
            effectiveFrom?: pulumi.Input<string>;
            /**
             * Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix.
             */
            effectiveUntil?: pulumi.Input<string>;
            /**
             * List of recurrences.
             */
            recurrences?: pulumi.Input<pulumi.Input<v20230501preview.DailyRecurrenceArgs | v20230501preview.MonthlyRecurrenceArgs | v20230501preview.WeeklyRecurrenceArgs>[]>;
            /**
             * Scheduling time zone.
             */
            timeZone?: pulumi.Input<string>;
        }

        /**
         * Weekly recurrence object.
         */
        export interface WeeklyRecurrenceArgs {
            /**
             * Specifies the values for weekly recurrence pattern.
             */
            daysOfWeek: pulumi.Input<pulumi.Input<string | enums.v20230501preview.DaysOfWeek>[]>;
            /**
             * End time for recurrence.
             */
            endTime?: pulumi.Input<string>;
            /**
             * Specifies when the recurrence should be applied.
             * Expected value is 'Weekly'.
             */
            recurrenceType: pulumi.Input<"Weekly">;
            /**
             * Start time for recurrence.
             */
            startTime?: pulumi.Input<string>;
        }

    }
}
