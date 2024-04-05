import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a Geo backup policy for the given database resource.
 */
export function getGeoBackupPolicy(args: GetGeoBackupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetGeoBackupPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230801preview:getGeoBackupPolicy", {
        "databaseName": args.databaseName,
        "geoBackupPolicyName": args.geoBackupPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetGeoBackupPolicyArgs {
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The name of the Geo backup policy. This should always be 'Default'.
     */
    geoBackupPolicyName: string;
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
 * A Geo backup policy.
 */
export interface GetGeoBackupPolicyResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Kind of geo backup policy.  This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * Backup policy location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the geo backup policy.
     */
    readonly state: string;
    /**
     * The storage type of the geo backup policy.
     */
    readonly storageType: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a Geo backup policy for the given database resource.
 */
export function getGeoBackupPolicyOutput(args: GetGeoBackupPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGeoBackupPolicyResult> {
    return pulumi.output(args).apply((a: any) => getGeoBackupPolicy(a, opts))
}

export interface GetGeoBackupPolicyOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the Geo backup policy. This should always be 'Default'.
     */
    geoBackupPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}