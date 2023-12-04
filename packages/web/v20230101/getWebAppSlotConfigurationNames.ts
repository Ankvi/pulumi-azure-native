import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the names of app settings and connection strings that stick to the slot (not swapped).
 */
export function getWebAppSlotConfigurationNames(args: GetWebAppSlotConfigurationNamesArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSlotConfigurationNamesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20230101:getWebAppSlotConfigurationNames", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppSlotConfigurationNamesArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Slot Config names azure resource.
 */
export interface GetWebAppSlotConfigurationNamesResult {
    /**
     * List of application settings names.
     */
    readonly appSettingNames?: string[];
    /**
     * List of external Azure storage account identifiers.
     */
    readonly azureStorageConfigNames?: string[];
    /**
     * List of connection string names.
     */
    readonly connectionStringNames?: string[];
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
 * Description for Gets the names of app settings and connection strings that stick to the slot (not swapped).
 */
export function getWebAppSlotConfigurationNamesOutput(args: GetWebAppSlotConfigurationNamesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppSlotConfigurationNamesResult> {
    return pulumi.output(args).apply((a: any) => getWebAppSlotConfigurationNames(a, opts))
}

export interface GetWebAppSlotConfigurationNamesOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}