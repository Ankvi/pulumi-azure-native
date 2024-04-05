import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Method that gets called when list of partitions is requested.
 */
export function listEnergyServicePartitions(args: ListEnergyServicePartitionsArgs, opts?: pulumi.InvokeOptions): Promise<ListEnergyServicePartitionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:openenergyplatform/v20220404preview:listEnergyServicePartitions", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListEnergyServicePartitionsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The resource name.
     */
    resourceName: string;
}

/**
 * List of data partitions.
 */
export interface ListEnergyServicePartitionsResult {
    /**
     * List of data partitions along with their properties in a given OEP resource.
     */
    readonly dataPartitionInfo?: types.outputs.DataPartitionPropertiesResponse[];
}
/**
 * Method that gets called when list of partitions is requested.
 */
export function listEnergyServicePartitionsOutput(args: ListEnergyServicePartitionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListEnergyServicePartitionsResult> {
    return pulumi.output(args).apply((a: any) => listEnergyServicePartitions(a, opts))
}

export interface ListEnergyServicePartitionsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name.
     */
    resourceName: pulumi.Input<string>;
}