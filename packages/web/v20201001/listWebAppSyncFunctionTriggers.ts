import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * This is to allow calling via powershell and ARM template.
 */
export function listWebAppSyncFunctionTriggers(args: ListWebAppSyncFunctionTriggersArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSyncFunctionTriggersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:listWebAppSyncFunctionTriggers", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppSyncFunctionTriggersArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Function secrets.
 */
export interface ListWebAppSyncFunctionTriggersResult {
    /**
     * Secret key.
     */
    readonly key?: string;
    /**
     * Trigger URL.
     */
    readonly triggerUrl?: string;
}
/**
 * This is to allow calling via powershell and ARM template.
 */
export function listWebAppSyncFunctionTriggersOutput(args: ListWebAppSyncFunctionTriggersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppSyncFunctionTriggersResult> {
    return pulumi.output(args).apply((a: any) => listWebAppSyncFunctionTriggers(a, opts))
}

export interface ListWebAppSyncFunctionTriggersOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
