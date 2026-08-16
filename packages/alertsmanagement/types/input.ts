import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
    conditions?: pulumi.Input<ConditionsArgs | undefined>;
    /**
     * Description of action rule
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * scope on which action rule will apply
     */
    scope?: pulumi.Input<ScopeArgs | undefined>;
    /**
     * Indicates if the given action rule is enabled or disabled
     */
    status?: pulumi.Input<string | enums.ActionRuleStatus | undefined>;
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
    customEmailSubject?: pulumi.Input<string | undefined>;
    /**
     * An optional custom web-hook payload to use in web-hook notifications.
     */
    customWebhookPayload?: pulumi.Input<string | undefined>;
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
    actions: pulumi.Input<pulumi.Input<AddActionGroupsArgs | RemoveAllActionGroupsArgs>[]>;
    /**
     * Conditions on which alerts will be filtered.
     */
    conditions?: pulumi.Input<pulumi.Input<ConditionArgs>[] | undefined>;
    /**
     * Actions to be applied.Description of alert processing rule.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Indicates if the given alert processing rule is enabled or disabled.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Scheduling for alert processing rule.
     */
    schedule?: pulumi.Input<ScheduleArgs | undefined>;
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
    field?: pulumi.Input<string | enums.Field | undefined>;
    /**
     * Operator for a given condition.
     */
    operator?: pulumi.Input<string | enums.Operator | undefined>;
    /**
     * List of values to match for a given condition.
     */
    values?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
 */
export interface ConditionsArgs {
    /**
     * filter alerts by alert context (payload)
     */
    alertContext?: pulumi.Input<ConditionArgs | undefined>;
    /**
     * filter alerts by alert rule id
     */
    alertRuleId?: pulumi.Input<ConditionArgs | undefined>;
    /**
     * filter alerts by alert rule name
     */
    alertRuleName?: pulumi.Input<ConditionArgs | undefined>;
    /**
     * filter alerts by alert rule description
     */
    description?: pulumi.Input<ConditionArgs | undefined>;
    /**
     * filter alerts by monitor condition
     */
    monitorCondition?: pulumi.Input<ConditionArgs | undefined>;
    /**
     * filter alerts by monitor service
     */
    monitorService?: pulumi.Input<ConditionArgs | undefined>;
    /**
     * filter alerts by severity
     */
    severity?: pulumi.Input<ConditionArgs | undefined>;
    /**
     * filter alerts by target resource type
     */
    targetResourceType?: pulumi.Input<ConditionArgs | undefined>;
}

/**
 * Daily recurrence object.
 */
export interface DailyRecurrenceArgs {
    /**
     * End time for recurrence.
     */
    endTime?: pulumi.Input<string | undefined>;
    /**
     * Specifies when the recurrence should be applied.
     * Expected value is 'Daily'.
     */
    recurrenceType: pulumi.Input<"Daily">;
    /**
     * Start time for recurrence.
     */
    startTime?: pulumi.Input<string | undefined>;
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
    parameters?: pulumi.Input<{[key: string]: any} | undefined>;
}

/**
 * Action rule with diagnostics configuration
 */
export interface DiagnosticsArgs {
    /**
     * conditions on which alerts will be filtered
     */
    conditions?: pulumi.Input<ConditionsArgs | undefined>;
    /**
     * Description of action rule
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * scope on which action rule will apply
     */
    scope?: pulumi.Input<ScopeArgs | undefined>;
    /**
     * Indicates if the given action rule is enabled or disabled
     */
    status?: pulumi.Input<string | enums.ActionRuleStatus | undefined>;
    /**
     * Indicates type of action rule
     * Expected value is 'Diagnostics'.
     */
    type: pulumi.Input<"Diagnostics">;
}

/**
 * The issue properties
 */
export interface IssuePropertiesArgs {
    /**
     * The issue impact time (in UTC)
     */
    impactTime: pulumi.Input<string>;
    /**
     * The issue severity
     */
    severity: pulumi.Input<string>;
    /**
     * The issue status
     */
    status: pulumi.Input<string | enums.Status>;
    /**
     * The issue title
     */
    title: pulumi.Input<string>;
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
    endTime?: pulumi.Input<string | undefined>;
    /**
     * Specifies when the recurrence should be applied.
     * Expected value is 'Monthly'.
     */
    recurrenceType: pulumi.Input<"Monthly">;
    /**
     * Start time for recurrence.
     */
    startTime?: pulumi.Input<string | undefined>;
}

