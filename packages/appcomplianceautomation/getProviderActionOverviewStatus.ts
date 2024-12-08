import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the resource overview status.
 * Azure REST API version: 2024-06-27.
 */
export function getProviderActionOverviewStatus(args?: GetProviderActionOverviewStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetProviderActionOverviewStatusResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appcomplianceautomation:getProviderActionOverviewStatus", {
        "type": args.type,
    }, opts);
}

export interface GetProviderActionOverviewStatusArgs {
    /**
     * The resource type.
     */
    type?: string;
}

/**
 * The get overview status response.
 */
export interface GetProviderActionOverviewStatusResult {
    /**
     * List of different status items.
     */
    readonly statusList?: types.outputs.StatusItemResponse[];
}
/**
 * Get the resource overview status.
 * Azure REST API version: 2024-06-27.
 */
export function getProviderActionOverviewStatusOutput(args?: GetProviderActionOverviewStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProviderActionOverviewStatusResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appcomplianceautomation:getProviderActionOverviewStatus", {
        "type": args.type,
    }, opts);
}

export interface GetProviderActionOverviewStatusOutputArgs {
    /**
     * The resource type.
     */
    type?: pulumi.Input<string>;
}