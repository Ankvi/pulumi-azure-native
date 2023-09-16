import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the subscription-level key used for Real User Metrics collection.
 */
export function getTrafficManagerUserMetricsKey(args?: GetTrafficManagerUserMetricsKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetTrafficManagerUserMetricsKeyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20220401:getTrafficManagerUserMetricsKey", {
    }, opts);
}

export interface GetTrafficManagerUserMetricsKeyArgs {
}

/**
 * Class representing Traffic Manager User Metrics.
 */
export interface GetTrafficManagerUserMetricsKeyResult {
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
     */
    readonly id?: string;
    /**
     * The key returned by the User Metrics operation.
     */
    readonly key?: string;
    /**
     * The name of the resource
     */
    readonly name?: string;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    readonly type?: string;
}
/**
 * Get the subscription-level key used for Real User Metrics collection.
 */
export function getTrafficManagerUserMetricsKeyOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetTrafficManagerUserMetricsKeyResult> {
    return pulumi.output(getTrafficManagerUserMetricsKey(opts))
}
