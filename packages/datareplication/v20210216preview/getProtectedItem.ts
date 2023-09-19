import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the protected item.
 */
export function getProtectedItem(args: GetProtectedItemArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectedItemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datareplication/v20210216preview:getProtectedItem", {
        "protectedItemName": args.protectedItemName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetProtectedItemArgs {
    /**
     * The protected item name.
     */
    protectedItemName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The vault name.
     */
    vaultName: string;
}

/**
 * Protected item model.
 */
export interface GetProtectedItemResult {
    /**
     * Gets or sets the Id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name: string;
    /**
     * Protected item model properties.
     */
    readonly properties: types.outputs.ProtectedItemModelPropertiesResponse;
    readonly systemData: types.outputs.ProtectedItemModelResponseSystemData;
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the protected item.
 */
export function getProtectedItemOutput(args: GetProtectedItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProtectedItemResult> {
    return pulumi.output(args).apply((a: any) => getProtectedItem(a, opts))
}

export interface GetProtectedItemOutputArgs {
    /**
     * The protected item name.
     */
    protectedItemName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The vault name.
     */
    vaultName: pulumi.Input<string>;
}
