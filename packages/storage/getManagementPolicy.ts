import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the managementpolicy associated with the specified storage account.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2018-03-01-preview, 2023-01-01.
 */
export function getManagementPolicy(args: GetManagementPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getManagementPolicy", {
        "accountName": args.accountName,
        "managementPolicyName": args.managementPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagementPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the Storage Account Management Policy. It should always be 'default'
     */
    managementPolicyName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Get Storage Account ManagementPolicies operation response.
 */
export interface GetManagementPolicyResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Returns the date and time the ManagementPolicies was last modified.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The Storage Account ManagementPolicy, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
     */
    readonly policy: types.outputs.ManagementPolicySchemaResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the managementpolicy associated with the specified storage account.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2018-03-01-preview, 2023-01-01.
 */
export function getManagementPolicyOutput(args: GetManagementPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementPolicyResult> {
    return pulumi.output(args).apply((a: any) => getManagementPolicy(a, opts))
}

export interface GetManagementPolicyOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Storage Account Management Policy. It should always be 'default'
     */
    managementPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}