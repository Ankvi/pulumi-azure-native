import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified IpAllocation by resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIpAllocation(args: GetIpAllocationArgs, opts?: pulumi.InvokeOptions): Promise<GetIpAllocationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getIpAllocation", {
        "expand": args.expand,
        "ipAllocationName": args.ipAllocationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpAllocationArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the IpAllocation.
     */
    ipAllocationName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * IpAllocation resource.
 */
export interface GetIpAllocationResult {
    /**
     * IpAllocation tags.
     */
    readonly allocationTags?: {[key: string]: string};
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The IPAM allocation ID.
     */
    readonly ipamAllocationId?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The address prefix for the IpAllocation.
     */
    readonly prefix?: string;
    /**
     * The address prefix length for the IpAllocation.
     */
    readonly prefixLength?: number;
    /**
     * The address prefix Type for the IpAllocation.
     */
    readonly prefixType?: string;
    /**
     * The Subnet that using the prefix of this IpAllocation resource.
     */
    readonly subnet: types.outputs.SubResourceResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The VirtualNetwork that using the prefix of this IpAllocation resource.
     */
    readonly virtualNetwork: types.outputs.SubResourceResponse;
}
/**
 * Gets the specified IpAllocation by resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIpAllocationOutput(args: GetIpAllocationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIpAllocationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getIpAllocation", {
        "expand": args.expand,
        "ipAllocationName": args.ipAllocationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpAllocationOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the IpAllocation.
     */
    ipAllocationName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}