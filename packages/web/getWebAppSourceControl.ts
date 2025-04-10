import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the source control configuration of an app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppSourceControl(args: GetWebAppSourceControlArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSourceControlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppSourceControl", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppSourceControlArgs {
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
 * Source control configuration for an app.
 */
export interface GetWebAppSourceControlResult {
    /**
     * Name of branch to use for deployment.
     */
    readonly branch?: string;
    /**
     * <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
     */
    readonly deploymentRollbackEnabled?: boolean;
    /**
     * If GitHub Action is selected, than the associated configuration.
     */
    readonly gitHubActionConfiguration?: types.outputs.GitHubActionConfigurationResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * <code>true</code> if this is deployed via GitHub action.
     */
    readonly isGitHubAction?: boolean;
    /**
     * <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
     */
    readonly isManualIntegration?: boolean;
    /**
     * <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
     */
    readonly isMercurial?: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Repository or source control URL.
     */
    readonly repoUrl?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets the source control configuration of an app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppSourceControlOutput(args: GetWebAppSourceControlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppSourceControlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppSourceControl", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppSourceControlOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}