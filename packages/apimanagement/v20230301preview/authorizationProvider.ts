import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Authorization Provider contract.
 */
export class AuthorizationProvider extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizationProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AuthorizationProvider {
        return new AuthorizationProvider(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20230301preview:AuthorizationProvider';

    /**
     * Returns true if the given object is an instance of AuthorizationProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthorizationProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthorizationProvider.__pulumiType;
    }

    /**
     * Authorization Provider name. Must be 1 to 300 characters long.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Identity provider name. Must be 1 to 300 characters long.
     */
    public readonly identityProvider!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * OAuth2 settings
     */
    public readonly oauth2!: pulumi.Output<types.outputs.AuthorizationProviderOAuth2SettingsResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AuthorizationProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationProviderArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["authorizationProviderId"] = args ? args.authorizationProviderId : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["identityProvider"] = args ? args.identityProvider : undefined;
            resourceInputs["oauth2"] = args ? args.oauth2 : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["identityProvider"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["oauth2"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:AuthorizationProvider" }, { type: "azure-native:apimanagement/v20220401preview:AuthorizationProvider" }, { type: "azure-native:apimanagement/v20220801:AuthorizationProvider" }, { type: "azure-native:apimanagement/v20220901preview:AuthorizationProvider" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AuthorizationProvider.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AuthorizationProvider resource.
 */
export interface AuthorizationProviderArgs {
    /**
     * Identifier of the authorization provider.
     */
    authorizationProviderId?: pulumi.Input<string>;
    /**
     * Authorization Provider name. Must be 1 to 300 characters long.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Identity provider name. Must be 1 to 300 characters long.
     */
    identityProvider?: pulumi.Input<string>;
    /**
     * OAuth2 settings
     */
    oauth2?: pulumi.Input<types.inputs.AuthorizationProviderOAuth2SettingsArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
