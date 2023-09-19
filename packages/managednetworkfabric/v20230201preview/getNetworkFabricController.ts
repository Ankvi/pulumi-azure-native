import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Shows the provisioning status of Network Fabric Controller.
 */
export function getNetworkFabricController(args: GetNetworkFabricControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFabricControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230201preview:getNetworkFabricController", {
        "networkFabricControllerName": args.networkFabricControllerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFabricControllerArgs {
    /**
     * Name of the Network Fabric Controller
     */
    networkFabricControllerName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The NetworkFabricController resource definition.
 */
export interface GetNetworkFabricControllerResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * As part of an update, the Infrastructure ExpressRoute CircuitID should be provided to create and Provision a NFC. This Express route is dedicated for Infrastructure services. (This is a Mandatory attribute)
     */
    readonly infrastructureExpressRouteConnections?: types.outputs.ExpressRouteConnectionInformationResponse[];
    /**
     * InfrastructureServices IP ranges.
     */
    readonly infrastructureServices: types.outputs.InfrastructureServicesResponse;
    /**
     * IPv4 Network Fabric Controller Address Space.
     */
    readonly ipv4AddressSpace?: string;
    /**
     * IPv6 Network Fabric Controller Address Space.
     */
    readonly ipv6AddressSpace?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Managed Resource Group configuration properties.
     */
    readonly managedResourceGroupConfiguration?: types.outputs.ManagedResourceGroupConfigurationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The NF-ID will be an input parameter used by the NF to link and get associated with the parent NFC Service.
     */
    readonly networkFabricIds: string[];
    /**
     * The Operational Status would always be NULL. Look only in to the Provisioning state for the latest status.
     */
    readonly operationalState: string;
    /**
     * Provides you the latest status of the NFC service, whether it is Accepted, updating, Succeeded or Failed. During this process, the states keep changing based on the status of NFC provisioning.
     */
    readonly provisioningState: string;
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
    /**
     * As part of an update, the workload ExpressRoute CircuitID should be provided to create and Provision a NFC. This Express route is dedicated for Workload services. (This is a Mandatory attribute).
     */
    readonly workloadExpressRouteConnections?: types.outputs.ExpressRouteConnectionInformationResponse[];
    /**
     * A workload management network is required for all the tenant (workload) traffic. This traffic is only dedicated for Tenant workloads which are required to access internet or any other MSFT/Public endpoints.
     */
    readonly workloadManagementNetwork: boolean;
    /**
     * WorkloadServices IP ranges.
     */
    readonly workloadServices: types.outputs.WorkloadServicesResponse;
}
/**
 * Shows the provisioning status of Network Fabric Controller.
 */
export function getNetworkFabricControllerOutput(args: GetNetworkFabricControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFabricControllerResult> {
    return pulumi.output(args).apply((a: any) => getNetworkFabricController(a, opts))
}

export interface GetNetworkFabricControllerOutputArgs {
    /**
     * Name of the Network Fabric Controller
     */
    networkFabricControllerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
