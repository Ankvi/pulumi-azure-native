import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the DNSSEC configuration.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export function getDnssecConfig(args: GetDnssecConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetDnssecConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dns:getDnssecConfig", {
        "resourceGroupName": args.resourceGroupName,
        "zoneName": args.zoneName,
    }, opts);
}

export interface GetDnssecConfigArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the DNS zone (without a terminating dot).
     */
    zoneName: string;
}

/**
 * Represents the DNSSEC configuration.
 */
export interface GetDnssecConfigResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The etag of the DNSSEC configuration.
     */
    readonly etag?: string;
    /**
     * The ID of the DNSSEC configuration.
     */
    readonly id: string;
    /**
     * The name of the DNSSEC configuration.
     */
    readonly name: string;
    /**
     * Provisioning State of the DNSSEC configuration.
     */
    readonly provisioningState: string;
    /**
     * The list of signing keys.
     */
    readonly signingKeys: types.outputs.SigningKeyResponse[];
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the DNSSEC configuration.
     */
    readonly type: string;
}
/**
 * Gets the DNSSEC configuration.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export function getDnssecConfigOutput(args: GetDnssecConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDnssecConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dns:getDnssecConfig", {
        "resourceGroupName": args.resourceGroupName,
        "zoneName": args.zoneName,
    }, opts);
}

export interface GetDnssecConfigOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DNS zone (without a terminating dot).
     */
    zoneName: pulumi.Input<string>;
}