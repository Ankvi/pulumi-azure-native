import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a P2SVpnServerConfiguration.
 *
 * Uses Azure REST API version 2019-07-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getP2sVpnServerConfiguration(args: GetP2sVpnServerConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetP2sVpnServerConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getP2sVpnServerConfiguration", {
        "p2SVpnServerConfigurationName": args.p2SVpnServerConfigurationName,
        "resourceGroupName": args.resourceGroupName,
        "virtualWanName": args.virtualWanName,
    }, opts);
}

export interface GetP2sVpnServerConfigurationArgs {
    /**
     * The name of the P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigurationName: string;
    /**
     * The resource group name of the P2SVpnServerConfiguration.
     */
    resourceGroupName: string;
    /**
     * The name of the VirtualWan.
     */
    virtualWanName: string;
}

/**
 * P2SVpnServerConfiguration Resource.
 */
export interface GetP2sVpnServerConfigurationResult {
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
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Properties of the P2SVpnServer configuration.
     */
    readonly properties: types.outputs.P2SVpnServerConfigurationPropertiesResponse;
}
/**
 * Retrieves the details of a P2SVpnServerConfiguration.
 *
 * Uses Azure REST API version 2019-07-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getP2sVpnServerConfigurationOutput(args: GetP2sVpnServerConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetP2sVpnServerConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getP2sVpnServerConfiguration", {
        "p2SVpnServerConfigurationName": args.p2SVpnServerConfigurationName,
        "resourceGroupName": args.resourceGroupName,
        "virtualWanName": args.virtualWanName,
    }, opts);
}

export interface GetP2sVpnServerConfigurationOutputArgs {
    /**
     * The name of the P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigurationName: pulumi.Input<string>;
    /**
     * The resource group name of the P2SVpnServerConfiguration.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualWan.
     */
    virtualWanName: pulumi.Input<string>;
}