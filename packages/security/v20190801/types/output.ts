import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of the additional workspaces.
     */
    export interface AdditionalWorkspacesPropertiesResponse {
        /**
         * List of data types sent to workspace
         */
        dataTypes?: string[];
        /**
         * Workspace type.
         */
        type?: string;
        /**
         * Workspace resource id
         */
        workspace?: string;
    }
    /**
     * additionalWorkspacesPropertiesResponseProvideDefaults sets the appropriate defaults for AdditionalWorkspacesPropertiesResponse
     */
    export function additionalWorkspacesPropertiesResponseProvideDefaults(val: AdditionalWorkspacesPropertiesResponse): AdditionalWorkspacesPropertiesResponse {
        return {
            ...val,
            type: (val.type) ?? "Sentinel",
        };
    }

    /**
     * A custom alert rule that checks if a value (depends on the custom alert type) is allowed.
     */
    export interface AllowlistCustomAlertRuleResponse {
        /**
         * The values to allow. The format of the values depends on the rule type.
         */
        allowlistValues: string[];
        /**
         * The description of the custom alert.
         */
        description: string;
        /**
         * The display name of the custom alert.
         */
        displayName: string;
        /**
         * Status of the custom alert.
         */
        isEnabled: boolean;
        /**
         * The type of the custom alert rule.
         * Expected value is 'AllowlistCustomAlertRule'.
         */
        ruleType: "AllowlistCustomAlertRule";
        /**
         * The value type of the items in the list.
         */
        valueType: string;
    }

    /**
     * A custom alert rule that checks if a value (depends on the custom alert type) is denied.
     */
    export interface DenylistCustomAlertRuleResponse {
        /**
         * The values to deny. The format of the values depends on the rule type.
         */
        denylistValues: string[];
        /**
         * The description of the custom alert.
         */
        description: string;
        /**
         * The display name of the custom alert.
         */
        displayName: string;
        /**
         * Status of the custom alert.
         */
        isEnabled: boolean;
        /**
         * The type of the custom alert rule.
         * Expected value is 'DenylistCustomAlertRule'.
         */
        ruleType: "DenylistCustomAlertRule";
        /**
         * The value type of the items in the list.
         */
        valueType: string;
    }

    /**
     * The type of IoT Security recommendation.
     */
    export interface RecommendationConfigurationPropertiesResponse {
        name: string;
        /**
         * The type of IoT Security recommendation.
         */
        recommendationType: string;
        /**
         * Recommendation status. When the recommendation status is disabled recommendations are not generated.
         */
        status: string;
    }
    /**
     * recommendationConfigurationPropertiesResponseProvideDefaults sets the appropriate defaults for RecommendationConfigurationPropertiesResponse
     */
    export function recommendationConfigurationPropertiesResponseProvideDefaults(val: RecommendationConfigurationPropertiesResponse): RecommendationConfigurationPropertiesResponse {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
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
     * A custom alert rule that checks if a value (depends on the custom alert type) is within the given range.
     */
    export interface ThresholdCustomAlertRuleResponse {
        /**
         * The description of the custom alert.
         */
        description: string;
        /**
         * The display name of the custom alert.
         */
        displayName: string;
        /**
         * Status of the custom alert.
         */
        isEnabled: boolean;
        /**
         * The maximum threshold.
         */
        maxThreshold: number;
        /**
         * The minimum threshold.
         */
        minThreshold: number;
        /**
         * The type of the custom alert rule.
         * Expected value is 'ThresholdCustomAlertRule'.
         */
        ruleType: "ThresholdCustomAlertRule";
    }

    /**
     * A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range.
     */
    export interface TimeWindowCustomAlertRuleResponse {
        /**
         * The description of the custom alert.
         */
        description: string;
        /**
         * The display name of the custom alert.
         */
        displayName: string;
        /**
         * Status of the custom alert.
         */
        isEnabled: boolean;
        /**
         * The maximum threshold.
         */
        maxThreshold: number;
        /**
         * The minimum threshold.
         */
        minThreshold: number;
        /**
         * The type of the custom alert rule.
         * Expected value is 'TimeWindowCustomAlertRule'.
         */
        ruleType: "TimeWindowCustomAlertRule";
        /**
         * The time window size in iso8601 format.
         */
        timeWindowSize: string;
    }

    /**
     * Properties of the IoT Security solution's user defined resources.
     */
    export interface UserDefinedResourcesPropertiesResponse {
        /**
         * Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
         */
        query: string;
        /**
         * List of Azure subscription ids on which the user defined resources query should be executed.
         */
        querySubscriptions: string[];
    }
