import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Properties of an artifact source.
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
    public static readonly __pulumiType = 'azure-native:devtestlab/v20180915:ArtifactSource';

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
     * The folder containing Azure Resource Manager templates.
     */
    public readonly armTemplateFolderPath!: pulumi.Output<string | undefined>;
    /**
     * The artifact source's branch reference.
     */
    public readonly branchRef!: pulumi.Output<string | undefined>;
    /**
     * The artifact source's creation date.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * The artifact source's display name.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The folder containing artifacts.
     */
    public readonly folderPath!: pulumi.Output<string | undefined>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The security token to authenticate to the artifact source.
     */
    public readonly securityToken!: pulumi.Output<string | undefined>;
    /**
     * The artifact source's type.
     */
    public readonly sourceType!: pulumi.Output<string | undefined>;
    /**
     * Indicates if the artifact source is enabled (values: Enabled, Disabled).
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public /*out*/ readonly uniqueIdentifier!: pulumi.Output<string>;
    /**
     * The artifact source's URI.
     */
    public readonly uri!: pulumi.Output<string | undefined>;

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
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["armTemplateFolderPath"] = args ? args.armTemplateFolderPath : undefined;
            resourceInputs["branchRef"] = args ? args.branchRef : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["folderPath"] = args ? args.folderPath : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityToken"] = args ? args.securityToken : undefined;
            resourceInputs["sourceType"] = args ? args.sourceType : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uri"] = args ? args.uri : undefined;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        } else {
            resourceInputs["armTemplateFolderPath"] = undefined /*out*/;
            resourceInputs["branchRef"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["folderPath"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["securityToken"] = undefined /*out*/;
            resourceInputs["sourceType"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devtestlab:ArtifactSource" }, { type: "azure-native:devtestlab/v20150521preview:ArtifactSource" }, { type: "azure-native:devtestlab/v20160515:ArtifactSource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ArtifactSource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ArtifactSource resource.
 */
export interface ArtifactSourceArgs {
    /**
     * The folder containing Azure Resource Manager templates.
     */
    armTemplateFolderPath?: pulumi.Input<string>;
    /**
     * The artifact source's branch reference.
     */
    branchRef?: pulumi.Input<string>;
    /**
     * The artifact source's display name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The folder containing artifacts.
     */
    folderPath?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the artifact source.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security token to authenticate to the artifact source.
     */
    securityToken?: pulumi.Input<string>;
    /**
     * The artifact source's type.
     */
    sourceType?: pulumi.Input<string | types.enums.SourceControlType>;
    /**
     * Indicates if the artifact source is enabled (values: Enabled, Disabled).
     */
    status?: pulumi.Input<string | types.enums.EnableStatus>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The artifact source's URI.
     */
    uri?: pulumi.Input<string>;
}