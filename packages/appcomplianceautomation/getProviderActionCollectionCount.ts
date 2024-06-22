import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the count of reports.
 * Azure REST API version: 2024-06-27.
 */
export function getProviderActionCollectionCount(args?: GetProviderActionCollectionCountArgs, opts?: pulumi.InvokeOptions): Promise<GetProviderActionCollectionCountResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appcomplianceautomation:getProviderActionCollectionCount", {
        "type": args.type,
    }, opts);
}

export interface GetProviderActionCollectionCountArgs {
    /**
     * The resource type.
     */
    type?: string;
}

/**
 * The get collection count response.
 */
export interface GetProviderActionCollectionCountResult {
    /**
     * The count of the specified resource.
     */
    readonly count?: number;
}
/**
 * Get the count of reports.
 * Azure REST API version: 2024-06-27.
 */
export function getProviderActionCollectionCountOutput(args?: GetProviderActionCollectionCountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProviderActionCollectionCountResult> {
    return pulumi.output(args).apply((a: any) => getProviderActionCollectionCount(a, opts))
}

export interface GetProviderActionCollectionCountOutputArgs {
    /**
     * The resource type.
     */
    type?: pulumi.Input<string>;
}