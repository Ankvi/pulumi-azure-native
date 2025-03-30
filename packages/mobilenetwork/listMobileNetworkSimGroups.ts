import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets all the SIM groups assigned to a mobile network.
 *
 * Uses Azure REST API version 2024-04-01.
 */
export function listMobileNetworkSimGroups(args: ListMobileNetworkSimGroupsArgs, opts?: pulumi.InvokeOptions): Promise<ListMobileNetworkSimGroupsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork:listMobileNetworkSimGroups", {
        "mobileNetworkName": args.mobileNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMobileNetworkSimGroupsArgs {
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for list SIM groups API service call.
 */
export interface ListMobileNetworkSimGroupsResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * A list of SIM groups in a resource group.
     */
    readonly value?: types.outputs.SimGroupResponse[];
}
/**
 * Gets all the SIM groups assigned to a mobile network.
 *
 * Uses Azure REST API version 2024-04-01.
 */
export function listMobileNetworkSimGroupsOutput(args: ListMobileNetworkSimGroupsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListMobileNetworkSimGroupsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilenetwork:listMobileNetworkSimGroups", {
        "mobileNetworkName": args.mobileNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMobileNetworkSimGroupsOutputArgs {
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}