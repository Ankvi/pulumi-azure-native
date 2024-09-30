import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns account details for the given account name.
 * Azure REST API version: 2023-07-01.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceupdate:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * Account name.
     */
    accountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Device Update account details.
 */
export interface GetAccountResult {
    /**
     * CMK encryption at rest properties
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * API host name.
     */
    readonly hostName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The type of identity used for the resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Device Update account primary and failover location details
     */
    readonly locations: types.outputs.LocationResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connections associated with the account.
     */
    readonly privateEndpointConnections?: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Whether or not public network access is allowed for the account.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Device Update Sku
     */
    readonly sku?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns account details for the given account name.
 * Azure REST API version: 2023-07-01.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceupdate:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountOutputArgs {
    /**
     * Account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}