import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the IDs of all provisioned SIMs in a mobile network
 *
 * Uses Azure REST API version 2022-04-01-preview.
 */
export function listMobileNetworkSimIds(args: ListMobileNetworkSimIdsArgs, opts?: pulumi.InvokeOptions): Promise<ListMobileNetworkSimIdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork:listMobileNetworkSimIds", {
        "mobileNetworkName": args.mobileNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMobileNetworkSimIdsArgs {
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
 * Response for list SIM IDs API service call.
 */
export interface ListMobileNetworkSimIdsResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * A list of SIM IDs.
     */
    readonly value?: types.outputs.SubResourceResponse[];
}
/**
 * Lists the IDs of all provisioned SIMs in a mobile network
 *
 * Uses Azure REST API version 2022-04-01-preview.
 */
export function listMobileNetworkSimIdsOutput(args: ListMobileNetworkSimIdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListMobileNetworkSimIdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilenetwork:listMobileNetworkSimIds", {
        "mobileNetworkName": args.mobileNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMobileNetworkSimIdsOutputArgs {
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}