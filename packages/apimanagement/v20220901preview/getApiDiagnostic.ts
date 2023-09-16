import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the details of the Diagnostic for an API specified by its identifier.
 */
export function getApiDiagnostic(args: GetApiDiagnosticArgs, opts?: pulumi.InvokeOptions): Promise<GetApiDiagnosticResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220901preview:getApiDiagnostic", {
        "apiId": args.apiId,
        "diagnosticId": args.diagnosticId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiDiagnosticArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: string;
    /**
     * Diagnostic identifier. Must be unique in the current API Management service instance.
     */
    diagnosticId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Diagnostic details.
 */
export interface GetApiDiagnosticResult {
    /**
     * Specifies for what type of messages sampling settings should not apply.
     */
    readonly alwaysLog?: string;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Backend
     */
    readonly backend?: types.outputs.apimanagement.v20220901preview.PipelineDiagnosticSettingsResponse;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     */
    readonly frontend?: types.outputs.apimanagement.v20220901preview.PipelineDiagnosticSettingsResponse;
    /**
     * Sets correlation protocol to use for Application Insights diagnostics.
     */
    readonly httpCorrelationProtocol?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Log the ClientIP. Default is false.
     */
    readonly logClientIp?: boolean;
    /**
     * Resource Id of a target logger.
     */
    readonly loggerId: string;
    /**
     * Emit custom metrics via emit-metric policy. Applicable only to Application Insights diagnostic settings.
     */
    readonly metrics?: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The format of the Operation Name for Application Insights telemetries. Default is Name.
     */
    readonly operationNameFormat?: string;
    /**
     * Sampling settings for Diagnostic.
     */
    readonly sampling?: types.outputs.apimanagement.v20220901preview.SamplingSettingsResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The verbosity level applied to traces emitted by trace policies.
     */
    readonly verbosity?: string;
}
/**
 * Gets the details of the Diagnostic for an API specified by its identifier.
 */
export function getApiDiagnosticOutput(args: GetApiDiagnosticOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiDiagnosticResult> {
    return pulumi.output(args).apply((a: any) => getApiDiagnostic(a, opts))
}

export interface GetApiDiagnosticOutputArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: pulumi.Input<string>;
    /**
     * Diagnostic identifier. Must be unique in the current API Management service instance.
     */
    diagnosticId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
