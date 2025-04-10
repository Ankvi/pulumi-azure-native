import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements L2 Isolation Domain GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getL2IsolationDomain(args: GetL2IsolationDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetL2IsolationDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getL2IsolationDomain", {
        "l2IsolationDomainName": args.l2IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL2IsolationDomainArgs {
    /**
     * Name of the L2 Isolation Domain
     */
    l2IsolationDomainName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The L2IsolationDomain resource definition.
 */
export interface GetL2IsolationDomainResult {
    /**
     * state. Example: Enabled | Disabled. It indicates administrative state of the isolationDomain, whether it is enabled or disabled. If enabled, the configuration is applied on the devices. If disabled, the configuration is removed from the devices
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * List of resources the L2 Isolation Domain is disabled on. Can be either entire NetworkFabric or NetworkRack.
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
     * maximum transmission unit. Default value is 1500.
     */
    readonly mtu?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network Fabric ARM resource id.
     */
    readonly networkFabricId: string;
    /**
     * Gets the provisioning state of the resource.
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
     * vlanId. Example: 501.
     */
    readonly vlanId: number;
}
/**
 * Implements L2 Isolation Domain GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getL2IsolationDomainOutput(args: GetL2IsolationDomainOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetL2IsolationDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getL2IsolationDomain", {
        "l2IsolationDomainName": args.l2IsolationDomainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL2IsolationDomainOutputArgs {
    /**
     * Name of the L2 Isolation Domain
     */
    l2IsolationDomainName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}