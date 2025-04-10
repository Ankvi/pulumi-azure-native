import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements ExternalNetworks GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getExternalNetwork(args: GetExternalNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetExternalNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getExternalNetwork", {
        "externalNetworkName": args.externalNetworkName,
        "l3IsolationDomainName": args.l3IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExternalNetworkArgs {
    /**
     * Name of the ExternalNetwork
     */
    externalNetworkName: string;
    /**
     * Name of the L3IsolationDomain
     */
    l3IsolationDomainName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Defines the ExternalNetwork item.
 */
export interface GetExternalNetworkResult {
    /**
     * AdministrativeState of the externalNetwork. Example: Enabled | Disabled.
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * List of resources the externalNetwork is disabled on. Can be either entire NetworkFabric or NetworkRack.
     */
    readonly disabledOnResources: string[];
    /**
     * ARM resource ID of exportRoutePolicy.
     */
    readonly exportRoutePolicyId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * ARM resource ID of importRoutePolicy.
     */
    readonly importRoutePolicyId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the networkToNetworkInterconnectId of the resource.
     */
    readonly networkToNetworkInterconnectId: string;
    /**
     * option A properties object
     */
    readonly optionAProperties?: types.outputs.ExternalNetworkPropertiesResponseOptionAProperties;
    /**
     * option B properties object
     */
    readonly optionBProperties?: types.outputs.OptionBPropertiesResponse;
    /**
     * Peering option list.
     */
    readonly peeringOption: string;
    /**
     * Gets the provisioning state of the resource.
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
}
/**
 * Implements ExternalNetworks GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getExternalNetworkOutput(args: GetExternalNetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExternalNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getExternalNetwork", {
        "externalNetworkName": args.externalNetworkName,
        "l3IsolationDomainName": args.l3IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExternalNetworkOutputArgs {
    /**
     * Name of the ExternalNetwork
     */
    externalNetworkName: pulumi.Input<string>;
    /**
     * Name of the L3IsolationDomain
     */
    l3IsolationDomainName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}