import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a trusted Signing Account.
 *
 * Uses Azure REST API version 2024-02-05-preview.
 *
 * Other available API versions: 2024-09-30-preview.
 */
export function getCodeSigningAccount(args: GetCodeSigningAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetCodeSigningAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:codesigning:getCodeSigningAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCodeSigningAccountArgs {
    /**
     * Trusted Signing account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Trusted signing account resource.
 */
export interface GetCodeSigningAccountResult {
    /**
     * The URI of the trusted signing account which is used during signing files.
     */
    readonly accountUri: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Status of the current operation on trusted signing account.
     */
    readonly provisioningState: string;
    /**
     * SKU of the trusted signing account.
     */
    readonly sku?: types.outputs.AccountSkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a trusted Signing Account.
 *
 * Uses Azure REST API version 2024-02-05-preview.
 *
 * Other available API versions: 2024-09-30-preview.
 */
export function getCodeSigningAccountOutput(args: GetCodeSigningAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCodeSigningAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:codesigning:getCodeSigningAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCodeSigningAccountOutputArgs {
    /**
     * Trusted Signing account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}