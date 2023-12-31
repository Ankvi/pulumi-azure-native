import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified packet core control plane.
 */
export function getPacketCoreControlPlane(args: GetPacketCoreControlPlaneArgs, opts?: pulumi.InvokeOptions): Promise<GetPacketCoreControlPlaneResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork/v20220301preview:getPacketCoreControlPlane", {
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPacketCoreControlPlaneArgs {
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Packet core control plane resource.
 */
export interface GetPacketCoreControlPlaneResult {
    /**
     * The control plane interface on the access network. In 5G networks this is called as N2 interface whereas in 4G networks this is called as S1-MME interface.
     */
    readonly controlPlaneAccessInterface: types.outputs.InterfacePropertiesResponse;
    /**
     * The core network technology generation.
     */
    readonly coreNetworkTechnology?: string;
    /**
     * The timestamp of resource creation (UTC).
     */
    readonly createdAt?: string;
    /**
     * The identity that created the resource.
     */
    readonly createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    readonly createdByType?: string;
    /**
     * Azure ARC custom location where the packet core is deployed.
     */
    readonly customLocation?: types.outputs.CustomLocationResourceIdResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    readonly lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    readonly lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    readonly lastModifiedByType?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Mobile network that this packet core control plane belongs to
     */
    readonly mobileNetwork: types.outputs.MobileNetworkResourceIdResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the packet core control plane resource.
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
     * The version of the packet core software that is deployed.
     */
    readonly version?: string;
}
/**
 * Gets information about the specified packet core control plane.
 */
export function getPacketCoreControlPlaneOutput(args: GetPacketCoreControlPlaneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPacketCoreControlPlaneResult> {
    return pulumi.output(args).apply((a: any) => getPacketCoreControlPlane(a, opts))
}

export interface GetPacketCoreControlPlaneOutputArgs {
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
