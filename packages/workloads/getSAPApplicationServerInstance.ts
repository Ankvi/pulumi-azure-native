import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the SAP Application Server Instance corresponding to the Virtual Instance for SAP solutions resource.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2021-12-01-preview, 2023-10-01-preview.
 */
export function getSAPApplicationServerInstance(args: GetSAPApplicationServerInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPApplicationServerInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSAPApplicationServerInstance", {
        "applicationInstanceName": args.applicationInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "sapVirtualInstanceName": args.sapVirtualInstanceName,
    }, opts);
}

export interface GetSAPApplicationServerInstanceArgs {
    /**
     * The name of SAP Application Server instance resource.
     */
    applicationInstanceName: string;
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
 * Define the SAP Application Server Instance resource.
 */
export interface GetSAPApplicationServerInstanceResult {
    /**
     * Defines the Application Instance errors.
     */
    readonly errors: types.outputs.SAPVirtualInstanceErrorResponse;
    /**
     * Application server instance gateway Port.
     */
    readonly gatewayPort: number;
    /**
     * Defines the health of SAP Instances.
     */
    readonly health: string;
    /**
     * Application server instance SAP hostname.
     */
    readonly hostname: string;
    /**
     * Application server instance ICM HTTP Port.
     */
    readonly icmHttpPort: number;
    /**
     * Application server instance ICM HTTPS Port.
     */
    readonly icmHttpsPort: number;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Application server Instance Number.
     */
    readonly instanceNo: string;
    /**
     *  Application server instance SAP IP Address.
     */
    readonly ipAddress: string;
    /**
     * Application server instance SAP Kernel Patch level.
     */
    readonly kernelPatch: string;
    /**
     *  Application server instance SAP Kernel Version.
     */
    readonly kernelVersion: string;
    /**
     * The Load Balancer details such as LoadBalancer ID attached to Application Server Virtual Machines
     */
    readonly loadBalancerDetails: types.outputs.LoadBalancerDetailsResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
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
     * Application server Subnet.
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
     * The list of virtual machines.
     */
    readonly vmDetails: types.outputs.ApplicationServerVmDetailsResponse[];
}
/**
 * Gets the SAP Application Server Instance corresponding to the Virtual Instance for SAP solutions resource.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2021-12-01-preview, 2023-10-01-preview.
 */
export function getSAPApplicationServerInstanceOutput(args: GetSAPApplicationServerInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSAPApplicationServerInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSAPApplicationServerInstance", {
        "applicationInstanceName": args.applicationInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "sapVirtualInstanceName": args.sapVirtualInstanceName,
    }, opts);
}

export interface GetSAPApplicationServerInstanceOutputArgs {
    /**
     * The name of SAP Application Server instance resource.
     */
    applicationInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Virtual Instances for SAP solutions resource
     */
    sapVirtualInstanceName: pulumi.Input<string>;
}