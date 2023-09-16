import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get exposure control feature for specific factory.
 * Azure REST API version: 2018-06-01.
 */
export function getExposureControlFeatureValueByFactory(args: GetExposureControlFeatureValueByFactoryArgs, opts?: pulumi.InvokeOptions): Promise<GetExposureControlFeatureValueByFactoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getExposureControlFeatureValueByFactory", {
        "factoryName": args.factoryName,
        "featureName": args.featureName,
        "featureType": args.featureType,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExposureControlFeatureValueByFactoryArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The feature name.
     */
    featureName?: string;
    /**
     * The feature type.
     */
    featureType?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The exposure control response.
 */
export interface GetExposureControlFeatureValueByFactoryResult {
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
 * Get exposure control feature for specific factory.
 * Azure REST API version: 2018-06-01.
 */
export function getExposureControlFeatureValueByFactoryOutput(args: GetExposureControlFeatureValueByFactoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExposureControlFeatureValueByFactoryResult> {
    return pulumi.output(args).apply((a: any) => getExposureControlFeatureValueByFactory(a, opts))
}

export interface GetExposureControlFeatureValueByFactoryOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The feature name.
     */
    featureName?: pulumi.Input<string>;
    /**
     * The feature type.
     */
    featureType?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
