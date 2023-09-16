import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a specific Analytics Items defined within an Application Insights component.
 */
export function getAnalyticsItem(args: GetAnalyticsItemArgs, opts?: pulumi.InvokeOptions): Promise<GetAnalyticsItemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20150501:getAnalyticsItem", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "scopePath": args.scopePath,
    }, opts);
}

export interface GetAnalyticsItemArgs {
    /**
     * The Id of a specific item defined in the Application Insights component
     */
    id?: string;
    /**
     * The name of a specific item defined in the Application Insights component
     */
    name?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: string;
    /**
     * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    scopePath: string;
}

/**
 * Properties that define an Analytics item that is associated to an Application Insights component.
 */
export interface GetAnalyticsItemResult {
    /**
     * The content of this item
     */
    readonly content?: string;
    /**
     * Internally assigned unique id of the item definition.
     */
    readonly id?: string;
    /**
     * The user-defined name of the item.
     */
    readonly name?: string;
    /**
     * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
     */
    readonly properties: types.outputs.insights.v20150501.ApplicationInsightsComponentAnalyticsItemPropertiesResponse;
    /**
     * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    readonly scope?: string;
    /**
     * Date and time in UTC when this item was created.
     */
    readonly timeCreated: string;
    /**
     * Date and time in UTC of the last modification that was made to this item.
     */
    readonly timeModified: string;
    /**
     * Enum indicating the type of the Analytics item.
     */
    readonly type?: string;
    /**
     * This instance's version of the data model. This can change as new features are added.
     */
    readonly version: string;
}
/**
 * Gets a specific Analytics Items defined within an Application Insights component.
 */
export function getAnalyticsItemOutput(args: GetAnalyticsItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAnalyticsItemResult> {
    return pulumi.output(args).apply((a: any) => getAnalyticsItem(a, opts))
}

export interface GetAnalyticsItemOutputArgs {
    /**
     * The Id of a specific item defined in the Application Insights component
     */
    id?: pulumi.Input<string>;
    /**
     * The name of a specific item defined in the Application Insights component
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    scopePath: pulumi.Input<string>;
}
