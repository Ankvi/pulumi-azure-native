import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the specific pipeline group instance.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2024-10-01-preview.
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
     * The exporters specified for a pipeline group instance.
     */
    readonly exporters: types.outputs.ExporterResponse[];
    /**
     * The extended location for given pipeline group.
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
     * Networking configurations for the pipeline group instance.
     */
    readonly networkingConfigurations?: types.outputs.NetworkingConfigurationResponse[];
    /**
     * The processors specified for a pipeline group instance.
     */
    readonly processors: types.outputs.ProcessorResponse[];
    /**
     * The provisioning state of a pipeline group instance. Set to Succeeded if everything is healthy.
     */
    readonly provisioningState: string;
    /**
     * The receivers specified for a pipeline group instance.
     */
    readonly receivers: types.outputs.ReceiverResponse[];
    /**
     * Defines the amount of replicas of the pipeline group instance.
     */
    readonly replicas?: number;
    /**
     * The service section for a given pipeline group instance.
     */
    readonly service: types.outputs.ServiceResponse;
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
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2024-10-01-preview.
 */
export function getPipelineGroupOutput(args: GetPipelineGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPipelineGroupResult> {
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