import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a connector resource
 */
export function getConnector(args: GetConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20231001preview:getConnector", {
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectorArgs {
    /**
     * The name of the connector resource
     */
    connectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Define the connector resource.
 */
export interface GetConnectorResult {
    /**
     * Indicates any errors on the connector resource.
     */
    readonly errors: types.outputs.ConnectorErrorDefinitionResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed service identity (user assigned identities)
     */
    readonly identity?: types.outputs.UserAssignedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Managed resource group configuration
     */
    readonly managedResourceGroupConfiguration?: types.outputs.ManagedRGConfigurationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the provisioning states.
     */
    readonly provisioningState: string;
    /**
     * Defines the ID of the connector's source resource.
     */
    readonly sourceResourceId: string;
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
 * Gets a connector resource
 */
export function getConnectorOutput(args: GetConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectorResult> {
    return pulumi.output(args).apply((a: any) => getConnector(a, opts))
}

export interface GetConnectorOutputArgs {
    /**
     * The name of the connector resource
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}