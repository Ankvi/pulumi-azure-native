import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the certificate from the provisioning service.
 * Azure REST API version: 2022-12-12.
 *
 * Other available API versions: 2021-10-15, 2023-03-01-preview, 2025-02-01-preview.
 */
export function getDpsCertificate(args: GetDpsCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetDpsCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices:getDpsCertificate", {
        "certificateName": args.certificateName,
        "provisioningServiceName": args.provisioningServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDpsCertificateArgs {
    /**
     * Name of the certificate to retrieve.
     */
    certificateName: string;
    /**
     * Name of the provisioning service the certificate is associated with.
     */
    provisioningServiceName: string;
    /**
     * Resource group identifier.
     */
    resourceGroupName: string;
}

/**
 * The X509 Certificate.
 */
export interface GetDpsCertificateResult {
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
     * properties of a certificate
     */
    readonly properties: types.outputs.CertificatePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get the certificate from the provisioning service.
 * Azure REST API version: 2022-12-12.
 *
 * Other available API versions: 2021-10-15, 2023-03-01-preview, 2025-02-01-preview.
 */
export function getDpsCertificateOutput(args: GetDpsCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDpsCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devices:getDpsCertificate", {
        "certificateName": args.certificateName,
        "provisioningServiceName": args.provisioningServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDpsCertificateOutputArgs {
    /**
     * Name of the certificate to retrieve.
     */
    certificateName: pulumi.Input<string>;
    /**
     * Name of the provisioning service the certificate is associated with.
     */
    provisioningServiceName: pulumi.Input<string>;
    /**
     * Resource group identifier.
     */
    resourceGroupName: pulumi.Input<string>;
}