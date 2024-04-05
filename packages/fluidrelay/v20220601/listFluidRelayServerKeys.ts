import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The set of available keys for this server.
 */
export function listFluidRelayServerKeys(args: ListFluidRelayServerKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListFluidRelayServerKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fluidrelay/v20220601:listFluidRelayServerKeys", {
        "fluidRelayServerName": args.fluidRelayServerName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface ListFluidRelayServerKeysArgs {
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
 * The set of available keys for this server.
 */
export interface ListFluidRelayServerKeysResult {
    /**
     * The primary key for this server
     */
    readonly key1: string;
    /**
     * The secondary key for this server
     */
    readonly key2: string;
}
/**
 * The set of available keys for this server.
 */
export function listFluidRelayServerKeysOutput(args: ListFluidRelayServerKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListFluidRelayServerKeysResult> {
    return pulumi.output(args).apply((a: any) => listFluidRelayServerKeys(a, opts))
}

export interface ListFluidRelayServerKeysOutputArgs {
    /**
     * The Fluid Relay server resource name.
     */
    fluidRelayServerName: pulumi.Input<string>;
    /**
     * The resource group containing the resource.
     */
    resourceGroup: pulumi.Input<string>;
}