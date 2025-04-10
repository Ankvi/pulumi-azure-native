import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an read-write access token for application insights diagnostic service data.
 *
 * Uses Azure REST API version 2021-03-03-preview.
 */
export function getDiagnosticServiceTokenReadWrite(args: GetDiagnosticServiceTokenReadWriteArgs, opts?: pulumi.InvokeOptions): Promise<GetDiagnosticServiceTokenReadWriteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getDiagnosticServiceTokenReadWrite", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetDiagnosticServiceTokenReadWriteArgs {
    /**
     * The identifier of the resource.
     */
    resourceUri: string;
}

/**
 * The response to a diagnostic services token query.
 */
export interface GetDiagnosticServiceTokenReadWriteResult {
    /**
     * JWT token for accessing application insights diagnostic service data.
     */
    readonly token?: string;
}
/**
 * Gets an read-write access token for application insights diagnostic service data.
 *
 * Uses Azure REST API version 2021-03-03-preview.
 */
export function getDiagnosticServiceTokenReadWriteOutput(args: GetDiagnosticServiceTokenReadWriteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDiagnosticServiceTokenReadWriteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:insights:getDiagnosticServiceTokenReadWrite", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetDiagnosticServiceTokenReadWriteOutputArgs {
    /**
     * The identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}