import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App.
 * Azure REST API version: 2023-01-01.
 */
export function getContainerApp(args: GetContainerAppArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerAppResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getContainerApp", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerAppArgs {
    /**
     * Name of the Container App.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Container App.
 */
export interface GetContainerAppResult {
    /**
     * Non versioned Container App configuration properties.
     */
    readonly configuration?: types.outputs.ConfigurationResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource ID of the Container App's KubeEnvironment.
     */
    readonly kubeEnvironmentId?: string;
    /**
     * Fully Qualified Domain Name of the latest revision of the Container App.
     */
    readonly latestRevisionFqdn: string;
    /**
     * Name of the latest revision of the Container App.
     */
    readonly latestRevisionName: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Provisioning state of the Container App.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Container App versioned application definition.
     */
    readonly template?: types.outputs.TemplateResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Container App.
 * Azure REST API version: 2023-01-01.
 */
export function getContainerAppOutput(args: GetContainerAppOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerAppResult> {
    return pulumi.output(args).apply((a: any) => getContainerApp(a, opts))
}

export interface GetContainerAppOutputArgs {
    /**
     * Name of the Container App.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
