import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a PostgreSQL Server key.
 */
export function getServerKey(args: GetServerKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetServerKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql/v20200214privatepreview:getServerKey", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerKeyArgs {
    /**
     * The name of the PostgreSQL Server key to be retrieved.
     */
    keyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * A PostgreSQL Server key.
 */
export interface GetServerKeyResult {
    /**
     * The key creation date.
     */
    readonly creationDate: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Kind of encryption protector used to protect the key.
     */
    readonly kind: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The key type like 'AzureKeyVault'.
     */
    readonly serverKeyType: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The URI of the key.
     */
    readonly uri?: string;
}
/**
 * Gets a PostgreSQL Server key.
 */
export function getServerKeyOutput(args: GetServerKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerKeyResult> {
    return pulumi.output(args).apply((a: any) => getServerKey(a, opts))
}

export interface GetServerKeyOutputArgs {
    /**
     * The name of the PostgreSQL Server key to be retrieved.
     */
    keyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}