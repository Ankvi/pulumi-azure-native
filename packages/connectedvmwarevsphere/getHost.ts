import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements host GET method.
 * Azure REST API version: 2022-07-15-preview.
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
     * Gets the name of the corresponding resource in Kubernetes.
     */
    readonly customResourceName: string;
    /**
     * Gets or sets the datastore ARM ids.
     */
    readonly datastoreIds: string[];
    /**
     * Gets or sets the extended location.
     */
    readonly extendedLocation?: types.outputs.connectedvmwarevsphere.ExtendedLocationResponse;
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
     * Gets or sets the network ARM ids.
     */
    readonly networkIds: string[];
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The resource status information.
     */
    readonly statuses: types.outputs.connectedvmwarevsphere.ResourceStatusResponse[];
    /**
     * The system data.
     */
    readonly systemData: types.outputs.connectedvmwarevsphere.SystemDataResponse;
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
 * Azure REST API version: 2022-07-15-preview.
 */
export function getHostOutput(args: GetHostOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHostResult> {
    return pulumi.output(args).apply((a: any) => getHost(a, opts))
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
