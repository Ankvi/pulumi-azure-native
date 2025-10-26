import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration settings for the Azure App Service Authentication / Authorization V2 feature.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppAuthSettingsV2WithoutSecretsSlot(args: GetWebAppAuthSettingsV2WithoutSecretsSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppAuthSettingsV2WithoutSecretsSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppAuthSettingsV2WithoutSecretsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppAuthSettingsV2WithoutSecretsSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the settings for the production slot.
     */
    slot: string;
}

/**
 * Configuration settings for the Azure App Service Authentication / Authorization V2 feature.
 */
export interface GetWebAppAuthSettingsV2WithoutSecretsSlotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
     */
    readonly globalValidation?: types.outputs.GlobalValidationResponse;
    /**
     * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
     */
    readonly httpSettings?: types.outputs.HttpSettingsResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
     */
    readonly identityProviders?: types.outputs.IdentityProvidersResponse;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * The configuration settings of the login flow of users using App Service Authentication/Authorization.
     */
    readonly login?: types.outputs.LoginResponse;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * The configuration settings of the platform of App Service Authentication/Authorization.
     */
    readonly platform?: types.outputs.AuthPlatformResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Configuration settings for the Azure App Service Authentication / Authorization V2 feature.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppAuthSettingsV2WithoutSecretsSlotOutput(args: GetWebAppAuthSettingsV2WithoutSecretsSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppAuthSettingsV2WithoutSecretsSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppAuthSettingsV2WithoutSecretsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppAuthSettingsV2WithoutSecretsSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the settings for the production slot.
     */
    slot: pulumi.Input<string>;
}