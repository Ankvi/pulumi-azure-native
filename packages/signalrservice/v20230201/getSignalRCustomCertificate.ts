import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a custom certificate.
 */
export function getSignalRCustomCertificate(args: GetSignalRCustomCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetSignalRCustomCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:signalrservice/v20230201:getSignalRCustomCertificate", {
        "certificateName": args.certificateName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSignalRCustomCertificateArgs {
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
export interface GetSignalRCustomCertificateResult {
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
 */
export function getSignalRCustomCertificateOutput(args: GetSignalRCustomCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSignalRCustomCertificateResult> {
    return pulumi.output(args).apply((a: any) => getSignalRCustomCertificate(a, opts))
}

export interface GetSignalRCustomCertificateOutputArgs {
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
