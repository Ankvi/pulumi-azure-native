import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the MySQLServers resource.
 *
 * Uses Azure REST API version 2024-09-30-preview.
 */
export function getMySQLServer(args: GetMySQLServerArgs, opts?: pulumi.InvokeOptions): Promise<GetMySQLServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mysqldiscovery:getMySQLServer", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetMySQLServerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of Server
     */
    serverName: string;
    /**
     * The name of Site
     */
    siteName: string;
}

/**
 * The MySQLServer resource definition.
 */
export interface GetMySQLServerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * mysql server edition.
     */
    readonly edition?: string;
    /**
     * The list of errors.
     */
    readonly errors?: types.outputs.ErrorResponse[];
    /**
     * The Server IP/host name.
     */
    readonly hostIp?: string[];
    /**
     * The Server IP/host name.
     */
    readonly hostName: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Resource labels.
     */
    readonly labels?: {[key: string]: string};
    /**
     * discovery Machine Id
     */
    readonly machineId?: string;
    /**
     * The mysql server version.
     */
    readonly mysqlVersion?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The number of database.
     */
    readonly numberOfDatabase?: number;
    /**
     * MySQL Server port number
     */
    readonly portNumber: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState?: string;
    /**
     * Time when mysql version support end.
     */
    readonly supportEndIn?: string;
    /**
     * mysql version support status.
     */
    readonly supportStatus?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the MySQLServers resource.
 *
 * Uses Azure REST API version 2024-09-30-preview.
 */
export function getMySQLServerOutput(args: GetMySQLServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMySQLServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mysqldiscovery:getMySQLServer", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetMySQLServerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Server
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of Site
     */
    siteName: pulumi.Input<string>;
}