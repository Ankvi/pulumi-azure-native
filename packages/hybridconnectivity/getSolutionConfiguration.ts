import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SolutionConfiguration
 * Azure REST API version: 2024-12-01.
 */
export function getSolutionConfiguration(args: GetSolutionConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetSolutionConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridconnectivity:getSolutionConfiguration", {
        "resourceUri": args.resourceUri,
        "solutionConfiguration": args.solutionConfiguration,
    }, opts);
}

export interface GetSolutionConfigurationArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
    /**
     * Represent Solution Configuration Resource.
     */
    solutionConfiguration: string;
}

/**
 * Solution Configuration
 */
export interface GetSolutionConfigurationResult {
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
    readonly properties: types.outputs.SolutionConfigurationPropertiesResponse;
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
 * Get a SolutionConfiguration
 * Azure REST API version: 2024-12-01.
 */
export function getSolutionConfigurationOutput(args: GetSolutionConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSolutionConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridconnectivity:getSolutionConfiguration", {
        "resourceUri": args.resourceUri,
        "solutionConfiguration": args.solutionConfiguration,
    }, opts);
}

export interface GetSolutionConfigurationOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * Represent Solution Configuration Resource.
     */
    solutionConfiguration: pulumi.Input<string>;
}