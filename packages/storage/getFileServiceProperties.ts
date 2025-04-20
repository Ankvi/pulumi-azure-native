import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-04-01, 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storage [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileServiceProperties(args: GetFileServicePropertiesArgs, opts?: pulumi.InvokeOptions): Promise<GetFileServicePropertiesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getFileServiceProperties", {
        "accountName": args.accountName,
        "fileServicesName": args.fileServicesName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFileServicePropertiesArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the file Service within the specified storage account. File Service Name must be "default"
     */
    fileServicesName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The properties of File services in storage account.
 */
export interface GetFileServicePropertiesResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Specifies CORS rules for the File service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the File service.
     */
    readonly cors?: types.outputs.CorsRulesResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Protocol settings for file service
     */
    readonly protocolSettings?: types.outputs.ProtocolSettingsResponse;
    /**
     * The file service properties for share soft delete.
     */
    readonly shareDeleteRetentionPolicy?: types.outputs.DeleteRetentionPolicyResponse;
    /**
     * Sku name and tier.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-04-01, 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storage [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileServicePropertiesOutput(args: GetFileServicePropertiesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFileServicePropertiesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storage:getFileServiceProperties", {
        "accountName": args.accountName,
        "fileServicesName": args.fileServicesName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFileServicePropertiesOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the file Service within the specified storage account. File Service Name must be "default"
     */
    fileServicesName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}