import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Contains data from encryption.keyVaultProperties as well as information about which private endpoint is used by each encryption sibling set. Response from this endpoint can be modified and used as request body for POST request.
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getAccountKeyVaultStatus(args: GetAccountKeyVaultStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountKeyVaultStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getAccountKeyVaultStatus", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountKeyVaultStatusArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Result of getKeyVaultStatus with information about how volumes under NetApp account are encrypted.
 */
export interface GetAccountKeyVaultStatusResult {
    /**
     * The name of the key that should be used for encryption.
     */
    readonly keyName?: string;
    /**
     * Pairs of virtual network ID and private endpoint ID. Every virtual network that has volumes encrypted with customer-managed keys needs its own key vault private endpoint.
     */
    readonly keyVaultPrivateEndpoints?: types.outputs.KeyVaultPrivateEndpointResponse[];
    /**
     * Azure resource ID of the key vault/managed HSM that should be used for encryption.
     */
    readonly keyVaultResourceId?: string;
    /**
     * The URI of the key vault/managed HSM that should be used for encryption.
     */
    readonly keyVaultUri?: string;
}
/**
 * Contains data from encryption.keyVaultProperties as well as information about which private endpoint is used by each encryption sibling set. Response from this endpoint can be modified and used as request body for POST request.
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getAccountKeyVaultStatusOutput(args: GetAccountKeyVaultStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccountKeyVaultStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getAccountKeyVaultStatus", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountKeyVaultStatusOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}