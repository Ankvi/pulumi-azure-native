import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a credential set resource for a container registry.
 */
export class CredentialSet extends pulumi.CustomResource {
    /**
     * Get an existing CredentialSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CredentialSet {
        return new CredentialSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20230601preview:CredentialSet';

    /**
     * Returns true if the given object is an instance of CredentialSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CredentialSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CredentialSet.__pulumiType;
    }

    /**
     * List of authentication credentials stored for an upstream.
     * Usually consists of a primary and an optional secondary credential.
     */
    public readonly authCredentials!: pulumi.Output<types.outputs.AuthCredentialResponse[] | undefined>;
    /**
     * The creation date of credential store resource.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Identities associated with the resource. This is used to access the KeyVault secrets.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityPropertiesResponse | undefined>;
    /**
     * The credentials are stored for this upstream or login server.
     */
    public readonly loginServer!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CredentialSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CredentialSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authCredentials"] = args ? args.authCredentials : undefined;
            resourceInputs["credentialSetName"] = args ? args.credentialSetName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["loginServer"] = args ? args.loginServer : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authCredentials"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["loginServer"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:CredentialSet" }, { type: "azure-native:containerregistry/v20230101preview:CredentialSet" }, { type: "azure-native:containerregistry/v20230701:CredentialSet" }, { type: "azure-native:containerregistry/v20230801preview:CredentialSet" }, { type: "azure-native:containerregistry/v20231101preview:CredentialSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CredentialSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CredentialSet resource.
 */
export interface CredentialSetArgs {
    /**
     * List of authentication credentials stored for an upstream.
     * Usually consists of a primary and an optional secondary credential.
     */
    authCredentials?: pulumi.Input<pulumi.Input<types.inputs.AuthCredentialArgs>[]>;
    /**
     * The name of the credential set.
     */
    credentialSetName?: pulumi.Input<string>;
    /**
     * Identities associated with the resource. This is used to access the KeyVault secrets.
     */
    identity?: pulumi.Input<types.inputs.IdentityPropertiesArgs>;
    /**
     * The credentials are stored for this upstream or login server.
     */
    loginServer?: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}