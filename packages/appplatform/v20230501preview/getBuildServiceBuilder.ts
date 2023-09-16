import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a KPack builder.
 */
export function getBuildServiceBuilder(args: GetBuildServiceBuilderArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildServiceBuilderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230501preview:getBuildServiceBuilder", {
        "buildServiceName": args.buildServiceName,
        "builderName": args.builderName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBuildServiceBuilderArgs {
    /**
     * The name of the build service resource.
     */
    buildServiceName: string;
    /**
     * The name of the builder resource.
     */
    builderName: string;
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
 * KPack Builder resource
 */
export interface GetBuildServiceBuilderResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Property of the Builder resource.
     */
    readonly properties: types.outputs.appplatform.v20230501preview.BuilderPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.appplatform.v20230501preview.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get a KPack builder.
 */
export function getBuildServiceBuilderOutput(args: GetBuildServiceBuilderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildServiceBuilderResult> {
    return pulumi.output(args).apply((a: any) => getBuildServiceBuilder(a, opts))
}

export interface GetBuildServiceBuilderOutputArgs {
    /**
     * The name of the build service resource.
     */
    buildServiceName: pulumi.Input<string>;
    /**
     * The name of the builder resource.
     */
    builderName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
