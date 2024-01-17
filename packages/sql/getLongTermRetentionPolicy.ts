import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a database's long term retention policy.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview.
 */
export function getLongTermRetentionPolicy(args: GetLongTermRetentionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetLongTermRetentionPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getLongTermRetentionPolicy", {
        "databaseName": args.databaseName,
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetLongTermRetentionPolicyArgs {
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The policy name. Should always be Default.
     */
    policyName: string;
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
 * A long term retention policy.
 */
export interface GetLongTermRetentionPolicyResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The monthly retention policy for an LTR backup in an ISO 8601 format.
     */
    readonly monthlyRetention?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The week of year to take the yearly backup in an ISO 8601 format.
     */
    readonly weekOfYear?: number;
    /**
     * The weekly retention policy for an LTR backup in an ISO 8601 format.
     */
    readonly weeklyRetention?: string;
    /**
     * The yearly retention policy for an LTR backup in an ISO 8601 format.
     */
    readonly yearlyRetention?: string;
}
/**
 * Gets a database's long term retention policy.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview.
 */
export function getLongTermRetentionPolicyOutput(args: GetLongTermRetentionPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLongTermRetentionPolicyResult> {
    return pulumi.output(args).apply((a: any) => getLongTermRetentionPolicy(a, opts))
}

export interface GetLongTermRetentionPolicyOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The policy name. Should always be Default.
     */
    policyName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}