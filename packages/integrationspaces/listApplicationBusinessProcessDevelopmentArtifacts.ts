import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The list business process development artifacts action.
 * Azure REST API version: 2023-11-14-preview.
 */
export function listApplicationBusinessProcessDevelopmentArtifacts(args: ListApplicationBusinessProcessDevelopmentArtifactsArgs, opts?: pulumi.InvokeOptions): Promise<ListApplicationBusinessProcessDevelopmentArtifactsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:integrationspaces:listApplicationBusinessProcessDevelopmentArtifacts", {
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
        "spaceName": args.spaceName,
    }, opts);
}

export interface ListApplicationBusinessProcessDevelopmentArtifactsArgs {
    /**
     * The name of the Application
     */
    applicationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the space
     */
    spaceName: string;
}

/**
 * The business process development artifact get collection response.
 */
export interface ListApplicationBusinessProcessDevelopmentArtifactsResult {
    /**
     * The list of the business process development artifact.
     */
    readonly value: types.outputs.SaveOrGetBusinessProcessDevelopmentArtifactResponseResponse[];
}
/**
 * The list business process development artifacts action.
 * Azure REST API version: 2023-11-14-preview.
 */
export function listApplicationBusinessProcessDevelopmentArtifactsOutput(args: ListApplicationBusinessProcessDevelopmentArtifactsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListApplicationBusinessProcessDevelopmentArtifactsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:integrationspaces:listApplicationBusinessProcessDevelopmentArtifacts", {
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
        "spaceName": args.spaceName,
    }, opts);
}

export interface ListApplicationBusinessProcessDevelopmentArtifactsOutputArgs {
    /**
     * The name of the Application
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the space
     */
    spaceName: pulumi.Input<string>;
}