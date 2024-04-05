import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the Diagnostic specified by its identifier.
 */
export function getDiagnostic(args: GetDiagnosticArgs, opts?: pulumi.InvokeOptions): Promise<GetDiagnosticResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20180101:getDiagnostic", {
        "diagnosticId": args.diagnosticId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetDiagnosticArgs {
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
export interface GetDiagnosticResult {
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
 * Gets the details of the Diagnostic specified by its identifier.
 */
export function getDiagnosticOutput(args: GetDiagnosticOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDiagnosticResult> {
    return pulumi.output(args).apply((a: any) => getDiagnostic(a, opts))
}

export interface GetDiagnosticOutputArgs {
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