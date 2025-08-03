import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Instance Resource
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getInstance(args: GetInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edge:getInstance", {
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
        "targetName": args.targetName,
    }, opts);
}

export interface GetInstanceArgs {
    /**
     * Name of the instance
     */
    instanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the solution
     */
    solutionName: string;
    /**
     * Name of the target
     */
    targetName: string;
}

/**
 * Instance Resource. Represents a deployment object.
 */
export interface GetInstanceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    readonly eTag: string;
    /**
     * The complex type of the extended location.
     */
    readonly extendedLocation?: types.outputs.AzureResourceManagerCommonTypesExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.InstancePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get Instance Resource
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getInstanceOutput(args: GetInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edge:getInstance", {
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
        "targetName": args.targetName,
    }, opts);
}

export interface GetInstanceOutputArgs {
    /**
     * Name of the instance
     */
    instanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the solution
     */
    solutionName: pulumi.Input<string>;
    /**
     * Name of the target
     */
    targetName: pulumi.Input<string>;
}