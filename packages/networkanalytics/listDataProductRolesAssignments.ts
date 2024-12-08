import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List user roles associated with the data product.
 * Azure REST API version: 2023-11-15.
 */
export function listDataProductRolesAssignments(args: ListDataProductRolesAssignmentsArgs, opts?: pulumi.InvokeOptions): Promise<ListDataProductRolesAssignmentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkanalytics:listDataProductRolesAssignments", {
        "dataProductName": args.dataProductName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDataProductRolesAssignmentsArgs {
    /**
     * The data product resource name
     */
    dataProductName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * list role assignments.
 */
export interface ListDataProductRolesAssignmentsResult {
    /**
     * Count of role assignments.
     */
    readonly count: number;
    /**
     * list of role assignments
     */
    readonly roleAssignmentResponse: types.outputs.RoleAssignmentDetailResponse[];
}
/**
 * List user roles associated with the data product.
 * Azure REST API version: 2023-11-15.
 */
export function listDataProductRolesAssignmentsOutput(args: ListDataProductRolesAssignmentsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDataProductRolesAssignmentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkanalytics:listDataProductRolesAssignments", {
        "dataProductName": args.dataProductName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDataProductRolesAssignmentsOutputArgs {
    /**
     * The data product resource name
     */
    dataProductName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}