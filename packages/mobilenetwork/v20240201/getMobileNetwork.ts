import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified mobile network.
 */
export function getMobileNetwork(args: GetMobileNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetMobileNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork/v20240201:getMobileNetwork", {
        "mobileNetworkName": args.mobileNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMobileNetworkArgs {
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Mobile network resource.
 */
export interface GetMobileNetworkResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The identity used to retrieve any private keys used for SUPI concealment from Azure key vault.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the mobile network resource.
     */
    readonly provisioningState: string;
    /**
     * The unique public land mobile network identifier for the network. If both 'publicLandMobileNetworks' and 'publicLandMobileNetworkIdentifier' are specified, then the 'publicLandMobileNetworks' will take precedence.
     */
    readonly publicLandMobileNetworkIdentifier: types.outputs.PlmnIdResponse;
    /**
     * A list of public land mobile networks including their identifiers. If both 'publicLandMobileNetworks' and 'publicLandMobileNetworkIdentifier' are specified, then the 'publicLandMobileNetworks' will take precedence.
     */
    readonly publicLandMobileNetworks?: types.outputs.PublicLandMobileNetworkResponse[];
    /**
     * The mobile network resource identifier
     */
    readonly serviceKey: string;
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
 * Gets information about the specified mobile network.
 */
export function getMobileNetworkOutput(args: GetMobileNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMobileNetworkResult> {
    return pulumi.output(args).apply((a: any) => getMobileNetwork(a, opts))
}

export interface GetMobileNetworkOutputArgs {
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}