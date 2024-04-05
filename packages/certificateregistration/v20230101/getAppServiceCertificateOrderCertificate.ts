import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get the certificate associated with a certificate order.
 */
export function getAppServiceCertificateOrderCertificate(args: GetAppServiceCertificateOrderCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServiceCertificateOrderCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:certificateregistration/v20230101:getAppServiceCertificateOrderCertificate", {
        "certificateOrderName": args.certificateOrderName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppServiceCertificateOrderCertificateArgs {
    /**
     * Name of the certificate order.
     */
    certificateOrderName: string;
    /**
     * Name of the certificate.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Key Vault container ARM resource for a certificate that is purchased through Azure.
 */
export interface GetAppServiceCertificateOrderCertificateResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Key Vault resource Id.
     */
    readonly keyVaultId?: string;
    /**
     * Key Vault secret name.
     */
    readonly keyVaultSecretName?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Status of the Key Vault secret.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Get the certificate associated with a certificate order.
 */
export function getAppServiceCertificateOrderCertificateOutput(args: GetAppServiceCertificateOrderCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppServiceCertificateOrderCertificateResult> {
    return pulumi.output(args).apply((a: any) => getAppServiceCertificateOrderCertificate(a, opts))
}

export interface GetAppServiceCertificateOrderCertificateOutputArgs {
    /**
     * Name of the certificate order.
     */
    certificateOrderName: pulumi.Input<string>;
    /**
     * Name of the certificate.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}