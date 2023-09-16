import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the shared keys for a workspace.
 */
export function getSharedKeys(args: GetSharedKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights/v20200801:getSharedKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSharedKeysArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The shared keys for a workspace.
 */
export interface GetSharedKeysResult {
    /**
     * The primary shared key of a workspace.
     */
    readonly primarySharedKey?: string;
    /**
     * The secondary shared key of a workspace.
     */
    readonly secondarySharedKey?: string;
}
/**
 * Gets the shared keys for a workspace.
 */
export function getSharedKeysOutput(args: GetSharedKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedKeysResult> {
    return pulumi.output(args).apply((a: any) => getSharedKeys(a, opts))
}

export interface GetSharedKeysOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
