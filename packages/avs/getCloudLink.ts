import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A cloud link resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getCloudLink(args: GetCloudLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getCloudLink", {
        "cloudLinkName": args.cloudLinkName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudLinkArgs {
    /**
     * Name of the cloud link resource
     */
    cloudLinkName: string;
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A cloud link resource
 */
export interface GetCloudLinkResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Identifier of the other private cloud participating in the link.
     */
    readonly linkedCloud?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the cloud link.
     */
    readonly status: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * A cloud link resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getCloudLinkOutput(args: GetCloudLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCloudLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getCloudLink", {
        "cloudLinkName": args.cloudLinkName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudLinkOutputArgs {
    /**
     * Name of the cloud link resource
     */
    cloudLinkName: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}