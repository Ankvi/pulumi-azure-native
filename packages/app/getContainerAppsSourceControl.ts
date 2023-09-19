import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App SourceControl.
 * Azure REST API version: 2022-10-01.
 */
export function getContainerAppsSourceControl(args: GetContainerAppsSourceControlArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerAppsSourceControlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getContainerAppsSourceControl", {
        "containerAppName": args.containerAppName,
        "resourceGroupName": args.resourceGroupName,
        "sourceControlName": args.sourceControlName,
    }, opts);
}

export interface GetContainerAppsSourceControlArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the Container App SourceControl.
     */
    sourceControlName: string;
}

/**
 * Container App SourceControl.
 */
export interface GetContainerAppsSourceControlResult {
    /**
     * The branch which will trigger the auto deployment
     */
    readonly branch?: string;
    /**
     * Container App Revision Template with all possible settings and the
     * defaults if user did not provide them. The defaults are populated
     * as they were at the creation time
     */
    readonly githubActionConfiguration?: types.outputs.GithubActionConfigurationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Current provisioning State of the operation
     */
    readonly operationState: string;
    /**
     * The repo url which will be integrated to ContainerApp.
     */
    readonly repoUrl?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Container App SourceControl.
 * Azure REST API version: 2022-10-01.
 */
export function getContainerAppsSourceControlOutput(args: GetContainerAppsSourceControlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerAppsSourceControlResult> {
    return pulumi.output(args).apply((a: any) => getContainerAppsSourceControl(a, opts))
}

export interface GetContainerAppsSourceControlOutputArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Container App SourceControl.
     */
    sourceControlName: pulumi.Input<string>;
}
