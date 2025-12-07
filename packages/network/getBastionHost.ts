import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Bastion Host.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Enable/Disable Private Only feature of the Bastion Host resource.
     */
    readonly enablePrivateOnlyBastion?: boolean;
    /**
     * Enable/Disable Session Recording feature of the Bastion Host resource.
     */
    readonly enableSessionRecording?: boolean;
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
    readonly networkAcls?: types.outputs.BastionHostPropertiesFormatResponseNetworkAcls;
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
    /**
     * Reference to an existing virtual network required for Developer Bastion Host only.
     */
    readonly virtualNetwork?: types.outputs.SubResourceResponse;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified Bastion Host.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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