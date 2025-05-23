import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Identity Provider details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class IdentityProvider extends pulumi.CustomResource {
    /**
     * Get an existing IdentityProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IdentityProvider {
        return new IdentityProvider(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:IdentityProvider';

    /**
     * Returns true if the given object is an instance of IdentityProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityProvider.__pulumiType;
    }

    /**
     * List of Allowed Tenants when configuring Azure Active Directory login.
     */
    public readonly allowedTenants!: pulumi.Output<string[] | undefined>;
    /**
     * OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
     */
    public readonly authority!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * The client library to be used in the developer portal. Only applies to AAD and AAD B2C Identity Provider.
     */
    public readonly clientLibrary!: pulumi.Output<string | undefined>;
    /**
     * Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    public readonly clientSecret!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
     */
    public readonly passwordResetPolicyName!: pulumi.Output<string | undefined>;
    /**
     * Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
     */
    public readonly profileEditingPolicyName!: pulumi.Output<string | undefined>;
    /**
     * Signin Policy Name. Only applies to AAD B2C Identity Provider.
     */
    public readonly signinPolicyName!: pulumi.Output<string | undefined>;
    /**
     * The TenantId to use instead of Common when logging into Active Directory
     */
    public readonly signinTenant!: pulumi.Output<string | undefined>;
    /**
     * Signup Policy Name. Only applies to AAD B2C Identity Provider.
     */
    public readonly signupPolicyName!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a IdentityProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityProviderArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientId'");
            }
            if ((!args || args.clientSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientSecret'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["allowedTenants"] = args ? args.allowedTenants : undefined;
            resourceInputs["authority"] = args ? args.authority : undefined;
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientLibrary"] = args ? args.clientLibrary : undefined;
            resourceInputs["clientSecret"] = args ? args.clientSecret : undefined;
            resourceInputs["identityProviderName"] = args ? args.identityProviderName : undefined;
            resourceInputs["passwordResetPolicyName"] = args ? args.passwordResetPolicyName : undefined;
            resourceInputs["profileEditingPolicyName"] = args ? args.profileEditingPolicyName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["signinPolicyName"] = args ? args.signinPolicyName : undefined;
            resourceInputs["signinTenant"] = args ? args.signinTenant : undefined;
            resourceInputs["signupPolicyName"] = args ? args.signupPolicyName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        } else {
            resourceInputs["allowedTenants"] = undefined /*out*/;
            resourceInputs["authority"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clientId"] = undefined /*out*/;
            resourceInputs["clientLibrary"] = undefined /*out*/;
            resourceInputs["clientSecret"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["passwordResetPolicyName"] = undefined /*out*/;
            resourceInputs["profileEditingPolicyName"] = undefined /*out*/;
            resourceInputs["signinPolicyName"] = undefined /*out*/;
            resourceInputs["signinTenant"] = undefined /*out*/;
            resourceInputs["signupPolicyName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20160707:IdentityProvider" }, { type: "azure-native:apimanagement/v20161010:IdentityProvider" }, { type: "azure-native:apimanagement/v20170301:IdentityProvider" }, { type: "azure-native:apimanagement/v20180101:IdentityProvider" }, { type: "azure-native:apimanagement/v20180601preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20190101:IdentityProvider" }, { type: "azure-native:apimanagement/v20191201:IdentityProvider" }, { type: "azure-native:apimanagement/v20191201preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20200601preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20201201:IdentityProvider" }, { type: "azure-native:apimanagement/v20210101preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20210401preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20210801:IdentityProvider" }, { type: "azure-native:apimanagement/v20211201preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20220401preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20220801:IdentityProvider" }, { type: "azure-native:apimanagement/v20220901preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20230301preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20230501preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20230901preview:IdentityProvider" }, { type: "azure-native:apimanagement/v20240501:IdentityProvider" }, { type: "azure-native:apimanagement/v20240601preview:IdentityProvider" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IdentityProvider.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IdentityProvider resource.
 */
export interface IdentityProviderArgs {
    /**
     * List of Allowed Tenants when configuring Azure Active Directory login.
     */
    allowedTenants?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
     */
    authority?: pulumi.Input<string>;
    /**
     * Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
     */
    clientId: pulumi.Input<string>;
    /**
     * The client library to be used in the developer portal. Only applies to AAD and AAD B2C Identity Provider.
     */
    clientLibrary?: pulumi.Input<string>;
    /**
     * Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    clientSecret: pulumi.Input<string>;
    /**
     * Identity Provider Type identifier.
     */
    identityProviderName?: pulumi.Input<string>;
    /**
     * Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
     */
    passwordResetPolicyName?: pulumi.Input<string>;
    /**
     * Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
     */
    profileEditingPolicyName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Signin Policy Name. Only applies to AAD B2C Identity Provider.
     */
    signinPolicyName?: pulumi.Input<string>;
    /**
     * The TenantId to use instead of Common when logging into Active Directory
     */
    signinTenant?: pulumi.Input<string>;
    /**
     * Signup Policy Name. Only applies to AAD B2C Identity Provider.
     */
    signupPolicyName?: pulumi.Input<string>;
    /**
     * Identity Provider Type identifier.
     */
    type?: pulumi.Input<string | types.enums.IdentityProviderType>;
}