import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieve the source control identified by source control name.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2017-05-15-preview, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSourceControl(args: GetSourceControlArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceControlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getSourceControl", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "sourceControlName": args.sourceControlName,
    }, opts);
}

export interface GetSourceControlArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
    /**
     * The name of source control.
     */
    sourceControlName: string;
}

/**
 * Definition of the source control.
 */
export interface GetSourceControlResult {
    /**
     * The auto sync of the source control. Default is false.
     */
    readonly autoSync?: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The repo branch of the source control. Include branch as empty string for VsoTfvc.
     */
    readonly branch?: string;
    /**
     * The creation time.
     */
    readonly creationTime?: string;
    /**
     * The description.
     */
    readonly description?: string;
    /**
     * The folder path of the source control.
     */
    readonly folderPath?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * The last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The auto publish of the source control. Default is true.
     */
    readonly publishRunbook?: boolean;
    /**
     * The repo url of the source control.
     */
    readonly repoUrl?: string;
    /**
     * The source type. Must be one of VsoGit, VsoTfvc, GitHub.
     */
    readonly sourceType?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Retrieve the source control identified by source control name.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2017-05-15-preview, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSourceControlOutput(args: GetSourceControlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceControlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getSourceControl", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "sourceControlName": args.sourceControlName,
    }, opts);
}

export interface GetSourceControlOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of source control.
     */
    sourceControlName: pulumi.Input<string>;
}