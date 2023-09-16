import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the API keys for a blockchain member.
 * Azure REST API version: 2018-06-01-preview.
 */
export function listBlockchainMemberApiKeys(args: ListBlockchainMemberApiKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListBlockchainMemberApiKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blockchain:listBlockchainMemberApiKeys", {
        "blockchainMemberName": args.blockchainMemberName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListBlockchainMemberApiKeysArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * Collection of the API key payload which is exposed in the response of the resource provider.
 */
export interface ListBlockchainMemberApiKeysResult {
    /**
     * Gets or sets the collection of API key.
     */
    readonly keys?: types.outputs.blockchain.ApiKeyResponse[];
}
/**
 * Lists the API keys for a blockchain member.
 * Azure REST API version: 2018-06-01-preview.
 */
export function listBlockchainMemberApiKeysOutput(args: ListBlockchainMemberApiKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListBlockchainMemberApiKeysResult> {
    return pulumi.output(args).apply((a: any) => listBlockchainMemberApiKeys(a, opts))
}

export interface ListBlockchainMemberApiKeysOutputArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}
