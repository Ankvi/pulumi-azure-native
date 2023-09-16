import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of a replication policy.
 * Azure REST API version: 2023-04-01.
 */
export function getReplicationPolicy(args: GetReplicationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getReplicationPolicy", {
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationPolicyArgs {
    /**
     * Replication policy name.
     */
    policyName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    resourceName: string;
}

/**
 * Protection profile details.
 */
export interface GetReplicationPolicyResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The custom data.
     */
    readonly properties: types.outputs.recoveryservices.PolicyPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets the details of a replication policy.
 * Azure REST API version: 2023-04-01.
 */
export function getReplicationPolicyOutput(args: GetReplicationPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationPolicyResult> {
    return pulumi.output(args).apply((a: any) => getReplicationPolicy(a, opts))
}

export interface GetReplicationPolicyOutputArgs {
    /**
     * Replication policy name.
     */
    policyName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}
