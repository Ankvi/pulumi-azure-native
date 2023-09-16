import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the database data masking policy.
 */
export function getDataMaskingPolicy(args: GetDataMaskingPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDataMaskingPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230201preview:getDataMaskingPolicy", {
        "dataMaskingPolicyName": args.dataMaskingPolicyName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDataMaskingPolicyArgs {
    /**
     * The name of the database for which the data masking policy applies.
     */
    dataMaskingPolicyName: string;
    /**
     * The name of the database.
     */
    databaseName: string;
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
 * A database data masking policy.
 */
export interface GetDataMaskingPolicyResult {
    /**
     * The list of the application principals. This is a legacy parameter and is no longer used.
     */
    readonly applicationPrincipals: string;
    /**
     * The state of the data masking policy.
     */
    readonly dataMaskingState: string;
    /**
     * The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries.
     */
    readonly exemptPrincipals?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The kind of Data Masking Policy. Metadata, used for Azure portal.
     */
    readonly kind: string;
    /**
     * The location of the data masking policy.
     */
    readonly location: string;
    /**
     * The masking level. This is a legacy parameter and is no longer used.
     */
    readonly maskingLevel: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the database data masking policy.
 */
export function getDataMaskingPolicyOutput(args: GetDataMaskingPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataMaskingPolicyResult> {
    return pulumi.output(args).apply((a: any) => getDataMaskingPolicy(a, opts))
}

export interface GetDataMaskingPolicyOutputArgs {
    /**
     * The name of the database for which the data masking policy applies.
     */
    dataMaskingPolicyName: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}
