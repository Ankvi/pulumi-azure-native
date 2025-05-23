import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration settings for the Azure App Service Authentication / Authorization V2 feature.
 *
 * Uses Azure REST API version 2021-02-01. In version 2.x of the Azure Native provider, it used API version 2021-02-01.
 *
 * Other available API versions: 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WebAppAuthSettingsV2 extends pulumi.CustomResource {
    /**
     * Get an existing WebAppAuthSettingsV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppAuthSettingsV2 {
        return new WebAppAuthSettingsV2(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppAuthSettingsV2';

    /**
     * Returns true if the given object is an instance of WebAppAuthSettingsV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppAuthSettingsV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppAuthSettingsV2.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
     */
    public readonly globalValidation!: pulumi.Output<types.outputs.GlobalValidationResponse | undefined>;
    /**
     * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
     */
    public readonly httpSettings!: pulumi.Output<types.outputs.HttpSettingsResponse | undefined>;
    /**
     * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
     */
    public readonly identityProviders!: pulumi.Output<types.outputs.IdentityProvidersResponse | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The configuration settings of the login flow of users using App Service Authentication/Authorization.
     */
    public readonly login!: pulumi.Output<types.outputs.LoginResponse | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The configuration settings of the platform of App Service Authentication/Authorization.
     */
    public readonly platform!: pulumi.Output<types.outputs.AuthPlatformResponse | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppAuthSettingsV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppAuthSettingsV2Args, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["globalValidation"] = args ? args.globalValidation : undefined;
            resourceInputs["httpSettings"] = args ? args.httpSettings : undefined;
            resourceInputs["identityProviders"] = args ? args.identityProviders : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["globalValidation"] = undefined /*out*/;
            resourceInputs["httpSettings"] = undefined /*out*/;
            resourceInputs["identityProviders"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["login"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platform"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20200601:WebAppAuthSettingsV2" }, { type: "azure-native:web/v20200901:WebAppAuthSettingsV2" }, { type: "azure-native:web/v20201001:WebAppAuthSettingsV2" }, { type: "azure-native:web/v20201201:WebAppAuthSettingsV2" }, { type: "azure-native:web/v20210101:WebAppAuthSettingsV2" }, { type: "azure-native:web/v20210115:WebAppAuthSettingsV2" }, { type: "azure-native:web/v20210201:WebAppAuthSettingsV2" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppAuthSettingsV2.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppAuthSettingsV2 resource.
 */
export interface WebAppAuthSettingsV2Args {
    /**
     * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
     */
    globalValidation?: pulumi.Input<types.inputs.GlobalValidationArgs>;
    /**
     * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
     */
    httpSettings?: pulumi.Input<types.inputs.HttpSettingsArgs>;
    /**
     * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
     */
    identityProviders?: pulumi.Input<types.inputs.IdentityProvidersArgs>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * The configuration settings of the login flow of users using App Service Authentication/Authorization.
     */
    login?: pulumi.Input<types.inputs.LoginArgs>;
    /**
     * Name of web app.
     */
    name: pulumi.Input<string>;
    /**
     * The configuration settings of the platform of App Service Authentication/Authorization.
     */
    platform?: pulumi.Input<types.inputs.AuthPlatformArgs>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}