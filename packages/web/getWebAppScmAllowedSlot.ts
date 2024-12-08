import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Returns whether Scm basic auth is allowed on the site or not.
 * Azure REST API version: 2023-12-01.
 *
 * Other available API versions: 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2024-04-01.
 */
export function getWebAppScmAllowedSlot(args: GetWebAppScmAllowedSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppScmAllowedSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppScmAllowedSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppScmAllowedSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    slot: string;
}

/**
 * Publishing Credentials Policies parameters.
 */
export interface GetWebAppScmAllowedSlotResult {
    /**
     * <code>true</code> to allow access to a publishing method; otherwise, <code>false</code>.
     */
    readonly allow: boolean;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Returns whether Scm basic auth is allowed on the site or not.
 * Azure REST API version: 2023-12-01.
 *
 * Other available API versions: 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2024-04-01.
 */
export function getWebAppScmAllowedSlotOutput(args: GetWebAppScmAllowedSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppScmAllowedSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppScmAllowedSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppScmAllowedSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    slot: pulumi.Input<string>;
}