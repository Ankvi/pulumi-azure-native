import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the certificate.
 *
 * Uses Azure REST API version 2022-04-30-preview.
 *
 * Other available API versions: 2020-04-01, 2022-11-15-preview, 2023-06-30, 2023-06-30-preview.
 */
export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices:getCertificate", {
        "certificateName": args.certificateName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetCertificateArgs {
    /**
     * The name of the certificate
     */
    certificateName: string;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    resourceName: string;
}

/**
 * The X509 Certificate.
 */
export interface GetCertificateResult {
    /**
     * The entity tag.
     */
    readonly etag: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The name of the certificate.
     */
    readonly name: string;
    /**
     * The description of an X509 CA Certificate.
     */
    readonly properties: types.outputs.CertificatePropertiesResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Returns the certificate.
 *
 * Uses Azure REST API version 2022-04-30-preview.
 *
 * Other available API versions: 2020-04-01, 2022-11-15-preview, 2023-06-30, 2023-06-30-preview.
 */
export function getCertificateOutput(args: GetCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devices:getCertificate", {
        "certificateName": args.certificateName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetCertificateOutputArgs {
    /**
     * The name of the certificate
     */
    certificateName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName: pulumi.Input<string>;
}