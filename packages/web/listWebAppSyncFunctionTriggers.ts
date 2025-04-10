import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for This is to allow calling via powershell and ARM template.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2018-11-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppSyncFunctionTriggers(args: ListWebAppSyncFunctionTriggersArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSyncFunctionTriggersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppSyncFunctionTriggers", {
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
 * Description for This is to allow calling via powershell and ARM template.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2018-11-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppSyncFunctionTriggersOutput(args: ListWebAppSyncFunctionTriggersOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppSyncFunctionTriggersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppSyncFunctionTriggers", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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