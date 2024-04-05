import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements VMMServer GET method.
 */
export function getVmmServer(args: GetVmmServerArgs, opts?: pulumi.InvokeOptions): Promise<GetVmmServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm/v20231007:getVmmServer", {
        "resourceGroupName": args.resourceGroupName,
        "vmmServerName": args.vmmServerName,
    }, opts);
}

export interface GetVmmServerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
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
     * Gets the connection status to the vmmServer.
     */
    readonly connectionStatus: string;
    /**
     * Credentials to connect to VMMServer.
     */
    readonly credentials?: types.outputs.VMMCredentialResponse;
    /**
     * Gets any error message if connection to vmmServer is having any issue.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Port is the port on which the vmmServer is listening.
     */
    readonly port?: number;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
 */
export function getVmmServerOutput(args: GetVmmServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVmmServerResult> {
    return pulumi.output(args).apply((a: any) => getVmmServer(a, opts))
}

export interface GetVmmServerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the VMMServer.
     */
    vmmServerName: pulumi.Input<string>;
}