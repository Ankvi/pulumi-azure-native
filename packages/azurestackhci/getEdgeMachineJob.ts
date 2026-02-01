import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a EdgeMachineJob
 *
 * Uses Azure REST API version 2025-12-01-preview.
 */
export function getEdgeMachineJob(args: GetEdgeMachineJobArgs, opts?: pulumi.InvokeOptions): Promise<GetEdgeMachineJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getEdgeMachineJob", {
        "edgeMachineName": args.edgeMachineName,
        "jobsName": args.jobsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEdgeMachineJobArgs {
    /**
     * Name of Device
     */
    edgeMachineName: string;
    /**
     * Name of EdgeMachineJob
     */
    jobsName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cluster Jobs resource
 */
export interface GetEdgeMachineJobResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly properties: types.outputs.DownloadOsJobPropertiesResponse | types.outputs.EdgeMachineCollectLogJobPropertiesResponse | types.outputs.EdgeMachineRemoteSupportJobPropertiesResponse | types.outputs.ProvisionOsJobPropertiesResponse;
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
 * Get a EdgeMachineJob
 *
 * Uses Azure REST API version 2025-12-01-preview.
 */
export function getEdgeMachineJobOutput(args: GetEdgeMachineJobOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEdgeMachineJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getEdgeMachineJob", {
        "edgeMachineName": args.edgeMachineName,
        "jobsName": args.jobsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEdgeMachineJobOutputArgs {
    /**
     * Name of Device
     */
    edgeMachineName: pulumi.Input<string>;
    /**
     * Name of EdgeMachineJob
     */
    jobsName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}