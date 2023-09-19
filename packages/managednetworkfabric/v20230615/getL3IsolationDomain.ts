import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves details of this L3 Isolation Domain.
 */
export function getL3IsolationDomain(args: GetL3IsolationDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetL3IsolationDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getL3IsolationDomain", {
        "l3IsolationDomainName": args.l3IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL3IsolationDomainArgs {
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
 * The L3 Isolation Domain resource definition.
 */
export interface GetL3IsolationDomainResult {
    /**
     * Administrative state of the resource.
     */
    readonly administrativeState: string;
    /**
     * Aggregate route configurations.
     */
    readonly aggregateRouteConfiguration?: types.outputs.AggregateRouteConfigurationResponse;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Configuration state of the resource.
     */
    readonly configurationState: string;
    /**
     * Connected Subnet RoutePolicy
     */
    readonly connectedSubnetRoutePolicy?: types.outputs.ConnectedSubnetRoutePolicyResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * ARM Resource ID of the Network Fabric.
     */
    readonly networkFabricId: string;
    /**
     * Provisioning state of the resource.
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
 */
export function getL3IsolationDomainOutput(args: GetL3IsolationDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetL3IsolationDomainResult> {
    return pulumi.output(args).apply((a: any) => getL3IsolationDomain(a, opts))
}

export interface GetL3IsolationDomainOutputArgs {
    /**
     * Name of the L3 Isolation Domain.
     */
    l3IsolationDomainName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
