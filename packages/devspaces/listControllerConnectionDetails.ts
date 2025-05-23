import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists connection details for the underlying container resources of an Azure Dev Spaces Controller.
 *
 * Uses Azure REST API version 2019-04-01.
 */
export function listControllerConnectionDetails(args: ListControllerConnectionDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListControllerConnectionDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devspaces:listControllerConnectionDetails", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "targetContainerHostResourceId": args.targetContainerHostResourceId,
    }, opts);
}

export interface ListControllerConnectionDetailsArgs {
    /**
     * Name of the resource.
     */
    name: string;
    /**
     * Resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Resource ID of the target container host mapped to the Azure Dev Spaces Controller.
     */
    targetContainerHostResourceId: string;
}

export interface ListControllerConnectionDetailsResult {
    /**
     * List of Azure Dev Spaces Controller connection details.
     */
    readonly connectionDetailsList?: types.outputs.ControllerConnectionDetailsResponse[];
}
/**
 * Lists connection details for the underlying container resources of an Azure Dev Spaces Controller.
 *
 * Uses Azure REST API version 2019-04-01.
 */
export function listControllerConnectionDetailsOutput(args: ListControllerConnectionDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListControllerConnectionDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devspaces:listControllerConnectionDetails", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "targetContainerHostResourceId": args.targetContainerHostResourceId,
    }, opts);
}

export interface ListControllerConnectionDetailsOutputArgs {
    /**
     * Name of the resource.
     */
    name: pulumi.Input<string>;
    /**
     * Resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource ID of the target container host mapped to the Azure Dev Spaces Controller.
     */
    targetContainerHostResourceId: pulumi.Input<string>;
}