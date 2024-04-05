import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration settings for the Azure App Service Authentication / Authorization V2 feature.
 */
export class WebAppAuthSettingsV2Slot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppAuthSettingsV2Slot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppAuthSettingsV2Slot {
        return new WebAppAuthSettingsV2Slot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20210201:WebAppAuthSettingsV2Slot';

    /**
     * Returns true if the given object is an instance of WebAppAuthSettingsV2Slot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppAuthSettingsV2Slot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppAuthSettingsV2Slot.__pulumiType;
    }

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
     * Create a WebAppAuthSettingsV2Slot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppAuthSettingsV2SlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            resourceInputs["globalValidation"] = args ? args.globalValidation : undefined;
            resourceInputs["httpSettings"] = args ? args.httpSettings : undefined;
            resourceInputs["identityProviders"] = args ? args.identityProviders : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
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
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppAuthSettingsV2Slot" }, { type: "azure-native:web/v20200601:WebAppAuthSettingsV2Slot" }, { type: "azure-native:web/v20200901:WebAppAuthSettingsV2Slot" }, { type: "azure-native:web/v20201001:WebAppAuthSettingsV2Slot" }, { type: "azure-native:web/v20201201:WebAppAuthSettingsV2Slot" }, { type: "azure-native:web/v20210101:WebAppAuthSettingsV2Slot" }, { type: "azure-native:web/v20210115:WebAppAuthSettingsV2Slot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppAuthSettingsV2Slot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppAuthSettingsV2Slot resource.
 */
export interface WebAppAuthSettingsV2SlotArgs {
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
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    slot: pulumi.Input<string>;
}