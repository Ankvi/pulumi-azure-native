import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account certificate.
 */
export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20160601:getCertificate", {
        "certificateName": args.certificateName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCertificateArgs {
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
export interface GetCertificateResult {
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
 */
export function getCertificateOutput(args: GetCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCertificateResult> {
    return pulumi.output(args).apply((a: any) => getCertificate(a, opts))
}

export interface GetCertificateOutputArgs {
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