import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Extra details needed to run the user's request
 */
export interface ExecutionParametersArgs {
    /**
     * Details that could optimize the user's request
     */
    optimizationPreference?: pulumi.Input<string | enums.OptimizationPreference>;
    /**
     * Retry policy the user can pass
     */
    retryPolicy?: pulumi.Input<RetryPolicyArgs>;
}

/**
 * The information about notifications to be send to about upcoming operations.
 */
export interface NotificationPropertiesArgs {
    /**
     * Where the notification should be sent. For email, it should follow email format.
     */
    destination: pulumi.Input<string>;
    /**
     * Tells if the notification is enabled or not.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The language the notification should be sent on.
     */
    language: pulumi.Input<string | enums.Language>;
    /**
     * Type of notification to be sent.
     */
    type: pulumi.Input<string | enums.NotificationType>;
}
/**
 * notificationPropertiesArgsProvideDefaults sets the appropriate defaults for NotificationPropertiesArgs
 */
export function notificationPropertiesArgsProvideDefaults(val: NotificationPropertiesArgs): NotificationPropertiesArgs {
    return {
        ...val,
        disabled: (val.disabled) ?? false,
    };
}

/**
 * The retry policy for the user request
 */
export interface RetryPolicyArgs {
    /**
     * Retry count for user request
     */
    retryCount?: pulumi.Input<number>;
    /**
     * Retry window in minutes for user request
     */
    retryWindowInMinutes?: pulumi.Input<number>;
}

/**
 * Scheduled action properties
 */
export interface ScheduledActionPropertiesArgs {
    /**
     * The action the scheduled action should perform in the resources
     */
    actionType: pulumi.Input<string | enums.ActionType>;
    /**
     * Tell if the scheduled action is disabled or not
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The time when the scheduled action is supposed to stop scheduling
     */
    endTime?: pulumi.Input<string>;
    /**
     * The notification settings for the scheduled action
     */
    notificationSettings: pulumi.Input<pulumi.Input<NotificationPropertiesArgs>[]>;
    /**
     * The type of resource the scheduled action is targeting
     */
    resourceType: pulumi.Input<string | enums.ResourceType>;
    /**
     * The schedule the scheduled action is supposed to follow
     */
    schedule: pulumi.Input<ScheduledActionsScheduleArgs>;
    /**
     * The time which the scheduled action is supposed to start running
     */
    startTime: pulumi.Input<string>;
}
/**
 * scheduledActionPropertiesArgsProvideDefaults sets the appropriate defaults for ScheduledActionPropertiesArgs
 */
export function scheduledActionPropertiesArgsProvideDefaults(val: ScheduledActionPropertiesArgs): ScheduledActionPropertiesArgs {
    return {
        ...val,
        disabled: (val.disabled) ?? false,
    };
}

/**
 * Specify the schedule in which the scheduled action is supposed to follow
 */
export interface ScheduledActionsScheduleArgs {
    /**
     * The type of deadline the scheduled action is supposed to follow for the schedule. If no value is passed, it will default to InitiateAt.
     */
    deadlineType?: pulumi.Input<string | enums.DeadlineType>;
    /**
     * The execution parameters the scheduled action is supposed to follow
     */
    executionParameters?: pulumi.Input<ExecutionParametersArgs>;
    /**
     * The days of the month the scheduled action is supposed to run on. If empty, it means it will run on every day of the month.
     */
    requestedDaysOfTheMonth: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The months the scheduled action is supposed to run on
     */
    requestedMonths: pulumi.Input<pulumi.Input<string | enums.Month>[]>;
    /**
     * The week days the scheduled action is supposed to run on
     */
    requestedWeekDays: pulumi.Input<pulumi.Input<string | enums.WeekDay>[]>;
    /**
     * The time the scheduled action is supposed to run on
     */
    scheduledTime: pulumi.Input<string>;
    /**
     * The timezone the scheduled time is specified on
     */
    timeZone: pulumi.Input<string>;
}
