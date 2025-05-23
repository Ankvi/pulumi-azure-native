import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Experiment resource.
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-04-15-preview, 2023-09-01-preview, 2023-10-27-preview, 2023-11-01, 2024-01-01, 2024-11-01-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExperiment(args: GetExperimentArgs, opts?: pulumi.InvokeOptions): Promise<GetExperimentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos:getExperiment", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The identity of the experiment resource.
     */
    readonly identity?: types.outputs.ExperimentIdentityResponse;
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
 * Get a Experiment resource.
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-04-15-preview, 2023-09-01-preview, 2023-10-27-preview, 2023-11-01, 2024-01-01, 2024-11-01-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExperimentOutput(args: GetExperimentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExperimentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:chaos:getExperiment", {
        "experimentName": args.experimentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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