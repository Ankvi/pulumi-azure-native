import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves Migration Config
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMigrationConfig(args: GetMigrationConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrationConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus:getMigrationConfig", {
        "configName": args.configName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMigrationConfigArgs {
    /**
     * The configuration name. Should always be "$default".
     */
    configName: string;
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Single item in List or Get Migration Config operation
 */
export interface GetMigrationConfigResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
     */
    readonly migrationState: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Number of entities pending to be replicated.
     */
    readonly pendingReplicationOperationsCount: number;
    /**
     * Name to access Standard Namespace after migration
     */
    readonly postMigrationName: string;
    /**
     * Provisioning state of Migration Configuration 
     */
    readonly provisioningState: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Existing premium Namespace ARM Id name which has no entities, will be used for migration
     */
    readonly targetNamespace: string;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
}
/**
 * Retrieves Migration Config
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMigrationConfigOutput(args: GetMigrationConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMigrationConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicebus:getMigrationConfig", {
        "configName": args.configName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMigrationConfigOutputArgs {
    /**
     * The configuration name. Should always be "$default".
     */
    configName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}