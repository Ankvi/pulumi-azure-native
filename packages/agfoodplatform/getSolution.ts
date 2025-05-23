import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get installed Solution details by Solution id.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 */
export function getSolution(args: GetSolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agfoodplatform:getSolution", {
        "dataManagerForAgricultureResourceName": args.dataManagerForAgricultureResourceName,
        "resourceGroupName": args.resourceGroupName,
        "solutionId": args.solutionId,
    }, opts);
}

export interface GetSolutionArgs {
    /**
     * DataManagerForAgriculture resource name.
     */
    dataManagerForAgricultureResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * SolutionId for Data Manager For Agriculture Resource.
     */
    solutionId: string;
}

/**
 * Solution resource.
 */
export interface GetSolutionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The ETag value to implement optimistic concurrency.
     */
    readonly eTag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Solution resource properties.
     */
    readonly properties: types.outputs.SolutionPropertiesResponse;
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
 * Get installed Solution details by Solution id.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 */
export function getSolutionOutput(args: GetSolutionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:agfoodplatform:getSolution", {
        "dataManagerForAgricultureResourceName": args.dataManagerForAgricultureResourceName,
        "resourceGroupName": args.resourceGroupName,
        "solutionId": args.solutionId,
    }, opts);
}

export interface GetSolutionOutputArgs {
    /**
     * DataManagerForAgriculture resource name.
     */
    dataManagerForAgricultureResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SolutionId for Data Manager For Agriculture Resource.
     */
    solutionId: pulumi.Input<string>;
}