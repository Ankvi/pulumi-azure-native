import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns Linker resource for a given name.
 */
export function getLinker(args: GetLinkerArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicelinker/v20211101preview:getLinker", {
        "linkerName": args.linkerName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLinkerArgs {
    /**
     * The name Linker resource.
     */
    linkerName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: string;
}

/**
 * Linker of source and target resource
 */
export interface GetLinkerResult {
    /**
     * The authentication type.
     */
    readonly authInfo?: types.outputs.SecretAuthInfoResponse | types.outputs.ServicePrincipalCertificateAuthInfoResponse | types.outputs.ServicePrincipalSecretAuthInfoResponse | types.outputs.SystemAssignedIdentityAuthInfoResponse | types.outputs.UserAssignedIdentityAuthInfoResponse;
    /**
     * The application client type
     */
    readonly clientType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state. 
     */
    readonly provisioningState: string;
    /**
     * An option to store secret value in secure place
     */
    readonly secretStore?: types.outputs.SecretStoreResponse;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource Id of target service.
     */
    readonly targetId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The VNet solution.
     */
    readonly vNetSolution?: types.outputs.VNetSolutionResponse;
}
/**
 * Returns Linker resource for a given name.
 */
export function getLinkerOutput(args: GetLinkerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLinkerResult> {
    return pulumi.output(args).apply((a: any) => getLinker(a, opts))
}

export interface GetLinkerOutputArgs {
    /**
     * The name Linker resource.
     */
    linkerName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
}
