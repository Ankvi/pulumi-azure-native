import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a server trust certificate that was uploaded from box to Sql Managed Instance.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getServerTrustCertificate(args: GetServerTrustCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetServerTrustCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getServerTrustCertificate", {
        "certificateName": args.certificateName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetServerTrustCertificateArgs {
    /**
     * Name of of the certificate to get.
     */
    certificateName: string;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * Server trust certificate imported from box to enable connection between box and Sql Managed Instance.
 */
export interface GetServerTrustCertificateResult {
    /**
     * The certificate name
     */
    readonly certificateName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The certificate public blob
     */
    readonly publicBlob?: string;
    /**
     * The certificate thumbprint
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a server trust certificate that was uploaded from box to Sql Managed Instance.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getServerTrustCertificateOutput(args: GetServerTrustCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerTrustCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getServerTrustCertificate", {
        "certificateName": args.certificateName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetServerTrustCertificateOutputArgs {
    /**
     * Name of of the certificate to get.
     */
    certificateName: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}