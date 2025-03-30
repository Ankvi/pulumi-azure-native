import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Employee
 *
 * Uses Azure REST API version 2021-10-01-preview.
 *
 * Other available API versions: 2021-11-01.
 */
export function getEmployee(args: GetEmployeeArgs, opts?: pulumi.InvokeOptions): Promise<GetEmployeeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:contoso:getEmployee", {
        "employeeName": args.employeeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEmployeeArgs {
    /**
     * The name of the Employee
     */
    employeeName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Employee resource
 */
export interface GetEmployeeResult {
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
    readonly properties: types.outputs.EmployeePropertiesResponse;
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
 * Get a Employee
 *
 * Uses Azure REST API version 2021-10-01-preview.
 *
 * Other available API versions: 2021-11-01.
 */
export function getEmployeeOutput(args: GetEmployeeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEmployeeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:contoso:getEmployee", {
        "employeeName": args.employeeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEmployeeOutputArgs {
    /**
     * The name of the Employee
     */
    employeeName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}