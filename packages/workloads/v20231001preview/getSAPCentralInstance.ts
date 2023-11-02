import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the SAP Central Services Instance resource.
 */
export function getSAPCentralInstance(args: GetSAPCentralInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPCentralInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20231001preview:getSAPCentralInstance", {
        "centralInstanceName": args.centralInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "sapVirtualInstanceName": args.sapVirtualInstanceName,
    }, opts);
}

export interface GetSAPCentralInstanceArgs {
    /**
     * Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
     */
    centralInstanceName: string;
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
 * Define the SAP Central Services Instance resource.
 */
export interface GetSAPCentralInstanceResult {
    /**
     * Defines the SAP Enqueue Replication Server (ERS) properties.
     */
    readonly enqueueReplicationServerProperties?: types.outputs.EnqueueReplicationServerPropertiesResponse;
    /**
     * Defines the SAP Enqueue Server properties.
     */
    readonly enqueueServerProperties?: types.outputs.EnqueueServerPropertiesResponse;
    /**
     * Defines the errors related to SAP Central Services Instance resource.
     */
    readonly errors: types.outputs.SAPVirtualInstanceErrorResponse;
    /**
     * Defines the SAP Gateway Server properties.
     */
    readonly gatewayServerProperties?: types.outputs.GatewayServerPropertiesResponse;
    /**
     * Defines the health of SAP Instances.
     */
    readonly health: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The central services instance number.
     */
    readonly instanceNo: string;
    /**
     * The central services instance Kernel Patch level.
     */
    readonly kernelPatch: string;
    /**
     * The central services instance Kernel Version.
     */
    readonly kernelVersion: string;
    /**
     * The Load Balancer details such as LoadBalancer ID attached to ASCS Virtual Machines
     */
    readonly loadBalancerDetails: types.outputs.LoadBalancerDetailsResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Defines the SAP message server properties.
     */
    readonly messageServerProperties?: types.outputs.MessageServerPropertiesResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the provisioning states.
     */
    readonly provisioningState: string;
    /**
     * Defines the SAP Instance status.
     */
    readonly status: string;
    /**
     * The central services instance subnet.
     */
    readonly subnet: string;
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
     * The list of virtual machines corresponding to the Central Services instance.
     */
    readonly vmDetails: types.outputs.CentralServerVmDetailsResponse[];
}
/**
 * Gets the SAP Central Services Instance resource.
 */
export function getSAPCentralInstanceOutput(args: GetSAPCentralInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSAPCentralInstanceResult> {
    return pulumi.output(args).apply((a: any) => getSAPCentralInstance(a, opts))
}

export interface GetSAPCentralInstanceOutputArgs {
    /**
     * Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
     */
    centralInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Virtual Instances for SAP solutions resource
     */
    sapVirtualInstanceName: pulumi.Input<string>;
}
