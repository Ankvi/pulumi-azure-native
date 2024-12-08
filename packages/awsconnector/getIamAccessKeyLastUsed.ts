import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a IamAccessKeyLastUsed
 * Azure REST API version: 2024-12-01.
 */
export function getIamAccessKeyLastUsed(args: GetIamAccessKeyLastUsedArgs, opts?: pulumi.InvokeOptions): Promise<GetIamAccessKeyLastUsedResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getIamAccessKeyLastUsed", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIamAccessKeyLastUsedArgs {
    /**
     * Name of IamAccessKeyLastUsed
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Microsoft.AwsConnector resource
 */
export interface GetIamAccessKeyLastUsedResult {
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
    readonly properties: types.outputs.IamAccessKeyLastUsedPropertiesResponse;
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
 * Get a IamAccessKeyLastUsed
 * Azure REST API version: 2024-12-01.
 */
export function getIamAccessKeyLastUsedOutput(args: GetIamAccessKeyLastUsedOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIamAccessKeyLastUsedResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getIamAccessKeyLastUsed", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIamAccessKeyLastUsedOutputArgs {
    /**
     * Name of IamAccessKeyLastUsed
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}