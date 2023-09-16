import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get an assembly for an integration account.
 */
export function getIntegrationAccountAssembly(args: GetIntegrationAccountAssemblyArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountAssemblyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20190501:getIntegrationAccountAssembly", {
        "assemblyArtifactName": args.assemblyArtifactName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountAssemblyArgs {
    /**
     * The assembly artifact name.
     */
    assemblyArtifactName: string;
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The assembly definition.
 */
export interface GetIntegrationAccountAssemblyResult {
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The assembly properties.
     */
    readonly properties: types.outputs.logic.v20190501.AssemblyPropertiesResponse;
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
 * Get an assembly for an integration account.
 */
export function getIntegrationAccountAssemblyOutput(args: GetIntegrationAccountAssemblyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationAccountAssemblyResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationAccountAssembly(a, opts))
}

export interface GetIntegrationAccountAssemblyOutputArgs {
    /**
     * The assembly artifact name.
     */
    assemblyArtifactName: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
