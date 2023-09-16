import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a sync agent.
 */
export function getSyncAgent(args: GetSyncAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncAgentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230201preview:getSyncAgent", {
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
 */
export function getSyncAgentOutput(args: GetSyncAgentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSyncAgentResult> {
    return pulumi.output(args).apply((a: any) => getSyncAgent(a, opts))
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
