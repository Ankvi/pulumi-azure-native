import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the specific pipeline group instance.
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2023-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native monitor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPipelineGroup(args: GetPipelineGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getPipelineGroup", {
        "pipelineGroupName": args.pipelineGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineGroupArgs {
    /**
     * The name of pipeline group. The name is case insensitive.
     */
    pipelineGroupName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A pipeline group definition.
 */
export interface GetPipelineGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The complex type of the extended location.
     */
    readonly extendedLocation?: types.outputs.AzureResourceManagerCommonTypesExtendedLocationResponse;
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
    readonly properties: types.outputs.PipelineGroupPropertiesResponse;
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
 * Returns the specific pipeline group instance.
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2023-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native monitor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPipelineGroupOutput(args: GetPipelineGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPipelineGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getPipelineGroup", {
        "pipelineGroupName": args.pipelineGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineGroupOutputArgs {
    /**
     * The name of pipeline group. The name is case insensitive.
     */
    pipelineGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}