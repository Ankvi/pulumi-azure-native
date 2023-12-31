import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get installed Solution details by Solution id.
 */
export function getSolution(args: GetSolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetSolutionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agfoodplatform/v20210901preview:getSolution", {
        "farmBeatsResourceName": args.farmBeatsResourceName,
        "resourceGroupName": args.resourceGroupName,
        "solutionId": args.solutionId,
    }, opts);
}

export interface GetSolutionArgs {
    /**
     * FarmBeats resource name.
     */
    farmBeatsResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Solution Id of the solution.
     */
    solutionId: string;
}

/**
 * Solution resource.
 */
export interface GetSolutionResult {
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
 */
export function getSolutionOutput(args: GetSolutionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSolutionResult> {
    return pulumi.output(args).apply((a: any) => getSolution(a, opts))
}

export interface GetSolutionOutputArgs {
    /**
     * FarmBeats resource name.
     */
    farmBeatsResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Solution Id of the solution.
     */
    solutionId: pulumi.Input<string>;
}
