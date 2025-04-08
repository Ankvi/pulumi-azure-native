import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieve the certificate identified by certificate name.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getCertificate", {
        "automationAccountName": args.automationAccountName,
        "certificateName": args.certificateName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCertificateArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The name of certificate.
     */
    certificateName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the certificate.
 */
export interface GetCertificateResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets the expiry time of the certificate.
     */
    readonly expiryTime: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets the is exportable flag of the certificate.
     */
    readonly isExportable: boolean;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the thumbprint of the certificate.
     */
    readonly thumbprint: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Retrieve the certificate identified by certificate name.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCertificateOutput(args: GetCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getCertificate", {
        "automationAccountName": args.automationAccountName,
        "certificateName": args.certificateName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCertificateOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The name of certificate.
     */
    certificateName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}