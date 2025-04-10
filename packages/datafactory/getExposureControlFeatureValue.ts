import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get exposure control feature for specific location.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getExposureControlFeatureValue(args: GetExposureControlFeatureValueArgs, opts?: pulumi.InvokeOptions): Promise<GetExposureControlFeatureValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getExposureControlFeatureValue", {
        "featureName": args.featureName,
        "featureType": args.featureType,
        "locationId": args.locationId,
    }, opts);
}

export interface GetExposureControlFeatureValueArgs {
    /**
     * The feature name.
     */
    featureName?: string;
    /**
     * The feature type.
     */
    featureType?: string;
    /**
     * The location identifier.
     */
    locationId: string;
}

/**
 * The exposure control response.
 */
export interface GetExposureControlFeatureValueResult {
    /**
     * The feature name.
     */
    readonly featureName: string;
    /**
     * The feature value.
     */
    readonly value: string;
}
/**
 * Get exposure control feature for specific location.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getExposureControlFeatureValueOutput(args: GetExposureControlFeatureValueOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExposureControlFeatureValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getExposureControlFeatureValue", {
        "featureName": args.featureName,
        "featureType": args.featureType,
        "locationId": args.locationId,
    }, opts);
}

export interface GetExposureControlFeatureValueOutputArgs {
    /**
     * The feature name.
     */
    featureName?: pulumi.Input<string>;
    /**
     * The feature type.
     */
    featureType?: pulumi.Input<string>;
    /**
     * The location identifier.
     */
    locationId: pulumi.Input<string>;
}