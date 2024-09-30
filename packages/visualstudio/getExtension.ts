import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of an extension associated with a Visual Studio Team Services account resource.
 * Azure REST API version: 2017-11-01-preview.
 */
export function getExtension(args: GetExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetExtensionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:visualstudio:getExtension", {
        "accountResourceName": args.accountResourceName,
        "extensionResourceName": args.extensionResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExtensionArgs {
    /**
     * The name of the Visual Studio Team Services account resource.
     */
    accountResourceName: string;
    /**
     * The name of the extension.
     */
    extensionResourceName: string;
    /**
     * Name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The response to an extension resource GET request.
 */
export interface GetExtensionResult {
    /**
     * Unique identifier of the resource.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The extension plan that was purchased.
     */
    readonly plan?: types.outputs.ExtensionResourcePlanResponse;
    /**
     * Resource properties.
     */
    readonly properties: {[key: string]: string};
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the details of an extension associated with a Visual Studio Team Services account resource.
 * Azure REST API version: 2017-11-01-preview.
 */
export function getExtensionOutput(args: GetExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExtensionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:visualstudio:getExtension", {
        "accountResourceName": args.accountResourceName,
        "extensionResourceName": args.extensionResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExtensionOutputArgs {
    /**
     * The name of the Visual Studio Team Services account resource.
     */
    accountResourceName: pulumi.Input<string>;
    /**
     * The name of the extension.
     */
    extensionResourceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}