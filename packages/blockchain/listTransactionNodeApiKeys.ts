import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List the API keys for the transaction node.
 * Azure REST API version: 2018-06-01-preview.
 */
export function listTransactionNodeApiKeys(args: ListTransactionNodeApiKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListTransactionNodeApiKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blockchain:listTransactionNodeApiKeys", {
        "blockchainMemberName": args.blockchainMemberName,
        "resourceGroupName": args.resourceGroupName,
        "transactionNodeName": args.transactionNodeName,
    }, opts);
}

export interface ListTransactionNodeApiKeysArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Transaction node name.
     */
    transactionNodeName: string;
}

/**
 * Collection of the API key payload which is exposed in the response of the resource provider.
 */
export interface ListTransactionNodeApiKeysResult {
    /**
     * Gets or sets the collection of API key.
     */
    readonly keys?: types.outputs.ApiKeyResponse[];
}
/**
 * List the API keys for the transaction node.
 * Azure REST API version: 2018-06-01-preview.
 */
export function listTransactionNodeApiKeysOutput(args: ListTransactionNodeApiKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListTransactionNodeApiKeysResult> {
    return pulumi.output(args).apply((a: any) => listTransactionNodeApiKeys(a, opts))
}

export interface ListTransactionNodeApiKeysOutputArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Transaction node name.
     */
    transactionNodeName: pulumi.Input<string>;
}