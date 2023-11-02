import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Virtual Instance for SAP solutions resource
 */
export function getSAPVirtualInstance(args: GetSAPVirtualInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPVirtualInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20231001preview:getSAPVirtualInstance", {
        "resourceGroupName": args.resourceGroupName,
        "sapVirtualInstanceName": args.sapVirtualInstanceName,
    }, opts);
}

export interface GetSAPVirtualInstanceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Virtual Instances for SAP solutions resource
     */
    sapVirtualInstanceName: string;
}

/**
 * Define the Virtual Instance for SAP solutions resource.
 */
export interface GetSAPVirtualInstanceResult {
    /**
     * Defines if the SAP system is being created using Azure Center for SAP solutions (ACSS) or if an existing SAP system is being registered with ACSS
     */
    readonly configuration: types.outputs.DeploymentConfigurationResponse | types.outputs.DeploymentWithOSConfigurationResponse | types.outputs.DiscoveryConfigurationResponse;
    /**
     * Defines the environment type - Production/Non Production.
     */
    readonly environment: string;
    /**
     * Indicates any errors on the Virtual Instance for SAP solutions resource.
     */
    readonly errors: types.outputs.SAPVirtualInstanceErrorResponse;
    /**
     * Defines the health of SAP Instances.
     */
    readonly health: string;
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
     * Specifies the network access configuration for the resources that will be deployed in the Managed Resource Group. The options to choose from are Public and Private. If 'Private' is chosen, the Storage Account service tag should be enabled on the subnets in which the SAP VMs exist. This is required for establishing connectivity between VM extensions and the managed resource group storage account. This setting is currently applicable only to Storage Account. Learn more here https://go.microsoft.com/fwlink/?linkid=2247228
     */
    readonly managedResourcesNetworkAccessType?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the provisioning states.
     */
    readonly provisioningState: string;
    /**
     * Defines the SAP Product type.
     */
    readonly sapProduct: string;
    /**
     * Defines the Virtual Instance for SAP state.
     */
    readonly state: string;
    /**
     * Defines the SAP Instance status.
     */
    readonly status: string;
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
 * Gets a Virtual Instance for SAP solutions resource
 */
export function getSAPVirtualInstanceOutput(args: GetSAPVirtualInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSAPVirtualInstanceResult> {
    return pulumi.output(args).apply((a: any) => getSAPVirtualInstance(a, opts))
}

export interface GetSAPVirtualInstanceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Virtual Instances for SAP solutions resource
     */
    sapVirtualInstanceName: pulumi.Input<string>;
}
