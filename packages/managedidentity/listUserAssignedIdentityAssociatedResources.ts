import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the associated resources for this identity.
 *
 * Uses Azure REST API version 2022-01-31-preview.
 */
export function listUserAssignedIdentityAssociatedResources(args: ListUserAssignedIdentityAssociatedResourcesArgs, opts?: pulumi.InvokeOptions): Promise<ListUserAssignedIdentityAssociatedResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managedidentity:listUserAssignedIdentityAssociatedResources", {
        "filter": args.filter,
        "orderby": args.orderby,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "skip": args.skip,
        "skiptoken": args.skiptoken,
        "top": args.top,
    }, opts);
}

export interface ListUserAssignedIdentityAssociatedResourcesArgs {
    /**
     * OData filter expression to apply to the query.
     */
    filter?: string;
    /**
     * OData orderBy expression to apply to the query.
     */
    orderby?: string;
    /**
     * The name of the Resource Group to which the identity belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the identity resource.
     */
    resourceName: string;
    /**
     * Number of records to skip.
     */
    skip?: number;
    /**
     * A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
     */
    skiptoken?: string;
    /**
     * Number of records to return.
     */
    top?: number;
}

/**
 * Azure resources returned by the resource action to get a list of assigned resources.
 */
export interface ListUserAssignedIdentityAssociatedResourcesResult {
    /**
     * The url to get the next page of results, if any.
     */
    readonly nextLink: string;
    /**
     * Total number of Azure resources assigned to the identity.
     */
    readonly totalCount: number;
    /**
     * The collection of Azure resources returned by the resource action to get a list of assigned resources.
     */
    readonly value: types.outputs.AzureResourceResponse[];
}
/**
 * Lists the associated resources for this identity.
 *
 * Uses Azure REST API version 2022-01-31-preview.
 */
export function listUserAssignedIdentityAssociatedResourcesOutput(args: ListUserAssignedIdentityAssociatedResourcesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListUserAssignedIdentityAssociatedResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managedidentity:listUserAssignedIdentityAssociatedResources", {
        "filter": args.filter,
        "orderby": args.orderby,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "skip": args.skip,
        "skiptoken": args.skiptoken,
        "top": args.top,
    }, opts);
}

export interface ListUserAssignedIdentityAssociatedResourcesOutputArgs {
    /**
     * OData filter expression to apply to the query.
     */
    filter?: pulumi.Input<string>;
    /**
     * OData orderBy expression to apply to the query.
     */
    orderby?: pulumi.Input<string>;
    /**
     * The name of the Resource Group to which the identity belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the identity resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Number of records to skip.
     */
    skip?: pulumi.Input<number>;
    /**
     * A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
     */
    skiptoken?: pulumi.Input<string>;
    /**
     * Number of records to return.
     */
    top?: pulumi.Input<number>;
}