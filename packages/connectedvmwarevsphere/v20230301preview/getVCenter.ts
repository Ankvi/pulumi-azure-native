import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Implements vCenter GET method.
 */
export function getVCenter(args: GetVCenterArgs, opts?: pulumi.InvokeOptions): Promise<GetVCenterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere/v20230301preview:getVCenter", {
        "resourceGroupName": args.resourceGroupName,
        "vcenterName": args.vcenterName,
    }, opts);
}

export interface GetVCenterArgs {
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
    /**
     * Name of the vCenter.
     */
    vcenterName: string;
}

/**
 * Defines the vCenter.
 */
export interface GetVCenterResult {
    /**
     * Gets or sets the connection status to the vCenter.
     */
    readonly connectionStatus: string;
    /**
     * Username / Password Credentials to connect to vcenter.
     */
    readonly credentials?: types.outputs.connectedvmwarevsphere.v20230301preview.VICredentialResponse;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    readonly customResourceName: string;
    /**
     * Gets or sets the extended location.
     */
    readonly extendedLocation?: types.outputs.connectedvmwarevsphere.v20230301preview.ExtendedLocationResponse;
    /**
     * Gets or sets the FQDN/IPAddress of the vCenter.
     */
    readonly fqdn: string;
    /**
     * Gets or sets the Id.
     */
    readonly id: string;
    /**
     * Gets or sets the instance UUID of the vCenter.
     */
    readonly instanceUuid: string;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * Gets or sets the port of the vCenter.
     */
    readonly port?: number;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The resource status information.
     */
    readonly statuses: types.outputs.connectedvmwarevsphere.v20230301preview.ResourceStatusResponse[];
    /**
     * The system data.
     */
    readonly systemData: types.outputs.connectedvmwarevsphere.v20230301preview.SystemDataResponse;
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
     * Gets or sets the version of the vCenter.
     */
    readonly version: string;
}
/**
 * Implements vCenter GET method.
 */
export function getVCenterOutput(args: GetVCenterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVCenterResult> {
    return pulumi.output(args).apply((a: any) => getVCenter(a, opts))
}

export interface GetVCenterOutputArgs {
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vCenter.
     */
    vcenterName: pulumi.Input<string>;
}
