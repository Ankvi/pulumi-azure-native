import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Policy Contract details.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01.
 */
export class GraphQLApiResolverPolicy extends pulumi.CustomResource {
    /**
     * Get an existing GraphQLApiResolverPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GraphQLApiResolverPolicy {
        return new GraphQLApiResolverPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:GraphQLApiResolverPolicy';

    /**
     * Returns true if the given object is an instance of GraphQLApiResolverPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GraphQLApiResolverPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GraphQLApiResolverPolicy.__pulumiType;
    }

    /**
     * Format of the policyContent.
     */
    public readonly format!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Contents of the Policy as defined by the format.
     */
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a GraphQLApiResolverPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GraphQLApiResolverPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.resolverId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resolverId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["format"] = (args ? args.format : undefined) ?? "xml";
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["resolverId"] = args ? args.resolverId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["format"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20220801:GraphQLApiResolverPolicy" }, { type: "azure-native:apimanagement/v20220901preview:GraphQLApiResolverPolicy" }, { type: "azure-native:apimanagement/v20230301preview:GraphQLApiResolverPolicy" }, { type: "azure-native:apimanagement/v20230501preview:GraphQLApiResolverPolicy" }, { type: "azure-native:apimanagement/v20230901preview:GraphQLApiResolverPolicy" }, { type: "azure-native:apimanagement/v20240501:GraphQLApiResolverPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GraphQLApiResolverPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GraphQLApiResolverPolicy resource.
 */
export interface GraphQLApiResolverPolicyArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Format of the policyContent.
     */
    format?: pulumi.Input<string | types.enums.PolicyContentFormat>;
    /**
     * The identifier of the Policy.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance.
     */
    resolverId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Contents of the Policy as defined by the format.
     */
    value: pulumi.Input<string>;
}