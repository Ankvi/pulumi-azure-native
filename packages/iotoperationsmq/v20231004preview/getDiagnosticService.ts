import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DiagnosticServiceResource
 */
export function getDiagnosticService(args: GetDiagnosticServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetDiagnosticServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq/v20231004preview:getDiagnosticService", {
        "diagnosticServiceName": args.diagnosticServiceName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiagnosticServiceArgs {
    /**
     * Name of MQ diagnostic resource
     */
    diagnosticServiceName: string;
    /**
     * Name of MQ resource
     */
    mqName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * MQ diagnostic services resource
 */
export interface GetDiagnosticServiceResult {
    /**
     * The frequency at which the data will be exported.
     */
    readonly dataExportFrequencySeconds?: number;
    /**
     * Extended Location
     */
    readonly extendedLocation: types.outputs.ExtendedLocationPropertyResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The details of Diagnostic Service Docker Image.
     */
    readonly image: types.outputs.ContainerImageResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The format for the logs generated.
     */
    readonly logFormat?: string;
    /**
     * The format for the logs generated.
     */
    readonly logLevel?: string;
    /**
     * The maximum data stored in MiB.
     */
    readonly maxDataStorageSize?: number;
    /**
     * The port at which metrics is exposed.
     */
    readonly metricsPort?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The destination to collect traces. Diagnostic service will push traces to this endpoint
     */
    readonly openTelemetryTracesCollectorAddr?: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Metric inactivity timeout.
     */
    readonly staleDataTimeoutSeconds?: number;
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
 * Get a DiagnosticServiceResource
 */
export function getDiagnosticServiceOutput(args: GetDiagnosticServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDiagnosticServiceResult> {
    return pulumi.output(args).apply((a: any) => getDiagnosticService(a, opts))
}

export interface GetDiagnosticServiceOutputArgs {
    /**
     * Name of MQ diagnostic resource
     */
    diagnosticServiceName: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
