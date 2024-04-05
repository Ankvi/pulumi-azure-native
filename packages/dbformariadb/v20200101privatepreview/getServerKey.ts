import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a MariaDB Server key.
 */
export function getServerKey(args: GetServerKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetServerKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformariadb/v20200101privatepreview:getServerKey", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerKeyArgs {
    /**
     * The name of the MariaDB Server key to be retrieved.
     */
    keyName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * A MariaDB Server key.
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
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The key type like  'AzureKeyVault'.
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
 * Gets a MariaDB Server key.
 */
export function getServerKeyOutput(args: GetServerKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerKeyResult> {
    return pulumi.output(args).apply((a: any) => getServerKey(a, opts))
}

export interface GetServerKeyOutputArgs {
    /**
     * The name of the MariaDB Server key to be retrieved.
     */
    keyName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}