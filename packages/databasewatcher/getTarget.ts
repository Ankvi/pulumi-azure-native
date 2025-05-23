import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Target
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-07-19-preview, 2025-01-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databasewatcher [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTarget(args: GetTargetArgs, opts?: pulumi.InvokeOptions): Promise<GetTargetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databasewatcher:getTarget", {
        "resourceGroupName": args.resourceGroupName,
        "targetName": args.targetName,
        "watcherName": args.watcherName,
    }, opts);
}

export interface GetTargetArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The target resource name.
     */
    targetName: string;
    /**
     * The database watcher name.
     */
    watcherName: string;
}

/**
 * Concrete proxy resource types can be created by aliasing this type using a specific property type.
 */
export interface GetTargetResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    readonly connectionServerName: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of authentication to use when connecting to a target.
     */
    readonly targetAuthenticationType: string;
    /**
     * Discriminator property for TargetProperties.
     */
    readonly targetType: string;
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    readonly targetVault?: types.outputs.VaultSecretResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Target
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-07-19-preview, 2025-01-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databasewatcher [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTargetOutput(args: GetTargetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTargetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databasewatcher:getTarget", {
        "resourceGroupName": args.resourceGroupName,
        "targetName": args.targetName,
        "watcherName": args.watcherName,
    }, opts);
}

export interface GetTargetOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The target resource name.
     */
    targetName: pulumi.Input<string>;
    /**
     * The database watcher name.
     */
    watcherName: pulumi.Input<string>;
}