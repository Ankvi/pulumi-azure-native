import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account certificate.
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function getIntegrationAccountCertificate(args: GetIntegrationAccountCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:getIntegrationAccountCertificate", {
        "certificateName": args.certificateName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountCertificateArgs {
    /**
     * The integration account certificate name.
     */
    certificateName: string;
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The integration account certificate.
 */
export interface GetIntegrationAccountCertificateResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The key details in the key vault.
     */
    readonly key?: types.outputs.KeyVaultKeyReferenceResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: any;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The public certificate.
     */
    readonly publicCertificate?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Gets an integration account certificate.
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function getIntegrationAccountCertificateOutput(args: GetIntegrationAccountCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIntegrationAccountCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:getIntegrationAccountCertificate", {
        "certificateName": args.certificateName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountCertificateOutputArgs {
    /**
     * The integration account certificate name.
     */
    certificateName: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}