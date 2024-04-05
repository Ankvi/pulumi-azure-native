import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the application settings of a static site.
 */
export function listStaticSiteBuildFunctionAppSettings(args: ListStaticSiteBuildFunctionAppSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteBuildFunctionAppSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:listStaticSiteBuildFunctionAppSettings", {
        "name": args.name,
        "prId": args.prId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteBuildFunctionAppSettingsArgs {
    /**
     * Name of the static site.
     */
    name: string;
    /**
     * The stage site identifier.
     */
    prId: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * String dictionary resource.
 */
export interface ListStaticSiteBuildFunctionAppSettingsResult {
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
     * Settings.
     */
    readonly properties: {[key: string]: string};
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the application settings of a static site.
 */
export function listStaticSiteBuildFunctionAppSettingsOutput(args: ListStaticSiteBuildFunctionAppSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListStaticSiteBuildFunctionAppSettingsResult> {
    return pulumi.output(args).apply((a: any) => listStaticSiteBuildFunctionAppSettings(a, opts))
}

export interface ListStaticSiteBuildFunctionAppSettingsOutputArgs {
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * The stage site identifier.
     */
    prId: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}