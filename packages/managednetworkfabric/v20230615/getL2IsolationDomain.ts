import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Implements L2 Isolation Domain GET method.
 */
export function getL2IsolationDomain(args: GetL2IsolationDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetL2IsolationDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getL2IsolationDomain", {
        "l2IsolationDomainName": args.l2IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL2IsolationDomainArgs {
    /**
     * Name of the L2 Isolation Domain.
     */
    l2IsolationDomainName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The L2 Isolation Domain resource definition.
 */
export interface GetL2IsolationDomainResult {
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maximum transmission unit. Default value is 1500.
     */
    readonly mtu?: number;
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.managednetworkfabric.v20230615.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Vlan Identifier of the Network Fabric. Example: 501.
     */
    readonly vlanId: number;
}
/**
 * Implements L2 Isolation Domain GET method.
 */
export function getL2IsolationDomainOutput(args: GetL2IsolationDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetL2IsolationDomainResult> {
    return pulumi.output(args).apply((a: any) => getL2IsolationDomain(a, opts))
}

export interface GetL2IsolationDomainOutputArgs {
    /**
     * Name of the L2 Isolation Domain.
     */
    l2IsolationDomainName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
