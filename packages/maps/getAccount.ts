import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Maps Account.
 *
 * Uses Azure REST API version 2024-07-01-preview.
 *
 * Other available API versions: 2020-02-01-preview, 2021-02-01, 2021-07-01-preview, 2021-12-01-preview, 2023-06-01, 2023-08-01-preview, 2023-12-01-preview, 2024-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native maps [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maps:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure resource which represents access to a suite of Maps REST APIs.
 */
export interface GetAccountResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Get or Set Kind property.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The map account properties.
     */
    readonly properties: types.outputs.MapsAccountPropertiesResponse;
    /**
     * The SKU of this account.
     */
    readonly sku: types.outputs.SkuResponse;
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
 * Get a Maps Account.
 *
 * Uses Azure REST API version 2024-07-01-preview.
 *
 * Other available API versions: 2020-02-01-preview, 2021-02-01, 2021-07-01-preview, 2021-12-01-preview, 2023-06-01, 2023-08-01-preview, 2023-12-01-preview, 2024-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native maps [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:maps:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountOutputArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}