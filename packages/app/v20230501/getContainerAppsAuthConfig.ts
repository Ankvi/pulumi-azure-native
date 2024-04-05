import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration settings for the Azure ContainerApp Service Authentication / Authorization feature.
 */
export function getContainerAppsAuthConfig(args: GetContainerAppsAuthConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerAppsAuthConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230501:getContainerAppsAuthConfig", {
        "authConfigName": args.authConfigName,
        "containerAppName": args.containerAppName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerAppsAuthConfigArgs {
    /**
     * Name of the Container App AuthConfig.
     */
    authConfigName: string;
    /**
     * Name of the Container App.
     */
    containerAppName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Configuration settings for the Azure ContainerApp Service Authentication / Authorization feature.
 */
export interface GetContainerAppsAuthConfigResult {
    /**
     * The configuration settings that determines the validation flow of users using  Service Authentication/Authorization.
     */
    readonly globalValidation?: types.outputs.GlobalValidationResponse;
    /**
     * The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization.
     */
    readonly httpSettings?: types.outputs.HttpSettingsResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization.
     */
    readonly identityProviders?: types.outputs.IdentityProvidersResponse;
    /**
     * The configuration settings of the login flow of users using ContainerApp Service Authentication/Authorization.
     */
    readonly login?: types.outputs.LoginResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The configuration settings of the platform of ContainerApp Service Authentication/Authorization.
     */
    readonly platform?: types.outputs.AuthPlatformResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Configuration settings for the Azure ContainerApp Service Authentication / Authorization feature.
 */
export function getContainerAppsAuthConfigOutput(args: GetContainerAppsAuthConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerAppsAuthConfigResult> {
    return pulumi.output(args).apply((a: any) => getContainerAppsAuthConfig(a, opts))
}

export interface GetContainerAppsAuthConfigOutputArgs {
    /**
     * Name of the Container App AuthConfig.
     */
    authConfigName: pulumi.Input<string>;
    /**
     * Name of the Container App.
     */
    containerAppName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}