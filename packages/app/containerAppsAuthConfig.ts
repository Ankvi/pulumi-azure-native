import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration settings for the Azure ContainerApp Service Authentication / Authorization feature.
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2022-10-01.
 *
 * Other available API versions: 2022-10-01, 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ContainerAppsAuthConfig extends pulumi.CustomResource {
    /**
     * Get an existing ContainerAppsAuthConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContainerAppsAuthConfig {
        return new ContainerAppsAuthConfig(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:ContainerAppsAuthConfig';

    /**
     * Returns true if the given object is an instance of ContainerAppsAuthConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerAppsAuthConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerAppsAuthConfig.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The configuration settings of the secrets references of encryption key and signing key for ContainerApp Service Authentication/Authorization.
     */
    public readonly encryptionSettings!: pulumi.Output<types.outputs.EncryptionSettingsResponse | undefined>;
    /**
     * The configuration settings that determines the validation flow of users using  Service Authentication/Authorization.
     */
    public readonly globalValidation!: pulumi.Output<types.outputs.GlobalValidationResponse | undefined>;
    /**
     * The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization.
     */
    public readonly httpSettings!: pulumi.Output<types.outputs.HttpSettingsResponse | undefined>;
    /**
     * The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization.
     */
    public readonly identityProviders!: pulumi.Output<types.outputs.IdentityProvidersResponse | undefined>;
    /**
     * The configuration settings of the login flow of users using ContainerApp Service Authentication/Authorization.
     */
    public readonly login!: pulumi.Output<types.outputs.LoginResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The configuration settings of the platform of ContainerApp Service Authentication/Authorization.
     */
    public readonly platform!: pulumi.Output<types.outputs.AuthPlatformResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ContainerAppsAuthConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerAppsAuthConfigArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.containerAppName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerAppName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authConfigName"] = args ? args.authConfigName : undefined;
            resourceInputs["containerAppName"] = args ? args.containerAppName : undefined;
            resourceInputs["encryptionSettings"] = args ? args.encryptionSettings : undefined;
            resourceInputs["globalValidation"] = args ? args.globalValidation : undefined;
            resourceInputs["httpSettings"] = args ? args.httpSettings : undefined;
            resourceInputs["identityProviders"] = args ? args.identityProviders : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["encryptionSettings"] = undefined /*out*/;
            resourceInputs["globalValidation"] = undefined /*out*/;
            resourceInputs["httpSettings"] = undefined /*out*/;
            resourceInputs["identityProviders"] = undefined /*out*/;
            resourceInputs["login"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platform"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20220101preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20220301:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20220601preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20221001:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20221101preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20230401preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20230501:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20230502preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20230801preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20231102preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20240202preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20240301:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20240802preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20241002preview:ContainerAppsAuthConfig" }, { type: "azure-native:app/v20250101:ContainerAppsAuthConfig" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContainerAppsAuthConfig.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContainerAppsAuthConfig resource.
 */
export interface ContainerAppsAuthConfigArgs {
    /**
     * Name of the Container App AuthConfig.
     */
    authConfigName?: pulumi.Input<string>;
    /**
     * Name of the Container App.
     */
    containerAppName: pulumi.Input<string>;
    /**
     * The configuration settings of the secrets references of encryption key and signing key for ContainerApp Service Authentication/Authorization.
     */
    encryptionSettings?: pulumi.Input<types.inputs.EncryptionSettingsArgs>;
    /**
     * The configuration settings that determines the validation flow of users using  Service Authentication/Authorization.
     */
    globalValidation?: pulumi.Input<types.inputs.GlobalValidationArgs>;
    /**
     * The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization.
     */
    httpSettings?: pulumi.Input<types.inputs.HttpSettingsArgs>;
    /**
     * The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization.
     */
    identityProviders?: pulumi.Input<types.inputs.IdentityProvidersArgs>;
    /**
     * The configuration settings of the login flow of users using ContainerApp Service Authentication/Authorization.
     */
    login?: pulumi.Input<types.inputs.LoginArgs>;
    /**
     * The configuration settings of the platform of ContainerApp Service Authentication/Authorization.
     */
    platform?: pulumi.Input<types.inputs.AuthPlatformArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}