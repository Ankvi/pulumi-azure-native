import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the replica and its properties.
 */
export function getWebPubSubReplica(args: GetWebPubSubReplicaArgs, opts?: pulumi.InvokeOptions): Promise<GetWebPubSubReplicaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub/v20230801preview:getWebPubSubReplica", {
        "replicaName": args.replicaName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWebPubSubReplicaArgs {
    /**
     * The name of the replica.
     */
    replicaName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A class represent a replica resource.
 */
export interface GetWebPubSubReplicaResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Enable or disable the regional endpoint. Default to "Enabled".
     * When it's Disabled, new connections will not be routed to this endpoint, however existing connections will not be affected.
     */
    readonly regionEndpointEnabled?: string;
    /**
     * Stop or start the resource.  Default to "false".
     * When it's true, the data plane of the resource is shutdown.
     * When it's false, the data plane of the resource is started.
     */
    readonly resourceStopped?: string;
    /**
     * The billing information of the resource.
     */
    readonly sku?: types.outputs.ResourceSkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the replica and its properties.
 */
export function getWebPubSubReplicaOutput(args: GetWebPubSubReplicaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebPubSubReplicaResult> {
    return pulumi.output(args).apply((a: any) => getWebPubSubReplica(a, opts))
}

export interface GetWebPubSubReplicaOutputArgs {
    /**
     * The name of the replica.
     */
    replicaName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
