import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements VMMServer GET method.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 *
 * Other available API versions: 2022-05-21-preview, 2023-10-07, 2024-06-01, 2025-03-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native scvmm [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVmmServer(args: GetVmmServerArgs, opts?: pulumi.InvokeOptions): Promise<GetVmmServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm:getVmmServer", {
        "resourceGroupName": args.resourceGroupName,
        "vmmServerName": args.vmmServerName,
    }, opts);
}

export interface GetVmmServerArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Name of the VMMServer.
     */
    vmmServerName: string;
}

/**
 * The VmmServers resource definition.
 */
export interface GetVmmServerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets or sets the connection status to the vmmServer.
     */
    readonly connectionStatus: string;
    /**
     * Credentials to connect to VMMServer.
     */
    readonly credentials?: types.outputs.VMMServerPropertiesResponseCredentials;
    /**
     * Gets or sets any error message if connection to vmmServer is having any issue.
     */
    readonly errorMessage: string;
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fqdn is the hostname/ip of the vmmServer.
     */
    readonly fqdn: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Port is the port on which the vmmServer is listening.
     */
    readonly port?: number;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource Type
     */
    readonly type: string;
    /**
     * Unique ID of vmmServer.
     */
    readonly uuid: string;
    /**
     * Version is the version of the vmmSever.
     */
    readonly version: string;
}
/**
 * Implements VMMServer GET method.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 *
 * Other available API versions: 2022-05-21-preview, 2023-10-07, 2024-06-01, 2025-03-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native scvmm [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVmmServerOutput(args: GetVmmServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVmmServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:scvmm:getVmmServer", {
        "resourceGroupName": args.resourceGroupName,
        "vmmServerName": args.vmmServerName,
    }, opts);
}

export interface GetVmmServerOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the VMMServer.
     */
    vmmServerName: pulumi.Input<string>;
}