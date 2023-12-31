import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the certificate specified by its identifier.
 */
export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220901preview:getCertificate", {
        "certificateId": args.certificateId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetCertificateArgs {
    /**
     * Identifier of the certificate entity. Must be unique in the current API Management service instance.
     */
    certificateId: string;
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
 * Certificate details.
 */
export interface GetCertificateResult {
    /**
     * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly expirationDate: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * KeyVault location details of the certificate.
     */
    readonly keyVault?: types.outputs.KeyVaultContractPropertiesResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Subject attribute of the certificate.
     */
    readonly subject: string;
    /**
     * Thumbprint of the certificate.
     */
    readonly thumbprint: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the certificate specified by its identifier.
 */
export function getCertificateOutput(args: GetCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCertificateResult> {
    return pulumi.output(args).apply((a: any) => getCertificate(a, opts))
}

export interface GetCertificateOutputArgs {
    /**
     * Identifier of the certificate entity. Must be unique in the current API Management service instance.
     */
    certificateId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
