import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Authorization access policy contract.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AuthorizationAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizationAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AuthorizationAccessPolicy {
        return new AuthorizationAccessPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:AuthorizationAccessPolicy';

    /**
     * Returns true if the given object is an instance of AuthorizationAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthorizationAccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthorizationAccessPolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Object Id
     */
    public readonly objectId!: pulumi.Output<string | undefined>;
    /**
     * The Tenant Id
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AuthorizationAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationAccessPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.authorizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationId'");
            }
            if ((!args || args.authorizationProviderId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationProviderId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["authorizationAccessPolicyId"] = args ? args.authorizationAccessPolicyId : undefined;
            resourceInputs["authorizationId"] = args ? args.authorizationId : undefined;
            resourceInputs["authorizationProviderId"] = args ? args.authorizationProviderId : undefined;
            resourceInputs["objectId"] = args ? args.objectId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20220401preview:AuthorizationAccessPolicy" }, { type: "azure-native:apimanagement/v20220801:AuthorizationAccessPolicy" }, { type: "azure-native:apimanagement/v20220901preview:AuthorizationAccessPolicy" }, { type: "azure-native:apimanagement/v20230301preview:AuthorizationAccessPolicy" }, { type: "azure-native:apimanagement/v20230501preview:AuthorizationAccessPolicy" }, { type: "azure-native:apimanagement/v20230901preview:AuthorizationAccessPolicy" }, { type: "azure-native:apimanagement/v20240501:AuthorizationAccessPolicy" }, { type: "azure-native:apimanagement/v20240601preview:AuthorizationAccessPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AuthorizationAccessPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AuthorizationAccessPolicy resource.
 */
export interface AuthorizationAccessPolicyArgs {
    /**
     * Identifier of the authorization access policy.
     */
    authorizationAccessPolicyId?: pulumi.Input<string>;
    /**
     * Identifier of the authorization.
     */
    authorizationId: pulumi.Input<string>;
    /**
     * Identifier of the authorization provider.
     */
    authorizationProviderId: pulumi.Input<string>;
    /**
     * The Object Id
     */
    objectId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The Tenant Id
     */
    tenantId?: pulumi.Input<string>;
}