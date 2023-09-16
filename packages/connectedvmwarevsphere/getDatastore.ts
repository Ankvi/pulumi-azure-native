import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements datastore GET method.
 * Azure REST API version: 2022-07-15-preview.
 */
export function getDatastore(args: GetDatastoreArgs, opts?: pulumi.InvokeOptions): Promise<GetDatastoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere:getDatastore", {
        "datastoreName": args.datastoreName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatastoreArgs {
    /**
     * Name of the datastore.
     */
    datastoreName: string;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
}

/**
 * Define the datastore.
 */
export interface GetDatastoreResult {
    /**
     * Gets or sets Maximum capacity of this datastore in GBs.
     */
    readonly capacityGB: number;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    readonly customResourceName: string;
    /**
     * Gets or sets the extended location.
     */
    readonly extendedLocation?: types.outputs.connectedvmwarevsphere.ExtendedLocationResponse;
    /**
     * Gets or sets Available space of this datastore in GBs.
     */
    readonly freeSpaceGB: number;
    /**
     * Gets or sets the Id.
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the datastore.
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
     * Gets or sets the vCenter Managed Object name for the datastore.
     */
    readonly moName: string;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the datastore.
     */
    readonly moRefId?: string;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
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
     * Gets or sets the ARM Id of the vCenter resource in which this datastore resides.
     */
    readonly vCenterId?: string;
}
/**
 * Implements datastore GET method.
 * Azure REST API version: 2022-07-15-preview.
 */
export function getDatastoreOutput(args: GetDatastoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatastoreResult> {
    return pulumi.output(args).apply((a: any) => getDatastore(a, opts))
}

export interface GetDatastoreOutputArgs {
    /**
     * Name of the datastore.
     */
    datastoreName: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
}
