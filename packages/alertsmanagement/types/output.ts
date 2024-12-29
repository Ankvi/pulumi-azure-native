import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Action rule with action group configuration
 */
export interface ActionGroupResponse {
    /**
     * Action group to trigger if action rule matches
     */
    actionGroupId: string;
    /**
     * conditions on which alerts will be filtered
     */
    conditions?: ConditionsResponse;
    /**
     * Creation time of action rule. Date-Time in ISO-8601 format.
     */
    createdAt: string;
    /**
     * Created by user name.
     */
    createdBy: string;
    /**
     * Description of action rule
     */
    description?: string;
    /**
     * Last updated time of action rule. Date-Time in ISO-8601 format.
     */
    lastModifiedAt: string;
    /**
     * Last modified by user name.
     */
    lastModifiedBy: string;
    /**
     * scope on which action rule will apply
     */
    scope?: ScopeResponse;
    /**
     * Indicates if the given action rule is enabled or disabled
     */
    status?: string;
    /**
     * Indicates type of action rule
     * Expected value is 'ActionGroup'.
     */
    type: "ActionGroup";
}

/**
 * The Action Groups information, used by the alert rule.
 */
export interface ActionGroupsInformationResponse {
    /**
     * An optional custom email subject to use in email notifications.
     */
    customEmailSubject?: string;
    /**
     * An optional custom web-hook payload to use in web-hook notifications.
     */
    customWebhookPayload?: string;
    /**
     * The Action Group resource IDs.
     */
    groupIds: string[];
}

/**
 * Add action groups to alert processing rule.
 */
export interface AddActionGroupsResponse {
    /**
     * List of action group Ids to add to alert processing rule.
     */
    actionGroupIds: string[];
    /**
     * Action that should be applied.
     * Expected value is 'AddActionGroups'.
     */
    actionType: "AddActionGroups";
}

/**
 * Alert processing rule properties defining scopes, conditions and scheduling logic for alert processing rule.
 */
export interface AlertProcessingRulePropertiesResponse {
    /**
     * Actions to be applied.
     */
    actions: (AddActionGroupsResponse | RemoveAllActionGroupsResponse)[];
    /**
     * Conditions on which alerts will be filtered.
     */
    conditions?: ConditionResponse[];
    /**
     * Description of alert processing rule.
     */
    description?: string;
    /**
     * Indicates if the given alert processing rule is enabled or disabled.
     */
    enabled?: boolean;
    /**
     * Scheduling for alert processing rule.
     */
    schedule?: ScheduleResponse;
    /**
     * Scopes on which alert processing rule will apply.
     */
    scopes: string[];
}
/**
 * alertProcessingRulePropertiesResponseProvideDefaults sets the appropriate defaults for AlertProcessingRulePropertiesResponse
 */
export function alertProcessingRulePropertiesResponseProvideDefaults(val: AlertProcessingRulePropertiesResponse): AlertProcessingRulePropertiesResponse {
    return {
        ...val,
        enabled: (val.enabled) ?? true,
    };
}

/**
 * Condition to trigger an alert processing rule.
 */
export interface ConditionResponse {
    /**
     * Field for a given condition.
     */
    field?: string;
    /**
     * Operator for a given condition.
     */
    operator?: string;
    /**
     * List of values to match for a given condition.
     */
    values?: string[];
}

/**
 * Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
 */
export interface ConditionsResponse {
    /**
     * filter alerts by alert context (payload)
     */
    alertContext?: ConditionResponse;
    /**
     * filter alerts by alert rule id
     */
    alertRuleId?: ConditionResponse;
    /**
     * filter alerts by alert rule name
     */
    alertRuleName?: ConditionResponse;
    /**
     * filter alerts by alert rule description
     */
    description?: ConditionResponse;
    /**
     * filter alerts by monitor condition
     */
    monitorCondition?: ConditionResponse;
    /**
     * filter alerts by monitor service
     */
    monitorService?: ConditionResponse;
    /**
     * filter alerts by severity
     */
    severity?: ConditionResponse;
    /**
     * filter alerts by target resource type
     */
    targetResourceType?: ConditionResponse;
}

/**
 * Daily recurrence object.
 */
export interface DailyRecurrenceResponse {
    /**
     * End time for recurrence.
     */
    endTime: string;
    /**
     * Specifies when the recurrence should be applied.
     * Expected value is 'Daily'.
     */
    recurrenceType: "Daily";
    /**
     * Start time for recurrence.
     */
    startTime: string;
}

/**
 * The detector parameter definition.
 */
export interface DetectorParameterDefinitionResponse {
    /**
     * The detector parameter description.
     */
    description?: string;
    /**
     * The detector parameter display name.
     */
    displayName?: string;
    /**
     * A value indicating whether this detector parameter is mandatory.
     */
    isMandatory?: boolean;
    /**
     * The detector parameter name.
     */
    name?: string;
    /**
     * The detector parameter type.
     */
    type?: string;
}

/**
 * The detector information. By default this is not populated, unless it's specified in expandDetector
 */
