import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a EdgeDeviceJob
 *
 * Uses Azure REST API version 2024-12-01-preview.
 */
export function getHciEdgeDeviceJob(args: GetHciEdgeDeviceJobArgs, opts?: pulumi.InvokeOptions): Promise<GetHciEdgeDeviceJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getHciEdgeDeviceJob", {
        "edgeDeviceName": args.edgeDeviceName,
        "jobsName": args.jobsName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetHciEdgeDeviceJobArgs {
    /**
     * The name of the EdgeDevice
     */
    edgeDeviceName: string;
    /**
     * Name of EdgeDevice Job
     */
    jobsName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * Edge device job for Azure Stack HCI solution.
 */
export interface GetHciEdgeDeviceJobResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Edge device kind.
     * Expected value is 'HCI'.
     */
    readonly kind: "HCI";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * HCI Edge device job properties
     */
    readonly properties: types.outputs.HciCollectLogJobPropertiesResponse | types.outputs.HciRemoteSupportJobPropertiesResponse;
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
 * Get a EdgeDeviceJob
 *
 * Uses Azure REST API version 2024-12-01-preview.
 */
export function getHciEdgeDeviceJobOutput(args: GetHciEdgeDeviceJobOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHciEdgeDeviceJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getHciEdgeDeviceJob", {
        "edgeDeviceName": args.edgeDeviceName,
        "jobsName": args.jobsName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetHciEdgeDeviceJobOutputArgs {
    /**
     * The name of the EdgeDevice
     */
    edgeDeviceName: pulumi.Input<string>;
    /**
     * Name of EdgeDevice Job
     */
    jobsName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}