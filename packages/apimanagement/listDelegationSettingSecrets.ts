import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the secret validation key of the DelegationSettings.
 *
 * Uses Azure REST API version 2021-08-01.
 *
 * Other available API versions: 2021-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listDelegationSettingSecrets(args: ListDelegationSettingSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListDelegationSettingSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:listDelegationSettingSecrets", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListDelegationSettingSecretsArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
 */
export interface ListDelegationSettingSecretsResult {
    /**
     * This is secret value of the validation key in portal settings.
     */
    readonly validationKey?: string;
}
/**
 * Gets the secret validation key of the DelegationSettings.
 *
 * Uses Azure REST API version 2021-08-01.
 *
 * Other available API versions: 2021-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listDelegationSettingSecretsOutput(args: ListDelegationSettingSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDelegationSettingSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:listDelegationSettingSecrets", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListDelegationSettingSecretsOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}