import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a custom certificate.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export function getWebPubSubCustomCertificate(args: GetWebPubSubCustomCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetWebPubSubCustomCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub:getWebPubSubCustomCertificate", {
        "certificateName": args.certificateName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWebPubSubCustomCertificateArgs {
    /**
     * Custom certificate name
     */
    certificateName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A custom certificate.
 */
export interface GetWebPubSubCustomCertificateResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * Base uri of the KeyVault that stores certificate.
     */
    readonly keyVaultBaseUri: string;
    /**
     * Certificate secret name.
     */
    readonly keyVaultSecretName: string;
    /**
     * Certificate secret version.
     */
    readonly keyVaultSecretVersion?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    readonly type: string;
}
/**
 * Get a custom certificate.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export function getWebPubSubCustomCertificateOutput(args: GetWebPubSubCustomCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebPubSubCustomCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:webpubsub:getWebPubSubCustomCertificate", {
        "certificateName": args.certificateName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWebPubSubCustomCertificateOutputArgs {
    /**
     * Custom certificate name
     */
    certificateName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}