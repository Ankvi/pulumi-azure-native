import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the private dns zone group resource by specified private dns zone group name.
 */
export function getPrivateDnsZoneGroup(args: GetPrivateDnsZoneGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateDnsZoneGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230201:getPrivateDnsZoneGroup", {
        "privateDnsZoneGroupName": args.privateDnsZoneGroupName,
        "privateEndpointName": args.privateEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateDnsZoneGroupArgs {
    /**
     * The name of the private dns zone group.
     */
    privateDnsZoneGroupName: string;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Private dns zone group resource.
 */
export interface GetPrivateDnsZoneGroupResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * A collection of private dns zone configurations of the private dns zone group.
     */
    readonly privateDnsZoneConfigs?: types.outputs.PrivateDnsZoneConfigResponse[];
    /**
     * The provisioning state of the private dns zone group resource.
     */
    readonly provisioningState: string;
}
/**
 * Gets the private dns zone group resource by specified private dns zone group name.
 */
export function getPrivateDnsZoneGroupOutput(args: GetPrivateDnsZoneGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateDnsZoneGroupResult> {
    return pulumi.output(args).apply((a: any) => getPrivateDnsZoneGroup(a, opts))
}

export interface GetPrivateDnsZoneGroupOutputArgs {
    /**
     * The name of the private dns zone group.
     */
    privateDnsZoneGroupName: pulumi.Input<string>;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
