import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a buildpack binding by name.
 */
export function getBuildpackBinding(args: GetBuildpackBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildpackBindingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230701preview:getBuildpackBinding", {
        "buildServiceName": args.buildServiceName,
        "builderName": args.builderName,
        "buildpackBindingName": args.buildpackBindingName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBuildpackBindingArgs {
    /**
     * The name of the build service resource.
     */
    buildServiceName: string;
    /**
     * The name of the builder resource.
     */
    builderName: string;
    /**
     * The name of the Buildpack Binding Name
     */
    buildpackBindingName: string;
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
 * Buildpack Binding Resource object
 */
export interface GetBuildpackBindingResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of a buildpack binding
     */
    readonly properties: types.outputs.BuildpackBindingPropertiesResponse;
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
 * Get a buildpack binding by name.
 */
export function getBuildpackBindingOutput(args: GetBuildpackBindingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildpackBindingResult> {
    return pulumi.output(args).apply((a: any) => getBuildpackBinding(a, opts))
}

export interface GetBuildpackBindingOutputArgs {
    /**
     * The name of the build service resource.
     */
    buildServiceName: pulumi.Input<string>;
    /**
     * The name of the builder resource.
     */
    builderName: pulumi.Input<string>;
    /**
     * The name of the Buildpack Binding Name
     */
    buildpackBindingName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
