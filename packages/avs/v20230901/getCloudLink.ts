import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a CloudLink
 */
export function getCloudLink(args: GetCloudLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getCloudLink", {
        "cloudLinkName": args.cloudLinkName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudLinkArgs {
    /**
     * Name of the cloud link.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Identifier of the other private cloud participating in the link.
     */
    readonly linkedCloud?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The state of the cloud link.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a CloudLink
 */
export function getCloudLinkOutput(args: GetCloudLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudLinkResult> {
    return pulumi.output(args).apply((a: any) => getCloudLink(a, opts))
}

export interface GetCloudLinkOutputArgs {
    /**
     * Name of the cloud link.
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