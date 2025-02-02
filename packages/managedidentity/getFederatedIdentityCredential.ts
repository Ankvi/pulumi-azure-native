import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the federated identity credential.
 * Azure REST API version: 2023-01-31.
 *
 * Other available API versions: 2023-07-31-preview, 2024-11-30.
 */
export function getFederatedIdentityCredential(args: GetFederatedIdentityCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetFederatedIdentityCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managedidentity:getFederatedIdentityCredential", {
        "federatedIdentityCredentialResourceName": args.federatedIdentityCredentialResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetFederatedIdentityCredentialArgs {
    /**
     * The name of the federated identity credential resource.
     */
    federatedIdentityCredentialResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the identity resource.
     */
    resourceName: string;
}

/**
 * Describes a federated identity credential.
 */
export interface GetFederatedIdentityCredentialResult {
    /**
     * The list of audiences that can appear in the issued token.
     */
    readonly audiences: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The URL of the issuer to be trusted.
     */
    readonly issuer: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The identifier of the external identity.
     */
    readonly subject: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the federated identity credential.
 * Azure REST API version: 2023-01-31.
 *
 * Other available API versions: 2023-07-31-preview, 2024-11-30.
 */
export function getFederatedIdentityCredentialOutput(args: GetFederatedIdentityCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFederatedIdentityCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managedidentity:getFederatedIdentityCredential", {
        "federatedIdentityCredentialResourceName": args.federatedIdentityCredentialResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetFederatedIdentityCredentialOutputArgs {
    /**
     * The name of the federated identity credential resource.
     */
    federatedIdentityCredentialResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the identity resource.
     */
    resourceName: pulumi.Input<string>;
}