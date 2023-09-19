import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements ExternalNetworks GET method.
 */
export function getExternalNetwork(args: GetExternalNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetExternalNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getExternalNetwork", {
        "externalNetworkName": args.externalNetworkName,
        "l3IsolationDomainName": args.l3IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExternalNetworkArgs {
    /**
     * Name of the External Network.
     */
    externalNetworkName: string;
    /**
     * Name of the L3 Isolation Domain.
     */
    l3IsolationDomainName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Defines the External Network resource.
 */
export interface GetExternalNetworkResult {
    /**
     * Administrative state of the resource.
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Configuration state of the resource.
     */
    readonly configurationState: string;
    /**
     * Export Route Policy either IPv4 or IPv6.
     */
    readonly exportRoutePolicy?: types.outputs.ExportRoutePolicyResponse;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    readonly exportRoutePolicyId?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Import Route Policy either IPv4 or IPv6.
     */
    readonly importRoutePolicy?: types.outputs.ImportRoutePolicyResponse;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
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
    readonly optionBProperties?: types.outputs.L3OptionBPropertiesResponse;
    /**
     * Peering option list.
     */
    readonly peeringOption: string;
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
}
/**
 * Implements ExternalNetworks GET method.
 */
export function getExternalNetworkOutput(args: GetExternalNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExternalNetworkResult> {
    return pulumi.output(args).apply((a: any) => getExternalNetwork(a, opts))
}

export interface GetExternalNetworkOutputArgs {
    /**
     * Name of the External Network.
     */
    externalNetworkName: pulumi.Input<string>;
    /**
     * Name of the L3 Isolation Domain.
     */
    l3IsolationDomainName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
