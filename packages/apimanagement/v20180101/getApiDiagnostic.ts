import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the Diagnostic for an API specified by its identifier.
 */
export function getApiDiagnostic(args: GetApiDiagnosticArgs, opts?: pulumi.InvokeOptions): Promise<GetApiDiagnosticResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20180101:getApiDiagnostic", {
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
     * The name of the resource group.
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
     * Indicates whether a diagnostic should receive data or not.
     */
    readonly enabled: boolean;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
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
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
