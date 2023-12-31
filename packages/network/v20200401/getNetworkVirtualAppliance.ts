import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Network Virtual Appliance.
 */
export function getNetworkVirtualAppliance(args: GetNetworkVirtualApplianceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkVirtualApplianceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20200401:getNetworkVirtualAppliance", {
        "expand": args.expand,
        "networkVirtualApplianceName": args.networkVirtualApplianceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkVirtualApplianceArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of Network Virtual Appliance.
     */
    networkVirtualApplianceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * NetworkVirtualAppliance Resource.
 */
export interface GetNetworkVirtualApplianceResult {
    /**
     * BootStrapConfigurationBlob storage URLs.
     */
    readonly bootStrapConfigurationBlob?: string[];
    /**
     * CloudInitConfigurationBlob storage URLs.
     */
    readonly cloudInitConfigurationBlob?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The service principal that has read access to cloud-init and config blob.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Network Virtual Appliance SKU.
     */
    readonly sku?: types.outputs.VirtualApplianceSkuPropertiesResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * VirtualAppliance ASN.
     */
    readonly virtualApplianceAsn?: number;
    /**
     * List of Virtual Appliance Network Interfaces.
     */
    readonly virtualApplianceNics: types.outputs.VirtualApplianceNicPropertiesResponse[];
    /**
     * The Virtual Hub where Network Virtual Appliance is being deployed.
     */
    readonly virtualHub?: types.outputs.SubResourceResponse;
}
/**
 * Gets the specified Network Virtual Appliance.
 */
export function getNetworkVirtualApplianceOutput(args: GetNetworkVirtualApplianceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkVirtualApplianceResult> {
    return pulumi.output(args).apply((a: any) => getNetworkVirtualAppliance(a, opts))
}

export interface GetNetworkVirtualApplianceOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of Network Virtual Appliance.
     */
    networkVirtualApplianceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
