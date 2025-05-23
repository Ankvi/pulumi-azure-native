import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves an existing Power BI Workspace Collection.
 *
 * Uses Azure REST API version 2016-01-29.
 */
export function getWorkspaceCollection(args: GetWorkspaceCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:powerbi:getWorkspaceCollection", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceCollectionName": args.workspaceCollectionName,
    }, opts);
}

export interface GetWorkspaceCollectionArgs {
    /**
     * Azure resource group
     */
    resourceGroupName: string;
    /**
     * Power BI Embedded Workspace Collection name
     */
    workspaceCollectionName: string;
}

export interface GetWorkspaceCollectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource id
     */
    readonly id?: string;
    /**
     * Azure location
     */
    readonly location?: string;
    /**
     * Workspace collection name
     */
    readonly name?: string;
    /**
     * Properties
     */
    readonly properties: any;
    readonly sku?: types.outputs.AzureSkuResponse;
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type?: string;
}
/**
 * Retrieves an existing Power BI Workspace Collection.
 *
 * Uses Azure REST API version 2016-01-29.
 */
export function getWorkspaceCollectionOutput(args: GetWorkspaceCollectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:powerbi:getWorkspaceCollection", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceCollectionName": args.workspaceCollectionName,
    }, opts);
}

export interface GetWorkspaceCollectionOutputArgs {
    /**
     * Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Power BI Embedded Workspace Collection name
     */
    workspaceCollectionName: pulumi.Input<string>;
}