import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Bastion Host.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getBastionHost(args: GetBastionHostArgs, opts?: pulumi.InvokeOptions): Promise<GetBastionHostResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getBastionHost", {
        "bastionHostName": args.bastionHostName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBastionHostArgs {
    /**
     * The name of the Bastion Host.
     */
    bastionHostName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Bastion Host resource.
 */
export interface GetBastionHostResult {
    /**
     * Enable/Disable Copy/Paste feature of the Bastion Host resource.
     */
    readonly disableCopyPaste?: boolean;
    /**
     * FQDN for the endpoint on which bastion host is accessible.
     */
    readonly dnsName?: string;
    /**
     * Enable/Disable File Copy feature of the Bastion Host resource.
     */
    readonly enableFileCopy?: boolean;
    /**
     * Enable/Disable IP Connect feature of the Bastion Host resource.
     */
    readonly enableIpConnect?: boolean;
    /**
     * Enable/Disable Kerberos feature of the Bastion Host resource.
     */
    readonly enableKerberos?: boolean;
    /**
     * Enable/Disable Shareable Link of the Bastion Host resource.
     */
    readonly enableShareableLink?: boolean;
    /**
     * Enable/Disable Tunneling feature of the Bastion Host resource.
     */
    readonly enableTunneling?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * IP configuration of the Bastion Host resource.
     */
    readonly ipConfigurations?: types.outputs.BastionHostIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the bastion host resource.
     */
    readonly provisioningState: string;
    /**
     * The scale units for the Bastion Host resource.
     */
    readonly scaleUnits?: number;
    /**
     * The sku of this Bastion Host.
     */
    readonly sku?: types.outputs.SkuResponse;
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
 * Gets the specified Bastion Host.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getBastionHostOutput(args: GetBastionHostOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBastionHostResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getBastionHost", {
        "bastionHostName": args.bastionHostName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBastionHostOutputArgs {
    /**
     * The name of the Bastion Host.
     */
    bastionHostName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}