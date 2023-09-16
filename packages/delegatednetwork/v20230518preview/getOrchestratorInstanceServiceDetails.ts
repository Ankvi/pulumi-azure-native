import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets details about the orchestrator instance.
 */
export function getOrchestratorInstanceServiceDetails(args: GetOrchestratorInstanceServiceDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetOrchestratorInstanceServiceDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:delegatednetwork/v20230518preview:getOrchestratorInstanceServiceDetails", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetOrchestratorInstanceServiceDetailsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
     */
    resourceName: string;
}

/**
 * Represents an instance of a orchestrator.
 */
export interface GetOrchestratorInstanceServiceDetailsResult {
    /**
     * K8s APIServer url. Either one of apiServerEndpoint or privateLinkResourceId can be specified
     */
    readonly apiServerEndpoint?: string;
    /**
     * RootCA certificate of kubernetes cluster base64 encoded
     */
    readonly clusterRootCA?: string;
    /**
     * Properties of the controller.
     */
    readonly controllerDetails: types.outputs.delegatednetwork.v20230518preview.ControllerDetailsResponse;
    /**
     * An identifier that represents the resource.
     */
    readonly id: string;
    /**
     * The identity of the orchestrator
     */
    readonly identity?: types.outputs.delegatednetwork.v20230518preview.OrchestratorIdentityResponse;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    readonly kind: string;
    /**
     * Location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * AAD ID used with apiserver
     */
    readonly orchestratorAppId?: string;
    /**
     * TenantID of server App ID
     */
    readonly orchestratorTenantId?: string;
    /**
     * private link arm resource id. Either one of apiServerEndpoint or privateLinkResourceId can be specified
     */
    readonly privateLinkResourceId?: string;
    /**
     * The current state of orchestratorInstance resource.
     */
    readonly provisioningState: string;
    /**
     * Resource guid.
     */
    readonly resourceGuid: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of resource.
     */
    readonly type: string;
}
/**
 * Gets details about the orchestrator instance.
 */
export function getOrchestratorInstanceServiceDetailsOutput(args: GetOrchestratorInstanceServiceDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrchestratorInstanceServiceDetailsResult> {
    return pulumi.output(args).apply((a: any) => getOrchestratorInstanceServiceDetails(a, opts))
}

export interface GetOrchestratorInstanceServiceDetailsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
     */
    resourceName: pulumi.Input<string>;
}
