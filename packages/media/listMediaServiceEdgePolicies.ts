import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all the media edge policies associated with the Media Services account.
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function listMediaServiceEdgePolicies(args: ListMediaServiceEdgePoliciesArgs, opts?: pulumi.InvokeOptions): Promise<ListMediaServiceEdgePoliciesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:listMediaServiceEdgePolicies", {
        "accountName": args.accountName,
        "deviceId": args.deviceId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMediaServiceEdgePoliciesArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * Unique identifier of the edge device.
     */
    deviceId?: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

export interface ListMediaServiceEdgePoliciesResult {
    readonly usageDataCollectionPolicy?: types.outputs.EdgeUsageDataCollectionPolicyResponse;
}
/**
 * List all the media edge policies associated with the Media Services account.
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function listMediaServiceEdgePoliciesOutput(args: ListMediaServiceEdgePoliciesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListMediaServiceEdgePoliciesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:listMediaServiceEdgePolicies", {
        "accountName": args.accountName,
        "deviceId": args.deviceId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMediaServiceEdgePoliciesOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Unique identifier of the edge device.
     */
    deviceId?: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}