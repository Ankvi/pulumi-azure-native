import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Recommendation configuration
     */
    export interface RecommendationConfigurationPropertiesArgs {
        /**
         * The recommendation type.
         */
        recommendationType: pulumi.Input<string | enums.RecommendationType>;
        /**
         * Recommendation status. The recommendation is not generated when the status is disabled
         */
        status: pulumi.Input<string | enums.RecommendationConfigStatus>;
    }
    /**
     * recommendationConfigurationPropertiesArgsProvideDefaults sets the appropriate defaults for RecommendationConfigurationPropertiesArgs
     */
    export function recommendationConfigurationPropertiesArgsProvideDefaults(val: RecommendationConfigurationPropertiesArgs): RecommendationConfigurationPropertiesArgs {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    /**
     * Properties of the solution's user defined resources.
     */
    export interface UserDefinedResourcesPropertiesArgs {
        /**
         * Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
         */
        query: pulumi.Input<string>;
        /**
         * List of Azure subscription ids on which the user defined resources query should be executed.
         */
        querySubscriptions: pulumi.Input<pulumi.Input<string>[]>;
    }
