import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a CA certificate.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCaCertificate(args: GetCaCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCaCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getCaCertificate", {
        "caCertificateName": args.caCertificateName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCaCertificateArgs {
    /**
     * Name of the CA certificate.
     */
    caCertificateName: string;
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * The CA Certificate resource.
 */
export interface GetCaCertificateResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Description for the CA Certificate resource.
     */
    readonly description?: string;
    /**
     * Base64 encoded PEM (Privacy Enhanced Mail) format certificate data.
     */
    readonly encodedCertificate?: string;
    /**
     * Certificate expiry time in UTC. This is a read-only field.
     */
    readonly expiryTimeInUtc: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Certificate issue time in UTC. This is a read-only field.
     */
    readonly issueTimeInUtc: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the CA Certificate resource.
     */
    readonly provisioningState: string;
    /**
     * The system metadata relating to the Event Grid resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a CA certificate.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCaCertificateOutput(args: GetCaCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCaCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getCaCertificate", {
        "caCertificateName": args.caCertificateName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCaCertificateOutputArgs {
    /**
     * Name of the CA certificate.
     */
    caCertificateName: pulumi.Input<string>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}