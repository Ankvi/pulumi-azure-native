import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Authorization contract.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Authorization extends pulumi.CustomResource {
    /**
     * Get an existing Authorization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Authorization {
        return new Authorization(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:Authorization';

    /**
     * Returns true if the given object is an instance of Authorization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Authorization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Authorization.__pulumiType;
    }

    /**
     * Authorization type options
     */
    public readonly authorizationType!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Authorization error details.
     */
    public readonly error!: pulumi.Output<types.outputs.AuthorizationErrorResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * OAuth2 grant type options
     */
    public readonly oAuth2GrantType!: pulumi.Output<string | undefined>;
    /**
     * Authorization parameters
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Status of the Authorization
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Authorization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.authorizationProviderId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationProviderId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["authorizationId"] = args ? args.authorizationId : undefined;
            resourceInputs["authorizationProviderId"] = args ? args.authorizationProviderId : undefined;
            resourceInputs["authorizationType"] = args ? args.authorizationType : undefined;
            resourceInputs["error"] = args ? args.error : undefined;
            resourceInputs["oAuth2GrantType"] = args ? args.oAuth2GrantType : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authorizationType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["oAuth2GrantType"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20220401preview:Authorization" }, { type: "azure-native:apimanagement/v20220801:Authorization" }, { type: "azure-native:apimanagement/v20220901preview:Authorization" }, { type: "azure-native:apimanagement/v20230301preview:Authorization" }, { type: "azure-native:apimanagement/v20230501preview:Authorization" }, { type: "azure-native:apimanagement/v20230901preview:Authorization" }, { type: "azure-native:apimanagement/v20240501:Authorization" }, { type: "azure-native:apimanagement/v20240601preview:Authorization" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Authorization.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Authorization resource.
 */
export interface AuthorizationArgs {
    /**
     * Identifier of the authorization.
     */
    authorizationId?: pulumi.Input<string>;
    /**
     * Identifier of the authorization provider.
     */
    authorizationProviderId: pulumi.Input<string>;
    /**
     * Authorization type options
     */
    authorizationType?: pulumi.Input<string | types.enums.AuthorizationType>;
    /**
     * Authorization error details.
     */
    error?: pulumi.Input<types.inputs.AuthorizationErrorArgs>;
    /**
     * OAuth2 grant type options
     */
    oAuth2GrantType?: pulumi.Input<string | types.enums.OAuth2GrantType>;
    /**
     * Authorization parameters
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Status of the Authorization
     */
    status?: pulumi.Input<string>;
}