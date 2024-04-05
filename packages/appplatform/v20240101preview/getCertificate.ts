import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the certificate resource.
 */
export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20240101preview:getCertificate", {
        "certificateName": args.certificateName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetCertificateArgs {
    /**
     * The name of the certificate resource.
     */
    certificateName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Certificate resource payload.
 */
export interface GetCertificateResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the certificate resource payload.
     */
    readonly properties: types.outputs.ContentCertificatePropertiesResponse | types.outputs.KeyVaultCertificatePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the certificate resource.
 */
export function getCertificateOutput(args: GetCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCertificateResult> {
    return pulumi.output(args).apply((a: any) => getCertificate(a, opts))
}

export interface GetCertificateOutputArgs {
    /**
     * The name of the certificate resource.
     */
    certificateName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}