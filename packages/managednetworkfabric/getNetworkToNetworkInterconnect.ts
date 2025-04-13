import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements NetworkToNetworkInterconnects GET method.
 *
 * Uses Azure REST API version 2023-06-15.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNetworkToNetworkInterconnect(args: GetNetworkToNetworkInterconnectArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkToNetworkInterconnectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkToNetworkInterconnect", {
        "networkFabricName": args.networkFabricName,
        "networkToNetworkInterconnectName": args.networkToNetworkInterconnectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkToNetworkInterconnectArgs {
    /**
     * Name of the Network Fabric.
     */
    networkFabricName: string;
    /**
     * Name of the Network to Network Interconnect.
     */
    networkToNetworkInterconnectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Network To Network Interconnect resource definition.
 */
export interface GetNetworkToNetworkInterconnectResult {
    /**
     * Administrative state of the resource.
     */
    readonly administrativeState: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Configuration state of the resource.
     */
    readonly configurationState: string;
    /**
     * Egress Acl. ARM resource ID of Access Control Lists.
     */
    readonly egressAclId?: string;
    /**
     * Export Route Policy configuration.
     */
    readonly exportRoutePolicy?: types.outputs.ExportRoutePolicyInformationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Import Route Policy configuration.
     */
    readonly importRoutePolicy?: types.outputs.ImportRoutePolicyInformationResponse;
    /**
     * Ingress Acl. ARM resource ID of Access Control Lists.
     */
    readonly ingressAclId?: string;
    /**
     * Configuration to use NNI for Infrastructure Management. Example: True/False.
     */
    readonly isManagementType?: string;
    /**
     * Common properties for Layer2 Configuration.
     */
    readonly layer2Configuration?: types.outputs.Layer2ConfigurationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Type of NNI used. Example: CE | NPB
     */
    readonly nniType?: string;
    /**
     * NPB Static Route Configuration properties.
     */
    readonly npbStaticRouteConfiguration?: types.outputs.NpbStaticRouteConfigurationResponse;
    /**
     * Common properties for Layer3Configuration.
     */
    readonly optionBLayer3Configuration?: types.outputs.NetworkToNetworkInterconnectPropertiesResponseOptionBLayer3Configuration;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Based on this option layer3 parameters are mandatory. Example: True/False
     */
    readonly useOptionB: string;
}
/**
 * Implements NetworkToNetworkInterconnects GET method.
 *
 * Uses Azure REST API version 2023-06-15.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNetworkToNetworkInterconnectOutput(args: GetNetworkToNetworkInterconnectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkToNetworkInterconnectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkToNetworkInterconnect", {
        "networkFabricName": args.networkFabricName,
        "networkToNetworkInterconnectName": args.networkToNetworkInterconnectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkToNetworkInterconnectOutputArgs {
    /**
     * Name of the Network Fabric.
     */
    networkFabricName: pulumi.Input<string>;
    /**
     * Name of the Network to Network Interconnect.
     */
    networkToNetworkInterconnectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}