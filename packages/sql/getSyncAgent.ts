import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a sync agent.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2015-05-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSyncAgent(args: GetSyncAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getSyncAgent", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "syncAgentName": args.syncAgentName,
    }, opts);
}

export interface GetSyncAgentArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server on which the sync agent is hosted.
     */
    serverName: string;
    /**
     * The name of the sync agent.
     */
    syncAgentName: string;
}

/**
 * An Azure SQL Database sync agent.
 */
export interface GetSyncAgentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Expiration time of the sync agent version.
     */
    readonly expiryTime: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * If the sync agent version is up to date.
     */
    readonly isUpToDate: boolean;
    /**
     * Last alive time of the sync agent.
     */
    readonly lastAliveTime: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * State of the sync agent.
     */
    readonly state: string;
    /**
     * ARM resource id of the sync database in the sync agent.
     */
    readonly syncDatabaseId?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Version of the sync agent.
     */
    readonly version: string;
}
/**
 * Gets a sync agent.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2015-05-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSyncAgentOutput(args: GetSyncAgentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSyncAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getSyncAgent", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "syncAgentName": args.syncAgentName,
    }, opts);
}

export interface GetSyncAgentOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server on which the sync agent is hosted.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the sync agent.
     */
    syncAgentName: pulumi.Input<string>;
}