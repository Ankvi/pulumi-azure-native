import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A FluidRelay Server.
 */
export function getFluidRelayServer(args: GetFluidRelayServerArgs, opts?: pulumi.InvokeOptions): Promise<GetFluidRelayServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fluidrelay/v20210615preview:getFluidRelayServer", {
        "name": args.name,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetFluidRelayServerArgs {
    /**
     * The resource name.
     */
    name: string;
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
     * The Fluid Relay Service endpoints for this server.
     */
    readonly fluidRelayEndpoints: types.outputs.fluidrelay.v20210615preview.FluidRelayEndpointsResponse;
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
    readonly identity?: types.outputs.fluidrelay.v20210615preview.IdentityResponse;
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
     * System meta data for this resource, including creation and modification information.
     */
    readonly systemData: types.outputs.fluidrelay.v20210615preview.SystemDataResponse;
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
 */
export function getFluidRelayServerOutput(args: GetFluidRelayServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFluidRelayServerResult> {
    return pulumi.output(args).apply((a: any) => getFluidRelayServer(a, opts))
}

export interface GetFluidRelayServerOutputArgs {
    /**
     * The resource name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group containing the resource.
     */
    resourceGroup: pulumi.Input<string>;
}
