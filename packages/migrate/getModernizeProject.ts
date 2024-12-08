import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the modernize project.
 * Azure REST API version: 2022-05-01-preview.
 */
export function getModernizeProject(args: GetModernizeProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetModernizeProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getModernizeProject", {
        "modernizeProjectName": args.modernizeProjectName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetModernizeProjectArgs {
    /**
     * Modernize project name.
     */
    modernizeProjectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
    /**
     * Azure Subscription Id in which project was created.
     */
    subscriptionId?: string;
}

/**
 * ModernizeProject model.
 */
export interface GetModernizeProjectResult {
    /**
     * Gets or sets the Id of the resource.
     */
    readonly id: string;
    readonly identity?: types.outputs.ResourceIdentityResponse;
    /**
     * Gets or sets the location of the modernizeProject.
     */
    readonly location?: string;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name: string;
    /**
     * ModernizeProject properties.
     */
    readonly properties: types.outputs.ModernizeProjectModelPropertiesResponse;
    readonly systemData: types.outputs.ModernizeProjectModelResponseSystemData;
    /**
     * Gets or sets the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the modernize project.
 * Azure REST API version: 2022-05-01-preview.
 */
export function getModernizeProjectOutput(args: GetModernizeProjectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetModernizeProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getModernizeProject", {
        "modernizeProjectName": args.modernizeProjectName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetModernizeProjectOutputArgs {
    /**
     * Modernize project name.
     */
    modernizeProjectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Subscription Id in which project was created.
     */
    subscriptionId?: pulumi.Input<string>;
}