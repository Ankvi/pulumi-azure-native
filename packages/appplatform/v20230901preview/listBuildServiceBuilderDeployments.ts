import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List deployments that are using the builder.
 */
export function listBuildServiceBuilderDeployments(args: ListBuildServiceBuilderDeploymentsArgs, opts?: pulumi.InvokeOptions): Promise<ListBuildServiceBuilderDeploymentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230901preview:listBuildServiceBuilderDeployments", {
        "buildServiceName": args.buildServiceName,
        "builderName": args.builderName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListBuildServiceBuilderDeploymentsArgs {
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
 * A list of deployments resource ids.
 */
export interface ListBuildServiceBuilderDeploymentsResult {
    /**
     * A list of deployment resource ids.
     */
    readonly deployments?: string[];
}
/**
 * List deployments that are using the builder.
 */
export function listBuildServiceBuilderDeploymentsOutput(args: ListBuildServiceBuilderDeploymentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListBuildServiceBuilderDeploymentsResult> {
    return pulumi.output(args).apply((a: any) => listBuildServiceBuilderDeployments(a, opts))
}

export interface ListBuildServiceBuilderDeploymentsOutputArgs {
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
