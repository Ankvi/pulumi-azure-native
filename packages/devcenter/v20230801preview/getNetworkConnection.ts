import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a network connection resource
 */
export function getNetworkConnection(args: GetNetworkConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter/v20230801preview:getNetworkConnection", {
        "networkConnectionName": args.networkConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkConnectionArgs {
    /**
     * Name of the Network Connection that can be applied to a Pool.
     */
    networkConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Network related settings
 */
export interface GetNetworkConnectionResult {
    /**
     * AAD Join type.
     */
    readonly domainJoinType: string;
    /**
     * Active Directory domain name
     */
    readonly domainName?: string;
    /**
     * The password for the account used to join domain
     */
    readonly domainPassword?: string;
    /**
     * The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com.
     */
    readonly domainUsername?: string;
    /**
     * Overall health status of the network connection. Health checks are run on creation, update, and periodically to validate the network connection.
     */
    readonly healthCheckStatus: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The name for resource group where NICs will be placed.
     */
    readonly networkingResourceGroupName?: string;
    /**
     * Active Directory domain Organization Unit (OU)
     */
    readonly organizationUnit?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The subnet to attach Virtual Machines to
     */
    readonly subnetId: string;
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
 * Gets a network connection resource
 */
export function getNetworkConnectionOutput(args: GetNetworkConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkConnectionResult> {
    return pulumi.output(args).apply((a: any) => getNetworkConnection(a, opts))
}

export interface GetNetworkConnectionOutputArgs {
    /**
     * Name of the Network Connection that can be applied to a Pool.
     */
    networkConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
