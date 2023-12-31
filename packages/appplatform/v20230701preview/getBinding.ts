import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Binding and its properties.
 */
export function getBinding(args: GetBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetBindingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230701preview:getBinding", {
        "appName": args.appName,
        "bindingName": args.bindingName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBindingArgs {
    /**
     * The name of the App resource.
     */
    appName: string;
    /**
     * The name of the Binding resource.
     */
    bindingName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Binding resource payload
 */
export interface GetBindingResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the Binding resource
     */
    readonly properties: types.outputs.BindingResourcePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get a Binding and its properties.
 */
export function getBindingOutput(args: GetBindingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBindingResult> {
    return pulumi.output(args).apply((a: any) => getBinding(a, opts))
}

export interface GetBindingOutputArgs {
    /**
     * The name of the App resource.
     */
    appName: pulumi.Input<string>;
    /**
     * The name of the Binding resource.
     */
    bindingName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
