import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the hierarchy settings defined at the Management Group level. Settings can only be set on the root Management Group of the hierarchy.
 *
 * Azure REST API version: 2021-04-01.
 */
export function getHierarchySetting(args: GetHierarchySettingArgs, opts?: pulumi.InvokeOptions): Promise<GetHierarchySettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:management:getHierarchySetting", {
        "groupId": args.groupId,
    }, opts);
}

export interface GetHierarchySettingArgs {
    /**
     * Management Group ID.
     */
    groupId: string;
}

/**
 * Settings defined at the Management Group scope.
 */
export interface GetHierarchySettingResult {
    /**
     * Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
     */
    readonly defaultManagementGroup?: string;
    /**
     * The fully qualified ID for the settings object.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000/settings/default.
     */
    readonly id: string;
    /**
     * The name of the object. In this case, default.
     */
    readonly name: string;
    /**
     * Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
     */
    readonly requireAuthorizationForGroupCreation?: boolean;
    /**
     * The AAD Tenant ID associated with the hierarchy settings. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly tenantId?: string;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups/settings.
     */
    readonly type: string;
}
/**
 * Gets the hierarchy settings defined at the Management Group level. Settings can only be set on the root Management Group of the hierarchy.
 *
 * Azure REST API version: 2021-04-01.
 */
export function getHierarchySettingOutput(args: GetHierarchySettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHierarchySettingResult> {
    return pulumi.output(args).apply((a: any) => getHierarchySetting(a, opts))
}

export interface GetHierarchySettingOutputArgs {
    /**
     * Management Group ID.
     */
    groupId: pulumi.Input<string>;
}
