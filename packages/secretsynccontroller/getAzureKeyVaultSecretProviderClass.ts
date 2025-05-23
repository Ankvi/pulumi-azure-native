import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of an AzureKeyVaultSecretProviderClass instance.
 *
 * Uses Azure REST API version 2024-08-21-preview.
 */
export function getAzureKeyVaultSecretProviderClass(args: GetAzureKeyVaultSecretProviderClassArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureKeyVaultSecretProviderClassResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:secretsynccontroller:getAzureKeyVaultSecretProviderClass", {
        "azureKeyVaultSecretProviderClassName": args.azureKeyVaultSecretProviderClassName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureKeyVaultSecretProviderClassArgs {
    /**
     * The name of the AzureKeyVaultSecretProviderClass
     */
    azureKeyVaultSecretProviderClassName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The AzureKeyVaultSecretProviderClass resource.
 */
export interface GetAzureKeyVaultSecretProviderClassResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The user assigned managed identity client ID that should be used to access the Azure Key Vault.
     */
    readonly clientId: string;
    /**
     * The complex type of the extended location.
     */
    readonly extendedLocation?: types.outputs.AzureResourceManagerCommonTypesExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the Azure Key Vault to sync secrets from.
     */
    readonly keyvaultName: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Objects defines the desired state of synced K8s secret objects
     */
    readonly objects?: string;
    /**
     * Provisioning state of the AzureKeyVaultSecretProviderClass instance.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the Azure Key Vault.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the properties of an AzureKeyVaultSecretProviderClass instance.
 *
 * Uses Azure REST API version 2024-08-21-preview.
 */
export function getAzureKeyVaultSecretProviderClassOutput(args: GetAzureKeyVaultSecretProviderClassOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureKeyVaultSecretProviderClassResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:secretsynccontroller:getAzureKeyVaultSecretProviderClass", {
        "azureKeyVaultSecretProviderClassName": args.azureKeyVaultSecretProviderClassName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureKeyVaultSecretProviderClassOutputArgs {
    /**
     * The name of the AzureKeyVaultSecretProviderClass
     */
    azureKeyVaultSecretProviderClassName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}