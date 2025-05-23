import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a dedicated host group.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDedicatedHostGroup(args: GetDedicatedHostGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDedicatedHostGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getDedicatedHostGroup", {
        "expand": args.expand,
        "hostGroupName": args.hostGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedHostGroupArgs {
    /**
     * The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the dedicated hosts under the dedicated host group. 'UserData' is not supported for dedicated host group.
     */
    expand?: string;
    /**
     * The name of the dedicated host group.
     */
    hostGroupName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the dedicated host group that the dedicated hosts should be assigned to. Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group.
 */
export interface GetDedicatedHostGroupResult {
    /**
     * Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01.
     */
    readonly additionalCapabilities?: types.outputs.DedicatedHostGroupPropertiesResponseAdditionalCapabilities;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A list of references to all dedicated hosts in the dedicated host group.
     */
    readonly hosts: types.outputs.SubResourceReadOnlyResponse[];
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The dedicated host group instance view, which has the list of instance view of the dedicated hosts under the dedicated host group.
     */
    readonly instanceView: types.outputs.DedicatedHostGroupInstanceViewResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Number of fault domains that the host group can span.
     */
    readonly platformFaultDomainCount: number;
    /**
     * Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01.
     */
    readonly supportAutomaticPlacement?: boolean;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.
     */
    readonly zones?: string[];
}
/**
 * Retrieves information about a dedicated host group.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDedicatedHostGroupOutput(args: GetDedicatedHostGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDedicatedHostGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getDedicatedHostGroup", {
        "expand": args.expand,
        "hostGroupName": args.hostGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedHostGroupOutputArgs {
    /**
     * The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the dedicated hosts under the dedicated host group. 'UserData' is not supported for dedicated host group.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the dedicated host group.
     */
    hostGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}