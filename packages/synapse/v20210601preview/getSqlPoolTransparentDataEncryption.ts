import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a SQL pool's transparent data encryption configuration.
 */
export function getSqlPoolTransparentDataEncryption(args: GetSqlPoolTransparentDataEncryptionArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlPoolTransparentDataEncryptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210601preview:getSqlPoolTransparentDataEncryption", {
        "resourceGroupName": args.resourceGroupName,
        "sqlPoolName": args.sqlPoolName,
        "transparentDataEncryptionName": args.transparentDataEncryptionName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSqlPoolTransparentDataEncryptionArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * SQL pool name
     */
    sqlPoolName: string;
    /**
     * The name of the transparent data encryption configuration.
     */
    transparentDataEncryptionName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a Sql pool transparent data encryption configuration.
 */
export interface GetSqlPoolTransparentDataEncryptionResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the database transparent data encryption.
     */
    readonly status?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a SQL pool's transparent data encryption configuration.
 */
export function getSqlPoolTransparentDataEncryptionOutput(args: GetSqlPoolTransparentDataEncryptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlPoolTransparentDataEncryptionResult> {
    return pulumi.output(args).apply((a: any) => getSqlPoolTransparentDataEncryption(a, opts))
}

export interface GetSqlPoolTransparentDataEncryptionOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SQL pool name
     */
    sqlPoolName: pulumi.Input<string>;
    /**
     * The name of the transparent data encryption configuration.
     */
    transparentDataEncryptionName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
