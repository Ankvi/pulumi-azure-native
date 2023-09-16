import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the object replication policy of the storage account by policy ID.
 */
export function getObjectReplicationPolicy(args: GetObjectReplicationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetObjectReplicationPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage/v20220901:getObjectReplicationPolicy", {
        "accountName": args.accountName,
        "objectReplicationPolicyId": args.objectReplicationPolicyId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetObjectReplicationPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * For the destination account, provide the value 'default'. Configure the policy on the destination account first. For the source account, provide the value of the policy ID that is returned when you download the policy that was defined on the destination account. The policy is downloaded as a JSON file.
     */
    objectReplicationPolicyId: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The replication policy between two storage accounts. Multiple rules can be defined in one policy.
 */
export interface GetObjectReplicationPolicyResult {
    /**
     * Required. Destination account name. It should be full resource id if allowCrossTenantReplication set to false.
     */
    readonly destinationAccount: string;
    /**
     * Indicates when the policy is enabled on the source account.
     */
    readonly enabledTime: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A unique id for object replication policy.
     */
    readonly policyId: string;
    /**
     * The storage account object replication rules.
     */
    readonly rules?: types.outputs.storage.v20220901.ObjectReplicationPolicyRuleResponse[];
    /**
     * Required. Source account name. It should be full resource id if allowCrossTenantReplication set to false.
     */
    readonly sourceAccount: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the object replication policy of the storage account by policy ID.
 */
export function getObjectReplicationPolicyOutput(args: GetObjectReplicationPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetObjectReplicationPolicyResult> {
    return pulumi.output(args).apply((a: any) => getObjectReplicationPolicy(a, opts))
}

export interface GetObjectReplicationPolicyOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * For the destination account, provide the value 'default'. Configure the policy on the destination account first. For the source account, provide the value of the policy ID that is returned when you download the policy that was defined on the destination account. The policy is downloaded as a JSON file.
     */
    objectReplicationPolicyId: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
