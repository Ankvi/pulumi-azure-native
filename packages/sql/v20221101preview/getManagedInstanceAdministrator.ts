import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a managed instance administrator.
 */
export function getManagedInstanceAdministrator(args: GetManagedInstanceAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstanceAdministratorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20221101preview:getManagedInstanceAdministrator", {
        "administratorName": args.administratorName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedInstanceAdministratorArgs {
    administratorName: string;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * An Azure SQL managed instance administrator.
 */
export interface GetManagedInstanceAdministratorResult {
    /**
     * Type of the managed instance administrator.
     */
    readonly administratorType: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Login name of the managed instance administrator.
     */
    readonly login: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * SID (object ID) of the managed instance administrator.
     */
    readonly sid: string;
    /**
     * Tenant ID of the managed instance administrator.
     */
    readonly tenantId?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a managed instance administrator.
 */
export function getManagedInstanceAdministratorOutput(args: GetManagedInstanceAdministratorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedInstanceAdministratorResult> {
    return pulumi.output(args).apply((a: any) => getManagedInstanceAdministrator(a, opts))
}

export interface GetManagedInstanceAdministratorOutputArgs {
    administratorName: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}