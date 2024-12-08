import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a replication link.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2024-05-01-preview.
 */
export function getReplicationLink(args: GetReplicationLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getReplicationLink", {
        "databaseName": args.databaseName,
        "linkId": args.linkId,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetReplicationLinkArgs {
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The name of the replication link.
     */
    linkId: string;
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
 * A replication link.
 */
export interface GetReplicationLinkResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Whether the user is currently allowed to terminate the link.
     */
    readonly isTerminationAllowed: boolean;
    /**
     * Link type (GEO, NAMED, STANDBY). Update operation does not support NAMED.
     */
    readonly linkType?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource partner database.
     */
    readonly partnerDatabase: string;
    /**
     * Resource partner database Id.
     */
    readonly partnerDatabaseId: string;
    /**
     * Resource partner location.
     */
    readonly partnerLocation: string;
    /**
     * Partner replication role.
     */
    readonly partnerRole: string;
    /**
     * Resource partner server.
     */
    readonly partnerServer: string;
    /**
     * Seeding completion percentage for the link.
     */
    readonly percentComplete: number;
    /**
     * Replication mode.
     */
    readonly replicationMode: string;
    /**
     * Replication state (PENDING, SEEDING, CATCHUP, SUSPENDED).
     */
    readonly replicationState: string;
    /**
     * Local replication role.
     */
    readonly role: string;
    /**
     * Time at which the link was created.
     */
    readonly startTime: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a replication link.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2024-05-01-preview.
 */
export function getReplicationLinkOutput(args: GetReplicationLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetReplicationLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getReplicationLink", {
        "databaseName": args.databaseName,
        "linkId": args.linkId,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetReplicationLinkOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the replication link.
     */
    linkId: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}