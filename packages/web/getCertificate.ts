import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Get a certificate.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2016-03-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getCertificate", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCertificateArgs {
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
 * SSL certificate for an app.
 */
export interface GetCertificateResult {
    /**
     * CNAME of the certificate to be issued via free certificate
     */
    readonly canonicalName?: string;
    /**
     * Raw bytes of .cer file
     */
    readonly cerBlob: string;
    /**
     * Method of domain validation for free cert
     */
    readonly domainValidationMethod?: string;
    /**
     * Certificate expiration date.
     */
    readonly expirationDate: string;
    /**
     * Friendly name of the certificate.
     */
    readonly friendlyName: string;
    /**
     * Host names the certificate applies to.
     */
    readonly hostNames?: string[];
    /**
     * Specification for the App Service Environment to use for the certificate.
     */
    readonly hostingEnvironmentProfile: types.outputs.HostingEnvironmentProfileResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Certificate issue Date.
     */
    readonly issueDate: string;
    /**
     * Certificate issuer.
     */
    readonly issuer: string;
    /**
     * Key Vault Csm resource Id.
     */
    readonly keyVaultId?: string;
    /**
     * Key Vault secret name.
     */
    readonly keyVaultSecretName?: string;
    /**
     * Status of the Key Vault secret.
     */
    readonly keyVaultSecretStatus: string;
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
     * Pfx blob.
     */
    readonly pfxBlob?: string;
    /**
     * Public key hash.
     */
    readonly publicKeyHash: string;
    /**
     * Self link.
     */
    readonly selfLink: string;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    readonly serverFarmId?: string;
    /**
     * App name.
     */
    readonly siteName: string;
    /**
     * Subject name of the certificate.
     */
    readonly subjectName: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Certificate thumbprint.
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Is the certificate valid?.
     */
    readonly valid: boolean;
}
/**
 * Description for Get a certificate.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2016-03-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getCertificateOutput(args: GetCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getCertificate", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCertificateOutputArgs {
    /**
     * Name of the certificate.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}