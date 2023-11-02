import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists the account keys for the specified Cognitive Services account.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2017-04-18, 2023-10-01-preview.
 */
export function listAccountKeys(args: ListAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:listAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAccountKeysArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The access keys for the cognitive services account.
 */
export interface ListAccountKeysResult {
    /**
     * Gets the value of key 1.
     */
    readonly key1?: string;
    /**
     * Gets the value of key 2.
     */
    readonly key2?: string;
}
/**
 * Lists the account keys for the specified Cognitive Services account.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2017-04-18, 2023-10-01-preview.
 */
export function listAccountKeysOutput(args: ListAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listAccountKeys(a, opts))
}

export interface ListAccountKeysOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
