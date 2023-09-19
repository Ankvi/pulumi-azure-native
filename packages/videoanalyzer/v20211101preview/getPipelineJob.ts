import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a specific pipeline job by name. If a pipeline job with that name has been previously created, the call will return the JSON representation of that instance.
 */
export function getPipelineJob(args: GetPipelineJobArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineJobResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer/v20211101preview:getPipelineJob", {
        "accountName": args.accountName,
        "pipelineJobName": args.pipelineJobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineJobArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: string;
    /**
     * The pipeline job name.
     */
    pipelineJobName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Pipeline job represents a unique instance of a batch topology, used for offline processing of selected portions of archived content.
 */
export interface GetPipelineJobResult {
    /**
     * An optional description for the pipeline.
     */
    readonly description?: string;
    /**
     * Details about the error, in case the pipeline job fails.
     */
    readonly error: types.outputs.PipelineJobErrorResponse;
    /**
     * The date-time by when this pipeline job will be automatically deleted from your account.
     */
    readonly expiration: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden.
     */
    readonly parameters?: types.outputs.ParameterDefinitionResponse[];
    /**
     * Current state of the pipeline (read-only).
     */
    readonly state: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Reference to an existing pipeline topology. When activated, this pipeline job will process content according to the pipeline topology definition.
     */
    readonly topologyName: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves a specific pipeline job by name. If a pipeline job with that name has been previously created, the call will return the JSON representation of that instance.
 */
export function getPipelineJobOutput(args: GetPipelineJobOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPipelineJobResult> {
    return pulumi.output(args).apply((a: any) => getPipelineJob(a, opts))
}

export interface GetPipelineJobOutputArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The pipeline job name.
     */
    pipelineJobName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
