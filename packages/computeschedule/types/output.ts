import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Extra details needed to run the user's request
 */
export interface ExecutionParametersResponse {
    /**
     * Details that could optimize the user's request
     */
    optimizationPreference?: string;
    /**
     * Retry policy the user can pass
     */
    retryPolicy?: RetryPolicyResponse;
}

/**
 * The information about notifications to be send to about upcoming operations.
 */
export interface NotificationPropertiesResponse {
    /**
     * Where the notification should be sent. For email, it should follow email format.
     */
    destination: string;
    /**
     * Tells if the notification is enabled or not.
     */
    disabled?: boolean;
    /**
     * The language the notification should be sent on.
     */
    language: string;
    /**
     * Type of notification to be sent.
     */
    type: string;
}
/**
 * notificationPropertiesResponseProvideDefaults sets the appropriate defaults for NotificationPropertiesResponse
 */
export function notificationPropertiesResponseProvideDefaults(val: NotificationPropertiesResponse): NotificationPropertiesResponse {
    return {
        ...val,
        disabled: (val.disabled) ?? false,
    };
}

/**
 * The retry policy for the user request
 */
export interface RetryPolicyResponse {
    /**
     * Retry count for user request
     */
    retryCount?: number;
    /**
     * Retry window in minutes for user request
     */
    retryWindowInMinutes?: number;
}

/**
 * Scheduled action properties
 */
export interface ScheduledActionPropertiesResponse {
    /**
     * The action the scheduled action should perform in the resources
     */
    actionType: string;
    /**
     * Tell if the scheduled action is disabled or not
     */
    disabled?: boolean;
    /**
     * The time when the scheduled action is supposed to stop scheduling
     */
    endTime?: string;
    /**
     * The notification settings for the scheduled action
     */
    notificationSettings: NotificationPropertiesResponse[];
    /**
     * The status of the last provisioning operation performed on the resource.
     */
    provisioningState: string;
    /**
     * The type of resource the scheduled action is targeting
     */
    resourceType: string;
    /**
     * The schedule the scheduled action is supposed to follow
     */
    schedule: ScheduledActionsScheduleResponse;
    /**
     * The time which the scheduled action is supposed to start running
     */
    startTime: string;
}
/**
 * scheduledActionPropertiesResponseProvideDefaults sets the appropriate defaults for ScheduledActionPropertiesResponse
 */
export function scheduledActionPropertiesResponseProvideDefaults(val: ScheduledActionPropertiesResponse): ScheduledActionPropertiesResponse {
    return {
        ...val,
        disabled: (val.disabled) ?? false,
    };
}

/**
 * Specify the schedule in which the scheduled action is supposed to follow
 */
export interface ScheduledActionsScheduleResponse {
    /**
     * The type of deadline the scheduled action is supposed to follow for the schedule. If no value is passed, it will default to InitiateAt.
     */
    deadlineType?: string;
    /**
     * The execution parameters the scheduled action is supposed to follow
     */
    executionParameters?: ExecutionParametersResponse;
    /**
     * The days of the month the scheduled action is supposed to run on. If empty, it means it will run on every day of the month.
     */
    requestedDaysOfTheMonth: number[];
    /**
     * The months the scheduled action is supposed to run on
     */
    requestedMonths: string[];
    /**
     * The week days the scheduled action is supposed to run on
     */
    requestedWeekDays: string[];
    /**
     * The time the scheduled action is supposed to run on
     */
    scheduledTime: string;
    /**
     * The timezone the scheduled time is specified on
     */
    timeZone: string;
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
