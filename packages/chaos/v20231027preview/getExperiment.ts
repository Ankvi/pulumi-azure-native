import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Experiment resource.
 */
export function getExperiment(args: GetExperimentArgs, opts?: pulumi.InvokeOptions): Promise<GetExperimentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos/v20231027preview:getExperiment", {
        "experimentName": args.experimentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExperimentArgs {
    /**
     * String that represents a Experiment resource name.
     */
    experimentName: string;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * Model that represents a Experiment resource.
 */
export interface GetExperimentResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the experiment resource.
     */
    readonly identity?: types.outputs.ResourceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of the experiment resource.
     */
    readonly properties: types.outputs.ExperimentPropertiesResponse;
    /**
     * The system metadata of the experiment resource.
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
 * Get a Experiment resource.
 */
export function getExperimentOutput(args: GetExperimentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExperimentResult> {
    return pulumi.output(args).apply((a: any) => getExperiment(a, opts))
}

export interface GetExperimentOutputArgs {
    /**
     * String that represents a Experiment resource name.
     */
    experimentName: pulumi.Input<string>;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
