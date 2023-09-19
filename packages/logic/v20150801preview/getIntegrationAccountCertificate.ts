import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account certificate.
 */
export function getIntegrationAccountCertificate(args: GetIntegrationAccountCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20150801preview:getIntegrationAccountCertificate", {
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
    readonly id?: string;
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
     * The resource name.
     */
    readonly name?: string;
    /**
     * The public certificate.
     */
    readonly publicCertificate?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type?: string;
}
/**
 * Gets an integration account certificate.
 */
export function getIntegrationAccountCertificateOutput(args: GetIntegrationAccountCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationAccountCertificateResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationAccountCertificate(a, opts))
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
