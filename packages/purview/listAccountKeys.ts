import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the authorization keys associated with this account.
 *
 * Uses Azure REST API version 2021-12-01.
 *
 * Other available API versions: 2020-12-01-preview, 2021-07-01, 2023-05-01-preview, 2024-04-01-preview.
 */
export function listAccountKeys(args: ListAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:purview:listAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAccountKeysArgs {
    /**
     * The name of the account.
     */
    accountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The Account access keys.
 */
export interface ListAccountKeysResult {
    /**
     * Gets or sets the primary connection string.
     */
    readonly atlasKafkaPrimaryEndpoint?: string;
    /**
     * Gets or sets the secondary connection string.
     */
    readonly atlasKafkaSecondaryEndpoint?: string;
}
/**
 * List the authorization keys associated with this account.
 *
 * Uses Azure REST API version 2021-12-01.
 *
 * Other available API versions: 2020-12-01-preview, 2021-07-01, 2023-05-01-preview, 2024-04-01-preview.
 */
export function listAccountKeysOutput(args: ListAccountKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAccountKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:purview:listAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAccountKeysOutputArgs {
    /**
     * The name of the account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}