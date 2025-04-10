import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an read-only access token for application insights diagnostic service data.
 *
 * Uses Azure REST API version 2021-03-03-preview.
 */
export function getDiagnosticServiceTokenReadOnly(args: GetDiagnosticServiceTokenReadOnlyArgs, opts?: pulumi.InvokeOptions): Promise<GetDiagnosticServiceTokenReadOnlyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getDiagnosticServiceTokenReadOnly", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetDiagnosticServiceTokenReadOnlyArgs {
    /**
     * The identifier of the resource.
     */
    resourceUri: string;
}

/**
 * The response to a diagnostic services token query.
 */
export interface GetDiagnosticServiceTokenReadOnlyResult {
    /**
     * JWT token for accessing application insights diagnostic service data.
     */
    readonly token?: string;
}
/**
 * Gets an read-only access token for application insights diagnostic service data.
 *
 * Uses Azure REST API version 2021-03-03-preview.
 */
export function getDiagnosticServiceTokenReadOnlyOutput(args: GetDiagnosticServiceTokenReadOnlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDiagnosticServiceTokenReadOnlyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:insights:getDiagnosticServiceTokenReadOnly", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetDiagnosticServiceTokenReadOnlyOutputArgs {
    /**
     * The identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}