/**
 * An Azure Prometheus alerting or recording rule.
 */
export interface PrometheusRuleArgs {
    /**
     * Actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    actions?: pulumi.Input<pulumi.Input<PrometheusRuleGroupActionArgs>[] | undefined>;
    /**
     * Alert rule name.
     */
    alert?: pulumi.Input<string | undefined>;
    /**
     * The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links. The annotation values can be templated.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Enable/disable rule.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The PromQL expression to evaluate. https://prometheus.io/docs/prometheus/latest/querying/basics/. Evaluated periodically as given by 'interval', and the result recorded as a new set of time series with the metric name as given by 'record'.
     */
    expression: pulumi.Input<string>;
    /**
     * The amount of time alert must be active before firing.
     */
    for?: pulumi.Input<string | undefined>;
    /**
     * Labels to add or overwrite before storing the result.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Recorded metrics name.
     */
    record?: pulumi.Input<string | undefined>;
    /**
     * Defines the configuration for resolving fired alerts. Only relevant for alerts.
     */
    resolveConfiguration?: pulumi.Input<PrometheusRuleResolveConfigurationArgs | undefined>;
    /**
     * The severity of the alerts fired by the rule. Must be between 0 and 4.
     */
    severity?: pulumi.Input<number | undefined>;
}

/**
 * An alert action. Only relevant for alerts.
 */
export interface PrometheusRuleGroupActionArgs {
    /**
     * The resource id of the action group to use.
     */
    actionGroupId?: pulumi.Input<string | undefined>;
    /**
     * The properties of an action group object.
     */
    actionProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Specifies the Prometheus alert rule configuration.
 */
export interface PrometheusRuleResolveConfigurationArgs {
    /**
     * Enable alert auto-resolution.
     */
    autoResolved?: pulumi.Input<boolean | undefined>;
    /**
     * Alert auto-resolution timeout.
     */
    timeToResolve?: pulumi.Input<string | undefined>;
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
    effectiveFrom?: pulumi.Input<string | undefined>;
    /**
     * Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix.
     */
    effectiveUntil?: pulumi.Input<string | undefined>;
    /**
     * List of recurrences.
     */
    recurrences?: pulumi.Input<pulumi.Input<DailyRecurrenceArgs | MonthlyRecurrenceArgs | WeeklyRecurrenceArgs>[] | undefined>;
    /**
     * Scheduling time zone.
     */
    timeZone?: pulumi.Input<string | undefined>;
}

/**
 * Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
 */
export interface ScopeArgs {
    /**
     * type of target scope
     */
    scopeType?: pulumi.Input<string | enums.ScopeType | undefined>;
    /**
     * list of ARM IDs of the given scope type which will be the target of the given action rule.
     */
    values?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Action rule with suppression configuration
 */
export interface SuppressionArgs {
    /**
     * conditions on which alerts will be filtered
     */
    conditions?: pulumi.Input<ConditionsArgs | undefined>;
    /**
     * Description of action rule
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * scope on which action rule will apply
     */
    scope?: pulumi.Input<ScopeArgs | undefined>;
    /**
     * Indicates if the given action rule is enabled or disabled
     */
    status?: pulumi.Input<string | enums.ActionRuleStatus | undefined>;
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
    schedule?: pulumi.Input<SuppressionScheduleArgs | undefined>;
}

/**
 * Schedule for a given suppression configuration.
 */
export interface SuppressionScheduleArgs {
    /**
     * End date for suppression
     */
    endDate?: pulumi.Input<string | undefined>;
    /**
     * End date for suppression
     */
    endTime?: pulumi.Input<string | undefined>;
    /**
     * Specifies the values for recurrence pattern
     */
    recurrenceValues?: pulumi.Input<pulumi.Input<number>[] | undefined>;
    /**
     * Start date for suppression
     */
    startDate?: pulumi.Input<string | undefined>;
    /**
     * Start time for suppression
     */
    startTime?: pulumi.Input<string | undefined>;
}

/**
 * Optional throttling information for the alert rule.
 */
export interface ThrottlingInformationArgs {
    /**
     * The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes
     */
    duration?: pulumi.Input<string | undefined>;
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
    endTime?: pulumi.Input<string | undefined>;
    /**
     * Specifies when the recurrence should be applied.
     * Expected value is 'Weekly'.
     */
    recurrenceType: pulumi.Input<"Weekly">;
    /**
     * Start time for recurrence.
     */
    startTime?: pulumi.Input<string | undefined>;
}
