import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Authority
 *
 * Uses Azure REST API version 2024-01-26-preview.
 */
export function getAuthority(args: GetAuthorityArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:verifiedid:getAuthority", {
        "authorityName": args.authorityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAuthorityArgs {
    /**
     * The ID of the authority
     */
    authorityName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A VerifiedId authority resource
 */
export interface GetAuthorityResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * The status of the last operation.
     */
    readonly provisioningState: string;
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
 * Get a Authority
 *
 * Uses Azure REST API version 2024-01-26-preview.
 */
export function getAuthorityOutput(args: GetAuthorityOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAuthorityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:verifiedid:getAuthority", {
        "authorityName": args.authorityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAuthorityOutputArgs {
    /**
     * The ID of the authority
     */
    authorityName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}