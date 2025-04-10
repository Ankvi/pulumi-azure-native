import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Lists the roles configured for the static site.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-02-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listStaticSiteConfiguredRoles(args: ListStaticSiteConfiguredRolesArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteConfiguredRolesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listStaticSiteConfiguredRoles", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteConfiguredRolesArgs {
    /**
     * Name of the static site.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * String list resource.
 */
export interface ListStaticSiteConfiguredRolesResult {
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
     * List of string resources.
     */
    readonly properties: string[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Lists the roles configured for the static site.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-02-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listStaticSiteConfiguredRolesOutput(args: ListStaticSiteConfiguredRolesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListStaticSiteConfiguredRolesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listStaticSiteConfiguredRoles", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteConfiguredRolesOutputArgs {
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}