export interface DetectorResponse {
    /**
     * The Smart Detector description.
     */
    description: string;
    /**
     * The detector id.
     */
    id: string;
    /**
     * The Smart Detector image path. By default this is not populated, unless it's specified in expandDetector
     */
    imagePaths: string[];
    /**
     * The Smart Detector name.
     */
    name: string;
    /**
     * The Smart Detector parameters definitions.'
     */
    parameterDefinitions: DetectorParameterDefinitionResponse[];
    /**
     * The detector's parameters.'
     */
    parameters?: {[key: string]: any};
    /**
     * The Smart Detector supported cadences.
     */
    supportedCadences: number[];
    /**
     * The Smart Detector supported resource types.
     */
    supportedResourceTypes: string[];
}

/**
 * Action rule with diagnostics configuration
 */
export interface DiagnosticsResponse {
    /**
     * conditions on which alerts will be filtered
     */
    conditions?: ConditionsResponse;
    /**
     * Creation time of action rule. Date-Time in ISO-8601 format.
     */
    createdAt: string;
    /**
     * Created by user name.
     */
    createdBy: string;
    /**
     * Description of action rule
     */
    description?: string;
    /**
     * Last updated time of action rule. Date-Time in ISO-8601 format.
     */
    lastModifiedAt: string;
    /**
     * Last modified by user name.
     */
    lastModifiedBy: string;
    /**
     * scope on which action rule will apply
     */
    scope?: ScopeResponse;
    /**
     * Indicates if the given action rule is enabled or disabled
     */
    status?: string;
    /**
     * Indicates type of action rule
     * Expected value is 'Diagnostics'.
     */
    type: "Diagnostics";
}

/**
 * Monthly recurrence object.
 */
export interface MonthlyRecurrenceResponse {
    /**
     * Specifies the values for monthly recurrence pattern.
     */
    daysOfMonth: number[];
    /**
     * End time for recurrence.
     */
    endTime?: string;
    /**
     * Specifies when the recurrence should be applied.
     * Expected value is 'Monthly'.
     */
    recurrenceType: "Monthly";
    /**
     * Start time for recurrence.
     */
    startTime?: string;
}

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
 * Indicates if all action groups should be removed.
 */
export interface RemoveAllActionGroupsResponse {
    /**
     * Action that should be applied.
     * Expected value is 'RemoveAllActionGroups'.
     */
    actionType: "RemoveAllActionGroups";
}

/**
 * Scheduling configuration for a given alert processing rule.
 */
export interface ScheduleResponse {
    /**
     * Scheduling effective from time. Date-Time in ISO-8601 format without timezone suffix.
     */
    effectiveFrom?: string;
    /**
     * Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix.
     */
    effectiveUntil?: string;
    /**
     * List of recurrences.
     */
    recurrences?: (DailyRecurrenceResponse | MonthlyRecurrenceResponse | WeeklyRecurrenceResponse)[];
    /**
     * Scheduling time zone.
     */
    timeZone?: string;
}

/**
 * Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
 */
export interface ScopeResponse {
    /**
     * type of target scope
     */
    scopeType?: string;
    /**
     * list of ARM IDs of the given scope type which will be the target of the given action rule.
     */
    values?: string[];
}

/**
 * Suppression logic for a given action rule
 */
export interface SuppressionConfigResponse {
    /**
     * Specifies when the suppression should be applied
     */
    recurrenceType: string;
    /**
     * suppression schedule configuration
     */
    schedule?: SuppressionScheduleResponse;
}

/**
 * Action rule with suppression configuration
 */
export interface SuppressionResponse {
    /**
     * conditions on which alerts will be filtered
     */
    conditions?: ConditionsResponse;
    /**
     * Creation time of action rule. Date-Time in ISO-8601 format.
     */
    createdAt: string;
    /**
     * Created by user name.
     */
    createdBy: string;
    /**
     * Description of action rule
     */
    description?: string;
    /**
     * Last updated time of action rule. Date-Time in ISO-8601 format.
     */
    lastModifiedAt: string;
    /**
     * Last modified by user name.
     */
    lastModifiedBy: string;
    /**
     * scope on which action rule will apply
     */
    scope?: ScopeResponse;
    /**
     * Indicates if the given action rule is enabled or disabled
     */
    status?: string;
    /**
     * suppression configuration for the action rule
     */
    suppressionConfig: SuppressionConfigResponse;
    /**
     * Indicates type of action rule
     * Expected value is 'Suppression'.
     */
    type: "Suppression";
}

/**
 * Schedule for a given suppression configuration.
 */
export interface SuppressionScheduleResponse {
    /**
     * End date for suppression
     */
    endDate?: string;
    /**
     * End date for suppression
     */
    endTime?: string;
    /**
     * Specifies the values for recurrence pattern
     */
    recurrenceValues?: number[];
    /**
     * Start date for suppression
     */
    startDate?: string;
    /**
     * Start time for suppression
     */
    startTime?: string;
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
 * Optional throttling information for the alert rule.
 */
export interface ThrottlingInformationResponse {
    /**
     * The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes
     */
    duration?: string;
}

/**
 * Weekly recurrence object.
 */
export interface WeeklyRecurrenceResponse {
    /**
     * Specifies the values for weekly recurrence pattern.
     */
    daysOfWeek: string[];
    /**
     * End time for recurrence.
     */
    endTime?: string;
    /**
     * Specifies when the recurrence should be applied.
     * Expected value is 'Weekly'.
     */
    recurrenceType: "Weekly";
    /**
     * Start time for recurrence.
     */
    startTime?: string;
}




