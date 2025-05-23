import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the object replication policy of the storage account by policy ID.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-04-01, 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storage [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getObjectReplicationPolicy(args: GetObjectReplicationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetObjectReplicationPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getObjectReplicationPolicy", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Optional. The object replication policy metrics feature options.
     */
    readonly metrics?: types.outputs.ObjectReplicationPolicyPropertiesResponseMetrics;
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
    readonly rules?: types.outputs.ObjectReplicationPolicyRuleResponse[];
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
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-04-01, 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storage [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getObjectReplicationPolicyOutput(args: GetObjectReplicationPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetObjectReplicationPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storage:getObjectReplicationPolicy", {
        "accountName": args.accountName,
        "objectReplicationPolicyId": args.objectReplicationPolicyId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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