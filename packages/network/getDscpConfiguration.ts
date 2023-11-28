import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a DSCP Configuration.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01.
 */
export function getDscpConfiguration(args: GetDscpConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDscpConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getDscpConfiguration", {
        "dscpConfigurationName": args.dscpConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDscpConfigurationArgs {
    /**
     * The name of the resource.
     */
    dscpConfigurationName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Differentiated Services Code Point configuration for any given network interface
 */
export interface GetDscpConfigurationResult {
    /**
     * Associated Network Interfaces to the DSCP Configuration.
     */
    readonly associatedNetworkInterfaces: types.outputs.NetworkInterfaceResponse[];
    /**
     * Destination IP ranges.
     */
    readonly destinationIpRanges?: types.outputs.QosIpRangeResponse[];
    /**
     * Destination port ranges.
     */
    readonly destinationPortRanges?: types.outputs.QosPortRangeResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * List of markings to be used in the configuration.
     */
    readonly markings?: number[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * RNM supported protocol types.
     */
    readonly protocol?: string;
    /**
     * The provisioning state of the DSCP Configuration resource.
     */
    readonly provisioningState: string;
    /**
     * Qos Collection ID generated by RNM.
     */
    readonly qosCollectionId: string;
    /**
     * QoS object definitions
     */
    readonly qosDefinitionCollection?: types.outputs.QosDefinitionResponse[];
    /**
     * The resource GUID property of the DSCP Configuration resource.
     */
    readonly resourceGuid: string;
    /**
     * Source IP ranges.
     */
    readonly sourceIpRanges?: types.outputs.QosIpRangeResponse[];
    /**
     * Sources port ranges.
     */
    readonly sourcePortRanges?: types.outputs.QosPortRangeResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a DSCP Configuration.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01.
 */
export function getDscpConfigurationOutput(args: GetDscpConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDscpConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getDscpConfiguration(a, opts))
}

export interface GetDscpConfigurationOutputArgs {
    /**
     * The name of the resource.
     */
    dscpConfigurationName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
