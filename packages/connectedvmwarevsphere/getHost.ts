import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements host GET method.
 *
 * Uses Azure REST API version 2023-12-01.
 *
 * Other available API versions: 2022-07-15-preview, 2023-03-01-preview, 2023-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getHost(args: GetHostArgs, opts?: pulumi.InvokeOptions): Promise<GetHostResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere:getHost", {
        "hostName": args.hostName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHostArgs {
    /**
     * Name of the host.
     */
    hostName: string;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
}

/**
 * Define the host.
 */
export interface GetHostResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets the max CPU usage across all cores in MHz.
     */
    readonly cpuMhz: number;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    readonly customResourceName: string;
    /**
     * Gets the datastore ARM ids.
     */
    readonly datastoreIds: string[];
    /**
     * Gets or sets the extended location.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Gets or sets the Id.
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the host.
     */
    readonly inventoryItemId?: string;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Gets the total amount of physical memory on the host in GB.
     */
    readonly memorySizeGB: number;
    /**
     * Gets or sets the vCenter Managed Object name for the host.
     */
    readonly moName: string;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the host.
     */
    readonly moRefId?: string;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * Gets the network ARM ids.
     */
    readonly networkIds: string[];
    /**
     * Gets the used CPU usage across all cores in MHz.
     */
    readonly overallCpuUsageMHz: number;
    /**
     * Gets the used physical memory on the host in GB.
     */
    readonly overallMemoryUsageGB: number;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The resource status information.
     */
    readonly statuses: types.outputs.ResourceStatusResponse[];
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Gets or sets the Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    readonly uuid: string;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this host resides.
     */
    readonly vCenterId?: string;
}
/**
 * Implements host GET method.
 *
 * Uses Azure REST API version 2023-12-01.
 *
 * Other available API versions: 2022-07-15-preview, 2023-03-01-preview, 2023-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getHostOutput(args: GetHostOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHostResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedvmwarevsphere:getHost", {
        "hostName": args.hostName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHostOutputArgs {
    /**
     * Name of the host.
     */
    hostName: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
}