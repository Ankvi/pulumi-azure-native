import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets properties of a SAP HANA instance for the specified subscription, resource group, and instance name.
 */
export function getHanaInstance(args: GetHanaInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetHanaInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hanaonazure/v20171103preview:getHanaInstance", {
        "hanaInstanceName": args.hanaInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHanaInstanceArgs {
    /**
     * Name of the SAP HANA on Azure instance.
     */
    hanaInstanceName: string;
    /**
     * Name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * HANA instance info on Azure (ARM properties and HANA properties)
 */
export interface GetHanaInstanceResult {
    /**
     * Specifies the HANA instance unique ID.
     */
    readonly hanaInstanceId: string;
    /**
     * Specifies the hardware settings for the HANA instance.
     */
    readonly hardwareProfile?: types.outputs.hanaonazure.v20171103preview.HardwareProfileResponse;
    /**
     * Hardware revision of a HANA instance
     */
    readonly hwRevision: string;
    /**
     * Resource ID
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Specifies the network settings for the HANA instance.
     */
    readonly networkProfile?: types.outputs.hanaonazure.v20171103preview.NetworkProfileResponse;
    /**
     * Specifies the operating system settings for the HANA instance.
     */
    readonly osProfile?: types.outputs.hanaonazure.v20171103preview.OSProfileResponse;
    /**
     * ARM ID of another HanaInstance that will share a network with this HanaInstance
     */
    readonly partnerNodeId?: string;
    /**
     * Resource power state
     */
    readonly powerState: string;
    /**
     * State of provisioning of the HanaInstance
     */
    readonly provisioningState: string;
    /**
     * Resource proximity placement group
     */
    readonly proximityPlacementGroup: string;
    /**
     * Specifies the storage settings for the HANA instance disks.
     */
    readonly storageProfile?: types.outputs.hanaonazure.v20171103preview.StorageProfileResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets properties of a SAP HANA instance for the specified subscription, resource group, and instance name.
 */
export function getHanaInstanceOutput(args: GetHanaInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHanaInstanceResult> {
    return pulumi.output(args).apply((a: any) => getHanaInstance(a, opts))
}

export interface GetHanaInstanceOutputArgs {
    /**
     * Name of the SAP HANA on Azure instance.
     */
    hanaInstanceName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
