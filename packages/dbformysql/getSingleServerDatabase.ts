import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets information about a database.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerDatabase(args: GetSingleServerDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetSingleServerDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql:getSingleServerDatabase", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerDatabaseArgs {
    /**
     * The name of the database.
     */
    databaseName: string;
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
 * Represents a Database.
 */
export interface GetSingleServerDatabaseResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The charset of the database.
     */
    readonly charset?: string;
    /**
     * The collation of the database.
     */
    readonly collation?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a database.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerDatabaseOutput(args: GetSingleServerDatabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSingleServerDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbformysql:getSingleServerDatabase", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerDatabaseOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}