import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a token for a container registry.
 */
export class Token extends pulumi.CustomResource {
    /**
     * Get an existing Token resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Token {
        return new Token(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20230801preview:Token';

    /**
     * Returns true if the given object is an instance of Token.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Token {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Token.__pulumiType;
    }

    /**
     * The creation date of scope map.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The credentials that can be used for authenticating the token.
     */
    public readonly credentials!: pulumi.Output<types.outputs.TokenCredentialsPropertiesResponse | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource ID of the scope map to which the token will be associated with.
     */
    public readonly scopeMapId!: pulumi.Output<string | undefined>;
    /**
     * The status of the token example enabled or disabled.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Token resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TokenArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopeMapId"] = args ? args.scopeMapId : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tokenName"] = args ? args.tokenName : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scopeMapId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:Token" }, { type: "azure-native:containerregistry/v20190501preview:Token" }, { type: "azure-native:containerregistry/v20201101preview:Token" }, { type: "azure-native:containerregistry/v20210601preview:Token" }, { type: "azure-native:containerregistry/v20210801preview:Token" }, { type: "azure-native:containerregistry/v20211201preview:Token" }, { type: "azure-native:containerregistry/v20220201preview:Token" }, { type: "azure-native:containerregistry/v20221201:Token" }, { type: "azure-native:containerregistry/v20230101preview:Token" }, { type: "azure-native:containerregistry/v20230601preview:Token" }, { type: "azure-native:containerregistry/v20230701:Token" }, { type: "azure-native:containerregistry/v20231101preview:Token" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Token.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Token resource.
 */
export interface TokenArgs {
    /**
     * The credentials that can be used for authenticating the token.
     */
    credentials?: pulumi.Input<types.inputs.TokenCredentialsPropertiesArgs>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource ID of the scope map to which the token will be associated with.
     */
    scopeMapId?: pulumi.Input<string>;
    /**
     * The status of the token example enabled or disabled.
     */
    status?: pulumi.Input<string | types.enums.TokenStatus>;
    /**
     * The name of the token.
     */
    tokenName?: pulumi.Input<string>;
}
