import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The set of available keys for this server.
 */
export function getFluidRelayServerKeys(args: GetFluidRelayServerKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetFluidRelayServerKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fluidrelay/v20210615preview:getFluidRelayServerKeys", {
        "name": args.name,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetFluidRelayServerKeysArgs {
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
 * The set of available keys for this server.
 */
export interface GetFluidRelayServerKeysResult {
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
export function getFluidRelayServerKeysOutput(args: GetFluidRelayServerKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFluidRelayServerKeysResult> {
    return pulumi.output(args).apply((a: any) => getFluidRelayServerKeys(a, opts))
}

export interface GetFluidRelayServerKeysOutputArgs {
    /**
     * The resource name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group containing the resource.
     */
    resourceGroup: pulumi.Input<string>;
}