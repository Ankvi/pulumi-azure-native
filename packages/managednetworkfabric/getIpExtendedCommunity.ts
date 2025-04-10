import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements IP Extended Community GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getIpExtendedCommunity(args: GetIpExtendedCommunityArgs, opts?: pulumi.InvokeOptions): Promise<GetIpExtendedCommunityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getIpExtendedCommunity", {
        "ipExtendedCommunityName": args.ipExtendedCommunityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpExtendedCommunityArgs {
    /**
     * Name of the IP Extended Community
     */
    ipExtendedCommunityName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The IpExtendedCommunity resource definition.
 */
export interface GetIpExtendedCommunityResult {
    /**
     * Action to be taken on the configuration. Example: Permit | Deny.
     */
    readonly action: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
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
     * Gets the provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Route Target List.The expected formats are ASN(plain):NN >> example 4294967294:50, ASN.ASN:NN >> example 65533.65333:40, IP-address:NN >> example 10.10.10.10:65535. The possible values of ASN,NN are in range of 0-65535, ASN(plain) is in range of 0-4294967295.
     */
    readonly routeTargets: string[];
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
 * Implements IP Extended Community GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getIpExtendedCommunityOutput(args: GetIpExtendedCommunityOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIpExtendedCommunityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getIpExtendedCommunity", {
        "ipExtendedCommunityName": args.ipExtendedCommunityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpExtendedCommunityOutputArgs {
    /**
     * Name of the IP Extended Community
     */
    ipExtendedCommunityName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}