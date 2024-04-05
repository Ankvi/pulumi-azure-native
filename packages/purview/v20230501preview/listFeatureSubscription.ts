import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets details from a list of feature names.
 */
export function listFeatureSubscription(args: ListFeatureSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<ListFeatureSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:purview/v20230501preview:listFeatureSubscription", {
        "features": args.features,
        "locations": args.locations,
    }, opts);
}

export interface ListFeatureSubscriptionArgs {
    /**
     * Set of features
     */
    features?: string[];
    /**
     * Location of feature.
     */
    locations: string;
}

/**
 * List of features with enabled status
 */
export interface ListFeatureSubscriptionResult {
    /**
     * Features with enabled status
     */
    readonly features: {[key: string]: boolean};
}
/**
 * Gets details from a list of feature names.
 */
export function listFeatureSubscriptionOutput(args: ListFeatureSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListFeatureSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => listFeatureSubscription(a, opts))
}

export interface ListFeatureSubscriptionOutputArgs {
    /**
     * Set of features
     */
    features?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Location of feature.
     */
    locations: pulumi.Input<string>;
}