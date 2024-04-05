import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a CA certificate.
 */
export function getCaCertificate(args: GetCaCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCaCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20231215preview:getCaCertificate", {
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
     * The system metadata relating to the CaCertificate resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a CA certificate.
 */
export function getCaCertificateOutput(args: GetCaCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCaCertificateResult> {
    return pulumi.output(args).apply((a: any) => getCaCertificate(a, opts))
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