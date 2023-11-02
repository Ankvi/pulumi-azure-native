import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The resource that defines the source location where the artifacts are located.
 * Azure REST API version: 2019-11-01-preview. Prior API version in Azure Native 1.x: 2019-11-01-preview.
 */
export class ArtifactSource extends pulumi.CustomResource {
    /**
     * Get an existing ArtifactSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ArtifactSource {
        return new ArtifactSource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deploymentmanager:ArtifactSource';

    /**
     * Returns true if the given object is an instance of ArtifactSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ArtifactSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ArtifactSource.__pulumiType;
    }

    /**
     * The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
     */
    public readonly artifactRoot!: pulumi.Output<string | undefined>;
    /**
     * The authentication method to use to access the artifact source.
     */
    public readonly authentication!: pulumi.Output<types.outputs.SasAuthenticationResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of artifact source used.
     */
    public readonly sourceType!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ArtifactSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArtifactSourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.authentication === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authentication'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceType'");
            }
            resourceInputs["artifactRoot"] = args ? args.artifactRoot : undefined;
            resourceInputs["artifactSourceName"] = args ? args.artifactSourceName : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceType"] = args ? args.sourceType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["artifactRoot"] = undefined /*out*/;
            resourceInputs["authentication"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sourceType"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deploymentmanager/v20180901preview:ArtifactSource" }, { type: "azure-native:deploymentmanager/v20191101preview:ArtifactSource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ArtifactSource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ArtifactSource resource.
 */
export interface ArtifactSourceArgs {
    /**
     * The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
     */
    artifactRoot?: pulumi.Input<string>;
    /**
     * The name of the artifact source.
     */
    artifactSourceName?: pulumi.Input<string>;
    /**
     * The authentication method to use to access the artifact source.
     */
    authentication: pulumi.Input<types.inputs.SasAuthenticationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The type of artifact source used.
     */
    sourceType: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
