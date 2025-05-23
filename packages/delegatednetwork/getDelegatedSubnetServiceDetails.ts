import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details about the specified dnc DelegatedSubnet Link.
 *
 * Uses Azure REST API version 2023-06-27-preview.
 *
 * Other available API versions: 2021-03-15, 2023-05-18-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native delegatednetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDelegatedSubnetServiceDetails(args: GetDelegatedSubnetServiceDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetDelegatedSubnetServiceDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:delegatednetwork:getDelegatedSubnetServiceDetails", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetDelegatedSubnetServiceDetailsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
     */
    resourceName: string;
}

/**
 * Represents an instance of a orchestrator.
 */
export interface GetDelegatedSubnetServiceDetailsResult {
    /**
     * Defines prefix size of CIDR blocks allocated to nodes in VnetBlock Mode.
     * Delegated subnet's prefix size should be smaller than this by a minimum of 3.
     */
    readonly allocationBlockPrefixSize?: number;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Properties of the controller.
     */
    readonly controllerDetails?: types.outputs.ControllerDetailsResponse;
    /**
     * An identifier that represents the resource.
     */
    readonly id: string;
    /**
     * Location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The current state of dnc delegated subnet resource.
     */
    readonly provisioningState: string;
    /**
     * Resource guid.
     */
    readonly resourceGuid: string;
    /**
     * subnet details
     */
    readonly subnetDetails?: types.outputs.SubnetDetailsResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of resource.
     */
    readonly type: string;
}
/**
 * Gets details about the specified dnc DelegatedSubnet Link.
 *
 * Uses Azure REST API version 2023-06-27-preview.
 *
 * Other available API versions: 2021-03-15, 2023-05-18-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native delegatednetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDelegatedSubnetServiceDetailsOutput(args: GetDelegatedSubnetServiceDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDelegatedSubnetServiceDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:delegatednetwork:getDelegatedSubnetServiceDetails", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetDelegatedSubnetServiceDetailsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
     */
    resourceName: pulumi.Input<string>;
}