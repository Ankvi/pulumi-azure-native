import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns details of the environment.
 */
export function getEnvironment(args: GetEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apicenter/v20240301:getEnvironment", {
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetEnvironmentArgs {
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of Azure API Center service.
     */
    serviceName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Environment entity.
 */
export interface GetEnvironmentResult {
    /**
     * The custom metadata defined for API catalog entities.
     */
    readonly customProperties?: any;
    /**
     * The environment description.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Environment kind.
     */
    readonly kind: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Environment onboarding information
     */
    readonly onboarding?: types.outputs.OnboardingResponse;
    /**
     * Server information of the environment.
     */
    readonly server?: types.outputs.EnvironmentServerResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Environment title.
     */
    readonly title: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns details of the environment.
 */
export function getEnvironmentOutput(args: GetEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getEnvironment(a, opts))
}

export interface GetEnvironmentOutputArgs {
    /**
     * The name of the environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}