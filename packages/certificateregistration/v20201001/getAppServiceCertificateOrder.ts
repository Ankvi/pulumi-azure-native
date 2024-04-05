import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a certificate order.
 */
export function getAppServiceCertificateOrder(args: GetAppServiceCertificateOrderArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServiceCertificateOrderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:certificateregistration/v20201001:getAppServiceCertificateOrder", {
        "certificateOrderName": args.certificateOrderName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppServiceCertificateOrderArgs {
    /**
     * Name of the certificate order..
     */
    certificateOrderName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * SSL certificate purchase order.
 */
export interface GetAppServiceCertificateOrderResult {
    /**
     * Reasons why App Service Certificate is not renewable at the current moment.
     */
    readonly appServiceCertificateNotRenewableReasons: string[];
    /**
     * <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
     */
    readonly autoRenew?: boolean;
    /**
     * State of the Key Vault secret.
     */
    readonly certificates?: {[key: string]: types.outputs.AppServiceCertificateResponse};
    /**
     * Last CSR that was created for this order.
     */
    readonly csr?: string;
    /**
     * Certificate distinguished name.
     */
    readonly distinguishedName?: string;
    /**
     * Domain verification token.
     */
    readonly domainVerificationToken: string;
    /**
     * Certificate expiration time.
     */
    readonly expirationTime: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Intermediate certificate.
     */
    readonly intermediate: types.outputs.CertificateDetailsResponse;
    /**
     * <code>true</code> if private key is external; otherwise, <code>false</code>.
     */
    readonly isPrivateKeyExternal: boolean;
    /**
     * Certificate key size.
     */
    readonly keySize?: number;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Certificate last issuance time.
     */
    readonly lastCertificateIssuanceTime: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Time stamp when the certificate would be auto renewed next
     */
    readonly nextAutoRenewalTimeStamp: string;
    /**
     * Certificate product type.
     */
    readonly productType: string;
    /**
     * Status of certificate order.
     */
    readonly provisioningState: string;
    /**
     * Root certificate.
     */
    readonly root: types.outputs.CertificateDetailsResponse;
    /**
     * Current serial number of the certificate.
     */
    readonly serialNumber: string;
    /**
     * Signed certificate.
     */
    readonly signedCertificate: types.outputs.CertificateDetailsResponse;
    /**
     * Current order status.
     */
    readonly status: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Duration in years (must be between 1 and 3).
     */
    readonly validityInYears?: number;
}
/**
 * Get a certificate order.
 */
export function getAppServiceCertificateOrderOutput(args: GetAppServiceCertificateOrderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppServiceCertificateOrderResult> {
    return pulumi.output(args).apply((a: any) => getAppServiceCertificateOrder(a, opts))
}

export interface GetAppServiceCertificateOrderOutputArgs {
    /**
     * Name of the certificate order..
     */
    certificateOrderName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}