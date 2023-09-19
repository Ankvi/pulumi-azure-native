import * as pulumi from "@pulumi/pulumi";
    /**
     * Dto object representing feature
     */
    export interface FeatureResponse {
        /**
         * Specifies type
         */
        dataType?: string;
        /**
         * Specifies description
         */
        description?: string;
        /**
         * Specifies name
         */
        featureName?: string;
        /**
         * Specifies tags
         */
        tags?: {[key: string]: string};
    }
    /**
     * featureResponseProvideDefaults sets the appropriate defaults for FeatureResponse
     */
    export function featureResponseProvideDefaults(val: FeatureResponse): FeatureResponse {
        return {
            ...val,
            dataType: (val.dataType) ?? "String",
        };
    }
