import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified mobile network.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMobileNetwork(args: GetMobileNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetMobileNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork:getMobileNetwork", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMobileNetworkOutput(args: GetMobileNetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMobileNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilenetwork:getMobileNetwork", {
        "mobileNetworkName": args.mobileNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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