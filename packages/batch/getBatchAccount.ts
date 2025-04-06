import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified Batch account.
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native batch [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBatchAccount(args: GetBatchAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetBatchAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:batch:getBatchAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBatchAccountArgs {
    /**
     * The name of the Batch account.
     */
    accountName: string;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: string;
}

/**
 * Contains information about an Azure Batch account.
 */
export interface GetBatchAccountResult {
    /**
     * The account endpoint used to interact with the Batch service.
     */
    readonly accountEndpoint: string;
    readonly activeJobAndJobScheduleQuota: number;
    /**
     * List of allowed authentication modes for the Batch account that can be used to authenticate with the data plane. This does not affect authentication with the control plane.
     */
    readonly allowedAuthenticationModes: string[];
    /**
     * Contains information about the auto-storage account associated with a Batch account.
     */
    readonly autoStorage: types.outputs.AutoStoragePropertiesResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
     */
    readonly dedicatedCoreQuota: number;
    /**
     * A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
     */
    readonly dedicatedCoreQuotaPerVMFamily: types.outputs.VirtualMachineFamilyCoreQuotaResponse[];
    /**
     * If this flag is true, dedicated core quota is enforced via both the dedicatedCoreQuotaPerVMFamily and dedicatedCoreQuota properties on the account. If this flag is false, dedicated core quota is enforced only via the dedicatedCoreQuota property on the account and does not consider Virtual Machine family.
     */
    readonly dedicatedCoreQuotaPerVMFamilyEnforced: boolean;
    /**
     * Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
     */
    readonly encryption: types.outputs.EncryptionPropertiesResponse;
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The identity of the Batch account.
     */
    readonly identity?: types.outputs.BatchAccountIdentityResponse;
    /**
     * Identifies the Azure key vault associated with a Batch account.
     */
    readonly keyVaultReference: types.outputs.KeyVaultReferenceResponse;
    /**
     * The location of the resource.
     */
    readonly location: string;
    /**
     * For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
     */
    readonly lowPriorityCoreQuota: number;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The network profile only takes effect when publicNetworkAccess is enabled.
     */
    readonly networkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * The endpoint used by compute node to connect to the Batch node management service.
     */
    readonly nodeManagementEndpoint: string;
    /**
     * The allocation mode for creating pools in the Batch account.
     */
    readonly poolAllocationMode: string;
    readonly poolQuota: number;
    /**
     * List of private endpoint connections associated with the Batch account
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The provisioned state of the resource
     */
    readonly provisioningState: string;
    /**
     * If not specified, the default value is 'enabled'.
     */
    readonly publicNetworkAccess?: string;
    /**
     * The tags of the resource.
     */
    readonly tags: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets information about the specified Batch account.
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native batch [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBatchAccountOutput(args: GetBatchAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBatchAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:batch:getBatchAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBatchAccountOutputArgs {
    /**
     * The name of the Batch account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: pulumi.Input<string>;
}