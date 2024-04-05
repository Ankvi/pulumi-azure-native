import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration service environment.
 */
export function getIntegrationServiceEnvironment(args: GetIntegrationServiceEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationServiceEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20190501:getIntegrationServiceEnvironment", {
        "integrationServiceEnvironmentName": args.integrationServiceEnvironmentName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetIntegrationServiceEnvironmentArgs {
    /**
     * The integration service environment name.
     */
    integrationServiceEnvironmentName: string;
    /**
     * The resource group.
     */
    resourceGroup: string;
}

/**
 * The integration service environment.
 */
export interface GetIntegrationServiceEnvironmentResult {
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * Managed service identity properties.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The integration service environment properties.
     */
    readonly properties: types.outputs.IntegrationServiceEnvironmentPropertiesResponse;
    /**
     * The sku.
     */
    readonly sku?: types.outputs.IntegrationServiceEnvironmentSkuResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Gets an integration service environment.
 */
export function getIntegrationServiceEnvironmentOutput(args: GetIntegrationServiceEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationServiceEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationServiceEnvironment(a, opts))
}

export interface GetIntegrationServiceEnvironmentOutputArgs {
    /**
     * The integration service environment name.
     */
    integrationServiceEnvironmentName: pulumi.Input<string>;
    /**
     * The resource group.
     */
    resourceGroup: pulumi.Input<string>;
}