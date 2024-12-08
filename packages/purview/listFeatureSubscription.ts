import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets details from a list of feature names.
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2023-05-01-preview, 2024-04-01-preview.
 */
export function listFeatureSubscription(args: ListFeatureSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<ListFeatureSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:purview:listFeatureSubscription", {
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
    readonly features?: {[key: string]: boolean};
}
/**
 * Gets details from a list of feature names.
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2023-05-01-preview, 2024-04-01-preview.
 */
export function listFeatureSubscriptionOutput(args: ListFeatureSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListFeatureSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:purview:listFeatureSubscription", {
        "features": args.features,
        "locations": args.locations,
    }, opts);
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