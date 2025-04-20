import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A FluidRelay Server.
 *
 * Uses Azure REST API version 2022-06-01.
 */
export function getFluidRelayServer(args: GetFluidRelayServerArgs, opts?: pulumi.InvokeOptions): Promise<GetFluidRelayServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fluidrelay:getFluidRelayServer", {
        "fluidRelayServerName": args.fluidRelayServerName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetFluidRelayServerArgs {
    /**
     * The Fluid Relay server resource name.
     */
    fluidRelayServerName: string;
    /**
     * The resource group containing the resource.
     */
    resourceGroup: string;
}

/**
 * A FluidRelay Server.
 */
export interface GetFluidRelayServerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * All encryption configuration for a resource.
     */
    readonly encryption?: types.outputs.EncryptionPropertiesResponse;
    /**
     * The Fluid Relay Service endpoints for this server.
     */
    readonly fluidRelayEndpoints: types.outputs.FluidRelayEndpointsResponse;
    /**
     * The Fluid tenantId for this server
     */
    readonly frsTenantId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The type of identity used for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provision states for FluidRelay RP
     */
    readonly provisioningState?: string;
    /**
     * Sku of the storage associated with the resource
     */
    readonly storagesku?: string;
    /**
     * System meta data for this resource, including creation and modification information.
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
}
/**
 * A FluidRelay Server.
 *
 * Uses Azure REST API version 2022-06-01.
 */
export function getFluidRelayServerOutput(args: GetFluidRelayServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFluidRelayServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:fluidrelay:getFluidRelayServer", {
        "fluidRelayServerName": args.fluidRelayServerName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetFluidRelayServerOutputArgs {
    /**
     * The Fluid Relay server resource name.
     */
    fluidRelayServerName: pulumi.Input<string>;
    /**
     * The resource group containing the resource.
     */
    resourceGroup: pulumi.Input<string>;
}