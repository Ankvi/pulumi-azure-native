import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
