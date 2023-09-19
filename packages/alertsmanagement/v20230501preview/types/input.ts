import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        recurrences?: pulumi.Input<pulumi.Input<DailyRecurrenceArgs | MonthlyRecurrenceArgs | WeeklyRecurrenceArgs>[]>;
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
