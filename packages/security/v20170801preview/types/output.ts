import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Recommendation configuration
     */
    export interface RecommendationConfigurationPropertiesResponse {
        name: string;
        /**
         * The recommendation type.
         */
        recommendationType: string;
        /**
         * Recommendation status. The recommendation is not generated when the status is disabled
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
     * Properties of the solution's user defined resources.
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
