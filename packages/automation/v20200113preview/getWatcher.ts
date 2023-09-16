import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieve the watcher identified by watcher name.
 */
export function getWatcher(args: GetWatcherArgs, opts?: pulumi.InvokeOptions): Promise<GetWatcherResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20200113preview:getWatcher", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "watcherName": args.watcherName,
    }, opts);
}

export interface GetWatcherArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
    /**
     * The watcher name.
     */
    watcherName: string;
}

/**
 * Definition of the watcher type.
 */
export interface GetWatcherResult {
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag?: string;
    /**
     * Gets or sets the frequency at which the watcher is invoked.
     */
    readonly executionFrequencyInSeconds?: number;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Details of the user who last modified the watcher.
     */
    readonly lastModifiedBy: string;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook.
     */
    readonly scriptName?: string;
    /**
     * Gets or sets the parameters of the script.
     */
    readonly scriptParameters?: {[key: string]: string};
    /**
     * Gets or sets the name of the hybrid worker group the watcher will run on.
     */
    readonly scriptRunOn?: string;
    /**
     * Gets the current status of the watcher.
     */
    readonly status: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Retrieve the watcher identified by watcher name.
 */
export function getWatcherOutput(args: GetWatcherOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWatcherResult> {
    return pulumi.output(args).apply((a: any) => getWatcher(a, opts))
}

export interface GetWatcherOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The watcher name.
     */
    watcherName: pulumi.Input<string>;
}
