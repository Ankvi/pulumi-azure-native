import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the status of Attestation Provider.
 *
 * Uses Azure REST API version 2021-06-01.
 */
export function getAttestationProvider(args: GetAttestationProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetAttestationProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:attestation:getAttestationProvider", {
        "providerName": args.providerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAttestationProviderArgs {
    /**
     * Name of the attestation provider.
     */
    providerName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Attestation service response message.
 */
export interface GetAttestationProviderResult {
    /**
     * Gets the uri of attestation service
     */
    readonly attestUri?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * List of private endpoint connections associated with the attestation provider.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Controls whether traffic from the public network is allowed to access the Attestation Provider APIs.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Status of attestation service.
     */
    readonly status?: string;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The setting that controls whether authentication is enabled or disabled for TPM Attestation REST APIs.
     */
    readonly tpmAttestationAuthentication?: string;
    /**
     * Trust model for the attestation provider.
     */
    readonly trustModel?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the status of Attestation Provider.
 *
 * Uses Azure REST API version 2021-06-01.
 */
export function getAttestationProviderOutput(args: GetAttestationProviderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAttestationProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:attestation:getAttestationProvider", {
        "providerName": args.providerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAttestationProviderOutputArgs {
    /**
     * Name of the attestation provider.
     */
    providerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}