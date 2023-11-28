import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ResourceGuardProxyBaseResource object, used for response and request bodies for ResourceGuardProxy APIs
 */
export function getDppResourceGuardProxy(args: GetDppResourceGuardProxyArgs, opts?: pulumi.InvokeOptions): Promise<GetDppResourceGuardProxyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dataprotection/v20230801:getDppResourceGuardProxy", {
        "resourceGroupName": args.resourceGroupName,
        "resourceGuardProxyName": args.resourceGuardProxyName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetDppResourceGuardProxyArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * name of the resource guard proxy
     */
    resourceGuardProxyName: string;
    /**
     * The name of the backup vault.
     */
    vaultName: string;
}

/**
 * ResourceGuardProxyBaseResource object, used for response and request bodies for ResourceGuardProxy APIs
 */
export interface GetDppResourceGuardProxyResult {
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * ResourceGuardProxyBaseResource properties
     */
    readonly properties: types.outputs.ResourceGuardProxyBaseResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * ResourceGuardProxyBaseResource object, used for response and request bodies for ResourceGuardProxy APIs
 */
export function getDppResourceGuardProxyOutput(args: GetDppResourceGuardProxyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDppResourceGuardProxyResult> {
    return pulumi.output(args).apply((a: any) => getDppResourceGuardProxy(a, opts))
}

export interface GetDppResourceGuardProxyOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * name of the resource guard proxy
     */
    resourceGuardProxyName: pulumi.Input<string>;
    /**
     * The name of the backup vault.
     */
    vaultName: pulumi.Input<string>;
}
