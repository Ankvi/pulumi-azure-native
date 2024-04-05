import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns ResourceGuardProxy under vault and with the name referenced in request
 */
export function getResourceGuardProxy(args: GetResourceGuardProxyArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceGuardProxyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20230601:getResourceGuardProxy", {
        "resourceGroupName": args.resourceGroupName,
        "resourceGuardProxyName": args.resourceGuardProxyName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetResourceGuardProxyArgs {
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    resourceGuardProxyName: string;
    /**
     * The name of the recovery services vault.
     */
    vaultName: string;
}

export interface GetResourceGuardProxyResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * ResourceGuardProxyBaseResource properties
     */
    readonly properties: types.outputs.ResourceGuardProxyBaseResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * Returns ResourceGuardProxy under vault and with the name referenced in request
 */
export function getResourceGuardProxyOutput(args: GetResourceGuardProxyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceGuardProxyResult> {
    return pulumi.output(args).apply((a: any) => getResourceGuardProxy(a, opts))
}

export interface GetResourceGuardProxyOutputArgs {
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    resourceGuardProxyName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}