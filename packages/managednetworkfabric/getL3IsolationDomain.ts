import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves details of this L3 Isolation Domain.
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getL3IsolationDomain(args: GetL3IsolationDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetL3IsolationDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getL3IsolationDomain", {
        "l3IsolationDomainName": args.l3IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL3IsolationDomainArgs {
    /**
     * Name of the L3 Isolation Domain
     */
    l3IsolationDomainName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The L3IsolationDomain resource definition.
 */
export interface GetL3IsolationDomainResult {
    /**
     * Administrative state of the IsolationDomain. Example: Enabled | Disabled.
     */
    readonly administrativeState: string;
    /**
     * List of Ipv4 and Ipv6 route configurations.
     */
    readonly aggregateRouteConfiguration?: types.outputs.AggregateRouteConfigurationResponse;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Connected Subnet RoutePolicy
     */
    readonly connectedSubnetRoutePolicy?: types.outputs.L3IsolationDomainPatchPropertiesResponseConnectedSubnetRoutePolicy;
    /**
     * L3 Isolation Domain description.
     */
    readonly description?: string;
    /**
     * List of resources the L3 Isolation Domain is disabled on. Can be either entire NetworkFabric or NetworkRack.
     */
    readonly disabledOnResources: string[];
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
     * Network Fabric ARM resource id.
     */
    readonly networkFabricId: string;
    /**
     * List of resources the OptionB is disabled on. Can be either entire NetworkFabric or NetworkRack.
     */
    readonly optionBDisabledOnResources: string[];
    /**
     * Gets the provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Advertise Connected Subnets. Ex: "True" | "False".
     */
    readonly redistributeConnectedSubnets?: string;
    /**
     * Advertise Static Routes. Ex: "True" | "False".
     */
    readonly redistributeStaticRoutes?: string;
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
 * Retrieves details of this L3 Isolation Domain.
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getL3IsolationDomainOutput(args: GetL3IsolationDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetL3IsolationDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getL3IsolationDomain", {
        "l3IsolationDomainName": args.l3IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL3IsolationDomainOutputArgs {
    /**
     * Name of the L3 Isolation Domain
     */
    l3IsolationDomainName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}