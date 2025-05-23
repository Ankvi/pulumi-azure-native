import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the ispCustomer resource information using this get call
 *
 * Uses Azure REST API version 2023-05-01-preview.
 */
export function getIspCustomer(args: GetIspCustomerArgs, opts?: pulumi.InvokeOptions): Promise<GetIspCustomerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedcache:getIspCustomer", {
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIspCustomerArgs {
    /**
     * Name of the Customer resource
     */
    customerResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents the high level Nodes needed to provision isp customer resources
 */
export interface GetIspCustomerResult {
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.CustomerPropertyResponse;
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
 * Gets the ispCustomer resource information using this get call
 *
 * Uses Azure REST API version 2023-05-01-preview.
 */
export function getIspCustomerOutput(args: GetIspCustomerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIspCustomerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedcache:getIspCustomer", {
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIspCustomerOutputArgs {
    /**
     * Name of the Customer resource
     */
    customerResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}