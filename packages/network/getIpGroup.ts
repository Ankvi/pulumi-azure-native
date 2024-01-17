import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified ipGroups.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export function getIpGroup(args: GetIpGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetIpGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getIpGroup", {
        "expand": args.expand,
        "ipGroupsName": args.ipGroupsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpGroupArgs {
    /**
     * Expands resourceIds (of Firewalls/Network Security Groups etc.) back referenced by the IpGroups resource.
     */
    expand?: string;
    /**
     * The name of the ipGroups.
     */
    ipGroupsName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The IpGroups resource information.
 */
export interface GetIpGroupResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * List of references to Firewall Policies resources that this IpGroups is associated with.
     */
    readonly firewallPolicies: types.outputs.SubResourceResponse[];
    /**
     * List of references to Firewall resources that this IpGroups is associated with.
     */
    readonly firewalls: types.outputs.SubResourceResponse[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * IpAddresses/IpAddressPrefixes in the IpGroups resource.
     */
    readonly ipAddresses?: string[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the IpGroups resource.
     */
    readonly provisioningState: string;
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
 * Gets the specified ipGroups.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export function getIpGroupOutput(args: GetIpGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpGroupResult> {
    return pulumi.output(args).apply((a: any) => getIpGroup(a, opts))
}

export interface GetIpGroupOutputArgs {
    /**
     * Expands resourceIds (of Firewalls/Network Security Groups etc.) back referenced by the IpGroups resource.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the ipGroups.
     */
    ipGroupsName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}