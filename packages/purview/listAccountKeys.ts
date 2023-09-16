import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the authorization keys associated with this account.
 * Azure REST API version: 2021-12-01.
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
 * Azure REST API version: 2021-12-01.
 */
export function listAccountKeysOutput(args: ListAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listAccountKeys(a, opts))
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
