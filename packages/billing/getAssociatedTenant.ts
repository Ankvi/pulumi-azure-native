import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an associated tenant by ID.
 *
 * Uses Azure REST API version 2024-04-01.
 */
export function getAssociatedTenant(args: GetAssociatedTenantArgs, opts?: pulumi.InvokeOptions): Promise<GetAssociatedTenantResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:billing:getAssociatedTenant", {
        "associatedTenantName": args.associatedTenantName,
        "billingAccountName": args.billingAccountName,
    }, opts);
}

export interface GetAssociatedTenantArgs {
    /**
     * The ID that uniquely identifies a tenant.
     */
    associatedTenantName: string;
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: string;
}

/**
 * An associated tenant.
 */
export interface GetAssociatedTenantResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * An associated tenant.
     */
    readonly properties: types.outputs.AssociatedTenantPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an associated tenant by ID.
 *
 * Uses Azure REST API version 2024-04-01.
 */
export function getAssociatedTenantOutput(args: GetAssociatedTenantOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssociatedTenantResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:billing:getAssociatedTenant", {
        "associatedTenantName": args.associatedTenantName,
        "billingAccountName": args.billingAccountName,
    }, opts);
}

export interface GetAssociatedTenantOutputArgs {
    /**
     * The ID that uniquely identifies a tenant.
     */
    associatedTenantName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
}