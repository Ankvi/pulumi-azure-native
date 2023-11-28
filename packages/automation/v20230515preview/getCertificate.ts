import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the certificate identified by certificate name.
 */
export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20230515preview:getCertificate", {
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Gets the thumbprint of the certificate.
     */
    readonly thumbprint: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieve the certificate identified by certificate name.
 */
export function getCertificateOutput(args: GetCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCertificateResult> {
    return pulumi.output(args).apply((a: any) => getCertificate(a, opts))
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
