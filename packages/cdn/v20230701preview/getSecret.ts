import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing Secret within a profile.
 */
export function getSecret(args: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn/v20230701preview:getSecret", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "secretName": args.secretName,
    }, opts);
}

export interface GetSecretArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the Secret under the profile.
     */
    secretName: string;
}

/**
 * Friendly Secret name mapping to the any Secret or secret related information.
 */
export interface GetSecretResult {
    readonly deploymentStatus: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * object which contains secret parameters
     */
    readonly parameters?: types.outputs.AzureFirstPartyManagedCertificateParametersResponse | types.outputs.CustomerCertificateParametersResponse | types.outputs.ManagedCertificateParametersResponse | types.outputs.UrlSigningKeyParametersResponse;
    /**
     * The name of the profile which holds the secret.
     */
    readonly profileName: string;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing Secret within a profile.
 */
export function getSecretOutput(args: GetSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretResult> {
    return pulumi.output(args).apply((a: any) => getSecret(a, opts))
}

export interface GetSecretOutputArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Secret under the profile.
     */
    secretName: pulumi.Input<string>;
}