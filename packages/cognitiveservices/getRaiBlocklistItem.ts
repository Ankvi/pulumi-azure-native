import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified custom blocklist Item associated with the custom blocklist.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2024-04-01-preview, 2024-06-01-preview.
 */
export function getRaiBlocklistItem(args: GetRaiBlocklistItemArgs, opts?: pulumi.InvokeOptions): Promise<GetRaiBlocklistItemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getRaiBlocklistItem", {
        "accountName": args.accountName,
        "raiBlocklistItemName": args.raiBlocklistItemName,
        "raiBlocklistName": args.raiBlocklistName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRaiBlocklistItemArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * The name of the RaiBlocklist Item associated with the custom blocklist
     */
    raiBlocklistItemName: string;
    /**
     * The name of the RaiBlocklist associated with the Cognitive Services Account
     */
    raiBlocklistName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cognitive Services RaiBlocklist Item.
 */
export interface GetRaiBlocklistItemResult {
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of Cognitive Services RaiBlocklist Item.
     */
    readonly properties: types.outputs.RaiBlocklistItemPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Gets the specified custom blocklist Item associated with the custom blocklist.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2024-04-01-preview, 2024-06-01-preview.
 */
export function getRaiBlocklistItemOutput(args: GetRaiBlocklistItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRaiBlocklistItemResult> {
    return pulumi.output(args).apply((a: any) => getRaiBlocklistItem(a, opts))
}

export interface GetRaiBlocklistItemOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the RaiBlocklist Item associated with the custom blocklist
     */
    raiBlocklistItemName: pulumi.Input<string>;
    /**
     * The name of the RaiBlocklist associated with the Cognitive Services Account
     */
    raiBlocklistName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}