import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Context Resource
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getContext(args: GetContextArgs, opts?: pulumi.InvokeOptions): Promise<GetContextResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edge:getContext", {
        "contextName": args.contextName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContextArgs {
    /**
     * The name of the Context.
     */
    contextName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Context Resource
 */
export interface GetContextResult {
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
    readonly properties: types.outputs.ContextPropertiesResponse;
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
 * Get Context Resource
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getContextOutput(args: GetContextOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContextResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edge:getContext", {
        "contextName": args.contextName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContextOutputArgs {
    /**
     * The name of the Context.
     */
    contextName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}