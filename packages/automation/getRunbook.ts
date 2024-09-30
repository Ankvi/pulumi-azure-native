import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the runbook identified by runbook name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getRunbook(args: GetRunbookArgs, opts?: pulumi.InvokeOptions): Promise<GetRunbookResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getRunbook", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "runbookName": args.runbookName,
    }, opts);
}

export interface GetRunbookArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
    /**
     * The runbook name.
     */
    runbookName: string;
}

/**
 * Definition of the runbook type.
 */
export interface GetRunbookResult {
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the draft runbook properties.
     */
    readonly draft?: types.outputs.RunbookDraftResponse;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets or sets the job count of the runbook.
     */
    readonly jobCount?: number;
    /**
     * Gets or sets the last modified by.
     */
    readonly lastModifiedBy?: string;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * Gets or sets the option to log activity trace of the runbook.
     */
    readonly logActivityTrace?: number;
    /**
     * Gets or sets progress log option.
     */
    readonly logProgress?: boolean;
    /**
     * Gets or sets verbose log option.
     */
    readonly logVerbose?: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the runbook output types.
     */
    readonly outputTypes?: string[];
    /**
     * Gets or sets the runbook parameters.
     */
    readonly parameters?: {[key: string]: types.outputs.RunbookParameterResponse};
    /**
     * Gets or sets the provisioning state of the runbook.
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets the published runbook content link.
     */
    readonly publishContentLink?: types.outputs.ContentLinkResponse;
    /**
     * Gets or sets the type of the runbook.
     */
    readonly runbookType?: string;
    /**
     * Gets or sets the state of the runbook.
     */
    readonly state?: string;
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
 * Retrieve the runbook identified by runbook name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getRunbookOutput(args: GetRunbookOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRunbookResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getRunbook", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "runbookName": args.runbookName,
    }, opts);
}

export interface GetRunbookOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The runbook name.
     */
    runbookName: pulumi.Input<string>;
}