import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a view in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getView(args: GetViewArgs, opts?: pulumi.InvokeOptions): Promise<GetViewResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getView", {
        "hubName": args.hubName,
        "resourceGroupName": args.resourceGroupName,
        "userId": args.userId,
        "viewName": args.viewName,
    }, opts);
}

export interface GetViewArgs {
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The user ID. Use * to retrieve hub level view.
     */
    userId: string;
    /**
     * The name of the view.
     */
    viewName: string;
}

/**
 * The view resource format.
 */
export interface GetViewResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Date time when view was last modified.
     */
    readonly changed: string;
    /**
     * Date time when view was created.
     */
    readonly created: string;
    /**
     * View definition.
     */
    readonly definition: string;
    /**
     * Localized display name for the view.
     */
    readonly displayName?: {[key: string]: string};
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * the hub name.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * the user ID.
     */
    readonly userId?: string;
    /**
     * Name of the view.
     */
    readonly viewName: string;
}
/**
 * Gets a view in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getViewOutput(args: GetViewOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetViewResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getView", {
        "hubName": args.hubName,
        "resourceGroupName": args.resourceGroupName,
        "userId": args.userId,
        "viewName": args.viewName,
    }, opts);
}

export interface GetViewOutputArgs {
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The user ID. Use * to retrieve hub level view.
     */
    userId: pulumi.Input<string>;
    /**
     * The name of the view.
     */
    viewName: pulumi.Input<string>;
}